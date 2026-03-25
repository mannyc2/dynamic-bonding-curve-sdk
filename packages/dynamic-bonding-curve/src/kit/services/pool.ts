import type { Address, Instruction, Rpc, SolanaRpcApi } from '@solana/kit'
import BN from 'bn.js'
import {
    ActivationType,
    BaseFeeMode,
    SwapMode,
    TokenType,
    TradeDirection,
} from '../enums'
import {
    getCreateConfigInstructionAsync,
    type CreateConfigInstructionDataArgs,
} from '../generated/instructions/createConfig'
import { getInitializeVirtualPoolWithSplTokenInstructionAsync } from '../generated/instructions/initializeVirtualPoolWithSplToken'
import { getInitializeVirtualPoolWithToken2022InstructionAsync } from '../generated/instructions/initializeVirtualPoolWithToken2022'
import { getSwapInstructionAsync } from '../generated/instructions/swap'
import { getSwap2InstructionAsync } from '../generated/instructions/swap2'
import {
    DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
    SYSVAR_INSTRUCTIONS_ADDRESS,
    TOKEN_PROGRAM_ADDRESS,
} from '../constants'
import {
    collectKitTransactionSigners,
    createAssociatedTokenAccountIdempotentInstruction,
    findMintMetadataPda,
    findPoolPda,
    findTokenVaultPda,
    getTokenProgramAddress,
    getTokenTypeForMint,
    isRateLimiterApplied,
    NATIVE_MINT_ADDRESS,
    toAddress,
    toOptionalAddress,
    toSigner,
    unwrapSolInstruction,
    wrapSolInstructions,
} from '../helpers'
import { DynamicBondingCurveKitStateService } from './state'
import type {
    CreateConfigAndPoolWithFirstBuyKitResult,
    KitCreateConfigAndPoolParams,
    KitCreateConfigAndPoolWithFirstBuyParams,
    KitCreatePoolParams,
    KitCreatePoolWithFirstBuyParams,
    KitCreatePoolWithPartnerAndCreatorFirstBuyParams,
    KitFirstBuyParams,
    KitSwap2Params,
    KitSwapParams,
    KitTransactionPlan,
} from '../types'

export class DynamicBondingCurveKitPoolService {
    private readonly state: DynamicBondingCurveKitStateService

    constructor(private readonly rpc: Rpc<SolanaRpcApi>) {
        this.state = new DynamicBondingCurveKitStateService(rpc)
    }

    async createPool(params: KitCreatePoolParams): Promise<KitTransactionPlan> {
        const configAddress = toAddress(params.config)

        const configState = await this.state.getPoolConfig(configAddress)
        const quoteMint = configState.data.quoteMint
        const tokenType = configState.data.tokenType as TokenType

        const instructions = await this.buildCreatePoolInstructions(
            params,
            tokenType,
            quoteMint
        )

        return {
            instructions,
            signers: collectKitTransactionSigners(
                params.baseMint,
                params.payer,
                params.poolCreator
            ),
        }
    }

    async createConfigAndPool(
        params: KitCreateConfigAndPoolParams
    ): Promise<KitTransactionPlan> {
        const configInstruction =
            await this.buildCreateConfigInstruction(params)
        const poolInstructions =
            await this.buildCreatePoolFromCompoundParams(params)

        return {
            instructions: [configInstruction, ...poolInstructions],
            signers: collectKitTransactionSigners(
                params.config,
                params.payer,
                params.preCreatePoolParam.baseMint,
                params.preCreatePoolParam.poolCreator
            ),
        }
    }

