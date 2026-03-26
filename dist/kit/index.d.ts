import { Instruction, TransactionSigner, Address, ReadonlyUint8Array, Rpc, SolanaRpcApi, Account, MaybeAccount } from '@solana/kit';
import BN from 'bn.js';

/**
 * Kit-owned copies of pure enums from the DBC IDL.
 *
 * These are duplicated here so that the Kit tree has zero transitive
 * imports of @solana/web3.js at runtime.  The source of truth is
 * the on-chain IDL; these values are stable and change only when
 * the program is upgraded.
 */
declare enum ActivationType {
    Slot = 0,
    Timestamp = 1
}
declare enum TokenType {
    SPL = 0,
    Token2022 = 1
}
declare enum SwapMode {
    ExactIn = 0,
    PartialFill = 1,
    ExactOut = 2
}
declare enum BaseFeeMode {
    FeeSchedulerLinear = 0,
    FeeSchedulerExponential = 1,
    RateLimiter = 2
}
declare enum TradeDirection {
    BaseToQuote = 0,
    QuoteToBase = 1
}

type KitAddressInput<TAddress extends string = string> = Address<TAddress> | string;
type KitSignerInput<TAddress extends string = string> = TransactionSigner<TAddress>;
type KitAddressOrSignerInput<TAddress extends string = string> = KitAddressInput<TAddress> | KitSignerInput<TAddress>;
type KitTransactionPlan = {
    instructions: Instruction[];
    signers: TransactionSigner[];
};
type CreateConfigAndPoolWithFirstBuyKitResult = {
    createConfigPlan: KitTransactionPlan;
    createPoolWithFirstBuyPlan: KitTransactionPlan;
};
type KitBigintInput = BN | bigint | number;
type KitPaddingInput = Uint8Array | readonly number[] | number[];
type KitBaseFeeParameters = {
    cliffFeeNumerator: KitBigintInput;
    firstFactor: number;
    secondFactor: KitBigintInput;
    thirdFactor: KitBigintInput;
    baseFeeMode: number;
};
type KitDynamicFeeParameters = {
    initialized?: number;
    padding?: KitPaddingInput;
    maxVolatilityAccumulator: number;
    variableFeeControl: number;
    binStep: number;
    filterPeriod: number;
    decayPeriod: number;
    reductionFactor: number;
    padding2?: KitPaddingInput;
    binStepU128: KitBigintInput;
};
type KitPoolFeeParameters = {
    baseFee: KitBaseFeeParameters;
    dynamicFee: KitDynamicFeeParameters | null;
};
type KitLockedVestingParameters = {
    amountPerPeriod: KitBigintInput;
    cliffDurationFromMigrationTime: KitBigintInput;
    frequency: KitBigintInput;
    numberOfPeriod: KitBigintInput;
    cliffUnlockAmount: KitBigintInput;
};
type KitTokenSupplyParams = {
    preMigrationTokenSupply: KitBigintInput;
    postMigrationTokenSupply: KitBigintInput;
};
type KitMigrationFee = {
    feePercentage: number;
    creatorFeePercentage: number;
};
type KitMigratedPoolFee = {
    collectFeeMode: number;
    dynamicFee: number;
    poolFeeBps: number;
    compoundingFeeBps?: number;
};
type KitLiquidityVestingInfoParameters = {
    vestingPercentage: number;
    bpsPerPeriod: number;
    numberOfPeriods: number;
    frequency: number;
    cliffDurationFromMigrationTime: number;
    totalDuration?: number;
};
type KitMigratedPoolMarketCapFeeSchedulerParameters = {
    numberOfPeriod: number;
    schedulerExpirationDuration: number;
} & ({
    endingBaseFeeBps: number;
    startingMarketCap: number;
    endingMarketCap: number;
} | {
    sqrtPriceStepBps: number;
    reductionFactor: KitBigintInput;
});
type KitCurvePoint = {
    sqrtPrice: KitBigintInput;
    liquidity: KitBigintInput;
};
type KitConfigParameters = {
    poolFees: KitPoolFeeParameters;
    collectFeeMode: number;
    migrationOption: number;
    activationType: number;
    tokenType: number;
    tokenDecimal: number;
    partnerLiquidityPercentage: number;
    partnerPermanentLockedLiquidityPercentage: number;
    creatorLiquidityPercentage: number;
    creatorPermanentLockedLiquidityPercentage: number;
    migrationQuoteThreshold: KitBigintInput;
    sqrtStartPrice: KitBigintInput;
    lockedVesting: KitLockedVestingParameters;
    migrationFeeOption: number;
    tokenSupply: KitTokenSupplyParams | null;
    creatorTradingFeePercentage: number;
    tokenUpdateAuthority: number;
    migrationFee: KitMigrationFee;
    migratedPoolFee: KitMigratedPoolFee;
    poolCreationFee: KitBigintInput;
    partnerLiquidityVestingInfo: KitLiquidityVestingInfoParameters;
    creatorLiquidityVestingInfo: KitLiquidityVestingInfoParameters;
    migratedPoolBaseFeeMode: number;
    migratedPoolMarketCapFeeSchedulerParams: KitMigratedPoolMarketCapFeeSchedulerParameters;
    enableFirstSwapWithMinFee: boolean;
    compoundingFeeBps: number;
    padding: KitPaddingInput;
    curve: KitCurvePoint[];
};
type KitPreCreatePoolParams = {
    name: string;
    symbol: string;
    uri: string;
    poolCreator: KitAddressOrSignerInput;
    baseMint: KitAddressOrSignerInput;
};
type KitFirstBuyParams = {
    buyer: KitAddressOrSignerInput;
    receiver?: KitAddressInput;
    buyAmount: BN;
    minimumAmountOut: BN;
    referralTokenAccount: KitAddressInput | null;
};
type KitPartnerFirstBuyParams = {
    partner: KitAddressOrSignerInput;
    receiver: KitAddressInput;
    buyAmount: BN;
    minimumAmountOut: BN;
    referralTokenAccount: KitAddressInput | null;
};
type KitCreatorFirstBuyParams = {
    creator: KitAddressOrSignerInput;
    receiver: KitAddressInput;
    buyAmount: BN;
    minimumAmountOut: BN;
    referralTokenAccount: KitAddressInput | null;
};
type KitCreateConfigParams = KitConfigParameters & {
    config: KitAddressOrSignerInput;
    feeClaimer: KitAddressInput;
    leftoverReceiver: KitAddressInput;
    quoteMint: KitAddressInput;
    payer: KitAddressOrSignerInput;
};
type KitCreatePartnerMetadataParams = {
    name: string;
    website: string;
    logo: string;
    feeClaimer: KitAddressOrSignerInput;
    payer: KitAddressOrSignerInput;
};
type KitClaimTradingFeeParams = {
    feeClaimer: KitAddressOrSignerInput;
    payer: KitAddressOrSignerInput;
    pool: KitAddressInput;
    maxBaseAmount: BN;
    maxQuoteAmount: BN;
    receiver?: KitAddressInput;
    tempWSolAcc?: KitAddressOrSignerInput;
};
type KitClaimTradingFee2Params = {
    feeClaimer: KitAddressOrSignerInput;
    payer: KitAddressOrSignerInput;
    pool: KitAddressInput;
    maxBaseAmount: BN;
    maxQuoteAmount: BN;
    receiver: KitAddressInput;
};
type KitPartnerWithdrawSurplusParams = {
    feeClaimer: KitAddressOrSignerInput;
    virtualPool: KitAddressInput;
};
type KitWithdrawMigrationFeeParams = {
    virtualPool: KitAddressInput;
    sender: KitAddressOrSignerInput;
};
type KitClaimPartnerPoolCreationFeeParams = {
    virtualPool: KitAddressInput;
    feeReceiver: KitAddressInput;
};
type KitCreatePoolParams = {
    name: string;
    symbol: string;
    uri: string;
    payer: KitAddressOrSignerInput;
    poolCreator: KitAddressOrSignerInput;
    config: KitAddressInput;
    baseMint: KitAddressOrSignerInput;
};
type KitCreateConfigAndPoolParams = KitCreateConfigParams & {
    preCreatePoolParam: KitPreCreatePoolParams;
};
type KitCreateConfigAndPoolWithFirstBuyParams = KitCreateConfigAndPoolParams & {
    firstBuyParam?: KitFirstBuyParams;
};
type KitCreatePoolWithFirstBuyParams = {
    createPoolParam: KitCreatePoolParams;
    firstBuyParam?: KitFirstBuyParams;
};
type KitCreatePoolWithPartnerAndCreatorFirstBuyParams = {
    createPoolParam: KitCreatePoolParams;
    partnerFirstBuyParam?: KitPartnerFirstBuyParams;
    creatorFirstBuyParam?: KitCreatorFirstBuyParams;
};
type KitSwapParams = {
    owner: KitAddressOrSignerInput;
    pool: KitAddressInput;
    amountIn: BN;
    minimumAmountOut: BN;
    swapBaseForQuote: boolean;
    referralTokenAccount: KitAddressInput | null;
    payer?: KitAddressOrSignerInput;
};
type KitSwap2BaseParams = {
    owner: KitAddressOrSignerInput;
    pool: KitAddressInput;
    swapBaseForQuote: boolean;
    referralTokenAccount: KitAddressInput | null;
    payer?: KitAddressOrSignerInput;
};
type KitSwap2Params = KitSwap2BaseParams & ({
    swapMode: SwapMode.ExactIn;
    amountIn: BN;
    minimumAmountOut: BN;
} | {
    swapMode: SwapMode.PartialFill;
    amountIn: BN;
    minimumAmountOut: BN;
} | {
    swapMode: SwapMode.ExactOut;
    amountOut: BN;
    maximumAmountIn: BN;
});
type KitCreatePoolMetadataParams = {
    virtualPool: KitAddressInput;
    name: string;
    website: string;
    logo: string;
    creator: KitAddressOrSignerInput;
    payer: KitAddressOrSignerInput;
};
type KitClaimCreatorTradingFeeParams = {
    creator: KitAddressOrSignerInput;
    payer: KitAddressOrSignerInput;
    pool: KitAddressInput;
    maxBaseAmount: BN;
    maxQuoteAmount: BN;
    receiver?: KitAddressInput;
    tempWSolAcc?: KitAddressOrSignerInput;
};
type KitClaimCreatorTradingFee2Params = {
    creator: KitAddressOrSignerInput;
    payer: KitAddressOrSignerInput;
    pool: KitAddressInput;
    maxBaseAmount: BN;
    maxQuoteAmount: BN;
    receiver: KitAddressInput;
};
type KitCreatorWithdrawSurplusParams = {
    creator: KitAddressOrSignerInput;
    virtualPool: KitAddressInput;
};
type KitTransferPoolCreatorParams = {
    virtualPool: KitAddressInput;
    creator: KitAddressOrSignerInput;
    newCreator: KitAddressInput;
};
type KitCreateLockerParams = {
    payer: KitAddressOrSignerInput;
    virtualPool: KitAddressInput;
};
type KitWithdrawLeftoverParams = {
    payer: KitAddressOrSignerInput;
    virtualPool: KitAddressInput;
};
type KitCreateDammV1MigrationMetadataParams = {
    payer: KitAddressOrSignerInput;
    virtualPool: KitAddressInput;
    config: KitAddressInput;
};
type KitMigrateToDammV1Params = {
    payer: KitAddressOrSignerInput;
    virtualPool: KitAddressInput;
    dammConfig: KitAddressInput;
};
type KitMigrateToDammV2Params = KitMigrateToDammV1Params;
type KitDammLpTokenParams = {
    payer: KitAddressOrSignerInput;
    virtualPool: KitAddressInput;
    dammConfig: KitAddressInput;
    isPartner: boolean;
};
interface DynamicBondingCurveKitPartnerClient {
    createConfig(params: KitCreateConfigParams): Promise<KitTransactionPlan>;
    createPartnerMetadata(params: KitCreatePartnerMetadataParams): Promise<KitTransactionPlan>;
    claimPartnerTradingFee(params: KitClaimTradingFeeParams): Promise<KitTransactionPlan>;
    claimPartnerTradingFee2(params: KitClaimTradingFee2Params): Promise<KitTransactionPlan>;
    partnerWithdrawSurplus(params: KitPartnerWithdrawSurplusParams): Promise<KitTransactionPlan>;
    partnerWithdrawMigrationFee(params: KitWithdrawMigrationFeeParams): Promise<KitTransactionPlan>;
    claimPartnerPoolCreationFee(params: KitClaimPartnerPoolCreationFeeParams): Promise<KitTransactionPlan>;
}
interface DynamicBondingCurveKitPoolClient {
    createPool(params: KitCreatePoolParams): Promise<KitTransactionPlan>;
    createConfigAndPool(params: KitCreateConfigAndPoolParams): Promise<KitTransactionPlan>;
    createConfigAndPoolWithFirstBuy(params: KitCreateConfigAndPoolWithFirstBuyParams): Promise<CreateConfigAndPoolWithFirstBuyKitResult>;
    createPoolWithFirstBuy(params: KitCreatePoolWithFirstBuyParams): Promise<KitTransactionPlan>;
    createPoolWithPartnerAndCreatorFirstBuy(params: KitCreatePoolWithPartnerAndCreatorFirstBuyParams): Promise<KitTransactionPlan>;
    swap(params: KitSwapParams): Promise<KitTransactionPlan>;
    swap2(params: KitSwap2Params): Promise<KitTransactionPlan>;
}
interface DynamicBondingCurveKitCreatorClient {
    createPoolMetadata(params: KitCreatePoolMetadataParams): Promise<KitTransactionPlan>;
    claimCreatorTradingFee(params: KitClaimCreatorTradingFeeParams): Promise<KitTransactionPlan>;
    claimCreatorTradingFee2(params: KitClaimCreatorTradingFee2Params): Promise<KitTransactionPlan>;
    creatorWithdrawSurplus(params: KitCreatorWithdrawSurplusParams): Promise<KitTransactionPlan>;
    transferPoolCreator(params: KitTransferPoolCreatorParams): Promise<KitTransactionPlan>;
    creatorWithdrawMigrationFee(params: KitWithdrawMigrationFeeParams): Promise<KitTransactionPlan>;
}
interface DynamicBondingCurveKitMigrationClient {
    createLocker(params: KitCreateLockerParams): Promise<KitTransactionPlan>;
    withdrawLeftover(params: KitWithdrawLeftoverParams): Promise<KitTransactionPlan>;
    createDammV1MigrationMetadata(params: KitCreateDammV1MigrationMetadataParams): Promise<KitTransactionPlan>;
    migrateToDammV1(params: KitMigrateToDammV1Params): Promise<KitTransactionPlan>;
    lockDammV1LpToken(params: KitDammLpTokenParams): Promise<KitTransactionPlan>;
    claimDammV1LpToken(params: KitDammLpTokenParams): Promise<KitTransactionPlan>;
    migrateToDammV2(params: KitMigrateToDammV2Params): Promise<KitTransactionPlan>;
}

