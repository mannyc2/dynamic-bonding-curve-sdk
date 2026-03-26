// src/kit/generated/pdas/base.ts
import {
  getAddressEncoder,
  getBytesEncoder,
  getProgramDerivedAddress
} from "@solana/kit";
async function findBasePda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await getProgramDerivedAddress({
    programAddress,
    seeds: [
      getBytesEncoder().encode(
        new Uint8Array([
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
        ])
      ),
      getAddressEncoder().encode(seeds.virtualPool)
    ]
  });
}

// src/kit/generated/pdas/baseVault.ts
import {
  getAddressEncoder as getAddressEncoder2,
  getBytesEncoder as getBytesEncoder2,
  getProgramDerivedAddress as getProgramDerivedAddress2
} from "@solana/kit";
async function findBaseVaultPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await getProgramDerivedAddress2({
    programAddress,
    seeds: [
      getBytesEncoder2().encode(
        new Uint8Array([
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
        ])
      ),
      getAddressEncoder2().encode(seeds.baseMint),
      getAddressEncoder2().encode(seeds.pool)
    ]
  });
}

// src/kit/generated/pdas/eventAuthority.ts
import {
  getBytesEncoder as getBytesEncoder3,
  getProgramDerivedAddress as getProgramDerivedAddress3
} from "@solana/kit";
async function findEventAuthorityPda(config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await getProgramDerivedAddress3({
    programAddress,
    seeds: [
      getBytesEncoder3().encode(
        new Uint8Array([
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
        ])
      )
    ]
  });
}

// src/kit/generated/pdas/migrationMetadata.ts
import {
  getAddressEncoder as getAddressEncoder3,
  getBytesEncoder as getBytesEncoder4,
  getProgramDerivedAddress as getProgramDerivedAddress4
} from "@solana/kit";
async function findMigrationMetadataPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await getProgramDerivedAddress4({
    programAddress,
    seeds: [
      getBytesEncoder4().encode(
        new Uint8Array([109, 101, 116, 101, 111, 114, 97])
      ),
      getAddressEncoder3().encode(seeds.virtualPool)
    ]
  });
}

// src/kit/generated/pdas/operator.ts
import {
  getAddressEncoder as getAddressEncoder4,
  getBytesEncoder as getBytesEncoder5,
  getProgramDerivedAddress as getProgramDerivedAddress5
} from "@solana/kit";
async function findOperatorPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await getProgramDerivedAddress5({
    programAddress,
    seeds: [
      getBytesEncoder5().encode(
        new Uint8Array([111, 112, 101, 114, 97, 116, 111, 114])
      ),
      getAddressEncoder4().encode(seeds.whitelistedAddress)
    ]
  });
}

// src/kit/generated/pdas/partnerMetadata.ts
import {
  getAddressEncoder as getAddressEncoder5,
  getBytesEncoder as getBytesEncoder6,
  getProgramDerivedAddress as getProgramDerivedAddress6
} from "@solana/kit";
async function findPartnerMetadataPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await getProgramDerivedAddress6({
    programAddress,
    seeds: [
      getBytesEncoder6().encode(
        new Uint8Array([
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
        ])
      ),
      getAddressEncoder5().encode(seeds.feeClaimer)
    ]
  });
}

// src/kit/generated/pdas/quoteVault.ts
import {
  getAddressEncoder as getAddressEncoder6,
  getBytesEncoder as getBytesEncoder7,
  getProgramDerivedAddress as getProgramDerivedAddress7
} from "@solana/kit";
async function findQuoteVaultPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await getProgramDerivedAddress7({
    programAddress,
    seeds: [
      getBytesEncoder7().encode(
        new Uint8Array([
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
        ])
      ),
      getAddressEncoder6().encode(seeds.quoteMint),
      getAddressEncoder6().encode(seeds.pool)
    ]
  });
}

// src/kit/generated/pdas/virtualPoolMetadata.ts
import {
  getAddressEncoder as getAddressEncoder7,
  getBytesEncoder as getBytesEncoder8,
  getProgramDerivedAddress as getProgramDerivedAddress8
} from "@solana/kit";
async function findVirtualPoolMetadataPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await getProgramDerivedAddress8({
    programAddress,
    seeds: [
      getBytesEncoder8().encode(
        new Uint8Array([
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
        ])
      ),
      getAddressEncoder7().encode(seeds.virtualPool)
    ]
  });
}

export {
  findBasePda,
  findBaseVaultPda,
  findEventAuthorityPda,
  findMigrationMetadataPda,
  findOperatorPda,
  findPartnerMetadataPda,
  findQuoteVaultPda,
  findVirtualPoolMetadataPda
};
//# sourceMappingURL=chunk-FWNGQBIV.js.map