    async createConfigAndPoolWithFirstBuy(
        params: KitCreateConfigAndPoolWithFirstBuyParams
    ): Promise<CreateConfigAndPoolWithFirstBuyKitResult> {
        const configInstruction =
            await this.buildCreateConfigInstruction(params)
        const poolInstructions =
            await this.buildCreatePoolFromCompoundParams(params)

        const firstBuyInstructions = params.firstBuyParam
            ? await this.buildFirstBuyFromCompoundParams(
                  params.firstBuyParam,
                  params
              )
            : []

        return {
            createConfigPlan: {
                instructions: [configInstruction],
                signers: collectKitTransactionSigners(
                    params.config,
                    params.payer
                ),
            },
            createPoolWithFirstBuyPlan: {
                instructions: [...poolInstructions, ...firstBuyInstructions],
                signers: collectKitTransactionSigners(
                    params.payer,
                    params.preCreatePoolParam.baseMint,
                    params.preCreatePoolParam.poolCreator,
                    params.firstBuyParam?.buyer
                ),
            },
        }
    }

    async createPoolWithFirstBuy(
        params: KitCreatePoolWithFirstBuyParams
    ): Promise<KitTransactionPlan> {
        const configAddress = toAddress(params.createPoolParam.config)
        const baseMintAddress = toAddress(params.createPoolParam.baseMint)

        const configState = await this.state.getPoolConfig(configAddress)
        const configData = configState.data
        const quoteMint = configData.quoteMint
        const tokenType = configData.tokenType as TokenType

        const poolInstructions = await this.buildCreatePoolInstructions(
            params.createPoolParam,
            tokenType,
            quoteMint
        )

        const firstBuyInstructions = params.firstBuyParam
            ? await this.buildFirstBuyFromConfigState(
                  params.firstBuyParam,
                  baseMintAddress,
                  configAddress,
                  configData,
                  tokenType,
                  quoteMint
              )
            : []

        return {
            instructions: [...poolInstructions, ...firstBuyInstructions],
            signers: collectKitTransactionSigners(
                params.createPoolParam.baseMint,
                params.createPoolParam.payer,
                params.createPoolParam.poolCreator,
                params.firstBuyParam?.buyer
            ),
        }
    }

    async createPoolWithPartnerAndCreatorFirstBuy(
        params: KitCreatePoolWithPartnerAndCreatorFirstBuyParams
    ): Promise<KitTransactionPlan> {
        const configAddress = toAddress(params.createPoolParam.config)
        const baseMintAddress = toAddress(params.createPoolParam.baseMint)

        const configState = await this.state.getPoolConfig(configAddress)
        const configData = configState.data
        const quoteMint = configData.quoteMint
        const tokenType = configData.tokenType as TokenType

        const poolInstructions = await this.buildCreatePoolInstructions(
            params.createPoolParam,
            tokenType,
            quoteMint
        )

        const partnerBuyInstructions = params.partnerFirstBuyParam
            ? await this.buildFirstBuyFromConfigState(
                  {
                      buyer: params.partnerFirstBuyParam.partner,
                      receiver: params.partnerFirstBuyParam.receiver,
                      buyAmount: params.partnerFirstBuyParam.buyAmount,
                      minimumAmountOut:
                          params.partnerFirstBuyParam.minimumAmountOut,
                      referralTokenAccount:
                          params.partnerFirstBuyParam.referralTokenAccount,
                  },
                  baseMintAddress,
                  configAddress,
                  configData,
                  tokenType,
                  quoteMint
              )
            : []

        const creatorBuyInstructions = params.creatorFirstBuyParam
            ? await this.buildFirstBuyFromConfigState(
                  {
                      buyer: params.creatorFirstBuyParam.creator,
                      receiver: params.creatorFirstBuyParam.receiver,
                      buyAmount: params.creatorFirstBuyParam.buyAmount,
                      minimumAmountOut:
                          params.creatorFirstBuyParam.minimumAmountOut,
                      referralTokenAccount:
                          params.creatorFirstBuyParam.referralTokenAccount,
                  },
                  baseMintAddress,
                  configAddress,
                  configData,
                  tokenType,
                  quoteMint
              )
            : []

        return {
            instructions: [
                ...poolInstructions,
                ...partnerBuyInstructions,
                ...creatorBuyInstructions,
            ],
            signers: collectKitTransactionSigners(
                params.createPoolParam.baseMint,
                params.createPoolParam.payer,
                params.createPoolParam.poolCreator,
                params.partnerFirstBuyParam?.partner,
                params.creatorFirstBuyParam?.creator
            ),
        }
    }

