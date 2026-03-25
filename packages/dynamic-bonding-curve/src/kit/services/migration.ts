import {
    type Address,
    type Instruction,
    type Rpc,
    type SolanaRpcApi,
    fetchEncodedAccount,
    generateKeyPairSigner,
} from '@solana/kit'
import { TokenType } from '../../types'
import { findAssociatedTokenPda } from '@solana-program/token'
import { getCreateLockerInstructionAsync } from '../generated/instructions/createLocker'
import { getWithdrawLeftoverInstructionAsync } from '../generated/instructions/withdrawLeftover'
import { getMigrationMeteoraDammCreateMetadataInstructionAsync } from '../generated/instructions/migrationMeteoraDammCreateMetadata'
import { getMigrateMeteoraDammInstruction } from '../generated/instructions/migrateMeteoraDamm'
import { getMigrateMeteoraDammLockLpTokenInstructionAsync } from '../generated/instructions/migrateMeteoraDammLockLpToken'
import { getMigrateMeteoraDammClaimLpTokenInstructionAsync } from '../generated/instructions/migrateMeteoraDammClaimLpToken'
import { getMigrationDammV2Instruction } from '../generated/instructions/migrationDammV2'
import {
    ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
    COMPUTE_BUDGET_PROGRAM_ADDRESS,
    DAMM_V1_PROGRAM_ADDRESS,
    DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
    METAPLEX_PROGRAM_ADDRESS,
    POOL_AUTHORITY_ADDRESS,
    SYSTEM_PROGRAM_ADDRESS,
    SYSVAR_RENT_ADDRESS,
    TOKEN_2022_PROGRAM_ADDRESS,
    TOKEN_PROGRAM_ADDRESS,
    VAULT_PROGRAM_ADDRESS,
} from '../constants'
import {
    collectKitTransactionSigners,
    createAssociatedTokenAccountIdempotentInstruction,
    findDammV1LockEscrowPda,
    findDammV1LpMintPda,
    findDammV1PoolPda,
    findDammV1ProtocolFeePda,
    findDammV1VaultLpPda,
    findDammV2EventAuthorityPda,
    findDammV2MigrationMetadataPda,
    findDammV2PoolAuthorityPda,
    findDammV2PoolPda,
    findDammV2PositionNftAccountPda,
    findDammV2PositionPda,
    findDammV2TokenVaultPda,
    findEscrowPda,
    findLockerEventAuthorityPda,
    findMintMetadataPda,
    findVaultPdas,
    getTokenProgramAddress,
    toAddress,
    toSigner,
} from '../helpers'
import {
    KitCreateDammV1MigrationMetadataParams,
    KitCreateLockerParams,
    KitDammLpTokenParams,
    KitMigrateToDammV1Params,
    KitMigrateToDammV2Params,
    KitTransactionPlan,
    KitWithdrawLeftoverParams,
} from '../types'
import { DynamicBondingCurveKitStateService } from './state'

// Vault program "initialize" discriminator: [175, 175, 109, 31, 13, 152, 155, 237]
const VAULT_INITIALIZE_DISCRIMINATOR = new Uint8Array([
    175, 175, 109, 31, 13, 152, 155, 237,
])

/**
 * Build a permissionless vault initialization instruction for the Dynamic Vault program.
 * Replicates legacy createInitializePermissionlessDynamicVaultIx.
 */
function buildVaultInitInstruction(
    vaultPda: Address,
    tokenVaultPda: Address,
    lpMintPda: Address,
    tokenMint: Address,
    payer: Address
): Instruction {
    return {
        programAddress: VAULT_PROGRAM_ADDRESS,
        accounts: [
            { address: vaultPda, role: 1 }, // writable
            { address: payer, role: 3 }, // writable signer
            { address: tokenVaultPda, role: 1 }, // writable
            { address: tokenMint, role: 0 }, // readonly
            { address: lpMintPda, role: 1 }, // writable
            { address: SYSVAR_RENT_ADDRESS, role: 0 }, // readonly
            { address: TOKEN_PROGRAM_ADDRESS, role: 0 }, // readonly
            { address: SYSTEM_PROGRAM_ADDRESS, role: 0 }, // readonly
        ],
        data: VAULT_INITIALIZE_DISCRIMINATOR,
    }
}

