import {
    type Address,
    isTransactionSigner,
    type TransactionSigner,
} from '@solana/kit'
import type { KitAddressOrSignerInput } from '../types'

export function collectKitTransactionSigners(
    ...values: readonly unknown[]
): TransactionSigner[] {
    const uniqueSigners = new Map<string, TransactionSigner>()

    for (const value of values) {
        collectKitTransactionSignersFromValue(value, uniqueSigners)
    }

    return [...uniqueSigners.values()]
}

function collectKitTransactionSignersFromValue(
    value: unknown,
    signers: Map<string, TransactionSigner>
): void {
    if (value == null) {
        return
    }

    if (Array.isArray(value)) {
        for (const item of value) {
            collectKitTransactionSignersFromValue(item, signers)
        }
        return
    }

    if (isKitTransactionSigner(value)) {
        signers.set(value.address, value)
    }
}

export function isKitTransactionSigner(
    value: unknown
): value is TransactionSigner {
    return (
        value != null &&
        typeof value === 'object' &&
        'address' in value &&
        isTransactionSigner(
            value as {
                [key: string]: unknown
                address: Address
            }
        )
    )
}

export function toAddress(value: KitAddressOrSignerInput): Address {
    if (isKitTransactionSigner(value)) {
        return value.address
    }
    return value as Address
}

export function toOptionalAddress(
    value: KitAddressOrSignerInput | null | undefined
): Address | undefined {
    if (value == null) {
        return undefined
    }
    return toAddress(value)
}

export function toAddressOrSigner(
    value: KitAddressOrSignerInput
): Address | TransactionSigner {
    if (isKitTransactionSigner(value)) {
        return value
    }
    return value as Address
}

export function toSigner(value: KitAddressOrSignerInput): TransactionSigner {
    if (isKitTransactionSigner(value)) {
        return value
    }
    throw new Error(
        `Expected a TransactionSigner but received an address: ${value}`
    )
}

function isBN(value: unknown): value is { toString(): string } {
    return (
        value != null &&
        typeof value === 'object' &&
        'toNumber' in value &&
        'toArrayLike' in value &&
        typeof (value as Record<string, unknown>).toString === 'function'
    )
}

/**
 * Recursively convert BN instances to bigint throughout an object tree.
 * Handles arrays, plain objects, and Option/Nullable wrappers.
 * Leaves non-BN primitives, Uint8Arrays, and other values unchanged.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertBNFields(value: any): any {
    if (isBN(value)) {
        return BigInt(value.toString())
    }
    if (
        value != null &&
        typeof value === 'object' &&
        typeof value.byteLength === 'number'
    ) {
        // Uint8Array or other typed arrays — return as-is
        return value
    }
    if (Array.isArray(value)) {
        return value.map(convertBNFields)
    }
    if (value != null && typeof value === 'object') {
        const result: Record<string, unknown> = {}
        for (const [k, v] of Object.entries(value)) {
            result[k] = convertBNFields(v)
        }
        return result
    }
    return value
}