    async swap(params: KitSwapParams): Promise<KitTransactionPlan> {
        const poolAddress = toAddress(params.pool)
        const ownerSigner = toSigner(params.owner)
        const ownerAddress = ownerSigner.address
        const payerSigner = params.payer ? toSigner(params.payer) : ownerSigner

        const poolAccount = await this.state.getPool(poolAddress)
        const poolData = poolAccount.data
        const configState = await this.state.getPoolConfig(poolData.config)
        const configData = configState.data

        const quoteMint = configData.quoteMint
        const baseMint = poolData.baseMint

        const { inputMint, outputMint, inputTokenProgram, outputTokenProgram } =
            prepareSwapParams(
                params.swapBaseForQuote,
                baseMint,
                poolData.poolType as TokenType,
                quoteMint,
                configData.quoteTokenFlag as TokenType
            )

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        // Create ATAs — pass signer to avoid duplicate signer instances
        const { ata: inputTokenAccount, instruction: createInputAtaIx } =
            await createAssociatedTokenAccountIdempotentInstruction(
                payerSigner,
                ownerAddress,
                inputMint,
                inputTokenProgram
            )
        preInstructions.push(createInputAtaIx)

        const { ata: outputTokenAccount, instruction: createOutputAtaIx } =
            await createAssociatedTokenAccountIdempotentInstruction(
                payerSigner,
                ownerAddress,
                outputMint,
                outputTokenProgram
            )
        preInstructions.push(createOutputAtaIx)

        // SOL wrap/unwrap — pass signer to avoid duplicate signer instances
        if (inputMint === NATIVE_MINT_ADDRESS) {
            preInstructions.push(
                ...wrapSolInstructions(
                    ownerSigner,
                    inputTokenAccount,
                    BigInt(params.amountIn.toString())
                )
            )
        }

        if (
            inputMint === NATIVE_MINT_ADDRESS ||
            outputMint === NATIVE_MINT_ADDRESS
        ) {
            postInstructions.push(
                await unwrapSolInstruction(ownerSigner, ownerAddress)
            )
        }

        // Rate limiter check
        const needsRemainingAccounts =
            await this.checkRateLimiterOrFirstSwapMinFee(
                configData,
                poolData,
                params.swapBaseForQuote
            )

        const swapIx = await getSwapInstructionAsync({
            config: poolData.config,
            pool: poolAddress,
            inputTokenAccount,
            outputTokenAccount,
            baseVault: poolData.baseVault,
            quoteVault: poolData.quoteVault,
            baseMint,
            quoteMint,
            payer: ownerSigner,
            tokenBaseProgram: params.swapBaseForQuote
                ? inputTokenProgram
                : outputTokenProgram,
            tokenQuoteProgram: params.swapBaseForQuote
                ? outputTokenProgram
                : inputTokenProgram,
            referralTokenAccount: toOptionalAddress(
                params.referralTokenAccount
            ),
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            params: {
                amountIn: BigInt(params.amountIn.toString()),
                minimumAmountOut: BigInt(params.minimumAmountOut.toString()),
            },
        })

        return {
            instructions: [
                ...preInstructions,
                needsRemainingAccounts ? addRemainingAccount(swapIx) : swapIx,
                ...postInstructions,
            ],
            signers: collectKitTransactionSigners(params.owner, params.payer),
        }
    }

