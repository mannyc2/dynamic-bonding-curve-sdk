import {
    getAddressEncoder,
    getProgramDerivedAddress,
    type Address,
} from '@solana/kit'
import {
    BASE_ADDRESS,
    DAMM_V1_PROGRAM_ADDRESS,
    DAMM_V2_PROGRAM_ADDRESS,
    DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
    LOCKER_PROGRAM_ADDRESS,
    METAPLEX_PROGRAM_ADDRESS,
    VAULT_PROGRAM_ADDRESS,
} from '../constants'

const addressEncoder = getAddressEncoder()

/**
 * Compare two addresses by raw bytes (matching legacy Buffer.compare behavior).
 * Kit's getAddressComparator() uses Intl.Collator (locale string comparison)
 * which disagrees with byte ordering for many address pairs.
 */
function compareAddressesByBytes(a: Address, b: Address): number {
    const bufA = addressEncoder.encode(a)
    const bufB = addressEncoder.encode(b)
    for (let i = 0; i < 32; i++) {
        const diff = bufA[i] - bufB[i]
        if (diff !== 0) return diff
    }
    return 0
}

// ── DBC PDAs ───────────────────────────────────────────────────────

export async function findPoolPda(
    quoteMint: Address,
    baseMint: Address,
    config: Address
): Promise<Address> {
    const isQuoteBigger = compareAddressesByBytes(quoteMint, baseMint) > 0
    const firstMint = isQuoteBigger ? quoteMint : baseMint
    const secondMint = isQuoteBigger ? baseMint : quoteMint

    const [pda] = await getProgramDerivedAddress({
        programAddress: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
        seeds: [
            'pool',
            addressEncoder.encode(config),
            addressEncoder.encode(firstMint),
            addressEncoder.encode(secondMint),
        ],
    })
    return pda
}

export async function findTokenVaultPda(
    pool: Address,
    mint: Address
): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
        seeds: [
            'token_vault',
            addressEncoder.encode(mint),
            addressEncoder.encode(pool),
        ],
    })
    return pda
}

export async function findMintMetadataPda(mint: Address): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: METAPLEX_PROGRAM_ADDRESS,
        seeds: [
            'metadata',
            addressEncoder.encode(METAPLEX_PROGRAM_ADDRESS),
            addressEncoder.encode(mint),
        ],
    })
    return pda
}

// ── DAMM V1 PDAs ──────────────────────────────────────────────────

export async function findDammV1PoolPda(
    config: Address,
    tokenAMint: Address,
    tokenBMint: Address
): Promise<Address> {
    const isABigger = compareAddressesByBytes(tokenAMint, tokenBMint) > 0
    const firstMint = isABigger ? tokenAMint : tokenBMint
    const secondMint = isABigger ? tokenBMint : tokenAMint

    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V1_PROGRAM_ADDRESS,
        seeds: [
            addressEncoder.encode(firstMint),
            addressEncoder.encode(secondMint),
            addressEncoder.encode(config),
        ],
    })
    return pda
}

export async function findDammV1LpMintPda(pool: Address): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V1_PROGRAM_ADDRESS,
        seeds: ['lp_mint', addressEncoder.encode(pool)],
    })
    return pda
}

export async function findDammV1VaultLpPda(
    vault: Address,
    pool: Address
): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V1_PROGRAM_ADDRESS,
        seeds: [addressEncoder.encode(vault), addressEncoder.encode(pool)],
    })
    return pda
}

export async function findDammV1LockEscrowPda(
    dammPool: Address,
    creator: Address
): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V1_PROGRAM_ADDRESS,
        seeds: [
            'lock_escrow',
            addressEncoder.encode(dammPool),
            addressEncoder.encode(creator),
        ],
    })
    return pda
}

export async function findDammV1ProtocolFeePda(
    mint: Address,
    pool: Address
): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V1_PROGRAM_ADDRESS,
        seeds: [
            'fee',
            addressEncoder.encode(mint),
            addressEncoder.encode(pool),
        ],
    })
    return pda
}

