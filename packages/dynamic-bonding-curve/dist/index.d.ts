import { Connection, PublicKey, Commitment, TransactionInstruction, Transaction, GetProgramAccountsFilter } from '@solana/web3.js';
import { Program, ProgramAccount } from '@coral-xyz/anchor';
import { D as DynamicBondingCurve, C as CreateLockerParams, W as WithdrawLeftoverParams, a as CreateDammV1MigrationMetadataParams, M as MigrateToDammV1Params, b as DammLpTokenParams, c as MigrateToDammV2Params, d as MigrateToDammV2Response, e as CreateConfigParams, f as CreatePartnerMetadataParams, g as ClaimTradingFeeParams, h as ClaimTradingFee2Params, P as PartnerWithdrawSurplusParams, i as WithdrawMigrationFeeParams, j as ClaimPartnerPoolCreationFeeParams, k as CreatePoolParams, l as CreateConfigAndPoolParams, m as CreateConfigAndPoolWithFirstBuyParams, n as CreatePoolWithFirstBuyParams, o as CreatePoolWithPartnerAndCreatorFirstBuyParams, S as SwapParams, p as Swap2Params, q as SwapQuoteParams, r as SwapQuoteResult, s as SwapQuote2Params, t as SwapQuote2Result, u as CreateVirtualPoolMetadataParams, v as ClaimCreatorTradingFeeParams, w as ClaimCreatorTradingFee2Params, x as CreatorWithdrawSurplusParams, T as TransferPoolCreatorParams, y as PoolConfig, V as VirtualPool, z as VirtualPoolMetadata, A as PartnerMetadata, L as LockEscrow, B as MeteoraDammMigrationMetadata, E as LiquidityVestingInfoParams, F as MigratedPoolMarketCapFeeSchedulerParameters, G as LockedVestingParameters, H as BaseFeeMode, I as LiquidityVestingInfoParameters, J as TokenDecimal, K as BaseFeeParams, N as ActivationType, O as BaseFee, Q as LiquidityDistributionParameters, R as DynamicFeeParameters, U as MigrationOption, X as MigrationFeeOption, Y as MigratedPoolFeeConfig, Z as MigratedPoolFeeResult, _ as DammV2BaseFeeMode, $ as TokenType, a0 as CollectFeeMode, a1 as MigratedPoolFee, a2 as PoolFeeParameters, a3 as TokenUpdateAuthorityOption, a4 as BuildCurveParams, a5 as ConfigParameters, a6 as BuildCurveWithCustomSqrtPricesParams, a7 as BuildCurveWithLiquidityWeightsParams, a8 as BuildCurveWithMarketCapParams, a9 as BuildCurveWithMidPriceParams, aa as BuildCurveWithTwoSegmentsParams, ab as Rounding, ac as TradeDirection, ad as FeeMode, ae as PoolFeesConfig, af as FeeOnAmountResult, ag as DynamicFeeConfig, ah as VolatilityTracker, ai as SwapAmount, aj as SwapResult, ak as SwapResult2, al as BaseFeeHandler } from './index-Bvjvh4lp.js';
export { am as BaseFeeConfig, an as BuildCurveBaseParams, ao as ClaimCreatorTradingFeeWithQuoteMintNotSolParams, ap as ClaimCreatorTradingFeeWithQuoteMintSolParams, aq as ClaimPartnerTradingFeeWithQuoteMintNotSolParams, ar as ClaimPartnerTradingFeeWithQuoteMintSolParams, as as CreateConfigAccounts, at as CreateConfigAndPoolWithFirstBuyKitResult, au as CreateDammV1MigrationMetadataAccounts, av as CreatePartnerMetadataParameters, aw as CreatorFirstBuyParams, ax as DammV2DynamicFeeMode, ay as DynamicBondingCurveKitClient, az as DynamicBondingCurveKitCreatorClient, aA as DynamicBondingCurveKitMigrationClient, aB as DynamicBondingCurveKitPartnerClient, aC as DynamicBondingCurveKitPoolClient, aD as DynamicBondingCurveKitStateService, aE as DynamicCurveProgram, aF as FeeConfig, aG as FeeResult, aH as FeeSchedulerParams, aI as FirstBuyParams, aJ as InitializePoolBaseParams, aK as InitializePoolParameters, aL as InitializeSplPoolAccounts, aM as InitializeToken2022PoolAccounts, aN as KitAddressInput, aO as KitAddressOrSignerInput, aP as KitClaimCreatorTradingFee2Params, aQ as KitClaimCreatorTradingFeeParams, aR as KitClaimPartnerPoolCreationFeeParams, aS as KitClaimTradingFee2Params, aT as KitClaimTradingFeeParams, aU as KitCreateConfigAndPoolParams, aV as KitCreateConfigAndPoolWithFirstBuyParams, aW as KitCreateConfigParams, aX as KitCreateDammV1MigrationMetadataParams, aY as KitCreateLockerParams, aZ as KitCreatePartnerMetadataParams, a_ as KitCreatePoolMetadataParams, a$ as KitCreatePoolParams, b0 as KitCreatePoolWithFirstBuyParams, b1 as KitCreatePoolWithPartnerAndCreatorFirstBuyParams, b2 as KitCreatorFirstBuyParams, b3 as KitCreatorWithdrawSurplusParams, b4 as KitDammLpTokenParams, b5 as KitFeeBreakdown, b6 as KitFirstBuyParams, b7 as KitMigrateToDammV1Params, b8 as KitMigrateToDammV2Params, b9 as KitPartnerFirstBuyParams, ba as KitPartnerWithdrawSurplusParams, bb as KitPoolState, bc as KitPreCreatePoolParams, bd as KitSignerInput, be as KitSwap2Params, bf as KitSwapParams, bg as KitTransactionPlan, bh as KitTransferPoolCreatorParams, bi as KitWithdrawLeftoverParams, bj as KitWithdrawMigrationFeeParams, bk as LiquidityDistributionConfig, bl as LockedVestingParams, bm as MigratedCollectFeeMode, bn as MigratedPoolMarketCapFeeSchedulerParams, bo as MigrationConfig, bp as MigrationFee, bq as PartnerFirstBuyParams, br as PreCreatePoolParams, bs as PrepareSwapParams, bt as RateLimiterParams, bu as SwapMode, bv as TokenConfig } from './index-Bvjvh4lp.js';
import BN from 'bn.js';
import Decimal from 'decimal.js';
import '@solana/kit';

declare class DynamicBondingCurveProgram {
    program: Program<DynamicBondingCurve>;
    protected connection: Connection;
    protected poolAuthority: PublicKey;
    protected commitment: Commitment;
    constructor(connection: Connection, commitment: Commitment);
    protected prepareTokenAccounts(owner: PublicKey, payer: PublicKey, tokenAMint: PublicKey, tokenBMint: PublicKey, tokenAProgram: PublicKey, tokenBProgram: PublicKey): Promise<{
        ataTokenA: PublicKey;
        ataTokenB: PublicKey;
        instructions: TransactionInstruction[];
    }>;
    /**
     * Get the underlying program instance
     * @returns The program instance
     */
    getProgram(): Program<DynamicBondingCurve>;
}

declare class MigrationService extends DynamicBondingCurveProgram {
    private state;
    constructor(connection: Connection, commitment: Commitment);
    /**
     * Get vault program instance
     * @returns The vault program instance
     */
    private getVaultProgram;
    /**
     * Get DAMM V1 program instance
     * @returns The DAMM V1 program instance
     */
    private getDammV1Program;
    /**
     * Create Locker (if there is lockedVesting)
     * @param payer - The payer of the transaction
     * @param virtualPool - The virtual pool address
     * @returns A create locker transaction
     */
    createLocker(params: CreateLockerParams): Promise<Transaction>;
    /**
     * Withdraw leftover
     * @param payer - The payer of the transaction
     * @param virtualPool - The virtual pool address
     * @returns A withdraw leftover transaction
     */
    withdrawLeftover(params: WithdrawLeftoverParams): Promise<Transaction>;
    /**
     * Create metadata for the migration of Meteora DAMM V1
     * @param payer - The payer of the transaction
     * @param virtualPool - The virtual pool address
     * @param config - The config address
     * @returns A migration transaction
     */
    createDammV1MigrationMetadata(params: CreateDammV1MigrationMetadataParams): Promise<Transaction>;
    /**
     * Migrate to DAMM V1
     * @param payer - The payer of the transaction
     * @param virtualPool - The virtual pool address
     * @param dammConfig - The damm config address
     * @returns A migrate transaction
     */
    migrateToDammV1(params: MigrateToDammV1Params): Promise<Transaction>;
    /**
     * Lock DAMM V1 LP token for creator or partner
     * @param payer - The payer of the transaction
     * @param virtualPool - The virtual pool address
     * @param dammConfig - The damm config address
     * @param isPartner - Whether the partner is locking the LP token
     * @returns A lock transaction
     */
    lockDammV1LpToken(params: DammLpTokenParams): Promise<Transaction>;
    /**
     * Claim DAMM V1 LP token for creator or partner
     * @param payer - The payer of the transaction
     * @param virtualPool - The virtual pool address
     * @param dammConfig - The damm config address
     * @param isPartner - Whether the partner is claiming the LP token
     * @returns A claim transaction
     */
    claimDammV1LpToken(params: DammLpTokenParams): Promise<Transaction>;
    /**
     * Migrate to DAMM V2
     * @param payer - The payer of the transaction
     * @param virtualPool - The virtual pool address
     * @param dammConfig - The damm config address
     * @returns A migrate transaction
     */
    migrateToDammV2(params: MigrateToDammV2Params): Promise<MigrateToDammV2Response>;
}

declare class PartnerService extends DynamicBondingCurveProgram {
    private state;
    constructor(connection: Connection, commitment: Commitment);
    /**
     * Create a new config
     * @param createConfigParam - The config parameters
     * @param config - The config address
     * @param feeClaimer - The partner's fee claimer address
     * @param leftoverReceiver - The leftover receiver address
     * @param quoteMint - The quote mint
     * @param payer - The payer of the transaction
     * @returns A new config
     */
    createConfig(params: CreateConfigParams): Promise<Transaction>;
    /**
     * Create partner metadata
     * @param name - The name of the partner
     * @param website - The website of the partner
     * @param logo - The logo of the partner
     * @param feeClaimer - The partner's fee claimer address
     * @param payer - The payer of the transaction
     * @returns A create partner metadata transaction
     */
    createPartnerMetadata(params: CreatePartnerMetadataParams): Promise<Transaction>;
    /**
     * Private method to claim trading fee with quote mint SOL
     * @param feeClaimer - The partner's fee claimer address
     * @param payer - The payer of the transaction
     * @param feeReceiver - The wallet that will receive the tokens
     * @param config - The config address
     * @param pool - The pool address
     * @param poolState - The pool state
     * @param poolConfigState - The pool config state
     * @param tokenBaseProgram - The token base program
     * @param tokenQuoteProgram - The token quote program
     * @param tempWSolAcc - The temporary wallet that will receive the SOL
     * @returns A claim trading fee with quote mint SOL accounts, pre instructions and post instructions
     */
    private claimWithQuoteMintSol;
    /**
     * Private method to claim trading fee with quote mint not SOL
     * @param feeClaimer - The partner's fee claimer address
     * @param payer - The payer of the transaction
     * @param feeReceiver - The wallet that will receive the tokens
     * @param config - The config address
     * @param pool - The pool address
     * @param poolState - The pool state
     * @param poolConfigState - The pool config state
     * @param tokenBaseProgram - The token base program
     * @param tokenQuoteProgram - The token quote program
     * @returns A claim trading fee with quote mint not SOL accounts and pre instructions
     */
    private claimWithQuoteMintNotSol;
    /**
     * Claim partner trading fee
     * @param feeClaimer - The partner's fee claimer address
     * @param payer - The payer of the transaction
     * @param pool - The pool address
     * @param maxBaseAmount - The maximum base amount
     * @param maxQuoteAmount - The maximum quote amount
     * @param receiver - The wallet that will receive the tokens (Optional)
     * @param tempWSolAcc - The temporary wallet that will receive the SOL (Optional)
     * @returns A claim trading fee transaction
     */
    claimPartnerTradingFee(params: ClaimTradingFeeParams): Promise<Transaction>;
    /**
     * Claim partner trading fee
     * @param feeClaimer - The partner's fee claimer address
     * @param payer - The payer of the transaction
     * @param pool - The pool address
     * @param maxBaseAmount - The maximum base amount
     * @param maxQuoteAmount - The maximum quote amount
     * @param receiver - The wallet that will receive the tokens
     * @returns A claim trading fee transaction
     */
    claimPartnerTradingFee2(params: ClaimTradingFee2Params): Promise<Transaction>;
    /**
     * Partner withdraw surplus
     * @param feeClaimer - The partner's fee claimer address
     * @param virtualPool - The virtual pool address
     * @returns A partner withdraw surplus transaction
     */
    partnerWithdrawSurplus(params: PartnerWithdrawSurplusParams): Promise<Transaction>;
    /**
     * Partner withdraw migration fee
     * @param virtualPool - The virtual pool address
     * @param sender - The sender of the pool
     * @returns A partner withdraw migration fee transaction
     */
    partnerWithdrawMigrationFee(params: WithdrawMigrationFeeParams): Promise<Transaction>;
    /**
     * Claim partner pool creation fee
     * @param params - The claim partner pool creation fee parameters
     * @returns A claim partner pool creation fee transaction
     */
    claimPartnerPoolCreationFee(params: ClaimPartnerPoolCreationFeeParams): Promise<Transaction>;
}

declare class PoolService extends DynamicBondingCurveProgram {
    private state;
    constructor(connection: Connection, commitment: Commitment);
    /**
     * Private method to initialize a pool with SPL token
     * @param name - The name of the token
     * @param symbol - The symbol of the token
     * @param uri - The URI of the token
     * @param pool - The pool address
     * @param config - The config address
     * @param payer - The payer address
     * @param poolCreator - The pool creator address
     * @param baseMint - The base mint address
     * @param baseVault - The base vault address
     * @param quoteVault - The quote vault address
     * @param quoteMint - The quote mint address
     * @param mintMetadata - The mint metadata address (Optional)
     * @returns A transaction that initializes the pool with SPL token
     */
    private initializeSplPool;
    /**
     * Private method to initialize a pool with Token2022
     * @param name - The name of the token
     * @param symbol - The symbol of the token
     * @param uri - The URI of the token
     * @param pool - The pool address
     * @param config - The config address
     * @param payer - The payer address
     * @param poolCreator - The pool creator address
     * @param baseMint - The base mint address
     * @param baseVault - The base vault address
     * @param quoteVault - The quote vault address
     * @param quoteMint - The quote mint address
     * @param mintMetadata - The mint metadata address (Optional)
     * @returns A transaction that initializes the pool with Token2022
     */
    private initializeToken2022Pool;
    /**
     * Private method to prepare swap parameters
     * @param swapBaseForQuote - Whether to swap base for quote
     * @param virtualPoolState - The virtual pool state consisting of baseMint and poolType
     * @param poolConfigState - The pool config state consisting of quoteMint and quoteTokenFlag
     * @returns The prepare swap parameters
     */
    private prepareSwapParams;
    /**
     * Private method to create config transaction
     * @param configParam - The config parameters
     * @param config - The config address
     * @param feeClaimer - The fee claimer address
     * @param leftoverReceiver - The leftover receiver address
     * @param quoteMint - The quote mint address
     * @param payer - The payer address
     * @returns A transaction that creates the config
     */
    private createConfigTx;
    /**
     * Private method to create pool transaction
     * @param createPoolParam - The parameters for the pool consisting of baseMint, name, symbol, uri, poolCreator, config, and payer
     * @param tokenType - The token type
     * @param quoteMint - The quote mint token
     * @returns A transaction that creates the pool
     */
    private createPoolTx;
    /**
     * Private method to create first buy transaction
     * @param firstBuyParam - The parameters for the first buy consisting of buyer, receiver (optional), buyAmount, minimumAmountOut, and referralTokenAccount
     * @param baseMint - The base mint token
     * @param config - The config key
     * @param baseFee - The base fee
     * @param swapBaseForQuote - Whether to swap base for quote
     * @param currentPoint - The current point
     * @param tokenType - The token type
     * @param quoteMint - The quote mint token
     * @param enableFirstSwapWithMinFee - Whether to enable first swap with minimum fee
     * @returns Instructions for the first buy
     */
    private swapBuyTx;
    /**
     * Create a new pool
     * @param name - The name of the token
     * @param symbol - The symbol of the token
     * @param uri - The URI of the token
     * @param config - The config address
     * @param payer - The payer address
     * @param poolCreator - The pool creator address
     * @param baseMint - The base mint address
     * @returns A new pool
     */
    createPool(params: CreatePoolParams): Promise<Transaction>;
    /**
     * Create a new config and pool
     * @param config - The config address
     * @param feeClaimer - The fee claimer address
     * @param leftoverReceiver - The leftover receiver address
     * @param quoteMint - The quote mint address
     * @param payer - The payer address
     * @param configParam - The parameters for the config
     * @param preCreatePoolParam - The parameters for the pool
     * @returns A new config and pool
     */
    createConfigAndPool(params: CreateConfigAndPoolParams): Promise<Transaction>;
    /**
     * Create a new config and pool and buy tokens
     * @param config - The config address
     * @param feeClaimer - The fee claimer address
     * @param leftoverReceiver - The leftover receiver address
     * @param quoteMint - The quote mint address
     * @param payer - The payer address
     * @param configParam - The parameters for the config
     * @param preCreatePoolParam - The parameters for the pool
     * @param firstBuyParam - The parameters for the first buy
     * @returns An object containing the new config transaction and pool transaction (with optional first buy instructions)
     */
    createConfigAndPoolWithFirstBuy(params: CreateConfigAndPoolWithFirstBuyParams): Promise<{
        createConfigTx: Transaction;
        createPoolWithFirstBuyTx: Transaction;
    }>;
    /**
     * Create a new pool and buy tokens
     * @param createPoolParam - The parameters for the pool
     * @param firstBuyParam - The parameters for the first buy
     * @returns An object containing the new pool transaction (with optional first buy instructions)
     */
    createPoolWithFirstBuy(params: CreatePoolWithFirstBuyParams): Promise<Transaction>;
    /**
     * Create a new pool and buy tokens with partner and creator
     * @param createPoolParam - The parameters for the pool
     * @param partnerFirstBuyParam - The parameters for the partner first buy
     * @param creatorFirstBuyParam - The parameters for the creator first buy
     * @returns A single transaction containing pool creation and optional partner/creator first buy instructions
     */
    createPoolWithPartnerAndCreatorFirstBuy(params: CreatePoolWithPartnerAndCreatorFirstBuyParams): Promise<Transaction>;
    /**
     * Swap between base and quote
     * @param owner - The owner of the swap
     * @param pool - The pool address
     * @param amountIn - The amount in
     * @param minimumAmountOut - The minimum amount out
     * @param swapBaseForQuote - Whether to swap base for quote
     * @param referralTokenAccount - The referral token account (nullible)
     * @param payer - The payer of the swap (optional)
     * @returns A swap transaction
     */
    swap(params: SwapParams): Promise<Transaction>;
    /**
     * Swap V2 between base and quote (included SwapMode: ExactIn, PartialFill, ExactOut)
     * @param owner - The owner of the swap
     * @param pool - The pool address
     * @param swapBaseForQuote - Whether to swap base for quote
     * @param referralTokenAccount - The referral token account (nullible)
     * @param payer - The payer of the swap (optional)
     * @param swapMode - The swap mode (ExactIn: 0, PartialFill: 1, ExactOut: 2)
     * @param amountIn - The amount in (for ExactIn and PartialFill)
     * @param minimumAmountOut - The minimum amount out (for ExactIn and PartialFill)
     * @param amountOut - The amount out (for ExactOut)
     * @param maximumAmountIn - The maximum amount in (for ExactOut)
     * @returns A swap transaction
     */
    swap2(params: Swap2Params): Promise<Transaction>;
    /**
     * Calculate the amount out for a swap (quote) (for swap1)
     * @param virtualPool - The virtual pool
     * @param config - The config
     * @param swapBaseForQuote - Whether to swap base for quote
     * @param amountIn - The amount in
     * @param slippageBps - Slippage tolerance in basis points (100 = 1%) (optional)
     * @param hasReferral - Whether the referral is enabled
     * @param currentPoint - The current point
     * @returns The swap quote result
     */
    swapQuote(params: SwapQuoteParams): SwapQuoteResult;
    /**
     * Calculate the amount out for a swap (quote) based on swap mode (for swap2)
     * @param virtualPool - The virtual pool
     * @param config - The config
     * @param swapBaseForQuote - Whether to swap base for quote
     * @param hasReferral - Whether the referral is enabled
     * @param currentPoint - The current point
     * @param slippageBps - Slippage tolerance in basis points (100 = 1%) (optional)
     * @param swapMode - The swap mode (ExactIn: 0, PartialFill: 1, ExactOut: 2)
     * @param amountIn - The amount in (for ExactIn and PartialFill)
     * @param amountOut - The amount out (for ExactOut)
     * @returns The swap quote result
     */
    swapQuote2(params: SwapQuote2Params): SwapQuote2Result;
}

declare class CreatorService extends DynamicBondingCurveProgram {
    private state;
    constructor(connection: Connection, commitment: Commitment);
    /**
     * Create virtual pool metadata
     * @param virtualPool - The virtual pool address
     * @param name - The name of the pool
     * @param website - The website of the pool
     * @param logo - The logo of the pool
     * @param creator - The creator of the pool
     * @param payer - The payer of the transaction
     * @returns A create virtual pool metadata transaction
     */
    createPoolMetadata(params: CreateVirtualPoolMetadataParams): Promise<Transaction>;
    /**
     * Private method to claim trading fee with quote mint SOL
     * @param creator - The creator of the pool
     * @param payer - The payer of the transaction
     * @param feeReceiver - The wallet that will receive the tokens
     * @param pool - The pool address
     * @param poolState - The pool state
     * @param poolConfigState - The pool config state
     * @param tokenBaseProgram - The token base program
     * @param tokenQuoteProgram - The token quote program
     * @param tempWSolAcc - The temporary wallet that will receive the SOL
     * @returns A claim trading fee with quote mint SOL accounts, pre instructions and post instructions
     */
    private claimWithQuoteMintSol;
    /**
     * Private method to claim trading fee with quote mint not SOL
     * @param creator - The creator of the pool
     * @param payer - The payer of the transaction
     * @param feeReceiver - The wallet that will receive the tokens
     * @param pool - The pool address
     * @param poolState - The pool state
     * @param poolConfigState - The pool config state
     * @param tokenBaseProgram - The token base program
     * @param tokenQuoteProgram - The token quote program
     * @returns A claim trading fee with quote mint not SOL accounts and pre instructions
     */
    private claimWithQuoteMintNotSol;
    /**
     * Claim creator trading fee
     * @param creator - The creator of the pool
     * @param payer - The payer of the transaction
     * @param pool - The pool address
     * @param maxBaseAmount - The maximum base amount
     * @param maxQuoteAmount - The maximum quote amount
     * @param receiver - The wallet that will receive the tokens (Optional)
     * @param tempWSolAcc - The temporary wallet that will receive the SOL (Optional)
     * @returns A claim creator trading fee transaction
     */
    claimCreatorTradingFee(params: ClaimCreatorTradingFeeParams): Promise<Transaction>;
    /**
     * Claim creator trading fee
     * @param creator - The creator of the pool
     * @param payer - The payer of the transaction
     * @param pool - The pool address
     * @param maxBaseAmount - The maximum base amount
     * @param maxQuoteAmount - The maximum quote amount
     * @param receiver - The wallet that will receive the tokens
     * @returns A claim creator trading fee transaction
     */
    claimCreatorTradingFee2(params: ClaimCreatorTradingFee2Params): Promise<Transaction>;
    /**
     * Withdraw creator surplus
     * @param creator - The creator of the pool
     * @param virtualPool - The virtual pool address
     * @returns A creator withdraw surplus transaction
     */
    creatorWithdrawSurplus(params: CreatorWithdrawSurplusParams): Promise<Transaction>;
    /**
     * Transfer pool creator
     * @param virtualPool - The virtual pool address
     * @param creator - The creator of the pool
     * @param newCreator - The new creator of the pool
     * @returns A transfer pool creator transaction
     */
    transferPoolCreator(params: TransferPoolCreatorParams): Promise<Transaction>;
    /**
     * Creator withdraw migration fee
     * @param virtualPool - The virtual pool address
     * @param sender - The sender of the pool
     * @returns A creator withdraw migration fee transaction
     */
    creatorWithdrawMigrationFee(params: WithdrawMigrationFeeParams): Promise<Transaction>;
}

declare class StateService extends DynamicBondingCurveProgram {
    constructor(connection: Connection, commitment: Commitment);
    /**
     * Get pool config data (partner config)
     * @param configAddress - The address of the pool config key
     * @returns A pool config
     */
    getPoolConfig(configAddress: PublicKey | string): Promise<PoolConfig>;
    /**
     * Get all config keys
     * @returns An array of config key accounts
     */
    getPoolConfigs(): Promise<ProgramAccount<PoolConfig>[]>;
    /**
     * Get all config keys of an owner wallet address
     * @param owner - The owner of the config keys
     * @returns An array of config key accounts
     */
    getPoolConfigsByOwner(owner: PublicKey | string): Promise<ProgramAccount<PoolConfig>[]>;
    /**
     * Get virtual pool data
     * @param poolAddress - The address of the pool
     * @returns A virtual pool or null if not found
     */
    getPool(poolAddress: PublicKey | string): Promise<VirtualPool>;
    /**
     * Get all dynamic bonding curve pools
     * @returns Array of pool accounts with their addresses
     */
    getPools(): Promise<ProgramAccount<VirtualPool>[]>;
    /**
     * Get all dynamic bonding curve pools by config key address
     * @param configAddress - The address of the config key
     * @returns Array of pool accounts with their addresses
     */
    getPoolsByConfig(configAddress: PublicKey | string): Promise<ProgramAccount<VirtualPool>[]>;
    /**
     * Get all dynamic bonding curve pools by creator address
     * @param creatorAddress - The address of the creator
     * @returns Array of pool accounts with their addresses
     */
    getPoolsByCreator(creatorAddress: PublicKey | string): Promise<ProgramAccount<VirtualPool>[]>;
    /**
     * Get pool by base mint
     * @param baseMint - The base mint address
     * @returns A virtual pool account
     */
    getPoolByBaseMint(baseMint: PublicKey | string): Promise<ProgramAccount<VirtualPool> | null>;
    /**
     * Get pool migration quote threshold
     * @param poolAddress - The address of the pool
     * @returns The migration quote threshold
     */
    getPoolMigrationQuoteThreshold(poolAddress: PublicKey | string): Promise<BN>;
    /**
     * Get the progress of the curve by comparing current quote reserve to migration threshold
     * @param poolAddress - The address of the pool
     * @returns The progress as a ratio between 0 and 1
     */
    getPoolQuoteTokenCurveProgress(poolAddress: PublicKey | string): Promise<number>;
    /**
     * Get the progress of the curve based on base tokens sold relative to total base tokens available for trading.
     * @param poolAddress - The address of the pool
     * @returns The progress as a ratio between 0 and 1
     */
    getPoolBaseTokenCurveProgress(poolAddress: PublicKey | string): Promise<number>;
    /**
     * Get pool metadata
     * @param poolAddress - The address of the pool
     * @returns A pool metadata
     */
    getPoolMetadata(poolAddress: PublicKey | string): Promise<VirtualPoolMetadata[]>;
    /**
     * Get partner metadata
     * @param partnerAddress - The address of the partner
     * @returns A partner metadata
     */
    getPartnerMetadata(partnerAddress: PublicKey | string): Promise<PartnerMetadata[]>;
    /**
     * Get DAMM V1 lock escrow details
     * @param lockEscrowAddress - The address of the lock escrow
     * @returns A lock escrow account
     */
    getDammV1LockEscrow(lockEscrowAddress: PublicKey | string): Promise<LockEscrow | null>;
    /**
     * Get fee metrics for a specific pool
     * @param poolAddress - The address of the pool
     * @returns Object containing current and total fee metrics
     */
    getPoolFeeMetrics(poolAddress: PublicKey | string): Promise<{
        current: {
            partnerBaseFee: BN;
            partnerQuoteFee: BN;
            creatorBaseFee: BN;
            creatorQuoteFee: BN;
        };
        total: {
            totalTradingBaseFee: BN;
            totalTradingQuoteFee: BN;
        };
    }>;
    /**
     * Get fee breakdown for a specific pool
     * @param poolAddress - The address of the pool
     * @returns Object containing fee breakdown
     */
    getPoolFeeBreakdown(poolAddress: PublicKey | string): Promise<{
        creator: {
            unclaimedBaseFee: BN;
            unclaimedQuoteFee: BN;
            claimedBaseFee: BN;
            claimedQuoteFee: BN;
            totalBaseFee: BN;
            totalQuoteFee: BN;
        };
        partner: {
            unclaimedBaseFee: BN;
            unclaimedQuoteFee: BN;
            claimedBaseFee: BN;
            claimedQuoteFee: BN;
            totalBaseFee: BN;
            totalQuoteFee: BN;
        };
    }>;
    /**
     * Get all fees for pools linked to a specific config key
     * @param configAddress - The address of the pool config
     * @returns Array of pools with their quote fees
     */
    getPoolsFeesByConfig(configAddress: PublicKey | string): Promise<Array<{
        poolAddress: PublicKey;
        partnerBaseFee: BN;
        partnerQuoteFee: BN;
        creatorBaseFee: BN;
        creatorQuoteFee: BN;
        totalTradingBaseFee: BN;
        totalTradingQuoteFee: BN;
    }>>;
    /**
     * Get all fees for pools linked to a specific creator
     * @param creatorAddress - The address of the creator
     * @returns Array of pools with their base fees
     */
    getPoolsFeesByCreator(creatorAddress: PublicKey | string): Promise<Array<{
        poolAddress: PublicKey;
        partnerBaseFee: BN;
        partnerQuoteFee: BN;
        creatorBaseFee: BN;
        creatorQuoteFee: BN;
        totalTradingBaseFee: BN;
        totalTradingQuoteFee: BN;
    }>>;
    /**
     * Get DAMM V1 migration metadata
     * @param poolAddress - The address of the pool
     * @returns A DAMM V1 migration metadata
     */
    getDammV1MigrationMetadata(poolAddress: PublicKey): Promise<MeteoraDammMigrationMetadata>;
}

declare class DynamicBondingCurveClient {
    pool: PoolService;
    partner: PartnerService;
    creator: CreatorService;
    migration: MigrationService;
    state: StateService;
    commitment: Commitment;
    connection: Connection;
    constructor(connection: Connection, commitment: Commitment);
    /**
     * Static method to create a client instance for a specific pool
     * @param connection - The connection to the Solana network
     * @param commitment - The commitment to the Solana network
     * @returns A DynamicBondingCurveClient instance
     */
    static create(connection: Connection, commitment?: Commitment): DynamicBondingCurveClient;
}

declare const MAX_CURVE_POINT = 16;
declare const OFFSET = 64;
declare const RESOLUTION = 64;
declare const ONE_Q64: BN;
declare const FEE_DENOMINATOR = 1000000000;
declare const MAX_BASIS_POINT = 10000;
declare const U16_MAX = 65535;
declare const U24_MAX = 16777215;
declare const U64_MAX: BN;
declare const U128_MAX: BN;
declare const MIN_SQRT_PRICE: BN;
declare const MAX_SQRT_PRICE: BN;
declare const MIN_FEE_BPS = 25;
declare const MAX_FEE_BPS = 9900;
declare const MIN_FEE_NUMERATOR = 2500000;
declare const MAX_FEE_NUMERATOR = 990000000;
declare const MAX_RATE_LIMITER_DURATION_IN_SECONDS = 43200;
declare const MAX_RATE_LIMITER_DURATION_IN_SLOTS = 108000;
declare const DYNAMIC_FEE_FILTER_PERIOD_DEFAULT = 10;
declare const DYNAMIC_FEE_DECAY_PERIOD_DEFAULT = 120;
declare const DYNAMIC_FEE_REDUCTION_FACTOR_DEFAULT = 5000;
declare const DYNAMIC_FEE_SCALING_FACTOR: BN;
declare const DYNAMIC_FEE_ROUNDING_OFFSET: BN;
declare const BIN_STEP_BPS_DEFAULT = 1;
declare const BIN_STEP_BPS_U128_DEFAULT: BN;
declare const MAX_PRICE_CHANGE_BPS_DEFAULT = 1500;
declare const PROTOCOL_FEE_PERCENT = 20;
declare const HOST_FEE_PERCENT = 20;
declare const SWAP_BUFFER_PERCENTAGE = 25;
declare const MAX_MIGRATION_FEE_PERCENTAGE = 99;
declare const MAX_CREATOR_MIGRATION_FEE_PERCENTAGE = 100;
declare const MIN_LOCKED_LIQUIDITY_BPS = 1000;
declare const SECONDS_PER_DAY = 86400;
declare const MAX_LOCK_DURATION_IN_SECONDS = 63072000;
declare const PROTOCOL_POOL_CREATION_FEE_PERCENT = 10;
declare const MIN_POOL_CREATION_FEE = 1000000;
declare const MAX_POOL_CREATION_FEE = 100000000000;
declare const MIN_MIGRATED_POOL_FEE_BPS = 10;
declare const MAX_MIGRATED_POOL_FEE_BPS = 1000;
declare const DYNAMIC_BONDING_CURVE_PROGRAM_ID: PublicKey;
declare const METAPLEX_PROGRAM_ID: PublicKey;
declare const DAMM_V1_PROGRAM_ID: PublicKey;
declare const DAMM_V2_PROGRAM_ID: PublicKey;
declare const VAULT_PROGRAM_ID: PublicKey;
declare const LOCKER_PROGRAM_ID: PublicKey;
declare const BASE_ADDRESS: PublicKey;
declare const DAMM_V1_MIGRATION_FEE_ADDRESS: PublicKey[];
declare const DAMM_V2_MIGRATION_FEE_ADDRESS: PublicKey[];
declare const DEFAULT_MIGRATED_POOL_FEE_PARAMS: {
    readonly collectFeeMode: 0;
    readonly dynamicFee: 0;
    readonly poolFeeBps: 0;
};
declare const DEFAULT_LIQUIDITY_VESTING_INFO_PARAMS: LiquidityVestingInfoParams;
declare const DEFAULT_MIGRATED_POOL_MARKET_CAP_FEE_SCHEDULER_PARAMS: MigratedPoolMarketCapFeeSchedulerParameters;