    async swap2(params: KitSwap2Params): Promise<KitTransactionPlan> {
        const poolAddress = toAddress(params.pool)
        const ownerSigner = toSigner(params.owner)
        const ownerAddress = ownerSigner.address
        const payerSigner = params.payer ? toSigner(params.payer) : ownerSigner

        const poolAccount = await this.state.getPool(poolAddress)
        const poolData = poolAccount.data
        const configState = await this.state.getPoolConfig(poolData.config)
        const configData = configState.data

        const quoteMint = configData.quoteMint
        const baseMint = poolData.baseMint

        let amount0: BN
        let amount1: BN

        if ('amountOut' in params) {
            amount0 = params.amountOut
            amount1 = params.maximumAmountIn
        } else {
            amount0 = params.amountIn
            amount1 = params.minimumAmountOut
        }

        const { inputMint, outputMint, inputTokenProgram, outputTokenProgram } =
            prepareSwapParams(
                params.swapBaseForQuote,
                baseMint,
                poolData.poolType as TokenType,
                quoteMint,
                configData.quoteTokenFlag as TokenType
            )

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        // Create ATAs — pass signer to avoid duplicate signer instances
        const { ata: inputTokenAccount, instruction: createInputAtaIx } =
            await createAssociatedTokenAccountIdempotentInstruction(
                payerSigner,
                ownerAddress,
                inputMint,
                inputTokenProgram
            )
        preInstructions.push(createInputAtaIx)

        const { ata: outputTokenAccount, instruction: createOutputAtaIx } =
            await createAssociatedTokenAccountIdempotentInstruction(
                payerSigner,
                ownerAddress,
                outputMint,
                outputTokenProgram
            )
        preInstructions.push(createOutputAtaIx)

        // SOL wrap/unwrap — pass signer to avoid duplicate signer instances
        if (inputMint === NATIVE_MINT_ADDRESS) {
            const wrapAmount =
                params.swapMode === SwapMode.ExactIn ||
                params.swapMode === SwapMode.PartialFill
                    ? amount0
                    : amount1
            preInstructions.push(
                ...wrapSolInstructions(
                    ownerSigner,
                    inputTokenAccount,
                    BigInt(wrapAmount.toString())
                )
            )
        }

        if (
            inputMint === NATIVE_MINT_ADDRESS ||
            outputMint === NATIVE_MINT_ADDRESS
        ) {
            postInstructions.push(
                await unwrapSolInstruction(ownerSigner, ownerAddress)
            )
        }

        // Rate limiter check
        const needsRemainingAccounts =
            await this.checkRateLimiterOrFirstSwapMinFee(
                configData,
                poolData,
                params.swapBaseForQuote
            )

        const swap2Ix = await getSwap2InstructionAsync({
            config: poolData.config,
            pool: poolAddress,
            inputTokenAccount,
            outputTokenAccount,
            baseVault: poolData.baseVault,
            quoteVault: poolData.quoteVault,
            baseMint,
            quoteMint,
            payer: ownerSigner,
            tokenBaseProgram: params.swapBaseForQuote
                ? inputTokenProgram
                : outputTokenProgram,
            tokenQuoteProgram: params.swapBaseForQuote
                ? outputTokenProgram
                : inputTokenProgram,
            referralTokenAccount: toOptionalAddress(
                params.referralTokenAccount
            ),
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            params: {
                amount0: BigInt(amount0.toString()),
                amount1: BigInt(amount1.toString()),
                swapMode: params.swapMode,
            },
        })

        return {
            instructions: [
                ...preInstructions,
                needsRemainingAccounts ? addRemainingAccount(swap2Ix) : swap2Ix,
                ...postInstructions,
            ],
            signers: collectKitTransactionSigners(params.owner, params.payer),
        }
    }

    // ── Private helpers ──────────────────────────────────────────────

    private async buildCreateConfigInstruction(
        params:
            | KitCreateConfigAndPoolParams
            | KitCreateConfigAndPoolWithFirstBuyParams
    ): Promise<Instruction> {
        const {
            config,
            feeClaimer,
            leftoverReceiver,
            quoteMint,
            payer,
            preCreatePoolParam: _pool,
            ...configParameters
        } = params

        // Remove firstBuyParam if present (from KitCreateConfigAndPoolWithFirstBuyParams)
        const { firstBuyParam: _fb, ...cleanConfigParameters } =
            configParameters as typeof configParameters & {
                firstBuyParam?: unknown
            }

        return getCreateConfigInstructionAsync({
            config: toSigner(config),
            feeClaimer: toAddress(feeClaimer),
            leftoverReceiver: toAddress(leftoverReceiver),
            quoteMint: toAddress(quoteMint),
            payer: toSigner(payer),
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            configParameters:
                cleanConfigParameters as unknown as CreateConfigInstructionDataArgs['configParameters'],
        })
    }

