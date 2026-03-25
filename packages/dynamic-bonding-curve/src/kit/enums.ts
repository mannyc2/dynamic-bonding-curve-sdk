/**
 * Kit-owned copies of pure enums from the DBC IDL.
 *
 * These are duplicated here so that the Kit tree has zero transitive
 * imports of @solana/web3.js at runtime.  The source of truth is
 * the on-chain IDL; these values are stable and change only when
 * the program is upgraded.
 */

export enum ActivationType {
    Slot = 0,
    Timestamp = 1,
}

export enum TokenType {
    SPL = 0,
    Token2022 = 1,
}

export enum SwapMode {
    ExactIn = 0,
    PartialFill = 1,
    ExactOut = 2,
}

export enum BaseFeeMode {
    FeeSchedulerLinear = 0,
    FeeSchedulerExponential = 1,
    RateLimiter = 2,
}

export enum TradeDirection {
    BaseToQuote = 0,
    QuoteToBase = 1,
}
