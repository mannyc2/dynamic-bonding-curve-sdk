import {
    fromLegacyKeypair,
    fromLegacyPublicKey,
    fromLegacyTransactionInstruction,
} from '@solana/compat'
import {
    addSignersToTransactionMessage,
    appendTransactionMessageInstructions,
    compileTransactionMessage,
    createSignerFromKeyPair,
    createSolanaRpc,
    createSolanaRpcSubscriptions,
    createTransactionMessage,
    type KeyPairSigner,
    pipe,
    sendAndConfirmTransactionFactory,
    setTransactionMessageFeePayer,
    setTransactionMessageFeePayerSigner,
    setTransactionMessageLifetimeUsingBlockhash,
    signTransactionMessageWithSigners,
    type Blockhash,
    type TransactionSigner,
} from '@solana/kit'
import { Connection, Keypair, PublicKey, Transaction } from '@solana/web3.js'
import { expect } from 'vitest'
import { isKitTransactionSigner } from '../../src/kit/helpers'
import type { KitTransactionPlan } from '../../src/kit'
import { LOCALNET_RPC_URL } from './common'

const LOCALNET_WS_URL = 'ws://127.0.0.1:8900'

const rpc = createSolanaRpc(LOCALNET_RPC_URL)
const rpcSubscriptions = createSolanaRpcSubscriptions(LOCALNET_WS_URL)
const sendAndConfirm = sendAndConfirmTransactionFactory({
    rpc: rpc as never,
    rpcSubscriptions: rpcSubscriptions as never,
})

/**
 * Convert a legacy Keypair to a Kit KeyPairSigner.
 * Lives in test utils because it depends on @solana/web3.js and @solana/compat.
 */
export async function createKitSignerFromLegacyKeypair(
    keypair: Keypair
): Promise<KeyPairSigner> {
    return createSignerFromKeyPair(await fromLegacyKeypair(keypair))
}

export async function executeKitPlan(
    plan: KitTransactionPlan,
    feePayer: TransactionSigner
): Promise<void> {
    expectKitPlanToReuseSignerInstances(plan)

    const { value: latestBlockhash } = await rpc.getLatestBlockhash().send()
    const message = pipe(
        createTransactionMessage({ version: 0 }),
        (transaction) =>
            setTransactionMessageFeePayerSigner(feePayer, transaction),
        (transaction) =>
            setTransactionMessageLifetimeUsingBlockhash(
                latestBlockhash,
                transaction
            ),
        (transaction) =>
            appendTransactionMessageInstructions(
                plan.instructions,
                transaction
            ),
        (transaction) =>
            addSignersToTransactionMessage(plan.signers, transaction)
    )

    const signedTransaction = await signTransactionMessageWithSigners(message)
    await sendAndConfirm(signedTransaction as never, {
        commitment: 'confirmed',
    })
}

export async function expectKitPlanToCompile(
    connection: Connection,
    plan: KitTransactionPlan,
    feePayer: PublicKey
): Promise<void> {
    const latestBlockhash = await connection.getLatestBlockhash()
    const message = pipe(
        createTransactionMessage({ version: 0 }),
        (transaction) =>
            setTransactionMessageFeePayer(
                fromLegacyPublicKey(feePayer),
                transaction
            ),
        (transaction) =>
            setTransactionMessageLifetimeUsingBlockhash(
                {
                    blockhash: latestBlockhash.blockhash as Blockhash,
                    lastValidBlockHeight: BigInt(
                        latestBlockhash.lastValidBlockHeight
                    ),
                },
                transaction
            ),
        (transaction) =>
            appendTransactionMessageInstructions(plan.instructions, transaction)
    )

    expect(compileTransactionMessage(message)).toBeDefined()
}

/**
 * Strip signer metadata from account metas so Codama-built instructions
 * (which carry TransactionSigner objects) can be compared with
 * legacy-converted instructions (which only have address + role).
 */
function stripSignerMeta(
    instructions: KitTransactionPlan['instructions']
): unknown[] {
    return instructions.map((ix) => ({
        programAddress: ix.programAddress,
        data: ix.data,
        accounts: (ix.accounts ?? []).map(
            (acc: { address: string; role: number }) => ({
                address: acc.address,
                role: acc.role,
            })
        ),
    }))
}

export async function expectKitPlanToMatchLegacyTransaction(
    connection: Connection,
    legacyTransaction: Transaction,
    plan: KitTransactionPlan,
    feePayer: PublicKey,
    expectedSigners: readonly TransactionSigner[] = []
): Promise<void> {
    const legacyInstructions = legacyTransaction.instructions.map(
        fromLegacyTransactionInstruction
    )
    expect(stripSignerMeta(plan.instructions)).toEqual(
        stripSignerMeta(legacyInstructions)
    )
    expect(plan.signers.map((signer) => signer.address).sort()).toEqual(
        expectedSigners.map((signer) => signer.address).sort()
    )
    expectKitPlanToReuseSignerInstances(plan)

    await expectKitPlanToCompile(connection, plan, feePayer)
}

export function expectKitPlanToReuseSignerInstances(
    plan: KitTransactionPlan
): void {
    const signerByAddress = new Map<string, TransactionSigner>()
    const duplicateAddresses = new Set<string>()

    const recordSigner = (signer: TransactionSigner): void => {
        const existingSigner = signerByAddress.get(signer.address)
        if (existingSigner && existingSigner !== signer) {
            duplicateAddresses.add(signer.address)
            return
        }

        signerByAddress.set(signer.address, signer)
    }

    for (const signer of plan.signers) {
        recordSigner(signer)
    }

    for (const instruction of plan.instructions) {
        for (const account of instruction.accounts ?? []) {
            if (isKitTransactionSigner(account.address)) {
                recordSigner(account.address)
            }
        }
    }

    expect(
        [...duplicateAddresses],
        'Each signer address in a Kit plan should reuse the same TransactionSigner instance'
    ).toEqual([])
}