/**
 * This code was AUTOGENERATED using the Codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun Codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

type BaseFeeConfig = {
    cliffFeeNumerator: bigint;
    secondFactor: bigint;
    thirdFactor: bigint;
    firstFactor: number;
    baseFeeMode: number;
    padding0: ReadonlyUint8Array;
};

/**
 * This code was AUTOGENERATED using the Codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun Codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

type DynamicFeeConfig = {
    initialized: number;
    padding: ReadonlyUint8Array;
    maxVolatilityAccumulator: number;
    variableFeeControl: number;
    binStep: number;
    filterPeriod: number;
    decayPeriod: number;
    reductionFactor: number;
    padding2: ReadonlyUint8Array;
    binStepU128: bigint;
};

/**
 * This code was AUTOGENERATED using the Codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun Codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

type LiquidityDistributionConfig = {
    sqrtPrice: bigint;
    liquidity: bigint;
};

/**
 * This code was AUTOGENERATED using the Codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun Codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

type LiquidityVestingInfo = {
    isInitialized: number;
    vestingPercentage: number;
    padding: ReadonlyUint8Array;
    bpsPerPeriod: number;
    numberOfPeriods: number;
    frequency: number;
    cliffDurationFromMigrationTime: number;
};

/**
 * This code was AUTOGENERATED using the Codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun Codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

type LockedVestingConfig = {
    amountPerPeriod: bigint;
    cliffDurationFromMigrationTime: bigint;
    frequency: bigint;
    numberOfPeriod: bigint;
    cliffUnlockAmount: bigint;
    padding: bigint;
};

/**
 * This code was AUTOGENERATED using the Codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun Codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

type PoolFeesConfig = {
    baseFee: BaseFeeConfig;
    dynamicFee: DynamicFeeConfig;
};

/**
 * This code was AUTOGENERATED using the Codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun Codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

type PoolMetrics = {
    totalProtocolBaseFee: bigint;
    totalProtocolQuoteFee: bigint;
    totalTradingBaseFee: bigint;
    totalTradingQuoteFee: bigint;
};

/**
 * This code was AUTOGENERATED using the Codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun Codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

type VolatilityTracker = {
    lastUpdateTimestamp: bigint;
    padding: ReadonlyUint8Array;
    sqrtPriceReference: bigint;
    volatilityAccumulator: bigint;
    volatilityReference: bigint;
};

/**
 * This code was AUTOGENERATED using the Codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun Codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

type PoolConfig = {
    discriminator: ReadonlyUint8Array;
    /** quote mint */
    quoteMint: Address;
    /** Address to get the fee */
    feeClaimer: Address;
    /** Address to receive extra base token after migration, in case token is fixed supply */
    leftoverReceiver: Address;
    /** Pool fee */
    poolFees: PoolFeesConfig;
    partnerLiquidityVestingInfo: LiquidityVestingInfo;
    creatorLiquidityVestingInfo: LiquidityVestingInfo;
    /** Padding for future use */
    padding0: ReadonlyUint8Array;
    /** Previously was protocol and referral fee percent. Beware of tombstone. */
    padding1: number;
    /** Collect fee mode */
    collectFeeMode: number;
    /** migration option */
    migrationOption: number;
    /** whether mode slot or timestamp */
    activationType: number;
    /** token decimals */
    tokenDecimal: number;
    /** version */
    version: number;
    /** token type of base token */
    tokenType: number;
    /** quote token flag */
    quoteTokenFlag: number;
    /** partner locked liquidity percentage */
    partnerPermanentLockedLiquidityPercentage: number;
    /** partner liquidity percentage */
    partnerLiquidityPercentage: number;
    /** creator post migration fee percentage */
    creatorPermanentLockedLiquidityPercentage: number;
    /** creator liquidity percentage */
    creatorLiquidityPercentage: number;
    /** migration fee option */
    migrationFeeOption: number;
    /** flag to indicate whether token is dynamic supply (0) or fixed supply (1) */
    fixedTokenSupplyFlag: number;
    /** creator trading fee percentage */
    creatorTradingFeePercentage: number;
    /** token update authority */
    tokenUpdateAuthority: number;
    /** migration fee percentage */
    migrationFeePercentage: number;
    /** creator migration fee percentage */
    creatorMigrationFeePercentage: number;
    padding2: ReadonlyUint8Array;
    /** swap base amount */
    swapBaseAmount: bigint;
    /** migration quote threshold (in quote token) */
    migrationQuoteThreshold: bigint;
    /** migration base threshold (in base token) */
    migrationBaseThreshold: bigint;
    /** migration sqrt price */
    migrationSqrtPrice: bigint;
    /** locked vesting config */
    lockedVestingConfig: LockedVestingConfig;
    /** pre migration token supply */
    preMigrationTokenSupply: bigint;
    /** post migration token supply */
    postMigrationTokenSupply: bigint;
    /** migrated pool collect fee mode */
    migratedCollectFeeMode: number;
    /** migrated dynamic fee option. */
    migratedDynamicFee: number;
    /** migrated pool fee in bps */
    migratedPoolFeeBps: number;
    migratedPoolBaseFeeMode: number;
    enableFirstSwapWithMinFee: number;
    /** compounding fee bps for migrated DAMM v2 pool, should only be non-zero if migrated_collect_fee_mode is 2 (Compounding) */
    migratedCompoundingFeeBps: number;
    /** pool creation fee in lamports value */
    poolCreationFee: bigint;
    /** serialized MigratedPoolMarketCapFeeSchedulerParams, only used when migrated_pool_base_fee_mode is market cap scheduler */
    migratedPoolBaseFeeBytes: ReadonlyUint8Array;
    /** minimum price */
    sqrtStartPrice: bigint;
    /** curve, only use 20 point firstly, we can extend that latter */
    curve: Array<LiquidityDistributionConfig>;
};

