import type BN from 'bn.js'
import type { Address, Instruction, TransactionSigner } from '@solana/kit'
import { SwapMode } from './enums'

export type KitAddressInput<TAddress extends string = string> =
    | Address<TAddress>
    | string

export type KitSignerInput<TAddress extends string = string> =
    TransactionSigner<TAddress>

export type KitAddressOrSignerInput<TAddress extends string = string> =
    | KitAddressInput<TAddress>
    | KitSignerInput<TAddress>

export type KitTransactionPlan = {
    instructions: Instruction[]
    signers: TransactionSigner[]
}

export type CreateConfigAndPoolWithFirstBuyKitResult = {
    createConfigPlan: KitTransactionPlan
    createPoolWithFirstBuyPlan: KitTransactionPlan
}

type KitBigintInput = BN | bigint | number
type KitPaddingInput = Uint8Array | readonly number[] | number[]

type KitBaseFeeParameters = {
    cliffFeeNumerator: KitBigintInput
    firstFactor: number
    secondFactor: KitBigintInput
    thirdFactor: KitBigintInput
    baseFeeMode: number
}

type KitDynamicFeeParameters = {
    initialized?: number
    padding?: KitPaddingInput
    maxVolatilityAccumulator: number
    variableFeeControl: number
    binStep: number
    filterPeriod: number
    decayPeriod: number
    reductionFactor: number
    padding2?: KitPaddingInput
    binStepU128: KitBigintInput
}

type KitPoolFeeParameters = {
    baseFee: KitBaseFeeParameters
    dynamicFee: KitDynamicFeeParameters | null
}

type KitLockedVestingParameters = {
    amountPerPeriod: KitBigintInput
    cliffDurationFromMigrationTime: KitBigintInput
    frequency: KitBigintInput
    numberOfPeriod: KitBigintInput
    cliffUnlockAmount: KitBigintInput
}

type KitTokenSupplyParams = {
    preMigrationTokenSupply: KitBigintInput
    postMigrationTokenSupply: KitBigintInput
}

type KitMigrationFee = {
    feePercentage: number
    creatorFeePercentage: number
}

type KitMigratedPoolFee = {
    collectFeeMode: number
    dynamicFee: number
    poolFeeBps: number
    compoundingFeeBps?: number
}

type KitLiquidityVestingInfoParameters = {
    vestingPercentage: number
    bpsPerPeriod: number
    numberOfPeriods: number
    frequency: number
    cliffDurationFromMigrationTime: number
    totalDuration?: number
}

type KitMigratedPoolMarketCapFeeSchedulerParameters = {
    numberOfPeriod: number
    schedulerExpirationDuration: number
} & (
    | {
          endingBaseFeeBps: number
          startingMarketCap: number
          endingMarketCap: number
      }
    | {
          sqrtPriceStepBps: number
          reductionFactor: KitBigintInput
      }
)

type KitCurvePoint = {
    sqrtPrice: KitBigintInput
    liquidity: KitBigintInput
}

export type KitConfigParameters = {
    poolFees: KitPoolFeeParameters
    collectFeeMode: number
    migrationOption: number
    activationType: number
    tokenType: number
    tokenDecimal: number
    partnerLiquidityPercentage: number
    partnerPermanentLockedLiquidityPercentage: number
    creatorLiquidityPercentage: number
    creatorPermanentLockedLiquidityPercentage: number
    migrationQuoteThreshold: KitBigintInput
    sqrtStartPrice: KitBigintInput
    lockedVesting: KitLockedVestingParameters
    migrationFeeOption: number
    tokenSupply: KitTokenSupplyParams | null
    creatorTradingFeePercentage: number
    tokenUpdateAuthority: number
    migrationFee: KitMigrationFee
    migratedPoolFee: KitMigratedPoolFee
    poolCreationFee: KitBigintInput
    partnerLiquidityVestingInfo: KitLiquidityVestingInfoParameters
    creatorLiquidityVestingInfo: KitLiquidityVestingInfoParameters
    migratedPoolBaseFeeMode: number
    migratedPoolMarketCapFeeSchedulerParams: KitMigratedPoolMarketCapFeeSchedulerParameters
    enableFirstSwapWithMinFee: boolean
    compoundingFeeBps: number
    padding: KitPaddingInput
    curve: KitCurvePoint[]
}

export type KitPreCreatePoolParams = {
    name: string
    symbol: string
    uri: string
    poolCreator: KitAddressOrSignerInput
    baseMint: KitAddressOrSignerInput
}

export type KitFirstBuyParams = {
    buyer: KitAddressOrSignerInput
    receiver?: KitAddressInput
    buyAmount: BN
    minimumAmountOut: BN
    referralTokenAccount: KitAddressInput | null
}