// DAMM V1 "create_lock_escrow" discriminator: [54, 87, 165, 19, 69, 227, 218, 224]
const CREATE_LOCK_ESCROW_DISCRIMINATOR = new Uint8Array([
    54, 87, 165, 19, 69, 227, 218, 224,
])

/**
 * Build a DAMM V1 createLockEscrow instruction.
 * Replicates legacy createLockEscrowIx from helpers/instructions.ts.
 */
function buildCreateLockEscrowInstruction(
    pool: Address,
    lockEscrow: Address,
    owner: Address,
    lpMint: Address,
    payer: Address
): Instruction {
    return {
        programAddress: DAMM_V1_PROGRAM_ADDRESS,
        accounts: [
            { address: pool, role: 0 }, // readonly
            { address: lockEscrow, role: 1 }, // writable
            { address: owner, role: 0 }, // readonly
            { address: lpMint, role: 0 }, // readonly
            { address: payer, role: 3 }, // writable signer
            { address: SYSTEM_PROGRAM_ADDRESS, role: 0 }, // readonly
        ],
        data: CREATE_LOCK_ESCROW_DISCRIMINATOR,
    }
}

type KitRpc = Rpc<SolanaRpcApi>

export class DynamicBondingCurveKitMigrationService {
    private readonly state: DynamicBondingCurveKitStateService

    constructor(private readonly rpc: KitRpc) {
        this.state = new DynamicBondingCurveKitStateService(rpc)
    }

    async createLocker(
        params: KitCreateLockerParams
    ): Promise<KitTransactionPlan> {
        const virtualPool = toAddress(params.virtualPool)
        const payer = toSigner(params.payer)

        const poolState = await this.state.getPool(virtualPool)
        const configState = await this.state.getPoolConfig(
            poolState.data.config
        )

        const tokenProgram = getTokenProgramAddress(
            configState.data.tokenType as TokenType
        )

        const lockerEventAuthority = await findLockerEventAuthorityPda()
        const escrow = await findEscrowPda(
            await (async () => {
                // base is auto-resolved by the Codama builder via findBasePda
                // but we need the escrow which depends on base
                const { findBasePda } = await import('../generated/pdas')
                const [base] = await findBasePda({ virtualPool })
                return base
            })()
        )

        const [escrowToken] = await findAssociatedTokenPda({
            owner: escrow,
            mint: poolState.data.baseMint,
            tokenProgram,
        })

        const { instruction: createEscrowTokenIx } =
            await createAssociatedTokenAccountIdempotentInstruction(
                payer,
                escrow,
                poolState.data.baseMint,
                tokenProgram
            )

        const ix = await getCreateLockerInstructionAsync({
            virtualPool,
            config: poolState.data.config,
            baseVault: poolState.data.baseVault,
            baseMint: poolState.data.baseMint,
            creator: poolState.data.creator,
            escrow,
            escrowToken,
            payer,
            tokenProgram,
            lockerEventAuthority,
        })

        return {
            instructions: [createEscrowTokenIx, ix],
            signers: collectKitTransactionSigners(payer),
        }
    }

