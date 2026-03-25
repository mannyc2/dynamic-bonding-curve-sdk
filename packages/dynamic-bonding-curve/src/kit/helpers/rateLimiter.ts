import type BN from 'bn.js'
import { TradeDirection } from '../enums'

/**
 * Check if rate limiter is applied based on current conditions.
 *
 * Duplicated from src/math/poolFees/rateLimiter.ts so the Kit tree
 * avoids the transitive @solana/web3.js import that the root math
 * module pulls in via src/constants.ts.
 */
export function isRateLimiterApplied(
    currentPoint: BN,
    activationPoint: BN,
    tradeDirection: TradeDirection,
    maxLimiterDuration: BN,
    referenceAmount: BN,
    feeIncrementBps: BN
): boolean {
    if (
        referenceAmount.isZero() &&
        maxLimiterDuration.isZero() &&
        feeIncrementBps.isZero()
    ) {
        return false
    }

    if (tradeDirection === TradeDirection.BaseToQuote) {
        return false
    }

    const lastEffectiveRateLimiterPoint =
        activationPoint.add(maxLimiterDuration)
    return currentPoint.lte(lastEffectiveRateLimiterPoint)
}