export type KitPartnerFirstBuyParams = {
    partner: KitAddressOrSignerInput
    receiver: KitAddressInput
    buyAmount: BN
    minimumAmountOut: BN
    referralTokenAccount: KitAddressInput | null
}

export type KitCreatorFirstBuyParams = {
    creator: KitAddressOrSignerInput
    receiver: KitAddressInput
    buyAmount: BN
    minimumAmountOut: BN
    referralTokenAccount: KitAddressInput | null
}

export type KitCreateConfigParams = KitConfigParameters & {
    config: KitAddressOrSignerInput
    feeClaimer: KitAddressInput
    leftoverReceiver: KitAddressInput
    quoteMint: KitAddressInput
    payer: KitAddressOrSignerInput
}

export type KitCreatePartnerMetadataParams = {
    name: string
    website: string
    logo: string
    feeClaimer: KitAddressOrSignerInput
    payer: KitAddressOrSignerInput
}

export type KitClaimTradingFeeParams = {
    feeClaimer: KitAddressOrSignerInput
    payer: KitAddressOrSignerInput
    pool: KitAddressInput
    maxBaseAmount: BN
    maxQuoteAmount: BN
    receiver?: KitAddressInput
    tempWSolAcc?: KitAddressOrSignerInput
}

export type KitClaimTradingFee2Params = {
    feeClaimer: KitAddressOrSignerInput
    payer: KitAddressOrSignerInput
    pool: KitAddressInput
    maxBaseAmount: BN
    maxQuoteAmount: BN
    receiver: KitAddressInput
}

export type KitPartnerWithdrawSurplusParams = {
    feeClaimer: KitAddressOrSignerInput
    virtualPool: KitAddressInput
}

export type KitWithdrawMigrationFeeParams = {
    virtualPool: KitAddressInput
    sender: KitAddressOrSignerInput
}

export type KitClaimPartnerPoolCreationFeeParams = {
    virtualPool: KitAddressInput
    feeReceiver: KitAddressInput
}

export type KitCreatePoolParams = {
    name: string
    symbol: string
    uri: string
    payer: KitAddressOrSignerInput
    poolCreator: KitAddressOrSignerInput
    config: KitAddressInput
    baseMint: KitAddressOrSignerInput
}

export type KitCreateConfigAndPoolParams = KitCreateConfigParams & {
    preCreatePoolParam: KitPreCreatePoolParams
}

export type KitCreateConfigAndPoolWithFirstBuyParams =
    KitCreateConfigAndPoolParams & {
        firstBuyParam?: KitFirstBuyParams
    }

export type KitCreatePoolWithFirstBuyParams = {
    createPoolParam: KitCreatePoolParams
    firstBuyParam?: KitFirstBuyParams
}

export type KitCreatePoolWithPartnerAndCreatorFirstBuyParams = {
    createPoolParam: KitCreatePoolParams
    partnerFirstBuyParam?: KitPartnerFirstBuyParams
    creatorFirstBuyParam?: KitCreatorFirstBuyParams
}

export type KitSwapParams = {
    owner: KitAddressOrSignerInput
    pool: KitAddressInput
    amountIn: BN
    minimumAmountOut: BN
    swapBaseForQuote: boolean
    referralTokenAccount: KitAddressInput | null
    payer?: KitAddressOrSignerInput
}

type KitSwap2BaseParams = {
    owner: KitAddressOrSignerInput
    pool: KitAddressInput
    swapBaseForQuote: boolean
    referralTokenAccount: KitAddressInput | null
    payer?: KitAddressOrSignerInput
}

export type KitSwap2Params = KitSwap2BaseParams &
    (
        | {
              swapMode: SwapMode.ExactIn
              amountIn: BN
              minimumAmountOut: BN
          }
        | {
              swapMode: SwapMode.PartialFill
              amountIn: BN
              minimumAmountOut: BN
          }
        | {
              swapMode: SwapMode.ExactOut
              amountOut: BN
              maximumAmountIn: BN
          }
    )

export type KitCreatePoolMetadataParams = {
    virtualPool: KitAddressInput
    name: string
    website: string
    logo: string
    creator: KitAddressOrSignerInput
    payer: KitAddressOrSignerInput
}

export type KitClaimCreatorTradingFeeParams = {
    creator: KitAddressOrSignerInput
    payer: KitAddressOrSignerInput
    pool: KitAddressInput
    maxBaseAmount: BN
    maxQuoteAmount: BN
    receiver?: KitAddressInput
    tempWSolAcc?: KitAddressOrSignerInput
}

export type KitClaimCreatorTradingFee2Params = {
    creator: KitAddressOrSignerInput
    payer: KitAddressOrSignerInput
    pool: KitAddressInput
    maxBaseAmount: BN
    maxQuoteAmount: BN
    receiver: KitAddressInput
}