    private async buildCreatePoolInstructions(
        params: KitCreatePoolParams,
        tokenType: TokenType,
        quoteMint: Address
    ): Promise<Instruction[]> {
        const configAddress = toAddress(params.config)
        const baseMintAddress = toAddress(params.baseMint)
        const pool = await findPoolPda(
            quoteMint,
            baseMintAddress,
            configAddress
        )

        const creatorSigner = toSigner(params.poolCreator)
        const baseMintSigner = toSigner(params.baseMint)
        const payerSigner = toSigner(params.payer)

        if (tokenType === TokenType.SPL) {
            const mintMetadata = await findMintMetadataPda(baseMintAddress)

            const ix =
                await getInitializeVirtualPoolWithSplTokenInstructionAsync({
                    config: configAddress,
                    creator: creatorSigner,
                    baseMint: baseMintSigner,
                    quoteMint,
                    pool,
                    mintMetadata,
                    payer: payerSigner,
                    tokenQuoteProgram: TOKEN_PROGRAM_ADDRESS,
                    program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
                    params: {
                        name: params.name,
                        symbol: params.symbol,
                        uri: params.uri,
                    },
                })

            return [ix]
        } else {
            const ix =
                await getInitializeVirtualPoolWithToken2022InstructionAsync({
                    config: configAddress,
                    creator: creatorSigner,
                    baseMint: baseMintSigner,
                    quoteMint,
                    pool,
                    payer: payerSigner,
                    tokenQuoteProgram: TOKEN_PROGRAM_ADDRESS,
                    program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
                    params: {
                        name: params.name,
                        symbol: params.symbol,
                        uri: params.uri,
                    },
                })

            return [ix]
        }
    }

    private async buildCreatePoolFromCompoundParams(
        params:
            | KitCreateConfigAndPoolParams
            | KitCreateConfigAndPoolWithFirstBuyParams
    ): Promise<Instruction[]> {
        return this.buildCreatePoolInstructions(
            {
                ...params.preCreatePoolParam,
                config: params.config,
                payer: params.payer,
            } as KitCreatePoolParams,
            params.tokenType,
            toAddress(params.quoteMint)
        )
    }

    private async buildFirstBuyFromCompoundParams(
        firstBuyParam: KitFirstBuyParams,
        params: KitCreateConfigAndPoolWithFirstBuyParams
    ): Promise<Instruction[]> {
        if (firstBuyParam.buyAmount.lte(new BN(0))) {
            return []
        }

        const baseMint = toAddress(params.preCreatePoolParam.baseMint)
        const config = toAddress(params.config)
        const quoteMint = toAddress(params.quoteMint)
        const tokenType = params.tokenType
        const quoteTokenFlag = await getTokenTypeForMint(this.rpc, quoteMint)

        const baseFee = params.poolFees.baseFee

        let rateLimiterApplied = false
        if ((baseFee.baseFeeMode as number) === BaseFeeMode.RateLimiter) {
            const currentPoint = await this.getCurrentPoint(
                params.activationType
            )
            rateLimiterApplied = isRateLimiterApplied(
                currentPoint,
                new BN(0),
                TradeDirection.QuoteToBase,
                new BN(baseFee.secondFactor.toString()),
                new BN(baseFee.thirdFactor.toString()),
                new BN(baseFee.firstFactor.toString())
            )
        }

        const needsRemainingAccounts =
            rateLimiterApplied || params.enableFirstSwapWithMinFee

        return this.buildSwapBuyInstructions({
            baseMint,
            quoteMint,
            config,
            baseTokenType: tokenType,
            quoteTokenType: quoteTokenFlag,
            buyerParam: firstBuyParam,
            needsRemainingAccounts,
        })
    }

