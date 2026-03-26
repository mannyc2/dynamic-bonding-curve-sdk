"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/kit/generated/pdas/base.ts




var _kit = require('@solana/kit');
async function findBasePda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress,
    seeds: [
      _kit.getBytesEncoder.call(void 0, ).encode(
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
      _kit.getAddressEncoder.call(void 0, ).encode(seeds.virtualPool)
    ]
  });
}

// src/kit/generated/pdas/baseVault.ts





async function findBaseVaultPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress,
    seeds: [
      _kit.getBytesEncoder.call(void 0, ).encode(
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
      _kit.getAddressEncoder.call(void 0, ).encode(seeds.baseMint),
      _kit.getAddressEncoder.call(void 0, ).encode(seeds.pool)
    ]
  });
}

// src/kit/generated/pdas/eventAuthority.ts




async function findEventAuthorityPda(config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress,
    seeds: [
      _kit.getBytesEncoder.call(void 0, ).encode(
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





async function findMigrationMetadataPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress,
    seeds: [
      _kit.getBytesEncoder.call(void 0, ).encode(
        new Uint8Array([109, 101, 116, 101, 111, 114, 97])
      ),
      _kit.getAddressEncoder.call(void 0, ).encode(seeds.virtualPool)
    ]
  });
}

// src/kit/generated/pdas/operator.ts





async function findOperatorPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress,
    seeds: [
      _kit.getBytesEncoder.call(void 0, ).encode(
        new Uint8Array([111, 112, 101, 114, 97, 116, 111, 114])
      ),
      _kit.getAddressEncoder.call(void 0, ).encode(seeds.whitelistedAddress)
    ]
  });
}

// src/kit/generated/pdas/partnerMetadata.ts





async function findPartnerMetadataPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress,
    seeds: [
      _kit.getBytesEncoder.call(void 0, ).encode(
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
      _kit.getAddressEncoder.call(void 0, ).encode(seeds.feeClaimer)
    ]
  });
}

// src/kit/generated/pdas/quoteVault.ts





async function findQuoteVaultPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress,
    seeds: [
      _kit.getBytesEncoder.call(void 0, ).encode(
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
      _kit.getAddressEncoder.call(void 0, ).encode(seeds.quoteMint),
      _kit.getAddressEncoder.call(void 0, ).encode(seeds.pool)
    ]
  });
}

// src/kit/generated/pdas/virtualPoolMetadata.ts





async function findVirtualPoolMetadataPda(seeds, config = {}) {
  const {
    programAddress = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  } = config;
  return await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress,
    seeds: [
      _kit.getBytesEncoder.call(void 0, ).encode(
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
      _kit.getAddressEncoder.call(void 0, ).encode(seeds.virtualPool)
    ]
  });
}










exports.findBasePda = findBasePda; exports.findBaseVaultPda = findBaseVaultPda; exports.findEventAuthorityPda = findEventAuthorityPda; exports.findMigrationMetadataPda = findMigrationMetadataPda; exports.findOperatorPda = findOperatorPda; exports.findPartnerMetadataPda = findPartnerMetadataPda; exports.findQuoteVaultPda = findQuoteVaultPda; exports.findVirtualPoolMetadataPda = findVirtualPoolMetadataPda;
//# sourceMappingURL=chunk-EYDCQ6ER.cjs.map