/**
 * Get the first key
 * @param key1 - The first key
 * @param key2 - The second key
 * @returns The first key
 */
declare function getFirstKey(key1: PublicKey, key2: PublicKey): Buffer<ArrayBufferLike>;
/**
 * Get the second key
 * @param key1 - The first key
 * @param key2 - The second key
 * @returns The second key
 */
declare function getSecondKey(key1: PublicKey, key2: PublicKey): Buffer<ArrayBufferLike>;
/**
 * Generic account fetch helper
 * @param accountAddress - The address of the account to fetch
 * @param accountType - The type of account to fetch from program.account
 * @param program - The program instance
 * @param commitment - The commitment level
 * @returns The fetched account data
 */
declare function getAccountData<T>(accountAddress: PublicKey | string, accountType: keyof Program<DynamicBondingCurve>['account'], program: Program<DynamicBondingCurve>, commitment: Commitment): Promise<T>;
/**
 * Get creation timestamp for an account
 * @param accountAddress - The address of the account
 * @param connection - The Solana connection instance
 * @returns The creation timestamp as a Date object, or undefined if not found
 */
declare function getAccountCreationTimestamp(accountAddress: PublicKey | string, connection: Connection): Promise<Date | undefined>;
/**
 * Get creation timestamps for multiple accounts
 * @param accountAddresses - Array of account addresses
 * @param connection - The Solana connection instance
 * @returns Array of creation timestamps corresponding to the input addresses
 */
declare function getAccountCreationTimestamps(accountAddresses: (PublicKey | string)[], connection: Connection): Promise<(Date | undefined)[]>;
/**
 * Get the total token supply
 * @param swapBaseAmount - The swap base amount
 * @param migrationBaseThreshold - The migration base threshold
 * @param lockedVestingParams - The locked vesting parameters
 * @returns The total token supply
 */
declare function getTotalTokenSupply(swapBaseAmount: BN, migrationBaseThreshold: BN, lockedVestingParams: {
    amountPerPeriod: BN;
    numberOfPeriod: BN;
    cliffUnlockAmount: BN;
}): BN;
/**
 * Get the price from the sqrt start price
 * @param sqrtStartPrice - The sqrt start price
 * @param tokenBaseDecimal - The base token decimal
 * @param tokenQuoteDecimal - The quote token decimal
 * @returns The initial price
 */
declare function getPriceFromSqrtPrice(sqrtPrice: BN, tokenBaseDecimal: TokenDecimal, tokenQuoteDecimal: TokenDecimal): Decimal;
/**
 * Get the sqrt price from the price
 * @param price - The price
 * @param tokenADecimal - The decimal of token A
 * @param tokenBDecimal - The decimal of token B
 * @returns The sqrt price
 * price = (sqrtPrice >> 64)^2 * 10^(tokenADecimal - tokenBDecimal)
 */
declare const getSqrtPriceFromPrice: (price: string, tokenADecimal: number, tokenBDecimal: number) => BN;
/**
 * Create the sqrt prices from the prices
 * @param prices - The prices
 * @returns The sqrt prices
 */
declare const createSqrtPrices: (prices: number[], tokenBaseDecimal: TokenDecimal, tokenQuoteDecimal: TokenDecimal) => BN[];
/**
 * Get the sqrt price from the market cap
 * @param marketCap - The market cap
 * @param totalSupply - The total supply
 * @param tokenBaseDecimal - The decimal of the base token
 * @param tokenQuoteDecimal - The decimal of the quote token
 * @returns The sqrt price
 */
declare const getSqrtPriceFromMarketCap: (marketCap: number, totalSupply: number, tokenBaseDecimal: number, tokenQuoteDecimal: number) => BN;
/**
 * Get the base token for swap
 * @param sqrtStartPrice - The start sqrt price
 * @param sqrtMigrationPrice - The migration sqrt price
 * @param curve - The curve
 * @returns The base token
 */
declare function getBaseTokenForSwap(sqrtStartPrice: BN, sqrtMigrationPrice: BN, curve: Array<LiquidityDistributionParameters>): BN;
/**
 * Get migrationQuoteAmount from migrationQuoteThreshold and migrationFeePercent
 * @param migrationQuoteThreshold - The migration quote threshold
 * @param migrationFeePercent - The migration fee percent
 * @returns migration quote amount to deposit to pool
 */
declare const getMigrationQuoteAmountFromMigrationQuoteThreshold: (migrationQuoteThreshold: Decimal, migrationFeePercent: number) => Decimal;
/**
 * Get migrationQuoteThreshold from migrationQuoteAmount and migrationFeePercent
 * @param migrationQuoteAmount - The migration quote amount
 * @param migrationFeePercent - The migration fee percent
 * @returns migration quote threshold on bonding curve
 */
declare const getMigrationQuoteThresholdFromMigrationQuoteAmount: (migrationQuoteAmount: Decimal, migrationFeePercent: Decimal) => Decimal;
/**
 * Calculates the protocol migration fee for both base and quote tokens.
 *
 * @param depositBaseAmount - Amount of base token to deposit in pool (BN)
 * @param depositQuoteAmount - Amount of quote token to deposit in pool (BN)
 * @param migrationSqrtPrice - Migration sqrt price (BN)
 * @param migrationFeeBps - Migration fee in basis points (number)
 * @param migrationOption - Migration option (MigrationOption, enum)
 * @returns [baseFeeAmount: BN, quoteFeeAmount: BN]
 */
declare function getProtocolMigrationFee(depositBaseAmount: BN, depositQuoteAmount: BN, migrationSqrtPrice: BN, migrationFeeBps: number, migrationOption: MigrationOption): [BN, BN];
/**
 * Get the base token for migration
 * @param migrationQuoteAmount - The migration quote amount to deposit to pool
 * @param sqrtMigrationPrice - The migration sqrt price
 * @param migrationOption - The migration option
 * @returns The base token
 */
declare const getMigrationBaseToken: (migrationQuoteAmount: BN, sqrtMigrationPrice: BN, migrationOption: MigrationOption) => BN;
/**
 * Get the total vesting amount
 * @param lockedVesting - The locked vesting
 * @returns The total vesting amount
 */
declare const getTotalVestingAmount: (lockedVesting: LockedVestingParameters) => BN;
/**
 * Get the liquidity
 * @param baseAmount - The base amount
 * @param quoteAmount - The quote amount
 * @param minSqrtPrice - The min sqrt price
 * @param maxSqrtPrice - The max sqrt price
 * @returns The liquidity
 */
declare const getLiquidity: (baseAmount: BN, quoteAmount: BN, minSqrtPrice: BN, maxSqrtPrice: BN) => BN;
/**
 * Get the first curve
 * @param migrationSqrPrice - The migration sqrt price
 * @param migrationAmount - The migration amount
 * @param swapAmount - The swap amount
 * @param migrationQuoteThreshold - The migration quote threshold
 * @param migrationFeePercent - The migration fee percent
 * @returns The first curve
 */
declare const getFirstCurve: (migrationSqrtPrice: BN, migrationBaseAmount: BN, swapAmount: BN, migrationQuoteThreshold: BN, migrationFeePercent: number) => {
    sqrtStartPrice: BN;
    curve: {
        sqrtPrice: BN;
        liquidity: BN;
    }[];
};
/**
 * Get the total supply from curve
 * @param migrationQuoteThreshold - The migration quote threshold
 * @param sqrtStartPrice - The start sqrt price
 * @param curve - The curve
 * @param lockedVesting - The locked vesting
 * @param migrationOption - The migration option
 * @param leftover - The leftover
 * @param migrationFeePercent - The migration fee percent
 * @returns The total supply
 */
declare const getTotalSupplyFromCurve: (migrationQuoteThreshold: BN, sqrtStartPrice: BN, curve: Array<LiquidityDistributionParameters>, lockedVesting: LockedVestingParameters, migrationOption: MigrationOption, leftover: BN, migrationFeePercent: number) => BN;
/**
 * Get the migration threshold price
 * @param migrationThreshold - The migration threshold
 * @param sqrtStartPrice - The start sqrt price
 * @param curve - The curve
 * @returns The migration threshold price
 */
declare const getMigrationThresholdPrice: (migrationThreshold: BN, sqrtStartPrice: BN, curve: Array<LiquidityDistributionParameters>) => BN;
/**
 * Calculate the quote amount allocated to each curve segment
 * Formula: Δb = L * (√P_upper - √P_lower) for each segment
 * @param migrationQuoteThreshold - The total migration quote threshold
 * @param sqrtStartPrice - The start sqrt price
 * @param curve - The curve segments with sqrtPrice and liquidity
 * @returns Array of quote amounts for each segment and the final sqrt price reached
 */
declare const getCurveBreakdown: (migrationQuoteThreshold: BN, sqrtStartPrice: BN, curve: Array<LiquidityDistributionParameters>) => {
    segmentAmounts: BN[];
    finalSqrtPrice: BN;
    totalAmount: BN;
};
/**
 * Get the swap amount with buffer
 * @param swapBaseAmount - The swap base amount
 * @param sqrtStartPrice - The start sqrt price
 * @param curve - The curve
 * @returns The swap amount with buffer
 */
declare const getSwapAmountWithBuffer: (swapBaseAmount: BN, sqrtStartPrice: BN, curve: Array<LiquidityDistributionParameters>) => BN;
/**
 * Get the percentage of supply that should be allocated to initial liquidity
 * @param initialMarketCap - The initial market cap
 * @param migrationMarketCap - The migration market cap
 * @param lockedVesting - The locked vesting
 * @param totalLeftover - The leftover
 * @param totalTokenSupply - The total token supply
 * @returns The percentage of supply for initial liquidity
 */
declare const getPercentageSupplyOnMigration: (initialMarketCap: Decimal, migrationMarketCap: Decimal, lockedVesting: LockedVestingParameters, totalLeftover: BN, totalTokenSupply: BN) => number;
/**
 * Calculate the adjusted percentageSupplyOnMigration that accounts for migrationFee
 *
 * Formula:
 * - D = desiredMarketCap
 * - M = migrationMarketCap
 * - f = migrationFee
 * - V = vesting percentage
 * - L = leftover percentage
 *
 * requiredRatio = sqrt(D / M)
 * percentageSupplyOnMigration = (requiredRatio * (1 - f) * (100 - V - L)) / (1 + requiredRatio * (1 - f))
 */
declare function calculateAdjustedPercentageSupplyOnMigration(initialMarketCap: number, migrationMarketCap: number, migrationFee: {
    feePercentage: number;
}, lockedVesting: LockedVestingParameters, totalLeftover: BN, totalTokenSupply: BN): number;
/**
 * Get the migration quote amount
 * @param migrationMarketCap - The migration market cap
 * @param percentageSupplyOnMigration - The percentage of supply on migration
 * @returns The migration quote amount
 */
declare const getMigrationQuoteAmount: (migrationMarketCap: Decimal, percentageSupplyOnMigration: Decimal) => Decimal;
/**
 * Get the fee scheduler parameters
 * @param {number} startingBaseFeeBps - Starting fee in basis points
 * @param {number} endingBaseFeeBps - Ending fee in basis points
 * @param {BaseFeeMode} baseFeeMode - Mode for fee reduction (Linear or Exponential)
 * @param {number} numberOfPeriod - Number of periods over which to schedule fee reduction
 * @param {BN} totalDuration - Total duration of the fee scheduler
 *
 * @returns {BaseFee}
 */
declare function getFeeSchedulerParams(startingBaseFeeBps: number, endingBaseFeeBps: number, baseFeeMode: BaseFeeMode, numberOfPeriod: number, totalDuration: number): BaseFee;
/**
 * Calculate the ending base fee of fee scheduler in basis points
 * @param cliffFeeNumerator - The cliff fee numerator
 * @param numberOfPeriod - The number of period
 * @param reductionFactor - The reduction factor
 * @param feeSchedulerMode - The fee scheduler mode
 * @returns The minimum base fee in basis points
 */
declare function calculateFeeSchedulerEndingBaseFeeBps(cliffFeeNumerator: number, numberOfPeriod: number, periodFrequency: number, reductionFactor: number, baseFeeMode: BaseFeeMode): number;
/**
 * Get the rate limiter parameters
 * @param baseFeeBps - The base fee in basis points
 * @param feeIncrementBps - The fee increment in basis points
 * @param referenceAmount - The reference amount
 * @param maxLimiterDuration - The max rate limiter duration
 * @param tokenQuoteDecimal - The token quote decimal
 * @param activationType - The activation type
 * @returns The rate limiter parameters
 */
declare function getRateLimiterParams(baseFeeBps: number, feeIncrementBps: number, referenceAmount: number, maxLimiterDuration: number, tokenQuoteDecimal: TokenDecimal, activationType: ActivationType): BaseFee;
/**
 * Get the dynamic fee parameters (20% of base fee)
 * @param baseFeeBps - The base fee in basis points
 * @param maxPriceChangeBps - The max price change in basis points
 * @returns The dynamic fee parameters
 */
declare function getDynamicFeeParams(baseFeeBps: number, maxPriceChangeBps?: number): DynamicFeeParameters;
/**
 * Derive the starting base fee BPS from baseFeeParams
 * For FeeSchedulerLinear/FeeSchedulerExponential: uses endingFeeBps (the fee at end of pre-migration curve)
 * For RateLimiter: uses baseFeeBps (the cliff fee)
 * @param baseFeeParams - The base fee parameters from the pre-migration pool
 * @returns The starting base fee in basis points for the migrated pool
 */
declare function getStartingBaseFeeBpsFromBaseFeeParams(baseFeeParams: BaseFeeParams): number;
/**
 * Computes the sqrtPriceStepBps needed so that the fee schedule is fully
 * exhausted when spot price reaches a given multiple of the initial price.
 * @param priceMultiple - Target spot-price multiple (e.g. 1000 for 1000x)
 * @param numberOfPeriod - Number of fee reduction periods
 * @returns The sqrtPriceStepBps value to use on-chain
 */
declare function computeSqrtPriceStepBps(priceMultiple: number, numberOfPeriod: number): number;
/**
 * Get the migrated pool market cap fee scheduler parameters
 * Derives sqrtPriceStepBps from starting/ending market cap so the fee schedule is
 * fully exhausted when the token grows from startingMarketCap to endingMarketCap.
 * @param startingBaseFeeBps - Starting (max) fee in basis points
 * @param endingBaseFeeBps - Ending (min) fee in basis points
 * @param baseFeeMode - Linear or exponential decay
 * @param numberOfPeriod - Number of fee reduction periods
 * @param startingMarketCap - Initial market cap (e.g. 20_000 for $20k)
 * @param endingMarketCap - Target market cap (e.g. 20_000_000 for $20M)
 * @param schedulerExpirationDuration - Seconds after which the schedule expires to the ending fee regardless of price
 * @returns The migrated pool market cap fee scheduler parameters
 */
declare function getMigratedPoolMarketCapFeeSchedulerParams(startingBaseFeeBps: number, endingBaseFeeBps: number, dammV2BaseFeeMode: DammV2BaseFeeMode, numberOfPeriod: number, startingMarketCap: number, endingMarketCap: number, schedulerExpirationDuration: number): MigratedPoolMarketCapFeeSchedulerParameters;
/**
 * Calculate the locked vesting parameters
 * @param totalLockedVestingAmount - The total vesting amount
 * @param numberOfVestingPeriod - The number of periods
 * @param cliffUnlockAmount - The amount to unlock at cliff
 * @param totalVestingDuration - The total duration of vesting
 * @param cliffDurationFromMigrationTime - The cliff duration from migration time
 * @param tokenBaseDecimal - The decimal of the base token
 * @returns The locked vesting parameters
 * total_locked_vesting_amount = cliff_unlock_amount + (amount_per_period * number_of_period)
 */
declare function getLockedVestingParams(totalLockedVestingAmount: number, numberOfVestingPeriod: number, cliffUnlockAmount: number, totalVestingDuration: number, cliffDurationFromMigrationTime: number, tokenBaseDecimal: TokenDecimal): LockedVestingParameters;
declare const getLiquidityVestingInfoParams: (vestingPercentage: number, bpsPerPeriod: number, numberOfPeriods: number, cliffDurationFromMigrationTime: number, totalDuration: number) => LiquidityVestingInfoParameters;
/**
 * Get the two curve
 * @param migrationSqrPrice - The migration sqrt price
 * @param initialSqrtPrice - The initial sqrt price
 * @param swapAmount - The swap amount
 * @param migrationQuoteThreshold - The migration quote threshold
 * @returns The two curve
 */
declare const getTwoCurve: (migrationSqrtPrice: BN, midSqrtPrice: BN, initialSqrtPrice: BN, swapAmount: BN, migrationQuoteThreshold: BN) => {
    isOk: boolean;
    sqrtStartPrice: BN;
    curve: {
        sqrtPrice: BN;
        liquidity: BN;
    }[];
};
/**
 * Check if rate limiter should be applied based on pool configuration and state
 * @param baseFeeMode - The base fee mode
 * @param swapBaseForQuote - Whether the swap is from base to quote
 * @param currentPoint - The current point
 * @param activationPoint - The activation point
 * @param maxLimiterDuration - The maximum limiter duration
 * @returns Whether rate limiter should be applied
 */
declare function checkRateLimiterApplied(baseFeeMode: BaseFeeMode, swapBaseForQuote: boolean, currentPoint: BN, activationPoint: BN, maxLimiterDuration: BN): boolean;
/**
 * Get base fee parameters based on the base fee mode
 * @param baseFeeParams - The base fee parameters
 * @param tokenQuoteDecimal - The token quote decimal
 * @param activationType - The activation type
 * @returns The base fee parameters
 */
declare function getBaseFeeParams(baseFeeParams: BaseFeeParams, tokenQuoteDecimal: TokenDecimal, activationType: ActivationType): BaseFee;
/**
 * Get the quote token amount from sqrt price
 * @param nextSqrtPrice - The next sqrt price
 * @param config - The pool configuration
 * @returns The total quote token amount
 */
declare function getQuoteReserveFromNextSqrtPrice(nextSqrtPrice: BN, config: PoolConfig): BN;
/**
 * Get the tokenomics
 * @param initialMarketCap - The initial market cap
 * @param migrationMarketCap - The migration market cap
 * @param totalLockedVestingAmount - The total locked vesting amount
 * @param totalLeftover - The total leftover
 * @param totalTokenSupply - The total token supply
 * @returns The tokenomics
 */
declare const getTokenomics: (initialMarketCap: Decimal, migrationMarketCap: Decimal, totalLockedVestingAmount: BN, totalLeftover: BN, totalTokenSupply: BN) => {
    bondingCurveSupply: BN;
    migrationSupply: BN;
    leftoverSupply: BN;
    lockedVestingSupply: BN;
};
/**
 * Get migrated pool fee parameters based on migration options
 * @param migrationOption - The migration option (DAMM or DAMM_V2)
 * @param migrationFeeOption - The fee option (fixed rates 0-5 or customizable)
 * @param migratedPoolFee - Optional custom migrated pool fee parameters (only used with DAMM_V2 + Customizable)
 * @returns Migrated pool fee parameters with appropriate defaults
 */
declare function getMigratedPoolFeeParams(migrationOption: MigrationOption, migrationFeeOption: MigrationFeeOption, migratedPoolFee?: MigratedPoolFeeConfig, baseFeeParams?: BaseFeeParams): MigratedPoolFeeResult;
/**
 * Get the current point based on activation type
 * @param connection - The Solana connection instance
 * @param activationType - The activation type (Slot or Time)
 * @returns The current point as a BN
 */
declare function getCurrentPoint(connection: Connection, activationType: ActivationType): Promise<BN>;
/**
 * Prepare the swap amount param
 * @param amount - The amount to swap
 * @param mintAddress - The mint address
 * @param connection - The Solana connection instance
 * @returns The amount in lamports
 */
declare function prepareSwapAmountParam(amount: number, mintAddress: PublicKey, connection: Connection): Promise<BN>;
/**
 * Calculate the locked liquidity BPS for a single vesting info at a given time.
 * @param vestingInfo - The liquidity vesting info parameters
 * @param nSeconds - Number of seconds after migration
 * @returns The locked liquidity in BPS (basis points)
 */
declare function getVestingLockedLiquidityBpsAtNSeconds(vestingInfo: LiquidityVestingInfoParameters | undefined, nSeconds: number): number;
/**
 * Calculate the locked liquidity BPS at a given time (in seconds) after migration
 * @param partnerPermanentLockedLiquidityPercentage - Partner's permanently locked liquidity percentage
 * @param creatorPermanentLockedLiquidityPercentage - Creator's permanently locked liquidity percentage
 * @param partnerLiquidityVestingInfo - Partner's liquidity vesting info (optional)
 * @param creatorLiquidityVestingInfo - Creator's liquidity vesting info (optional)
 * @param elapsedSeconds - Number of seconds after migration
 * @returns The total locked liquidity in BPS (basis points)
 */
declare function calculateLockedLiquidityBpsAtTime(partnerPermanentLockedLiquidityPercentage: number, creatorPermanentLockedLiquidityPercentage: number, partnerLiquidityVestingInfo: LiquidityVestingInfoParameters | undefined, creatorLiquidityVestingInfo: LiquidityVestingInfoParameters | undefined, elapsedSeconds: number): number;

/**
 * Derive DBC event authority
 * @returns The event authority
 */
declare function deriveDbcEventAuthority(): PublicKey;
/**
 * Derive DAMM V1 event authority
 * @returns The event authority
 */
declare function deriveDammV1EventAuthority(): PublicKey;
/**
 * Derive DAMM V2 event authority
 * @returns The event authority
 */
declare function deriveDammV2EventAuthority(): PublicKey;
/**
 * Derive Locker event authority
 * @returns The event authority
 */
declare function deriveLockerEventAuthority(): PublicKey;
/**
 * Derive DBC pool authority
 * @returns The pool authority
 */
declare function deriveDbcPoolAuthority(): PublicKey;
/**
 * Derive DAMM V1 pool authority
 * @returns The pool authority
 */
declare function deriveDammV1PoolAuthority(): PublicKey;
/**
 * Derive DAMM V2 pool authority
 * @returns The pool authority
 */
declare function deriveDammV2PoolAuthority(): PublicKey;
/**
 * Derive DBC pool address
 * @param quoteMint - The quote mint
 * @param baseMint - The base mint
 * @param config - The config
 * @returns The pool
 */
declare function deriveDbcPoolAddress(quoteMint: PublicKey, baseMint: PublicKey, config: PublicKey): PublicKey;
/**
 * Derive DAMM V1 pool address
 * @param config - The config
 * @param tokenAMint - The token A mint
 * @param tokenBMint - The token B mint
 * @returns The DAMM V1 pool address
 */
declare function deriveDammV1PoolAddress(config: PublicKey, tokenAMint: PublicKey, tokenBMint: PublicKey): PublicKey;
/**
 * Derive DAMM V2 pool address
 * @param config - The config
 * @param tokenAMint - The token A mint
 * @param tokenBMint - The token B mint
 * @returns The DAMM V2 pool address
 */
declare function deriveDammV2PoolAddress(config: PublicKey, tokenAMint: PublicKey, tokenBMint: PublicKey): PublicKey;
/**
 * Derive mint metadata address
 * @param mint - The mint
 * @returns The mint metadata address
 */
declare function deriveMintMetadata(mint: PublicKey): PublicKey;
/**
 * Derive partner metadata
 * @param feeClaimer - The fee claimer
 * @returns The partner metadata
 */
declare function derivePartnerMetadata(feeClaimer: PublicKey): PublicKey;
/**
 * Derive DBC pool metadata
 * @param pool - The pool
 * @returns The DBC pool metadata
 */
declare function deriveDbcPoolMetadata(pool: PublicKey): PublicKey;
/**
 * Derive DAMM V1 migration metadata address
 * @param virtual_pool - The virtual pool
 * @returns The DAMM migration metadata address
 */
declare function deriveDammV1MigrationMetadataAddress(virtual_pool: PublicKey): PublicKey;
/**
 * Derive DAMM V2 migration metadata address
 * @param virtual_pool - The virtual pool
 * @returns The DAMM migration metadata address
 */
declare function deriveDammV2MigrationMetadataAddress(virtual_pool: PublicKey): PublicKey;
/**
 * Derive DBC token vault address
 * @param pool - The pool
 * @param mint - The mint
 * @returns The token vault
 */
declare function deriveDbcTokenVaultAddress(pool: PublicKey, mint: PublicKey): PublicKey;
/**
 * Derive DAMM V1 vault LP address
 * @param vault - The vault
 * @param pool - The pool
 * @returns The vault LP address
 */
declare function deriveDammV1VaultLPAddress(vault: PublicKey, pool: PublicKey): PublicKey;
/**
 * Derive DAMM V2 token vault address
 * @param pool - The pool
 * @param mint - The mint
 * @returns The token vault
 */
declare function deriveDammV2TokenVaultAddress(pool: PublicKey, mint: PublicKey): PublicKey;
/**
 * Derive vault address
 * @param mint - The mint
 * @param payer - The payer
 * @returns The vault address
 */
declare function deriveVaultAddress(mint: PublicKey, payer: PublicKey): PublicKey;
/**
 * Derive vault addresses
 * @param tokenMint - The token mint
 * @param seedBaseKey - The seed base key
 * @returns The vault PDAs
 */
declare const deriveVaultPdas: (tokenMint: PublicKey, seedBaseKey?: PublicKey) => {
    vaultPda: PublicKey;
    tokenVaultPda: PublicKey;
    lpMintPda: PublicKey;
};
/**
 * Derive token vault address
 * @param vaultKey - The vault address
 * @returns The token vault address
 */
declare function deriveTokenVaultKey(vaultKey: PublicKey): PublicKey;
/**
 * Derive Vault LP mint address
 * @param pool - The pool
 * @returns The Vault LP mint address
 */
declare function deriveVaultLpMintAddress(pool: PublicKey): PublicKey;
/**
 * Derive DAMM V1 LP mint address
 * @param pool - The pool
 * @returns The LP mint address
 */
declare function deriveDammV1LpMintAddress(pool: PublicKey): PublicKey;
/**
 * Derive DAMM V2 position address
 * @param positionNft - The position NFT
 * @returns The DAMM V2 position address
 */
declare function derivePositionAddress(positionNft: PublicKey): PublicKey;
/**
 * Derive DAMM V2 position NFT account
 * @param positionNftMint - The position NFT mint
 * @returns The DAMM V2 position NFT account
 */
declare function derivePositionNftAccount(positionNftMint: PublicKey): PublicKey;
/**
 * Derive DAMM V1 lock escrow address
 * @param dammPool - The DAMM pool
 * @param creator - The creator of the virtual pool
 * @returns The lock escrow address
 */
declare function deriveDammV1LockEscrowAddress(dammPool: PublicKey, creator: PublicKey): PublicKey;
/**
 * Derive DAMM V2 lock escrow address
 * @param dammPool - The DAMM pool
 * @param creator - The creator of the virtual pool
 * @returns The lock escrow address
 */
declare function deriveDammV2LockEscrowAddress(dammPool: PublicKey, creator: PublicKey): PublicKey;
/**
 * Derive escrow address
 * @param base - The base mint
 * @returns The escrow address
 */
declare function deriveEscrow(base: PublicKey): PublicKey;
/**
 * Derive DAMM V1 protocol fee address
 * @param mint - The mint
 * @param pool - The pool
 * @returns The protocol fee address
 */
declare function deriveDammV1ProtocolFeeAddress(mint: PublicKey, pool: PublicKey): PublicKey;
/**
 * Derive base key for the locker
 * @param virtualPool - The virtual pool
 * @returns The base key for the locker
 */
declare function deriveBaseKeyForLocker(virtualPool: PublicKey): PublicKey;

/**
 * Convert a number or string to a BN value in lamports
 * @param amount - The amount to convert
 * @param tokenDecimal - The decimal precision of the token
 * @returns The amount in BN
 */
declare function convertToLamports(amount: number | string, tokenDecimal: number): BN;
/**
 * Get BN value from decimal value after roundown
 * @param value - The decimal value
 * @returns value in BN after roundown
 */
declare function fromDecimalToBN(value: Decimal): BN;
/**
 * Create a memcmp filter for owner-based filtering
 * @param owner - The owner public key or string
 * @param offset - The offset where the owner field is located in the account data
 * @returns A GetProgramAccountsFilter array with the owner filter
 */
declare function createProgramAccountFilter(owner: PublicKey | string, offset: number): GetProgramAccountsFilter[];
/**
 * Check if a mint is the native SOL mint
 * @param mint - The mint to check
 * @returns Whether the mint is the native SOL mint
 */
declare function isNativeSol(mint: PublicKey): boolean;
/**
 * Check if the locked vesting is the default
 * @param lockedVesting - The locked vesting parameters
 * @returns true if the locked vesting is the default, false otherwise
 */
declare function isDefaultLockedVesting(lockedVesting: {
    amountPerPeriod: BN;
    cliffDurationFromMigrationTime: BN;
    frequency: BN;
    numberOfPeriod: BN;
    cliffUnlockAmount: BN;
}): boolean;
/**
 * Convert decimal to a BN
 * @param value - The value
 * @returns The BN
 */
declare function convertDecimalToBN(value: Decimal): BN;
/**
 * Converts basis points (bps) to fee numerator
 * 1 bps = 0.01% = 0.0001 in decimal
 *
 * @param bps - The value in basis points [1-10_000]
 * @returns The equivalent fee numerator
 */
declare function bpsToFeeNumerator(bps: number): BN;
/**
 * Converts fee numerator back to basis points (bps)
 *
 * @param feeNumerator - The fee numerator to convert
 * @returns The equivalent value in basis points [1-10_000]
 */
declare function feeNumeratorToBps(feeNumerator: BN): number;

/**
 * Validate the pool fees
 * @param poolFees - The pool fees
 * @param collectFeeMode - The collect fee mode
 * @param activationType - The activation type
 * @returns true if the pool fees are valid, false otherwise
 */
declare function validatePoolFees(poolFees: PoolFeeParameters, collectFeeMode: CollectFeeMode, activationType: ActivationType): boolean;
/**
 * Validate fee scheduler parameters
 * @param numberOfPeriod Number of periods
 * @param periodFrequency Period frequency
 * @param reductionFactor Reduction factor
 * @param cliffFeeNumerator Cliff fee numerator
 * @returns Validation result
 */
declare function validateFeeScheduler(numberOfPeriod: number, periodFrequency: BN, reductionFactor: BN, cliffFeeNumerator: BN, baseFeeMode: BaseFeeMode): boolean;
/**
 * Validate rate limiter parameters
 * @param cliffFeeNumerator - Cliff fee numerator
 * @param feeIncrementBps - Fee increment bps
 * @param maxLimiterDuration - Max limiter duration
 * @param referenceAmount - Reference amount
 * @param collectFeeMode - Collect fee mode
 * @param activationType - Activation type (slot or timestamp)
 * @returns Validation result
 */
declare function validateFeeRateLimiter(cliffFeeNumerator: BN, feeIncrementBps: BN, maxLimiterDuration: BN, referenceAmount: BN, collectFeeMode: CollectFeeMode, activationType: ActivationType): boolean;
declare function validateDynamicFee(dynamicFee: DynamicFeeParameters | undefined): boolean;
/**
 * Validate the collect fee mode
 * @param collectFeeMode - The collect fee mode
 * @returns true if the collect fee mode is valid, false otherwise
 */