/**
 * This code was AUTOGENERATED using the Codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun Codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

type VirtualPool = {
    discriminator: ReadonlyUint8Array;
    /** volatility tracker */
    volatilityTracker: VolatilityTracker;
    /** config key */
    config: Address;
    /** creator */
    creator: Address;
    /** base mint */
    baseMint: Address;
    /** base vault */
    baseVault: Address;
    /** quote vault */
    quoteVault: Address;
    /** base reserve */
    baseReserve: bigint;
    /** quote reserve */
    quoteReserve: bigint;
    /** protocol base fee */
    protocolBaseFee: bigint;
    /** protocol quote fee */
    protocolQuoteFee: bigint;
    /** partner base fee */
    partnerBaseFee: bigint;
    /** trading quote fee */
    partnerQuoteFee: bigint;
    /** current price */
    sqrtPrice: bigint;
    /** Activation point */
    activationPoint: bigint;
    /** pool type, spl token or token2022 */
    poolType: number;
    /** is migrated */
    isMigrated: number;
    /** is partner withdraw surplus */
    isPartnerWithdrawSurplus: number;
    /** is protocol withdraw surplus */
    isProtocolWithdrawSurplus: number;
    /** migration progress */
    migrationProgress: number;
    /** is withdraw leftover */
    isWithdrawLeftover: number;
    /** is creator withdraw surplus */
    isCreatorWithdrawSurplus: number;
    /**
     * migration fee withdraw status
     * bit 1 (0b010) creator
     * bit 2 (0b100) partner
     */
    migrationFeeWithdrawStatus: number;
    /** pool metrics */
    metrics: PoolMetrics;
    /** The time curve is finished */
    finishCurveTimestamp: bigint;
    /** creator base fee */
    creatorBaseFee: bigint;
    /** creator quote fee */
    creatorQuoteFee: bigint;
    /** legacy creation fee bits, we dont use this now */
    legacyCreationFeeBits: number;
    /** pool creation fee claim status */
    creationFeeBits: number;
    /** Cached flag */
    hasSwap: number;
    /** Padding for further use */
    padding0: ReadonlyUint8Array;
    protocolLiquidityMigrationFeeBps: number;
    padding1: ReadonlyUint8Array;
    protocolMigrationBaseFeeAmount: bigint;
    protocolMigrationQuoteFeeAmount: bigint;
    /** Padding for further use */
    padding2: Array<bigint>;
};