export type KitCreatorWithdrawSurplusParams = {
    creator: KitAddressOrSignerInput
    virtualPool: KitAddressInput
}

export type KitTransferPoolCreatorParams = {
    virtualPool: KitAddressInput
    creator: KitAddressOrSignerInput
    newCreator: KitAddressInput
}

export type KitCreateLockerParams = {
    payer: KitAddressOrSignerInput
    virtualPool: KitAddressInput
}

export type KitWithdrawLeftoverParams = {
    payer: KitAddressOrSignerInput
    virtualPool: KitAddressInput
}

export type KitCreateDammV1MigrationMetadataParams = {
    payer: KitAddressOrSignerInput
    virtualPool: KitAddressInput
    config: KitAddressInput
}

export type KitMigrateToDammV1Params = {
    payer: KitAddressOrSignerInput
    virtualPool: KitAddressInput
    dammConfig: KitAddressInput
}

export type KitMigrateToDammV2Params = KitMigrateToDammV1Params

export type KitDammLpTokenParams = {
    payer: KitAddressOrSignerInput
    virtualPool: KitAddressInput
    dammConfig: KitAddressInput
    isPartner: boolean
}

export interface DynamicBondingCurveKitPartnerClient {
    createConfig(params: KitCreateConfigParams): Promise<KitTransactionPlan>
    createPartnerMetadata(
        params: KitCreatePartnerMetadataParams
    ): Promise<KitTransactionPlan>
    claimPartnerTradingFee(
        params: KitClaimTradingFeeParams
    ): Promise<KitTransactionPlan>
    claimPartnerTradingFee2(
        params: KitClaimTradingFee2Params
    ): Promise<KitTransactionPlan>
    partnerWithdrawSurplus(
        params: KitPartnerWithdrawSurplusParams
    ): Promise<KitTransactionPlan>
    partnerWithdrawMigrationFee(
        params: KitWithdrawMigrationFeeParams
    ): Promise<KitTransactionPlan>
    claimPartnerPoolCreationFee(
        params: KitClaimPartnerPoolCreationFeeParams
    ): Promise<KitTransactionPlan>
}

export interface DynamicBondingCurveKitPoolClient {
    createPool(params: KitCreatePoolParams): Promise<KitTransactionPlan>
    createConfigAndPool(
        params: KitCreateConfigAndPoolParams
    ): Promise<KitTransactionPlan>
    createConfigAndPoolWithFirstBuy(
        params: KitCreateConfigAndPoolWithFirstBuyParams
    ): Promise<CreateConfigAndPoolWithFirstBuyKitResult>
    createPoolWithFirstBuy(
        params: KitCreatePoolWithFirstBuyParams
    ): Promise<KitTransactionPlan>
    createPoolWithPartnerAndCreatorFirstBuy(
        params: KitCreatePoolWithPartnerAndCreatorFirstBuyParams
    ): Promise<KitTransactionPlan>
    swap(params: KitSwapParams): Promise<KitTransactionPlan>
    swap2(params: KitSwap2Params): Promise<KitTransactionPlan>
}

export interface DynamicBondingCurveKitCreatorClient {
    createPoolMetadata(
        params: KitCreatePoolMetadataParams
    ): Promise<KitTransactionPlan>
    claimCreatorTradingFee(
        params: KitClaimCreatorTradingFeeParams
    ): Promise<KitTransactionPlan>
    claimCreatorTradingFee2(
        params: KitClaimCreatorTradingFee2Params
    ): Promise<KitTransactionPlan>
    creatorWithdrawSurplus(
        params: KitCreatorWithdrawSurplusParams
    ): Promise<KitTransactionPlan>
    transferPoolCreator(
        params: KitTransferPoolCreatorParams
    ): Promise<KitTransactionPlan>
    creatorWithdrawMigrationFee(
        params: KitWithdrawMigrationFeeParams
    ): Promise<KitTransactionPlan>
}

export interface DynamicBondingCurveKitMigrationClient {
    createLocker(params: KitCreateLockerParams): Promise<KitTransactionPlan>
    withdrawLeftover(
        params: KitWithdrawLeftoverParams
    ): Promise<KitTransactionPlan>
    createDammV1MigrationMetadata(
        params: KitCreateDammV1MigrationMetadataParams
    ): Promise<KitTransactionPlan>
    migrateToDammV1(
        params: KitMigrateToDammV1Params
    ): Promise<KitTransactionPlan>
    lockDammV1LpToken(params: KitDammLpTokenParams): Promise<KitTransactionPlan>
    claimDammV1LpToken(
        params: KitDammLpTokenParams
    ): Promise<KitTransactionPlan>
    migrateToDammV2(
        params: KitMigrateToDammV2Params
    ): Promise<KitTransactionPlan>
}