    async withdrawLeftover(
        params: KitWithdrawLeftoverParams
    ): Promise<KitTransactionPlan> {
        const virtualPool = toAddress(params.virtualPool)
        const payer = toSigner(params.payer)

        const poolState = await this.state.getPool(virtualPool)
        const configState = await this.state.getPoolConfig(
            poolState.data.config
        )

        const tokenBaseProgram = getTokenProgramAddress(
            configState.data.tokenType as TokenType
        )

        const { ata: tokenBaseAccount, instruction: createBaseTokenAccountIx } =
            await createAssociatedTokenAccountIdempotentInstruction(
                payer,
                configState.data.leftoverReceiver,
                poolState.data.baseMint,
                tokenBaseProgram
            )

        const ix = await getWithdrawLeftoverInstructionAsync({
            config: poolState.data.config,
            virtualPool,
            tokenBaseAccount,
            baseVault: poolState.data.baseVault,
            baseMint: poolState.data.baseMint,
            leftoverReceiver: configState.data.leftoverReceiver,
            tokenBaseProgram,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
        })

        return {
            instructions: [createBaseTokenAccountIx, ix],
            signers: collectKitTransactionSigners(payer),
        }
    }

    async createDammV1MigrationMetadata(
        params: KitCreateDammV1MigrationMetadataParams
    ): Promise<KitTransactionPlan> {
        const virtualPool = toAddress(params.virtualPool)
        const config = toAddress(params.config)
        const payer = toSigner(params.payer)

        const ix = await getMigrationMeteoraDammCreateMetadataInstructionAsync({
            virtualPool,
            config,
            payer,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
        })

        return {
            instructions: [ix],
            signers: collectKitTransactionSigners(payer),
        }
    }

    async migrateToDammV1(
        params: KitMigrateToDammV1Params
    ): Promise<KitTransactionPlan> {
        const virtualPool = toAddress(params.virtualPool)
        const dammConfig = toAddress(params.dammConfig)
        const payer = toSigner(params.payer)

        const poolState = await this.state.getPool(virtualPool)
        const configState = await this.state.getPoolConfig(
            poolState.data.config
        )

        const { findMigrationMetadataPda } = await import('../generated/pdas')
        const [migrationMetadata] = await findMigrationMetadataPda({
            virtualPool,
        })

        const baseMint = poolState.data.baseMint
        const quoteMint = configState.data.quoteMint

        const dammPool = await findDammV1PoolPda(
            dammConfig,
            baseMint,
            quoteMint
        )
        const lpMint = await findDammV1LpMintPda(dammPool)
        const mintMetadata = await findMintMetadataPda(lpMint)

        const [protocolTokenAFee, protocolTokenBFee] = await Promise.all([
            findDammV1ProtocolFeePda(baseMint, dammPool),
            findDammV1ProtocolFeePda(quoteMint, dammPool),
        ])

        const [aVaultPdas, bVaultPdas] = await Promise.all([
            findVaultPdas(baseMint),
            findVaultPdas(quoteMint),
        ])

        const [aVaultAccountInfo, bVaultAccountInfo] = await Promise.all([
            fetchEncodedAccount(this.rpc, aVaultPdas.vaultPda),
            fetchEncodedAccount(this.rpc, bVaultPdas.vaultPda),
        ])

        let aVaultLpMint = aVaultPdas.lpMintPda
        let bVaultLpMint = bVaultPdas.lpMintPda
        const preInstructions: Instruction[] = []

        if (!aVaultAccountInfo.exists) {
            preInstructions.push(
                buildVaultInitInstruction(
                    aVaultPdas.vaultPda,
                    aVaultPdas.tokenVaultPda,
                    aVaultPdas.lpMintPda,
                    baseMint,
                    payer.address
                )
            )
        }
        if (!bVaultAccountInfo.exists) {
            preInstructions.push(
                buildVaultInitInstruction(
                    bVaultPdas.vaultPda,
                    bVaultPdas.tokenVaultPda,
                    bVaultPdas.lpMintPda,
                    quoteMint,
                    payer.address
                )
            )
        }

        const [aVaultLp, bVaultLp] = await Promise.all([
            findDammV1VaultLpPda(aVaultPdas.vaultPda, dammPool),
            findDammV1VaultLpPda(bVaultPdas.vaultPda, dammPool),
        ])

        const [virtualPoolLp] = await findAssociatedTokenPda({
            owner: POOL_AUTHORITY_ADDRESS,
            mint: lpMint,
            tokenProgram: TOKEN_PROGRAM_ADDRESS,
        })

        // Compute budget: 500_000 CU
        const computeBudgetIx = buildSetComputeUnitLimitInstruction(500_000)

        const ix = getMigrateMeteoraDammInstruction({
            virtualPool,
            migrationMetadata,
            config: poolState.data.config,
            pool: dammPool,
            dammConfig,
            lpMint,
            tokenAMint: baseMint,
            tokenBMint: quoteMint,
            aVault: aVaultPdas.vaultPda,
            bVault: bVaultPdas.vaultPda,
            aTokenVault: aVaultPdas.tokenVaultPda,
            bTokenVault: bVaultPdas.tokenVaultPda,
            aVaultLpMint,
            bVaultLpMint,
            aVaultLp,
            bVaultLp,
            baseVault: poolState.data.baseVault,
            quoteVault: poolState.data.quoteVault,
            virtualPoolLp,
            protocolTokenAFee,
            protocolTokenBFee,
            payer,
            mintMetadata,
            metadataProgram: METAPLEX_PROGRAM_ADDRESS,
            vaultProgram: VAULT_PROGRAM_ADDRESS,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
        })

        return {
            instructions: [...preInstructions, ix, computeBudgetIx],
            signers: collectKitTransactionSigners(payer),
        }
    }

