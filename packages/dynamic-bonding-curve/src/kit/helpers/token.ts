import {
    type Address,
    type Instruction,
    type Rpc,
    type SolanaRpcApi,
    type TransactionSigner,
    createNoopSigner,
    fetchEncodedAccount,
} from '@solana/kit'
import { getTransferSolInstruction } from '@solana-program/system'
import {
    findAssociatedTokenPda,
    getCloseAccountInstruction,
    getCreateAssociatedTokenIdempotentInstruction,
    getSyncNativeInstruction,
} from '@solana-program/token'
import {
    NATIVE_MINT_ADDRESS,
    TOKEN_2022_PROGRAM_ADDRESS,
    TOKEN_PROGRAM_ADDRESS,
} from '../constants'
import { TokenType } from '../../types'

export {
    ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
    NATIVE_MINT_ADDRESS,
    TOKEN_2022_PROGRAM_ADDRESS,
    TOKEN_PROGRAM_ADDRESS,
} from '../constants'

export function getTokenProgramAddress(tokenType: TokenType): Address {
    return tokenType === TokenType.SPL
        ? TOKEN_PROGRAM_ADDRESS
        : TOKEN_2022_PROGRAM_ADDRESS
}

export async function getTokenTypeForMint(
    rpc: Rpc<SolanaRpcApi>,
    mint: Address
): Promise<TokenType> {
    if (mint === NATIVE_MINT_ADDRESS) {
        return TokenType.SPL
    }

    const account = await fetchEncodedAccount(rpc, mint)
    if (!account.exists) {
        throw new Error(`Mint account not found: ${mint}`)
    }

    return account.programAddress === TOKEN_PROGRAM_ADDRESS
        ? TokenType.SPL
        : TokenType.Token2022
}

/**
 * Resolve a value that is either an Address or a TransactionSigner into a
 * TransactionSigner. When given a plain Address, wraps it with createNoopSigner.
 * When given an existing TransactionSigner, returns it as-is (preserving identity).
 */
function toSigner(value: Address | TransactionSigner): TransactionSigner {
    return typeof value === 'string'
        ? createNoopSigner(value as Address)
        : value
}

function toAddress(value: Address | TransactionSigner): Address {
    return typeof value === 'string' ? (value as Address) : value.address
}

/**
 * Build an idempotent create-ATA instruction.
 * Always emits the instruction — the idempotent variant is a no-op when the account exists.
 * Accepts Address or TransactionSigner for payer — reuses existing signer to avoid duplicates.
 */
export async function createAssociatedTokenAccountIdempotentInstruction(
    payer: Address | TransactionSigner,
    owner: Address,
    mint: Address,
    tokenProgram: Address
): Promise<{ ata: Address; instruction: Instruction }> {
    const [ata] = await findAssociatedTokenPda({
        owner,
        tokenProgram,
        mint,
    })

    const instruction = getCreateAssociatedTokenIdempotentInstruction({
        payer: toSigner(payer),
        ata,
        owner,
        mint,
        tokenProgram,
    })

    return { ata, instruction: instruction as Instruction }
}

/**
 * Build SOL wrap instructions: transfer SOL + syncNative.
 * Accepts Address or TransactionSigner for source — reuses existing signer to avoid duplicates.
 */
export function wrapSolInstructions(
    from: Address | TransactionSigner,
    to: Address,
    amount: bigint
): Instruction[] {
    const transferIx = getTransferSolInstruction({
        source: toSigner(from),
        destination: to,
        amount,
    })

    const syncNativeIx = getSyncNativeInstruction({
        account: to,
    })

    return [transferIx as Instruction, syncNativeIx as Instruction]
}

/**
 * Build SOL unwrap instruction: close the wSOL ATA to receive SOL.
 * Accepts Address or TransactionSigner for owner — reuses existing signer to avoid duplicates.
 */
export async function unwrapSolInstruction(
    owner: Address | TransactionSigner,
    receiver: Address
): Promise<Instruction> {
    const ownerAddress = toAddress(owner)
    const [wSolAta] = await findAssociatedTokenPda({
        owner: ownerAddress,
        tokenProgram: TOKEN_PROGRAM_ADDRESS,
        mint: NATIVE_MINT_ADDRESS,
    })

    return getCloseAccountInstruction({
        account: wSolAta,
        destination: receiver,
        owner: toSigner(owner),
    }) as Instruction
}

/**
 * Prepare token account instructions for a swap or fee claim.
 * Returns the ATA address and any setup/cleanup instructions.
 * Accepts TransactionSigner for payer and owner to avoid duplicate signer instances.
 */
export async function prepareTokenAccountInstructions(
    owner: Address | TransactionSigner,
    payer: Address | TransactionSigner,
    mint: Address,
    amount: bigint,
    tokenProgram: Address
): Promise<{
    tokenAccount: Address
    preInstructions: Instruction[]
    postInstructions: Instruction[]
}> {
    const ownerAddress = toAddress(owner)
    const { ata, instruction: createAtaIx } =
        await createAssociatedTokenAccountIdempotentInstruction(
            payer,
            ownerAddress,
            mint,
            tokenProgram
        )

    const preInstructions: Instruction[] = [createAtaIx]
    const postInstructions: Instruction[] = []

    if (mint === NATIVE_MINT_ADDRESS) {
        preInstructions.push(...wrapSolInstructions(owner, ata, amount))
        postInstructions.push(await unwrapSolInstruction(owner, ownerAddress))
    }

    return { tokenAccount: ata, preInstructions, postInstructions }
}