    private async buildFirstBuyFromConfigState(
        firstBuyParam: KitFirstBuyParams,
        baseMint: Address,
        config: Address,
        configData: {
            quoteMint: Address
            quoteTokenFlag: number
            poolFees: {
                baseFee: {
                    baseFeeMode: number
                    secondFactor: bigint
                    thirdFactor: bigint
                    firstFactor: number
                }
            }
            activationType: number
            enableFirstSwapWithMinFee: number
        },
        tokenType: TokenType,
        quoteMint: Address
    ): Promise<Instruction[]> {
        if (firstBuyParam.buyAmount.lte(new BN(0))) {
            return []
        }

        const quoteTokenType = configData.quoteTokenFlag as TokenType

        let rateLimiterApplied = false
        if (
            configData.poolFees.baseFee.baseFeeMode === BaseFeeMode.RateLimiter
        ) {
            const currentPoint = await this.getCurrentPoint(
                configData.activationType
            )
            rateLimiterApplied = isRateLimiterApplied(
                currentPoint,
                new BN(0),
                TradeDirection.QuoteToBase,
                new BN(configData.poolFees.baseFee.secondFactor.toString()),
                new BN(configData.poolFees.baseFee.thirdFactor.toString()),
                new BN(configData.poolFees.baseFee.firstFactor.toString())
            )
        }

        const needsRemainingAccounts =
            rateLimiterApplied || configData.enableFirstSwapWithMinFee !== 0

        return this.buildSwapBuyInstructions({
            baseMint,
            quoteMint,
            config,
            baseTokenType: tokenType,
            quoteTokenType,
            buyerParam: firstBuyParam,
            needsRemainingAccounts,
        })
    }

    private async buildSwapBuyInstructions(opts: {
        baseMint: Address
        quoteMint: Address
        config: Address
        baseTokenType: TokenType
        quoteTokenType: TokenType
        buyerParam: KitFirstBuyParams
        needsRemainingAccounts: boolean
    }): Promise<Instruction[]> {
        const {
            baseMint,
            quoteMint,
            config,
            baseTokenType,
            quoteTokenType,
            buyerParam,
            needsRemainingAccounts,
        } = opts

        const buyerSigner = toSigner(buyerParam.buyer)
        const buyerAddress = toAddress(buyerParam.buyer)
        const receiverAddress = buyerParam.receiver
            ? toAddress(buyerParam.receiver)
            : buyerAddress

        // First buy is always QuoteToBase (buying base tokens with quote)
        const { inputMint, outputMint, inputTokenProgram, outputTokenProgram } =
            prepareSwapParams(
                false,
                baseMint,
                baseTokenType,
                quoteMint,
                quoteTokenType
            )

        const pool = await findPoolPda(quoteMint, baseMint, config)
        const baseVault = await findTokenVaultPda(pool, baseMint)
        const quoteVault = await findTokenVaultPda(pool, quoteMint)

        const preInstructions: Instruction[] = []
        const postInstructions: Instruction[] = []

        // Create input ATA for buyer
        const { ata: inputTokenAccount, instruction: createInputAtaIx } =
            await createAssociatedTokenAccountIdempotentInstruction(
                buyerSigner,
                buyerAddress,
                inputMint,
                inputTokenProgram
            )
        preInstructions.push(createInputAtaIx)

        // Create output ATA for receiver
        const { ata: outputTokenAccount, instruction: createOutputAtaIx } =
            await createAssociatedTokenAccountIdempotentInstruction(
                buyerSigner,
                receiverAddress,
                outputMint,
                outputTokenProgram
            )
        preInstructions.push(createOutputAtaIx)

        // SOL wrap/unwrap
        if (inputMint === NATIVE_MINT_ADDRESS) {
            preInstructions.push(
                ...wrapSolInstructions(
                    buyerSigner,
                    inputTokenAccount,
                    BigInt(buyerParam.buyAmount.toString())
                )
            )
        }

        if (
            inputMint === NATIVE_MINT_ADDRESS ||
            outputMint === NATIVE_MINT_ADDRESS
        ) {
            postInstructions.push(
                await unwrapSolInstruction(buyerSigner, buyerAddress)
            )
        }

        const swapIx = await getSwapInstructionAsync({
            config,
            pool,
            inputTokenAccount,
            outputTokenAccount,
            baseVault,
            quoteVault,
            baseMint,
            quoteMint,
            payer: buyerSigner,
            tokenBaseProgram: outputTokenProgram,
            tokenQuoteProgram: inputTokenProgram,
            referralTokenAccount: toOptionalAddress(
                buyerParam.referralTokenAccount
            ),
            program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
            params: {
                amountIn: BigInt(buyerParam.buyAmount.toString()),
                minimumAmountOut: BigInt(
                    buyerParam.minimumAmountOut.toString()
                ),
            },
        })

        return [
            ...preInstructions,
            needsRemainingAccounts ? addRemainingAccount(swapIx) : swapIx,
            ...postInstructions,
        ]
    }