    async lockDammV1LpToken(
        params: KitDammLpTokenParams
    ): Promise<KitTransactionPlan> {
        const virtualPool = toAddress(params.virtualPool)
        const dammConfig = toAddress(params.dammConfig)
        const payer = toSigner(params.payer)
        const isPartner = params.isPartner

        const poolState = await this.state.getPool(virtualPool)
        const configState = await this.state.getPoolConfig(
            poolState.data.config
        )

        const baseMint = poolState.data.baseMint
        const quoteMint = configState.data.quoteMint

        const dammPool = await findDammV1PoolPda(
            dammConfig,
            baseMint,
            quoteMint
        )

        const { findMigrationMetadataPda } = await import('../generated/pdas')
        const [migrationMetadata] = await findMigrationMetadataPda({
            virtualPool,
        })

        const [aVaultPdas, bVaultPdas] = await Promise.all([
            findVaultPdas(baseMint),
            findVaultPdas(quoteMint),
        ])

        const [aVaultAccountInfo, bVaultAccountInfo] = await Promise.all([
            fetchEncodedAccount(this.rpc, aVaultPdas.vaultPda),
            fetchEncodedAccount(this.rpc, bVaultPdas.vaultPda),
        ])

        let aVaultLpMint = aVaultPdas.lpMintPda
        let bVaultLpMint = bVaultPdas.lpMintPda
        const preInstructions: Instruction[] = []

        if (!aVaultAccountInfo.exists) {
            preInstructions.push(
                buildVaultInitInstruction(
                    aVaultPdas.vaultPda,
                    aVaultPdas.tokenVaultPda,
                    aVaultPdas.lpMintPda,
                    baseMint,
                    payer.address
                )
            )
        }
        if (!bVaultAccountInfo.exists) {
            preInstructions.push(
                buildVaultInitInstruction(
                    bVaultPdas.vaultPda,
                    bVaultPdas.tokenVaultPda,
                    bVaultPdas.lpMintPda,
                    quoteMint,
                    payer.address
                )
            )
        }

        const [aVaultLp, bVaultLp] = await Promise.all([
            findDammV1VaultLpPda(aVaultPdas.vaultPda, dammPool),
            findDammV1VaultLpPda(bVaultPdas.vaultPda, dammPool),
        ])

        const lpMint = await findDammV1LpMintPda(dammPool)

        const owner = isPartner
            ? configState.data.feeClaimer
            : poolState.data.creator

        const lockEscrowKey = await findDammV1LockEscrowPda(dammPool, owner)

        // Create lock escrow if it doesn't exist
        const lockEscrowAccountInfo = await fetchEncodedAccount(
            this.rpc,
            lockEscrowKey
        )
        if (!lockEscrowAccountInfo.exists) {
            preInstructions.push(
                buildCreateLockEscrowInstruction(
                    dammPool,
                    lockEscrowKey,
                    owner,
                    lpMint,
                    payer.address
                )
            )
        }

        const [escrowVault] = await findAssociatedTokenPda({
            owner: lockEscrowKey,
            mint: lpMint,
            tokenProgram: TOKEN_PROGRAM_ADDRESS,
        })

        const { instruction: createEscrowVaultIx } =
            await createAssociatedTokenAccountIdempotentInstruction(
                payer,
                lockEscrowKey,
                lpMint,
                TOKEN_PROGRAM_ADDRESS
            )

        preInstructions.push(createEscrowVaultIx)

        // sourceTokens = ATA of poolAuthority for lpMint
        // Must be passed explicitly — the Codama auto-resolver uses migrationMetadata
        // as the mint seed which is incorrect.
        const [sourceTokens] = await findAssociatedTokenPda({
            owner: POOL_AUTHORITY_ADDRESS,
            mint: lpMint,
            tokenProgram: TOKEN_PROGRAM_ADDRESS,
        })

        const ix = await getMigrateMeteoraDammLockLpTokenInstructionAsync({
            virtualPool,
            migrationMetadata,
            pool: dammPool,
            lpMint,
            lockEscrow: lockEscrowKey,
            owner,
            sourceTokens,
            escrowVault,
            aVault: aVaultPdas.vaultPda,
            bVault: bVaultPdas.vaultPda,
            aVaultLp,
            bVaultLp,
            aVaultLpMint,
            bVaultLpMint,
        })

        return {
            instructions: [...preInstructions, ix],
            signers: collectKitTransactionSigners(payer),
        }
    }