declare function validateCollectFeeMode(collectFeeMode: CollectFeeMode): boolean;
/**
 * Validate the migration and token type
 * @param migrationOption - The migration option
 * @param tokenType - The token type
 * @returns true if the migration and token type are valid, false otherwise
 */
declare function validateMigrationAndTokenType(migrationOption: MigrationOption, tokenType: TokenType): boolean;
/**
 * Validate the activation type
 * @param activationType - The activation type
 * @returns true if the activation type is valid, false otherwise
 */
declare function validateActivationType(activationType: ActivationType): boolean;
/**
 * Validate the migration fee option
 * @param migrationFeeOption - The migration fee option
 * @param migrationOption - The migration option
 * @returns true if the migration fee option is valid, false otherwise
 */
declare function validateMigrationFeeOption(migrationFeeOption: MigrationFeeOption, migrationOption?: MigrationOption): boolean;
/**
 * Validate the token decimals
 * @param tokenDecimal - The token decimal
 * @returns true if the token decimal is valid, false otherwise
 */
declare function validateTokenDecimals(tokenDecimal: TokenDecimal): boolean;
/**
 * Validate the LP percentages
 * @param partnerLiquidityPercentage - The partner liquidity percentage
 * @param partnerPermanentLockedLiquidityPercentage - The partner permanent locked liquidity percentage
 * @param creatorLiquidityPercentage - The creator liquidity percentage
 * @param creatorPermanentLockedLiquidityPercentage - The creator permanent locked liquidity percentage
 * @param partnerVestingPercentage - The partner vesting percentage (optional, defaults to 0)
 * @param creatorVestingPercentage - The creator vesting percentage (optional, defaults to 0)
 * @returns true if the LP percentages are valid, false otherwise
 */
declare function validateLPPercentages(partnerLiquidityPercentage: number, partnerPermanentLockedLiquidityPercentage: number, creatorLiquidityPercentage: number, creatorPermanentLockedLiquidityPercentage: number, partnerVestingPercentage: number, creatorVestingPercentage: number): boolean;
/**
 * Validate the curve
 * @param curve - The curve
 * @param sqrtStartPrice - The sqrt start price
 * @returns true if the curve is valid, false otherwise
 */
declare function validateCurve(curve: Array<{
    sqrtPrice: BN;
    liquidity: BN;
}>, sqrtStartPrice: BN): boolean;
/**
 * Validate token supply
 * @param tokenSupply - The token supply
 * @param leftoverReceiver - The leftover receiver
 * @param swapBaseAmount - The swap base amount
 * @param migrationBaseAmount - The migration base amount
 * @param lockedVesting - The locked vesting parameters
 * @param swapBaseAmountBuffer - The swap base amount buffer
 * @returns true if the token supply is valid, false otherwise
 */
declare function validateTokenSupply(tokenSupply: {
    preMigrationTokenSupply: BN;
    postMigrationTokenSupply: BN;
}, leftoverReceiver: PublicKey, swapBaseAmount: BN, migrationBaseAmount: BN, lockedVesting: LockedVestingParameters, swapBaseAmountBuffer: BN): boolean;
/**
 * Validate the update authority option
 * @param option  - The update authority option
 * @returns true if the token update authority option is valid, false otherwise
 */
declare function validateTokenUpdateAuthorityOptions(option: TokenUpdateAuthorityOption): boolean;
/**
 * Validate pool creation fee
 * @param poolCreationFee - The pool creation fee in lamports
 * @returns true if the pool creation fee is valid, false otherwise
 */
declare function validatePoolCreationFee(poolCreationFee: BN): boolean;
/**
 * Validate the liquidity vesting info parameters
 * @param vestingInfo - The liquidity vesting info parameters
 * @returns true if valid, false otherwise
 */
declare function validateLiquidityVestingInfo(vestingInfo: LiquidityVestingInfoParameters): boolean;
/**
 * Validate that the minimum locked liquidity requirement is met at day 1
 * The program requires at least MIN_LOCKED_LIQUIDITY_BPS (1000 = 10%) to be locked at SECONDS_PER_DAY (86400 seconds) after migration.
 * @param partnerPermanentLockedLiquidityPercentage - Partner's permanently locked liquidity percentage
 * @param creatorPermanentLockedLiquidityPercentage - Creator's permanently locked liquidity percentage
 * @param partnerLiquidityVestingInfo - Partner's liquidity vesting info (optional)
 * @param creatorLiquidityVestingInfo - Creator's liquidity vesting info (optional)
 * @returns true if the minimum locked liquidity requirement is met, false otherwise
 */
declare function validateMinimumLockedLiquidity(partnerPermanentLockedLiquidityPercentage: number, creatorPermanentLockedLiquidityPercentage: number, partnerLiquidityVestingInfo: LiquidityVestingInfoParameters | undefined, creatorLiquidityVestingInfo: LiquidityVestingInfoParameters | undefined): boolean;
declare function validateMigratedCollectFeeMode(collectFeeMode: number): boolean;
declare function validateCompoundingFeeBps(collectFeeMode: number, compoundingFeeBps: number): boolean;
declare function validateMigratedPoolFee(migratedPoolFee: MigratedPoolFee, migrationOption?: MigrationOption, migrationFeeOption?: MigrationFeeOption, migratedPoolMarketCapFeeSchedulerParams?: MigratedPoolMarketCapFeeSchedulerParameters, compoundingFeeBps?: number): boolean;
/**
 * Validate the config parameters
 * @param configParam - The config parameters
 */
declare function validateConfigParameters(configParam: Omit<CreateConfigParams, 'config' | 'feeClaimer' | 'quoteMint' | 'payer'>): void;
/**
 * Validate that the base token type matches the pool config token type
 * @param baseTokenType - The base token type from create pool parameters
 * @param poolConfig - The pool config state
 * @returns true if the token types match, false otherwise
 */
declare function validateBaseTokenType(baseTokenType: TokenType, poolConfig: PoolConfig): boolean;
/**
 * Validate that the user has sufficient balance for the swap
 * @param connection - The Solana connection
 * @param owner - The owner's public key
 * @param inputMint - The mint of the input token
 * @param amountIn - The input amount for the swap
 * @param inputTokenAccount - The token account to check balance for
 * @returns true if the balance is sufficient, throws error if insufficient
 */
declare function validateBalance(connection: Connection, owner: PublicKey, inputMint: PublicKey, amountIn: BN, inputTokenAccount: PublicKey): Promise<boolean>;
/**
 * Validate that the swap amount is valid
 * @param amountIn - The input amount for the swap
 * @returns true if the amount is valid, throws error if invalid
 */
declare function validateSwapAmount(amountIn: BN): boolean;
/**
 * Validate the migrated pool base fee mode and market cap fee scheduler params
 * @param migratedPoolBaseFeeMode - The base fee mode for the migrated pool
 * @param migratedPoolMarketCapFeeSchedulerParams - The market cap fee scheduler params
 * @param migrationOption - The migration option (optional - only validates for DAMM V2)
 * @returns true if valid
 * @throws Error if invalid
 */
declare function validateMigratedPoolBaseFeeMode(migratedPoolBaseFeeMode: DammV2BaseFeeMode, migratedPoolMarketCapFeeSchedulerParams: MigratedPoolMarketCapFeeSchedulerParameters, migrationOption?: MigrationOption): boolean;
/**
 * Validate that when marketCapFeeSchedulerParams is configured, migratedPoolFee.poolFeeBps is required
 * @param migratedPoolMarketCapFeeSchedulerParams - The market cap fee scheduler params
 * @param migratedPoolFee - The migrated pool fee configuration
 * @returns true if valid
 * @throws Error if marketCapFeeSchedulerParams is configured but poolFeeBps is missing
 */
declare function validateMarketCapFeeSchedulerRequiresPoolFeeBps(migratedPoolMarketCapFeeSchedulerParams: MigratedPoolMarketCapFeeSchedulerParameters, migratedPoolFee: MigratedPoolFee | undefined): boolean;
declare function validateMigrationFee(migrationFee: {
    feePercentage: number;
    creatorFeePercentage: number;
}): boolean;

/**
 * Build a custom constant product curve
 * @param buildCurveParam - The parameters for the custom constant product curve
 * @returns The build custom constant product curve
 */
declare function buildCurve(params: BuildCurveParams): ConfigParameters;
/**
 * Build a custom constant product curve by market cap
 * @param buildCurveByMarketCapParam - The parameters for the custom constant product curve by market cap
 * @returns The build custom constant product curve by market cap
 */
declare function buildCurveWithMarketCap(params: BuildCurveWithMarketCapParams): ConfigParameters;
/**
 * Build a custom constant product curve by market cap
 * @param buildCurveWithTwoSegmentsParam - The parameters for the custom constant product curve by market cap
 * @returns The build custom constant product curve by market cap
 */
declare function buildCurveWithTwoSegments(params: BuildCurveWithTwoSegmentsParams): ConfigParameters;
/**
 * Build a custom constant product curve with a mid price. This will create a two segment curve with a start price -> mid price, and a mid price -> migration price.
 * @param buildCurveWithMidPriceParam - The parameters for the custom constant product curve with a mid price
 * @returns The build custom constant product curve by mid price
 */
declare function buildCurveWithMidPrice(params: BuildCurveWithMidPriceParams): ConfigParameters;
/**
 * Build a custom curve graph with liquidity weights, changing the curve shape based on the liquidity weights
 * @param buildCurveWithLiquidityWeightsParam - The parameters for the custom constant product curve with liquidity weights
 * @returns The build custom constant product curve with liquidity weights
 */
declare function buildCurveWithLiquidityWeights(params: BuildCurveWithLiquidityWeightsParams): ConfigParameters;
/**
 * Build a custom curve with custom sqrt prices instead of liquidity weights.
 * This allows you to specify exactly what price points you want in your curve.
 *
 * @param buildCurveWithCustomSqrtPricesParam - The parameters for the custom curve with sqrt prices
 * @returns The build custom constant product curve with custom sqrt prices
 *
 * @remarks
 * The sqrtPrices array must:
 * - Be in ascending order
 * - Have at least 2 elements (start and end price)
 * - The first price will be the starting price (pMin)
 * - The last price will be the migration price (pMax)
 *
 * The liquidityWeights array (if provided):
 * - Must have length = sqrtPrices.length - 1
 * - Each weight determines how much liquidity is allocated to that price segment
 * - If not provided, liquidity is distributed evenly across all segments
 *
 * Example:
 * sqrtPrices = [p0, p1, p2, p3] creates 3 segments:
 * - Segment 0: p0 to p1 with weight[0]
 * - Segment 1: p1 to p2 with weight[1]
 * - Segment 2: p2 to p3 with weight[2]
 */
declare function buildCurveWithCustomSqrtPrices(params: BuildCurveWithCustomSqrtPricesParams): ConfigParameters;

/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/dynamic_vault.json`.
 */
type DynamicVault = {
    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
    metadata: {
        name: 'dynamicVault';
        version: '0.1.0';
        spec: '0.1.0';
        description: 'Created with Anchor';
    };
    docs: ['Program for vault'];
    instructions: [
        {
            name: 'initialize';
            docs: ['initialize new vault'];
            discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
            accounts: [
                {
                    name: 'vault';
                    docs: [
                        'This is base account for all vault',
                        'No need base key now because we only allow 1 vault per token now',
                        'Vault account'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [118, 97, 117, 108, 116];
                            },
                            {
                                kind: 'account';
                                path: 'tokenMint';
                            },
                            {
                                kind: 'const';
                                value: [
                                    245,
                                    105,
                                    223,
                                    222,
                                    32,
                                    35,
                                    51,
                                    89,
                                    141,
                                    199,
                                    215,
                                    75,
                                    29,
                                    148,
                                    184,
                                    98,
                                    71,
                                    121,
                                    193,
                                    248,
                                    47,
                                    30,
                                    37,
                                    166,
                                    91,
                                    110,
                                    78,
                                    248,
                                    163,
                                    190,
                                    155,
                                    155
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Payer can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenVault';
                    docs: ['Token vault account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'vault';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenMint';
                    docs: ['Token mint account'];
                },
                {
                    name: 'lpMint';
                    docs: ['LP mint account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [108, 112, 95, 109, 105, 110, 116];
                            },
                            {
                                kind: 'account';
                                path: 'vault';
                            }
                        ];
                    };
                },
                {
                    name: 'rent';
                    docs: ['rent'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'systemProgram';
                    docs: ['systemProgram'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [];
        }
    ];
    accounts: [
        {
            name: 'vault';
            discriminator: [211, 8, 232, 43, 2, 152, 117, 119];
        }
    ];
    types: [
        {
            name: 'lockedProfitTracker';
            docs: ['LockedProfitTracker struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lastUpdatedLockedProfit';
                        docs: ['The total locked profit from the last report'];
                        type: 'u64';
                    },
                    {
                        name: 'lastReport';
                        docs: ['The last timestamp (in seconds) rebalancing'];
                        type: 'u64';
                    },
                    {
                        name: 'lockedProfitDegradation';
                        docs: ['Rate per second of degradation'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'vault';
            docs: ['Vault struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'enabled';
                        docs: [
                            'The flag, if admin set enable = false, then the user can only withdraw and cannot deposit in the vault.'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'bumps';
                        docs: ['Vault nonce, to create vault seeds'];
                        type: {
                            defined: {
                                name: 'vaultBumps';
                            };
                        };
                    },
                    {
                        name: 'totalAmount';
                        docs: [
                            'The total liquidity of the vault, including remaining tokens in token_vault and the liquidity in all strategies.'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'tokenVault';
                        docs: ['Token account, hold liquidity in vault reserve'];
                        type: 'pubkey';
                    },
                    {
                        name: 'feeVault';
                        docs: [
                            'Hold lp token of vault, each time rebalance crank is called, vault calculate performance fee and mint corresponding lp token amount to fee_vault. fee_vault is owned by treasury address'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenMint';
                        docs: ['Token mint that vault supports'];
                        type: 'pubkey';
                    },
                    {
                        name: 'lpMint';
                        docs: ['Lp mint of vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'strategies';
                        docs: [
                            'The list of strategy addresses that vault supports, vault can support up to MAX_STRATEGY strategies at the same time.'
                        ];
                        type: {
                            array: ['pubkey', 30];
                        };
                    },
                    {
                        name: 'base';
                        docs: ['The base address to create vault seeds'];
                        type: 'pubkey';
                    },
                    {
                        name: 'admin';
                        docs: ['Admin of vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'operator';
                        docs: [
                            'Person who can send the crank. Operator can only send liquidity to strategies that admin defined, and claim reward to account of treasury address'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'lockedProfitTracker';
                        docs: ['Stores information for locked profit.'];
                        type: {
                            defined: {
                                name: 'lockedProfitTracker';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'vaultBumps';
            docs: ['Vault bumps struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'vaultBump';
                        docs: ['vaultBump'];
                        type: 'u8';
                    },
                    {
                        name: 'tokenVaultBump';
                        docs: ['tokenVaultBump'];
                        type: 'u8';
                    }
                ];
            };
        }
    ];
};

/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/dynamic_amm.json`.
 */
/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/dynamic_amm.json`.
 */
type DammV1 = {
    address: 'Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB';
    metadata: {
        name: 'dynamicAmm';
        version: '0.1.0';
        spec: '0.1.0';
        description: 'Created with Anchor';
    };
    docs: ['Program for AMM'];
    instructions: [
        {
            name: 'claimFee';
            docs: ['Claim fee'];
            discriminator: [169, 32, 79, 137, 136, 232, 70, 137];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'lpMint';
                    writable: true;
                },
                {
                    name: 'lockEscrow';
                    writable: true;
                },
                {
                    name: 'owner';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'sourceTokens';
                    writable: true;
                },
                {
                    name: 'escrowVault';
                    writable: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'aTokenVault';
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    writable: true;
                },
                {
                    name: 'aVault';
                    writable: true;
                },
                {
                    name: 'bVault';
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    writable: true;
                },
                {
                    name: 'bVaultLp';
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    writable: true;
                },
                {
                    name: 'userAToken';
                    writable: true;
                },
                {
                    name: 'userBToken';
                    writable: true;
                },
                {
                    name: 'vaultProgram';
                }
            ];
            args: [
                {
                    name: 'maxAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'createLockEscrow';
            docs: ['Create lock account'];
            discriminator: [54, 87, 165, 19, 69, 227, 218, 224];
            accounts: [
                {
                    name: 'pool';
                },
                {
                    name: 'lockEscrow';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    108,
                                    111,
                                    99,
                                    107,
                                    95,
                                    101,
                                    115,
                                    99,
                                    114,
                                    111,
                                    119
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            },
                            {
                                kind: 'account';
                                path: 'owner';
                            }
                        ];
                    };
                },
                {
                    name: 'owner';
                },
                {
                    name: 'lpMint';
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                }
            ];
            args: [];
        },
        {
            name: 'initializePermissionlessConstantProductPoolWithConfig2';
            docs: ['Initialize permissionless pool with config 2'];
            discriminator: [48, 149, 220, 130, 61, 11, 9, 178];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA address)'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'config';
                            }
                        ];
                    };
                },
                {
                    name: 'config';
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [108, 112, 95, 109, 105, 110, 116];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token A mint of the pool. Eg: USDT'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token B mint of the pool. Eg: USDC'];
                },
                {
                    name: 'aVault';
                    writable: true;
                },
                {
                    name: 'bVault';
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault A'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'aVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'bVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: [
                        'Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: [
                        'Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerPoolLp';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'payer';
                            },
                            {
                                kind: 'const';
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'lpMint';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'protocolTokenAFee';
                    docs: [
                        'Protocol fee token account for token A. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'protocolTokenBFee';
                    docs: [
                        'Protocol fee token account for token B. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: [
                        'Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool.'
                    ];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'rent';
                    docs: ['Rent account.'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'mintMetadata';
                    writable: true;
                },
                {
                    name: 'metadataProgram';
                },
                {
                    name: 'vaultProgram';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'associatedTokenProgram';
                    docs: ['Associated token program.'];
                    address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'tokenAAmount';
                    type: 'u64';
                },
                {
                    name: 'tokenBAmount';
                    type: 'u64';
                },
                {
                    name: 'activationPoint';
                    type: {
                        option: 'u64';
                    };
                }
            ];
        },
        {
            name: 'lock';
            docs: ['Lock Lp token'];
            discriminator: [21, 19, 208, 43, 237, 62, 255, 87];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'lpMint';
                },
                {
                    name: 'lockEscrow';
                    writable: true;
                },
                {
                    name: 'owner';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'sourceTokens';
                    writable: true;
                },
                {
                    name: 'escrowVault';
                    writable: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'aVault';
                },
                {
                    name: 'bVault';
                },
                {
                    name: 'aVaultLp';
                },
                {
                    name: 'bVaultLp';
                },
                {
                    name: 'aVaultLpMint';
                },
                {
                    name: 'bVaultLpMint';
                }
            ];
            args: [
                {
                    name: 'amount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'partnerClaimFee';
            docs: ['Partner claim fee'];
            discriminator: [57, 53, 176, 30, 123, 70, 52, 64];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    relations: ['pool'];
                },
                {
                    name: 'protocolTokenAFee';
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'protocolTokenBFee';
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'partnerTokenA';
                    writable: true;
                },
                {
                    name: 'partnerTokenB';
                    writable: true;
                },
                {
                    name: 'tokenProgram';
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'partnerAuthority';
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'maxAmountA';
                    type: 'u64';
                },
                {
                    name: 'maxAmountB';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'swap';
            docs: [
                'Swap token A to B, or vice versa. An amount of trading fee will be charged for liquidity provider, and the admin of the pool.'
            ];
            discriminator: [248, 198, 158, 145, 225, 117, 135, 200];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'userSourceToken';
                    writable: true;
                },
                {
                    name: 'userDestinationToken';
                    writable: true;
                },
                {
                    name: 'aVault';
                    writable: true;
                },
                {
                    name: 'bVault';
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    writable: true;
                },
                {
                    name: 'bVaultLp';
                    writable: true;
                },
                {
                    name: 'protocolTokenFee';
                    writable: true;
                },
                {
                    name: 'user';
                    signer: true;
                },
                {
                    name: 'vaultProgram';
                },
                {
                    name: 'tokenProgram';
                }
            ];
            args: [
                {
                    name: 'inAmount';
                    type: 'u64';
                },
                {
                    name: 'minimumOutAmount';
                    type: 'u64';
                }
            ];
        }
    ];
    accounts: [
        {
            name: 'config';
            discriminator: [155, 12, 170, 224, 30, 250, 204, 130];
        },
        {
            name: 'pool';
            discriminator: [241, 154, 109, 4, 17, 177, 109, 188];
        }
    ];
    types: [
        {
            name: 'bootstrapping';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'activationPoint';
                        docs: ['Activation point, can be slot or timestamp'];
                        type: 'u64';
                    },
                    {
                        name: 'whitelistedVault';
                        docs: [
                            'Whitelisted vault to be able to buy pool before open slot'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreator';
                        type: 'pubkey';
                    },
                    {
                        name: 'activationType';
                        docs: [
                            'Activation type, 0 means by slot, 1 means by timestamp'
                        ];
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'config';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFees';
                            };
                        };
                    },
                    {
                        name: 'activationDuration';
                        type: 'u64';
                    },
                    {
                        name: 'vaultConfigKey';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'partnerFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 219];
                        };
                    }
                ];
            };
        },
        {
            name: 'curveType';
            docs: ['Type of the swap curve'];
            type: {
                kind: 'enum';
                variants: [
                    {
                        name: 'constantProduct';
                    },
                    {
                        name: 'stable';
                        fields: [
                            {
                                name: 'amp';
                                docs: ['Amplification coefficient'];
                                type: 'u64';
                            },
                            {
                                name: 'tokenMultiplier';
                                docs: [
                                    'Multiplier for the pool token. Used to normalized token with different decimal into the same precision.'
                                ];
                                type: {
                                    defined: {
                                        name: 'tokenMultiplier';
                                    };
                                };
                            },
                            {
                                name: 'depeg';
                                docs: [
                                    'Depeg pool information. Contains functions to allow token amount to be repeg using stake / interest bearing token virtual price'
                                ];
                                type: {
                                    defined: {
                                        name: 'depeg';
                                    };
                                };
                            },
                            {
                                name: 'lastAmpUpdatedTimestamp';
                                docs: [
                                    'The last amp updated timestamp. Used to prevent update_curve_info called infinitely many times within a short period'
                                ];
                                type: 'u64';
                            }
                        ];
                    }
                ];
            };
        },
        {
            name: 'depeg';
            docs: ['Contains information for depeg pool'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseVirtualPrice';
                        docs: [
                            'The virtual price of staking / interest bearing token'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'baseCacheUpdated';
                        docs: [
                            'The virtual price of staking / interest bearing token'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'depegType';
                        docs: ['Type of the depeg pool'];
                        type: {
                            defined: {
                                name: 'depegType';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'depegType';
            docs: ['Type of depeg pool'];
            type: {
                kind: 'enum';
                variants: [
                    {
                        name: 'none';
                    },
                    {
                        name: 'marinade';
                    },
                    {
                        name: 'lido';
                    },
                    {
                        name: 'splStake';
                    }
                ];
            };
        },
        {
            name: 'padding';
            docs: ['Padding for future pool fields'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'padding0';
                        docs: ['Padding 0'];
                        type: {
                            array: ['u8', 6];
                        };
                    },
                    {
                        name: 'padding1';
                        docs: ['Padding 1'];
                        type: {
                            array: ['u64', 21];
                        };
                    },
                    {
                        name: 'padding2';
                        docs: ['Padding 2'];
                        type: {
                            array: ['u64', 21];
                        };
                    }
                ];
            };
        },
        {
            name: 'partnerInfo';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'feeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'partnerAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'pendingFeeA';
                        type: 'u64';
                    },
                    {
                        name: 'pendingFeeB';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'pool';
            docs: ['State of pool account'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lpMint';
                        docs: ['LP token mint of the pool'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAMint';
                        docs: ['Token A mint of the pool. Eg: USDT'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBMint';
                        docs: ['Token B mint of the pool. Eg: USDC'];
                        type: 'pubkey';
                    },
                    {
                        name: 'aVault';
                        docs: [
                            'Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'bVault';
                        docs: [
                            'Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'aVaultLp';
                        docs: [
                            'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'bVaultLp';
                        docs: [
                            'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'aVaultLpBump';
                        docs: [
                            '"A" vault lp bump. Used to create signer seeds.'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'enabled';
                        docs: [
                            'Flag to determine whether the pool is enabled, or disabled.'
                        ];
                        type: 'bool';
                    },
                    {
                        name: 'protocolTokenAFee';
                        docs: [
                            'Protocol fee token account for token A. Used to receive trading fee.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'protocolTokenBFee';
                        docs: [
                            'Protocol fee token account for token B. Used to receive trading fee.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'feeLastUpdatedAt';
                        docs: ['Fee last updated timestamp'];
                        type: 'u64';
                    },
                    {
                        name: 'padding0';
                        type: {
                            array: ['u8', 24];
                        };
                    },
                    {
                        name: 'fees';
                        docs: ['Store the fee charges setting.'];
                        type: {
                            defined: {
                                name: 'poolFees';
                            };
                        };
                    },
                    {
                        name: 'poolType';
                        docs: ['Pool type'];
                        type: {
                            defined: {
                                name: 'poolType';
                            };
                        };
                    },
                    {
                        name: 'stake';
                        docs: ['Stake pubkey of SPL stake pool'];
                        type: 'pubkey';
                    },
                    {
                        name: 'totalLockedLp';
                        docs: ['Total locked lp token'];
                        type: 'u64';
                    },
                    {
                        name: 'bootstrapping';
                        docs: ['Bootstrapping config'];
                        type: {
                            defined: {
                                name: 'bootstrapping';
                            };
                        };
                    },
                    {
                        name: 'partnerInfo';
                        type: {
                            defined: {
                                name: 'partnerInfo';
                            };
                        };
                    },
                    {
                        name: 'padding';
                        docs: ['Padding for future pool field'];
                        type: {
                            defined: {
                                name: 'padding';
                            };
                        };
                    },
                    {
                        name: 'curveType';
                        docs: [
                            'The type of the swap curve supported by the pool.'
                        ];
                        type: {
                            defined: {
                                name: 'curveType';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'poolFees';
            docs: ['Information regarding fee charges'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tradeFeeNumerator';
                        docs: [
                            'Trade fees are extra token amounts that are held inside the token',
                            'accounts during a trade, making the value of liquidity tokens rise.',
                            'Trade fee numerator'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'tradeFeeDenominator';
                        docs: ['Trade fee denominator'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolTradeFeeNumerator';
                        docs: [
                            'Owner trading fees are extra token amounts that are held inside the token',
                            'accounts during a trade, with the equivalent in pool tokens minted to',
                            'the owner of the program.',
                            'Owner trade fee numerator'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'protocolTradeFeeDenominator';
                        docs: ['Owner trade fee denominator'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'poolType';
            docs: ['Pool type'];
            type: {
                kind: 'enum';
                variants: [
                    {
                        name: 'permissioned';
                    },
                    {
                        name: 'permissionless';
                    }
                ];
            };
        },
        {
            name: 'tokenMultiplier';
            docs: [
                'Multiplier for the pool token. Used to normalized token with different decimal into the same precision.'
            ];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tokenAMultiplier';
                        docs: ['Multiplier for token A of the pool.'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBMultiplier';
                        docs: ['Multiplier for token B of the pool.'];
                        type: 'u64';
                    },
                    {
                        name: 'precisionFactor';
                        docs: [
                            'Record the highest token decimal in the pool. For example, Token A is 6 decimal, token B is 9 decimal. This will save value of 9.'
                        ];
                        type: 'u8';
                    }
                ];
            };
        }
    ];
};

/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/cp_amm.json`.
 */