type KitRpc = Rpc<SolanaRpcApi>;
interface KitPoolState {
    /** Current token price in SOL */
    price: number;
    /** SOL reserve (in SOL, not lamports) */
    quoteReserve: number;
    /** Token reserve (in whole tokens) */
    baseReserve: number;
    /** Whether the pool has graduated */
    graduated: boolean;
    /** Progress toward graduation as 0..1 */
    progress: number;
    /** Base mint address */
    baseMint: string;
    /** Config address */
    config: string;
}
interface KitFeeBreakdown {
    creator: {
        unclaimedBaseFee: bigint;
        unclaimedQuoteFee: bigint;
        claimedBaseFee: bigint;
        claimedQuoteFee: bigint;
        totalBaseFee: bigint;
        totalQuoteFee: bigint;
    };
    partner: {
        unclaimedBaseFee: bigint;
        unclaimedQuoteFee: bigint;
        claimedBaseFee: bigint;
        claimedQuoteFee: bigint;
        totalBaseFee: bigint;
        totalQuoteFee: bigint;
    };
}
declare class DynamicBondingCurveKitStateService {
    private readonly rpc;
    constructor(rpc: KitRpc);
    getPool<TAddress extends string = string>(poolAddress: Address<TAddress>): Promise<Account<VirtualPool, TAddress>>;
    getMaybePool<TAddress extends string = string>(poolAddress: Address<TAddress>): Promise<MaybeAccount<VirtualPool, TAddress>>;
    getPoolConfig<TAddress extends string = string>(configAddress: Address<TAddress>): Promise<Account<PoolConfig, TAddress>>;
    getMaybePoolConfig<TAddress extends string = string>(configAddress: Address<TAddress>): Promise<MaybeAccount<PoolConfig, TAddress>>;
    /**
     * Get computed pool state including price, reserves, and graduation progress.
     */
    getPoolState(poolAddress: Address, baseDecimals: number, quoteDecimals: number): Promise<KitPoolState>;
    /**
     * Get fee breakdown for creator and partner from pool account data.
     */
    getPoolFeeBreakdown(poolAddress: Address): Promise<KitFeeBreakdown>;
    /**
     * Get quote token curve progress (0..1).
     */
    getQuoteTokenCurveProgress(poolAddress: Address): Promise<number>;
}

