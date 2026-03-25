import {
    type Address,
    type Instruction,
    type Rpc,
    type SolanaRpcApi,
    createNoopSigner,
} from '@solana/kit'
import {
    collectKitTransactionSigners,
    convertBNFields,
    toAddress,
    toAddressOrSigner,
    toOptionalAddress,
    toSigner,
} from './helpers'
import { DynamicBondingCurveKitStateService } from './state'
import { DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS } from '../generated/programs'
import { getCreateConfigInstructionAsync } from '../generated/instructions/createConfig'
import { getCreatePartnerMetadataInstructionAsync } from '../generated/instructions/createPartnerMetadata'
import { getClaimTradingFeeInstructionAsync } from '../generated/instructions/claimTradingFee'
import { getPartnerWithdrawSurplusInstructionAsync } from '../generated/instructions/partnerWithdrawSurplus'
import { getWithdrawMigrationFeeInstructionAsync } from '../generated/instructions/withdrawMigrationFee'
import { getClaimPartnerPoolCreationFeeInstructionAsync } from '../generated/instructions/claimPartnerPoolCreationFee'
import {
    createAssociatedTokenAccountIdempotentInstruction,
    getTokenProgramAddress,
    NATIVE_MINT_ADDRESS,
    unwrapSolInstruction,
} from './token'
import { findAssociatedTokenPda } from '@solana-program/token'
import type {
    KitClaimPartnerPoolCreationFeeParams,
    KitClaimTradingFee2Params,
    KitClaimTradingFeeParams,
    KitCreateConfigParams,
    KitCreatePartnerMetadataParams,
    KitPartnerWithdrawSurplusParams,
    KitTransactionPlan,
    KitWithdrawMigrationFeeParams,
} from './types'

export class DynamicBondingCurveKitPartnerService {
    private readonly state: DynamicBondingCurveKitStateService

    constructor(rpc: Rpc<SolanaRpcApi>) {
        this.state = new DynamicBondingCurveKitStateService(rpc)
    }

    async createConfig(
        params: KitCreateConfigParams
    ): Promise<KitTransactionPlan> {
        const {
            config,
            feeClaimer,
            leftoverReceiver,
            quoteMint,
            payer,
            ...configParam
        } = params

        const configSigner = toSigner(config)
        const payerSigner = toSigner(payer)

        const ix = await getCreateConfigInstructionAsync({
            config: configSigner,
            feeClaimer: toAddress(feeClaimer),
            leftoverReceiver: toAddress(leftoverReceiver),
            quoteMint: toAddress(quoteMint),
            payer: payerSigner,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            configParameters: convertBNFields(configParam),
        })

        return {
            instructions: [ix],
            signers: collectKitTransactionSigners(configSigner, payerSigner),
        }
    }

    async createPartnerMetadata(
        params: KitCreatePartnerMetadataParams
    ): Promise<KitTransactionPlan> {
        const { name, website, logo, feeClaimer, payer } = params

        const feeClaimerSigner = toSigner(feeClaimer)
        const payerSigner = toSigner(payer)

        const ix = await getCreatePartnerMetadataInstructionAsync({
            payer: payerSigner,
            feeClaimer: feeClaimerSigner,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            padding: new Uint8Array(96),
            name,
            website,
            logo,
        })

        return {
            instructions: [ix],
            signers: collectKitTransactionSigners(
                feeClaimerSigner,
                payerSigner
            ),
        }
    }

    async claimPartnerTradingFee(
        params: KitClaimTradingFeeParams
    ): Promise<KitTransactionPlan> {
        const {
            feeClaimer,
            payer,
            pool,
            maxBaseAmount,
            maxQuoteAmount,
            receiver,
            tempWSolAcc,
        } = params

        const poolAddress = toAddress(pool)
        const feeClaimerSigner = toSigner(feeClaimer)
        const payerInput = toAddressOrSigner(payer)
        const feeClaimerAddress = feeClaimerSigner.address

        const poolAccount = await this.state.getPool(poolAddress)
        const poolState = poolAccount.data

        const configAccount = await this.state.getPoolConfig(poolState.config)
        const configState = configAccount.data

        const tokenBaseProgram = getTokenProgramAddress(configState.tokenType)
        const tokenQuoteProgram = getTokenProgramAddress(
            configState.quoteTokenFlag
        )

        const isSOLQuoteMint = configState.quoteMint === NATIVE_MINT_ADDRESS

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        const receiverAddress = toOptionalAddress(receiver)
        const feeReceiver = receiverAddress ?? feeClaimerAddress

        let tokenBaseAccount: Address
        let tokenQuoteAccount: Address

        if (isSOLQuoteMint) {
            const tempWSolOwner =
                receiverAddress && receiverAddress !== feeClaimerAddress
                    ? toAddressOrSigner(tempWSolAcc!)
                    : feeClaimerSigner
            const tempWSolAddress = toAddress(tempWSolOwner)

            ;[tokenBaseAccount] = await findAssociatedTokenPda({
                owner: feeReceiver,
                mint: poolState.baseMint,
                tokenProgram: tokenBaseProgram,
            })
            ;[tokenQuoteAccount] = await findAssociatedTokenPda({
                owner: tempWSolAddress,
                mint: configState.quoteMint,
                tokenProgram: tokenQuoteProgram,
            })

            const createBaseAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerInput,
                    feeReceiver,
                    poolState.baseMint,
                    tokenBaseProgram
                )
            preInstructions.push(createBaseAta.instruction)

            const createQuoteAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerInput,
                    tempWSolAddress,
                    configState.quoteMint,
                    tokenQuoteProgram
                )
            preInstructions.push(createQuoteAta.instruction)