type CpAmm = {
    address: 'cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG';
    metadata: {
        name: 'cpAmm';
        version: '0.1.7';
        spec: '0.1.0';
        description: 'Created with Anchor';
    };
    instructions: [
        {
            name: 'addLiquidity';
            discriminator: [181, 157, 89, 67, 143, 182, 52, 72];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The user token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The user token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'addLiquidityParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'claimPartnerFee';
            discriminator: [97, 206, 39, 105, 94, 94, 126, 148];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The treasury token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The treasury token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'partner';
                    signer: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'maxAmountA';
                    type: 'u64';
                },
                {
                    name: 'maxAmountB';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'claimPositionFee';
            discriminator: [180, 38, 154, 17, 133, 33, 162, 211];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The user token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The user token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'claimProtocolFee';
            discriminator: [165, 228, 133, 48, 99, 249, 255, 33];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenAAccount';
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    writable: true;
                },
                {
                    name: 'operator';
                    docs: ['Claim fee operator'];
                },
                {
                    name: 'signer';
                    docs: ['operator'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'maxAmountA';
                    type: 'u64';
                },
                {
                    name: 'maxAmountB';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'claimReward';
            discriminator: [149, 95, 181, 242, 94, 90, 158, 162];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'rewardVault';
                    docs: ['The vault token account for reward token'];
                    writable: true;
                },
                {
                    name: 'rewardMint';
                },
                {
                    name: 'userTokenAccount';
                    writable: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                },
                {
                    name: 'skipReward';
                    type: 'u8';
                }
            ];
        },
        {
            name: 'closeConfig';
            discriminator: [145, 9, 72, 157, 95, 125, 61, 85];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'closeOperatorAccount';
            discriminator: [171, 9, 213, 74, 120, 23, 3, 29];
            accounts: [
                {
                    name: 'operator';
                    writable: true;
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'closePosition';
            discriminator: [123, 134, 81, 0, 49, 68, 98, 98];
            accounts: [
                {
                    name: 'positionNftMint';
                    docs: ['positionNftMint'];
                    writable: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                    writable: true;
                },
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                },
                {
                    name: 'owner';
                    docs: ['Owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: [
                        'Program to create NFT mint/token account and transfer for token22 account'
                    ];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'closeTokenBadge';
            discriminator: [108, 146, 86, 110, 179, 254, 10, 104];
            accounts: [
                {
                    name: 'tokenBadge';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'createConfig';
            docs: ['OPERATOR FUNCTIONS /////'];
            discriminator: [201, 207, 243, 114, 75, 111, 47, 189];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [99, 111, 110, 102, 105, 103];
                            },
                            {
                                kind: 'arg';
                                path: 'index';
                            }
                        ];
                    };
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'index';
                    type: 'u64';
                },
                {
                    name: 'configParameters';
                    type: {
                        defined: {
                            name: 'staticConfigParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'createDynamicConfig';
            discriminator: [81, 251, 122, 78, 66, 57, 208, 82];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [99, 111, 110, 102, 105, 103];
                            },
                            {
                                kind: 'arg';
                                path: 'index';
                            }
                        ];
                    };
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'index';
                    type: 'u64';
                },
                {
                    name: 'configParameters';
                    type: {
                        defined: {
                            name: 'dynamicConfigParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'createOperatorAccount';
            docs: ['ADMIN FUNCTIONS /////'];
            discriminator: [221, 64, 246, 149, 240, 153, 229, 163];
            accounts: [
                {
                    name: 'operator';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [111, 112, 101, 114, 97, 116, 111, 114];
                            },
                            {
                                kind: 'account';
                                path: 'whitelistedAddress';
                            }
                        ];
                    };
                },
                {
                    name: 'whitelistedAddress';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'permission';
                    type: 'u128';
                }
            ];
        },
        {
            name: 'createPosition';
            discriminator: [48, 215, 197, 153, 96, 203, 180, 133];
            accounts: [
                {
                    name: 'owner';
                },
                {
                    name: 'positionNftMint';
                    docs: ['positionNftMint'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['position nft account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    112,
                                    111,
                                    115,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    110,
                                    102,
                                    116,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'position';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [112, 111, 115, 105, 116, 105, 111, 110];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'payer';
                    docs: [
                        'Address paying to create the position. Can be anyone'
                    ];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: [
                        'Program to create NFT mint/token account and transfer for token22 account'
                    ];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'createTokenBadge';
            discriminator: [88, 206, 0, 91, 60, 175, 151, 118];
            accounts: [
                {
                    name: 'tokenBadge';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    98,
                                    97,
                                    100,
                                    103,
                                    101
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenMint';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenMint';
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'dummyIx';
            discriminator: [234, 95, 176, 185, 7, 42, 35, 159];
            accounts: [
                {
                    name: 'podAlignedFeeTimeScheduler';
                },
                {
                    name: 'podAlignedFeeRateLimiter';
                },
                {
                    name: 'podAlignedFeeMarketCapScheduler';
                }
            ];
            args: [
                {
                    name: 'ixs';
                    type: {
                        defined: {
                            name: 'dummyParams';
                        };
                    };
                }
            ];
        },
        {
            name: 'fundReward';
            discriminator: [188, 50, 249, 165, 93, 151, 38, 63];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'rewardVault';
                    writable: true;
                },
                {
                    name: 'rewardMint';
                },
                {
                    name: 'funderTokenAccount';
                    writable: true;
                },
                {
                    name: 'funder';
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                },
                {
                    name: 'amount';
                    type: 'u64';
                },
                {
                    name: 'carryForward';
                    type: 'bool';
                }
            ];
        },
        {
            name: 'initializeCustomizablePool';
            discriminator: [20, 161, 241, 24, 189, 221, 180, 2];
            accounts: [
                {
                    name: 'creator';
                },
                {
                    name: 'positionNftMint';
                    docs: ['positionNftMint'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['position nft account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    112,
                                    111,
                                    115,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    110,
                                    102,
                                    116,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Address paying to create the pool. Can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    docs: ['Initialize an account to store the pool state'];
                    writable: true;
                },
                {
                    name: 'position';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [112, 111, 115, 105, 116, 105, 111, 110];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token a mint'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token b mint'];
                },
                {
                    name: 'tokenAVault';
                    docs: ['Token a vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenBVault';
                    docs: ['Token b vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: ['payer token a account'];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: ['creator token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'token2022Program';
                    docs: [
                        'Program to create NFT mint/token account and transfer for token22 account'
                    ];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'initializeCustomizablePoolParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'initializePool';
            docs: ['USER FUNCTIONS ////'];
            discriminator: [95, 180, 10, 172, 84, 174, 232, 40];
            accounts: [
                {
                    name: 'creator';
                },
                {
                    name: 'positionNftMint';
                    docs: ['positionNftMint'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['position nft account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    112,
                                    111,
                                    115,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    110,
                                    102,
                                    116,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Address paying to create the pool. Can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'config';
                    docs: ['Which config the pool belongs to.'];
                },
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    docs: ['Initialize an account to store the pool state'];
                    writable: true;
                },
                {
                    name: 'position';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [112, 111, 115, 105, 116, 105, 111, 110];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token a mint'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token b mint'];
                },
                {
                    name: 'tokenAVault';
                    docs: ['Token a vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenBVault';
                    docs: ['Token b vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: ['payer token a account'];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: ['creator token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'token2022Program';
                    docs: [
                        'Program to create NFT mint/token account and transfer for token22 account'
                    ];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'initializePoolParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'initializePoolWithDynamicConfig';
            discriminator: [149, 82, 72, 197, 253, 252, 68, 15];
            accounts: [
                {
                    name: 'creator';
                },
                {
                    name: 'positionNftMint';
                    docs: ['positionNftMint'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['position nft account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    112,
                                    111,
                                    115,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    110,
                                    102,
                                    116,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Address paying to create the pool. Can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'poolCreatorAuthority';
                    signer: true;
                    relations: ['config'];
                },
                {
                    name: 'config';
                    docs: ['Which config the pool belongs to.'];
                },
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    docs: ['Initialize an account to store the pool state'];
                    writable: true;
                },
                {
                    name: 'position';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [112, 111, 115, 105, 116, 105, 111, 110];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token a mint'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token b mint'];
                },
                {
                    name: 'tokenAVault';
                    docs: ['Token a vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenBVault';
                    docs: ['Token b vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: ['payer token a account'];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: ['creator token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'token2022Program';
                    docs: [
                        'Program to create NFT mint/token account and transfer for token22 account'
                    ];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'initializeCustomizablePoolParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'initializeReward';
            discriminator: [95, 135, 192, 196, 242, 129, 230, 68];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'rewardVault';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    114,
                                    101,
                                    119,
                                    97,
                                    114,
                                    100,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            },
                            {
                                kind: 'arg';
                                path: 'rewardIndex';
                            }
                        ];
                    };
                },
                {
                    name: 'rewardMint';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                },
                {
                    name: 'rewardDuration';
                    type: 'u64';
                },
                {
                    name: 'funder';
                    type: 'pubkey';
                }
            ];
        },
        {
            name: 'lockPosition';
            discriminator: [227, 62, 2, 252, 247, 10, 171, 185];
            accounts: [
                {
                    name: 'pool';
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'vesting';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'vestingParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'permanentLockPosition';
            discriminator: [165, 176, 125, 6, 231, 171, 186, 213];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'permanentLockLiquidity';
                    type: 'u128';
                }
            ];
        },
        {
            name: 'refreshVesting';
            discriminator: [9, 94, 216, 14, 116, 204, 247, 0];
            accounts: [
                {
                    name: 'pool';
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                }
            ];
            args: [];
        },
        {
            name: 'removeAllLiquidity';
            discriminator: [10, 51, 61, 35, 112, 105, 24, 85];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The user token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The user token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'tokenAAmountThreshold';
                    type: 'u64';
                },
                {
                    name: 'tokenBAmountThreshold';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'removeLiquidity';
            discriminator: [80, 85, 209, 72, 24, 206, 177, 108];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The user token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The user token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'removeLiquidityParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'setPoolStatus';
            discriminator: [112, 87, 135, 223, 83, 204, 132, 53];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'status';
                    type: 'u8';
                }
            ];
        },
        {
            name: 'splitPosition';
            discriminator: [172, 241, 221, 138, 161, 29, 253, 42];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                    relations: ['firstPosition', 'secondPosition'];
                },
                {
                    name: 'firstPosition';
                    docs: ['The first position'];
                    writable: true;
                },
                {
                    name: 'firstPositionNftAccount';
                    docs: ['The token account for position nft'];
                },
                {
                    name: 'secondPosition';
                    docs: ['The second position'];
                    writable: true;
                },
                {
                    name: 'secondPositionNftAccount';
                    docs: ['The token account for position nft'];
                },
                {
                    name: 'firstOwner';
                    docs: ['Owner of first position'];
                    signer: true;
                },
                {
                    name: 'secondOwner';
                    docs: ['Owner of second position'];
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'splitPositionParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'splitPosition2';
            discriminator: [221, 147, 228, 207, 140, 212, 17, 119];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                    relations: ['firstPosition', 'secondPosition'];
                },
                {
                    name: 'firstPosition';
                    docs: ['The first position'];
                    writable: true;
                },
                {
                    name: 'firstPositionNftAccount';
                    docs: ['The token account for position nft'];
                },
                {
                    name: 'secondPosition';
                    docs: ['The second position'];
                    writable: true;
                },
                {
                    name: 'secondPositionNftAccount';
                    docs: ['The token account for position nft'];
                },
                {
                    name: 'firstOwner';
                    docs: ['Owner of first position'];
                    signer: true;
                },
                {
                    name: 'secondOwner';
                    docs: ['Owner of second position'];
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'numerator';
                    type: 'u32';
                }
            ];
        },
        {
            name: 'swap';
            discriminator: [248, 198, 158, 145, 225, 117, 135, 200];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    docs: ['Pool account'];
                    writable: true;
                },
                {
                    name: 'inputTokenAccount';
                    docs: ['The user token account for input token'];
                    writable: true;
                },
                {
                    name: 'outputTokenAccount';
                    docs: ['The user token account for output token'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                },
                {
                    name: 'payer';
                    docs: ['The user performing the swap'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'referralTokenAccount';
                    docs: ['referral token account'];
                    writable: true;
                    optional: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'swapParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'swap2';
            discriminator: [65, 75, 63, 76, 235, 91, 91, 136];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    docs: ['Pool account'];
                    writable: true;
                },
                {
                    name: 'inputTokenAccount';
                    docs: ['The user token account for input token'];
                    writable: true;
                },
                {
                    name: 'outputTokenAccount';
                    docs: ['The user token account for output token'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                },
                {
                    name: 'payer';
                    docs: ['The user performing the swap'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'referralTokenAccount';
                    docs: ['referral token account'];
                    writable: true;
                    optional: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'swapParameters2';
                        };
                    };
                }
            ];
        },
        {
            name: 'updatePoolFees';
            discriminator: [118, 217, 203, 179, 60, 8, 70, 89];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'updatePoolFeesParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'updateRewardDuration';
            discriminator: [138, 174, 196, 169, 213, 235, 254, 107];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                },
                {
                    name: 'newDuration';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'updateRewardFunder';
            discriminator: [211, 28, 48, 32, 215, 160, 35, 23];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                },
                {
                    name: 'newFunder';
                    type: 'pubkey';
                }
            ];
        },
        {
            name: 'withdrawIneligibleReward';
            discriminator: [148, 206, 42, 195, 247, 49, 103, 8];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'rewardVault';
                    writable: true;
                },
                {
                    name: 'rewardMint';
                },
                {
                    name: 'funderTokenAccount';
                    writable: true;
                },
                {
                    name: 'funder';
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                }
            ];
        },
        {
            name: 'zapProtocolFee';
            discriminator: [213, 155, 187, 34, 56, 182, 91, 240];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'tokenVault';
                    writable: true;
                },
                {
                    name: 'tokenMint';
                },
                {
                    name: 'receiverToken';
                    writable: true;
                },
                {
                    name: 'operator';
                    docs: ['zap claim fee operator'];
                },
                {
                    name: 'signer';
                    docs: ['operator'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program'];
                },
                {
                    name: 'sysvarInstructions';
                    address: 'Sysvar1nstructions1111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'maxAmount';
                    type: 'u64';
                }
            ];
        }
    ];
    accounts: [
        {
            name: 'config';
            discriminator: [155, 12, 170, 224, 30, 250, 204, 130];
        },
        {
            name: 'operator';
            discriminator: [219, 31, 188, 145, 69, 139, 204, 117];
        },
        {
            name: 'podAlignedFeeMarketCapScheduler';
            discriminator: [251, 130, 208, 253, 245, 27, 145, 203];
        },
        {
            name: 'podAlignedFeeRateLimiter';
            discriminator: [160, 219, 8, 251, 179, 7, 16, 117];
        },
        {
            name: 'podAlignedFeeTimeScheduler';
            discriminator: [239, 132, 138, 213, 67, 154, 130, 70];
        },
        {
            name: 'pool';
            discriminator: [241, 154, 109, 4, 17, 177, 109, 188];
        },
        {
            name: 'position';
            discriminator: [170, 188, 143, 228, 122, 64, 247, 208];
        },
        {
            name: 'tokenBadge';
            discriminator: [116, 219, 204, 229, 249, 116, 255, 150];
        },
        {
            name: 'vesting';
            discriminator: [100, 149, 66, 138, 95, 200, 128, 241];
        }
    ];
    events: [
        {
            name: 'evtClaimPartnerFee';
            discriminator: [118, 99, 77, 10, 226, 1, 1, 87];
        },
        {
            name: 'evtClaimPositionFee';
            discriminator: [198, 182, 183, 52, 97, 12, 49, 56];
        },
        {
            name: 'evtClaimProtocolFee';
            discriminator: [186, 244, 75, 251, 188, 13, 25, 33];
        },
        {
            name: 'evtClaimReward';
            discriminator: [218, 86, 147, 200, 235, 188, 215, 231];
        },
        {
            name: 'evtCloseConfig';
            discriminator: [36, 30, 239, 45, 58, 132, 14, 5];
        },
        {
            name: 'evtClosePosition';
            discriminator: [20, 145, 144, 68, 143, 142, 214, 178];
        },
        {
            name: 'evtCreateConfig';
            discriminator: [131, 207, 180, 174, 180, 73, 165, 54];
        },
        {
            name: 'evtCreateDynamicConfig';
            discriminator: [231, 197, 13, 164, 248, 213, 133, 152];
        },
        {
            name: 'evtCreatePosition';
            discriminator: [156, 15, 119, 198, 29, 181, 221, 55];
        },
        {
            name: 'evtCreateTokenBadge';
            discriminator: [141, 120, 134, 116, 34, 28, 114, 160];
        },
        {
            name: 'evtFundReward';
            discriminator: [104, 233, 237, 122, 199, 191, 121, 85];
        },
        {
            name: 'evtInitializePool';
            discriminator: [228, 50, 246, 85, 203, 66, 134, 37];
        },
        {
            name: 'evtInitializeReward';
            discriminator: [129, 91, 188, 3, 246, 52, 185, 249];
        },
        {
            name: 'evtLiquidityChange';
            discriminator: [197, 171, 78, 127, 224, 211, 87, 13];
        },
        {
            name: 'evtLockPosition';
            discriminator: [168, 63, 108, 83, 219, 82, 2, 200];
        },
        {
            name: 'evtPermanentLockPosition';
            discriminator: [145, 143, 162, 218, 218, 80, 67, 11];
        },
        {
            name: 'evtSetPoolStatus';
            discriminator: [100, 213, 74, 3, 95, 91, 228, 146];
        },
        {
            name: 'evtSplitPosition2';
            discriminator: [165, 32, 203, 174, 72, 100, 233, 103];
        },
        {
            name: 'evtSwap2';
            discriminator: [189, 66, 51, 168, 38, 80, 117, 153];
        },
        {
            name: 'evtUpdatePoolFees';
            discriminator: [76, 165, 246, 102, 102, 217, 156, 44];
        },
        {
            name: 'evtUpdateRewardDuration';
            discriminator: [149, 135, 65, 231, 129, 153, 65, 57];
        },
        {
            name: 'evtUpdateRewardFunder';
            discriminator: [76, 154, 208, 13, 40, 115, 246, 146];
        },
        {
            name: 'evtWithdrawIneligibleReward';
            discriminator: [248, 215, 184, 78, 31, 180, 179, 168];
        }
    ];
    errors: [
        {
            code: 6000;
            name: 'mathOverflow';
            msg: 'Math operation overflow';
        },
        {
            code: 6001;
            name: 'invalidFee';
            msg: 'Invalid fee setup';
        },
        {
            code: 6002;
            name: 'exceededSlippage';
            msg: 'Exceeded slippage tolerance';
        },
        {
            code: 6003;
            name: 'poolDisabled';
            msg: 'Pool disabled';
        },
        {
            code: 6004;
            name: 'exceedMaxFeeBps';
            msg: 'Exceeded max fee bps';
        },
        {
            code: 6005;
            name: 'invalidAdmin';
            msg: 'Invalid admin';
        },
        {
            code: 6006;
            name: 'amountIsZero';
            msg: 'Amount is zero';
        },
        {
            code: 6007;
            name: 'typeCastFailed';
            msg: 'Type cast error';
        },
        {
            code: 6008;
            name: 'unableToModifyActivationPoint';
            msg: 'Unable to modify activation point';
        },
        {
            code: 6009;
            name: 'invalidAuthorityToCreateThePool';
            msg: 'Invalid authority to create the pool';
        },
        {
            code: 6010;
            name: 'invalidActivationType';
            msg: 'Invalid activation type';
        },
        {
            code: 6011;
            name: 'invalidActivationPoint';
            msg: 'Invalid activation point';
        },
        {
            code: 6012;
            name: 'invalidQuoteMint';
            msg: 'Quote token must be SOL,USDC';
        },
        {
            code: 6013;
            name: 'invalidFeeCurve';
            msg: 'Invalid fee curve';
        },
        {
            code: 6014;
            name: 'invalidPriceRange';
            msg: 'Invalid Price Range';
        },
        {
            code: 6015;
            name: 'priceRangeViolation';
            msg: 'Trade is over price range';
        },
        {
            code: 6016;
            name: 'invalidParameters';
            msg: 'Invalid parameters';
        },
        {
            code: 6017;
            name: 'invalidCollectFeeMode';
            msg: 'Invalid collect fee mode';
        },
        {
            code: 6018;
            name: 'invalidInput';
            msg: 'Invalid input';
        },
        {
            code: 6019;
            name: 'cannotCreateTokenBadgeOnSupportedMint';
            msg: 'Cannot create token badge on supported mint';
        },
        {
            code: 6020;
            name: 'invalidTokenBadge';
            msg: 'Invalid token badge';
        },
        {
            code: 6021;
            name: 'invalidMinimumLiquidity';
            msg: 'Invalid minimum liquidity';
        },
        {
            code: 6022;
            name: 'invalidVestingInfo';
            msg: 'Invalid vesting information';
        },
        {
            code: 6023;
            name: 'insufficientLiquidity';
            msg: 'Insufficient liquidity';
        },
        {
            code: 6024;
            name: 'invalidVestingAccount';
            msg: 'Invalid vesting account';
        },
        {
            code: 6025;
            name: 'invalidPoolStatus';
            msg: 'Invalid pool status';
        },
        {
            code: 6026;
            name: 'unsupportNativeMintToken2022';
            msg: 'Unsupported native mint token2022';
        },
        {
            code: 6027;
            name: 'invalidRewardIndex';
            msg: 'Invalid reward index';
        },
        {
            code: 6028;
            name: 'invalidRewardDuration';
            msg: 'Invalid reward duration';
        },
        {
            code: 6029;
            name: 'rewardInitialized';
            msg: 'Reward already initialized';
        },
        {
            code: 6030;
            name: 'rewardUninitialized';
            msg: 'Reward not initialized';
        },
        {
            code: 6031;
            name: 'invalidRewardVault';
            msg: 'Invalid reward vault';
        },
        {
            code: 6032;
            name: 'mustWithdrawnIneligibleReward';
            msg: 'Must withdraw ineligible reward';
        },
        {
            code: 6033;
            name: 'identicalRewardDuration';
            msg: 'Reward duration is the same';
        },
        {
            code: 6034;
            name: 'rewardCampaignInProgress';
            msg: 'Reward campaign in progress';
        },
        {
            code: 6035;
            name: 'identicalFunder';
            msg: 'Identical funder';
        },
        {
            code: 6036;
            name: 'invalidFunder';
            msg: 'Invalid funder';
        },
        {
            code: 6037;
            name: 'rewardNotEnded';
            msg: 'Reward not ended';
        },
        {
            code: 6038;
            name: 'feeInverseIsIncorrect';
            msg: 'Fee inverse is incorrect';
        },
        {
            code: 6039;
            name: 'positionIsNotEmpty';
            msg: 'Position is not empty';
        },
        {
            code: 6040;
            name: 'invalidPoolCreatorAuthority';
            msg: 'Invalid pool creator authority';
        },
        {
            code: 6041;
            name: 'invalidConfigType';
            msg: 'Invalid config type';
        },
        {
            code: 6042;
            name: 'invalidPoolCreator';
            msg: 'Invalid pool creator';
        },
        {
            code: 6043;
            name: 'rewardVaultFrozenSkipRequired';
            msg: 'Reward vault is frozen, must skip reward to proceed';
        },
        {
            code: 6044;
            name: 'invalidSplitPositionParameters';
            msg: 'Invalid parameters for split position';
        },
        {
            code: 6045;
            name: 'unsupportPositionHasVestingLock';
            msg: 'Unsupported split position has vesting lock';
        },
        {
            code: 6046;
            name: 'samePosition';
            msg: 'Same position';
        },
        {
            code: 6047;
            name: 'invalidBaseFeeMode';
            msg: 'Invalid base fee mode';
        },
        {
            code: 6048;
            name: 'invalidFeeRateLimiter';
            msg: 'Invalid fee rate limiter';
        },
        {
            code: 6049;
            name: 'failToValidateSingleSwapInstruction';
            msg: 'Fail to validate single swap instruction in rate limiter';
        },
        {
            code: 6050;
            name: 'invalidFeeTimeScheduler';
            msg: 'Invalid fee scheduler';
        },
        {
            code: 6051;
            name: 'undeterminedError';
            msg: 'Undetermined error';
        },
        {
            code: 6052;
            name: 'invalidPoolVersion';
            msg: 'Invalid pool version';
        },
        {
            code: 6053;
            name: 'invalidAuthority';
            msg: 'Invalid authority to do that action';
        },
        {
            code: 6054;
            name: 'invalidPermission';
            msg: 'Invalid permission';
        },
        {
            code: 6055;
            name: 'invalidFeeMarketCapScheduler';
            msg: 'Invalid fee market cap scheduler';
        },
        {
            code: 6056;
            name: 'cannotUpdateBaseFee';
            msg: 'Cannot update base fee';
        },
        {
            code: 6057;
            name: 'invalidDynamicFeeParameters';
            msg: 'Invalid dynamic fee parameters';
        },
        {
            code: 6058;
            name: 'invalidUpdatePoolFeesParameters';
            msg: 'Invalid update pool fees parameters';
        },
        {
            code: 6059;
            name: 'missingOperatorAccount';
            msg: 'Missing operator account';
        },
        {
            code: 6060;
            name: 'incorrectAta';
            msg: 'Incorrect ATA';
        },
        {
            code: 6061;
            name: 'invalidZapOutParameters';
            msg: 'Invalid zap out parameters';
        },
        {
            code: 6062;
            name: 'invalidWithdrawProtocolFeeZapAccounts';
            msg: 'Invalid withdraw protocol fee zap accounts';
        },
        {
            code: 6063;
            name: 'mintRestrictedFromZap';
            msg: 'SOL,USDC protocol fee cannot be withdrawn via zap';
        },
        {
            code: 6064;
            name: 'cpiDisabled';
            msg: 'CPI disabled';
        },
        {
            code: 6065;
            name: 'missingZapOutInstruction';
            msg: 'Missing zap out instruction';
        },
        {
            code: 6066;
            name: 'invalidZapAccounts';
            msg: 'Invalid zap accounts';
        }
    ];
    types: [
        {
            name: 'addLiquidityParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'liquidityDelta';
                        docs: ['delta liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'tokenAAmountThreshold';
                        docs: ['maximum token a amount'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmountThreshold';
                        docs: ['maximum token b amount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'baseFeeInfo';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'data';
                        type: {
                            array: ['u8', 32];
                        };
                    }
                ];
            };
        },
        {
            name: 'baseFeeParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'data';
                        type: {
                            array: ['u8', 30];
                        };
                    }
                ];
            };
        },
        {
            name: 'baseFeeStruct';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseFeeInfo';
                        type: {
                            defined: {
                                name: 'baseFeeInfo';
                            };
                        };
                    },
                    {
                        name: 'padding1';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'borshFeeMarketCapScheduler';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'sqrtPriceStepBps';
                        type: 'u32';
                    },
                    {
                        name: 'schedulerExpirationDuration';
                        type: 'u32';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 3];
                        };
                    }
                ];
            };
        },
        {
            name: 'borshFeeRateLimiter';
            docs: [
                'we denote reference_amount = x0, cliff_fee_numerator = c, fee_increment = i',
                'if input_amount <= x0, then fee = input_amount * c',
                '',
                'if input_amount > x0, then input_amount = x0 + (a * x0 + b)',
                'if a < max_index',
                'then fee = x0 * c + x0 * (c + i) + .... + x0 * (c + i*a) + b * (c + i * (a+1))',
                'then fee = x0 * (c + c*a + i*a*(a+1)/2) + b * (c + i * (a+1))',
                '',
                'if a >= max_index',
                'if a = max_index + d, input_amount = x0 + max_index * x0 + (d * x0 + b)',
                'then fee = x0 * (c + c*max_index + i*max_index*(max_index+1)/2) + (d * x0 + b) * MAX_FEE'
            ];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'feeIncrementBps';
                        type: 'u16';
                    },
                    {
                        name: 'maxLimiterDuration';
                        type: 'u32';
                    },
                    {
                        name: 'maxFeeBps';
                        type: 'u32';
                    },
                    {
                        name: 'referenceAmount';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 3];
                        };
                    }
                ];
            };
        },
        {
            name: 'borshFeeTimeScheduler';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'periodFrequency';
                        type: 'u64';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 3];
                        };
                    }
                ];
            };
        },
        {
            name: 'config';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'vaultConfigKey';
                        docs: ['Vault config key'];
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        docs: [
                            "Only pool_creator_authority can use the current config to initialize new pool. When it's Pubkey::default, it's a public config."
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'poolFees';
                        docs: ['Pool fee'];
                        type: {
                            defined: {
                                name: 'poolFeesConfig';
                            };
                        };
                    },
                    {
                        name: 'activationType';
                        docs: ['Activation type'];
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        docs: ['Collect fee mode'];
                        type: 'u8';
                    },
                    {
                        name: 'configType';
                        docs: ['Config type mode, 0 for static, 1 for dynamic'];
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        docs: ['padding 0'];
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'index';
                        docs: ['config index'];
                        type: 'u64';
                    },
                    {
                        name: 'sqrtMinPrice';
                        docs: ['sqrt min price'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        docs: ['sqrt max price'];
                        type: 'u128';
                    },
                    {
                        name: 'padding1';
                        docs: ['Fee curve point', 'Padding for further use'];
                        type: {
                            array: ['u64', 10];
                        };
                    }
                ];
            };
        },
        {
            name: 'dummyParams';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'borshFeeTimeSchedulerParams';
                        type: {
                            defined: {
                                name: 'borshFeeTimeScheduler';
                            };
                        };
                    },
                    {
                        name: 'borshFeeRateLimiterParams';
                        type: {
                            defined: {
                                name: 'borshFeeRateLimiter';
                            };
                        };
                    },
                    {
                        name: 'borshFeeMarketCapSchedulerParams';
                        type: {
                            defined: {
                                name: 'borshFeeMarketCapScheduler';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'dynamicConfigParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'dynamicFeeConfig';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'initialized';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 7];
                        };
                    },
                    {
                        name: 'maxVolatilityAccumulator';
                        type: 'u32';
                    },
                    {
                        name: 'variableFeeControl';
                        type: 'u32';
                    },
                    {
                        name: 'binStep';
                        type: 'u16';
                    },
                    {
                        name: 'filterPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'decayPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u16';
                    },
                    {
                        name: 'padding1';
                        type: {
                            array: ['u8', 8];
                        };
                    },
                    {
                        name: 'binStepU128';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'dynamicFeeParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'binStep';
                        type: 'u16';
                    },
                    {
                        name: 'binStepU128';
                        type: 'u128';
                    },
                    {
                        name: 'filterPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'decayPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u16';
                    },
                    {
                        name: 'maxVolatilityAccumulator';
                        type: 'u32';
                    },
                    {
                        name: 'variableFeeControl';
                        type: 'u32';
                    }
                ];
            };
        },
        {
            name: 'dynamicFeeStruct';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'initialized';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 7];
                        };
                    },
                    {
                        name: 'maxVolatilityAccumulator';
                        type: 'u32';
                    },
                    {
                        name: 'variableFeeControl';
                        type: 'u32';
                    },
                    {
                        name: 'binStep';
                        type: 'u16';
                    },
                    {
                        name: 'filterPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'decayPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u16';
                    },
                    {
                        name: 'lastUpdateTimestamp';
                        type: 'u64';
                    },
                    {
                        name: 'binStepU128';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtPriceReference';
                        type: 'u128';
                    },
                    {
                        name: 'volatilityAccumulator';
                        type: 'u128';
                    },
                    {
                        name: 'volatilityReference';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'evtClaimPartnerFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtClaimPositionFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'feeAClaimed';
                        type: 'u64';
                    },
                    {
                        name: 'feeBClaimed';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtClaimProtocolFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtClaimReward';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'mintReward';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardIndex';
                        type: 'u8';
                    },
                    {
                        name: 'totalReward';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtCloseConfig';
            docs: ['Close config'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'config';
                        docs: ['Config pubkey'];
                        type: 'pubkey';
                    },
                    {
                        name: 'admin';
                        docs: ['admin pk'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtClosePosition';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'positionNftMint';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtCreateConfig';
            docs: ['Create static config'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'vaultConfigKey';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'sqrtMinPrice';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        type: 'u128';
                    },
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'index';
                        type: 'u64';
                    },
                    {
                        name: 'config';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtCreateDynamicConfig';
            docs: ['Create dynamic config'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'index';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtCreatePosition';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'positionNftMint';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtCreateTokenBadge';
            docs: ['Create token badge'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tokenMint';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtFundReward';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'funder';
                        type: 'pubkey';
                    },
                    {
                        name: 'mintReward';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardIndex';
                        type: 'u8';
                    },
                    {
                        name: 'amount';
                        type: 'u64';
                    },
                    {
                        name: 'transferFeeExcludedAmountIn';
                        type: 'u64';
                    },
                    {
                        name: 'rewardDurationEnd';
                        type: 'u64';
                    },
                    {
                        name: 'preRewardRate';
                        type: 'u128';
                    },
                    {
                        name: 'postRewardRate';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'evtInitializePool';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'creator';
                        type: 'pubkey';
                    },
                    {
                        name: 'payer';
                        type: 'pubkey';
                    },
                    {
                        name: 'alphaVault';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'sqrtMinPrice';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        type: 'u128';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'liquidity';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'activationPoint';
                        type: 'u64';
                    },
                    {
                        name: 'tokenAFlag';
                        type: 'u8';
                    },
                    {
                        name: 'tokenBFlag';
                        type: 'u8';
                    },
                    {
                        name: 'tokenAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        type: 'u64';
                    },
                    {
                        name: 'totalAmountA';
                        type: 'u64';
                    },
                    {
                        name: 'totalAmountB';
                        type: 'u64';
                    },
                    {
                        name: 'poolType';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'evtInitializeReward';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'funder';
                        type: 'pubkey';
                    },
                    {
                        name: 'creator';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardIndex';
                        type: 'u8';
                    },
                    {
                        name: 'rewardDuration';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtLiquidityChange';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        type: 'u64';
                    },
                    {
                        name: 'transferFeeIncludedTokenAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'transferFeeIncludedTokenBAmount';
                        type: 'u64';
                    },
                    {
                        name: 'reserveAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'reserveBAmount';
                        type: 'u64';
                    },
                    {
                        name: 'liquidityDelta';
                        type: 'u128';
                    },
                    {
                        name: 'tokenAAmountThreshold';
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmountThreshold';
                        type: 'u64';
                    },
                    {
                        name: 'changeType';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'evtLockPosition';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'vesting';
                        type: 'pubkey';
                    },
                    {
                        name: 'cliffPoint';
                        type: 'u64';
                    },
                    {
                        name: 'periodFrequency';
                        type: 'u64';
                    },
                    {
                        name: 'cliffUnlockLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'liquidityPerPeriod';
                        type: 'u128';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    }
                ];
            };
        },
        {
            name: 'evtPermanentLockPosition';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'lockLiquidityAmount';
                        type: 'u128';
                    },
                    {
                        name: 'totalPermanentLockedLiquidity';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'evtSetPoolStatus';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'status';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'evtSplitPosition2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'firstOwner';
                        type: 'pubkey';
                    },
                    {
                        name: 'secondOwner';
                        type: 'pubkey';
                    },
                    {
                        name: 'firstPosition';
                        type: 'pubkey';
                    },
                    {
                        name: 'secondPosition';
                        type: 'pubkey';
                    },
                    {
                        name: 'currentSqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'amountSplits';
                        type: {
                            defined: {
                                name: 'splitAmountInfo';
                            };
                        };
                    },
                    {
                        name: 'firstPositionInfo';
                        type: {
                            defined: {
                                name: 'splitPositionInfo';
                            };
                        };
                    },
                    {
                        name: 'secondPositionInfo';
                        type: {
                            defined: {
                                name: 'splitPositionInfo';
                            };
                        };
                    },
                    {
                        name: 'splitPositionParameters';
                        type: {
                            defined: {
                                name: 'splitPositionParameters2';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'evtSwap2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'tradeDirection';
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'hasReferral';
                        type: 'bool';
                    },
                    {
                        name: 'params';
                        type: {
                            defined: {
                                name: 'swapParameters2';
                            };
                        };
                    },
                    {
                        name: 'swapResult';
                        type: {
                            defined: {
                                name: 'swapResult2';
                            };
                        };
                    },
                    {
                        name: 'includedTransferFeeAmountIn';
                        type: 'u64';
                    },
                    {
                        name: 'includedTransferFeeAmountOut';
                        type: 'u64';
                    },
                    {
                        name: 'excludedTransferFeeAmountOut';
                        type: 'u64';
                    },
                    {
                        name: 'currentTimestamp';
                        type: 'u64';
                    },
                    {
                        name: 'reserveAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'reserveBAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtUpdatePoolFees';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'operator';
                        type: 'pubkey';
                    },
                    {
                        name: 'params';
                        type: {
                            defined: {
                                name: 'updatePoolFeesParameters';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'evtUpdateRewardDuration';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardIndex';
                        type: 'u8';
                    },
                    {
                        name: 'oldRewardDuration';
                        type: 'u64';
                    },
                    {
                        name: 'newRewardDuration';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtUpdateRewardFunder';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardIndex';
                        type: 'u8';
                    },
                    {
                        name: 'oldFunder';
                        type: 'pubkey';
                    },
                    {
                        name: 'newFunder';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtWithdrawIneligibleReward';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'amount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'initializeCustomizablePoolParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        docs: ['pool fees'];
                        type: {
                            defined: {
                                name: 'poolFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'sqrtMinPrice';
                        docs: ['sqrt min price'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        docs: ['sqrt max price'];
                        type: 'u128';
                    },
                    {
                        name: 'hasAlphaVault';
                        docs: ['has alpha vault'];
                        type: 'bool';
                    },
                    {
                        name: 'liquidity';
                        docs: ['initialize liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtPrice';
                        docs: [
                            'The init price of the pool as a sqrt(token_b/token_a) Q64.64 value. Market cap fee scheduler minimum price will be derived from this value'
                        ];
                        type: 'u128';
                    },
                    {
                        name: 'activationType';
                        docs: ['activation type'];
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        docs: ['collect fee mode'];
                        type: 'u8';
                    },
                    {
                        name: 'activationPoint';
                        docs: ['activation point'];
                        type: {
                            option: 'u64';
                        };
                    }
                ];
            };
        },
        {
            name: 'initializePoolParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'liquidity';
                        docs: ['initialize liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtPrice';
                        docs: [
                            'The init price of the pool as a sqrt(token_b/token_a) Q64.64 value'
                        ];
                        type: 'u128';
                    },
                    {
                        name: 'activationPoint';
                        docs: ['activation point'];
                        type: {
                            option: 'u64';
                        };
                    }
                ];
            };
        },
        {
            name: 'operator';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'whitelistedAddress';
                        type: 'pubkey';
                    },
                    {
                        name: 'permission';
                        type: 'u128';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u64', 2];
                        };
                    }
                ];
            };
        },
        {
            name: 'podAlignedFeeMarketCapScheduler';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'sqrtPriceStepBps';
                        type: 'u32';
                    },
                    {
                        name: 'schedulerExpirationDuration';
                        type: 'u32';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'podAlignedFeeRateLimiter';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'feeIncrementBps';
                        type: 'u16';
                    },
                    {
                        name: 'maxLimiterDuration';
                        type: 'u32';
                    },
                    {
                        name: 'maxFeeBps';
                        type: 'u32';
                    },
                    {
                        name: 'referenceAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'podAlignedFeeTimeScheduler';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'periodFrequency';
                        type: 'u64';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'pool';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        docs: ['Pool fee'];
                        type: {
                            defined: {
                                name: 'poolFeesStruct';
                            };
                        };
                    },
                    {
                        name: 'tokenAMint';
                        docs: ['token a mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBMint';
                        docs: ['token b mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAVault';
                        docs: ['token a vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBVault';
                        docs: ['token b vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'whitelistedVault';
                        docs: [
                            'Whitelisted vault to be able to buy pool before activation_point'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'partner';
                        docs: ['partner'];
                        type: 'pubkey';
                    },
                    {
                        name: 'liquidity';
                        docs: ['liquidity share'];
                        type: 'u128';
                    },
                    {
                        name: 'padding';
                        docs: [
                            'padding, previous reserve amount, be careful to use that field'
                        ];
                        type: 'u128';
                    },
                    {
                        name: 'protocolAFee';
                        docs: ['protocol a fee'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolBFee';
                        docs: ['protocol b fee'];
                        type: 'u64';
                    },
                    {
                        name: 'partnerAFee';
                        docs: ['partner a fee'];
                        type: 'u64';
                    },
                    {
                        name: 'partnerBFee';
                        docs: ['partner b fee'];
                        type: 'u64';
                    },
                    {
                        name: 'sqrtMinPrice';
                        docs: ['min price'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        docs: ['max price'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtPrice';
                        docs: ['current price'];
                        type: 'u128';
                    },
                    {
                        name: 'activationPoint';
                        docs: ['Activation point, can be slot or timestamp'];
                        type: 'u64';
                    },
                    {
                        name: 'activationType';
                        docs: [
                            'Activation type, 0 means by slot, 1 means by timestamp'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'poolStatus';
                        docs: ['pool status, 0: enable, 1 disable'];
                        type: 'u8';
                    },
                    {
                        name: 'tokenAFlag';
                        docs: ['token a flag'];
                        type: 'u8';
                    },
                    {
                        name: 'tokenBFlag';
                        docs: ['token b flag'];
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        docs: [
                            '0 is collect fee in both token, 1 only collect fee only in token b'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'poolType';
                        docs: ['pool type'];
                        type: 'u8';
                    },
                    {
                        name: 'version';
                        docs: [
                            'pool version, 0: max_fee is still capped at 50%, 1: max_fee is capped at 99%'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        docs: ['padding'];
                        type: 'u8';
                    },
                    {
                        name: 'feeAPerLiquidity';
                        docs: ['cumulative'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'feeBPerLiquidity';
                        docs: ['cumulative'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'permanentLockLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'metrics';
                        docs: ['metrics'];
                        type: {
                            defined: {
                                name: 'poolMetrics';
                            };
                        };
                    },
                    {
                        name: 'creator';
                        docs: ['pool creator'];
                        type: 'pubkey';
                    },
                    {
                        name: 'padding1';
                        docs: ['Padding for further use'];
                        type: {
                            array: ['u64', 6];
                        };
                    },
                    {
                        name: 'rewardInfos';
                        docs: ['Farming reward information'];
                        type: {
                            array: [
                                {
                                    defined: {
                                        name: 'rewardInfo';
                                    };
                                },
                                2
                            ];
                        };
                    }
                ];
            };
        },
        {
            name: 'poolFeeParameters';
            docs: ['Information regarding fee charges'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseFee';
                        docs: ['Base fee'];
                        type: {
                            defined: {
                                name: 'baseFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'dynamicFee';
                        docs: ['dynamic fee'];
                        type: {
                            option: {
                                defined: {
                                    name: 'dynamicFeeParameters';
                                };
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'poolFeesConfig';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseFee';
                        type: {
                            defined: {
                                name: 'baseFeeInfo';
                            };
                        };
                    },
                    {
                        name: 'dynamicFee';
                        type: {
                            defined: {
                                name: 'dynamicFeeConfig';
                            };
                        };
                    },
                    {
                        name: 'protocolFeePercent';
                        type: 'u8';
                    },
                    {
                        name: 'partnerFeePercent';
                        type: 'u8';
                    },
                    {
                        name: 'referralFeePercent';
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'padding1';
                        type: {
                            array: ['u64', 5];
                        };
                    }
                ];
            };
        },
        {
            name: 'poolFeesStruct';
            docs: [
                'Information regarding fee charges',
                'trading_fee = amount * trade_fee_numerator / denominator',
                'protocol_fee = trading_fee * protocol_fee_percentage / 100',
                'referral_fee = protocol_fee * referral_percentage / 100',
                'partner_fee = (protocol_fee - referral_fee) * partner_fee_percentage / denominator'
            ];
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseFee';
                        docs: [
                            'Trade fees are extra token amounts that are held inside the token',
                            'accounts during a trade, making the value of liquidity tokens rise.',
                            'Trade fee numerator'
                        ];
                        type: {
                            defined: {
                                name: 'baseFeeStruct';
                            };
                        };
                    },
                    {
                        name: 'protocolFeePercent';
                        docs: [
                            'Protocol trading fees are extra token amounts that are held inside the token',
                            'accounts during a trade, with the equivalent in pool tokens minted to',
                            'the protocol of the program.',
                            'Protocol trade fee numerator'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'partnerFeePercent';
                        docs: ['partner fee'];
                        type: 'u8';
                    },
                    {
                        name: 'referralFeePercent';
                        docs: ['referral fee'];
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        docs: ['padding'];
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'dynamicFee';
                        docs: ['dynamic fee'];
                        type: {
                            defined: {
                                name: 'dynamicFeeStruct';
                            };
                        };
                    },
                    {
                        name: 'initSqrtPrice';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'poolMetrics';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'totalLpAFee';
                        type: 'u128';
                    },
                    {
                        name: 'totalLpBFee';
                        type: 'u128';
                    },
                    {
                        name: 'totalProtocolAFee';
                        type: 'u64';
                    },
                    {
                        name: 'totalProtocolBFee';
                        type: 'u64';
                    },
                    {
                        name: 'totalPartnerAFee';
                        type: 'u64';
                    },
                    {
                        name: 'totalPartnerBFee';
                        type: 'u64';
                    },
                    {
                        name: 'totalPosition';
                        type: 'u64';
                    },
                    {
                        name: 'padding';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'position';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'nftMint';
                        docs: ['nft mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'feeAPerTokenCheckpoint';
                        docs: ['fee a checkpoint'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'feeBPerTokenCheckpoint';
                        docs: ['fee b checkpoint'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'feeAPending';
                        docs: ['fee a pending'];
                        type: 'u64';
                    },
                    {
                        name: 'feeBPending';
                        docs: ['fee b pending'];
                        type: 'u64';
                    },
                    {
                        name: 'unlockedLiquidity';
                        docs: ['unlock liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'vestedLiquidity';
                        docs: ['vesting liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'permanentLockedLiquidity';
                        docs: ['permanent locked liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'metrics';
                        docs: ['metrics'];
                        type: {
                            defined: {
                                name: 'positionMetrics';
                            };
                        };
                    },
                    {
                        name: 'rewardInfos';
                        docs: ['Farming reward information'];
                        type: {
                            array: [
                                {
                                    defined: {
                                        name: 'userRewardInfo';
                                    };
                                },
                                2
                            ];
                        };
                    },
                    {
                        name: 'padding';
                        docs: ['padding for future usage'];
                        type: {
                            array: ['u128', 6];
                        };
                    }
                ];
            };
        },
        {
            name: 'positionMetrics';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'totalClaimedAFee';
                        type: 'u64';
                    },
                    {
                        name: 'totalClaimedBFee';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'removeLiquidityParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'liquidityDelta';
                        docs: ['delta liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'tokenAAmountThreshold';
                        docs: ['minimum token a amount'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmountThreshold';
                        docs: ['minimum token b amount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'rewardInfo';
            docs: [
                'Stores the state relevant for tracking liquidity mining rewards'
            ];
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'initialized';
                        docs: ['Indicates if the reward has been initialized'];
                        type: 'u8';
                    },
                    {
                        name: 'rewardTokenFlag';
                        docs: ['reward token flag'];
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        docs: ['padding'];
                        type: {
                            array: ['u8', 6];
                        };
                    },
                    {
                        name: 'padding1';
                        docs: [
                            'Padding to ensure `reward_rate: u128` is 16-byte aligned'
                        ];
                        type: {
                            array: ['u8', 8];
                        };
                    },
                    {
                        name: 'mint';
                        docs: ['Reward token mint.'];
                        type: 'pubkey';
                    },
                    {
                        name: 'vault';
                        docs: ['Reward vault token account.'];
                        type: 'pubkey';
                    },
                    {
                        name: 'funder';
                        docs: ['Authority account that allows to fund rewards'];
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardDuration';
                        docs: ['reward duration'];
                        type: 'u64';
                    },
                    {
                        name: 'rewardDurationEnd';
                        docs: ['reward duration end'];
                        type: 'u64';
                    },
                    {
                        name: 'rewardRate';
                        docs: ['reward rate'];
                        type: 'u128';
                    },
                    {
                        name: 'rewardPerTokenStored';
                        docs: ['Reward per token stored'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'lastUpdateTime';
                        docs: ['The last time reward states were updated.'];
                        type: 'u64';
                    },
                    {
                        name: 'cumulativeSecondsWithEmptyLiquidityReward';
                        docs: [
                            'Accumulated seconds when the farm distributed rewards but the bin was empty.',
                            'These rewards will be carried over to the next reward time window.'
                        ];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'splitAmountInfo';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'permanentLockedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'unlockedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'feeA';
                        type: 'u64';
                    },
                    {
                        name: 'feeB';
                        type: 'u64';
                    },
                    {
                        name: 'reward0';
                        type: 'u64';
                    },
                    {
                        name: 'reward1';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'splitPositionInfo';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'liquidity';
                        type: 'u128';
                    },
                    {
                        name: 'feeA';
                        type: 'u64';
                    },
                    {
                        name: 'feeB';
                        type: 'u64';
                    },
                    {
                        name: 'reward0';
                        type: 'u64';
                    },
                    {
                        name: 'reward1';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'splitPositionParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'unlockedLiquidityPercentage';
                        docs: [
                            'Percentage of unlocked liquidity to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'permanentLockedLiquidityPercentage';
                        docs: [
                            'Percentage of permanent locked liquidity to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'feeAPercentage';
                        docs: [
                            'Percentage of fee A pending to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'feeBPercentage';
                        docs: [
                            'Percentage of fee B pending to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'reward0Percentage';
                        docs: [
                            'Percentage of reward 0 pending to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'reward1Percentage';
                        docs: [
                            'Percentage of reward 1 pending to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        docs: ['padding for future'];
                        type: {
                            array: ['u8', 16];
                        };
                    }
                ];
            };
        },
        {
            name: 'splitPositionParameters2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'unlockedLiquidityNumerator';
                        type: 'u32';
                    },
                    {
                        name: 'permanentLockedLiquidityNumerator';
                        type: 'u32';
                    },
                    {
                        name: 'feeANumerator';
                        type: 'u32';
                    },
                    {
                        name: 'feeBNumerator';
                        type: 'u32';
                    },
                    {
                        name: 'reward0Numerator';
                        type: 'u32';
                    },
                    {
                        name: 'reward1Numerator';
                        type: 'u32';
                    }
                ];
            };
        },
        {
            name: 'staticConfigParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'sqrtMinPrice';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        type: 'u128';
                    },
                    {
                        name: 'vaultConfigKey';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'swapParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'amountIn';
                        type: 'u64';
                    },
                    {
                        name: 'minimumAmountOut';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'swapParameters2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'amount0';
                        docs: [
                            "When it's exact in, partial fill, this will be amount_in. When it's exact out, this will be amount_out"
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'amount1';
                        docs: [
                            "When it's exact in, partial fill, this will be minimum_amount_out. When it's exact out, this will be maximum_amount_in"
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'swapMode';
                        docs: ['Swap mode, refer [SwapMode]'];
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'swapResult2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'includedFeeInputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'excludedFeeInputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'amountLeft';
                        type: 'u64';
                    },
                    {
                        name: 'outputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'nextSqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'tradingFee';
                        type: 'u64';
                    },
                    {
                        name: 'protocolFee';
                        type: 'u64';
                    },
                    {
                        name: 'partnerFee';
                        type: 'u64';
                    },
                    {
                        name: 'referralFee';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'tokenBadge';
            docs: ['Parameter that set by the protocol'];
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tokenMint';
                        docs: ['token mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'padding';
                        docs: ['Reserve'];
                        type: {
                            array: ['u8', 128];
                        };
                    }
                ];
            };
        },
        {
            name: 'updatePoolFeesParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        docs: [
                            'Base fee update mode:',
                            '- None: skip base fee update',
                            '- Some: update new cliff_fee_numerator if base fee is static'
                        ];
                        type: {
                            option: 'u64';
                        };
                    },
                    {
                        name: 'dynamicFee';
                        docs: [
                            'Dynamic fee update mode:',
                            '- None: skip dynamic fee update',
                            '- Some(with default value): disable dynamic fee',
                            '- Some(with non default value): enable dynamic fee if disabled or update dynamic fee if enabled'
                        ];
                        type: {
                            option: {
                                defined: {
                                    name: 'dynamicFeeParameters';
                                };
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'userRewardInfo';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'rewardPerTokenCheckpoint';
                        docs: ['The latest update reward checkpoint'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'rewardPendings';
                        docs: ['Current pending rewards'];
                        type: 'u64';
                    },
                    {
                        name: 'totalClaimedRewards';
                        docs: ['Total claimed rewards'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'vesting';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'cliffPoint';
                        type: 'u64';
                    },
                    {
                        name: 'periodFrequency';
                        type: 'u64';
                    },
                    {
                        name: 'cliffUnlockLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'liquidityPerPeriod';
                        type: 'u128';
                    },
                    {
                        name: 'totalReleasedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 14];
                        };
                    },
                    {
                        name: 'padding2';
                        type: {
                            array: ['u128', 4];
                        };
                    }
                ];
            };
        },
        {
            name: 'vestingParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffPoint';
                        type: {
                            option: 'u64';
                        };
                    },
                    {
                        name: 'periodFrequency';
                        type: 'u64';
                    },
                    {
                        name: 'cliffUnlockLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'liquidityPerPeriod';
                        type: 'u128';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    }
                ];
            };
        }
    ];
    constants: [
        {
            name: 'binStepBpsDefault';
            type: 'u16';
            value: '1';
        },
        {
            name: 'binStepU128DefaultLeBytes';
            type: {
                array: ['u8', 16];
            };
            value: '[203, 16, 199, 186, 184, 141, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0]';
        },
        {
            name: 'customizablePoolPrefix';
            type: 'bytes';
            value: '[99, 112, 111, 111, 108]';
        },
        {
            name: 'feeDenominator';
            docs: [
                'Default fee denominator. DO NOT simply update it as it will break logic that depends on it as default value.'
            ];
            type: 'u64';
            value: '1000000000';
        },
        {
            name: 'maxBasisPoint';
            docs: ['Max basis point. 100% in pct'];
            type: 'u64';
            value: '10000';
        },
        {
            name: 'maxSqrtPriceLeBytes';
            type: {
                array: ['u8', 16];
            };
            value: '[155, 87, 105, 78, 169, 26, 92, 132, 177, 196, 254, 255, 0, 0, 0, 0]';
        },
        {
            name: 'minSqrtPriceLeBytes';
            type: {
                array: ['u8', 16];
            };
            value: '[80, 59, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]';
        },
        {
            name: 'poolAuthorityPrefix';
            type: 'bytes';
            value: '[112, 111, 111, 108, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121]';
        },
        {
            name: 'poolPrefix';
            type: 'bytes';
            value: '[112, 111, 111, 108]';
        },
        {
            name: 'positionNftAccountPrefix';
            type: 'bytes';
            value: '[112, 111, 115, 105, 116, 105, 111, 110, 95, 110, 102, 116, 95, 97, 99, 99, 111, 117, 110, 116]';
        },
        {
            name: 'positionPrefix';
            type: 'bytes';
            value: '[112, 111, 115, 105, 116, 105, 111, 110]';
        },
        {
            name: 'splitPositionDenominator';
            type: 'u32';
            value: '1000000000';
        },
        {
            name: 'tokenVaultPrefix';
            type: 'bytes';
            value: '[116, 111, 107, 101, 110, 95, 118, 97, 117, 108, 116]';
        }
    ];
};

/**
 * Create a DBC program instance
 * @param connection - The connection to the network
 * @returns The program instance
 */
declare function createDbcProgram(connection: Connection, commitment?: Commitment): {
    program: Program<DynamicBondingCurve>;
};
/**
 * Create a vault program instance
 * @param connection - The connection to the network
 * @returns The vault program instance
 */
declare function createVaultProgram(connection: Connection, commitment?: Commitment): Program<DynamicVault>;
/**
 * Create a DAMM V1 program instance
 * @param connection - The connection to the network
 * @returns The DAMM V1 program instance
 */
declare function createDammV1Program(connection: Connection, commitment?: Commitment): Program<DammV1>;
/**
 * Create a DAMM V2 program instance
 * @param connection - The connection to the network
 * @param commitment - The commitment level
 * @returns The DAMM V2 program instance
 */
declare function createDammV2Program(connection: Connection, commitment?: Commitment): Program<CpAmm>;

/**
 * Get or create an ATA instruction
 * @param connection - The connection
 * @param tokenMint - The token mint
 * @param owner - The owner
 * @param payer - The payer
 * @param allowOwnerOffCurve - Whether to allow the owner to be off curve
 * @param tokenProgram - The token program
 * @returns The ATA instruction
 */
declare const getOrCreateATAInstruction: (connection: Connection, tokenMint: PublicKey, owner: PublicKey, payer: PublicKey, allowOwnerOffCurve: boolean, tokenProgram: PublicKey) => Promise<{
    ataPubkey: PublicKey;
    ix?: TransactionInstruction;
}>;
/**
 * Unwrap SOL instruction
 * @param owner - The owner of the SOL
 * @param receiver - The receiver of the SOL
 * @param allowOwnerOffCurve - Whether to allow the owner to be off curve
 * @returns The unwrap SOL instruction
 */
declare function unwrapSOLInstruction(owner: PublicKey, receiver: PublicKey, allowOwnerOffCurve?: boolean): TransactionInstruction | null;
/**
 * Wrap SOL instruction
 * @param from - The from address
 * @param to - The to address
 * @param amount - The amount to wrap
 * @returns The wrap SOL instruction
 */
declare function wrapSOLInstruction(from: PublicKey, to: PublicKey, amount: bigint): TransactionInstruction[];
/**
 * Find the associated token address for a wallet and token mint
 * @param walletAddress - The wallet address
 * @param tokenMintAddress - The token mint address
 * @param tokenProgramId - The token program ID
 * @returns The associated token address
 */
declare function findAssociatedTokenAddress(walletAddress: PublicKey, tokenMintAddress: PublicKey, tokenProgramId: PublicKey): PublicKey;
/**
 * Get token decimals for a particular mint
 * @param connection - The connection
 * @param mintAddress - The mint address to get decimals for
 * @returns The number of decimals for the token
 */
declare function getTokenDecimals(connection: Connection, mintAddress: PublicKey | string): Promise<number>;
/**
 * Get the token program for a given token type
 * @param tokenType - The token type
 * @returns The token program
 */
declare function getTokenProgram(tokenType: TokenType): PublicKey;
/**
 * Get the token type based on the token mint's program owner
 * @param connection - The connection
 * @param tokenMint - The token mint
 * @returns The token type (SPL [0] or Token2022 [1])
 */
declare function getTokenType(connection: Connection, tokenMint: PublicKey): Promise<TokenType | null>;
/**
 * Prepare token accounts instruction
 * @param connection - The connection
 * @param owner - The owner of the token account
 * @param payer - The payer of the token account
 * @param tokenMint - The mint of the token account
 * @param amount - The amount of the token account
 * @param tokenProgram - The token program ID.
 * @returns The transaction and token account public key
 */
declare function prepareTokenAccountTx(connection: Connection, owner: PublicKey, payer: PublicKey, tokenMint: PublicKey, amount: bigint, tokenProgram: PublicKey): Promise<{
    tokenAccount: PublicKey;
    transaction: Transaction;
}>;
/**
 * Clean up token account instruction
 * @param owner - The owner of the token account
 * @param receiver - The receiver of the token account
 * @param tokenMint - The mint of the token account
 * @returns The transaction
 */
declare function cleanUpTokenAccountTx(owner: PublicKey, receiver: PublicKey, tokenMint: PublicKey): Promise<{
    transaction: Transaction;
}>;

/**
 * Create a permissionless dynamic vault instruction
 * @param mint - The mint of the vault
 * @param payer - The payer of the vault
 * @param vaultProgram - The vault program
 * @returns The vault key, token vault key, and lp mint key
 */
declare function createInitializePermissionlessDynamicVaultIx(mint: PublicKey, payer: PublicKey, vaultProgram: Program<DynamicVault>): Promise<{
    vaultKey: PublicKey;
    tokenVaultKey: PublicKey;
    lpMintKey: PublicKey;
    instruction: TransactionInstruction;
}>;
/**
 * Create a lock escrow instruction
 * @param connection - The connection to the Solana network
 * @param payer - The payer of the lock escrow
 * @param pool - The pool address
 * @param lpMint - The lp mint address
 * @param escrowOwner - The owner of the escrow
 * @param lockEscrowKey - The lock escrow key
 * @param dammV1Program - The DAMM V1 program
 * @returns The lock escrow instruction
 */
declare function createLockEscrowIx(payer: PublicKey, pool: PublicKey, lpMint: PublicKey, escrowOwner: PublicKey, lockEscrowKey: PublicKey, dammV1Program: Program<DammV1>): Promise<TransactionInstruction>;

/**
 * Gets the initial liquidity from delta quote
 * Formula: Δb = L (√P_upper - √P_lower) => L = Δb / (√P_upper - √P_lower)
 * @param quoteAmount Quote amount
 * @param sqrtMinPrice Minimum sqrt price
 * @param sqrtPrice Current sqrt price
 * @returns Initial liquidity
 */
declare function getInitialLiquidityFromDeltaQuote(quoteAmount: BN, sqrtMinPrice: BN, sqrtPrice: BN): BN;
/**
 * Gets the initial liquidity from delta base
 * Formula: Δa = L * (1 / √P_lower - 1 / √P_upper) => L = Δa / (1 / √P_lower - 1 / √P_upper)
 * @param baseAmount Base amount
 * @param sqrtMaxPrice Maximum sqrt price (√P_upper)
 * @param sqrtPrice Current sqrt price (√P_lower)
 * @returns Initial liquidity
 */
declare function getInitialLiquidityFromDeltaBase(baseAmount: BN, sqrtMaxPrice: BN, sqrtPrice: BN): BN;
/**
 * Gets the delta amount_a for given liquidity and price range
 *
 * Formula:
 * - Δa = L * (1 / √P_lower - 1 / √P_upper)
 * - i.e. L * (√P_upper - √P_lower) / (√P_upper * √P_lower)
 *
 * @param lowerSqrtPrice Lower sqrt price
 * @param upperSqrtPrice Upper sqrt price
 * @param liquidity Liquidity
 * @param round Rounding direction
 * @returns Delta amount base
 */
declare function getDeltaAmountBaseUnsigned(lowerSqrtPrice: BN, upperSqrtPrice: BN, liquidity: BN, round: Rounding): BN;
declare function getDeltaAmountBaseUnsigned256(lowerSqrtPrice: BN, upperSqrtPrice: BN, liquidity: BN, round: Rounding): BN;
/**
 * i.e. L * (√P_upper - √P_lower) / (√P_upper * √P_lower)
 */
declare function getDeltaAmountBaseUnsignedUnchecked(lowerSqrtPrice: BN, upperSqrtPrice: BN, liquidity: BN, round: Rounding): BN;
/**
 * Gets the delta amount_quote for given liquidity and price range
 * Formula: Δb = L (√P_upper - √P_lower)
 * @param lowerSqrtPrice Lower sqrt price
 * @param upperSqrtPrice Upper sqrt price
 * @param liquidity Liquidity
 * @param round Rounding direction
 * @returns Delta amount quote
 */
declare function getDeltaAmountQuoteUnsigned(lowerSqrtPrice: BN, upperSqrtPrice: BN, liquidity: BN, round: Rounding): BN;
declare function getDeltaAmountQuoteUnsigned256(lowerSqrtPrice: BN, upperSqrtPrice: BN, liquidity: BN, round: Rounding): BN;
/**
 * Δb = L (√P_upper - √P_lower)
 */
declare function getDeltaAmountQuoteUnsignedUnchecked(lowerSqrtPrice: BN, upperSqrtPrice: BN, liquidity: BN, round: Rounding): BN;
/**
 * Gets the next sqrt price given an input amount of token_a or token_b
 * Throws if price or liquidity are 0, or if the next price is out of bounds
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amountIn Input amount
 * @param baseForQuote Whether the input is base token for quote token
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromInput(sqrtPrice: BN, liquidity: BN, amountIn: BN, baseForQuote: boolean): BN;
/**
 * Gets the next sqrt price from output amount
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amountOut Output amount
 * @param baseForQuote Whether we're trading base for quote (true) or quote for base (false)
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromOutput(sqrtPrice: BN, liquidity: BN, amountOut: BN, baseForQuote: boolean): BN;
/**
 * Gets the next sqrt price from amount quote output rounding down
 * Formula: √P' = √P - Δy / L
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amount Output amount
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromQuoteAmountOutRoundingDown(sqrtPrice: BN, liquidity: BN, amount: BN): BN;
/**
 * Gets the next sqrt price from amount base output rounding up
 * Formula: √P' = √P * L / (L - Δx * √P)
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amount Output amount
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromBaseAmountOutRoundingUp(sqrtPrice: BN, liquidity: BN, amount: BN): BN;
/**
 * Gets the next sqrt price from amount base input rounding up
 * Always round up because:
 * 1. In the exact output case, token 0 supply decreases leading to price increase.
 *    Move price up so that exact output is met.
 * 2. In the exact input case, token 0 supply increases leading to price decrease.
 *    Do not round down to minimize price impact. We only need to meet input
 *    change and not guarantee exact output.
 *
 * Formula: √P' = √P * L / (L + Δx * √P)
 * If Δx * √P overflows, use alternate form √P' = L / (L/√P + Δx)
 *
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amount Input amount
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromBaseAmountInRoundingUp(sqrtPrice: BN, liquidity: BN, amount: BN): BN;
/**
 * Gets the next sqrt price from amount quote input rounding down
 * Always round down because:
 * 1. In the exact output case, token 1 supply decreases leading to price decrease.
 *    Move price down by rounding down so that exact output of token 0 is met.
 * 2. In the exact input case, token 1 supply increases leading to price increase.
 *    Do not round down to minimize price impact. We only need to meet input
 *    change and not guarantee exact output for token 0.
 *
 * Formula: √P' = √P + Δy / L
 *
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amount Input amount
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromQuoteAmountInRoundingDown(sqrtPrice: BN, liquidity: BN, amount: BN): BN;

/**
 * Convert basis points to fee numerator
 * @param bps - Basis points
 * @param feeDenominator - Fee denominator
 * @returns Fee numerator
 * @throws Error if calculation fails due to overflow or type conversion
 */
declare function toNumerator(bps: BN, feeDenominator: BN): BN;
/**
 * Get fee mode
 * @param collectFeeMode Collect fee mode
 * @param tradeDirection Trade direction
 * @param hasReferral Whether referral is used
 * @returns Fee mode
 */
declare function getFeeMode(collectFeeMode: CollectFeeMode, tradeDirection: TradeDirection, hasReferral: boolean): FeeMode;
/**
 * Get total fee numerator from included fee amount
 * @param poolFees Pool fees
 * @param volatilityTracker Volatility tracker
 * @param currentPoint Current point
 * @param activationPoint Activation point
 * @param includedFeeAmount Included fee amount
 * @param tradeDirection Trade direction
 * @returns Total fee numerator
 */
declare function getTotalFeeNumeratorFromIncludedFeeAmount(poolFees: PoolFeesConfig, volatilityTracker: VolatilityTracker, currentPoint: BN, activationPoint: BN, includedFeeAmount: BN, tradeDirection: TradeDirection): BN;
/**
 * Get total fee numerator from excluded fee amount
 * @param poolFees Pool fees
 * @param volatilityTracker Volatility tracker
 * @param currentPoint Current point
 * @param activationPoint Activation point
 * @param excludedFeeAmount Excluded fee amount
 * @param tradeDirection Trade direction
 * @returns Total fee numerator
 */
declare function getTotalFeeNumeratorFromExcludedFeeAmount(poolFees: PoolFeesConfig, volatilityTracker: VolatilityTracker, currentPoint: BN, activationPoint: BN, excludedFeeAmount: BN, tradeDirection: TradeDirection): BN;
/**
 * Get total fee numerator from base fee numerator and volatility tracker
 * @param baseFeeNumerator Base fee numerator
 * @param dynamicFee Dynamic fee configuration
 * @param volatilityTracker Volatility tracker
 * @returns Total fee numerator
 */
declare function getTotalFeeNumerator(baseFeeNumerator: BN, dynamicFee: DynamicFeeConfig, volatilityTracker: VolatilityTracker): BN;
/**
 * Get fee on amount with trade fee numerator
 * @param tradeFeeNumerator Trade fee numerator
 * @param amount Amount
 * @param poolFees Pool fees
 * @param hasReferral Whether referral is used
 * @returns Fee on amount result
 */
declare function getFeeOnAmount(tradeFeeNumerator: BN, amount: BN, poolFees: PoolFeesConfig, hasReferral: boolean): FeeOnAmountResult;
/**
 * Get excluded fee amount from included fee amount
 * @param tradeFeeNumerator Trade fee numerator
 * @param includedFeeAmount Included fee amount
 * @returns [excluded fee amount, trading fee]
 */
declare function getExcludedFeeAmount(tradeFeeNumerator: BN, includedFeeAmount: BN): [BN, BN];
/**
 * Get included fee amount from excluded fee amount
 * @param tradeFeeNumerator Trade fee numerator
 * @param excludedFeeAmount Excluded fee amount
 * @returns [included fee amount, fee amount]
 */
declare function getIncludedFeeAmount(tradeFeeNumerator: BN, excludedFeeAmount: BN): [BN, BN];
/**
 * Split fees into trading, protocol, and referral fees
 * @param poolFees Pool fees
 * @param feeAmount Total fee amount
 * @param hasReferral Whether referral is used
 * @returns [trading fee, protocol fee, referral fee]
 */
declare function splitFees(poolFees: PoolFeesConfig, feeAmount: BN, hasReferral: boolean): [BN, BN, BN];

/**
 * Safe math operations for BN
 */
declare class SafeMath {
    /**
     * Safe addition
     * @param a First number
     * @param b Second number
     * @returns Sum of a and b
     */
    static add(a: BN, b: BN): BN;
    /**
     * Safe subtraction
     * @param a First number
     * @param b Second number
     * @returns Difference of a and b
     * @throws Error if b > a
     */
    static sub(a: BN, b: BN): BN;
    /**
     * Safe multiplication
     * @param a First number
     * @param b Second number
     * @returns Product of a and b
     */
    static mul(a: BN, b: BN): BN;
    /**
     * Safe division
     * @param a First number
     * @param b Second number
     * @returns Quotient of a and b
     * @throws Error if b is zero
     */
    static div(a: BN, b: BN): BN;
    /**
     * Safe modulo
     * @param a First number
     * @param b Second number
     * @returns Remainder of a divided by b
     * @throws Error if b is zero
     */
    static mod(a: BN, b: BN): BN;
    /**
     * Safe left shift
     * @param a Number to shift
     * @param b Number of bits to shift
     * @returns a << b
     */
    static shl(a: BN, b: number): BN;
    /**
     * Safe right shift
     * @param a Number to shift
     * @param b Number of bits to shift
     * @returns a >> b
     */
    static shr(a: BN, b: number): BN;
}
/**
 * Safe power function for BN with scaling
 * @param base Base number (scaled by RESOLUTION)
 * @param exponent Exponent (can be negative)
 * @param scaling Whether to apply RESOLUTION scaling to the result
 * @returns base^exponent
 */
declare function pow(base: BN, exponent: BN, scaling?: boolean): BN;

/**
 * Get swap result
 * @param poolState Pool state
 * @param configState Config state
 * @param amountIn Input amount
 * @param feeMode Fee mode
 * @param tradeDirection Trade direction
 * @param currentPoint Current point
 * @returns Swap result
 */
declare function getSwapResult(poolState: VirtualPool, configState: PoolConfig, amountIn: BN, feeMode: FeeMode, tradeDirection: TradeDirection, currentPoint: BN, eligibleForFirstSwapWithMinFee: boolean): SwapResult;
/**
 * Calculate quote for a swap with exact input amount (for swapQuote v1)
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param swapBaseForQuote Whether to swap base for quote
 * @param amountIn Input amount
 * @param slippageBps Slippage tolerance in basis points (100 = 1%)
 * @param hasReferral Whether referral is used
 * @param currentPoint Current point
 * @returns Swap quote result
 */
declare function swapQuote(virtualPool: VirtualPool, config: PoolConfig, swapBaseForQuote: boolean, amountIn: BN, slippageBps: number, hasReferral: boolean, currentPoint: BN, eligibleForFirstSwapWithMinFee: boolean): SwapQuoteResult;
/**
 * Get swap result from exact input
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param amountIn Input amount
 * @param feeMode Fee mode
 * @param tradeDirection Trade direction
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap result
 */
declare function getSwapResultFromExactInput(virtualPool: VirtualPool, config: PoolConfig, amountIn: BN, feeMode: FeeMode, tradeDirection: TradeDirection, currentPoint: BN, eligibleForFirstSwapWithMinFee: boolean): SwapResult2;
/**
 * Get swap result from partial input
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param amountIn Input amount
 * @param feeMode Fee mode
 * @param tradeDirection Trade direction
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap result
 */
declare function getSwapResultFromPartialInput(virtualPool: VirtualPool, config: PoolConfig, amountIn: BN, feeMode: FeeMode, tradeDirection: TradeDirection, currentPoint: BN, eligibleForFirstSwapWithMinFee: boolean): SwapResult2;
/**
 * Calculate output amount from base to quote from amount in
 * @param configState Config state
 * @param currentSqrtPrice Current sqrt price
 * @param amountIn Input amount
 * @returns Swap amount
 */
declare function calculateBaseToQuoteFromAmountIn(configState: {
    curve: Array<{
        sqrtPrice: BN;
        liquidity: BN;
    }>;
    sqrtStartPrice: BN;
}, currentSqrtPrice: BN, amountIn: BN): SwapAmount;
/**
 * Calculate output amount from quote to base from amount in
 * @param configState Config state
 * @param currentSqrtPrice Current sqrt price
 * @param amountIn Input amount
 * @param stopSqrtPrice Stop sqrt price
 * @returns Swap amount
 */
declare function calculateQuoteToBaseFromAmountIn(configState: {
    curve: Array<{
        sqrtPrice: BN;
        liquidity: BN;
    }>;
}, currentSqrtPrice: BN, amountIn: BN, stopSqrtPrice: BN): SwapAmount;
/**
 * Get swap result from exact output
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param amountOut Output amount
 * @param feeMode Fee mode
 * @param tradeDirection Trade direction
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap result
 */
declare function getSwapResultFromExactOutput(virtualPool: VirtualPool, config: PoolConfig, amountOut: BN, feeMode: FeeMode, tradeDirection: TradeDirection, currentPoint: BN, eligibleForFirstSwapWithMinFee: boolean): SwapResult2;
/**
 * Calculate input amount from base to quote from amount out
 * @param configState Config state
 * @param currentSqrtPrice Current sqrt price
 * @param outAmount Quote output amount
 * @returns Swap amount with input calculated
 */
declare function calculateBaseToQuoteFromAmountOut(configState: PoolConfig, currentSqrtPrice: BN, outAmount: BN): SwapAmount;
/**
 * Calculate input amount from quote to base from amount out
 * @param configState Config state
 * @param currentSqrtPrice Current sqrt price
 * @param outAmount Base output amount
 * @returns Swap amount with input calculated
 */
declare function calculateQuoteToBaseFromAmountOut(configState: PoolConfig, currentSqrtPrice: BN, outAmount: BN): SwapAmount;
/**
 * Calculate quote for a swap with exact input amount
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param swapBaseForQuote Whether to swap base for quote
 * @param amountIn Input amount
 * @param slippageBps Slippage tolerance in basis points (100 = 1%)
 * @param hasReferral Whether referral is used
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap quote result
 */
declare function swapQuoteExactIn(virtualPool: VirtualPool, config: PoolConfig, swapBaseForQuote: boolean, amountIn: BN, slippageBps: number, hasReferral: boolean, currentPoint: BN, eligibleForFirstSwapWithMinFee: boolean): SwapQuote2Result;
/**
 * Calculate quote for a swap with partial fill
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param swapBaseForQuote Whether to swap base for quote
 * @param amountIn Input amount
 * @param hasReferral Whether referral is used
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap quote result
 */
declare function swapQuotePartialFill(virtualPool: VirtualPool, config: PoolConfig, swapBaseForQuote: boolean, amountIn: BN, slippageBps: number, hasReferral: boolean, currentPoint: BN, eligibleForFirstSwapWithMinFee: boolean): SwapQuote2Result;
/**
 * Calculate quote for a swap with exact output amount
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param swapBaseForQuote Whether to swap base for quote
 * @param outAmount Output amount
 * @param slippageBps Slippage tolerance in basis points (100 = 1%)
 * @param hasReferral Whether referral is used
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap quote result with input amount calculated
 */
declare function swapQuoteExactOut(virtualPool: VirtualPool, config: PoolConfig, swapBaseForQuote: boolean, outAmount: BN, slippageBps: number, hasReferral: boolean, currentPoint: BN, eligibleForFirstSwapWithMinFee: boolean): SwapQuote2Result;

/**
 * Multiply and divide with rounding using BN
 * @param x First number
 * @param y Second number
 * @param denominator Denominator
 * @param rounding Rounding direction
 * @returns (x * y) / denominator
 * @throws If division by zero or overflow occurs
 */
declare function mulDiv(x: BN, y: BN, denominator: BN, rounding: Rounding): BN;
/**
 * Multiply and shift right with BN
 * @param x First number
 * @param y Second number
 * @param offset Number of bits to shift
 * @returns (x * y) >> offset
 */
declare function mulShr(x: BN, y: BN, offset: number): BN;
/**
 * Calculate square root of a BN number using Newton's method
 * @param value - The value to calculate square root for
 * @returns Square root of the value
 */
declare function sqrt(value: BN): BN;

/**
 * Fee Rate Limiter implementation
 */
declare class FeeRateLimiter implements BaseFeeHandler {
    cliffFeeNumerator: BN;
    feeIncrementBps: number;
    maxLimiterDuration: BN;
    referenceAmount: BN;
    constructor(cliffFeeNumerator: BN, feeIncrementBps: number, maxLimiterDuration: BN, referenceAmount: BN);
    validate(collectFeeMode: CollectFeeMode, activationType: ActivationType): boolean;
    getMinBaseFeeNumerator(): BN;
    getBaseFeeNumeratorFromIncludedFeeAmount(currentPoint: BN, activationPoint: BN, tradeDirection: TradeDirection, includedFeeAmount: BN): BN;
    getBaseFeeNumeratorFromExcludedFeeAmount(currentPoint: BN, activationPoint: BN, tradeDirection: TradeDirection, excludedFeeAmount: BN): BN;
}
/**
 * Fee Scheduler implementation
 */
declare class FeeScheduler implements BaseFeeHandler {
    cliffFeeNumerator: BN;
    numberOfPeriod: number;
    periodFrequency: BN;
    reductionFactor: BN;
    feeSchedulerMode: BaseFeeMode;
    constructor(cliffFeeNumerator: BN, numberOfPeriod: number, periodFrequency: BN, reductionFactor: BN, feeSchedulerMode: BaseFeeMode);
    validate(): boolean;
    getMinBaseFeeNumerator(): BN;
    getBaseFeeNumeratorFromIncludedFeeAmount(currentPoint: BN, activationPoint: BN): BN;
    getBaseFeeNumeratorFromExcludedFeeAmount(currentPoint: BN, activationPoint: BN): BN;
}
/**
 * Get base fee handler based on base fee mode
 * @param cliffFeeNumerator Cliff fee numerator
 * @param firstFactor First factor (feeScheduler: numberOfPeriod, rateLimiter: feeIncrementBps)
 * @param secondFactor Second factor (feeScheduler: periodFrequency, rateLimiter: maxLimiterDuration)
 * @param thirdFactor Third factor (feeScheduler: reductionFactor, rateLimiter: referenceAmount)
 * @param baseFeeMode Base fee mode
 * @returns Base fee handler instance
 */
declare function getBaseFeeHandler(cliffFeeNumerator: BN, firstFactor: number, secondFactor: BN, thirdFactor: BN, baseFeeMode: BaseFeeMode): BaseFeeHandler;

/**
 * Check if dynamic fee is enabled
 * @param dynamicFee Dynamic fee parameters
 * @returns True if dynamic fee is enabled
 */
declare function isDynamicFeeEnabled(dynamicFee: DynamicFeeConfig): boolean;
/**
 * Get variable fee numerator from dynamic fee
 * @param dynamicFee Dynamic fee parameters
 * @param volatilityTracker Volatility tracker
 * formula: dynamic_fee_numerator = ((volatility_accumulator * bin_step)^2 * variable_fee_control + 99_999_999_999) / 100_000_000_000
 * @returns Variable fee numerator
 */
declare function getVariableFeeNumerator(dynamicFee: DynamicFeeConfig, volatilityTracker: VolatilityTracker): BN;

/**
 * Get max base fee numerator
 * @param cliffFeeNumerator Cliff fee numerator
 * @returns Max fee numerator
 */
declare function getFeeSchedulerMaxBaseFeeNumerator(cliffFeeNumerator: BN): BN;
/**
 * Get min base fee numerator
 * @param cliffFeeNumerator Cliff fee numerator
 * @param numberOfPeriod Number of periods
 * @param periodFrequency Period frequency
 * @param reductionFactor Reduction factor
 * @param feeSchedulerMode Fee scheduler mode
 * @returns Min fee numerator
 */
declare function getFeeSchedulerMinBaseFeeNumerator(cliffFeeNumerator: BN, numberOfPeriod: number, reductionFactor: BN, feeSchedulerMode: BaseFeeMode): BN;
/**
 * Get base fee numerator by period
 * @param cliffFeeNumerator Cliff fee numerator
 * @param numberOfPeriod Number of periods
 * @param period Period to calculate fee for
 * @param reductionFactor Reduction factor
 * @param feeSchedulerMode Fee scheduler mode
 * @returns Fee numerator
 */
declare function getBaseFeeNumeratorByPeriod(cliffFeeNumerator: BN, numberOfPeriod: number, period: BN, reductionFactor: BN, feeSchedulerMode: BaseFeeMode): BN;
/**
 * Get fee in period for linear fee scheduler
 * @param cliffFeeNumerator Cliff fee numerator
 * @param reductionFactor Reduction factor
 * @param period Period
 * @returns Fee numerator
 */
declare function getFeeNumeratorOnLinearFeeScheduler(cliffFeeNumerator: BN, reductionFactor: BN, period: number): BN;
/**
 * Get fee in period for exponential fee scheduler
 * @param cliffFeeNumerator Cliff fee numerator
 * @param reductionFactor Reduction factor
 * @param period Period
 * @returns Fee numerator
 */
declare function getFeeNumeratorOnExponentialFeeScheduler(cliffFeeNumerator: BN, reductionFactor: BN, period: number): BN;
/**
 * Get base fee numerator
 * @param cliffFeeNumerator Cliff fee numerator
 * @param numberOfPeriod Number of periods
 * @param periodFrequency Period frequency
 * @param reductionFactor Reduction factor
 * @param feeSchedulerMode Fee scheduler mode
 * @param currentPoint Current point (slot or timestamp)
 * @param activationPoint Activation point
 * @returns Fee numerator
 */
declare function getBaseFeeNumerator(cliffFeeNumerator: BN, numberOfPeriod: number, periodFrequency: BN, reductionFactor: BN, feeSchedulerMode: BaseFeeMode, currentPoint: BN, activationPoint: BN): BN;

/**
 * Check if rate limiter is applied based on current conditions
 * @param currentPoint - Current point (slot or timestamp)
 * @param activationPoint - Activation point
 * @param tradeDirection - Trade direction
 * @param maxLimiterDuration - Max limiter duration
 * @param referenceAmount - Reference amount for rate limiter
 * @param feeIncrementBps - Fee increment bps for rate limiter
 * @returns Whether rate limiter is applied
 */
declare function isRateLimiterApplied(currentPoint: BN, activationPoint: BN, tradeDirection: TradeDirection, maxLimiterDuration: BN, referenceAmount: BN, feeIncrementBps: BN): boolean;
/**
 * Check if rate limiter is zero (disabled)
 * @param referenceAmount - Reference amount
 * @param maxLimiterDuration - Max limiter duration
 * @param feeIncrementBps - Fee increment bps
 * @returns Whether rate limiter is zero
 */
declare function isZeroRateLimiter(referenceAmount: BN, maxLimiterDuration: BN, feeIncrementBps: BN): boolean;
/**
 * Check if rate limiter is non-zero (enabled)
 * @param referenceAmount - Reference amount
 * @param maxLimiterDuration - Max limiter duration
 * @param feeIncrementBps - Fee increment bps
 * @returns Whether rate limiter is non-zero
 */
declare function isNonZeroRateLimiter(referenceAmount: BN, maxLimiterDuration: BN, feeIncrementBps: BN): boolean;
/**
 * Calculate the max index for rate limiter
 * @param cliffFeeNumerator - The cliff fee numerator
 * @param feeIncrementBps - The fee increment bps
 * @returns The max index
 * @throws Error if calculation fails due to overflow or division by zero
 */
declare function getMaxIndex(cliffFeeNumerator: BN, feeIncrementBps: BN): BN;
/**
 * Get max out amount with min base fee
 * @param cliffFeeNumerator - Cliff fee numerator
 * @param referenceAmount - Reference amount
 * @param feeIncrementBps - Fee increment bps
 * @returns Max out amount
 */
declare function getMaxOutAmountWithMinBaseFee(cliffFeeNumerator: BN, referenceAmount: BN, feeIncrementBps: BN): BN;
/**
 * Get checked amounts for rate limiter
 * @param cliffFeeNumerator - Cliff fee numerator
 * @param referenceAmount - Reference amount
 * @param feeIncrementBps - Fee increment bps
 * @returns Tuple of (checkedExcludedFeeAmount, checkedIncludedFeeAmount, isOverflow)
 */
declare function getCheckedAmounts(cliffFeeNumerator: BN, referenceAmount: BN, feeIncrementBps: BN): [BN, BN, boolean];
/**
 * Calculate the fee numerator on rate limiter from excluded fee amount
 * @param cliffFeeNumerator - The cliff fee numerator
 * @param referenceAmount - The reference amount
 * @param feeIncrementBps - The fee increment bps
 * @param excludedFeeAmount - The excluded fee amount
 * @returns The fee numerator
 */
declare function getFeeNumeratorFromExcludedAmount(cliffFeeNumerator: BN, referenceAmount: BN, feeIncrementBps: BN, excludedFeeAmount: BN): BN;
/**
 * Get excluded fee amount from included fee amount using rate limiter
 * @param cliffFeeNumerator - The cliff fee numerator
 * @param referenceAmount - The reference amount
 * @param feeIncrementBps - The fee increment bps
 * @param includedFeeAmount - The included fee amount
 * @returns The excluded fee amount
 */
declare function getRateLimiterExcludedFeeAmount(cliffFeeNumerator: BN, referenceAmount: BN, feeIncrementBps: BN, includedFeeAmount: BN): BN;
/**
 * Calculate the fee numerator on rate limiter from included fee amount
 * @param cliffFeeNumerator - The cliff fee numerator
 * @param referenceAmount - The reference amount
 * @param feeIncrementBps - The fee increment bps
 * @param includedFeeAmount - The included fee amount
 * @returns The fee numerator
 */
declare function getFeeNumeratorFromIncludedAmount(cliffFeeNumerator: BN, referenceAmount: BN, feeIncrementBps: BN, includedFeeAmount: BN): BN;
/**
 * Get the min base fee numerator for rate limiter
 * @param cliffFeeNumerator - The cliff fee numerator
 * @returns The min base fee numerator
 */
declare function getRateLimiterMinBaseFeeNumerator(cliffFeeNumerator: BN): BN;

var address = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN";
var metadata = {
	name: "dynamic_bonding_curve",
	version: "0.1.10",
	spec: "0.1.0",
	description: "Created with Anchor"
};
var instructions = [
	{
		name: "claim_creator_trading_fee",
		discriminator: [
			82,
			220,
			250,
			189,
			3,
			85,
			107,
			45
		],
		accounts: [
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "token_a_account",
				docs: [
					"The treasury token a account"
				],
				writable: true
			},
			{
				name: "token_b_account",
				docs: [
					"The treasury token b account"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for input token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "base_mint",
				docs: [
					"The mint of token a"
				],
				relations: [
					"pool"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of token b"
				]
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token a program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "max_base_amount",
				type: "u64"
			},
			{
				name: "max_quote_amount",
				type: "u64"
			}
		]
	},
	{
		name: "claim_partner_pool_creation_fee",
		discriminator: [
			250,
			238,
			26,
			4,
			139,
			10,
			101,
			248
		],
		accounts: [
			{
				name: "config",
				relations: [
					"pool"
				]
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "fee_claimer",
				signer: true
			},
			{
				name: "fee_receiver",
				writable: true
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "claim_protocol_fee",
		discriminator: [
			165,
			228,
			133,
			48,
			99,
			249,
			255,
			33
		],
		accounts: [
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "config",
				relations: [
					"pool"
				]
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for input token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "base_mint",
				docs: [
					"The mint of token a"
				],
				relations: [
					"pool"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of token b"
				],
				relations: [
					"config"
				]
			},
			{
				name: "token_base_account",
				writable: true
			},
			{
				name: "token_quote_account",
				writable: true
			},
			{
				name: "operator"
			},
			{
				name: "signer",
				docs: [
					"Signer"
				],
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token a program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "max_base_amount",
				type: "u64"
			},
			{
				name: "max_quote_amount",
				type: "u64"
			}
		]
	},
	{
		name: "claim_protocol_pool_creation_fee",
		discriminator: [
			114,
			205,
			83,
			188,
			240,
			153,
			25,
			54
		],
		accounts: [
			{
				name: "config",
				relations: [
					"pool"
				]
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "operator"
			},
			{
				name: "signer",
				docs: [
					"Operator"
				],
				signer: true
			},
			{
				name: "treasury",
				writable: true,
				address: "6aYhxiNGmG8AyU25rh2R7iFu4pBrqnQHpNUGhmsEXRcm"
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "claim_trading_fee",
		discriminator: [
			8,
			236,
			89,
			49,
			152,
			125,
			177,
			81
		],
		accounts: [
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "config",
				relations: [
					"pool"
				]
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "token_a_account",
				docs: [
					"The treasury token a account"
				],
				writable: true
			},
			{
				name: "token_b_account",
				docs: [
					"The treasury token b account"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for input token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "base_mint",
				docs: [
					"The mint of token a"
				],
				relations: [
					"pool"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of token b"
				],
				relations: [
					"config"
				]
			},
			{
				name: "fee_claimer",
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token a program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "max_amount_a",
				type: "u64"
			},
			{
				name: "max_amount_b",
				type: "u64"
			}
		]
	},
	{
		name: "close_claim_protocol_fee_operator",
		discriminator: [
			8,
			41,
			87,
			35,
			80,
			48,
			121,
			26
		],
		accounts: [
			{
				name: "claim_fee_operator",
				writable: true
			},
			{
				name: "rent_receiver",
				writable: true
			},
			{
				name: "signer",
				signer: true
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "close_operator_account",
		discriminator: [
			171,
			9,
			213,
			74,
			120,
			23,
			3,
			29
		],
		accounts: [
			{
				name: "operator",
				writable: true
			},
			{
				name: "signer",
				signer: true
			},
			{
				name: "rent_receiver",
				writable: true
			}
		],
		args: [
		]
	},
	{
		name: "create_config",
		discriminator: [
			201,
			207,
			243,
			114,
			75,
			111,
			47,
			189
		],
		accounts: [
			{
				name: "config",
				writable: true,
				signer: true
			},
			{
				name: "fee_claimer"
			},
			{
				name: "leftover_receiver"
			},
			{
				name: "quote_mint",
				docs: [
					"quote mint"
				]
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "config_parameters",
				type: {
					defined: {
						name: "ConfigParameters"
					}
				}
			}
		]
	},
	{
		name: "create_locker",
		docs: [
			"PERMISSIONLESS FUNCTIONS ///",
			"create locker"
		],
		discriminator: [
			167,
			90,
			137,
			154,
			75,
			47,
			17,
			84
		],
		accounts: [
			{
				name: "virtual_pool",
				docs: [
					"Virtual pool"
				],
				writable: true
			},
			{
				name: "config",
				docs: [
					"Config"
				],
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "pool_authority",
				writable: true,
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "base_vault",
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "base_mint",
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "base",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								98,
								97,
								115,
								101,
								95,
								108,
								111,
								99,
								107,
								101,
								114
							]
						},
						{
							kind: "account",
							path: "virtual_pool"
						}
					]
				}
			},
			{
				name: "creator",
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "escrow",
				writable: true
			},
			{
				name: "escrow_token",
				writable: true
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "token_program"
			},
			{
				name: "locker_program",
				address: "LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn"
			},
			{
				name: "locker_event_authority"
			},
			{
				name: "system_program",
				docs: [
					"System program."
				],
				address: "11111111111111111111111111111111"
			}
		],
		args: [
		]
	},
	{
		name: "create_operator_account",
		discriminator: [
			221,
			64,
			246,
			149,
			240,
			153,
			229,
			163
		],
		accounts: [
			{
				name: "operator",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								111,
								112,
								101,
								114,
								97,
								116,
								111,
								114
							]
						},
						{
							kind: "account",
							path: "whitelisted_address"
						}
					]
				}
			},
			{
				name: "whitelisted_address"
			},
			{
				name: "signer",
				signer: true
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "permission",
				type: "u128"
			}
		]
	},
	{
		name: "create_partner_metadata",
		docs: [
			"PARTNER FUNCTIONS ///"
		],
		discriminator: [
			192,
			168,
			234,
			191,
			188,
			226,
			227,
			255
		],
		accounts: [
			{
				name: "partner_metadata",
				docs: [
					"Partner metadata"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								112,
								97,
								114,
								116,
								110,
								101,
								114,
								95,
								109,
								101,
								116,
								97,
								100,
								97,
								116,
								97
							]
						},
						{
							kind: "account",
							path: "fee_claimer"
						}
					]
				}
			},
			{
				name: "payer",
				docs: [
					"Payer of the partner metadata."
				],
				writable: true,
				signer: true
			},
			{
				name: "fee_claimer",
				docs: [
					"Fee claimer for partner"
				],
				signer: true
			},
			{
				name: "system_program",
				docs: [
					"System program."
				],
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "metadata",
				type: {
					defined: {
						name: "CreatePartnerMetadataParameters"
					}
				}
			}
		]
	},
	{
		name: "create_virtual_pool_metadata",
		discriminator: [
			45,
			97,
			187,
			103,
			254,
			109,
			124,
			134
		],
		accounts: [
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "virtual_pool_metadata",
				docs: [
					"Virtual pool metadata"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								118,
								105,
								114,
								116,
								117,
								97,
								108,
								95,
								112,
								111,
								111,
								108,
								95,
								109,
								101,
								116,
								97,
								100,
								97,
								116,
								97
							]
						},
						{
							kind: "account",
							path: "virtual_pool"
						}
					]
				}
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "payer",
				docs: [
					"Payer of the virtual pool metadata."
				],
				writable: true,
				signer: true
			},
			{
				name: "system_program",
				docs: [
					"System program."
				],
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "metadata",
				type: {
					defined: {
						name: "CreateVirtualPoolMetadataParameters"
					}
				}
			}
		]
	},
	{
		name: "creator_withdraw_surplus",
		discriminator: [
			165,
			3,
			137,
			7,
			28,
			134,
			76,
			80
		],
		accounts: [
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "config",
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "token_quote_account",
				docs: [
					"The receiver token account"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				],
				relations: [
					"config"
				]
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "initialize_virtual_pool_with_spl_token",
		docs: [
			"POOL CREATOR FUNCTIONS ////"
		],
		discriminator: [
			140,
			85,
			215,
			176,
			102,
			54,
			104,
			79
		],
		accounts: [
			{
				name: "config",
				docs: [
					"Which config the pool belongs to."
				]
			},
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "base_mint",
				writable: true,
				signer: true
			},
			{
				name: "quote_mint",
				relations: [
					"config"
				]
			},
			{
				name: "pool",
				docs: [
					"Initialize an account to store the pool state"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"Token a vault for the pool"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								116,
								111,
								107,
								101,
								110,
								95,
								118,
								97,
								117,
								108,
								116
							]
						},
						{
							kind: "account",
							path: "base_mint"
						},
						{
							kind: "account",
							path: "pool"
						}
					]
				}
			},
			{
				name: "quote_vault",
				docs: [
					"Token b vault for the pool"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								116,
								111,
								107,
								101,
								110,
								95,
								118,
								97,
								117,
								108,
								116
							]
						},
						{
							kind: "account",
							path: "quote_mint"
						},
						{
							kind: "account",
							path: "pool"
						}
					]
				}
			},
			{
				name: "mint_metadata",
				writable: true
			},
			{
				name: "metadata_program",
				address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
			},
			{
				name: "payer",
				docs: [
					"Address paying to create the pool. Can be anyone"
				],
				writable: true,
				signer: true
			},
			{
				name: "token_quote_program",
				docs: [
					"Program to create mint account and mint tokens"
				]
			},
			{
				name: "token_program",
				address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "InitializePoolParameters"
					}
				}
			}
		]
	},
	{
		name: "initialize_virtual_pool_with_token2022",
		discriminator: [
			169,
			118,
			51,
			78,
			145,
			110,
			220,
			155
		],
		accounts: [
			{
				name: "config",
				docs: [
					"Which config the pool belongs to."
				]
			},
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "base_mint",
				docs: [
					"Unique token mint address, initialize in contract"
				],
				writable: true,
				signer: true
			},
			{
				name: "quote_mint",
				relations: [
					"config"
				]
			},
			{
				name: "pool",
				docs: [
					"Initialize an account to store the pool state"
				],
				writable: true
			},
			{
				name: "base_vault",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								116,
								111,
								107,
								101,
								110,
								95,
								118,
								97,
								117,
								108,
								116
							]
						},
						{
							kind: "account",
							path: "base_mint"
						},
						{
							kind: "account",
							path: "pool"
						}
					]
				}
			},
			{
				name: "quote_vault",
				docs: [
					"Token quote vault for the pool"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								116,
								111,
								107,
								101,
								110,
								95,
								118,
								97,
								117,
								108,
								116
							]
						},
						{
							kind: "account",
							path: "quote_mint"
						},
						{
							kind: "account",
							path: "pool"
						}
					]
				}
			},
			{
				name: "payer",
				docs: [
					"Address paying to create the pool. Can be anyone"
				],
				writable: true,
				signer: true
			},
			{
				name: "token_quote_program",
				docs: [
					"Program to create mint account and mint tokens"
				]
			},
			{
				name: "token_program",
				docs: [
					"token program for base mint"
				],
				address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "InitializePoolParameters"
					}
				}
			}
		]
	},
	{
		name: "migrate_meteora_damm",
		discriminator: [
			27,
			1,
			48,
			22,
			180,
			63,
			118,
			217
		],
		accounts: [
			{
				name: "virtual_pool",
				docs: [
					"virtual pool"
				],
				writable: true,
				relations: [
					"migration_metadata"
				]
			},
			{
				name: "migration_metadata",
				writable: true
			},
			{
				name: "config",
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "pool_authority",
				writable: true,
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "damm_config",
				docs: [
					"pool config"
				]
			},
			{
				name: "lp_mint",
				writable: true
			},
			{
				name: "token_a_mint",
				writable: true
			},
			{
				name: "token_b_mint"
			},
			{
				name: "a_vault",
				writable: true
			},
			{
				name: "b_vault",
				writable: true
			},
			{
				name: "a_token_vault",
				writable: true
			},
			{
				name: "b_token_vault",
				writable: true
			},
			{
				name: "a_vault_lp_mint",
				writable: true
			},
			{
				name: "b_vault_lp_mint",
				writable: true
			},
			{
				name: "a_vault_lp",
				writable: true
			},
			{
				name: "b_vault_lp",
				writable: true
			},
			{
				name: "base_vault",
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "quote_vault",
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "virtual_pool_lp",
				writable: true
			},
			{
				name: "protocol_token_a_fee",
				writable: true
			},
			{
				name: "protocol_token_b_fee",
				writable: true
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "rent"
			},
			{
				name: "mint_metadata",
				writable: true
			},
			{
				name: "metadata_program"
			},
			{
				name: "amm_program",
				address: "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB"
			},
			{
				name: "vault_program"
			},
			{
				name: "token_program",
				docs: [
					"token_program"
				],
				address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
			},
			{
				name: "associated_token_program"
			},
			{
				name: "system_program",
				docs: [
					"System program."
				],
				address: "11111111111111111111111111111111"
			}
		],
		args: [
		]
	},
	{
		name: "migrate_meteora_damm_claim_lp_token",
		discriminator: [
			139,
			133,
			2,
			30,
			91,
			145,
			127,
			154
		],
		accounts: [
			{
				name: "virtual_pool",
				relations: [
					"migration_metadata"
				]
			},
			{
				name: "migration_metadata",
				docs: [
					"migration metadata"
				],
				writable: true
			},
			{
				name: "pool_authority",
				writable: true,
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "lp_mint",
				relations: [
					"migration_metadata"
				]
			},
			{
				name: "source_token",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "account",
							path: "pool_authority"
						},
						{
							kind: "const",
							value: [
								6,
								221,
								246,
								225,
								215,
								101,
								161,
								147,
								217,
								203,
								225,
								70,
								206,
								235,
								121,
								172,
								28,
								180,
								133,
								237,
								95,
								91,
								55,
								145,
								58,
								140,
								245,
								133,
								126,
								255,
								0,
								169
							]
						},
						{
							kind: "account",
							path: "migration_metadata"
						}
					],
					program: {
						kind: "const",
						value: [
							140,
							151,
							37,
							143,
							78,
							36,
							137,
							241,
							187,
							61,
							16,
							41,
							20,
							142,
							13,
							131,
							11,
							90,
							19,
							153,
							218,
							255,
							16,
							132,
							4,
							142,
							123,
							216,
							219,
							233,
							248,
							89
						]
					}
				}
			},
			{
				name: "destination_token",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "account",
							path: "owner"
						},
						{
							kind: "const",
							value: [
								6,
								221,
								246,
								225,
								215,
								101,
								161,
								147,
								217,
								203,
								225,
								70,
								206,
								235,
								121,
								172,
								28,
								180,
								133,
								237,
								95,
								91,
								55,
								145,
								58,
								140,
								245,
								133,
								126,
								255,
								0,
								169
							]
						},
						{
							kind: "account",
							path: "migration_metadata"
						}
					],
					program: {
						kind: "const",
						value: [
							140,
							151,
							37,
							143,
							78,
							36,
							137,
							241,
							187,
							61,
							16,
							41,
							20,
							142,
							13,
							131,
							11,
							90,
							19,
							153,
							218,
							255,
							16,
							132,
							4,
							142,
							123,
							216,
							219,
							233,
							248,
							89
						]
					}
				}
			},
			{
				name: "owner"
			},
			{
				name: "sender",
				signer: true
			},
			{
				name: "token_program",
				docs: [
					"token_program"
				],
				address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
			}
		],
		args: [
		]
	},
	{
		name: "migrate_meteora_damm_lock_lp_token",
		discriminator: [
			177,
			55,
			238,
			157,
			251,
			88,
			165,
			42
		],
		accounts: [
			{
				name: "virtual_pool",
				relations: [
					"migration_metadata"
				]
			},
			{
				name: "migration_metadata",
				docs: [
					"migration_metadata"
				],
				writable: true
			},
			{
				name: "pool_authority",
				writable: true,
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "pool",
				writable: true,
				relations: [
					"lock_escrow"
				]
			},
			{
				name: "lp_mint",
				relations: [
					"migration_metadata"
				]
			},
			{
				name: "lock_escrow",
				writable: true
			},
			{
				name: "owner",
				relations: [
					"lock_escrow"
				]
			},
			{
				name: "source_tokens",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "account",
							path: "pool_authority"
						},
						{
							kind: "const",
							value: [
								6,
								221,
								246,
								225,
								215,
								101,
								161,
								147,
								217,
								203,
								225,
								70,
								206,
								235,
								121,
								172,
								28,
								180,
								133,
								237,
								95,
								91,
								55,
								145,
								58,
								140,
								245,
								133,
								126,
								255,
								0,
								169
							]
						},
						{
							kind: "account",
							path: "migration_metadata"
						}
					],
					program: {
						kind: "const",
						value: [
							140,
							151,
							37,
							143,
							78,
							36,
							137,
							241,
							187,
							61,
							16,
							41,
							20,
							142,
							13,
							131,
							11,
							90,
							19,
							153,
							218,
							255,
							16,
							132,
							4,
							142,
							123,
							216,
							219,
							233,
							248,
							89
						]
					}
				}
			},
			{
				name: "escrow_vault",
				writable: true
			},
			{
				name: "amm_program",
				address: "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB"
			},
			{
				name: "a_vault"
			},
			{
				name: "b_vault"
			},
			{
				name: "a_vault_lp"
			},
			{
				name: "b_vault_lp"
			},
			{
				name: "a_vault_lp_mint"
			},
			{
				name: "b_vault_lp_mint"
			},
			{
				name: "token_program",
				docs: [
					"token_program"
				],
				address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
			}
		],
		args: [
		]
	},
	{
		name: "migration_damm_v2",
		discriminator: [
			156,
			169,
			230,
			103,
			53,
			228,
			80,
			64
		],
		accounts: [
			{
				name: "virtual_pool",
				docs: [
					"virtual pool"
				],
				writable: true
			},
			{
				name: "migration_metadata"
			},
			{
				name: "config",
				docs: [
					"virtual pool config key"
				],
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "pool_authority",
				writable: true,
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "first_position_nft_mint",
				writable: true,
				signer: true
			},
			{
				name: "first_position_nft_account",
				writable: true
			},
			{
				name: "first_position",
				writable: true
			},
			{
				name: "second_position_nft_mint",
				writable: true,
				signer: true,
				optional: true
			},
			{
				name: "second_position_nft_account",
				writable: true,
				optional: true
			},
			{
				name: "second_position",
				writable: true,
				optional: true
			},
			{
				name: "damm_pool_authority"
			},
			{
				name: "amm_program",
				address: "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
			},
			{
				name: "base_mint",
				writable: true
			},
			{
				name: "quote_mint",
				writable: true
			},
			{
				name: "token_a_vault",
				writable: true
			},
			{
				name: "token_b_vault",
				writable: true
			},
			{
				name: "base_vault",
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "quote_vault",
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "token_base_program"
			},
			{
				name: "token_quote_program"
			},
			{
				name: "token_2022_program"
			},
			{
				name: "damm_event_authority"
			},
			{
				name: "system_program",
				docs: [
					"System program."
				],
				address: "11111111111111111111111111111111"
			}
		],
		args: [
		]
	},
	{
		name: "migration_damm_v2_create_metadata",
		discriminator: [
			109,
			189,
			19,
			36,
			195,
			183,
			222,
			82
		],
		accounts: [
			{
				name: "virtual_pool"
			},
			{
				name: "config"
			},
			{
				name: "migration_metadata"
			},
			{
				name: "payer"
			},
			{
				name: "system_program"
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "migration_meteora_damm_create_metadata",
		docs: [
			"migrate damm v1"
		],
		discriminator: [
			47,
			94,
			126,
			115,
			221,
			226,
			194,
			133
		],
		accounts: [
			{
				name: "virtual_pool"
			},
			{
				name: "config",
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "migration_metadata",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								109,
								101,
								116,
								101,
								111,
								114,
								97
							]
						},
						{
							kind: "account",
							path: "virtual_pool"
						}
					]
				}
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "partner_withdraw_surplus",
		discriminator: [
			168,
			173,
			72,
			100,
			201,
			98,
			38,
			92
		],
		accounts: [
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "config",
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "token_quote_account",
				docs: [
					"The receiver token account"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				],
				relations: [
					"config"
				]
			},
			{
				name: "fee_claimer",
				signer: true
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "swap",
		docs: [
			"TRADING BOTS FUNCTIONS ////"
		],
		discriminator: [
			248,
			198,
			158,
			145,
			225,
			117,
			135,
			200
		],
		accounts: [
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "config",
				docs: [
					"config key"
				],
				relations: [
					"pool"
				]
			},
			{
				name: "pool",
				docs: [
					"Pool account"
				],
				writable: true
			},
			{
				name: "input_token_account",
				docs: [
					"The user token account for input token"
				],
				writable: true
			},
			{
				name: "output_token_account",
				docs: [
					"The user token account for output token"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for base token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for quote token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "base_mint",
				docs: [
					"The mint of base token"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				]
			},
			{
				name: "payer",
				docs: [
					"The user performing the swap"
				],
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token base program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token quote program"
				]
			},
			{
				name: "referral_token_account",
				docs: [
					"referral token account"
				],
				writable: true,
				optional: true
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "SwapParameters"
					}
				}
			}
		]
	},
	{
		name: "swap2",
		discriminator: [
			65,
			75,
			63,
			76,
			235,
			91,
			91,
			136
		],
		accounts: [
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "config",
				docs: [
					"config key"
				],
				relations: [
					"pool"
				]
			},
			{
				name: "pool",
				docs: [
					"Pool account"
				],
				writable: true
			},
			{
				name: "input_token_account",
				docs: [
					"The user token account for input token"
				],
				writable: true
			},
			{
				name: "output_token_account",
				docs: [
					"The user token account for output token"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for base token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for quote token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "base_mint",
				docs: [
					"The mint of base token"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				]
			},
			{
				name: "payer",
				docs: [
					"The user performing the swap"
				],
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token base program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token quote program"
				]
			},
			{
				name: "referral_token_account",
				docs: [
					"referral token account"
				],
				writable: true,
				optional: true
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "SwapParameters2"
					}
				}
			}
		]
	},
	{
		name: "transfer_pool_creator",
		discriminator: [
			20,
			7,
			169,
			33,
			58,
			147,
			166,
			33
		],
		accounts: [
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "config",
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "new_creator"
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "withdraw_leftover",
		discriminator: [
			20,
			198,
			202,
			237,
			235,
			243,
			183,
			66
		],
		accounts: [
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "config",
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "token_base_account",
				docs: [
					"The receiver token account, withdraw to ATA"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "account",
							path: "leftover_receiver"
						},
						{
							kind: "account",
							path: "token_base_program"
						},
						{
							kind: "account",
							path: "base_mint"
						}
					],
					program: {
						kind: "const",
						value: [
							140,
							151,
							37,
							143,
							78,
							36,
							137,
							241,
							187,
							61,
							16,
							41,
							20,
							142,
							13,
							131,
							11,
							90,
							19,
							153,
							218,
							255,
							16,
							132,
							4,
							142,
							123,
							216,
							219,
							233,
							248,
							89
						]
					}
				}
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "base_mint",
				docs: [
					"The mint of quote token"
				],
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "leftover_receiver",
				relations: [
					"config"
				]
			},
			{
				name: "token_base_program",
				docs: [
					"Token base program"
				]
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "withdraw_migration_fee",
		docs: [
			"BOTH partner and creator FUNCTIONS ///"
		],
		discriminator: [
			237,
			142,
			45,
			23,
			129,
			6,
			222,
			162
		],
		accounts: [
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "config",
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "token_quote_account",
				docs: [
					"The receiver token account"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				],
				relations: [
					"config"
				]
			},
			{
				name: "sender",
				signer: true
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority",
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								95,
								95,
								101,
								118,
								101,
								110,
								116,
								95,
								97,
								117,
								116,
								104,
								111,
								114,
								105,
								116,
								121
							]
						}
					]
				}
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "flag",
				type: "u8"
			}
		]
	},
	{
		name: "zap_protocol_fee",
		discriminator: [
			213,
			155,
			187,
			34,
			56,
			182,
			91,
			240
		],
		accounts: [
			{
				name: "pool_authority",
				address: "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
			},
			{
				name: "config",
				relations: [
					"pool"
				]
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "token_vault",
				writable: true
			},
			{
				name: "token_mint"
			},
			{
				name: "receiver_token",
				writable: true
			},
			{
				name: "operator",
				docs: [
					"zap claim fee operator"
				]
			},
			{
				name: "signer",
				docs: [
					"Operator"
				],
				signer: true
			},
			{
				name: "token_program",
				docs: [
					"Token program"
				]
			},
			{
				name: "sysvar_instructions",
				address: "Sysvar1nstructions1111111111111111111111111"
			}
		],
		args: [
			{
				name: "max_amount",
				type: "u64"
			}
		]
	}
];
var accounts = [
	{
		name: "ClaimFeeOperator",
		discriminator: [
			166,
			48,
			134,
			86,
			34,
			200,
			188,
			150
		]
	},
	{
		name: "Config",
		discriminator: [
			155,
			12,
			170,
			224,
			30,
			250,
			204,
			130
		]
	},
	{
		name: "LockEscrow",
		discriminator: [
			190,
			106,
			121,
			6,
			200,
			182,
			21,
			75
		]
	},
	{
		name: "MeteoraDammMigrationMetadata",
		discriminator: [
			17,
			155,
			141,
			215,
			207,
			4,
			133,
			156
		]
	},
	{
		name: "Operator",
		discriminator: [
			219,
			31,
			188,
			145,
			69,
			139,
			204,
			117
		]
	},
	{
		name: "PartnerMetadata",
		discriminator: [
			68,
			68,
			130,
			19,
			16,
			209,
			98,
			156
		]
	},
	{
		name: "PoolConfig",
		discriminator: [
			26,
			108,
			14,
			123,
			116,
			230,
			129,
			43
		]
	},
	{
		name: "VirtualPool",
		discriminator: [
			213,
			224,
			5,
			209,
			98,
			69,
			119,
			92
		]
	},
	{
		name: "VirtualPoolMetadata",
		discriminator: [
			217,
			37,
			82,
			250,
			43,
			47,
			228,
			254
		]
	}
];
var events = [
	{
		name: "EvtClaimCreatorTradingFee",
		discriminator: [
			154,
			228,
			215,
			202,
			133,
			155,
			214,
			138
		]
	},
	{
		name: "EvtClaimPoolCreationFee",
		discriminator: [
			149,
			111,
			149,
			44,
			136,
			64,
			175,
			62
		]
	},
	{
		name: "EvtClaimProtocolFee",
		discriminator: [
			186,
			244,
			75,
			251,
			188,
			13,
			25,
			33
		]
	},
	{
		name: "EvtClaimProtocolLiquidityMigrationFee",
		discriminator: [
			81,
			168,
			116,
			31,
			161,
			86,
			27,
			35
		]
	},
	{
		name: "EvtClaimTradingFee",
		discriminator: [
			26,
			83,
			117,
			240,
			92,
			202,
			112,
			254
		]
	},
	{
		name: "EvtCloseClaimFeeOperator",
		discriminator: [
			111,
			39,
			37,
			55,
			110,
			216,
			194,
			23
		]
	},
	{
		name: "EvtCreateClaimFeeOperator",
		discriminator: [
			21,
			6,
			153,
			120,
			68,
			116,
			28,
			177
		]
	},
	{
		name: "EvtCreateConfig",
		discriminator: [
			131,
			207,
			180,
			174,
			180,
			73,
			165,
			54
		]
	},
	{
		name: "EvtCreateConfigV2",
		discriminator: [
			163,
			74,
			66,
			187,
			119,
			195,
			26,
			144
		]
	},
	{
		name: "EvtCreateMeteoraMigrationMetadata",
		discriminator: [
			99,
			167,
			133,
			63,
			214,
			143,
			175,
			139
		]
	},
	{
		name: "EvtCreatorWithdrawSurplus",
		discriminator: [
			152,
			73,
			21,
			15,
			66,
			87,
			53,
			157
		]
	},
	{
		name: "EvtCurveComplete",
		discriminator: [
			229,
			231,
			86,
			84,
			156,
			134,
			75,
			24
		]
	},
	{
		name: "EvtInitializePool",
		discriminator: [
			228,
			50,
			246,
			85,
			203,
			66,
			134,
			37
		]
	},
	{
		name: "EvtPartnerClaimPoolCreationFee",
		discriminator: [
			174,
			223,
			44,
			150,
			145,
			98,
			89,
			195
		]
	},
	{
		name: "EvtPartnerMetadata",
		discriminator: [
			200,
			127,
			6,
			55,
			13,
			32,
			8,
			150
		]
	},
	{
		name: "EvtPartnerWithdrawMigrationFee",
		discriminator: [
			181,
			105,
			127,
			67,
			8,
			187,
			120,
			57
		]
	},
	{
		name: "EvtPartnerWithdrawSurplus",
		discriminator: [
			195,
			56,
			152,
			9,
			232,
			72,
			35,
			22
		]
	},
	{
		name: "EvtSwap",
		discriminator: [
			27,
			60,
			21,
			213,
			138,
			170,
			187,
			147
		]
	},
	{
		name: "EvtSwap2",
		discriminator: [
			189,
			66,
			51,
			168,
			38,
			80,
			117,
			153
		]
	},
	{
		name: "EvtUpdatePoolCreator",
		discriminator: [
			107,
			225,
			165,
			237,
			91,
			158,
			213,
			220
		]
	},
	{
		name: "EvtVirtualPoolMetadata",
		discriminator: [
			188,
			18,
			72,
			76,
			195,
			91,
			38,
			74
		]
	},
	{
		name: "EvtWithdrawLeftover",
		discriminator: [
			191,
			189,
			104,
			143,
			111,
			156,
			94,
			229
		]
	},
	{
		name: "EvtWithdrawMigrationFee",
		discriminator: [
			26,
			203,
			84,
			85,
			161,
			23,
			100,
			214
		]
	}
];
var errors = [
	{
		code: 6000,
		name: "MathOverflow",
		msg: "Math operation overflow"
	},
	{
		code: 6001,
		name: "InvalidFee",
		msg: "Invalid fee setup"
	},
	{
		code: 6002,
		name: "ExceededSlippage",
		msg: "Exceeded slippage tolerance"
	},
	{
		code: 6003,
		name: "ExceedMaxFeeBps",
		msg: "Exceeded max fee bps"
	},
	{
		code: 6004,
		name: "InvalidAdmin",
		msg: "Invalid admin"
	},
	{
		code: 6005,
		name: "AmountIsZero",
		msg: "Amount is zero"
	},
	{
		code: 6006,
		name: "TypeCastFailed",
		msg: "Type cast error"
	},
	{
		code: 6007,
		name: "InvalidActivationType",
		msg: "Invalid activation type"
	},
	{
		code: 6008,
		name: "InvalidQuoteMint",
		msg: "Invalid quote mint"
	},
	{
		code: 6009,
		name: "InvalidCollectFeeMode",
		msg: "Invalid collect fee mode"
	},
	{
		code: 6010,
		name: "InvalidMigrationFeeOption",
		msg: "Invalid migration fee option"
	},
	{
		code: 6011,
		name: "InvalidInput",
		msg: "Invalid input"
	},
	{
		code: 6012,
		name: "NotEnoughLiquidity",
		msg: "Not enough liquidity"
	},
	{
		code: 6013,
		name: "PoolIsCompleted",
		msg: "Pool is completed"
	},
	{
		code: 6014,
		name: "PoolIsIncompleted",
		msg: "Pool is incompleted"
	},
	{
		code: 6015,
		name: "InvalidMigrationOption",
		msg: "Invalid migration option"
	},
	{
		code: 6016,
		name: "InvalidTokenDecimals",
		msg: "Invalid token decimals"
	},
	{
		code: 6017,
		name: "InvalidTokenType",
		msg: "Invalid token type"
	},
	{
		code: 6018,
		name: "InvalidFeePercentage",
		msg: "Invalid fee percentage"
	},
	{
		code: 6019,
		name: "InvalidQuoteThreshold",
		msg: "Invalid quote threshold"
	},
	{
		code: 6020,
		name: "InvalidTokenSupply",
		msg: "Invalid token supply"
	},
	{
		code: 6021,
		name: "InvalidCurve",
		msg: "Invalid curve"
	},
	{
		code: 6022,
		name: "NotPermitToDoThisAction",
		msg: "Not permit to do this action"
	},
	{
		code: 6023,
		name: "InvalidOwnerAccount",
		msg: "Invalid owner account"
	},
	{
		code: 6024,
		name: "InvalidConfigAccount",
		msg: "Invalid config account"
	},
	{
		code: 6025,
		name: "SurplusHasBeenWithdraw",
		msg: "Surplus has been withdraw"
	},
	{
		code: 6026,
		name: "LeftoverHasBeenWithdraw",
		msg: "Leftover has been withdraw"
	},
	{
		code: 6027,
		name: "TotalBaseTokenExceedMaxSupply",
		msg: "Total base token is exceeded max supply"
	},
	{
		code: 6028,
		name: "UnsupportNativeMintToken2022",
		msg: "Unsupport native mint token 2022"
	},
	{
		code: 6029,
		name: "InsufficientLiquidityForMigration",
		msg: "Insufficient liquidity for migration"
	},
	{
		code: 6030,
		name: "MissingPoolConfigInRemainingAccount",
		msg: "Missing pool config in remaining account"
	},
	{
		code: 6031,
		name: "InvalidVestingParameters",
		msg: "Invalid vesting parameters"
	},
	{
		code: 6032,
		name: "InvalidLeftoverAddress",
		msg: "Invalid leftover address"
	},
	{
		code: 6033,
		name: "InsufficientLiquidity",
		msg: "Liquidity in bonding curve is insufficient"
	},
	{
		code: 6034,
		name: "InvalidFeeScheduler",
		msg: "Invalid fee scheduler"
	},
	{
		code: 6035,
		name: "InvalidCreatorTradingFeePercentage",
		msg: "Invalid creator trading fee percentage"
	},
	{
		code: 6036,
		name: "InvalidNewCreator",
		msg: "Invalid new creator"
	},
	{
		code: 6037,
		name: "InvalidTokenAuthorityOption",
		msg: "Invalid token authority option"
	},
	{
		code: 6038,
		name: "InvalidAccount",
		msg: "Invalid account for the instruction"
	},
	{
		code: 6039,
		name: "InvalidMigratorFeePercentage",
		msg: "Invalid migrator fee percentage"
	},
	{
		code: 6040,
		name: "MigrationFeeHasBeenWithdraw",
		msg: "Migration fee has been withdraw"
	},
	{
		code: 6041,
		name: "InvalidBaseFeeMode",
		msg: "Invalid base fee mode"
	},
	{
		code: 6042,
		name: "InvalidFeeRateLimiter",
		msg: "Invalid fee rate limiter"
	},
	{
		code: 6043,
		name: "FailToValidateSingleSwapInstruction",
		msg: "Fail to validate single swap instruction in rate limiter"
	},
	{
		code: 6044,
		name: "InvalidMigratedPoolFee",
		msg: "Invalid migrated pool fee params"
	},
	{
		code: 6045,
		name: "UndeterminedError",
		msg: "Undertermined error"
	},
	{
		code: 6046,
		name: "RateLimiterNotSupported",
		msg: "Rate limiter not supported"
	},
	{
		code: 6047,
		name: "AmountLeftIsNotZero",
		msg: "Amount left is not zero"
	},
	{
		code: 6048,
		name: "NextSqrtPriceIsSmallerThanStartSqrtPrice",
		msg: "Next sqrt price is smaller than start sqrt price"
	},
	{
		code: 6049,
		name: "InvalidMinBaseFee",
		msg: "Invalid min base fee"
	},
	{
		code: 6050,
		name: "AccountInvariantViolation",
		msg: "Account invariant violation"
	},
	{
		code: 6051,
		name: "InvalidPoolCreationFee",
		msg: "Invalid pool creation fee"
	},
	{
		code: 6052,
		name: "PoolCreationFeeHasBeenClaimed",
		msg: "Pool creation fee has been claimed"
	},
	{
		code: 6053,
		name: "Unauthorized",
		msg: "Not permit to do this action"
	},
	{
		code: 6054,
		name: "ZeroPoolCreationFee",
		msg: "Pool creation fee is zero"
	},
	{
		code: 6055,
		name: "InvalidMigrationLockedLiquidity",
		msg: "Invalid migration locked liquidity"
	},
	{
		code: 6056,
		name: "InvalidFeeMarketCapScheduler",
		msg: "Invalid fee market cap scheduler"
	},
	{
		code: 6057,
		name: "FirstSwapValidationFailed",
		msg: "Fail to validate first swap with minimum fee"
	},
	{
		code: 6058,
		name: "IncorrectATA",
		msg: "Incorrect ATA"
	},
	{
		code: 6059,
		name: "InsufficientPoolLamports",
		msg: "Pool has insufficient lamports to perform the operation"
	},
	{
		code: 6060,
		name: "InvalidPermission",
		msg: "Invalid permission"
	},
	{
		code: 6061,
		name: "InvalidWithdrawProtocolFeeZapAccounts",
		msg: "Invalid withdraw protocol fee zap accounts"
	},
	{
		code: 6062,
		name: "MintRestrictedFromZap",
		msg: "SOL,USDC protocol fee cannot be withdrawn via zap"
	},
	{
		code: 6063,
		name: "InvalidZapOutParameters",
		msg: "Invalid zap out parameters"
	},
	{
		code: 6064,
		name: "CpiDisabled",
		msg: "CPI disabled"
	},
	{
		code: 6065,
		name: "MissingZapOutInstruction",
		msg: "Missing zap out instruction"
	},
	{
		code: 6066,
		name: "InvalidZapAccounts",
		msg: "Invalid zap accounts"
	},
	{
		code: 6067,
		name: "InvalidCompoundingParameters",
		msg: "Invalid compounding parameters"
	}
];
var types = [
	{
		name: "BaseFeeConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "cliff_fee_numerator",
					type: "u64"
				},
				{
					name: "second_factor",
					type: "u64"
				},
				{
					name: "third_factor",
					type: "u64"
				},
				{
					name: "first_factor",
					type: "u16"
				},
				{
					name: "base_fee_mode",
					type: "u8"
				},
				{
					name: "padding_0",
					type: {
						array: [
							"u8",
							5
						]
					}
				}
			]
		}
	},
	{
		name: "BaseFeeParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "cliff_fee_numerator",
					type: "u64"
				},
				{
					name: "first_factor",
					type: "u16"
				},
				{
					name: "second_factor",
					type: "u64"
				},
				{
					name: "third_factor",
					type: "u64"
				},
				{
					name: "base_fee_mode",
					type: "u8"
				}
			]
		}
	},
	{
		name: "ClaimFeeOperator",
		docs: [
			"Parameter that set by the protocol"
		],
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "operator",
					docs: [
						"operator"
					],
					type: "pubkey"
				},
				{
					name: "_padding",
					docs: [
						"Reserve"
					],
					type: {
						array: [
							"u8",
							128
						]
					}
				}
			]
		}
	},
	{
		name: "Config",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool_fees",
					type: {
						defined: {
							name: "PoolFees"
						}
					}
				},
				{
					name: "activation_duration",
					type: "u64"
				},
				{
					name: "vault_config_key",
					type: "pubkey"
				},
				{
					name: "pool_creator_authority",
					type: "pubkey"
				},
				{
					name: "activation_type",
					type: "u8"
				},
				{
					name: "partner_fee_numerator",
					type: "u64"
				},
				{
					name: "padding",
					type: {
						array: [
							"u8",
							219
						]
					}
				}
			]
		}
	},
	{
		name: "ConfigParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool_fees",
					type: {
						defined: {
							name: "PoolFeeParameters"
						}
					}
				},
				{
					name: "collect_fee_mode",
					type: "u8"
				},
				{
					name: "migration_option",
					type: "u8"
				},
				{
					name: "activation_type",
					type: "u8"
				},
				{
					name: "token_type",
					type: "u8"
				},
				{
					name: "token_decimal",
					type: "u8"
				},
				{
					name: "partner_liquidity_percentage",
					type: "u8"
				},
				{
					name: "partner_permanent_locked_liquidity_percentage",
					type: "u8"
				},
				{
					name: "creator_liquidity_percentage",
					type: "u8"
				},
				{
					name: "creator_permanent_locked_liquidity_percentage",
					type: "u8"
				},
				{
					name: "migration_quote_threshold",
					type: "u64"
				},
				{
					name: "sqrt_start_price",
					type: "u128"
				},
				{
					name: "locked_vesting",
					type: {
						defined: {
							name: "LockedVestingParams"
						}
					}
				},
				{
					name: "migration_fee_option",
					type: "u8"
				},
				{
					name: "token_supply",
					type: {
						option: {
							defined: {
								name: "TokenSupplyParams"
							}
						}
					}
				},
				{
					name: "creator_trading_fee_percentage",
					type: "u8"
				},
				{
					name: "token_update_authority",
					type: "u8"
				},
				{
					name: "migration_fee",
					type: {
						defined: {
							name: "MigrationFee"
						}
					}
				},
				{
					name: "migrated_pool_fee",
					type: {
						defined: {
							name: "MigratedPoolFee"
						}
					}
				},
				{
					name: "pool_creation_fee",
					docs: [
						"pool creation fee in SOL lamports value"
					],
					type: "u64"
				},
				{
					name: "partner_liquidity_vesting_info",
					type: {
						defined: {
							name: "LiquidityVestingInfoParams"
						}
					}
				},
				{
					name: "creator_liquidity_vesting_info",
					type: {
						defined: {
							name: "LiquidityVestingInfoParams"
						}
					}
				},
				{
					name: "migrated_pool_base_fee_mode",
					type: "u8"
				},
				{
					name: "migrated_pool_market_cap_fee_scheduler_params",
					type: {
						defined: {
							name: "MigratedPoolMarketCapFeeSchedulerParams"
						}
					}
				},
				{
					name: "enable_first_swap_with_min_fee",
					type: "bool"
				},
				{
					name: "compounding_fee_bps",
					type: "u16"
				},
				{
					name: "padding",
					docs: [
						"padding for future use"
					],
					type: {
						array: [
							"u8",
							2
						]
					}
				},
				{
					name: "curve",
					type: {
						vec: {
							defined: {
								name: "LiquidityDistributionParameters"
							}
						}
					}
				}
			]
		}
	},
	{
		name: "CreatePartnerMetadataParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "padding",
					type: {
						array: [
							"u8",
							96
						]
					}
				},
				{
					name: "name",
					type: "string"
				},
				{
					name: "website",
					type: "string"
				},
				{
					name: "logo",
					type: "string"
				}
			]
		}
	},
	{
		name: "CreateVirtualPoolMetadataParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "padding",
					type: {
						array: [
							"u8",
							96
						]
					}
				},
				{
					name: "name",
					type: "string"
				},
				{
					name: "website",
					type: "string"
				},
				{
					name: "logo",
					type: "string"
				}
			]
		}
	},
	{
		name: "DynamicFeeConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "initialized",
					type: "u8"
				},
				{
					name: "padding",
					type: {
						array: [
							"u8",
							7
						]
					}
				},
				{
					name: "max_volatility_accumulator",
					type: "u32"
				},
				{
					name: "variable_fee_control",
					type: "u32"
				},
				{
					name: "bin_step",
					type: "u16"
				},
				{
					name: "filter_period",
					type: "u16"
				},
				{
					name: "decay_period",
					type: "u16"
				},
				{
					name: "reduction_factor",
					type: "u16"
				},
				{
					name: "padding2",
					type: {
						array: [
							"u8",
							8
						]
					}
				},
				{
					name: "bin_step_u128",
					type: "u128"
				}
			]
		}
	},
	{
		name: "DynamicFeeParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "bin_step",
					type: "u16"
				},
				{
					name: "bin_step_u128",
					type: "u128"
				},
				{
					name: "filter_period",
					type: "u16"
				},
				{
					name: "decay_period",
					type: "u16"
				},
				{
					name: "reduction_factor",
					type: "u16"
				},
				{
					name: "max_volatility_accumulator",
					type: "u32"
				},
				{
					name: "variable_fee_control",
					type: "u32"
				}
			]
		}
	},
	{
		name: "EvtClaimCreatorTradingFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "token_base_amount",
					type: "u64"
				},
				{
					name: "token_quote_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtClaimPoolCreationFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "receiver",
					type: "pubkey"
				},
				{
					name: "creation_fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtClaimProtocolFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "token_base_amount",
					type: "u64"
				},
				{
					name: "token_quote_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtClaimProtocolLiquidityMigrationFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "token_base_amount",
					type: "u64"
				},
				{
					name: "token_quote_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtClaimTradingFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "token_base_amount",
					type: "u64"
				},
				{
					name: "token_quote_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtCloseClaimFeeOperator",
		docs: [
			"Close claim fee operator"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "claim_fee_operator",
					type: "pubkey"
				},
				{
					name: "operator",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtCreateClaimFeeOperator",
		docs: [
			"Create claim fee operator"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "operator",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtCreateConfig",
		docs: [
			"Create config"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "quote_mint",
					type: "pubkey"
				},
				{
					name: "fee_claimer",
					type: "pubkey"
				},
				{
					name: "owner",
					type: "pubkey"
				},
				{
					name: "pool_fees",
					type: {
						defined: {
							name: "PoolFeeParameters"
						}
					}
				},
				{
					name: "collect_fee_mode",
					type: "u8"
				},
				{
					name: "migration_option",
					type: "u8"
				},
				{
					name: "activation_type",
					type: "u8"
				},
				{
					name: "token_decimal",
					type: "u8"
				},
				{
					name: "token_type",
					type: "u8"
				},
				{
					name: "partner_permanent_locked_liquidity_percentage",
					type: "u8"
				},
				{
					name: "partner_liquidity_percentage",
					type: "u8"
				},
				{
					name: "creator_permanent_locked_liquidity_percentage",
					type: "u8"
				},
				{
					name: "creator_liquidity_percentage",
					type: "u8"
				},
				{
					name: "swap_base_amount",
					type: "u64"
				},
				{
					name: "migration_quote_threshold",
					type: "u64"
				},
				{
					name: "migration_base_amount",
					type: "u64"
				},
				{
					name: "sqrt_start_price",
					type: "u128"
				},
				{
					name: "locked_vesting",
					type: {
						defined: {
							name: "LockedVestingParams"
						}
					}
				},
				{
					name: "migration_fee_option",
					type: "u8"
				},
				{
					name: "fixed_token_supply_flag",
					type: "u8"
				},
				{
					name: "pre_migration_token_supply",
					type: "u64"
				},
				{
					name: "post_migration_token_supply",
					type: "u64"
				},
				{
					name: "curve",
					type: {
						vec: {
							defined: {
								name: "LiquidityDistributionParameters"
							}
						}
					}
				}
			]
		}
	},
	{
		name: "EvtCreateConfigV2",
		type: {
			kind: "struct",
			fields: [
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "quote_mint",
					type: "pubkey"
				},
				{
					name: "fee_claimer",
					type: "pubkey"
				},
				{
					name: "leftover_receiver",
					type: "pubkey"
				},
				{
					name: "config_parameters",
					type: {
						defined: {
							name: "ConfigParameters"
						}
					}
				}
			]
		}
	},
	{
		name: "EvtCreateMeteoraMigrationMetadata",
		type: {
			kind: "struct",
			fields: [
				{
					name: "virtual_pool",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtCreatorWithdrawSurplus",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "surplus_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtCurveComplete",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "base_reserve",
					type: "u64"
				},
				{
					name: "quote_reserve",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtInitializePool",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "creator",
					type: "pubkey"
				},
				{
					name: "base_mint",
					type: "pubkey"
				},
				{
					name: "pool_type",
					type: "u8"
				},
				{
					name: "activation_point",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtPartnerClaimPoolCreationFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "partner",
					type: "pubkey"
				},
				{
					name: "creation_fee",
					type: "u64"
				},
				{
					name: "fee_receiver",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtPartnerMetadata",
		docs: [
			"Create partner metadata"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "partner_metadata",
					type: "pubkey"
				},
				{
					name: "fee_claimer",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtPartnerWithdrawMigrationFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtPartnerWithdrawSurplus",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "surplus_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtSwap",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "trade_direction",
					type: "u8"
				},
				{
					name: "has_referral",
					type: "bool"
				},
				{
					name: "params",
					type: {
						defined: {
							name: "SwapParameters"
						}
					}
				},
				{
					name: "swap_result",
					type: {
						defined: {
							name: "SwapResult"
						}
					}
				},
				{
					name: "amount_in",
					type: "u64"
				},
				{
					name: "current_timestamp",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtSwap2",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "trade_direction",
					type: "u8"
				},
				{
					name: "has_referral",
					type: "bool"
				},
				{
					name: "swap_parameters",
					type: {
						defined: {
							name: "SwapParameters2"
						}
					}
				},
				{
					name: "swap_result",
					type: {
						defined: {
							name: "SwapResult2"
						}
					}
				},
				{
					name: "quote_reserve_amount",
					type: "u64"
				},
				{
					name: "migration_threshold",
					type: "u64"
				},
				{
					name: "current_timestamp",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtUpdatePoolCreator",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "creator",
					type: "pubkey"
				},
				{
					name: "new_creator",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtVirtualPoolMetadata",
		docs: [
			"Create virtual pool metadata"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "virtual_pool_metadata",
					type: "pubkey"
				},
				{
					name: "virtual_pool",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtWithdrawLeftover",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "leftover_receiver",
					type: "pubkey"
				},
				{
					name: "leftover_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtWithdrawMigrationFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "fee",
					type: "u64"
				},
				{
					name: "flag",
					type: "u8"
				}
			]
		}
	},
	{
		name: "InitializePoolParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "name",
					type: "string"
				},
				{
					name: "symbol",
					type: "string"
				},
				{
					name: "uri",
					type: "string"
				}
			]
		}
	},
	{
		name: "LiquidityDistributionConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "sqrt_price",
					type: "u128"
				},
				{
					name: "liquidity",
					type: "u128"
				}
			]
		}
	},
	{
		name: "LiquidityDistributionParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "sqrt_price",
					type: "u128"
				},
				{
					name: "liquidity",
					type: "u128"
				}
			]
		}
	},
	{
		name: "LiquidityVestingInfo",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "is_initialized",
					type: "u8"
				},
				{
					name: "vesting_percentage",
					type: "u8"
				},
				{
					name: "_padding",
					type: {
						array: [
							"u8",
							2
						]
					}
				},
				{
					name: "bps_per_period",
					type: "u16"
				},
				{
					name: "number_of_periods",
					type: "u16"
				},
				{
					name: "frequency",
					type: "u32"
				},
				{
					name: "cliff_duration_from_migration_time",
					type: "u32"
				}
			]
		}
	},
	{
		name: "LiquidityVestingInfoParams",
		type: {
			kind: "struct",
			fields: [
				{
					name: "vesting_percentage",
					type: "u8"
				},
				{
					name: "bps_per_period",
					type: "u16"
				},
				{
					name: "number_of_periods",
					type: "u16"
				},
				{
					name: "cliff_duration_from_migration_time",
					type: "u32"
				},
				{
					name: "frequency",
					type: "u32"
				}
			]
		}
	},
	{
		name: "LockEscrow",
		docs: [
			"State of lock escrow account"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "owner",
					type: "pubkey"
				},
				{
					name: "escrow_vault",
					type: "pubkey"
				},
				{
					name: "bump",
					type: "u8"
				},
				{
					name: "total_locked_amount",
					type: "u64"
				},
				{
					name: "lp_per_token",
					type: "u128"
				},
				{
					name: "unclaimed_fee_pending",
					type: "u64"
				},
				{
					name: "a_fee",
					type: "u64"
				},
				{
					name: "b_fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "LockedVestingConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "amount_per_period",
					type: "u64"
				},
				{
					name: "cliff_duration_from_migration_time",
					type: "u64"
				},
				{
					name: "frequency",
					type: "u64"
				},
				{
					name: "number_of_period",
					type: "u64"
				},
				{
					name: "cliff_unlock_amount",
					type: "u64"
				},
				{
					name: "_padding",
					type: "u64"
				}
			]
		}
	},
	{
		name: "LockedVestingParams",
		type: {
			kind: "struct",
			fields: [
				{
					name: "amount_per_period",
					type: "u64"
				},
				{
					name: "cliff_duration_from_migration_time",
					type: "u64"
				},
				{
					name: "frequency",
					type: "u64"
				},
				{
					name: "number_of_period",
					type: "u64"
				},
				{
					name: "cliff_unlock_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "MeteoraDammMigrationMetadata",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "virtual_pool",
					docs: [
						"pool"
					],
					type: "pubkey"
				},
				{
					name: "padding_0",
					docs: [
						"!!! BE CAREFUL to use tombstone field, previous is pool creator"
					],
					type: {
						array: [
							"u8",
							32
						]
					}
				},
				{
					name: "partner",
					docs: [
						"partner"
					],
					type: "pubkey"
				},
				{
					name: "lp_mint",
					docs: [
						"lp mint"
					],
					type: "pubkey"
				},
				{
					name: "partner_locked_liquidity",
					docs: [
						"partner locked liquidity"
					],
					type: "u64"
				},
				{
					name: "partner_liquidity",
					docs: [
						"partner liquidity"
					],
					type: "u64"
				},
				{
					name: "creator_locked_liquidity",
					docs: [
						"creator locked liquidity"
					],
					type: "u64"
				},
				{
					name: "creator_liquidity",
					docs: [
						"creator liquidity"
					],
					type: "u64"
				},
				{
					name: "_padding_0",
					docs: [
						"padding"
					],
					type: "u8"
				},
				{
					name: "creator_locked_status",
					docs: [
						"flag to check whether liquidity token is locked for creator"
					],
					type: "u8"
				},
				{
					name: "partner_locked_status",
					docs: [
						"flag to check whether liquidity token is locked for partner"
					],
					type: "u8"
				},
				{
					name: "creator_claim_status",
					docs: [
						"flag to check whether creator has claimed liquidity token"
					],
					type: "u8"
				},
				{
					name: "partner_claim_status",
					docs: [
						"flag to check whether partner has claimed liquidity token"
					],
					type: "u8"
				},
				{
					name: "_padding",
					docs: [
						"Reserve"
					],
					type: {
						array: [
							"u8",
							107
						]
					}
				}
			]
		}
	},
	{
		name: "MigratedPoolFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "collect_fee_mode",
					type: "u8"
				},
				{
					name: "dynamic_fee",
					type: "u8"
				},
				{
					name: "pool_fee_bps",
					type: "u16"
				}
			]
		}
	},
	{
		name: "MigratedPoolMarketCapFeeSchedulerParams",
		type: {
			kind: "struct",
			fields: [
				{
					name: "number_of_period",
					type: "u16"
				},
				{
					name: "sqrt_price_step_bps",
					type: "u16"
				},
				{
					name: "scheduler_expiration_duration",
					type: "u32"
				},
				{
					name: "reduction_factor",
					type: "u64"
				}
			]
		}
	},
	{
		name: "MigrationFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "fee_percentage",
					type: "u8"
				},
				{
					name: "creator_fee_percentage",
					type: "u8"
				}
			]
		}
	},
	{
		name: "Operator",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "whitelisted_address",
					type: "pubkey"
				},
				{
					name: "permission",
					type: "u128"
				},
				{
					name: "padding",
					type: {
						array: [
							"u64",
							2
						]
					}
				}
			]
		}
	},
	{
		name: "PartnerMetadata",
		docs: [
			"Metadata for a partner."
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "fee_claimer",
					docs: [
						"fee claimer"
					],
					type: "pubkey"
				},
				{
					name: "padding",
					docs: [
						"padding for future use"
					],
					type: {
						array: [
							"u128",
							6
						]
					}
				},
				{
					name: "name",
					docs: [
						"Name of partner."
					],
					type: "string"
				},
				{
					name: "website",
					docs: [
						"Website of partner."
					],
					type: "string"
				},
				{
					name: "logo",
					docs: [
						"Logo of partner"
					],
					type: "string"
				}
			]
		}
	},
	{
		name: "PoolConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "quote_mint",
					docs: [
						"quote mint"
					],
					type: "pubkey"
				},
				{
					name: "fee_claimer",
					docs: [
						"Address to get the fee"
					],
					type: "pubkey"
				},
				{
					name: "leftover_receiver",
					docs: [
						"Address to receive extra base token after migration, in case token is fixed supply"
					],
					type: "pubkey"
				},
				{
					name: "pool_fees",
					docs: [
						"Pool fee"
					],
					type: {
						defined: {
							name: "PoolFeesConfig"
						}
					}
				},
				{
					name: "partner_liquidity_vesting_info",
					type: {
						defined: {
							name: "LiquidityVestingInfo"
						}
					}
				},
				{
					name: "creator_liquidity_vesting_info",
					type: {
						defined: {
							name: "LiquidityVestingInfo"
						}
					}
				},
				{
					name: "padding_0",
					docs: [
						"Padding for future use"
					],
					type: {
						array: [
							"u8",
							14
						]
					}
				},
				{
					name: "padding_1",
					docs: [
						"Previously was protocol and referral fee percent. Beware of tombstone."
					],
					type: "u16"
				},
				{
					name: "collect_fee_mode",
					docs: [
						"Collect fee mode"
					],
					type: "u8"
				},
				{
					name: "migration_option",
					docs: [
						"migration option"
					],
					type: "u8"
				},
				{
					name: "activation_type",
					docs: [
						"whether mode slot or timestamp"
					],
					type: "u8"
				},
				{
					name: "token_decimal",
					docs: [
						"token decimals"
					],
					type: "u8"
				},
				{
					name: "version",
					docs: [
						"version"
					],
					type: "u8"
				},
				{
					name: "token_type",
					docs: [
						"token type of base token"
					],
					type: "u8"
				},
				{
					name: "quote_token_flag",
					docs: [
						"quote token flag"
					],
					type: "u8"
				},
				{
					name: "partner_permanent_locked_liquidity_percentage",
					docs: [
						"partner locked liquidity percentage"
					],
					type: "u8"
				},
				{
					name: "partner_liquidity_percentage",
					docs: [
						"partner liquidity percentage"
					],
					type: "u8"
				},
				{
					name: "creator_permanent_locked_liquidity_percentage",
					docs: [
						"creator post migration fee percentage"
					],
					type: "u8"
				},
				{
					name: "creator_liquidity_percentage",
					docs: [
						"creator liquidity percentage"
					],
					type: "u8"
				},
				{
					name: "migration_fee_option",
					docs: [
						"migration fee option"
					],
					type: "u8"
				},
				{
					name: "fixed_token_supply_flag",
					docs: [
						"flag to indicate whether token is dynamic supply (0) or fixed supply (1)"
					],
					type: "u8"
				},
				{
					name: "creator_trading_fee_percentage",
					docs: [
						"creator trading fee percentage"
					],
					type: "u8"
				},
				{
					name: "token_update_authority",
					docs: [
						"token update authority"
					],
					type: "u8"
				},
				{
					name: "migration_fee_percentage",
					docs: [
						"migration fee percentage"
					],
					type: "u8"
				},
				{
					name: "creator_migration_fee_percentage",
					docs: [
						"creator migration fee percentage"
					],
					type: "u8"
				},
				{
					name: "padding_2",
					type: {
						array: [
							"u8",
							7
						]
					}
				},
				{
					name: "swap_base_amount",
					docs: [
						"swap base amount"
					],
					type: "u64"
				},
				{
					name: "migration_quote_threshold",
					docs: [
						"migration quote threshold (in quote token)"
					],
					type: "u64"
				},
				{
					name: "migration_base_threshold",
					docs: [
						"migration base threshold (in base token)"
					],
					type: "u64"
				},
				{
					name: "migration_sqrt_price",
					docs: [
						"migration sqrt price"
					],
					type: "u128"
				},
				{
					name: "locked_vesting_config",
					docs: [
						"locked vesting config"
					],
					type: {
						defined: {
							name: "LockedVestingConfig"
						}
					}
				},
				{
					name: "pre_migration_token_supply",
					docs: [
						"pre migration token supply"
					],
					type: "u64"
				},
				{
					name: "post_migration_token_supply",
					docs: [
						"post migration token supply"
					],
					type: "u64"
				},
				{
					name: "migrated_collect_fee_mode",
					docs: [
						"migrated pool collect fee mode"
					],
					type: "u8"
				},
				{
					name: "migrated_dynamic_fee",
					docs: [
						"migrated dynamic fee option."
					],
					type: "u8"
				},
				{
					name: "migrated_pool_fee_bps",
					docs: [
						"migrated pool fee in bps"
					],
					type: "u16"
				},
				{
					name: "migrated_pool_base_fee_mode",
					type: "u8"
				},
				{
					name: "enable_first_swap_with_min_fee",
					type: "u8"
				},
				{
					name: "migrated_compounding_fee_bps",
					docs: [
						"compounding fee bps for migrated DAMM v2 pool, should only be non-zero if migrated_collect_fee_mode is 2 (Compounding)"
					],
					type: "u16"
				},
				{
					name: "pool_creation_fee",
					docs: [
						"pool creation fee in lamports value"
					],
					type: "u64"
				},
				{
					name: "migrated_pool_base_fee_bytes",
					docs: [
						"serialized MigratedPoolMarketCapFeeSchedulerParams, only used when migrated_pool_base_fee_mode is market cap scheduler"
					],
					type: {
						array: [
							"u8",
							16
						]
					}
				},
				{
					name: "sqrt_start_price",
					docs: [
						"minimum price"
					],
					type: "u128"
				},
				{
					name: "curve",
					docs: [
						"curve, only use 20 point firstly, we can extend that latter"
					],
					type: {
						array: [
							{
								defined: {
									name: "LiquidityDistributionConfig"
								}
							},
							20
						]
					}
				}
			]
		}
	},
	{
		name: "PoolFeeParameters",
		docs: [
			"Information regarding fee charges"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "base_fee",
					docs: [
						"Base fee"
					],
					type: {
						defined: {
							name: "BaseFeeParameters"
						}
					}
				},
				{
					name: "dynamic_fee",
					docs: [
						"dynamic fee"
					],
					type: {
						option: {
							defined: {
								name: "DynamicFeeParameters"
							}
						}
					}
				}
			]
		}
	},
	{
		name: "PoolFees",
		docs: [
			"Information regarding fee charges"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "trade_fee_numerator",
					type: "u64"
				},
				{
					name: "trade_fee_denominator",
					type: "u64"
				},
				{
					name: "protocol_trade_fee_numerator",
					type: "u64"
				},
				{
					name: "protocol_trade_fee_denominator",
					type: "u64"
				}
			]
		}
	},
	{
		name: "PoolFeesConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "base_fee",
					type: {
						defined: {
							name: "BaseFeeConfig"
						}
					}
				},
				{
					name: "dynamic_fee",
					type: {
						defined: {
							name: "DynamicFeeConfig"
						}
					}
				}
			]
		}
	},
	{
		name: "PoolMetrics",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "total_protocol_base_fee",
					type: "u64"
				},
				{
					name: "total_protocol_quote_fee",
					type: "u64"
				},
				{
					name: "total_trading_base_fee",
					type: "u64"
				},
				{
					name: "total_trading_quote_fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "SwapParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "amount_in",
					type: "u64"
				},
				{
					name: "minimum_amount_out",
					type: "u64"
				}
			]
		}
	},
	{
		name: "SwapParameters2",
		type: {
			kind: "struct",
			fields: [
				{
					name: "amount_0",
					docs: [
						"When it's exact in, partial fill, this will be amount_in. When it's exact out, this will be amount_out"
					],
					type: "u64"
				},
				{
					name: "amount_1",
					docs: [
						"When it's exact in, partial fill, this will be minimum_amount_out. When it's exact out, this will be maximum_amount_in"
					],
					type: "u64"
				},
				{
					name: "swap_mode",
					docs: [
						"Swap mode, refer [SwapMode]"
					],
					type: "u8"
				}
			]
		}
	},
	{
		name: "SwapResult",
		docs: [
			"Encodes all results of swapping"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "actual_input_amount",
					type: "u64"
				},
				{
					name: "output_amount",
					type: "u64"
				},
				{
					name: "next_sqrt_price",
					type: "u128"
				},
				{
					name: "trading_fee",
					type: "u64"
				},
				{
					name: "protocol_fee",
					type: "u64"
				},
				{
					name: "referral_fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "SwapResult2",
		type: {
			kind: "struct",
			fields: [
				{
					name: "included_fee_input_amount",
					type: "u64"
				},
				{
					name: "excluded_fee_input_amount",
					type: "u64"
				},
				{
					name: "amount_left",
					type: "u64"
				},
				{
					name: "output_amount",
					type: "u64"
				},
				{
					name: "next_sqrt_price",
					type: "u128"
				},
				{
					name: "trading_fee",
					type: "u64"
				},
				{
					name: "protocol_fee",
					type: "u64"
				},
				{
					name: "referral_fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "TokenSupplyParams",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pre_migration_token_supply",
					docs: [
						"pre migration token supply"
					],
					type: "u64"
				},
				{
					name: "post_migration_token_supply",
					docs: [
						"post migration token supply",
						"because DBC allow user to swap over the migration quote threshold, so in extreme case user may swap more than allowed buffer on curve",
						"that result the total supply in post migration may be increased a bit (between pre_migration_token_supply and post_migration_token_supply)"
					],
					type: "u64"
				}
			]
		}
	},
	{
		name: "VirtualPool",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "volatility_tracker",
					docs: [
						"volatility tracker"
					],
					type: {
						defined: {
							name: "VolatilityTracker"
						}
					}
				},
				{
					name: "config",
					docs: [
						"config key"
					],
					type: "pubkey"
				},
				{
					name: "creator",
					docs: [
						"creator"
					],
					type: "pubkey"
				},
				{
					name: "base_mint",
					docs: [
						"base mint"
					],
					type: "pubkey"
				},
				{
					name: "base_vault",
					docs: [
						"base vault"
					],
					type: "pubkey"
				},
				{
					name: "quote_vault",
					docs: [
						"quote vault"
					],
					type: "pubkey"
				},
				{
					name: "base_reserve",
					docs: [
						"base reserve"
					],
					type: "u64"
				},
				{
					name: "quote_reserve",
					docs: [
						"quote reserve"
					],
					type: "u64"
				},
				{
					name: "protocol_base_fee",
					docs: [
						"protocol base fee"
					],
					type: "u64"
				},
				{
					name: "protocol_quote_fee",
					docs: [
						"protocol quote fee"
					],
					type: "u64"
				},
				{
					name: "partner_base_fee",
					docs: [
						"partner base fee"
					],
					type: "u64"
				},
				{
					name: "partner_quote_fee",
					docs: [
						"trading quote fee"
					],
					type: "u64"
				},
				{
					name: "sqrt_price",
					docs: [
						"current price"
					],
					type: "u128"
				},
				{
					name: "activation_point",
					docs: [
						"Activation point"
					],
					type: "u64"
				},
				{
					name: "pool_type",
					docs: [
						"pool type, spl token or token2022"
					],
					type: "u8"
				},
				{
					name: "is_migrated",
					docs: [
						"is migrated"
					],
					type: "u8"
				},
				{
					name: "is_partner_withdraw_surplus",
					docs: [
						"is partner withdraw surplus"
					],
					type: "u8"
				},
				{
					name: "is_protocol_withdraw_surplus",
					docs: [
						"is protocol withdraw surplus"
					],
					type: "u8"
				},
				{
					name: "migration_progress",
					docs: [
						"migration progress"
					],
					type: "u8"
				},
				{
					name: "is_withdraw_leftover",
					docs: [
						"is withdraw leftover"
					],
					type: "u8"
				},
				{
					name: "is_creator_withdraw_surplus",
					docs: [
						"is creator withdraw surplus"
					],
					type: "u8"
				},
				{
					name: "migration_fee_withdraw_status",
					docs: [
						"migration fee withdraw status",
						"bit 1 (0b010) creator",
						"bit 2 (0b100) partner"
					],
					type: "u8"
				},
				{
					name: "metrics",
					docs: [
						"pool metrics"
					],
					type: {
						defined: {
							name: "PoolMetrics"
						}
					}
				},
				{
					name: "finish_curve_timestamp",
					docs: [
						"The time curve is finished"
					],
					type: "u64"
				},
				{
					name: "creator_base_fee",
					docs: [
						"creator base fee"
					],
					type: "u64"
				},
				{
					name: "creator_quote_fee",
					docs: [
						"creator quote fee"
					],
					type: "u64"
				},
				{
					name: "legacy_creation_fee_bits",
					docs: [
						"legacy creation fee bits, we dont use this now"
					],
					type: "u8"
				},
				{
					name: "creation_fee_bits",
					docs: [
						"pool creation fee claim status"
					],
					type: "u8"
				},
				{
					name: "has_swap",
					docs: [
						"Cached flag"
					],
					type: "u8"
				},
				{
					name: "_padding_0",
					docs: [
						"Padding for further use"
					],
					type: {
						array: [
							"u8",
							5
						]
					}
				},
				{
					name: "protocol_liquidity_migration_fee_bps",
					type: "u16"
				},
				{
					name: "_padding_1",
					type: {
						array: [
							"u8",
							6
						]
					}
				},
				{
					name: "protocol_migration_base_fee_amount",
					type: "u64"
				},
				{
					name: "protocol_migration_quote_fee_amount",
					type: "u64"
				},
				{
					name: "_padding_2",
					docs: [
						"Padding for further use"
					],
					type: {
						array: [
							"u64",
							3
						]
					}
				}
			]
		}
	},
	{
		name: "VirtualPoolMetadata",
		docs: [
			"Metadata for a virtual pool."
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "virtual_pool",
					docs: [
						"virtual pool"
					],
					type: "pubkey"
				},
				{
					name: "padding",
					docs: [
						"padding for future use"
					],
					type: {
						array: [
							"u128",
							6
						]
					}
				},
				{
					name: "name",
					docs: [
						"Name of project."
					],
					type: "string"
				},
				{
					name: "website",
					docs: [
						"Website of project."
					],
					type: "string"
				},
				{
					name: "logo",
					docs: [
						"Logo of project"
					],
					type: "string"
				}
			]
		}
	},
	{
		name: "VolatilityTracker",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "last_update_timestamp",
					type: "u64"
				},
				{
					name: "padding",
					type: {
						array: [
							"u8",
							8
						]
					}
				},
				{
					name: "sqrt_price_reference",
					type: "u128"
				},
				{
					name: "volatility_accumulator",
					type: "u128"
				},
				{
					name: "volatility_reference",
					type: "u128"
				}
			]
		}
	}
];
var idl = {
	address: address,
	metadata: metadata,
	instructions: instructions,
	accounts: accounts,
	events: events,
	errors: errors,
	types: types
};

