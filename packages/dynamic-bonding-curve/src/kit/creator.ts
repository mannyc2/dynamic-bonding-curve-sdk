import type { Address, Instruction, Rpc, SolanaRpcApi } from '@solana/kit'
import { TokenType } from '../types'
import { getCreateVirtualPoolMetadataInstructionAsync } from '../generated/instructions/createVirtualPoolMetadata'
import { getClaimCreatorTradingFeeInstructionAsync } from '../generated/instructions/claimCreatorTradingFee'
import { getCreatorWithdrawSurplusInstructionAsync } from '../generated/instructions/creatorWithdrawSurplus'
import { getTransferPoolCreatorInstructionAsync } from '../generated/instructions/transferPoolCreator'
import { getWithdrawMigrationFeeInstructionAsync } from '../generated/instructions/withdrawMigrationFee'
import { DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS } from '../generated/programs'
import { findMigrationMetadataPda } from '../generated/pdas'
import { DynamicBondingCurveKitStateService } from './state'
import { findAssociatedTokenPda } from '@solana-program/token'
import {
    createAssociatedTokenAccountIdempotentInstruction,
    getTokenProgramAddress,
    NATIVE_MINT_ADDRESS,
    unwrapSolInstruction,
} from './token'
import { collectKitTransactionSigners, toAddress, toSigner } from './helpers'
import type {
    KitClaimCreatorTradingFee2Params,
    KitClaimCreatorTradingFeeParams,
    KitCreatePoolMetadataParams,
    KitCreatorWithdrawSurplusParams,
    KitTransactionPlan,
    KitTransferPoolCreatorParams,
    KitWithdrawMigrationFeeParams,
} from './types'

export class DynamicBondingCurveKitCreatorService {
    private readonly state: DynamicBondingCurveKitStateService

    constructor(private readonly rpc: Rpc<SolanaRpcApi>) {
        this.state = new DynamicBondingCurveKitStateService(rpc)
    }

    async createPoolMetadata(
        params: KitCreatePoolMetadataParams
    ): Promise<KitTransactionPlan> {
        const creatorSigner = toSigner(params.creator)
        const payerSigner = toSigner(params.payer)
        const virtualPoolAddress = toAddress(params.virtualPool)

        const ix = await getCreateVirtualPoolMetadataInstructionAsync({
            virtualPool: virtualPoolAddress,
            creator: creatorSigner,
            payer: payerSigner,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            padding: new Uint8Array(96),
            name: params.name,
            website: params.website,
            logo: params.logo,
        })

        return {
            instructions: [ix],
            signers: collectKitTransactionSigners(creatorSigner, payerSigner),
        }
    }

    async claimCreatorTradingFee(
        params: KitClaimCreatorTradingFeeParams
    ): Promise<KitTransactionPlan> {
        const creatorSigner = toSigner(params.creator)
        const payerAddress = toAddress(params.payer)
        const poolAddress = toAddress(params.pool) as Address

        const poolAccount = await this.state.getPool(poolAddress)
        const poolState = poolAccount.data

        const configAccount = await this.state.getPoolConfig(poolState.config)
        const configState = configAccount.data

        const tokenBaseProgram = getTokenProgramAddress(
            configState.tokenType as TokenType
        )
        const tokenQuoteProgram = getTokenProgramAddress(
            configState.quoteTokenFlag as TokenType
        )

        const isSOLQuoteMint = configState.quoteMint === NATIVE_MINT_ADDRESS

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        const creatorAddress = creatorSigner.address
        const receiver = params.receiver
            ? toAddress(params.receiver)
            : undefined

        let tokenBaseAccount: Address
        let tokenQuoteAccount: Address

        if (isSOLQuoteMint) {
            const tempWSol =
                receiver && receiver !== creatorAddress
                    ? params.tempWSolAcc
                        ? toAddress(params.tempWSolAcc)
                        : creatorAddress
                    : creatorAddress
            const feeReceiver = receiver ? receiver : creatorAddress

            const baseAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerAddress,
                    feeReceiver,
                    poolState.baseMint,
                    tokenBaseProgram
                )
            preInstructions.push(baseAta.instruction)
            tokenBaseAccount = baseAta.ata

            const quoteAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerAddress,
                    tempWSol,
                    configState.quoteMint,
                    tokenQuoteProgram
                )
            preInstructions.push(quoteAta.instruction)
            tokenQuoteAccount = quoteAta.ata