            postInstructions.push(
                await unwrapSolInstruction(tempWSolOwner, feeReceiver)
            )
        } else {
            const [baseResult, quoteResult] = await Promise.all([
                createAssociatedTokenAccountIdempotentInstruction(
                    payerInput,
                    feeReceiver,
                    poolState.baseMint,
                    tokenBaseProgram
                ),
                createAssociatedTokenAccountIdempotentInstruction(
                    payerInput,
                    feeReceiver,
                    configState.quoteMint,
                    tokenQuoteProgram
                ),
            ])

            tokenBaseAccount = baseResult.ata
            tokenQuoteAccount = quoteResult.ata
            preInstructions.push(
                baseResult.instruction,
                quoteResult.instruction
            )
        }

        const claimIx = await getClaimTradingFeeInstructionAsync({
            config: poolState.config,
            pool: poolAddress,
            tokenAAccount: tokenBaseAccount,
            tokenBAccount: tokenQuoteAccount,
            baseVault: poolState.baseVault,
            quoteVault: poolState.quoteVault,
            baseMint: poolState.baseMint,
            quoteMint: configState.quoteMint,
            feeClaimer: feeClaimerSigner,
            tokenBaseProgram,
            tokenQuoteProgram,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            maxAmountA: BigInt(maxBaseAmount.toString()),
            maxAmountB: BigInt(maxQuoteAmount.toString()),
        })

        return {
            instructions: [...preInstructions, claimIx, ...postInstructions],
            signers: collectKitTransactionSigners(
                feeClaimerSigner,
                params.payer,
                tempWSolAcc
            ),
        }
    }

    async claimPartnerTradingFee2(
        params: KitClaimTradingFee2Params
    ): Promise<KitTransactionPlan> {
        const {
            feeClaimer,
            payer,
            pool,
            maxBaseAmount,
            maxQuoteAmount,
            receiver,
        } = params

        const poolAddress = toAddress(pool)
        const feeClaimerSigner = toSigner(feeClaimer)
        const payerInput = toAddressOrSigner(payer)
        const feeClaimerAddress = feeClaimerSigner.address
        const receiverAddress = toAddress(receiver)

        const poolAccount = await this.state.getPool(poolAddress)
        const poolState = poolAccount.data

        const configAccount = await this.state.getPoolConfig(poolState.config)
        const configState = configAccount.data

        const tokenBaseProgram = getTokenProgramAddress(configState.tokenType)
        const tokenQuoteProgram = getTokenProgramAddress(
            configState.quoteTokenFlag
        )

        const isSOLQuoteMint = configState.quoteMint === NATIVE_MINT_ADDRESS

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        let tokenBaseAccount: Address
        let tokenQuoteAccount: Address

        if (isSOLQuoteMint) {
            ;[tokenBaseAccount] = await findAssociatedTokenPda({
                owner: receiverAddress,
                mint: poolState.baseMint,
                tokenProgram: tokenBaseProgram,
            })
            ;[tokenQuoteAccount] = await findAssociatedTokenPda({
                owner: feeClaimerAddress,
                mint: configState.quoteMint,
                tokenProgram: tokenQuoteProgram,
            })

            const createBaseAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerInput,
                    receiverAddress,
                    poolState.baseMint,
                    tokenBaseProgram
                )
            preInstructions.push(createBaseAta.instruction)

            const createQuoteAta =
                await createAssociatedTokenAccountIdempotentInstruction(
                    payerInput,
                    feeClaimerAddress,
                    configState.quoteMint,
                    tokenQuoteProgram
                )
            preInstructions.push(createQuoteAta.instruction)

            postInstructions.push(
                await unwrapSolInstruction(feeClaimerSigner, receiverAddress)
            )
        } else {
            const [baseResult, quoteResult] = await Promise.all([
                createAssociatedTokenAccountIdempotentInstruction(
                    payerInput,
                    receiverAddress,
                    poolState.baseMint,
                    tokenBaseProgram
                ),
                createAssociatedTokenAccountIdempotentInstruction(
                    payerInput,
                    receiverAddress,
                    configState.quoteMint,
                    tokenQuoteProgram
                ),
            ])

            tokenBaseAccount = baseResult.ata
            tokenQuoteAccount = quoteResult.ata
            preInstructions.push(
                baseResult.instruction,
                quoteResult.instruction
            )
        }

        const claimIx = await getClaimTradingFeeInstructionAsync({
            config: poolState.config,
            pool: poolAddress,
            tokenAAccount: tokenBaseAccount,
            tokenBAccount: tokenQuoteAccount,
            baseVault: poolState.baseVault,
            quoteVault: poolState.quoteVault,
            baseMint: poolState.baseMint,
            quoteMint: configState.quoteMint,
            feeClaimer: feeClaimerSigner,
            tokenBaseProgram,
            tokenQuoteProgram,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            maxAmountA: BigInt(maxBaseAmount.toString()),
            maxAmountB: BigInt(maxQuoteAmount.toString()),
        })

        return {
            instructions: [...preInstructions, claimIx, ...postInstructions],
            signers: collectKitTransactionSigners(
                feeClaimerSigner,
                params.payer
            ),
        }
    }

    async partnerWithdrawSurplus(
        params: KitPartnerWithdrawSurplusParams
    ): Promise<KitTransactionPlan> {
        const { virtualPool, feeClaimer } = params

        const virtualPoolAddress = toAddress(virtualPool)
        const feeClaimerSigner = toSigner(feeClaimer)
        const feeClaimerAddress = feeClaimerSigner.address

        const poolAccount = await this.state.getPool(virtualPoolAddress)
        const poolState = poolAccount.data

        const configAccount = await this.state.getPoolConfig(poolState.config)
        const configState = configAccount.data

        const tokenQuoteProgram = getTokenProgramAddress(
            configState.quoteTokenFlag
        )

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        const quoteAtaResult =
            await createAssociatedTokenAccountIdempotentInstruction(
                feeClaimerSigner,
                feeClaimerAddress,
                configState.quoteMint,
                tokenQuoteProgram
            )
        preInstructions.push(quoteAtaResult.instruction)

        if (configState.quoteMint === NATIVE_MINT_ADDRESS) {
            postInstructions.push(
                await unwrapSolInstruction(feeClaimerSigner, feeClaimerAddress)
            )
        }

        const ix = await getPartnerWithdrawSurplusInstructionAsync({
            config: poolState.config,
            virtualPool: virtualPoolAddress,
            tokenQuoteAccount: quoteAtaResult.ata,
            quoteVault: poolState.quoteVault,
            quoteMint: configState.quoteMint,
            feeClaimer: feeClaimerSigner,
            tokenQuoteProgram,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
        })

        return {
            instructions: [...preInstructions, ix, ...postInstructions],
            signers: collectKitTransactionSigners(feeClaimerSigner),
        }
    }

    async partnerWithdrawMigrationFee(
        params: KitWithdrawMigrationFeeParams
    ): Promise<KitTransactionPlan> {
        const { virtualPool, sender } = params

        const virtualPoolAddress = toAddress(virtualPool)
        const senderSigner = toSigner(sender)
        const senderAddress = senderSigner.address

        const poolAccount = await this.state.getPool(virtualPoolAddress)
        const poolState = poolAccount.data

        const configAccount = await this.state.getPoolConfig(poolState.config)
        const configState = configAccount.data

        const tokenQuoteProgram = getTokenProgramAddress(
            configState.quoteTokenFlag
        )

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        const quoteAtaResult =
            await createAssociatedTokenAccountIdempotentInstruction(
                senderSigner,
                senderAddress,
                configState.quoteMint,
                tokenQuoteProgram
            )
        preInstructions.push(quoteAtaResult.instruction)

        if (configState.quoteMint === NATIVE_MINT_ADDRESS) {
            postInstructions.push(
                await unwrapSolInstruction(senderSigner, senderAddress)
            )
        }

        const ix = await getWithdrawMigrationFeeInstructionAsync({
            config: poolState.config,
            virtualPool: virtualPoolAddress,
            tokenQuoteAccount: quoteAtaResult.ata,
            quoteVault: poolState.quoteVault,
            quoteMint: configState.quoteMint,
            sender: senderSigner,
            tokenQuoteProgram,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            flag: 0, // 0 = partner, 1 = creator
        })

        return {
            instructions: [...preInstructions, ix, ...postInstructions],
            signers: collectKitTransactionSigners(senderSigner),
        }
    }

    async claimPartnerPoolCreationFee(
        params: KitClaimPartnerPoolCreationFeeParams
    ): Promise<KitTransactionPlan> {
        const { virtualPool, feeReceiver } = params

        const virtualPoolAddress = toAddress(virtualPool)
        const feeReceiverAddress = toAddress(feeReceiver)

        const poolAccount = await this.state.getPool(virtualPoolAddress)
        const poolState = poolAccount.data

        const configAccount = await this.state.getPoolConfig(poolState.config)
        const configState = configAccount.data

        // feeClaimer is read from on-chain config state. The caller is
        // responsible for signing with this key externally, so we create a
        // noop signer that is not included in the returned signers array
        // (matching legacy behaviour).
        const feeClaimerPlaceholder = createNoopSigner(configState.feeClaimer)

        const ix = await getClaimPartnerPoolCreationFeeInstructionAsync({
            config: poolState.config,
            pool: virtualPoolAddress,
            feeClaimer: feeClaimerPlaceholder,
            feeReceiver: feeReceiverAddress,
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
        })

        return {
            instructions: [ix],
            signers: [],
        }
    }
}
