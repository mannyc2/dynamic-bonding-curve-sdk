import { type Address, type Rpc, type SolanaRpcApi } from '@solana/kit'
import {
    fetchVirtualPool,
    fetchMaybeVirtualPool,
    fetchPoolConfig,
    fetchMaybePoolConfig,
    type VirtualPool,
    type PoolConfig,
} from '../generated/accounts'
import type { Account, MaybeAccount } from '@solana/kit'

type KitRpc = Rpc<SolanaRpcApi>

const Q128 = 2n ** 128n
const LAMPORTS_PER_SOL = 1_000_000_000n

export interface KitPoolState {
    /** Current token price in SOL */
    price: number
    /** SOL reserve (in SOL, not lamports) */
    quoteReserve: number
    /** Token reserve (in whole tokens) */
    baseReserve: number
    /** Whether the pool has graduated */
    graduated: boolean
    /** Progress toward graduation as 0..1 */
    progress: number
    /** Base mint address */
    baseMint: string
    /** Config address */
    config: string
}

export interface KitFeeBreakdown {
    creator: {
        unclaimedBaseFee: bigint
        unclaimedQuoteFee: bigint
        claimedBaseFee: bigint
        claimedQuoteFee: bigint
        totalBaseFee: bigint
        totalQuoteFee: bigint
    }
    partner: {
        unclaimedBaseFee: bigint
        unclaimedQuoteFee: bigint
        claimedBaseFee: bigint
        claimedQuoteFee: bigint
        totalBaseFee: bigint
        totalQuoteFee: bigint
    }
}

export class DynamicBondingCurveKitStateService {
    constructor(private readonly rpc: KitRpc) {}

    async getPool<TAddress extends string = string>(
        poolAddress: Address<TAddress>
    ): Promise<Account<VirtualPool, TAddress>> {
        return fetchVirtualPool(this.rpc, poolAddress)
    }

    async getMaybePool<TAddress extends string = string>(
        poolAddress: Address<TAddress>
    ): Promise<MaybeAccount<VirtualPool, TAddress>> {
        return fetchMaybeVirtualPool(this.rpc, poolAddress)
    }

    async getPoolConfig<TAddress extends string = string>(
        configAddress: Address<TAddress>
    ): Promise<Account<PoolConfig, TAddress>> {
        return fetchPoolConfig(this.rpc, configAddress)
    }

    async getMaybePoolConfig<TAddress extends string = string>(
        configAddress: Address<TAddress>
    ): Promise<MaybeAccount<PoolConfig, TAddress>> {
        return fetchMaybePoolConfig(this.rpc, configAddress)
    }

    /**
     * Get computed pool state including price, reserves, and graduation progress.
     */
    async getPoolState(
        poolAddress: Address,
        baseDecimals: number,
        quoteDecimals: number
    ): Promise<KitPoolState> {
        const pool = await fetchVirtualPool(this.rpc, poolAddress)
        const config = await fetchPoolConfig(this.rpc, pool.data.config)

        const price = getPriceFromSqrtPriceBigint(
            pool.data.sqrtPrice,
            baseDecimals,
            quoteDecimals
        )

        const threshold = config.data.migrationQuoteThreshold
        const progress =
            threshold > 0n
                ? Math.min(
                      Number(pool.data.quoteReserve) / Number(threshold),
                      1.0
                  )
                : 0

        return {
            price,
            quoteReserve:
                Number(pool.data.quoteReserve) / Number(LAMPORTS_PER_SOL),
            baseReserve: Number(pool.data.baseReserve) / 10 ** baseDecimals,
            graduated: progress >= 1.0,
            progress,
            baseMint: pool.data.baseMint,
            config: pool.data.config,
        }
    }

    /**
     * Get fee breakdown for creator and partner from pool account data.
     */
    async getPoolFeeBreakdown(poolAddress: Address): Promise<KitFeeBreakdown> {
        const pool = await fetchVirtualPool(this.rpc, poolAddress)
        const config = await fetchPoolConfig(this.rpc, pool.data.config)

        const creatorPct = BigInt(config.data.creatorTradingFeePercentage)
        const totalBaseFee = pool.data.metrics.totalTradingBaseFee
        const totalQuoteFee = pool.data.metrics.totalTradingQuoteFee

        const creatorTotalBase = (totalBaseFee * creatorPct) / 100n
        const creatorTotalQuote = (totalQuoteFee * creatorPct) / 100n
        const partnerTotalBase = totalBaseFee - creatorTotalBase
        const partnerTotalQuote = totalQuoteFee - creatorTotalQuote

        return {
            creator: {
                unclaimedBaseFee: pool.data.creatorBaseFee,
                unclaimedQuoteFee: pool.data.creatorQuoteFee,
                claimedBaseFee: creatorTotalBase - pool.data.creatorBaseFee,
                claimedQuoteFee: creatorTotalQuote - pool.data.creatorQuoteFee,
                totalBaseFee: creatorTotalBase,
                totalQuoteFee: creatorTotalQuote,
            },
            partner: {
                unclaimedBaseFee: pool.data.partnerBaseFee,
                unclaimedQuoteFee: pool.data.partnerQuoteFee,
                claimedBaseFee: partnerTotalBase - pool.data.partnerBaseFee,
                claimedQuoteFee: partnerTotalQuote - pool.data.partnerQuoteFee,
                totalBaseFee: partnerTotalBase,
                totalQuoteFee: partnerTotalQuote,
            },
        }
    }

    /**
     * Get quote token curve progress (0..1).
     */
    async getQuoteTokenCurveProgress(poolAddress: Address): Promise<number> {
        const pool = await fetchVirtualPool(this.rpc, poolAddress)
        const config = await fetchPoolConfig(this.rpc, pool.data.config)

        const threshold = config.data.migrationQuoteThreshold
        if (threshold === 0n) return 0

        const progress = Number(pool.data.quoteReserve) / Number(threshold)
        return Math.min(Math.max(progress, 0), 1)
    }
}

/**
 * Convert sqrt price (Q64.128 fixed-point) to a floating-point token price.
 * Pure bigint math — no BN or Decimal dependency.
 */
function getPriceFromSqrtPriceBigint(
    sqrtPrice: bigint,
    baseDecimals: number,
    quoteDecimals: number
): number {
    // lamportPrice = sqrtPrice^2 / 2^128
    // tokenPrice = lamportPrice * 10^(baseDecimals - quoteDecimals)
    //
    // To avoid floating-point loss, we scale up before dividing:
    // price = (sqrtPrice^2 * 10^precision) / (2^128) * 10^(baseDecimals - quoteDecimals) / 10^precision
    const precision = 18
    const scale = 10n ** BigInt(precision)
    const sqrtPriceSq = sqrtPrice * sqrtPrice
    const scaledLamportPrice = (sqrtPriceSq * scale) / Q128

    const decimalShift = baseDecimals - quoteDecimals
    const lamportPriceFloat = Number(scaledLamportPrice) / Number(scale)
    return lamportPriceFloat * 10 ** decimalShift
}