declare class DynamicBondingCurveKitClient {
    readonly pool: DynamicBondingCurveKitPoolClient;
    readonly partner: DynamicBondingCurveKitPartnerClient;
    readonly creator: DynamicBondingCurveKitCreatorClient;
    readonly migration: DynamicBondingCurveKitMigrationClient;
    readonly state: DynamicBondingCurveKitStateService;
    private constructor();
    static fromRpcUrl(rpcUrl: string): DynamicBondingCurveKitClient;
    static fromRpc(rpc: Rpc<SolanaRpcApi>): DynamicBondingCurveKitClient;
}

export { ActivationType, BaseFeeMode, type CreateConfigAndPoolWithFirstBuyKitResult, DynamicBondingCurveKitClient, type DynamicBondingCurveKitCreatorClient, type DynamicBondingCurveKitMigrationClient, type DynamicBondingCurveKitPartnerClient, type DynamicBondingCurveKitPoolClient, DynamicBondingCurveKitStateService, type KitAddressInput, type KitAddressOrSignerInput, type KitClaimCreatorTradingFee2Params, type KitClaimCreatorTradingFeeParams, type KitClaimPartnerPoolCreationFeeParams, type KitClaimTradingFee2Params, type KitClaimTradingFeeParams, type KitConfigParameters, type KitCreateConfigAndPoolParams, type KitCreateConfigAndPoolWithFirstBuyParams, type KitCreateConfigParams, type KitCreateDammV1MigrationMetadataParams, type KitCreateLockerParams, type KitCreatePartnerMetadataParams, type KitCreatePoolMetadataParams, type KitCreatePoolParams, type KitCreatePoolWithFirstBuyParams, type KitCreatePoolWithPartnerAndCreatorFirstBuyParams, type KitCreatorFirstBuyParams, type KitCreatorWithdrawSurplusParams, type KitDammLpTokenParams, type KitFeeBreakdown, type KitFirstBuyParams, type KitMigrateToDammV1Params, type KitMigrateToDammV2Params, type KitPartnerFirstBuyParams, type KitPartnerWithdrawSurplusParams, type KitPoolState, type KitPreCreatePoolParams, type KitSignerInput, type KitSwap2Params, type KitSwapParams, type KitTransactionPlan, type KitTransferPoolCreatorParams, type KitWithdrawLeftoverParams, type KitWithdrawMigrationFeeParams, SwapMode, TokenType, TradeDirection };