export { ActivationType, BASE_ADDRESS, BIN_STEP_BPS_DEFAULT, BIN_STEP_BPS_U128_DEFAULT, BaseFee, BaseFeeHandler, BaseFeeMode, BaseFeeParams, BuildCurveParams, BuildCurveWithCustomSqrtPricesParams, BuildCurveWithLiquidityWeightsParams, BuildCurveWithMarketCapParams, BuildCurveWithMidPriceParams, BuildCurveWithTwoSegmentsParams, ClaimCreatorTradingFee2Params, ClaimCreatorTradingFeeParams, ClaimPartnerPoolCreationFeeParams, ClaimTradingFee2Params, ClaimTradingFeeParams, CollectFeeMode, ConfigParameters, CreateConfigAndPoolParams, CreateConfigAndPoolWithFirstBuyParams, CreateConfigParams, CreateDammV1MigrationMetadataParams, CreateLockerParams, CreatePartnerMetadataParams, CreatePoolParams, CreatePoolWithFirstBuyParams, CreatePoolWithPartnerAndCreatorFirstBuyParams, CreateVirtualPoolMetadataParams, CreatorService, CreatorWithdrawSurplusParams, DAMM_V1_MIGRATION_FEE_ADDRESS, DAMM_V1_PROGRAM_ID, DAMM_V2_MIGRATION_FEE_ADDRESS, DAMM_V2_PROGRAM_ID, DEFAULT_LIQUIDITY_VESTING_INFO_PARAMS, DEFAULT_MIGRATED_POOL_FEE_PARAMS, DEFAULT_MIGRATED_POOL_MARKET_CAP_FEE_SCHEDULER_PARAMS, DYNAMIC_BONDING_CURVE_PROGRAM_ID, DYNAMIC_FEE_DECAY_PERIOD_DEFAULT, DYNAMIC_FEE_FILTER_PERIOD_DEFAULT, DYNAMIC_FEE_REDUCTION_FACTOR_DEFAULT, DYNAMIC_FEE_ROUNDING_OFFSET, DYNAMIC_FEE_SCALING_FACTOR, DammLpTokenParams, DammV2BaseFeeMode, DynamicBondingCurveClient, idl as DynamicBondingCurveIdl, DynamicBondingCurveProgram, DynamicBondingCurve as DynamicBondingCurveTypes, DynamicFeeConfig, DynamicFeeParameters, FEE_DENOMINATOR, FeeMode, FeeOnAmountResult, FeeRateLimiter, FeeScheduler, HOST_FEE_PERCENT, LOCKER_PROGRAM_ID, LiquidityDistributionParameters, LiquidityVestingInfoParameters, LiquidityVestingInfoParams, LockEscrow, LockedVestingParameters, MAX_BASIS_POINT, MAX_CREATOR_MIGRATION_FEE_PERCENTAGE, MAX_CURVE_POINT, MAX_FEE_BPS, MAX_FEE_NUMERATOR, MAX_LOCK_DURATION_IN_SECONDS, MAX_MIGRATED_POOL_FEE_BPS, MAX_MIGRATION_FEE_PERCENTAGE, MAX_POOL_CREATION_FEE, MAX_PRICE_CHANGE_BPS_DEFAULT, MAX_RATE_LIMITER_DURATION_IN_SECONDS, MAX_RATE_LIMITER_DURATION_IN_SLOTS, MAX_SQRT_PRICE, METAPLEX_PROGRAM_ID, MIN_FEE_BPS, MIN_FEE_NUMERATOR, MIN_LOCKED_LIQUIDITY_BPS, MIN_MIGRATED_POOL_FEE_BPS, MIN_POOL_CREATION_FEE, MIN_SQRT_PRICE, MeteoraDammMigrationMetadata, MigrateToDammV1Params, MigrateToDammV2Params, MigrateToDammV2Response, MigratedPoolFee, MigratedPoolFeeConfig, MigratedPoolFeeResult, MigratedPoolMarketCapFeeSchedulerParameters, MigrationFeeOption, MigrationOption, MigrationService, OFFSET, ONE_Q64, PROTOCOL_FEE_PERCENT, PROTOCOL_POOL_CREATION_FEE_PERCENT, PartnerMetadata, PartnerService, PartnerWithdrawSurplusParams, PoolConfig, PoolFeeParameters, PoolFeesConfig, PoolService, RESOLUTION, Rounding, SECONDS_PER_DAY, SWAP_BUFFER_PERCENTAGE, SafeMath, StateService, Swap2Params, SwapAmount, SwapParams, SwapQuote2Params, SwapQuote2Result, SwapQuoteParams, SwapQuoteResult, SwapResult, SwapResult2, TokenDecimal, TokenType, TokenUpdateAuthorityOption, TradeDirection, TransferPoolCreatorParams, U128_MAX, U16_MAX, U24_MAX, U64_MAX, VAULT_PROGRAM_ID, VirtualPool, VirtualPoolMetadata, VolatilityTracker, WithdrawLeftoverParams, WithdrawMigrationFeeParams, bpsToFeeNumerator, buildCurve, buildCurveWithCustomSqrtPrices, buildCurveWithLiquidityWeights, buildCurveWithMarketCap, buildCurveWithMidPrice, buildCurveWithTwoSegments, calculateAdjustedPercentageSupplyOnMigration, calculateBaseToQuoteFromAmountIn, calculateBaseToQuoteFromAmountOut, calculateFeeSchedulerEndingBaseFeeBps, calculateLockedLiquidityBpsAtTime, calculateQuoteToBaseFromAmountIn, calculateQuoteToBaseFromAmountOut, checkRateLimiterApplied, cleanUpTokenAccountTx, computeSqrtPriceStepBps, convertDecimalToBN, convertToLamports, createDammV1Program, createDammV2Program, createDbcProgram, createInitializePermissionlessDynamicVaultIx, createLockEscrowIx, createProgramAccountFilter, createSqrtPrices, createVaultProgram, deriveBaseKeyForLocker, deriveDammV1EventAuthority, deriveDammV1LockEscrowAddress, deriveDammV1LpMintAddress, deriveDammV1MigrationMetadataAddress, deriveDammV1PoolAddress, deriveDammV1PoolAuthority, deriveDammV1ProtocolFeeAddress, deriveDammV1VaultLPAddress, deriveDammV2EventAuthority, deriveDammV2LockEscrowAddress, deriveDammV2MigrationMetadataAddress, deriveDammV2PoolAddress, deriveDammV2PoolAuthority, deriveDammV2TokenVaultAddress, deriveDbcEventAuthority, deriveDbcPoolAddress, deriveDbcPoolAuthority, deriveDbcPoolMetadata, deriveDbcTokenVaultAddress, deriveEscrow, deriveLockerEventAuthority, deriveMintMetadata, derivePartnerMetadata, derivePositionAddress, derivePositionNftAccount, deriveTokenVaultKey, deriveVaultAddress, deriveVaultLpMintAddress, deriveVaultPdas, feeNumeratorToBps, findAssociatedTokenAddress, fromDecimalToBN, getAccountCreationTimestamp, getAccountCreationTimestamps, getAccountData, getBaseFeeHandler, getBaseFeeNumerator, getBaseFeeNumeratorByPeriod, getBaseFeeParams, getBaseTokenForSwap, getCheckedAmounts, getCurrentPoint, getCurveBreakdown, getDeltaAmountBaseUnsigned, getDeltaAmountBaseUnsigned256, getDeltaAmountBaseUnsignedUnchecked, getDeltaAmountQuoteUnsigned, getDeltaAmountQuoteUnsigned256, getDeltaAmountQuoteUnsignedUnchecked, getDynamicFeeParams, getExcludedFeeAmount, getFeeMode, getFeeNumeratorFromExcludedAmount, getFeeNumeratorFromIncludedAmount, getFeeNumeratorOnExponentialFeeScheduler, getFeeNumeratorOnLinearFeeScheduler, getFeeOnAmount, getFeeSchedulerMaxBaseFeeNumerator, getFeeSchedulerMinBaseFeeNumerator, getFeeSchedulerParams, getFirstCurve, getFirstKey, getIncludedFeeAmount, getInitialLiquidityFromDeltaBase, getInitialLiquidityFromDeltaQuote, getLiquidity, getLiquidityVestingInfoParams, getLockedVestingParams, getMaxIndex, getMaxOutAmountWithMinBaseFee, getMigratedPoolFeeParams, getMigratedPoolMarketCapFeeSchedulerParams, getMigrationBaseToken, getMigrationQuoteAmount, getMigrationQuoteAmountFromMigrationQuoteThreshold, getMigrationQuoteThresholdFromMigrationQuoteAmount, getMigrationThresholdPrice, getNextSqrtPriceFromBaseAmountInRoundingUp, getNextSqrtPriceFromBaseAmountOutRoundingUp, getNextSqrtPriceFromInput, getNextSqrtPriceFromOutput, getNextSqrtPriceFromQuoteAmountInRoundingDown, getNextSqrtPriceFromQuoteAmountOutRoundingDown, getOrCreateATAInstruction, getPercentageSupplyOnMigration, getPriceFromSqrtPrice, getProtocolMigrationFee, getQuoteReserveFromNextSqrtPrice, getRateLimiterExcludedFeeAmount, getRateLimiterMinBaseFeeNumerator, getRateLimiterParams, getSecondKey, getSqrtPriceFromMarketCap, getSqrtPriceFromPrice, getStartingBaseFeeBpsFromBaseFeeParams, getSwapAmountWithBuffer, getSwapResult, getSwapResultFromExactInput, getSwapResultFromExactOutput, getSwapResultFromPartialInput, getTokenDecimals, getTokenProgram, getTokenType, getTokenomics, getTotalFeeNumerator, getTotalFeeNumeratorFromExcludedFeeAmount, getTotalFeeNumeratorFromIncludedFeeAmount, getTotalSupplyFromCurve, getTotalTokenSupply, getTotalVestingAmount, getTwoCurve, getVariableFeeNumerator, getVestingLockedLiquidityBpsAtNSeconds, isDefaultLockedVesting, isDynamicFeeEnabled, isNativeSol, isNonZeroRateLimiter, isRateLimiterApplied, isZeroRateLimiter, mulDiv, mulShr, pow, prepareSwapAmountParam, prepareTokenAccountTx, splitFees, sqrt, swapQuote, swapQuoteExactIn, swapQuoteExactOut, swapQuotePartialFill, toNumerator, unwrapSOLInstruction, validateActivationType, validateBalance, validateBaseTokenType, validateCollectFeeMode, validateCompoundingFeeBps, validateConfigParameters, validateCurve, validateDynamicFee, validateFeeRateLimiter, validateFeeScheduler, validateLPPercentages, validateLiquidityVestingInfo, validateMarketCapFeeSchedulerRequiresPoolFeeBps, validateMigratedCollectFeeMode, validateMigratedPoolBaseFeeMode, validateMigratedPoolFee, validateMigrationAndTokenType, validateMigrationFee, validateMigrationFeeOption, validateMinimumLockedLiquidity, validatePoolCreationFee, validatePoolFees, validateSwapAmount, validateTokenDecimals, validateTokenSupply, validateTokenUpdateAuthorityOptions, wrapSOLInstruction };