    private async checkRateLimiterOrFirstSwapMinFee(
        configData: {
            poolFees: {
                baseFee: {
                    baseFeeMode: number
                    secondFactor: bigint
                    thirdFactor: bigint
                    firstFactor: number
                }
            }
            activationType: number
            enableFirstSwapWithMinFee: number
        },
        poolData: {
            activationPoint: bigint
        },
        swapBaseForQuote: boolean
    ): Promise<boolean> {
        if (configData.enableFirstSwapWithMinFee !== 0) {
            return true
        }

        if (
            configData.poolFees.baseFee.baseFeeMode === BaseFeeMode.RateLimiter
        ) {
            const currentPoint = await this.getCurrentPoint(
                configData.activationType
            )
            return isRateLimiterApplied(
                currentPoint,
                new BN(poolData.activationPoint.toString()),
                swapBaseForQuote
                    ? TradeDirection.BaseToQuote
                    : TradeDirection.QuoteToBase,
                new BN(configData.poolFees.baseFee.secondFactor.toString()),
                new BN(configData.poolFees.baseFee.thirdFactor.toString()),
                new BN(configData.poolFees.baseFee.firstFactor.toString())
            )
        }

        return false
    }

    private async getCurrentPoint(activationType: number): Promise<BN> {
        if (activationType === ActivationType.Slot) {
            const slot = await this.rpc.getSlot().send()
            return new BN(slot.toString())
        } else {
            const slot = await this.rpc.getSlot().send()
            const blockTime = await this.rpc.getBlockTime(slot).send()
            return new BN((blockTime ?? 0).toString())
        }
    }
}

// ── Module-level helpers ─────────────────────────────────────────

function prepareSwapParams(
    swapBaseForQuote: boolean,
    baseMint: Address,
    baseTokenType: TokenType,
    quoteMint: Address,
    quoteTokenType: TokenType
): {
    inputMint: Address
    outputMint: Address
    inputTokenProgram: Address
    outputTokenProgram: Address
} {
    if (swapBaseForQuote) {
        return {
            inputMint: baseMint,
            outputMint: quoteMint,
            inputTokenProgram: getTokenProgramAddress(baseTokenType),
            outputTokenProgram: getTokenProgramAddress(quoteTokenType),
        }
    } else {
        return {
            inputMint: quoteMint,
            outputMint: baseMint,
            inputTokenProgram: getTokenProgramAddress(quoteTokenType),
            outputTokenProgram: getTokenProgramAddress(baseTokenType),
        }
    }
}

function addRemainingAccount<T extends Instruction>(instruction: T): T {
    const accounts = [...(instruction.accounts ?? [])]
    accounts.push({
        address: SYSVAR_INSTRUCTIONS_ADDRESS,
        role: 0, // readonly
    } as any)
    return { ...instruction, accounts }
}