    async claimDammV1LpToken(
        params: KitDammLpTokenParams
    ): Promise<KitTransactionPlan> {
        const virtualPool = toAddress(params.virtualPool)
        const dammConfig = toAddress(params.dammConfig)
        const payer = toSigner(params.payer)
        const isPartner = params.isPartner

        const poolState = await this.state.getPool(virtualPool)
        const configState = await this.state.getPoolConfig(
            poolState.data.config
        )

        const baseMint = poolState.data.baseMint
        const quoteMint = configState.data.quoteMint

        const dammPool = await findDammV1PoolPda(
            dammConfig,
            baseMint,
            quoteMint
        )

        const { findMigrationMetadataPda } = await import('../generated/pdas')
        const [migrationMetadata] = await findMigrationMetadataPda({
            virtualPool,
        })

        const lpMint = await findDammV1LpMintPda(dammPool)

        const owner = isPartner
            ? configState.data.feeClaimer
            : poolState.data.creator

        const [destinationToken] = await findAssociatedTokenPda({
            owner,
            mint: lpMint,
            tokenProgram: TOKEN_PROGRAM_ADDRESS,
        })

        const { instruction: createDestinationTokenIx } =
            await createAssociatedTokenAccountIdempotentInstruction(
                payer,
                owner,
                lpMint,
                TOKEN_PROGRAM_ADDRESS
            )

        // sourceToken = ATA of poolAuthority for lpMint
        // destinationToken = ATA of owner for lpMint
        // Must be passed explicitly — Codama auto-resolution derives them incorrectly.
        const [sourceToken] = await findAssociatedTokenPda({
            owner: POOL_AUTHORITY_ADDRESS,
            mint: lpMint,
            tokenProgram: TOKEN_PROGRAM_ADDRESS,
        })

        const ix = await getMigrateMeteoraDammClaimLpTokenInstructionAsync({
            virtualPool,
            migrationMetadata,
            lpMint,
            sourceToken,
            destinationToken,
            owner,
            sender: payer,
        })

        return {
            instructions: [createDestinationTokenIx, ix],
            signers: collectKitTransactionSigners(payer),
        }
    }