export async function findDammV1EventAuthorityPda(): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V1_PROGRAM_ADDRESS,
        seeds: ['__event_authority'],
    })
    return pda
}

// ── DAMM V2 PDAs ──────────────────────────────────────────────────

export async function findDammV2PoolPda(
    config: Address,
    tokenAMint: Address,
    tokenBMint: Address
): Promise<Address> {
    const isABigger = compareAddressesByBytes(tokenAMint, tokenBMint) > 0
    const firstMint = isABigger ? tokenAMint : tokenBMint
    const secondMint = isABigger ? tokenBMint : tokenAMint

    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V2_PROGRAM_ADDRESS,
        seeds: [
            'pool',
            addressEncoder.encode(config),
            addressEncoder.encode(firstMint),
            addressEncoder.encode(secondMint),
        ],
    })
    return pda
}

export async function findDammV2TokenVaultPda(
    pool: Address,
    mint: Address
): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V2_PROGRAM_ADDRESS,
        seeds: [
            'token_vault',
            addressEncoder.encode(mint),
            addressEncoder.encode(pool),
        ],
    })
    return pda
}

export async function findDammV2PositionPda(
    positionNft: Address
): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V2_PROGRAM_ADDRESS,
        seeds: ['position', addressEncoder.encode(positionNft)],
    })
    return pda
}

export async function findDammV2PositionNftAccountPda(
    positionNftMint: Address
): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V2_PROGRAM_ADDRESS,
        seeds: ['position_nft_account', addressEncoder.encode(positionNftMint)],
    })
    return pda
}

export async function findDammV2LockEscrowPda(
    dammPool: Address,
    creator: Address
): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V2_PROGRAM_ADDRESS,
        seeds: [
            'lock_escrow',
            addressEncoder.encode(dammPool),
            addressEncoder.encode(creator),
        ],
    })
    return pda
}

export async function findDammV2EventAuthorityPda(): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V2_PROGRAM_ADDRESS,
        seeds: ['__event_authority'],
    })
    return pda
}

export async function findDammV2PoolAuthorityPda(): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DAMM_V2_PROGRAM_ADDRESS,
        seeds: ['pool_authority'],
    })
    return pda
}

export async function findDammV2MigrationMetadataPda(
    virtualPool: Address
): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
        seeds: ['damm_v2', addressEncoder.encode(virtualPool)],
    })
    return pda
}

// ── Locker PDAs ───────────────────────────────────────────────────

export async function findBaseKeyForLockerPda(
    virtualPool: Address
): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS,
        seeds: ['base_locker', addressEncoder.encode(virtualPool)],
    })
    return pda
}

export async function findEscrowPda(base: Address): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: LOCKER_PROGRAM_ADDRESS,
        seeds: ['escrow', addressEncoder.encode(base)],
    })
    return pda
}

export async function findLockerEventAuthorityPda(): Promise<Address> {
    const [pda] = await getProgramDerivedAddress({
        programAddress: LOCKER_PROGRAM_ADDRESS,
        seeds: ['__event_authority'],
    })
    return pda
}

// ── Vault PDAs ────────────────────────────────────────────────────

export async function findVaultPdas(tokenMint: Address, seedBaseKey?: Address) {
    const base = seedBaseKey ?? BASE_ADDRESS

    const [vault] = await getProgramDerivedAddress({
        programAddress: VAULT_PROGRAM_ADDRESS,
        seeds: [
            'vault',
            addressEncoder.encode(tokenMint),
            addressEncoder.encode(base),
        ],
    })

    const [tokenVault] = await getProgramDerivedAddress({
        programAddress: VAULT_PROGRAM_ADDRESS,
        seeds: ['token_vault', addressEncoder.encode(vault)],
    })

    const [lpMint] = await getProgramDerivedAddress({
        programAddress: VAULT_PROGRAM_ADDRESS,
        seeds: ['lp_mint', addressEncoder.encode(vault)],
    })

    return { vaultPda: vault, tokenVaultPda: tokenVault, lpMintPda: lpMint }
}