            const unwrapIx = await unwrapSolInstruction(tempWSol, feeReceiver)
            postInstructions.push(unwrapIx)
        } else {
            const feeReceiver = receiver ? receiver : creatorAddress

            const baseAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerAddress,
                    feeReceiver,
                    poolState.baseMint,
                    tokenBaseProgram
                )
            preInstructions.push(baseAta.instruction)
            tokenBaseAccount = baseAta.ata

            const quoteAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerAddress,
                    feeReceiver,
                    configState.quoteMint,
                    tokenQuoteProgram
                )
            preInstructions.push(quoteAta.instruction)
            tokenQuoteAccount = quoteAta.ata
        }

        const ix = await getClaimCreatorTradingFeeInstructionAsync({
            pool: poolAddress,
            tokenAAccount: tokenBaseAccount,
            tokenBAccount: tokenQuoteAccount,
            baseVault: poolState.baseVault,
            quoteVault: poolState.quoteVault,
            baseMint: poolState.baseMint,
            quoteMint: configState.quoteMint,
            creator: creatorSigner,
            tokenBaseProgram,
            tokenQuoteProgram,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            maxBaseAmount: BigInt(params.maxBaseAmount.toString()),
            maxQuoteAmount: BigInt(params.maxQuoteAmount.toString()),
        })

        return {
            instructions: [...preInstructions, ix, ...postInstructions],
            signers: collectKitTransactionSigners(
                creatorSigner,
                params.payer,
                params.tempWSolAcc
            ),
        }
    }

    async claimCreatorTradingFee2(
        params: KitClaimCreatorTradingFee2Params
    ): Promise<KitTransactionPlan> {
        const creatorSigner = toSigner(params.creator)
        const payerAddress = toAddress(params.payer)
        const poolAddress = toAddress(params.pool) as Address
        const receiverAddress = toAddress(params.receiver)

        const poolAccount = await this.state.getPool(poolAddress)
        const poolState = poolAccount.data

        const configAccount = await this.state.getPoolConfig(poolState.config)
        const configState = configAccount.data

        const tokenBaseProgram = getTokenProgramAddress(
            configState.tokenType as TokenType
        )
        const tokenQuoteProgram = getTokenProgramAddress(
            configState.quoteTokenFlag as TokenType
        )

        const isSOLQuoteMint = configState.quoteMint === NATIVE_MINT_ADDRESS

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        const creatorAddress = creatorSigner.address

        let tokenBaseAccount: Address
        let tokenQuoteAccount: Address

        if (isSOLQuoteMint) {
            const baseAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerAddress,
                    receiverAddress,
                    poolState.baseMint,
                    tokenBaseProgram
                )
            preInstructions.push(baseAta.instruction)
            tokenBaseAccount = baseAta.ata

            const quoteAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerAddress,
                    creatorAddress,
                    configState.quoteMint,
                    tokenQuoteProgram
                )
            preInstructions.push(quoteAta.instruction)
            tokenQuoteAccount = quoteAta.ata

            const unwrapIx = await unwrapSolInstruction(
                creatorAddress,
                receiverAddress
            )
            postInstructions.push(unwrapIx)
        } else {
            const baseAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerAddress,
                    receiverAddress,
                    poolState.baseMint,
                    tokenBaseProgram
                )
            preInstructions.push(baseAta.instruction)
            tokenBaseAccount = baseAta.ata

            const quoteAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerAddress,
                    receiverAddress,
                    configState.quoteMint,
                    tokenQuoteProgram
                )
            preInstructions.push(quoteAta.instruction)
            tokenQuoteAccount = quoteAta.ata
        }

        const ix = await getClaimCreatorTradingFeeInstructionAsync({
            pool: poolAddress,
            tokenAAccount: tokenBaseAccount,
            tokenBAccount: tokenQuoteAccount,
            baseVault: poolState.baseVault,
            quoteVault: poolState.quoteVault,
            baseMint: poolState.baseMint,
            quoteMint: configState.quoteMint,
            creator: creatorSigner,
            tokenBaseProgram,
            tokenQuoteProgram,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            maxBaseAmount: BigInt(params.maxBaseAmount.toString()),
            maxQuoteAmount: BigInt(params.maxQuoteAmount.toString()),
        })

        return {
            instructions: [...preInstructions, ix, ...postInstructions],
            signers: collectKitTransactionSigners(creatorSigner, params.payer),
        }
    }

    async creatorWithdrawSurplus(
        params: KitCreatorWithdrawSurplusParams
    ): Promise<KitTransactionPlan> {
        const creatorSigner = toSigner(params.creator)
        const virtualPoolAddress = toAddress(params.virtualPool) as Address
        const creatorAddress = creatorSigner.address

        const poolAccount = await this.state.getPool(virtualPoolAddress)
        const poolState = poolAccount.data

        const configAccount = await this.state.getPoolConfig(poolState.config)
        const configState = configAccount.data

        const TOKEN_PROGRAM_ADDRESS =
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        const quoteAta =
            await createAssociatedTokenAccountIdempotentInstruction(
                creatorAddress,
                creatorAddress,
                configState.quoteMint,
                TOKEN_PROGRAM_ADDRESS
            )
        preInstructions.push(quoteAta.instruction)

        const isSOLQuoteMint = configState.quoteMint === NATIVE_MINT_ADDRESS
        if (isSOLQuoteMint) {
            const unwrapIx = await unwrapSolInstruction(
                creatorAddress,
                creatorAddress
            )
            postInstructions.push(unwrapIx)
        }

        const ix = await getCreatorWithdrawSurplusInstructionAsync({
            config: poolState.config,
            virtualPool: virtualPoolAddress,
            tokenQuoteAccount: quoteAta.ata,
            quoteVault: poolState.quoteVault,
            quoteMint: configState.quoteMint,
            creator: creatorSigner,
            tokenQuoteProgram: TOKEN_PROGRAM_ADDRESS,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
        })

        return {
            instructions: [...preInstructions, ix, ...postInstructions],
            signers: collectKitTransactionSigners(creatorSigner),
        }
    }

    async transferPoolCreator(
        params: KitTransferPoolCreatorParams
    ): Promise<KitTransactionPlan> {
        const creatorSigner = toSigner(params.creator)
        const virtualPoolAddress = toAddress(params.virtualPool) as Address
        const newCreatorAddress = toAddress(params.newCreator)

        const poolAccount = await this.state.getPool(virtualPoolAddress)
        const poolState = poolAccount.data

        const [migrationMetadataPda] = await findMigrationMetadataPda({
            virtualPool: virtualPoolAddress,
        })

        const ix = await getTransferPoolCreatorInstructionAsync({
            virtualPool: virtualPoolAddress,
            config: poolState.config,
            creator: creatorSigner,
            newCreator: newCreatorAddress,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
        })

        // Append migration metadata as remaining account (readonly, non-signer)
        const ixWithRemaining: Instruction = {
            ...ix,
            accounts: [
                ...ix.accounts,
                {
                    address: migrationMetadataPda,
                    role: 0, // readonly
                },
            ],
        }

        return {
            instructions: [ixWithRemaining],
            signers: collectKitTransactionSigners(creatorSigner),
        }
    }

    async creatorWithdrawMigrationFee(
        params: KitWithdrawMigrationFeeParams
    ): Promise<KitTransactionPlan> {
        const senderSigner = toSigner(params.sender)
        const virtualPoolAddress = toAddress(params.virtualPool) as Address
        const senderAddress = senderSigner.address

        const poolAccount = await this.state.getPool(virtualPoolAddress)
        const poolState = poolAccount.data

        const configAccount = await this.state.getPoolConfig(poolState.config)
        const configState = configAccount.data

        const tokenQuoteProgram = getTokenProgramAddress(
            configState.quoteTokenFlag as TokenType
        )

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        const quoteAta =
            await createAssociatedTokenAccountIdempotentInstruction(
                senderAddress,
                senderAddress,
                configState.quoteMint,
                tokenQuoteProgram
            )
        preInstructions.push(quoteAta.instruction)

        if (configState.quoteMint === NATIVE_MINT_ADDRESS) {
            const unwrapIx = await unwrapSolInstruction(
                senderAddress,
                senderAddress
            )
            postInstructions.push(unwrapIx)
        }

        const ix = await getWithdrawMigrationFeeInstructionAsync({
            config: poolState.config,
            virtualPool: virtualPoolAddress,
            tokenQuoteAccount: quoteAta.ata,
            quoteVault: poolState.quoteVault,
            quoteMint: configState.quoteMint,
            sender: senderSigner,
            tokenQuoteProgram,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            flag: 1, // 1 = creator (0 = partner)
        })

        return {
            instructions: [...preInstructions, ix, ...postInstructions],
            signers: collectKitTransactionSigners(senderSigner),
        }
    }
}