    async migrateToDammV2(
        params: KitMigrateToDammV2Params
    ): Promise<KitTransactionPlan> {
        const virtualPool = toAddress(params.virtualPool)
        const dammConfig = toAddress(params.dammConfig)
        const payer = toSigner(params.payer)

        const poolState = await this.state.getPool(virtualPool)
        const configState = await this.state.getPoolConfig(
            poolState.data.config
        )

        const baseMint = poolState.data.baseMint
        const quoteMint = configState.data.quoteMint

        const [dammPoolAuthority, dammEventAuthority] = await Promise.all([
            findDammV2PoolAuthorityPda(),
            findDammV2EventAuthorityPda(),
        ])

        const migrationMetadata =
            await findDammV2MigrationMetadataPda(virtualPool)

        const dammPool = await findDammV2PoolPda(
            dammConfig,
            baseMint,
            quoteMint
        )

        const [firstPositionNftSigner, secondPositionNftSigner] =
            await Promise.all([
                generateKeyPairSigner(),
                generateKeyPairSigner(),
            ])

        const [
            firstPosition,
            firstPositionNftAccount,
            secondPosition,
            secondPositionNftAccount,
        ] = await Promise.all([
            findDammV2PositionPda(firstPositionNftSigner.address),
            findDammV2PositionNftAccountPda(firstPositionNftSigner.address),
            findDammV2PositionPda(secondPositionNftSigner.address),
            findDammV2PositionNftAccountPda(secondPositionNftSigner.address),
        ])

        const [tokenAVault, tokenBVault] = await Promise.all([
            findDammV2TokenVaultPda(dammPool, baseMint),
            findDammV2TokenVaultPda(dammPool, quoteMint),
        ])

        const tokenBaseProgram =
            configState.data.tokenType === 0
                ? TOKEN_PROGRAM_ADDRESS
                : TOKEN_2022_PROGRAM_ADDRESS

        const tokenQuoteProgram =
            configState.data.quoteTokenFlag === 0
                ? TOKEN_PROGRAM_ADDRESS
                : TOKEN_2022_PROGRAM_ADDRESS

        // Compute budget: 600_000 CU
        const computeBudgetIx = buildSetComputeUnitLimitInstruction(600_000)

        const ix = getMigrationDammV2Instruction({
            virtualPool,
            migrationMetadata,
            config: poolState.data.config,
            pool: dammPool,
            firstPositionNftMint: firstPositionNftSigner,
            firstPosition,
            firstPositionNftAccount,
            secondPositionNftMint: secondPositionNftSigner,
            secondPosition,
            secondPositionNftAccount,
            dammPoolAuthority,
            baseMint,
            quoteMint,
            tokenAVault,
            tokenBVault,
            baseVault: poolState.data.baseVault,
            quoteVault: poolState.data.quoteVault,
            payer,
            tokenBaseProgram,
            tokenQuoteProgram,
            token2022Program: TOKEN_2022_PROGRAM_ADDRESS,
            dammEventAuthority,
        })

        // Append dammConfig as a remaining account (readonly)
        const ixWithRemainingAccounts: Instruction = {
            ...ix,
            accounts: [...ix.accounts, { address: dammConfig, role: 0 }],
        }

        return {
            instructions: [ixWithRemainingAccounts, computeBudgetIx],
            signers: collectKitTransactionSigners(
                payer,
                firstPositionNftSigner,
                secondPositionNftSigner
            ),
        }
    }
}

/**
 * Build a SetComputeUnitLimit instruction (ComputeBudget program, index 2).
 */
function buildSetComputeUnitLimitInstruction(units: number): Instruction {
    const data = new Uint8Array(5)
    const view = new DataView(data.buffer)
    view.setUint8(0, 2) // SetComputeUnitLimit instruction index
    view.setUint32(1, units, true)

    return {
        programAddress: COMPUTE_BUDGET_PROGRAM_ADDRESS,
        accounts: [],
        data,
    }
}
