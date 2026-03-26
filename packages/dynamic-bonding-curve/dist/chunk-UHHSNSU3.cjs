"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }







var _chunkEYDCQ6ERcjs = require('./chunk-EYDCQ6ER.cjs');

// src/kit/client.ts
var _kit = require('@solana/kit');

// src/kit/generated/instructions/createVirtualPoolMetadata.ts





















var _programclientcore = require('@solana/program-client-core');

// src/kit/generated/programs/dynamicBondingCurve.ts















// src/kit/generated/accounts/claimFeeOperator.ts

















var CLAIM_FEE_OPERATOR_DISCRIMINATOR = new Uint8Array([
  166,
  48,
  134,
  86,
  34,
  200,
  188,
  150
]);

// src/kit/generated/accounts/config.ts






















// src/kit/generated/types/baseFeeConfig.ts















function getBaseFeeConfigDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["cliffFeeNumerator", _kit.getU64Decoder.call(void 0, )],
    ["secondFactor", _kit.getU64Decoder.call(void 0, )],
    ["thirdFactor", _kit.getU64Decoder.call(void 0, )],
    ["firstFactor", _kit.getU16Decoder.call(void 0, )],
    ["baseFeeMode", _kit.getU8Decoder.call(void 0, )],
    ["padding0", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 5)]
  ]);
}

// src/kit/generated/types/baseFeeParameters.ts











function getBaseFeeParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["cliffFeeNumerator", _kit.getU64Encoder.call(void 0, )],
    ["firstFactor", _kit.getU16Encoder.call(void 0, )],
    ["secondFactor", _kit.getU64Encoder.call(void 0, )],
    ["thirdFactor", _kit.getU64Encoder.call(void 0, )],
    ["baseFeeMode", _kit.getU8Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/configParameters.ts























function getConfigParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["poolFees", getPoolFeeParametersEncoder()],
    ["collectFeeMode", _kit.getU8Encoder.call(void 0, )],
    ["migrationOption", _kit.getU8Encoder.call(void 0, )],
    ["activationType", _kit.getU8Encoder.call(void 0, )],
    ["tokenType", _kit.getU8Encoder.call(void 0, )],
    ["tokenDecimal", _kit.getU8Encoder.call(void 0, )],
    ["partnerLiquidityPercentage", _kit.getU8Encoder.call(void 0, )],
    ["partnerPermanentLockedLiquidityPercentage", _kit.getU8Encoder.call(void 0, )],
    ["creatorLiquidityPercentage", _kit.getU8Encoder.call(void 0, )],
    ["creatorPermanentLockedLiquidityPercentage", _kit.getU8Encoder.call(void 0, )],
    ["migrationQuoteThreshold", _kit.getU64Encoder.call(void 0, )],
    ["sqrtStartPrice", _kit.getU128Encoder.call(void 0, )],
    ["lockedVesting", getLockedVestingParamsEncoder()],
    ["migrationFeeOption", _kit.getU8Encoder.call(void 0, )],
    ["tokenSupply", _kit.getOptionEncoder.call(void 0, getTokenSupplyParamsEncoder())],
    ["creatorTradingFeePercentage", _kit.getU8Encoder.call(void 0, )],
    ["tokenUpdateAuthority", _kit.getU8Encoder.call(void 0, )],
    ["migrationFee", getMigrationFeeEncoder()],
    ["migratedPoolFee", getMigratedPoolFeeEncoder()],
    ["poolCreationFee", _kit.getU64Encoder.call(void 0, )],
    ["partnerLiquidityVestingInfo", getLiquidityVestingInfoParamsEncoder()],
    ["creatorLiquidityVestingInfo", getLiquidityVestingInfoParamsEncoder()],
    ["migratedPoolBaseFeeMode", _kit.getU8Encoder.call(void 0, )],
    [
      "migratedPoolMarketCapFeeSchedulerParams",
      getMigratedPoolMarketCapFeeSchedulerParamsEncoder()
    ],
    ["enableFirstSwapWithMinFee", _kit.getBooleanEncoder.call(void 0, )],
    ["compoundingFeeBps", _kit.getU16Encoder.call(void 0, )],
    ["padding", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 2)],
    ["curve", _kit.getArrayEncoder.call(void 0, getLiquidityDistributionParametersEncoder())]
  ]);
}

// src/kit/generated/types/dynamicFeeConfig.ts

















function getDynamicFeeConfigDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["initialized", _kit.getU8Decoder.call(void 0, )],
    ["padding", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 7)],
    ["maxVolatilityAccumulator", _kit.getU32Decoder.call(void 0, )],
    ["variableFeeControl", _kit.getU32Decoder.call(void 0, )],
    ["binStep", _kit.getU16Decoder.call(void 0, )],
    ["filterPeriod", _kit.getU16Decoder.call(void 0, )],
    ["decayPeriod", _kit.getU16Decoder.call(void 0, )],
    ["reductionFactor", _kit.getU16Decoder.call(void 0, )],
    ["padding2", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 8)],
    ["binStepU128", _kit.getU128Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/dynamicFeeParameters.ts











function getDynamicFeeParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["binStep", _kit.getU16Encoder.call(void 0, )],
    ["binStepU128", _kit.getU128Encoder.call(void 0, )],
    ["filterPeriod", _kit.getU16Encoder.call(void 0, )],
    ["decayPeriod", _kit.getU16Encoder.call(void 0, )],
    ["reductionFactor", _kit.getU16Encoder.call(void 0, )],
    ["maxVolatilityAccumulator", _kit.getU32Encoder.call(void 0, )],
    ["variableFeeControl", _kit.getU32Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/evtClaimCreatorTradingFee.ts










// src/kit/generated/types/evtClaimPoolCreationFee.ts










// src/kit/generated/types/evtClaimProtocolFee.ts










// src/kit/generated/types/evtClaimProtocolLiquidityMigrationFee.ts










// src/kit/generated/types/evtClaimTradingFee.ts










// src/kit/generated/types/evtCloseClaimFeeOperator.ts








// src/kit/generated/types/evtCreateClaimFeeOperator.ts








// src/kit/generated/types/evtCreateConfig.ts
















// src/kit/generated/types/evtCreateConfigV2.ts








// src/kit/generated/types/evtCreateMeteoraMigrationMetadata.ts








// src/kit/generated/types/evtCreatorWithdrawSurplus.ts










// src/kit/generated/types/evtCurveComplete.ts










// src/kit/generated/types/evtInitializePool.ts












// src/kit/generated/types/evtPartnerClaimPoolCreationFee.ts










// src/kit/generated/types/evtPartnerMetadata.ts








// src/kit/generated/types/evtPartnerWithdrawMigrationFee.ts










// src/kit/generated/types/evtPartnerWithdrawSurplus.ts










// src/kit/generated/types/evtSwap.ts














// src/kit/generated/types/evtSwap2.ts














// src/kit/generated/types/evtUpdatePoolCreator.ts








// src/kit/generated/types/evtVirtualPoolMetadata.ts








// src/kit/generated/types/evtWithdrawLeftover.ts










// src/kit/generated/types/evtWithdrawMigrationFee.ts












// src/kit/generated/types/initializePoolParameters.ts











function getInitializePoolParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["name", _kit.addEncoderSizePrefix.call(void 0, _kit.getUtf8Encoder.call(void 0, ), _kit.getU32Encoder.call(void 0, ))],
    ["symbol", _kit.addEncoderSizePrefix.call(void 0, _kit.getUtf8Encoder.call(void 0, ), _kit.getU32Encoder.call(void 0, ))],
    ["uri", _kit.addEncoderSizePrefix.call(void 0, _kit.getUtf8Encoder.call(void 0, ), _kit.getU32Encoder.call(void 0, ))]
  ]);
}

// src/kit/generated/types/liquidityDistributionConfig.ts







function getLiquidityDistributionConfigDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["sqrtPrice", _kit.getU128Decoder.call(void 0, )],
    ["liquidity", _kit.getU128Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/liquidityDistributionParameters.ts







function getLiquidityDistributionParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["sqrtPrice", _kit.getU128Encoder.call(void 0, )],
    ["liquidity", _kit.getU128Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/liquidityVestingInfo.ts















function getLiquidityVestingInfoDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["isInitialized", _kit.getU8Decoder.call(void 0, )],
    ["vestingPercentage", _kit.getU8Decoder.call(void 0, )],
    ["padding", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 2)],
    ["bpsPerPeriod", _kit.getU16Decoder.call(void 0, )],
    ["numberOfPeriods", _kit.getU16Decoder.call(void 0, )],
    ["frequency", _kit.getU32Decoder.call(void 0, )],
    ["cliffDurationFromMigrationTime", _kit.getU32Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/liquidityVestingInfoParams.ts











function getLiquidityVestingInfoParamsEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["vestingPercentage", _kit.getU8Encoder.call(void 0, )],
    ["bpsPerPeriod", _kit.getU16Encoder.call(void 0, )],
    ["numberOfPeriods", _kit.getU16Encoder.call(void 0, )],
    ["cliffDurationFromMigrationTime", _kit.getU32Encoder.call(void 0, )],
    ["frequency", _kit.getU32Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/lockedVestingConfig.ts







function getLockedVestingConfigDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["amountPerPeriod", _kit.getU64Decoder.call(void 0, )],
    ["cliffDurationFromMigrationTime", _kit.getU64Decoder.call(void 0, )],
    ["frequency", _kit.getU64Decoder.call(void 0, )],
    ["numberOfPeriod", _kit.getU64Decoder.call(void 0, )],
    ["cliffUnlockAmount", _kit.getU64Decoder.call(void 0, )],
    ["padding", _kit.getU64Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/lockedVestingParams.ts







function getLockedVestingParamsEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["amountPerPeriod", _kit.getU64Encoder.call(void 0, )],
    ["cliffDurationFromMigrationTime", _kit.getU64Encoder.call(void 0, )],
    ["frequency", _kit.getU64Encoder.call(void 0, )],
    ["numberOfPeriod", _kit.getU64Encoder.call(void 0, )],
    ["cliffUnlockAmount", _kit.getU64Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/migratedPoolFee.ts









function getMigratedPoolFeeEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["collectFeeMode", _kit.getU8Encoder.call(void 0, )],
    ["dynamicFee", _kit.getU8Encoder.call(void 0, )],
    ["poolFeeBps", _kit.getU16Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/migratedPoolMarketCapFeeSchedulerParams.ts











function getMigratedPoolMarketCapFeeSchedulerParamsEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["numberOfPeriod", _kit.getU16Encoder.call(void 0, )],
    ["sqrtPriceStepBps", _kit.getU16Encoder.call(void 0, )],
    ["schedulerExpirationDuration", _kit.getU32Encoder.call(void 0, )],
    ["reductionFactor", _kit.getU64Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/migrationFee.ts







function getMigrationFeeEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["feePercentage", _kit.getU8Encoder.call(void 0, )],
    ["creatorFeePercentage", _kit.getU8Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/poolFeeParameters.ts







function getPoolFeeParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["baseFee", getBaseFeeParametersEncoder()],
    ["dynamicFee", _kit.getOptionEncoder.call(void 0, getDynamicFeeParametersEncoder())]
  ]);
}

// src/kit/generated/types/poolFees.ts








// src/kit/generated/types/poolFeesConfig.ts





function getPoolFeesConfigDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["baseFee", getBaseFeeConfigDecoder()],
    ["dynamicFee", getDynamicFeeConfigDecoder()]
  ]);
}

// src/kit/generated/types/poolMetrics.ts







function getPoolMetricsDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["totalProtocolBaseFee", _kit.getU64Decoder.call(void 0, )],
    ["totalProtocolQuoteFee", _kit.getU64Decoder.call(void 0, )],
    ["totalTradingBaseFee", _kit.getU64Decoder.call(void 0, )],
    ["totalTradingQuoteFee", _kit.getU64Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/swapParameters.ts







function getSwapParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["amountIn", _kit.getU64Encoder.call(void 0, )],
    ["minimumAmountOut", _kit.getU64Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/swapParameters2.ts









function getSwapParameters2Encoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["amount0", _kit.getU64Encoder.call(void 0, )],
    ["amount1", _kit.getU64Encoder.call(void 0, )],
    ["swapMode", _kit.getU8Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/swapResult.ts










// src/kit/generated/types/swapResult2.ts










// src/kit/generated/types/tokenSupplyParams.ts







function getTokenSupplyParamsEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["preMigrationTokenSupply", _kit.getU64Encoder.call(void 0, )],
    ["postMigrationTokenSupply", _kit.getU64Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/volatilityTracker.ts













function getVolatilityTrackerDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["lastUpdateTimestamp", _kit.getU64Decoder.call(void 0, )],
    ["padding", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 8)],
    ["sqrtPriceReference", _kit.getU128Decoder.call(void 0, )],
    ["volatilityAccumulator", _kit.getU128Decoder.call(void 0, )],
    ["volatilityReference", _kit.getU128Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/accounts/config.ts
var CONFIG_DISCRIMINATOR = new Uint8Array([
  155,
  12,
  170,
  224,
  30,
  250,
  204,
  130
]);

// src/kit/generated/accounts/lockEscrow.ts























var LOCK_ESCROW_DISCRIMINATOR = new Uint8Array([
  190,
  106,
  121,
  6,
  200,
  182,
  21,
  75
]);

// src/kit/generated/accounts/meteoraDammMigrationMetadata.ts





















var METEORA_DAMM_MIGRATION_METADATA_DISCRIMINATOR = new Uint8Array([
  17,
  155,
  141,
  215,
  207,
  4,
  133,
  156
]);

// src/kit/generated/accounts/operator.ts























var OPERATOR_DISCRIMINATOR = new Uint8Array([
  219,
  31,
  188,
  145,
  69,
  139,
  204,
  117
]);

// src/kit/generated/accounts/partnerMetadata.ts



























var PARTNER_METADATA_DISCRIMINATOR = new Uint8Array([
  68,
  68,
  130,
  19,
  16,
  209,
  98,
  156
]);

// src/kit/generated/accounts/poolConfig.ts



























var POOL_CONFIG_DISCRIMINATOR = new Uint8Array([
  26,
  108,
  14,
  123,
  116,
  230,
  129,
  43
]);
function getPoolConfigDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["discriminator", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 8)],
    ["quoteMint", _kit.getAddressDecoder.call(void 0, )],
    ["feeClaimer", _kit.getAddressDecoder.call(void 0, )],
    ["leftoverReceiver", _kit.getAddressDecoder.call(void 0, )],
    ["poolFees", getPoolFeesConfigDecoder()],
    ["partnerLiquidityVestingInfo", getLiquidityVestingInfoDecoder()],
    ["creatorLiquidityVestingInfo", getLiquidityVestingInfoDecoder()],
    ["padding0", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 14)],
    ["padding1", _kit.getU16Decoder.call(void 0, )],
    ["collectFeeMode", _kit.getU8Decoder.call(void 0, )],
    ["migrationOption", _kit.getU8Decoder.call(void 0, )],
    ["activationType", _kit.getU8Decoder.call(void 0, )],
    ["tokenDecimal", _kit.getU8Decoder.call(void 0, )],
    ["version", _kit.getU8Decoder.call(void 0, )],
    ["tokenType", _kit.getU8Decoder.call(void 0, )],
    ["quoteTokenFlag", _kit.getU8Decoder.call(void 0, )],
    ["partnerPermanentLockedLiquidityPercentage", _kit.getU8Decoder.call(void 0, )],
    ["partnerLiquidityPercentage", _kit.getU8Decoder.call(void 0, )],
    ["creatorPermanentLockedLiquidityPercentage", _kit.getU8Decoder.call(void 0, )],
    ["creatorLiquidityPercentage", _kit.getU8Decoder.call(void 0, )],
    ["migrationFeeOption", _kit.getU8Decoder.call(void 0, )],
    ["fixedTokenSupplyFlag", _kit.getU8Decoder.call(void 0, )],
    ["creatorTradingFeePercentage", _kit.getU8Decoder.call(void 0, )],
    ["tokenUpdateAuthority", _kit.getU8Decoder.call(void 0, )],
    ["migrationFeePercentage", _kit.getU8Decoder.call(void 0, )],
    ["creatorMigrationFeePercentage", _kit.getU8Decoder.call(void 0, )],
    ["padding2", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 7)],
    ["swapBaseAmount", _kit.getU64Decoder.call(void 0, )],
    ["migrationQuoteThreshold", _kit.getU64Decoder.call(void 0, )],
    ["migrationBaseThreshold", _kit.getU64Decoder.call(void 0, )],
    ["migrationSqrtPrice", _kit.getU128Decoder.call(void 0, )],
    ["lockedVestingConfig", getLockedVestingConfigDecoder()],
    ["preMigrationTokenSupply", _kit.getU64Decoder.call(void 0, )],
    ["postMigrationTokenSupply", _kit.getU64Decoder.call(void 0, )],
    ["migratedCollectFeeMode", _kit.getU8Decoder.call(void 0, )],
    ["migratedDynamicFee", _kit.getU8Decoder.call(void 0, )],
    ["migratedPoolFeeBps", _kit.getU16Decoder.call(void 0, )],
    ["migratedPoolBaseFeeMode", _kit.getU8Decoder.call(void 0, )],
    ["enableFirstSwapWithMinFee", _kit.getU8Decoder.call(void 0, )],
    ["migratedCompoundingFeeBps", _kit.getU16Decoder.call(void 0, )],
    ["poolCreationFee", _kit.getU64Decoder.call(void 0, )],
    ["migratedPoolBaseFeeBytes", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 16)],
    ["sqrtStartPrice", _kit.getU128Decoder.call(void 0, )],
    [
      "curve",
      _kit.getArrayDecoder.call(void 0, getLiquidityDistributionConfigDecoder(), {
        size: 20
      })
    ]
  ]);
}
function decodePoolConfig(encodedAccount) {
  return _kit.decodeAccount.call(void 0, 
    encodedAccount,
    getPoolConfigDecoder()
  );
}
async function fetchPoolConfig(rpc, address, config) {
  const maybeAccount = await fetchMaybePoolConfig(rpc, address, config);
  _kit.assertAccountExists.call(void 0, maybeAccount);
  return maybeAccount;
}
async function fetchMaybePoolConfig(rpc, address, config) {
  const maybeAccount = await _kit.fetchEncodedAccount.call(void 0, rpc, address, config);
  return decodePoolConfig(maybeAccount);
}

// src/kit/generated/accounts/virtualPool.ts



























var VIRTUAL_POOL_DISCRIMINATOR = new Uint8Array([
  213,
  224,
  5,
  209,
  98,
  69,
  119,
  92
]);
function getVirtualPoolDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["discriminator", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 8)],
    ["volatilityTracker", getVolatilityTrackerDecoder()],
    ["config", _kit.getAddressDecoder.call(void 0, )],
    ["creator", _kit.getAddressDecoder.call(void 0, )],
    ["baseMint", _kit.getAddressDecoder.call(void 0, )],
    ["baseVault", _kit.getAddressDecoder.call(void 0, )],
    ["quoteVault", _kit.getAddressDecoder.call(void 0, )],
    ["baseReserve", _kit.getU64Decoder.call(void 0, )],
    ["quoteReserve", _kit.getU64Decoder.call(void 0, )],
    ["protocolBaseFee", _kit.getU64Decoder.call(void 0, )],
    ["protocolQuoteFee", _kit.getU64Decoder.call(void 0, )],
    ["partnerBaseFee", _kit.getU64Decoder.call(void 0, )],
    ["partnerQuoteFee", _kit.getU64Decoder.call(void 0, )],
    ["sqrtPrice", _kit.getU128Decoder.call(void 0, )],
    ["activationPoint", _kit.getU64Decoder.call(void 0, )],
    ["poolType", _kit.getU8Decoder.call(void 0, )],
    ["isMigrated", _kit.getU8Decoder.call(void 0, )],
    ["isPartnerWithdrawSurplus", _kit.getU8Decoder.call(void 0, )],
    ["isProtocolWithdrawSurplus", _kit.getU8Decoder.call(void 0, )],
    ["migrationProgress", _kit.getU8Decoder.call(void 0, )],
    ["isWithdrawLeftover", _kit.getU8Decoder.call(void 0, )],
    ["isCreatorWithdrawSurplus", _kit.getU8Decoder.call(void 0, )],
    ["migrationFeeWithdrawStatus", _kit.getU8Decoder.call(void 0, )],
    ["metrics", getPoolMetricsDecoder()],
    ["finishCurveTimestamp", _kit.getU64Decoder.call(void 0, )],
    ["creatorBaseFee", _kit.getU64Decoder.call(void 0, )],
    ["creatorQuoteFee", _kit.getU64Decoder.call(void 0, )],
    ["legacyCreationFeeBits", _kit.getU8Decoder.call(void 0, )],
    ["creationFeeBits", _kit.getU8Decoder.call(void 0, )],
    ["hasSwap", _kit.getU8Decoder.call(void 0, )],
    ["padding0", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 5)],
    ["protocolLiquidityMigrationFeeBps", _kit.getU16Decoder.call(void 0, )],
    ["padding1", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 6)],
    ["protocolMigrationBaseFeeAmount", _kit.getU64Decoder.call(void 0, )],
    ["protocolMigrationQuoteFeeAmount", _kit.getU64Decoder.call(void 0, )],
    ["padding2", _kit.getArrayDecoder.call(void 0, _kit.getU64Decoder.call(void 0, ), { size: 3 })]
  ]);
}
function decodeVirtualPool(encodedAccount) {
  return _kit.decodeAccount.call(void 0, 
    encodedAccount,
    getVirtualPoolDecoder()
  );
}
async function fetchVirtualPool(rpc, address, config) {
  const maybeAccount = await fetchMaybeVirtualPool(rpc, address, config);
  _kit.assertAccountExists.call(void 0, maybeAccount);
  return maybeAccount;
}
async function fetchMaybeVirtualPool(rpc, address, config) {
  const maybeAccount = await _kit.fetchEncodedAccount.call(void 0, rpc, address, config);
  return decodeVirtualPool(maybeAccount);
}

// src/kit/generated/accounts/virtualPoolMetadata.ts



























var VIRTUAL_POOL_METADATA_DISCRIMINATOR = new Uint8Array([
  217,
  37,
  82,
  250,
  43,
  47,
  228,
  254
]);

// src/kit/generated/instructions/claimCreatorTradingFee.ts

















var CLAIM_CREATOR_TRADING_FEE_DISCRIMINATOR = new Uint8Array([
  82,
  220,
  250,
  189,
  3,
  85,
  107,
  45
]);
function getClaimCreatorTradingFeeInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["maxBaseAmount", _kit.getU64Encoder.call(void 0, )],
      ["maxQuoteAmount", _kit.getU64Encoder.call(void 0, )]
    ]),
    (value) => ({
      ...value,
      discriminator: CLAIM_CREATOR_TRADING_FEE_DISCRIMINATOR
    })
  );
}
async function getClaimCreatorTradingFeeInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _ => _.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    poolAuthority: {
      value: _nullishCoalesce(input.poolAuthority, () => ( null)),
      isWritable: false
    },
    pool: { value: _nullishCoalesce(input.pool, () => ( null)), isWritable: true },
    tokenAAccount: { value: _nullishCoalesce(input.tokenAAccount, () => ( null)), isWritable: true },
    tokenBAccount: { value: _nullishCoalesce(input.tokenBAccount, () => ( null)), isWritable: true },
    baseVault: { value: _nullishCoalesce(input.baseVault, () => ( null)), isWritable: true },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    baseMint: { value: _nullishCoalesce(input.baseMint, () => ( null)), isWritable: false },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: false },
    creator: { value: _nullishCoalesce(input.creator, () => ( null)), isWritable: false },
    tokenBaseProgram: {
      value: _nullishCoalesce(input.tokenBaseProgram, () => ( null)),
      isWritable: false
    },
    tokenQuoteProgram: {
      value: _nullishCoalesce(input.tokenQuoteProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("pool", accounts.pool),
      getAccountMeta("tokenAAccount", accounts.tokenAAccount),
      getAccountMeta("tokenBAccount", accounts.tokenBAccount),
      getAccountMeta("baseVault", accounts.baseVault),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("baseMint", accounts.baseMint),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("creator", accounts.creator),
      getAccountMeta("tokenBaseProgram", accounts.tokenBaseProgram),
      getAccountMeta("tokenQuoteProgram", accounts.tokenQuoteProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getClaimCreatorTradingFeeInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}

// src/kit/generated/instructions/claimPartnerPoolCreationFee.ts















var CLAIM_PARTNER_POOL_CREATION_FEE_DISCRIMINATOR = new Uint8Array([
  250,
  238,
  26,
  4,
  139,
  10,
  101,
  248
]);
function getClaimPartnerPoolCreationFeeInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: CLAIM_PARTNER_POOL_CREATION_FEE_DISCRIMINATOR
    })
  );
}
async function getClaimPartnerPoolCreationFeeInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _2 => _2.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    pool: { value: _nullishCoalesce(input.pool, () => ( null)), isWritable: true },
    feeClaimer: { value: _nullishCoalesce(input.feeClaimer, () => ( null)), isWritable: false },
    feeReceiver: { value: _nullishCoalesce(input.feeReceiver, () => ( null)), isWritable: true },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("config", accounts.config),
      getAccountMeta("pool", accounts.pool),
      getAccountMeta("feeClaimer", accounts.feeClaimer),
      getAccountMeta("feeReceiver", accounts.feeReceiver),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getClaimPartnerPoolCreationFeeInstructionDataEncoder().encode({}),
    programAddress
  });
}

// src/kit/generated/instructions/claimProtocolFee.ts

















var CLAIM_PROTOCOL_FEE_DISCRIMINATOR = new Uint8Array([
  165,
  228,
  133,
  48,
  99,
  249,
  255,
  33
]);

// src/kit/generated/instructions/claimProtocolPoolCreationFee.ts















var CLAIM_PROTOCOL_POOL_CREATION_FEE_DISCRIMINATOR = new Uint8Array([
  114,
  205,
  83,
  188,
  240,
  153,
  25,
  54
]);

// src/kit/generated/instructions/claimTradingFee.ts

















var CLAIM_TRADING_FEE_DISCRIMINATOR = new Uint8Array([
  8,
  236,
  89,
  49,
  152,
  125,
  177,
  81
]);
function getClaimTradingFeeInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["maxAmountA", _kit.getU64Encoder.call(void 0, )],
      ["maxAmountB", _kit.getU64Encoder.call(void 0, )]
    ]),
    (value) => ({
      ...value,
      discriminator: CLAIM_TRADING_FEE_DISCRIMINATOR
    })
  );
}
async function getClaimTradingFeeInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _3 => _3.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    poolAuthority: {
      value: _nullishCoalesce(input.poolAuthority, () => ( null)),
      isWritable: false
    },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    pool: { value: _nullishCoalesce(input.pool, () => ( null)), isWritable: true },
    tokenAAccount: { value: _nullishCoalesce(input.tokenAAccount, () => ( null)), isWritable: true },
    tokenBAccount: { value: _nullishCoalesce(input.tokenBAccount, () => ( null)), isWritable: true },
    baseVault: { value: _nullishCoalesce(input.baseVault, () => ( null)), isWritable: true },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    baseMint: { value: _nullishCoalesce(input.baseMint, () => ( null)), isWritable: false },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: false },
    feeClaimer: { value: _nullishCoalesce(input.feeClaimer, () => ( null)), isWritable: false },
    tokenBaseProgram: {
      value: _nullishCoalesce(input.tokenBaseProgram, () => ( null)),
      isWritable: false
    },
    tokenQuoteProgram: {
      value: _nullishCoalesce(input.tokenQuoteProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("config", accounts.config),
      getAccountMeta("pool", accounts.pool),
      getAccountMeta("tokenAAccount", accounts.tokenAAccount),
      getAccountMeta("tokenBAccount", accounts.tokenBAccount),
      getAccountMeta("baseVault", accounts.baseVault),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("baseMint", accounts.baseMint),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("feeClaimer", accounts.feeClaimer),
      getAccountMeta("tokenBaseProgram", accounts.tokenBaseProgram),
      getAccountMeta("tokenQuoteProgram", accounts.tokenQuoteProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getClaimTradingFeeInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}

// src/kit/generated/instructions/closeClaimProtocolFeeOperator.ts















var CLOSE_CLAIM_PROTOCOL_FEE_OPERATOR_DISCRIMINATOR = new Uint8Array([
  8,
  41,
  87,
  35,
  80,
  48,
  121,
  26
]);

// src/kit/generated/instructions/closeOperatorAccount.ts















var CLOSE_OPERATOR_ACCOUNT_DISCRIMINATOR = new Uint8Array([
  171,
  9,
  213,
  74,
  120,
  23,
  3,
  29
]);

// src/kit/generated/instructions/createConfig.ts















var CREATE_CONFIG_DISCRIMINATOR = new Uint8Array([
  201,
  207,
  243,
  114,
  75,
  111,
  47,
  189
]);
function getCreateConfigInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["configParameters", getConfigParametersEncoder()]
    ]),
    (value) => ({ ...value, discriminator: CREATE_CONFIG_DISCRIMINATOR })
  );
}
async function getCreateConfigInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _4 => _4.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: true },
    feeClaimer: { value: _nullishCoalesce(input.feeClaimer, () => ( null)), isWritable: false },
    leftoverReceiver: {
      value: _nullishCoalesce(input.leftoverReceiver, () => ( null)),
      isWritable: false
    },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: false },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: true },
    systemProgram: {
      value: _nullishCoalesce(input.systemProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("config", accounts.config),
      getAccountMeta("feeClaimer", accounts.feeClaimer),
      getAccountMeta("leftoverReceiver", accounts.leftoverReceiver),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("systemProgram", accounts.systemProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getCreateConfigInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}

// src/kit/generated/instructions/createLocker.ts
















var CREATE_LOCKER_DISCRIMINATOR = new Uint8Array([
  167,
  90,
  137,
  154,
  75,
  47,
  17,
  84
]);
function getCreateLockerInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({ ...value, discriminator: CREATE_LOCKER_DISCRIMINATOR })
  );
}
async function getCreateLockerInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _5 => _5.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: true },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    poolAuthority: { value: _nullishCoalesce(input.poolAuthority, () => ( null)), isWritable: true },
    baseVault: { value: _nullishCoalesce(input.baseVault, () => ( null)), isWritable: true },
    baseMint: { value: _nullishCoalesce(input.baseMint, () => ( null)), isWritable: true },
    base: { value: _nullishCoalesce(input.base, () => ( null)), isWritable: true },
    creator: { value: _nullishCoalesce(input.creator, () => ( null)), isWritable: false },
    escrow: { value: _nullishCoalesce(input.escrow, () => ( null)), isWritable: true },
    escrowToken: { value: _nullishCoalesce(input.escrowToken, () => ( null)), isWritable: true },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: true },
    tokenProgram: { value: _nullishCoalesce(input.tokenProgram, () => ( null)), isWritable: false },
    lockerProgram: {
      value: _nullishCoalesce(input.lockerProgram, () => ( null)),
      isWritable: false
    },
    lockerEventAuthority: {
      value: _nullishCoalesce(input.lockerEventAuthority, () => ( null)),
      isWritable: false
    },
    systemProgram: {
      value: _nullishCoalesce(input.systemProgram, () => ( null)),
      isWritable: false
    }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.base.value) {
    accounts.base.value = await _chunkEYDCQ6ERcjs.findBasePda.call(void 0, {
      virtualPool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "virtualPool",
        accounts.virtualPool.value
      )
    });
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  if (!accounts.lockerProgram.value) {
    accounts.lockerProgram.value = "LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn";
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("config", accounts.config),
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("baseVault", accounts.baseVault),
      getAccountMeta("baseMint", accounts.baseMint),
      getAccountMeta("base", accounts.base),
      getAccountMeta("creator", accounts.creator),
      getAccountMeta("escrow", accounts.escrow),
      getAccountMeta("escrowToken", accounts.escrowToken),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("tokenProgram", accounts.tokenProgram),
      getAccountMeta("lockerProgram", accounts.lockerProgram),
      getAccountMeta(
        "lockerEventAuthority",
        accounts.lockerEventAuthority
      ),
      getAccountMeta("systemProgram", accounts.systemProgram)
    ],
    data: getCreateLockerInstructionDataEncoder().encode({}),
    programAddress
  });
}

// src/kit/generated/instructions/createOperatorAccount.ts


















var CREATE_OPERATOR_ACCOUNT_DISCRIMINATOR = new Uint8Array([
  221,
  64,
  246,
  149,
  240,
  153,
  229,
  163
]);

// src/kit/generated/instructions/createPartnerMetadata.ts






















var CREATE_PARTNER_METADATA_DISCRIMINATOR = new Uint8Array([
  192,
  168,
  234,
  191,
  188,
  226,
  227,
  255
]);
function getCreatePartnerMetadataInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["padding", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 96)],
      ["name", _kit.addEncoderSizePrefix.call(void 0, _kit.getUtf8Encoder.call(void 0, ), _kit.getU32Encoder.call(void 0, ))],
      [
        "website",
        _kit.addEncoderSizePrefix.call(void 0, _kit.getUtf8Encoder.call(void 0, ), _kit.getU32Encoder.call(void 0, ))
      ],
      ["logo", _kit.addEncoderSizePrefix.call(void 0, _kit.getUtf8Encoder.call(void 0, ), _kit.getU32Encoder.call(void 0, ))]
    ]),
    (value) => ({
      ...value,
      discriminator: CREATE_PARTNER_METADATA_DISCRIMINATOR
    })
  );
}
async function getCreatePartnerMetadataInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _6 => _6.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    partnerMetadata: {
      value: _nullishCoalesce(input.partnerMetadata, () => ( null)),
      isWritable: true
    },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: true },
    feeClaimer: { value: _nullishCoalesce(input.feeClaimer, () => ( null)), isWritable: false },
    systemProgram: {
      value: _nullishCoalesce(input.systemProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.partnerMetadata.value) {
    accounts.partnerMetadata.value = await _chunkEYDCQ6ERcjs.findPartnerMetadataPda.call(void 0, {
      feeClaimer: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "feeClaimer",
        accounts.feeClaimer.value
      )
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("partnerMetadata", accounts.partnerMetadata),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("feeClaimer", accounts.feeClaimer),
      getAccountMeta("systemProgram", accounts.systemProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getCreatePartnerMetadataInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}

// src/kit/generated/instructions/creatorWithdrawSurplus.ts















var CREATOR_WITHDRAW_SURPLUS_DISCRIMINATOR = new Uint8Array([
  165,
  3,
  137,
  7,
  28,
  134,
  76,
  80
]);
function getCreatorWithdrawSurplusInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: CREATOR_WITHDRAW_SURPLUS_DISCRIMINATOR
    })
  );
}
async function getCreatorWithdrawSurplusInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _7 => _7.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    poolAuthority: {
      value: _nullishCoalesce(input.poolAuthority, () => ( null)),
      isWritable: false
    },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: true },
    tokenQuoteAccount: {
      value: _nullishCoalesce(input.tokenQuoteAccount, () => ( null)),
      isWritable: true
    },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: false },
    creator: { value: _nullishCoalesce(input.creator, () => ( null)), isWritable: false },
    tokenQuoteProgram: {
      value: _nullishCoalesce(input.tokenQuoteProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("config", accounts.config),
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("tokenQuoteAccount", accounts.tokenQuoteAccount),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("creator", accounts.creator),
      getAccountMeta("tokenQuoteProgram", accounts.tokenQuoteProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getCreatorWithdrawSurplusInstructionDataEncoder().encode({}),
    programAddress
  });
}

// src/kit/generated/instructions/initializeVirtualPoolWithSplToken.ts
















var INITIALIZE_VIRTUAL_POOL_WITH_SPL_TOKEN_DISCRIMINATOR = new Uint8Array([140, 85, 215, 176, 102, 54, 104, 79]);
function getInitializeVirtualPoolWithSplTokenInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["params", getInitializePoolParametersEncoder()]
    ]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_VIRTUAL_POOL_WITH_SPL_TOKEN_DISCRIMINATOR
    })
  );
}
async function getInitializeVirtualPoolWithSplTokenInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _8 => _8.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    poolAuthority: {
      value: _nullishCoalesce(input.poolAuthority, () => ( null)),
      isWritable: false
    },
    creator: { value: _nullishCoalesce(input.creator, () => ( null)), isWritable: false },
    baseMint: { value: _nullishCoalesce(input.baseMint, () => ( null)), isWritable: true },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: false },
    pool: { value: _nullishCoalesce(input.pool, () => ( null)), isWritable: true },
    baseVault: { value: _nullishCoalesce(input.baseVault, () => ( null)), isWritable: true },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    mintMetadata: { value: _nullishCoalesce(input.mintMetadata, () => ( null)), isWritable: true },
    metadataProgram: {
      value: _nullishCoalesce(input.metadataProgram, () => ( null)),
      isWritable: false
    },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: true },
    tokenQuoteProgram: {
      value: _nullishCoalesce(input.tokenQuoteProgram, () => ( null)),
      isWritable: false
    },
    tokenProgram: { value: _nullishCoalesce(input.tokenProgram, () => ( null)), isWritable: false },
    systemProgram: {
      value: _nullishCoalesce(input.systemProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.baseVault.value) {
    accounts.baseVault.value = await _chunkEYDCQ6ERcjs.findBaseVaultPda.call(void 0, {
      baseMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "baseMint",
        accounts.baseMint.value
      ),
      pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "pool",
        accounts.pool.value
      )
    });
  }
  if (!accounts.quoteVault.value) {
    accounts.quoteVault.value = await _chunkEYDCQ6ERcjs.findQuoteVaultPda.call(void 0, {
      quoteMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "quoteMint",
        accounts.quoteMint.value
      ),
      pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "pool",
        accounts.pool.value
      )
    });
  }
  if (!accounts.metadataProgram.value) {
    accounts.metadataProgram.value = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("config", accounts.config),
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("creator", accounts.creator),
      getAccountMeta("baseMint", accounts.baseMint),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("pool", accounts.pool),
      getAccountMeta("baseVault", accounts.baseVault),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("mintMetadata", accounts.mintMetadata),
      getAccountMeta("metadataProgram", accounts.metadataProgram),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("tokenQuoteProgram", accounts.tokenQuoteProgram),
      getAccountMeta("tokenProgram", accounts.tokenProgram),
      getAccountMeta("systemProgram", accounts.systemProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getInitializeVirtualPoolWithSplTokenInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}

// src/kit/generated/instructions/initializeVirtualPoolWithToken2022.ts
















var INITIALIZE_VIRTUAL_POOL_WITH_TOKEN2022_DISCRIMINATOR = new Uint8Array([169, 118, 51, 78, 145, 110, 220, 155]);
function getInitializeVirtualPoolWithToken2022InstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["params", getInitializePoolParametersEncoder()]
    ]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_VIRTUAL_POOL_WITH_TOKEN2022_DISCRIMINATOR
    })
  );
}
async function getInitializeVirtualPoolWithToken2022InstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _9 => _9.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    poolAuthority: {
      value: _nullishCoalesce(input.poolAuthority, () => ( null)),
      isWritable: false
    },
    creator: { value: _nullishCoalesce(input.creator, () => ( null)), isWritable: false },
    baseMint: { value: _nullishCoalesce(input.baseMint, () => ( null)), isWritable: true },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: false },
    pool: { value: _nullishCoalesce(input.pool, () => ( null)), isWritable: true },
    baseVault: { value: _nullishCoalesce(input.baseVault, () => ( null)), isWritable: true },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: true },
    tokenQuoteProgram: {
      value: _nullishCoalesce(input.tokenQuoteProgram, () => ( null)),
      isWritable: false
    },
    tokenProgram: { value: _nullishCoalesce(input.tokenProgram, () => ( null)), isWritable: false },
    systemProgram: {
      value: _nullishCoalesce(input.systemProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.baseVault.value) {
    accounts.baseVault.value = await _chunkEYDCQ6ERcjs.findBaseVaultPda.call(void 0, {
      baseMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "baseMint",
        accounts.baseMint.value
      ),
      pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "pool",
        accounts.pool.value
      )
    });
  }
  if (!accounts.quoteVault.value) {
    accounts.quoteVault.value = await _chunkEYDCQ6ERcjs.findQuoteVaultPda.call(void 0, {
      quoteMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "quoteMint",
        accounts.quoteMint.value
      ),
      pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "pool",
        accounts.pool.value
      )
    });
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("config", accounts.config),
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("creator", accounts.creator),
      getAccountMeta("baseMint", accounts.baseMint),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("pool", accounts.pool),
      getAccountMeta("baseVault", accounts.baseVault),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("tokenQuoteProgram", accounts.tokenQuoteProgram),
      getAccountMeta("tokenProgram", accounts.tokenProgram),
      getAccountMeta("systemProgram", accounts.systemProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getInitializeVirtualPoolWithToken2022InstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}

// src/kit/generated/instructions/migrateMeteoraDamm.ts















var MIGRATE_METEORA_DAMM_DISCRIMINATOR = new Uint8Array([
  27,
  1,
  48,
  22,
  180,
  63,
  118,
  217
]);
function getMigrateMeteoraDammInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: MIGRATE_METEORA_DAMM_DISCRIMINATOR
    })
  );
}
function getMigrateMeteoraDammInstruction(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _10 => _10.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: true },
    migrationMetadata: {
      value: _nullishCoalesce(input.migrationMetadata, () => ( null)),
      isWritable: true
    },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    poolAuthority: { value: _nullishCoalesce(input.poolAuthority, () => ( null)), isWritable: true },
    pool: { value: _nullishCoalesce(input.pool, () => ( null)), isWritable: true },
    dammConfig: { value: _nullishCoalesce(input.dammConfig, () => ( null)), isWritable: false },
    lpMint: { value: _nullishCoalesce(input.lpMint, () => ( null)), isWritable: true },
    tokenAMint: { value: _nullishCoalesce(input.tokenAMint, () => ( null)), isWritable: true },
    tokenBMint: { value: _nullishCoalesce(input.tokenBMint, () => ( null)), isWritable: false },
    aVault: { value: _nullishCoalesce(input.aVault, () => ( null)), isWritable: true },
    bVault: { value: _nullishCoalesce(input.bVault, () => ( null)), isWritable: true },
    aTokenVault: { value: _nullishCoalesce(input.aTokenVault, () => ( null)), isWritable: true },
    bTokenVault: { value: _nullishCoalesce(input.bTokenVault, () => ( null)), isWritable: true },
    aVaultLpMint: { value: _nullishCoalesce(input.aVaultLpMint, () => ( null)), isWritable: true },
    bVaultLpMint: { value: _nullishCoalesce(input.bVaultLpMint, () => ( null)), isWritable: true },
    aVaultLp: { value: _nullishCoalesce(input.aVaultLp, () => ( null)), isWritable: true },
    bVaultLp: { value: _nullishCoalesce(input.bVaultLp, () => ( null)), isWritable: true },
    baseVault: { value: _nullishCoalesce(input.baseVault, () => ( null)), isWritable: true },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    virtualPoolLp: { value: _nullishCoalesce(input.virtualPoolLp, () => ( null)), isWritable: true },
    protocolTokenAFee: {
      value: _nullishCoalesce(input.protocolTokenAFee, () => ( null)),
      isWritable: true
    },
    protocolTokenBFee: {
      value: _nullishCoalesce(input.protocolTokenBFee, () => ( null)),
      isWritable: true
    },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: true },
    rent: { value: _nullishCoalesce(input.rent, () => ( null)), isWritable: false },
    mintMetadata: { value: _nullishCoalesce(input.mintMetadata, () => ( null)), isWritable: true },
    metadataProgram: {
      value: _nullishCoalesce(input.metadataProgram, () => ( null)),
      isWritable: false
    },
    ammProgram: { value: _nullishCoalesce(input.ammProgram, () => ( null)), isWritable: false },
    vaultProgram: { value: _nullishCoalesce(input.vaultProgram, () => ( null)), isWritable: false },
    tokenProgram: { value: _nullishCoalesce(input.tokenProgram, () => ( null)), isWritable: false },
    associatedTokenProgram: {
      value: _nullishCoalesce(input.associatedTokenProgram, () => ( null)),
      isWritable: false
    },
    systemProgram: {
      value: _nullishCoalesce(input.systemProgram, () => ( null)),
      isWritable: false
    }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.rent.value) {
    accounts.rent.value = "SysvarRent111111111111111111111111111111111";
  }
  if (!accounts.ammProgram.value) {
    accounts.ammProgram.value = "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB";
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("migrationMetadata", accounts.migrationMetadata),
      getAccountMeta("config", accounts.config),
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("pool", accounts.pool),
      getAccountMeta("dammConfig", accounts.dammConfig),
      getAccountMeta("lpMint", accounts.lpMint),
      getAccountMeta("tokenAMint", accounts.tokenAMint),
      getAccountMeta("tokenBMint", accounts.tokenBMint),
      getAccountMeta("aVault", accounts.aVault),
      getAccountMeta("bVault", accounts.bVault),
      getAccountMeta("aTokenVault", accounts.aTokenVault),
      getAccountMeta("bTokenVault", accounts.bTokenVault),
      getAccountMeta("aVaultLpMint", accounts.aVaultLpMint),
      getAccountMeta("bVaultLpMint", accounts.bVaultLpMint),
      getAccountMeta("aVaultLp", accounts.aVaultLp),
      getAccountMeta("bVaultLp", accounts.bVaultLp),
      getAccountMeta("baseVault", accounts.baseVault),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("virtualPoolLp", accounts.virtualPoolLp),
      getAccountMeta("protocolTokenAFee", accounts.protocolTokenAFee),
      getAccountMeta("protocolTokenBFee", accounts.protocolTokenBFee),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("rent", accounts.rent),
      getAccountMeta("mintMetadata", accounts.mintMetadata),
      getAccountMeta("metadataProgram", accounts.metadataProgram),
      getAccountMeta("ammProgram", accounts.ammProgram),
      getAccountMeta("vaultProgram", accounts.vaultProgram),
      getAccountMeta("tokenProgram", accounts.tokenProgram),
      getAccountMeta(
        "associatedTokenProgram",
        accounts.associatedTokenProgram
      ),
      getAccountMeta("systemProgram", accounts.systemProgram)
    ],
    data: getMigrateMeteoraDammInstructionDataEncoder().encode({}),
    programAddress
  });
}

// src/kit/generated/instructions/migrateMeteoraDammClaimLpToken.ts


















var MIGRATE_METEORA_DAMM_CLAIM_LP_TOKEN_DISCRIMINATOR = new Uint8Array(
  [139, 133, 2, 30, 91, 145, 127, 154]
);
function getMigrateMeteoraDammClaimLpTokenInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: MIGRATE_METEORA_DAMM_CLAIM_LP_TOKEN_DISCRIMINATOR
    })
  );
}
async function getMigrateMeteoraDammClaimLpTokenInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _11 => _11.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: false },
    migrationMetadata: {
      value: _nullishCoalesce(input.migrationMetadata, () => ( null)),
      isWritable: true
    },
    poolAuthority: { value: _nullishCoalesce(input.poolAuthority, () => ( null)), isWritable: true },
    lpMint: { value: _nullishCoalesce(input.lpMint, () => ( null)), isWritable: false },
    sourceToken: { value: _nullishCoalesce(input.sourceToken, () => ( null)), isWritable: true },
    destinationToken: {
      value: _nullishCoalesce(input.destinationToken, () => ( null)),
      isWritable: true
    },
    owner: { value: _nullishCoalesce(input.owner, () => ( null)), isWritable: false },
    sender: { value: _nullishCoalesce(input.sender, () => ( null)), isWritable: false },
    tokenProgram: { value: _nullishCoalesce(input.tokenProgram, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.sourceToken.value) {
    accounts.sourceToken.value = await _kit.getProgramDerivedAddress.call(void 0, {
      programAddress: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
      seeds: [
        _kit.getAddressEncoder.call(void 0, ).encode(
          _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
            "poolAuthority",
            accounts.poolAuthority.value
          )
        ),
        _kit.getBytesEncoder.call(void 0, ).encode(
          new Uint8Array([
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
          ])
        ),
        _kit.getAddressEncoder.call(void 0, ).encode(
          _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
            "migrationMetadata",
            accounts.migrationMetadata.value
          )
        )
      ]
    });
  }
  if (!accounts.destinationToken.value) {
    accounts.destinationToken.value = await _kit.getProgramDerivedAddress.call(void 0, {
      programAddress: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
      seeds: [
        _kit.getAddressEncoder.call(void 0, ).encode(
          _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
            "owner",
            accounts.owner.value
          )
        ),
        _kit.getBytesEncoder.call(void 0, ).encode(
          new Uint8Array([
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
          ])
        ),
        _kit.getAddressEncoder.call(void 0, ).encode(
          _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
            "migrationMetadata",
            accounts.migrationMetadata.value
          )
        )
      ]
    });
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("migrationMetadata", accounts.migrationMetadata),
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("lpMint", accounts.lpMint),
      getAccountMeta("sourceToken", accounts.sourceToken),
      getAccountMeta("destinationToken", accounts.destinationToken),
      getAccountMeta("owner", accounts.owner),
      getAccountMeta("sender", accounts.sender),
      getAccountMeta("tokenProgram", accounts.tokenProgram)
    ],
    data: getMigrateMeteoraDammClaimLpTokenInstructionDataEncoder().encode(
      {}
    ),
    programAddress
  });
}

// src/kit/generated/instructions/migrateMeteoraDammLockLpToken.ts


















var MIGRATE_METEORA_DAMM_LOCK_LP_TOKEN_DISCRIMINATOR = new Uint8Array([
  177,
  55,
  238,
  157,
  251,
  88,
  165,
  42
]);
function getMigrateMeteoraDammLockLpTokenInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: MIGRATE_METEORA_DAMM_LOCK_LP_TOKEN_DISCRIMINATOR
    })
  );
}
async function getMigrateMeteoraDammLockLpTokenInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _12 => _12.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: false },
    migrationMetadata: {
      value: _nullishCoalesce(input.migrationMetadata, () => ( null)),
      isWritable: true
    },
    poolAuthority: { value: _nullishCoalesce(input.poolAuthority, () => ( null)), isWritable: true },
    pool: { value: _nullishCoalesce(input.pool, () => ( null)), isWritable: true },
    lpMint: { value: _nullishCoalesce(input.lpMint, () => ( null)), isWritable: false },
    lockEscrow: { value: _nullishCoalesce(input.lockEscrow, () => ( null)), isWritable: true },
    owner: { value: _nullishCoalesce(input.owner, () => ( null)), isWritable: false },
    sourceTokens: { value: _nullishCoalesce(input.sourceTokens, () => ( null)), isWritable: true },
    escrowVault: { value: _nullishCoalesce(input.escrowVault, () => ( null)), isWritable: true },
    ammProgram: { value: _nullishCoalesce(input.ammProgram, () => ( null)), isWritable: false },
    aVault: { value: _nullishCoalesce(input.aVault, () => ( null)), isWritable: false },
    bVault: { value: _nullishCoalesce(input.bVault, () => ( null)), isWritable: false },
    aVaultLp: { value: _nullishCoalesce(input.aVaultLp, () => ( null)), isWritable: false },
    bVaultLp: { value: _nullishCoalesce(input.bVaultLp, () => ( null)), isWritable: false },
    aVaultLpMint: { value: _nullishCoalesce(input.aVaultLpMint, () => ( null)), isWritable: false },
    bVaultLpMint: { value: _nullishCoalesce(input.bVaultLpMint, () => ( null)), isWritable: false },
    tokenProgram: { value: _nullishCoalesce(input.tokenProgram, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.sourceTokens.value) {
    accounts.sourceTokens.value = await _kit.getProgramDerivedAddress.call(void 0, {
      programAddress: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
      seeds: [
        _kit.getAddressEncoder.call(void 0, ).encode(
          _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
            "poolAuthority",
            accounts.poolAuthority.value
          )
        ),
        _kit.getBytesEncoder.call(void 0, ).encode(
          new Uint8Array([
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
          ])
        ),
        _kit.getAddressEncoder.call(void 0, ).encode(
          _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
            "migrationMetadata",
            accounts.migrationMetadata.value
          )
        )
      ]
    });
  }
  if (!accounts.ammProgram.value) {
    accounts.ammProgram.value = "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB";
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("migrationMetadata", accounts.migrationMetadata),
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("pool", accounts.pool),
      getAccountMeta("lpMint", accounts.lpMint),
      getAccountMeta("lockEscrow", accounts.lockEscrow),
      getAccountMeta("owner", accounts.owner),
      getAccountMeta("sourceTokens", accounts.sourceTokens),
      getAccountMeta("escrowVault", accounts.escrowVault),
      getAccountMeta("ammProgram", accounts.ammProgram),
      getAccountMeta("aVault", accounts.aVault),
      getAccountMeta("bVault", accounts.bVault),
      getAccountMeta("aVaultLp", accounts.aVaultLp),
      getAccountMeta("bVaultLp", accounts.bVaultLp),
      getAccountMeta("aVaultLpMint", accounts.aVaultLpMint),
      getAccountMeta("bVaultLpMint", accounts.bVaultLpMint),
      getAccountMeta("tokenProgram", accounts.tokenProgram)
    ],
    data: getMigrateMeteoraDammLockLpTokenInstructionDataEncoder().encode(
      {}
    ),
    programAddress
  });
}

// src/kit/generated/instructions/migrationDammV2.ts















var MIGRATION_DAMM_V2_DISCRIMINATOR = new Uint8Array([
  156,
  169,
  230,
  103,
  53,
  228,
  80,
  64
]);
function getMigrationDammV2InstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: MIGRATION_DAMM_V2_DISCRIMINATOR
    })
  );
}
function getMigrationDammV2Instruction(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _13 => _13.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: true },
    migrationMetadata: {
      value: _nullishCoalesce(input.migrationMetadata, () => ( null)),
      isWritable: false
    },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    poolAuthority: { value: _nullishCoalesce(input.poolAuthority, () => ( null)), isWritable: true },
    pool: { value: _nullishCoalesce(input.pool, () => ( null)), isWritable: true },
    firstPositionNftMint: {
      value: _nullishCoalesce(input.firstPositionNftMint, () => ( null)),
      isWritable: true
    },
    firstPositionNftAccount: {
      value: _nullishCoalesce(input.firstPositionNftAccount, () => ( null)),
      isWritable: true
    },
    firstPosition: { value: _nullishCoalesce(input.firstPosition, () => ( null)), isWritable: true },
    secondPositionNftMint: {
      value: _nullishCoalesce(input.secondPositionNftMint, () => ( null)),
      isWritable: true
    },
    secondPositionNftAccount: {
      value: _nullishCoalesce(input.secondPositionNftAccount, () => ( null)),
      isWritable: true
    },
    secondPosition: {
      value: _nullishCoalesce(input.secondPosition, () => ( null)),
      isWritable: true
    },
    dammPoolAuthority: {
      value: _nullishCoalesce(input.dammPoolAuthority, () => ( null)),
      isWritable: false
    },
    ammProgram: { value: _nullishCoalesce(input.ammProgram, () => ( null)), isWritable: false },
    baseMint: { value: _nullishCoalesce(input.baseMint, () => ( null)), isWritable: true },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: true },
    tokenAVault: { value: _nullishCoalesce(input.tokenAVault, () => ( null)), isWritable: true },
    tokenBVault: { value: _nullishCoalesce(input.tokenBVault, () => ( null)), isWritable: true },
    baseVault: { value: _nullishCoalesce(input.baseVault, () => ( null)), isWritable: true },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: true },
    tokenBaseProgram: {
      value: _nullishCoalesce(input.tokenBaseProgram, () => ( null)),
      isWritable: false
    },
    tokenQuoteProgram: {
      value: _nullishCoalesce(input.tokenQuoteProgram, () => ( null)),
      isWritable: false
    },
    token2022Program: {
      value: _nullishCoalesce(input.token2022Program, () => ( null)),
      isWritable: false
    },
    dammEventAuthority: {
      value: _nullishCoalesce(input.dammEventAuthority, () => ( null)),
      isWritable: false
    },
    systemProgram: {
      value: _nullishCoalesce(input.systemProgram, () => ( null)),
      isWritable: false
    }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.ammProgram.value) {
    accounts.ammProgram.value = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG";
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("migrationMetadata", accounts.migrationMetadata),
      getAccountMeta("config", accounts.config),
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("pool", accounts.pool),
      getAccountMeta(
        "firstPositionNftMint",
        accounts.firstPositionNftMint
      ),
      getAccountMeta(
        "firstPositionNftAccount",
        accounts.firstPositionNftAccount
      ),
      getAccountMeta("firstPosition", accounts.firstPosition),
      getAccountMeta(
        "secondPositionNftMint",
        accounts.secondPositionNftMint
      ),
      getAccountMeta(
        "secondPositionNftAccount",
        accounts.secondPositionNftAccount
      ),
      getAccountMeta("secondPosition", accounts.secondPosition),
      getAccountMeta("dammPoolAuthority", accounts.dammPoolAuthority),
      getAccountMeta("ammProgram", accounts.ammProgram),
      getAccountMeta("baseMint", accounts.baseMint),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("tokenAVault", accounts.tokenAVault),
      getAccountMeta("tokenBVault", accounts.tokenBVault),
      getAccountMeta("baseVault", accounts.baseVault),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("tokenBaseProgram", accounts.tokenBaseProgram),
      getAccountMeta("tokenQuoteProgram", accounts.tokenQuoteProgram),
      getAccountMeta("token2022Program", accounts.token2022Program),
      getAccountMeta("dammEventAuthority", accounts.dammEventAuthority),
      getAccountMeta("systemProgram", accounts.systemProgram)
    ],
    data: getMigrationDammV2InstructionDataEncoder().encode({}),
    programAddress
  });
}

// src/kit/generated/instructions/migrationDammV2CreateMetadata.ts















var MIGRATION_DAMM_V2_CREATE_METADATA_DISCRIMINATOR = new Uint8Array([
  109,
  189,
  19,
  36,
  195,
  183,
  222,
  82
]);

// src/kit/generated/instructions/migrationMeteoraDammCreateMetadata.ts
















var MIGRATION_METEORA_DAMM_CREATE_METADATA_DISCRIMINATOR = new Uint8Array([47, 94, 126, 115, 221, 226, 194, 133]);
function getMigrationMeteoraDammCreateMetadataInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: MIGRATION_METEORA_DAMM_CREATE_METADATA_DISCRIMINATOR
    })
  );
}
async function getMigrationMeteoraDammCreateMetadataInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _14 => _14.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: false },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    migrationMetadata: {
      value: _nullishCoalesce(input.migrationMetadata, () => ( null)),
      isWritable: true
    },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: true },
    systemProgram: {
      value: _nullishCoalesce(input.systemProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.migrationMetadata.value) {
    accounts.migrationMetadata.value = await _chunkEYDCQ6ERcjs.findMigrationMetadataPda.call(void 0, {
      virtualPool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "virtualPool",
        accounts.virtualPool.value
      )
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("config", accounts.config),
      getAccountMeta("migrationMetadata", accounts.migrationMetadata),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("systemProgram", accounts.systemProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getMigrationMeteoraDammCreateMetadataInstructionDataEncoder().encode(
      {}
    ),
    programAddress
  });
}

// src/kit/generated/instructions/partnerWithdrawSurplus.ts















var PARTNER_WITHDRAW_SURPLUS_DISCRIMINATOR = new Uint8Array([
  168,
  173,
  72,
  100,
  201,
  98,
  38,
  92
]);
function getPartnerWithdrawSurplusInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: PARTNER_WITHDRAW_SURPLUS_DISCRIMINATOR
    })
  );
}
async function getPartnerWithdrawSurplusInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _15 => _15.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    poolAuthority: {
      value: _nullishCoalesce(input.poolAuthority, () => ( null)),
      isWritable: false
    },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: true },
    tokenQuoteAccount: {
      value: _nullishCoalesce(input.tokenQuoteAccount, () => ( null)),
      isWritable: true
    },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: false },
    feeClaimer: { value: _nullishCoalesce(input.feeClaimer, () => ( null)), isWritable: false },
    tokenQuoteProgram: {
      value: _nullishCoalesce(input.tokenQuoteProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("config", accounts.config),
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("tokenQuoteAccount", accounts.tokenQuoteAccount),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("feeClaimer", accounts.feeClaimer),
      getAccountMeta("tokenQuoteProgram", accounts.tokenQuoteProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getPartnerWithdrawSurplusInstructionDataEncoder().encode({}),
    programAddress
  });
}

// src/kit/generated/instructions/swap.ts















var SWAP_DISCRIMINATOR = new Uint8Array([
  248,
  198,
  158,
  145,
  225,
  117,
  135,
  200
]);
function getSwapInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["params", getSwapParametersEncoder()]
    ]),
    (value) => ({ ...value, discriminator: SWAP_DISCRIMINATOR })
  );
}
async function getSwapInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _16 => _16.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    poolAuthority: {
      value: _nullishCoalesce(input.poolAuthority, () => ( null)),
      isWritable: false
    },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    pool: { value: _nullishCoalesce(input.pool, () => ( null)), isWritable: true },
    inputTokenAccount: {
      value: _nullishCoalesce(input.inputTokenAccount, () => ( null)),
      isWritable: true
    },
    outputTokenAccount: {
      value: _nullishCoalesce(input.outputTokenAccount, () => ( null)),
      isWritable: true
    },
    baseVault: { value: _nullishCoalesce(input.baseVault, () => ( null)), isWritable: true },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    baseMint: { value: _nullishCoalesce(input.baseMint, () => ( null)), isWritable: false },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: false },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: false },
    tokenBaseProgram: {
      value: _nullishCoalesce(input.tokenBaseProgram, () => ( null)),
      isWritable: false
    },
    tokenQuoteProgram: {
      value: _nullishCoalesce(input.tokenQuoteProgram, () => ( null)),
      isWritable: false
    },
    referralTokenAccount: {
      value: _nullishCoalesce(input.referralTokenAccount, () => ( null)),
      isWritable: true
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("config", accounts.config),
      getAccountMeta("pool", accounts.pool),
      getAccountMeta("inputTokenAccount", accounts.inputTokenAccount),
      getAccountMeta("outputTokenAccount", accounts.outputTokenAccount),
      getAccountMeta("baseVault", accounts.baseVault),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("baseMint", accounts.baseMint),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("tokenBaseProgram", accounts.tokenBaseProgram),
      getAccountMeta("tokenQuoteProgram", accounts.tokenQuoteProgram),
      getAccountMeta(
        "referralTokenAccount",
        accounts.referralTokenAccount
      ),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getSwapInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}

// src/kit/generated/instructions/swap2.ts















var SWAP2_DISCRIMINATOR = new Uint8Array([
  65,
  75,
  63,
  76,
  235,
  91,
  91,
  136
]);
function getSwap2InstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["params", getSwapParameters2Encoder()]
    ]),
    (value) => ({ ...value, discriminator: SWAP2_DISCRIMINATOR })
  );
}
async function getSwap2InstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _17 => _17.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    poolAuthority: {
      value: _nullishCoalesce(input.poolAuthority, () => ( null)),
      isWritable: false
    },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    pool: { value: _nullishCoalesce(input.pool, () => ( null)), isWritable: true },
    inputTokenAccount: {
      value: _nullishCoalesce(input.inputTokenAccount, () => ( null)),
      isWritable: true
    },
    outputTokenAccount: {
      value: _nullishCoalesce(input.outputTokenAccount, () => ( null)),
      isWritable: true
    },
    baseVault: { value: _nullishCoalesce(input.baseVault, () => ( null)), isWritable: true },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    baseMint: { value: _nullishCoalesce(input.baseMint, () => ( null)), isWritable: false },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: false },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: false },
    tokenBaseProgram: {
      value: _nullishCoalesce(input.tokenBaseProgram, () => ( null)),
      isWritable: false
    },
    tokenQuoteProgram: {
      value: _nullishCoalesce(input.tokenQuoteProgram, () => ( null)),
      isWritable: false
    },
    referralTokenAccount: {
      value: _nullishCoalesce(input.referralTokenAccount, () => ( null)),
      isWritable: true
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("config", accounts.config),
      getAccountMeta("pool", accounts.pool),
      getAccountMeta("inputTokenAccount", accounts.inputTokenAccount),
      getAccountMeta("outputTokenAccount", accounts.outputTokenAccount),
      getAccountMeta("baseVault", accounts.baseVault),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("baseMint", accounts.baseMint),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("tokenBaseProgram", accounts.tokenBaseProgram),
      getAccountMeta("tokenQuoteProgram", accounts.tokenQuoteProgram),
      getAccountMeta(
        "referralTokenAccount",
        accounts.referralTokenAccount
      ),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getSwap2InstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}

// src/kit/generated/instructions/transferPoolCreator.ts















var TRANSFER_POOL_CREATOR_DISCRIMINATOR = new Uint8Array([
  20,
  7,
  169,
  33,
  58,
  147,
  166,
  33
]);
function getTransferPoolCreatorInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: TRANSFER_POOL_CREATOR_DISCRIMINATOR
    })
  );
}
async function getTransferPoolCreatorInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _18 => _18.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: true },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    creator: { value: _nullishCoalesce(input.creator, () => ( null)), isWritable: false },
    newCreator: { value: _nullishCoalesce(input.newCreator, () => ( null)), isWritable: false },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("config", accounts.config),
      getAccountMeta("creator", accounts.creator),
      getAccountMeta("newCreator", accounts.newCreator),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getTransferPoolCreatorInstructionDataEncoder().encode({}),
    programAddress
  });
}

// src/kit/generated/instructions/withdrawLeftover.ts


















var WITHDRAW_LEFTOVER_DISCRIMINATOR = new Uint8Array([
  20,
  198,
  202,
  237,
  235,
  243,
  183,
  66
]);
function getWithdrawLeftoverInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: WITHDRAW_LEFTOVER_DISCRIMINATOR
    })
  );
}
async function getWithdrawLeftoverInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _19 => _19.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    poolAuthority: {
      value: _nullishCoalesce(input.poolAuthority, () => ( null)),
      isWritable: false
    },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: true },
    tokenBaseAccount: {
      value: _nullishCoalesce(input.tokenBaseAccount, () => ( null)),
      isWritable: true
    },
    baseVault: { value: _nullishCoalesce(input.baseVault, () => ( null)), isWritable: true },
    baseMint: { value: _nullishCoalesce(input.baseMint, () => ( null)), isWritable: false },
    leftoverReceiver: {
      value: _nullishCoalesce(input.leftoverReceiver, () => ( null)),
      isWritable: false
    },
    tokenBaseProgram: {
      value: _nullishCoalesce(input.tokenBaseProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.tokenBaseAccount.value) {
    accounts.tokenBaseAccount.value = await _kit.getProgramDerivedAddress.call(void 0, {
      programAddress: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
      seeds: [
        _kit.getAddressEncoder.call(void 0, ).encode(
          _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
            "leftoverReceiver",
            accounts.leftoverReceiver.value
          )
        ),
        _kit.getAddressEncoder.call(void 0, ).encode(
          _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
            "tokenBaseProgram",
            accounts.tokenBaseProgram.value
          )
        ),
        _kit.getAddressEncoder.call(void 0, ).encode(
          _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
            "baseMint",
            accounts.baseMint.value
          )
        )
      ]
    });
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("config", accounts.config),
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("tokenBaseAccount", accounts.tokenBaseAccount),
      getAccountMeta("baseVault", accounts.baseVault),
      getAccountMeta("baseMint", accounts.baseMint),
      getAccountMeta("leftoverReceiver", accounts.leftoverReceiver),
      getAccountMeta("tokenBaseProgram", accounts.tokenBaseProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getWithdrawLeftoverInstructionDataEncoder().encode({}),
    programAddress
  });
}

// src/kit/generated/instructions/withdrawMigrationFee.ts

















var WITHDRAW_MIGRATION_FEE_DISCRIMINATOR = new Uint8Array([
  237,
  142,
  45,
  23,
  129,
  6,
  222,
  162
]);
function getWithdrawMigrationFeeInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["flag", _kit.getU8Encoder.call(void 0, )]
    ]),
    (value) => ({
      ...value,
      discriminator: WITHDRAW_MIGRATION_FEE_DISCRIMINATOR
    })
  );
}
async function getWithdrawMigrationFeeInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _20 => _20.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    poolAuthority: {
      value: _nullishCoalesce(input.poolAuthority, () => ( null)),
      isWritable: false
    },
    config: { value: _nullishCoalesce(input.config, () => ( null)), isWritable: false },
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: true },
    tokenQuoteAccount: {
      value: _nullishCoalesce(input.tokenQuoteAccount, () => ( null)),
      isWritable: true
    },
    quoteVault: { value: _nullishCoalesce(input.quoteVault, () => ( null)), isWritable: true },
    quoteMint: { value: _nullishCoalesce(input.quoteMint, () => ( null)), isWritable: false },
    sender: { value: _nullishCoalesce(input.sender, () => ( null)), isWritable: false },
    tokenQuoteProgram: {
      value: _nullishCoalesce(input.tokenQuoteProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("poolAuthority", accounts.poolAuthority),
      getAccountMeta("config", accounts.config),
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("tokenQuoteAccount", accounts.tokenQuoteAccount),
      getAccountMeta("quoteVault", accounts.quoteVault),
      getAccountMeta("quoteMint", accounts.quoteMint),
      getAccountMeta("sender", accounts.sender),
      getAccountMeta("tokenQuoteProgram", accounts.tokenQuoteProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getWithdrawMigrationFeeInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}

// src/kit/generated/instructions/zapProtocolFee.ts

















var ZAP_PROTOCOL_FEE_DISCRIMINATOR = new Uint8Array([
  213,
  155,
  187,
  34,
  56,
  182,
  91,
  240
]);

// src/kit/generated/programs/dynamicBondingCurve.ts
var DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN";

// src/kit/generated/instructions/createVirtualPoolMetadata.ts
var CREATE_VIRTUAL_POOL_METADATA_DISCRIMINATOR = new Uint8Array([
  45,
  97,
  187,
  103,
  254,
  109,
  124,
  134
]);
function getCreateVirtualPoolMetadataInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["padding", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 96)],
      ["name", _kit.addEncoderSizePrefix.call(void 0, _kit.getUtf8Encoder.call(void 0, ), _kit.getU32Encoder.call(void 0, ))],
      [
        "website",
        _kit.addEncoderSizePrefix.call(void 0, _kit.getUtf8Encoder.call(void 0, ), _kit.getU32Encoder.call(void 0, ))
      ],
      ["logo", _kit.addEncoderSizePrefix.call(void 0, _kit.getUtf8Encoder.call(void 0, ), _kit.getU32Encoder.call(void 0, ))]
    ]),
    (value) => ({
      ...value,
      discriminator: CREATE_VIRTUAL_POOL_METADATA_DISCRIMINATOR
    })
  );
}
async function getCreateVirtualPoolMetadataInstructionAsync(input, config) {
  const programAddress = _nullishCoalesce(_optionalChain([config, 'optionalAccess', _21 => _21.programAddress]), () => ( DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS));
  const originalAccounts = {
    virtualPool: { value: _nullishCoalesce(input.virtualPool, () => ( null)), isWritable: true },
    virtualPoolMetadata: {
      value: _nullishCoalesce(input.virtualPoolMetadata, () => ( null)),
      isWritable: true
    },
    creator: { value: _nullishCoalesce(input.creator, () => ( null)), isWritable: false },
    payer: { value: _nullishCoalesce(input.payer, () => ( null)), isWritable: true },
    systemProgram: {
      value: _nullishCoalesce(input.systemProgram, () => ( null)),
      isWritable: false
    },
    eventAuthority: {
      value: _nullishCoalesce(input.eventAuthority, () => ( null)),
      isWritable: false
    },
    program: { value: _nullishCoalesce(input.program, () => ( null)), isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.virtualPoolMetadata.value) {
    accounts.virtualPoolMetadata.value = await _chunkEYDCQ6ERcjs.findVirtualPoolMetadataPda.call(void 0, {
      virtualPool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
        "virtualPool",
        accounts.virtualPool.value
      )
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await _chunkEYDCQ6ERcjs.findEventAuthorityPda.call(void 0, );
  }
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("virtualPool", accounts.virtualPool),
      getAccountMeta("virtualPoolMetadata", accounts.virtualPoolMetadata),
      getAccountMeta("creator", accounts.creator),
      getAccountMeta("payer", accounts.payer),
      getAccountMeta("systemProgram", accounts.systemProgram),
      getAccountMeta("eventAuthority", accounts.eventAuthority),
      getAccountMeta("program", accounts.program)
    ],
    data: getCreateVirtualPoolMetadataInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}

// src/kit/constants.ts
var DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2 = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN";
var METAPLEX_PROGRAM_ADDRESS = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
var DAMM_V1_PROGRAM_ADDRESS = "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB";
var DAMM_V2_PROGRAM_ADDRESS = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG";
var LOCKER_PROGRAM_ADDRESS = "LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn";
var VAULT_PROGRAM_ADDRESS = "24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi";
var BASE_ADDRESS = "HWzXGcGHy4tcpYfaRDCyLNzXqBTv3E6BttpCH2vJxArv";
var POOL_AUTHORITY_ADDRESS = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
var TOKEN_PROGRAM_ADDRESS = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
var TOKEN_2022_PROGRAM_ADDRESS = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
var ASSOCIATED_TOKEN_PROGRAM_ADDRESS = "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
var SYSTEM_PROGRAM_ADDRESS = "11111111111111111111111111111111";
var SYSVAR_RENT_ADDRESS = "SysvarRent111111111111111111111111111111111";
var SYSVAR_INSTRUCTIONS_ADDRESS = "Sysvar1nstructions1111111111111111111111111";
var COMPUTE_BUDGET_PROGRAM_ADDRESS = "ComputeBudget111111111111111111111111111111";
var NATIVE_MINT_ADDRESS = "So11111111111111111111111111111111111111112";
var Q128 = 2n ** 128n;
var LAMPORTS_PER_SOL = 1000000000n;

// src/kit/helpers/common.ts



function collectKitTransactionSigners(...values) {
  const uniqueSigners = /* @__PURE__ */ new Map();
  for (const value of values) {
    collectKitTransactionSignersFromValue(value, uniqueSigners);
  }
  return [...uniqueSigners.values()];
}
function collectKitTransactionSignersFromValue(value, signers) {
  if (value == null) {
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      collectKitTransactionSignersFromValue(item, signers);
    }
    return;
  }
  if (isKitTransactionSigner(value)) {
    signers.set(value.address, value);
  }
}
function isKitTransactionSigner(value) {
  return value != null && typeof value === "object" && "address" in value && _kit.isTransactionSigner.call(void 0, 
    value
  );
}
function toAddress(value) {
  if (isKitTransactionSigner(value)) {
    return value.address;
  }
  return value;
}
function toOptionalAddress(value) {
  if (value == null) {
    return void 0;
  }
  return toAddress(value);
}
function toAddressOrSigner(value) {
  if (isKitTransactionSigner(value)) {
    return value;
  }
  return value;
}
function toSigner(value) {
  if (isKitTransactionSigner(value)) {
    return value;
  }
  throw new Error(
    `Expected a TransactionSigner but received an address: ${value}`
  );
}
function isBN(value) {
  return value != null && typeof value === "object" && "toNumber" in value && "toArrayLike" in value && typeof value.toString === "function";
}
function convertBNFields(value) {
  if (isBN(value)) {
    return BigInt(value.toString());
  }
  if (value != null && typeof value === "object" && typeof value.byteLength === "number") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(convertBNFields);
  }
  if (value != null && typeof value === "object") {
    const result = {};
    for (const [k, v] of Object.entries(value)) {
      result[k] = convertBNFields(v);
    }
    return result;
  }
  return value;
}

// src/kit/helpers/pda.ts




var addressEncoder = _kit.getAddressEncoder.call(void 0, );
function compareAddressesByBytes(a, b) {
  const bufA = addressEncoder.encode(a);
  const bufB = addressEncoder.encode(b);
  for (let i = 0; i < 32; i++) {
    const diff = bufA[i] - bufB[i];
    if (diff !== 0) return diff;
  }
  return 0;
}
async function findPoolPda(quoteMint, baseMint, config) {
  const isQuoteBigger = compareAddressesByBytes(quoteMint, baseMint) > 0;
  const firstMint = isQuoteBigger ? quoteMint : baseMint;
  const secondMint = isQuoteBigger ? baseMint : quoteMint;
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
    seeds: [
      "pool",
      addressEncoder.encode(config),
      addressEncoder.encode(firstMint),
      addressEncoder.encode(secondMint)
    ]
  });
  return pda;
}
async function findTokenVaultPda(pool, mint) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
    seeds: [
      "token_vault",
      addressEncoder.encode(mint),
      addressEncoder.encode(pool)
    ]
  });
  return pda;
}
async function findMintMetadataPda(mint) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: METAPLEX_PROGRAM_ADDRESS,
    seeds: [
      "metadata",
      addressEncoder.encode(METAPLEX_PROGRAM_ADDRESS),
      addressEncoder.encode(mint)
    ]
  });
  return pda;
}
async function findDammV1PoolPda(config, tokenAMint, tokenBMint) {
  const isABigger = compareAddressesByBytes(tokenAMint, tokenBMint) > 0;
  const firstMint = isABigger ? tokenAMint : tokenBMint;
  const secondMint = isABigger ? tokenBMint : tokenAMint;
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V1_PROGRAM_ADDRESS,
    seeds: [
      addressEncoder.encode(firstMint),
      addressEncoder.encode(secondMint),
      addressEncoder.encode(config)
    ]
  });
  return pda;
}
async function findDammV1LpMintPda(pool) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V1_PROGRAM_ADDRESS,
    seeds: ["lp_mint", addressEncoder.encode(pool)]
  });
  return pda;
}
async function findDammV1VaultLpPda(vault, pool) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V1_PROGRAM_ADDRESS,
    seeds: [addressEncoder.encode(vault), addressEncoder.encode(pool)]
  });
  return pda;
}
async function findDammV1LockEscrowPda(dammPool, creator) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V1_PROGRAM_ADDRESS,
    seeds: [
      "lock_escrow",
      addressEncoder.encode(dammPool),
      addressEncoder.encode(creator)
    ]
  });
  return pda;
}
async function findDammV1ProtocolFeePda(mint, pool) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V1_PROGRAM_ADDRESS,
    seeds: [
      "fee",
      addressEncoder.encode(mint),
      addressEncoder.encode(pool)
    ]
  });
  return pda;
}
async function findDammV2PoolPda(config, tokenAMint, tokenBMint) {
  const isABigger = compareAddressesByBytes(tokenAMint, tokenBMint) > 0;
  const firstMint = isABigger ? tokenAMint : tokenBMint;
  const secondMint = isABigger ? tokenBMint : tokenAMint;
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V2_PROGRAM_ADDRESS,
    seeds: [
      "pool",
      addressEncoder.encode(config),
      addressEncoder.encode(firstMint),
      addressEncoder.encode(secondMint)
    ]
  });
  return pda;
}
async function findDammV2TokenVaultPda(pool, mint) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V2_PROGRAM_ADDRESS,
    seeds: [
      "token_vault",
      addressEncoder.encode(mint),
      addressEncoder.encode(pool)
    ]
  });
  return pda;
}
async function findDammV2PositionPda(positionNft) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V2_PROGRAM_ADDRESS,
    seeds: ["position", addressEncoder.encode(positionNft)]
  });
  return pda;
}
async function findDammV2PositionNftAccountPda(positionNftMint) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V2_PROGRAM_ADDRESS,
    seeds: ["position_nft_account", addressEncoder.encode(positionNftMint)]
  });
  return pda;
}
async function findDammV2EventAuthorityPda() {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V2_PROGRAM_ADDRESS,
    seeds: ["__event_authority"]
  });
  return pda;
}
async function findDammV2PoolAuthorityPda() {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DAMM_V2_PROGRAM_ADDRESS,
    seeds: ["pool_authority"]
  });
  return pda;
}
async function findDammV2MigrationMetadataPda(virtualPool) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
    seeds: ["damm_v2", addressEncoder.encode(virtualPool)]
  });
  return pda;
}
async function findEscrowPda(base) {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: LOCKER_PROGRAM_ADDRESS,
    seeds: ["escrow", addressEncoder.encode(base)]
  });
  return pda;
}
async function findLockerEventAuthorityPda() {
  const [pda] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: LOCKER_PROGRAM_ADDRESS,
    seeds: ["__event_authority"]
  });
  return pda;
}
async function findVaultPdas(tokenMint, seedBaseKey) {
  const base = _nullishCoalesce(seedBaseKey, () => ( BASE_ADDRESS));
  const [vault] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: VAULT_PROGRAM_ADDRESS,
    seeds: [
      "vault",
      addressEncoder.encode(tokenMint),
      addressEncoder.encode(base)
    ]
  });
  const [tokenVault] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: VAULT_PROGRAM_ADDRESS,
    seeds: ["token_vault", addressEncoder.encode(vault)]
  });
  const [lpMint] = await _kit.getProgramDerivedAddress.call(void 0, {
    programAddress: VAULT_PROGRAM_ADDRESS,
    seeds: ["lp_mint", addressEncoder.encode(vault)]
  });
  return { vaultPda: vault, tokenVaultPda: tokenVault, lpMintPda: lpMint };
}

// src/kit/helpers/rateLimiter.ts
function isRateLimiterApplied(currentPoint, activationPoint, tradeDirection, maxLimiterDuration, referenceAmount, feeIncrementBps) {
  if (referenceAmount.isZero() && maxLimiterDuration.isZero() && feeIncrementBps.isZero()) {
    return false;
  }
  if (tradeDirection === 0 /* BaseToQuote */) {
    return false;
  }
  const lastEffectiveRateLimiterPoint = activationPoint.add(maxLimiterDuration);
  return currentPoint.lte(lastEffectiveRateLimiterPoint);
}

// src/kit/helpers/token.ts




var _system = require('@solana-program/system');





var _token = require('@solana-program/token');
function getTokenProgramAddress(tokenType) {
  return tokenType === 0 /* SPL */ ? TOKEN_PROGRAM_ADDRESS : TOKEN_2022_PROGRAM_ADDRESS;
}
async function getTokenTypeForMint(rpc, mint) {
  if (mint === NATIVE_MINT_ADDRESS) {
    return 0 /* SPL */;
  }
  const account = await _kit.fetchEncodedAccount.call(void 0, rpc, mint);
  if (!account.exists) {
    throw new Error(`Mint account not found: ${mint}`);
  }
  return account.programAddress === TOKEN_PROGRAM_ADDRESS ? 0 /* SPL */ : 1 /* Token2022 */;
}
function toSigner2(value) {
  return typeof value === "string" ? _kit.createNoopSigner.call(void 0, value) : value;
}
function toAddress2(value) {
  return typeof value === "string" ? value : value.address;
}
async function createAssociatedTokenAccountIdempotentInstruction(payer, owner, mint, tokenProgram) {
  const [ata] = await _token.findAssociatedTokenPda.call(void 0, {
    owner,
    tokenProgram,
    mint
  });
  const instruction = _token.getCreateAssociatedTokenIdempotentInstruction.call(void 0, {
    payer: toSigner2(payer),
    ata,
    owner,
    mint,
    tokenProgram
  });
  return { ata, instruction };
}
function wrapSolInstructions(from, to, amount) {
  const transferIx = _system.getTransferSolInstruction.call(void 0, {
    source: toSigner2(from),
    destination: to,
    amount
  });
  const syncNativeIx = _token.getSyncNativeInstruction.call(void 0, {
    account: to
  });
  return [transferIx, syncNativeIx];
}
async function unwrapSolInstruction(owner, receiver) {
  const ownerAddress = toAddress2(owner);
  const [wSolAta] = await _token.findAssociatedTokenPda.call(void 0, {
    owner: ownerAddress,
    tokenProgram: TOKEN_PROGRAM_ADDRESS,
    mint: NATIVE_MINT_ADDRESS
  });
  return _token.getCloseAccountInstruction.call(void 0, {
    account: wSolAta,
    destination: receiver,
    owner: toSigner2(owner)
  });
}

// src/kit/services/state.ts
var DynamicBondingCurveKitStateService = class {
  constructor(rpc) {
    this.rpc = rpc;
  }
  async getPool(poolAddress) {
    return fetchVirtualPool(this.rpc, poolAddress);
  }
  async getMaybePool(poolAddress) {
    return fetchMaybeVirtualPool(this.rpc, poolAddress);
  }
  async getPoolConfig(configAddress) {
    return fetchPoolConfig(this.rpc, configAddress);
  }
  async getMaybePoolConfig(configAddress) {
    return fetchMaybePoolConfig(this.rpc, configAddress);
  }
  /**
   * Get computed pool state including price, reserves, and graduation progress.
   */
  async getPoolState(poolAddress, baseDecimals, quoteDecimals) {
    const pool = await fetchVirtualPool(this.rpc, poolAddress);
    const config = await fetchPoolConfig(this.rpc, pool.data.config);
    const price = getPriceFromSqrtPriceBigint(
      pool.data.sqrtPrice,
      baseDecimals,
      quoteDecimals
    );
    const threshold = config.data.migrationQuoteThreshold;
    const progress = threshold > 0n ? Math.min(
      Number(pool.data.quoteReserve) / Number(threshold),
      1
    ) : 0;
    return {
      price,
      quoteReserve: Number(pool.data.quoteReserve) / Number(LAMPORTS_PER_SOL),
      baseReserve: Number(pool.data.baseReserve) / 10 ** baseDecimals,
      graduated: progress >= 1,
      progress,
      baseMint: pool.data.baseMint,
      config: pool.data.config
    };
  }
  /**
   * Get fee breakdown for creator and partner from pool account data.
   */
  async getPoolFeeBreakdown(poolAddress) {
    const pool = await fetchVirtualPool(this.rpc, poolAddress);
    const config = await fetchPoolConfig(this.rpc, pool.data.config);
    const creatorPct = BigInt(config.data.creatorTradingFeePercentage);
    const totalBaseFee = pool.data.metrics.totalTradingBaseFee;
    const totalQuoteFee = pool.data.metrics.totalTradingQuoteFee;
    const creatorTotalBase = totalBaseFee * creatorPct / 100n;
    const creatorTotalQuote = totalQuoteFee * creatorPct / 100n;
    const partnerTotalBase = totalBaseFee - creatorTotalBase;
    const partnerTotalQuote = totalQuoteFee - creatorTotalQuote;
    return {
      creator: {
        unclaimedBaseFee: pool.data.creatorBaseFee,
        unclaimedQuoteFee: pool.data.creatorQuoteFee,
        claimedBaseFee: creatorTotalBase - pool.data.creatorBaseFee,
        claimedQuoteFee: creatorTotalQuote - pool.data.creatorQuoteFee,
        totalBaseFee: creatorTotalBase,
        totalQuoteFee: creatorTotalQuote
      },
      partner: {
        unclaimedBaseFee: pool.data.partnerBaseFee,
        unclaimedQuoteFee: pool.data.partnerQuoteFee,
        claimedBaseFee: partnerTotalBase - pool.data.partnerBaseFee,
        claimedQuoteFee: partnerTotalQuote - pool.data.partnerQuoteFee,
        totalBaseFee: partnerTotalBase,
        totalQuoteFee: partnerTotalQuote
      }
    };
  }
  /**
   * Get quote token curve progress (0..1).
   */
  async getQuoteTokenCurveProgress(poolAddress) {
    const pool = await fetchVirtualPool(this.rpc, poolAddress);
    const config = await fetchPoolConfig(this.rpc, pool.data.config);
    const threshold = config.data.migrationQuoteThreshold;
    if (threshold === 0n) return 0;
    const progress = Number(pool.data.quoteReserve) / Number(threshold);
    return Math.min(Math.max(progress, 0), 1);
  }
};
function getPriceFromSqrtPriceBigint(sqrtPrice, baseDecimals, quoteDecimals) {
  const precision = 18;
  const scale = 10n ** BigInt(precision);
  const sqrtPriceSq = sqrtPrice * sqrtPrice;
  const scaledLamportPrice = sqrtPriceSq * scale / Q128;
  const decimalShift = baseDecimals - quoteDecimals;
  const lamportPriceFloat = Number(scaledLamportPrice) / Number(scale);
  return lamportPriceFloat * 10 ** decimalShift;
}

// src/kit/services/creator.ts
var DynamicBondingCurveKitCreatorService = class {
  constructor(rpc) {
    this.rpc = rpc;
    this.state = new DynamicBondingCurveKitStateService(rpc);
  }
  async createPoolMetadata(params) {
    const creatorSigner = toSigner(params.creator);
    const payerSigner = toSigner(params.payer);
    const virtualPoolAddress = toAddress(params.virtualPool);
    const ix = await getCreateVirtualPoolMetadataInstructionAsync({
      virtualPool: virtualPoolAddress,
      creator: creatorSigner,
      payer: payerSigner,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      padding: new Uint8Array(96),
      name: params.name,
      website: params.website,
      logo: params.logo
    });
    return {
      instructions: [ix],
      signers: collectKitTransactionSigners(creatorSigner, payerSigner)
    };
  }
  async claimCreatorTradingFee(params) {
    const creatorSigner = toSigner(params.creator);
    const payerInput = toAddressOrSigner(params.payer);
    const poolAddress = toAddress(params.pool);
    const poolAccount = await this.state.getPool(poolAddress);
    const poolState = poolAccount.data;
    const configAccount = await this.state.getPoolConfig(poolState.config);
    const configState = configAccount.data;
    const tokenBaseProgram = getTokenProgramAddress(
      configState.tokenType
    );
    const tokenQuoteProgram = getTokenProgramAddress(
      configState.quoteTokenFlag
    );
    const isSOLQuoteMint = configState.quoteMint === NATIVE_MINT_ADDRESS;
    const preInstructions = [];
    const postInstructions = [];
    const creatorAddress = creatorSigner.address;
    const receiver = params.receiver ? toAddress(params.receiver) : void 0;
    let tokenBaseAccount;
    let tokenQuoteAccount;
    if (isSOLQuoteMint) {
      const tempWSolOwner = receiver && receiver !== creatorAddress ? params.tempWSolAcc ? toAddressOrSigner(params.tempWSolAcc) : creatorSigner : creatorSigner;
      const tempWSolAddress = toAddress(tempWSolOwner);
      const feeReceiver = receiver ? receiver : creatorAddress;
      const baseAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        feeReceiver,
        poolState.baseMint,
        tokenBaseProgram
      );
      preInstructions.push(baseAta.instruction);
      tokenBaseAccount = baseAta.ata;
      const quoteAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        tempWSolAddress,
        configState.quoteMint,
        tokenQuoteProgram
      );
      preInstructions.push(quoteAta.instruction);
      tokenQuoteAccount = quoteAta.ata;
      const unwrapIx = await unwrapSolInstruction(
        tempWSolOwner,
        feeReceiver
      );
      postInstructions.push(unwrapIx);
    } else {
      const feeReceiver = receiver ? receiver : creatorAddress;
      const baseAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        feeReceiver,
        poolState.baseMint,
        tokenBaseProgram
      );
      preInstructions.push(baseAta.instruction);
      tokenBaseAccount = baseAta.ata;
      const quoteAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        feeReceiver,
        configState.quoteMint,
        tokenQuoteProgram
      );
      preInstructions.push(quoteAta.instruction);
      tokenQuoteAccount = quoteAta.ata;
    }
    const ix = await getClaimCreatorTradingFeeInstructionAsync({
      pool: poolAddress,
      tokenAAccount: tokenBaseAccount,
      tokenBAccount: tokenQuoteAccount,
      baseVault: poolState.baseVault,
      quoteVault: poolState.quoteVault,
      baseMint: poolState.baseMint,
      quoteMint: configState.quoteMint,
      creator: creatorSigner,
      tokenBaseProgram,
      tokenQuoteProgram,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      maxBaseAmount: BigInt(params.maxBaseAmount.toString()),
      maxQuoteAmount: BigInt(params.maxQuoteAmount.toString())
    });
    return {
      instructions: [...preInstructions, ix, ...postInstructions],
      signers: collectKitTransactionSigners(
        creatorSigner,
        params.payer,
        params.tempWSolAcc
      )
    };
  }
  async claimCreatorTradingFee2(params) {
    const creatorSigner = toSigner(params.creator);
    const payerInput = toAddressOrSigner(params.payer);
    const poolAddress = toAddress(params.pool);
    const receiverAddress = toAddress(params.receiver);
    const poolAccount = await this.state.getPool(poolAddress);
    const poolState = poolAccount.data;
    const configAccount = await this.state.getPoolConfig(poolState.config);
    const configState = configAccount.data;
    const tokenBaseProgram = getTokenProgramAddress(
      configState.tokenType
    );
    const tokenQuoteProgram = getTokenProgramAddress(
      configState.quoteTokenFlag
    );
    const isSOLQuoteMint = configState.quoteMint === NATIVE_MINT_ADDRESS;
    const preInstructions = [];
    const postInstructions = [];
    const creatorAddress = creatorSigner.address;
    let tokenBaseAccount;
    let tokenQuoteAccount;
    if (isSOLQuoteMint) {
      const baseAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        receiverAddress,
        poolState.baseMint,
        tokenBaseProgram
      );
      preInstructions.push(baseAta.instruction);
      tokenBaseAccount = baseAta.ata;
      const quoteAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        creatorAddress,
        configState.quoteMint,
        tokenQuoteProgram
      );
      preInstructions.push(quoteAta.instruction);
      tokenQuoteAccount = quoteAta.ata;
      const unwrapIx = await unwrapSolInstruction(
        creatorSigner,
        receiverAddress
      );
      postInstructions.push(unwrapIx);
    } else {
      const baseAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        receiverAddress,
        poolState.baseMint,
        tokenBaseProgram
      );
      preInstructions.push(baseAta.instruction);
      tokenBaseAccount = baseAta.ata;
      const quoteAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        receiverAddress,
        configState.quoteMint,
        tokenQuoteProgram
      );
      preInstructions.push(quoteAta.instruction);
      tokenQuoteAccount = quoteAta.ata;
    }
    const ix = await getClaimCreatorTradingFeeInstructionAsync({
      pool: poolAddress,
      tokenAAccount: tokenBaseAccount,
      tokenBAccount: tokenQuoteAccount,
      baseVault: poolState.baseVault,
      quoteVault: poolState.quoteVault,
      baseMint: poolState.baseMint,
      quoteMint: configState.quoteMint,
      creator: creatorSigner,
      tokenBaseProgram,
      tokenQuoteProgram,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      maxBaseAmount: BigInt(params.maxBaseAmount.toString()),
      maxQuoteAmount: BigInt(params.maxQuoteAmount.toString())
    });
    return {
      instructions: [...preInstructions, ix, ...postInstructions],
      signers: collectKitTransactionSigners(creatorSigner, params.payer)
    };
  }
  async creatorWithdrawSurplus(params) {
    const creatorSigner = toSigner(params.creator);
    const virtualPoolAddress = toAddress(params.virtualPool);
    const creatorAddress = creatorSigner.address;
    const poolAccount = await this.state.getPool(virtualPoolAddress);
    const poolState = poolAccount.data;
    const configAccount = await this.state.getPoolConfig(poolState.config);
    const configState = configAccount.data;
    const preInstructions = [];
    const postInstructions = [];
    const quoteAta = await createAssociatedTokenAccountIdempotentInstruction(
      creatorSigner,
      creatorAddress,
      configState.quoteMint,
      TOKEN_PROGRAM_ADDRESS
    );
    preInstructions.push(quoteAta.instruction);
    const isSOLQuoteMint = configState.quoteMint === NATIVE_MINT_ADDRESS;
    if (isSOLQuoteMint) {
      const unwrapIx = await unwrapSolInstruction(
        creatorSigner,
        creatorAddress
      );
      postInstructions.push(unwrapIx);
    }
    const ix = await getCreatorWithdrawSurplusInstructionAsync({
      config: poolState.config,
      virtualPool: virtualPoolAddress,
      tokenQuoteAccount: quoteAta.ata,
      quoteVault: poolState.quoteVault,
      quoteMint: configState.quoteMint,
      creator: creatorSigner,
      tokenQuoteProgram: TOKEN_PROGRAM_ADDRESS,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2
    });
    return {
      instructions: [...preInstructions, ix, ...postInstructions],
      signers: collectKitTransactionSigners(creatorSigner)
    };
  }
  async transferPoolCreator(params) {
    const creatorSigner = toSigner(params.creator);
    const virtualPoolAddress = toAddress(params.virtualPool);
    const newCreatorAddress = toAddress(params.newCreator);
    const poolAccount = await this.state.getPool(virtualPoolAddress);
    const poolState = poolAccount.data;
    const [migrationMetadataPda] = await _chunkEYDCQ6ERcjs.findMigrationMetadataPda.call(void 0, {
      virtualPool: virtualPoolAddress
    });
    const ix = await getTransferPoolCreatorInstructionAsync({
      virtualPool: virtualPoolAddress,
      config: poolState.config,
      creator: creatorSigner,
      newCreator: newCreatorAddress,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2
    });
    const ixWithRemaining = {
      ...ix,
      accounts: [
        ...ix.accounts,
        {
          address: migrationMetadataPda,
          role: 0
          // readonly
        }
      ]
    };
    return {
      instructions: [ixWithRemaining],
      signers: collectKitTransactionSigners(creatorSigner)
    };
  }
  async creatorWithdrawMigrationFee(params) {
    const senderSigner = toSigner(params.sender);
    const virtualPoolAddress = toAddress(params.virtualPool);
    const senderAddress = senderSigner.address;
    const poolAccount = await this.state.getPool(virtualPoolAddress);
    const poolState = poolAccount.data;
    const configAccount = await this.state.getPoolConfig(poolState.config);
    const configState = configAccount.data;
    const tokenQuoteProgram = getTokenProgramAddress(
      configState.quoteTokenFlag
    );
    const preInstructions = [];
    const postInstructions = [];
    const quoteAta = await createAssociatedTokenAccountIdempotentInstruction(
      senderSigner,
      senderAddress,
      configState.quoteMint,
      tokenQuoteProgram
    );
    preInstructions.push(quoteAta.instruction);
    if (configState.quoteMint === NATIVE_MINT_ADDRESS) {
      const unwrapIx = await unwrapSolInstruction(
        senderSigner,
        senderAddress
      );
      postInstructions.push(unwrapIx);
    }
    const ix = await getWithdrawMigrationFeeInstructionAsync({
      config: poolState.config,
      virtualPool: virtualPoolAddress,
      tokenQuoteAccount: quoteAta.ata,
      quoteVault: poolState.quoteVault,
      quoteMint: configState.quoteMint,
      sender: senderSigner,
      tokenQuoteProgram,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      flag: 1
      // 1 = creator (0 = partner)
    });
    return {
      instructions: [...preInstructions, ix, ...postInstructions],
      signers: collectKitTransactionSigners(senderSigner)
    };
  }
};

// src/kit/services/migration.ts





var VAULT_INITIALIZE_DISCRIMINATOR = new Uint8Array([
  175,
  175,
  109,
  31,
  13,
  152,
  155,
  237
]);
function buildVaultInitInstruction(vaultPda, tokenVaultPda, lpMintPda, tokenMint, payer) {
  return {
    programAddress: VAULT_PROGRAM_ADDRESS,
    accounts: [
      { address: vaultPda, role: 1 },
      // writable
      { address: payer, role: 3 },
      // writable signer
      { address: tokenVaultPda, role: 1 },
      // writable
      { address: tokenMint, role: 0 },
      // readonly
      { address: lpMintPda, role: 1 },
      // writable
      { address: SYSVAR_RENT_ADDRESS, role: 0 },
      // readonly
      { address: TOKEN_PROGRAM_ADDRESS, role: 0 },
      // readonly
      { address: SYSTEM_PROGRAM_ADDRESS, role: 0 }
      // readonly
    ],
    data: VAULT_INITIALIZE_DISCRIMINATOR
  };
}
var CREATE_LOCK_ESCROW_DISCRIMINATOR = new Uint8Array([
  54,
  87,
  165,
  19,
  69,
  227,
  218,
  224
]);
function buildCreateLockEscrowInstruction(pool, lockEscrow, owner, lpMint, payer) {
  return {
    programAddress: DAMM_V1_PROGRAM_ADDRESS,
    accounts: [
      { address: pool, role: 0 },
      // readonly
      { address: lockEscrow, role: 1 },
      // writable
      { address: owner, role: 0 },
      // readonly
      { address: lpMint, role: 0 },
      // readonly
      { address: payer, role: 3 },
      // writable signer
      { address: SYSTEM_PROGRAM_ADDRESS, role: 0 }
      // readonly
    ],
    data: CREATE_LOCK_ESCROW_DISCRIMINATOR
  };
}
var DynamicBondingCurveKitMigrationService = class {
  constructor(rpc) {
    this.rpc = rpc;
    this.state = new DynamicBondingCurveKitStateService(rpc);
  }
  async createLocker(params) {
    const virtualPool = toAddress(params.virtualPool);
    const payer = toSigner(params.payer);
    const poolState = await this.state.getPool(virtualPool);
    const configState = await this.state.getPoolConfig(
      poolState.data.config
    );
    const tokenProgram = getTokenProgramAddress(
      configState.data.tokenType
    );
    const lockerEventAuthority = await findLockerEventAuthorityPda();
    const escrow = await findEscrowPda(
      await (async () => {
        const { findBasePda: findBasePda2 } = await Promise.resolve().then(() => _interopRequireWildcard(require("./pdas-C3UCRENL.cjs")));
        const [base] = await findBasePda2({ virtualPool });
        return base;
      })()
    );
    const [escrowToken] = await _token.findAssociatedTokenPda.call(void 0, {
      owner: escrow,
      mint: poolState.data.baseMint,
      tokenProgram
    });
    const { instruction: createEscrowTokenIx } = await createAssociatedTokenAccountIdempotentInstruction(
      payer,
      escrow,
      poolState.data.baseMint,
      tokenProgram
    );
    const ix = await getCreateLockerInstructionAsync({
      virtualPool,
      config: poolState.data.config,
      baseVault: poolState.data.baseVault,
      baseMint: poolState.data.baseMint,
      creator: poolState.data.creator,
      escrow,
      escrowToken,
      payer,
      tokenProgram,
      lockerEventAuthority
    });
    return {
      instructions: [createEscrowTokenIx, ix],
      signers: collectKitTransactionSigners(payer)
    };
  }
  async withdrawLeftover(params) {
    const virtualPool = toAddress(params.virtualPool);
    const payer = toSigner(params.payer);
    const poolState = await this.state.getPool(virtualPool);
    const configState = await this.state.getPoolConfig(
      poolState.data.config
    );
    const tokenBaseProgram = getTokenProgramAddress(
      configState.data.tokenType
    );
    const { ata: tokenBaseAccount, instruction: createBaseTokenAccountIx } = await createAssociatedTokenAccountIdempotentInstruction(
      payer,
      configState.data.leftoverReceiver,
      poolState.data.baseMint,
      tokenBaseProgram
    );
    const ix = await getWithdrawLeftoverInstructionAsync({
      config: poolState.data.config,
      virtualPool,
      tokenBaseAccount,
      baseVault: poolState.data.baseVault,
      baseMint: poolState.data.baseMint,
      leftoverReceiver: configState.data.leftoverReceiver,
      tokenBaseProgram,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2
    });
    return {
      instructions: [createBaseTokenAccountIx, ix],
      signers: collectKitTransactionSigners(payer)
    };
  }
  async createDammV1MigrationMetadata(params) {
    const virtualPool = toAddress(params.virtualPool);
    const config = toAddress(params.config);
    const payer = toSigner(params.payer);
    const ix = await getMigrationMeteoraDammCreateMetadataInstructionAsync({
      virtualPool,
      config,
      payer,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2
    });
    return {
      instructions: [ix],
      signers: collectKitTransactionSigners(payer)
    };
  }
  async migrateToDammV1(params) {
    const virtualPool = toAddress(params.virtualPool);
    const dammConfig = toAddress(params.dammConfig);
    const payer = toSigner(params.payer);
    const poolState = await this.state.getPool(virtualPool);
    const configState = await this.state.getPoolConfig(
      poolState.data.config
    );
    const { findMigrationMetadataPda: findMigrationMetadataPda2 } = await Promise.resolve().then(() => _interopRequireWildcard(require("./pdas-C3UCRENL.cjs")));
    const [migrationMetadata] = await findMigrationMetadataPda2({
      virtualPool
    });
    const baseMint = poolState.data.baseMint;
    const quoteMint = configState.data.quoteMint;
    const dammPool = await findDammV1PoolPda(
      dammConfig,
      baseMint,
      quoteMint
    );
    const lpMint = await findDammV1LpMintPda(dammPool);
    const mintMetadata = await findMintMetadataPda(lpMint);
    const [protocolTokenAFee, protocolTokenBFee] = await Promise.all([
      findDammV1ProtocolFeePda(baseMint, dammPool),
      findDammV1ProtocolFeePda(quoteMint, dammPool)
    ]);
    const [aVaultPdas, bVaultPdas] = await Promise.all([
      findVaultPdas(baseMint),
      findVaultPdas(quoteMint)
    ]);
    const [aVaultAccountInfo, bVaultAccountInfo] = await Promise.all([
      _kit.fetchEncodedAccount.call(void 0, this.rpc, aVaultPdas.vaultPda),
      _kit.fetchEncodedAccount.call(void 0, this.rpc, bVaultPdas.vaultPda)
    ]);
    let aVaultLpMint = aVaultPdas.lpMintPda;
    let bVaultLpMint = bVaultPdas.lpMintPda;
    const preInstructions = [];
    if (!aVaultAccountInfo.exists) {
      preInstructions.push(
        buildVaultInitInstruction(
          aVaultPdas.vaultPda,
          aVaultPdas.tokenVaultPda,
          aVaultPdas.lpMintPda,
          baseMint,
          payer.address
        )
      );
    }
    if (!bVaultAccountInfo.exists) {
      preInstructions.push(
        buildVaultInitInstruction(
          bVaultPdas.vaultPda,
          bVaultPdas.tokenVaultPda,
          bVaultPdas.lpMintPda,
          quoteMint,
          payer.address
        )
      );
    }
    const [aVaultLp, bVaultLp] = await Promise.all([
      findDammV1VaultLpPda(aVaultPdas.vaultPda, dammPool),
      findDammV1VaultLpPda(bVaultPdas.vaultPda, dammPool)
    ]);
    const [virtualPoolLp] = await _token.findAssociatedTokenPda.call(void 0, {
      owner: POOL_AUTHORITY_ADDRESS,
      mint: lpMint,
      tokenProgram: TOKEN_PROGRAM_ADDRESS
    });
    const computeBudgetIx = buildSetComputeUnitLimitInstruction(5e5);
    const ix = getMigrateMeteoraDammInstruction({
      virtualPool,
      migrationMetadata,
      config: poolState.data.config,
      pool: dammPool,
      dammConfig,
      lpMint,
      tokenAMint: baseMint,
      tokenBMint: quoteMint,
      aVault: aVaultPdas.vaultPda,
      bVault: bVaultPdas.vaultPda,
      aTokenVault: aVaultPdas.tokenVaultPda,
      bTokenVault: bVaultPdas.tokenVaultPda,
      aVaultLpMint,
      bVaultLpMint,
      aVaultLp,
      bVaultLp,
      baseVault: poolState.data.baseVault,
      quoteVault: poolState.data.quoteVault,
      virtualPoolLp,
      protocolTokenAFee,
      protocolTokenBFee,
      payer,
      mintMetadata,
      metadataProgram: METAPLEX_PROGRAM_ADDRESS,
      vaultProgram: VAULT_PROGRAM_ADDRESS,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ADDRESS
    });
    return {
      instructions: [...preInstructions, ix, computeBudgetIx],
      signers: collectKitTransactionSigners(payer)
    };
  }
  async lockDammV1LpToken(params) {
    const virtualPool = toAddress(params.virtualPool);
    const dammConfig = toAddress(params.dammConfig);
    const payer = toSigner(params.payer);
    const isPartner = params.isPartner;
    const poolState = await this.state.getPool(virtualPool);
    const configState = await this.state.getPoolConfig(
      poolState.data.config
    );
    const baseMint = poolState.data.baseMint;
    const quoteMint = configState.data.quoteMint;
    const dammPool = await findDammV1PoolPda(
      dammConfig,
      baseMint,
      quoteMint
    );
    const { findMigrationMetadataPda: findMigrationMetadataPda2 } = await Promise.resolve().then(() => _interopRequireWildcard(require("./pdas-C3UCRENL.cjs")));
    const [migrationMetadata] = await findMigrationMetadataPda2({
      virtualPool
    });
    const [aVaultPdas, bVaultPdas] = await Promise.all([
      findVaultPdas(baseMint),
      findVaultPdas(quoteMint)
    ]);
    const [aVaultAccountInfo, bVaultAccountInfo] = await Promise.all([
      _kit.fetchEncodedAccount.call(void 0, this.rpc, aVaultPdas.vaultPda),
      _kit.fetchEncodedAccount.call(void 0, this.rpc, bVaultPdas.vaultPda)
    ]);
    let aVaultLpMint = aVaultPdas.lpMintPda;
    let bVaultLpMint = bVaultPdas.lpMintPda;
    const preInstructions = [];
    if (!aVaultAccountInfo.exists) {
      preInstructions.push(
        buildVaultInitInstruction(
          aVaultPdas.vaultPda,
          aVaultPdas.tokenVaultPda,
          aVaultPdas.lpMintPda,
          baseMint,
          payer.address
        )
      );
    }
    if (!bVaultAccountInfo.exists) {
      preInstructions.push(
        buildVaultInitInstruction(
          bVaultPdas.vaultPda,
          bVaultPdas.tokenVaultPda,
          bVaultPdas.lpMintPda,
          quoteMint,
          payer.address
        )
      );
    }
    const [aVaultLp, bVaultLp] = await Promise.all([
      findDammV1VaultLpPda(aVaultPdas.vaultPda, dammPool),
      findDammV1VaultLpPda(bVaultPdas.vaultPda, dammPool)
    ]);
    const lpMint = await findDammV1LpMintPda(dammPool);
    const owner = isPartner ? configState.data.feeClaimer : poolState.data.creator;
    const lockEscrowKey = await findDammV1LockEscrowPda(dammPool, owner);
    const lockEscrowAccountInfo = await _kit.fetchEncodedAccount.call(void 0, 
      this.rpc,
      lockEscrowKey
    );
    if (!lockEscrowAccountInfo.exists) {
      preInstructions.push(
        buildCreateLockEscrowInstruction(
          dammPool,
          lockEscrowKey,
          owner,
          lpMint,
          payer.address
        )
      );
    }
    const [escrowVault] = await _token.findAssociatedTokenPda.call(void 0, {
      owner: lockEscrowKey,
      mint: lpMint,
      tokenProgram: TOKEN_PROGRAM_ADDRESS
    });
    const { instruction: createEscrowVaultIx } = await createAssociatedTokenAccountIdempotentInstruction(
      payer,
      lockEscrowKey,
      lpMint,
      TOKEN_PROGRAM_ADDRESS
    );
    preInstructions.push(createEscrowVaultIx);
    const [sourceTokens] = await _token.findAssociatedTokenPda.call(void 0, {
      owner: POOL_AUTHORITY_ADDRESS,
      mint: lpMint,
      tokenProgram: TOKEN_PROGRAM_ADDRESS
    });
    const ix = await getMigrateMeteoraDammLockLpTokenInstructionAsync({
      virtualPool,
      migrationMetadata,
      pool: dammPool,
      lpMint,
      lockEscrow: lockEscrowKey,
      owner,
      sourceTokens,
      escrowVault,
      aVault: aVaultPdas.vaultPda,
      bVault: bVaultPdas.vaultPda,
      aVaultLp,
      bVaultLp,
      aVaultLpMint,
      bVaultLpMint
    });
    return {
      instructions: [...preInstructions, ix],
      signers: collectKitTransactionSigners(payer)
    };
  }
  async claimDammV1LpToken(params) {
    const virtualPool = toAddress(params.virtualPool);
    const dammConfig = toAddress(params.dammConfig);
    const payer = toSigner(params.payer);
    const isPartner = params.isPartner;
    const poolState = await this.state.getPool(virtualPool);
    const configState = await this.state.getPoolConfig(
      poolState.data.config
    );
    const baseMint = poolState.data.baseMint;
    const quoteMint = configState.data.quoteMint;
    const dammPool = await findDammV1PoolPda(
      dammConfig,
      baseMint,
      quoteMint
    );
    const { findMigrationMetadataPda: findMigrationMetadataPda2 } = await Promise.resolve().then(() => _interopRequireWildcard(require("./pdas-C3UCRENL.cjs")));
    const [migrationMetadata] = await findMigrationMetadataPda2({
      virtualPool
    });
    const lpMint = await findDammV1LpMintPda(dammPool);
    const owner = isPartner ? configState.data.feeClaimer : poolState.data.creator;
    const [destinationToken] = await _token.findAssociatedTokenPda.call(void 0, {
      owner,
      mint: lpMint,
      tokenProgram: TOKEN_PROGRAM_ADDRESS
    });
    const { instruction: createDestinationTokenIx } = await createAssociatedTokenAccountIdempotentInstruction(
      payer,
      owner,
      lpMint,
      TOKEN_PROGRAM_ADDRESS
    );
    const [sourceToken] = await _token.findAssociatedTokenPda.call(void 0, {
      owner: POOL_AUTHORITY_ADDRESS,
      mint: lpMint,
      tokenProgram: TOKEN_PROGRAM_ADDRESS
    });
    const ix = await getMigrateMeteoraDammClaimLpTokenInstructionAsync({
      virtualPool,
      migrationMetadata,
      lpMint,
      sourceToken,
      destinationToken,
      owner,
      sender: payer
    });
    return {
      instructions: [createDestinationTokenIx, ix],
      signers: collectKitTransactionSigners(payer)
    };
  }
  async migrateToDammV2(params) {
    const virtualPool = toAddress(params.virtualPool);
    const dammConfig = toAddress(params.dammConfig);
    const payer = toSigner(params.payer);
    const poolState = await this.state.getPool(virtualPool);
    const configState = await this.state.getPoolConfig(
      poolState.data.config
    );
    const baseMint = poolState.data.baseMint;
    const quoteMint = configState.data.quoteMint;
    const [dammPoolAuthority, dammEventAuthority] = await Promise.all([
      findDammV2PoolAuthorityPda(),
      findDammV2EventAuthorityPda()
    ]);
    const migrationMetadata = await findDammV2MigrationMetadataPda(virtualPool);
    const dammPool = await findDammV2PoolPda(
      dammConfig,
      baseMint,
      quoteMint
    );
    const [firstPositionNftSigner, secondPositionNftSigner] = await Promise.all([
      _kit.generateKeyPairSigner.call(void 0, ),
      _kit.generateKeyPairSigner.call(void 0, )
    ]);
    const [
      firstPosition,
      firstPositionNftAccount,
      secondPosition,
      secondPositionNftAccount
    ] = await Promise.all([
      findDammV2PositionPda(firstPositionNftSigner.address),
      findDammV2PositionNftAccountPda(firstPositionNftSigner.address),
      findDammV2PositionPda(secondPositionNftSigner.address),
      findDammV2PositionNftAccountPda(secondPositionNftSigner.address)
    ]);
    const [tokenAVault, tokenBVault] = await Promise.all([
      findDammV2TokenVaultPda(dammPool, baseMint),
      findDammV2TokenVaultPda(dammPool, quoteMint)
    ]);
    const tokenBaseProgram = configState.data.tokenType === 0 ? TOKEN_PROGRAM_ADDRESS : TOKEN_2022_PROGRAM_ADDRESS;
    const tokenQuoteProgram = configState.data.quoteTokenFlag === 0 ? TOKEN_PROGRAM_ADDRESS : TOKEN_2022_PROGRAM_ADDRESS;
    const computeBudgetIx = buildSetComputeUnitLimitInstruction(6e5);
    const ix = getMigrationDammV2Instruction({
      virtualPool,
      migrationMetadata,
      config: poolState.data.config,
      pool: dammPool,
      firstPositionNftMint: firstPositionNftSigner,
      firstPosition,
      firstPositionNftAccount,
      secondPositionNftMint: secondPositionNftSigner,
      secondPosition,
      secondPositionNftAccount,
      dammPoolAuthority,
      baseMint,
      quoteMint,
      tokenAVault,
      tokenBVault,
      baseVault: poolState.data.baseVault,
      quoteVault: poolState.data.quoteVault,
      payer,
      tokenBaseProgram,
      tokenQuoteProgram,
      token2022Program: TOKEN_2022_PROGRAM_ADDRESS,
      dammEventAuthority
    });
    const ixWithRemainingAccounts = {
      ...ix,
      accounts: [...ix.accounts, { address: dammConfig, role: 0 }]
    };
    return {
      instructions: [ixWithRemainingAccounts, computeBudgetIx],
      signers: collectKitTransactionSigners(
        payer,
        firstPositionNftSigner,
        secondPositionNftSigner
      )
    };
  }
};
function buildSetComputeUnitLimitInstruction(units) {
  const data = new Uint8Array(5);
  const view = new DataView(data.buffer);
  view.setUint8(0, 2);
  view.setUint32(1, units, true);
  return {
    programAddress: COMPUTE_BUDGET_PROGRAM_ADDRESS,
    accounts: [],
    data
  };
}

// src/kit/services/partner.ts




var DynamicBondingCurveKitPartnerService = class {
  constructor(rpc) {
    this.state = new DynamicBondingCurveKitStateService(rpc);
  }
  async createConfig(params) {
    const {
      config,
      feeClaimer,
      leftoverReceiver,
      quoteMint,
      payer,
      ...configParam
    } = params;
    const configSigner = toSigner(config);
    const payerSigner = toSigner(payer);
    const ix = await getCreateConfigInstructionAsync({
      config: configSigner,
      feeClaimer: toAddress(feeClaimer),
      leftoverReceiver: toAddress(leftoverReceiver),
      quoteMint: toAddress(quoteMint),
      payer: payerSigner,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      configParameters: convertBNFields(configParam)
    });
    return {
      instructions: [ix],
      signers: collectKitTransactionSigners(configSigner, payerSigner)
    };
  }
  async createPartnerMetadata(params) {
    const { name, website, logo, feeClaimer, payer } = params;
    const feeClaimerSigner = toSigner(feeClaimer);
    const payerSigner = toSigner(payer);
    const ix = await getCreatePartnerMetadataInstructionAsync({
      payer: payerSigner,
      feeClaimer: feeClaimerSigner,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      padding: new Uint8Array(96),
      name,
      website,
      logo
    });
    return {
      instructions: [ix],
      signers: collectKitTransactionSigners(
        feeClaimerSigner,
        payerSigner
      )
    };
  }
  async claimPartnerTradingFee(params) {
    const {
      feeClaimer,
      payer,
      pool,
      maxBaseAmount,
      maxQuoteAmount,
      receiver,
      tempWSolAcc
    } = params;
    const poolAddress = toAddress(pool);
    const feeClaimerSigner = toSigner(feeClaimer);
    const payerInput = toAddressOrSigner(payer);
    const feeClaimerAddress = feeClaimerSigner.address;
    const poolAccount = await this.state.getPool(poolAddress);
    const poolState = poolAccount.data;
    const configAccount = await this.state.getPoolConfig(poolState.config);
    const configState = configAccount.data;
    const tokenBaseProgram = getTokenProgramAddress(configState.tokenType);
    const tokenQuoteProgram = getTokenProgramAddress(
      configState.quoteTokenFlag
    );
    const isSOLQuoteMint = configState.quoteMint === NATIVE_MINT_ADDRESS;
    const preInstructions = [];
    const postInstructions = [];
    const receiverAddress = toOptionalAddress(receiver);
    const feeReceiver = _nullishCoalesce(receiverAddress, () => ( feeClaimerAddress));
    let tokenBaseAccount;
    let tokenQuoteAccount;
    if (isSOLQuoteMint) {
      const tempWSolOwner = receiverAddress && receiverAddress !== feeClaimerAddress ? toAddressOrSigner(tempWSolAcc) : feeClaimerSigner;
      const tempWSolAddress = toAddress(tempWSolOwner);
      [tokenBaseAccount] = await _token.findAssociatedTokenPda.call(void 0, {
        owner: feeReceiver,
        mint: poolState.baseMint,
        tokenProgram: tokenBaseProgram
      });
      [tokenQuoteAccount] = await _token.findAssociatedTokenPda.call(void 0, {
        owner: tempWSolAddress,
        mint: configState.quoteMint,
        tokenProgram: tokenQuoteProgram
      });
      const createBaseAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        feeReceiver,
        poolState.baseMint,
        tokenBaseProgram
      );
      preInstructions.push(createBaseAta.instruction);
      const createQuoteAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        tempWSolAddress,
        configState.quoteMint,
        tokenQuoteProgram
      );
      preInstructions.push(createQuoteAta.instruction);
      postInstructions.push(
        await unwrapSolInstruction(tempWSolOwner, feeReceiver)
      );
    } else {
      const [baseResult, quoteResult] = await Promise.all([
        createAssociatedTokenAccountIdempotentInstruction(
          payerInput,
          feeReceiver,
          poolState.baseMint,
          tokenBaseProgram
        ),
        createAssociatedTokenAccountIdempotentInstruction(
          payerInput,
          feeReceiver,
          configState.quoteMint,
          tokenQuoteProgram
        )
      ]);
      tokenBaseAccount = baseResult.ata;
      tokenQuoteAccount = quoteResult.ata;
      preInstructions.push(
        baseResult.instruction,
        quoteResult.instruction
      );
    }
    const claimIx = await getClaimTradingFeeInstructionAsync({
      config: poolState.config,
      pool: poolAddress,
      tokenAAccount: tokenBaseAccount,
      tokenBAccount: tokenQuoteAccount,
      baseVault: poolState.baseVault,
      quoteVault: poolState.quoteVault,
      baseMint: poolState.baseMint,
      quoteMint: configState.quoteMint,
      feeClaimer: feeClaimerSigner,
      tokenBaseProgram,
      tokenQuoteProgram,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      maxAmountA: BigInt(maxBaseAmount.toString()),
      maxAmountB: BigInt(maxQuoteAmount.toString())
    });
    return {
      instructions: [...preInstructions, claimIx, ...postInstructions],
      signers: collectKitTransactionSigners(
        feeClaimerSigner,
        params.payer,
        tempWSolAcc
      )
    };
  }
  async claimPartnerTradingFee2(params) {
    const {
      feeClaimer,
      payer,
      pool,
      maxBaseAmount,
      maxQuoteAmount,
      receiver
    } = params;
    const poolAddress = toAddress(pool);
    const feeClaimerSigner = toSigner(feeClaimer);
    const payerInput = toAddressOrSigner(payer);
    const feeClaimerAddress = feeClaimerSigner.address;
    const receiverAddress = toAddress(receiver);
    const poolAccount = await this.state.getPool(poolAddress);
    const poolState = poolAccount.data;
    const configAccount = await this.state.getPoolConfig(poolState.config);
    const configState = configAccount.data;
    const tokenBaseProgram = getTokenProgramAddress(configState.tokenType);
    const tokenQuoteProgram = getTokenProgramAddress(
      configState.quoteTokenFlag
    );
    const isSOLQuoteMint = configState.quoteMint === NATIVE_MINT_ADDRESS;
    const preInstructions = [];
    const postInstructions = [];
    let tokenBaseAccount;
    let tokenQuoteAccount;
    if (isSOLQuoteMint) {
      ;
      [tokenBaseAccount] = await _token.findAssociatedTokenPda.call(void 0, {
        owner: receiverAddress,
        mint: poolState.baseMint,
        tokenProgram: tokenBaseProgram
      });
      [tokenQuoteAccount] = await _token.findAssociatedTokenPda.call(void 0, {
        owner: feeClaimerAddress,
        mint: configState.quoteMint,
        tokenProgram: tokenQuoteProgram
      });
      const createBaseAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        receiverAddress,
        poolState.baseMint,
        tokenBaseProgram
      );
      preInstructions.push(createBaseAta.instruction);
      const createQuoteAta = await createAssociatedTokenAccountIdempotentInstruction(
        payerInput,
        feeClaimerAddress,
        configState.quoteMint,
        tokenQuoteProgram
      );
      preInstructions.push(createQuoteAta.instruction);
      postInstructions.push(
        await unwrapSolInstruction(feeClaimerSigner, receiverAddress)
      );
    } else {
      const [baseResult, quoteResult] = await Promise.all([
        createAssociatedTokenAccountIdempotentInstruction(
          payerInput,
          receiverAddress,
          poolState.baseMint,
          tokenBaseProgram
        ),
        createAssociatedTokenAccountIdempotentInstruction(
          payerInput,
          receiverAddress,
          configState.quoteMint,
          tokenQuoteProgram
        )
      ]);
      tokenBaseAccount = baseResult.ata;
      tokenQuoteAccount = quoteResult.ata;
      preInstructions.push(
        baseResult.instruction,
        quoteResult.instruction
      );
    }
    const claimIx = await getClaimTradingFeeInstructionAsync({
      config: poolState.config,
      pool: poolAddress,
      tokenAAccount: tokenBaseAccount,
      tokenBAccount: tokenQuoteAccount,
      baseVault: poolState.baseVault,
      quoteVault: poolState.quoteVault,
      baseMint: poolState.baseMint,
      quoteMint: configState.quoteMint,
      feeClaimer: feeClaimerSigner,
      tokenBaseProgram,
      tokenQuoteProgram,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      maxAmountA: BigInt(maxBaseAmount.toString()),
      maxAmountB: BigInt(maxQuoteAmount.toString())
    });
    return {
      instructions: [...preInstructions, claimIx, ...postInstructions],
      signers: collectKitTransactionSigners(
        feeClaimerSigner,
        params.payer
      )
    };
  }
  async partnerWithdrawSurplus(params) {
    const { virtualPool, feeClaimer } = params;
    const virtualPoolAddress = toAddress(virtualPool);
    const feeClaimerSigner = toSigner(feeClaimer);
    const feeClaimerAddress = feeClaimerSigner.address;
    const poolAccount = await this.state.getPool(virtualPoolAddress);
    const poolState = poolAccount.data;
    const configAccount = await this.state.getPoolConfig(poolState.config);
    const configState = configAccount.data;
    const tokenQuoteProgram = getTokenProgramAddress(
      configState.quoteTokenFlag
    );
    const preInstructions = [];
    const postInstructions = [];
    const quoteAtaResult = await createAssociatedTokenAccountIdempotentInstruction(
      feeClaimerSigner,
      feeClaimerAddress,
      configState.quoteMint,
      tokenQuoteProgram
    );
    preInstructions.push(quoteAtaResult.instruction);
    if (configState.quoteMint === NATIVE_MINT_ADDRESS) {
      postInstructions.push(
        await unwrapSolInstruction(feeClaimerSigner, feeClaimerAddress)
      );
    }
    const ix = await getPartnerWithdrawSurplusInstructionAsync({
      config: poolState.config,
      virtualPool: virtualPoolAddress,
      tokenQuoteAccount: quoteAtaResult.ata,
      quoteVault: poolState.quoteVault,
      quoteMint: configState.quoteMint,
      feeClaimer: feeClaimerSigner,
      tokenQuoteProgram,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2
    });
    return {
      instructions: [...preInstructions, ix, ...postInstructions],
      signers: collectKitTransactionSigners(feeClaimerSigner)
    };
  }
  async partnerWithdrawMigrationFee(params) {
    const { virtualPool, sender } = params;
    const virtualPoolAddress = toAddress(virtualPool);
    const senderSigner = toSigner(sender);
    const senderAddress = senderSigner.address;
    const poolAccount = await this.state.getPool(virtualPoolAddress);
    const poolState = poolAccount.data;
    const configAccount = await this.state.getPoolConfig(poolState.config);
    const configState = configAccount.data;
    const tokenQuoteProgram = getTokenProgramAddress(
      configState.quoteTokenFlag
    );
    const preInstructions = [];
    const postInstructions = [];
    const quoteAtaResult = await createAssociatedTokenAccountIdempotentInstruction(
      senderSigner,
      senderAddress,
      configState.quoteMint,
      tokenQuoteProgram
    );
    preInstructions.push(quoteAtaResult.instruction);
    if (configState.quoteMint === NATIVE_MINT_ADDRESS) {
      postInstructions.push(
        await unwrapSolInstruction(senderSigner, senderAddress)
      );
    }
    const ix = await getWithdrawMigrationFeeInstructionAsync({
      config: poolState.config,
      virtualPool: virtualPoolAddress,
      tokenQuoteAccount: quoteAtaResult.ata,
      quoteVault: poolState.quoteVault,
      quoteMint: configState.quoteMint,
      sender: senderSigner,
      tokenQuoteProgram,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      flag: 0
      // 0 = partner, 1 = creator
    });
    return {
      instructions: [...preInstructions, ix, ...postInstructions],
      signers: collectKitTransactionSigners(senderSigner)
    };
  }
  async claimPartnerPoolCreationFee(params) {
    const { virtualPool, feeReceiver } = params;
    const virtualPoolAddress = toAddress(virtualPool);
    const feeReceiverAddress = toAddress(feeReceiver);
    const poolAccount = await this.state.getPool(virtualPoolAddress);
    const poolState = poolAccount.data;
    const configAccount = await this.state.getPoolConfig(poolState.config);
    const configState = configAccount.data;
    const feeClaimerPlaceholder = _kit.createNoopSigner.call(void 0, configState.feeClaimer);
    const ix = await getClaimPartnerPoolCreationFeeInstructionAsync({
      config: poolState.config,
      pool: virtualPoolAddress,
      feeClaimer: feeClaimerPlaceholder,
      feeReceiver: feeReceiverAddress,
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2
    });
    return {
      instructions: [ix],
      signers: []
    };
  }
};

// src/kit/services/pool.ts
var _bnjs = require('bn.js'); var _bnjs2 = _interopRequireDefault(_bnjs);
var DynamicBondingCurveKitPoolService = class {
  constructor(rpc) {
    this.rpc = rpc;
    this.state = new DynamicBondingCurveKitStateService(rpc);
  }
  async createPool(params) {
    const configAddress = toAddress(params.config);
    const configState = await this.state.getPoolConfig(configAddress);
    const quoteMint = configState.data.quoteMint;
    const tokenType = configState.data.tokenType;
    const instructions = await this.buildCreatePoolInstructions(
      params,
      tokenType,
      quoteMint
    );
    return {
      instructions,
      signers: collectKitTransactionSigners(
        params.baseMint,
        params.payer,
        params.poolCreator
      )
    };
  }
  async createConfigAndPool(params) {
    const configInstruction = await this.buildCreateConfigInstruction(params);
    const poolInstructions = await this.buildCreatePoolFromCompoundParams(params);
    return {
      instructions: [configInstruction, ...poolInstructions],
      signers: collectKitTransactionSigners(
        params.config,
        params.payer,
        params.preCreatePoolParam.baseMint,
        params.preCreatePoolParam.poolCreator
      )
    };
  }
  async createConfigAndPoolWithFirstBuy(params) {
    const configInstruction = await this.buildCreateConfigInstruction(params);
    const poolInstructions = await this.buildCreatePoolFromCompoundParams(params);
    const firstBuyInstructions = params.firstBuyParam ? await this.buildFirstBuyFromCompoundParams(
      params.firstBuyParam,
      params
    ) : [];
    return {
      createConfigPlan: {
        instructions: [configInstruction],
        signers: collectKitTransactionSigners(
          params.config,
          params.payer
        )
      },
      createPoolWithFirstBuyPlan: {
        instructions: [...poolInstructions, ...firstBuyInstructions],
        signers: collectKitTransactionSigners(
          params.payer,
          params.preCreatePoolParam.baseMint,
          params.preCreatePoolParam.poolCreator,
          _optionalChain([params, 'access', _22 => _22.firstBuyParam, 'optionalAccess', _23 => _23.buyer])
        )
      }
    };
  }
  async createPoolWithFirstBuy(params) {
    const configAddress = toAddress(params.createPoolParam.config);
    const baseMintAddress = toAddress(params.createPoolParam.baseMint);
    const configState = await this.state.getPoolConfig(configAddress);
    const configData = configState.data;
    const quoteMint = configData.quoteMint;
    const tokenType = configData.tokenType;
    const poolInstructions = await this.buildCreatePoolInstructions(
      params.createPoolParam,
      tokenType,
      quoteMint
    );
    const firstBuyInstructions = params.firstBuyParam ? await this.buildFirstBuyFromConfigState(
      params.firstBuyParam,
      baseMintAddress,
      configAddress,
      configData,
      tokenType,
      quoteMint
    ) : [];
    return {
      instructions: [...poolInstructions, ...firstBuyInstructions],
      signers: collectKitTransactionSigners(
        params.createPoolParam.baseMint,
        params.createPoolParam.payer,
        params.createPoolParam.poolCreator,
        _optionalChain([params, 'access', _24 => _24.firstBuyParam, 'optionalAccess', _25 => _25.buyer])
      )
    };
  }
  async createPoolWithPartnerAndCreatorFirstBuy(params) {
    const configAddress = toAddress(params.createPoolParam.config);
    const baseMintAddress = toAddress(params.createPoolParam.baseMint);
    const configState = await this.state.getPoolConfig(configAddress);
    const configData = configState.data;
    const quoteMint = configData.quoteMint;
    const tokenType = configData.tokenType;
    const poolInstructions = await this.buildCreatePoolInstructions(
      params.createPoolParam,
      tokenType,
      quoteMint
    );
    const partnerBuyInstructions = params.partnerFirstBuyParam ? await this.buildFirstBuyFromConfigState(
      {
        buyer: params.partnerFirstBuyParam.partner,
        receiver: params.partnerFirstBuyParam.receiver,
        buyAmount: params.partnerFirstBuyParam.buyAmount,
        minimumAmountOut: params.partnerFirstBuyParam.minimumAmountOut,
        referralTokenAccount: params.partnerFirstBuyParam.referralTokenAccount
      },
      baseMintAddress,
      configAddress,
      configData,
      tokenType,
      quoteMint
    ) : [];
    const creatorBuyInstructions = params.creatorFirstBuyParam ? await this.buildFirstBuyFromConfigState(
      {
        buyer: params.creatorFirstBuyParam.creator,
        receiver: params.creatorFirstBuyParam.receiver,
        buyAmount: params.creatorFirstBuyParam.buyAmount,
        minimumAmountOut: params.creatorFirstBuyParam.minimumAmountOut,
        referralTokenAccount: params.creatorFirstBuyParam.referralTokenAccount
      },
      baseMintAddress,
      configAddress,
      configData,
      tokenType,
      quoteMint
    ) : [];
    return {
      instructions: [
        ...poolInstructions,
        ...partnerBuyInstructions,
        ...creatorBuyInstructions
      ],
      signers: collectKitTransactionSigners(
        params.createPoolParam.baseMint,
        params.createPoolParam.payer,
        params.createPoolParam.poolCreator,
        _optionalChain([params, 'access', _26 => _26.partnerFirstBuyParam, 'optionalAccess', _27 => _27.partner]),
        _optionalChain([params, 'access', _28 => _28.creatorFirstBuyParam, 'optionalAccess', _29 => _29.creator])
      )
    };
  }
  async swap(params) {
    const poolAddress = toAddress(params.pool);
    const ownerSigner = toSigner(params.owner);
    const ownerAddress = ownerSigner.address;
    const payerSigner = params.payer ? toSigner(params.payer) : ownerSigner;
    const poolAccount = await this.state.getPool(poolAddress);
    const poolData = poolAccount.data;
    const configState = await this.state.getPoolConfig(poolData.config);
    const configData = configState.data;
    const quoteMint = configData.quoteMint;
    const baseMint = poolData.baseMint;
    const { inputMint, outputMint, inputTokenProgram, outputTokenProgram } = prepareSwapParams(
      params.swapBaseForQuote,
      baseMint,
      poolData.poolType,
      quoteMint,
      configData.quoteTokenFlag
    );
    const preInstructions = [];
    const postInstructions = [];
    const { ata: inputTokenAccount, instruction: createInputAtaIx } = await createAssociatedTokenAccountIdempotentInstruction(
      payerSigner,
      ownerAddress,
      inputMint,
      inputTokenProgram
    );
    preInstructions.push(createInputAtaIx);
    const { ata: outputTokenAccount, instruction: createOutputAtaIx } = await createAssociatedTokenAccountIdempotentInstruction(
      payerSigner,
      ownerAddress,
      outputMint,
      outputTokenProgram
    );
    preInstructions.push(createOutputAtaIx);
    if (inputMint === NATIVE_MINT_ADDRESS) {
      preInstructions.push(
        ...wrapSolInstructions(
          ownerSigner,
          inputTokenAccount,
          BigInt(params.amountIn.toString())
        )
      );
    }
    if (inputMint === NATIVE_MINT_ADDRESS || outputMint === NATIVE_MINT_ADDRESS) {
      postInstructions.push(
        await unwrapSolInstruction(ownerSigner, ownerAddress)
      );
    }
    const needsRemainingAccounts = await this.checkRateLimiterOrFirstSwapMinFee(
      configData,
      poolData,
      params.swapBaseForQuote
    );
    const swapIx = await getSwapInstructionAsync({
      config: poolData.config,
      pool: poolAddress,
      inputTokenAccount,
      outputTokenAccount,
      baseVault: poolData.baseVault,
      quoteVault: poolData.quoteVault,
      baseMint,
      quoteMint,
      payer: ownerSigner,
      tokenBaseProgram: params.swapBaseForQuote ? inputTokenProgram : outputTokenProgram,
      tokenQuoteProgram: params.swapBaseForQuote ? outputTokenProgram : inputTokenProgram,
      referralTokenAccount: toOptionalAddress(
        params.referralTokenAccount
      ),
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      params: {
        amountIn: BigInt(params.amountIn.toString()),
        minimumAmountOut: BigInt(params.minimumAmountOut.toString())
      }
    });
    return {
      instructions: [
        ...preInstructions,
        needsRemainingAccounts ? addRemainingAccount(swapIx) : swapIx,
        ...postInstructions
      ],
      signers: collectKitTransactionSigners(params.owner, params.payer)
    };
  }
  async swap2(params) {
    const poolAddress = toAddress(params.pool);
    const ownerSigner = toSigner(params.owner);
    const ownerAddress = ownerSigner.address;
    const payerSigner = params.payer ? toSigner(params.payer) : ownerSigner;
    const poolAccount = await this.state.getPool(poolAddress);
    const poolData = poolAccount.data;
    const configState = await this.state.getPoolConfig(poolData.config);
    const configData = configState.data;
    const quoteMint = configData.quoteMint;
    const baseMint = poolData.baseMint;
    let amount0;
    let amount1;
    if ("amountOut" in params) {
      amount0 = params.amountOut;
      amount1 = params.maximumAmountIn;
    } else {
      amount0 = params.amountIn;
      amount1 = params.minimumAmountOut;
    }
    const { inputMint, outputMint, inputTokenProgram, outputTokenProgram } = prepareSwapParams(
      params.swapBaseForQuote,
      baseMint,
      poolData.poolType,
      quoteMint,
      configData.quoteTokenFlag
    );
    const preInstructions = [];
    const postInstructions = [];
    const { ata: inputTokenAccount, instruction: createInputAtaIx } = await createAssociatedTokenAccountIdempotentInstruction(
      payerSigner,
      ownerAddress,
      inputMint,
      inputTokenProgram
    );
    preInstructions.push(createInputAtaIx);
    const { ata: outputTokenAccount, instruction: createOutputAtaIx } = await createAssociatedTokenAccountIdempotentInstruction(
      payerSigner,
      ownerAddress,
      outputMint,
      outputTokenProgram
    );
    preInstructions.push(createOutputAtaIx);
    if (inputMint === NATIVE_MINT_ADDRESS) {
      const wrapAmount = params.swapMode === 0 /* ExactIn */ || params.swapMode === 1 /* PartialFill */ ? amount0 : amount1;
      preInstructions.push(
        ...wrapSolInstructions(
          ownerSigner,
          inputTokenAccount,
          BigInt(wrapAmount.toString())
        )
      );
    }
    if (inputMint === NATIVE_MINT_ADDRESS || outputMint === NATIVE_MINT_ADDRESS) {
      postInstructions.push(
        await unwrapSolInstruction(ownerSigner, ownerAddress)
      );
    }
    const needsRemainingAccounts = await this.checkRateLimiterOrFirstSwapMinFee(
      configData,
      poolData,
      params.swapBaseForQuote
    );
    const swap2Ix = await getSwap2InstructionAsync({
      config: poolData.config,
      pool: poolAddress,
      inputTokenAccount,
      outputTokenAccount,
      baseVault: poolData.baseVault,
      quoteVault: poolData.quoteVault,
      baseMint,
      quoteMint,
      payer: ownerSigner,
      tokenBaseProgram: params.swapBaseForQuote ? inputTokenProgram : outputTokenProgram,
      tokenQuoteProgram: params.swapBaseForQuote ? outputTokenProgram : inputTokenProgram,
      referralTokenAccount: toOptionalAddress(
        params.referralTokenAccount
      ),
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      params: {
        amount0: BigInt(amount0.toString()),
        amount1: BigInt(amount1.toString()),
        swapMode: params.swapMode
      }
    });
    return {
      instructions: [
        ...preInstructions,
        needsRemainingAccounts ? addRemainingAccount(swap2Ix) : swap2Ix,
        ...postInstructions
      ],
      signers: collectKitTransactionSigners(params.owner, params.payer)
    };
  }
  // ── Private helpers ──────────────────────────────────────────────
  async buildCreateConfigInstruction(params) {
    const {
      config,
      feeClaimer,
      leftoverReceiver,
      quoteMint,
      payer,
      preCreatePoolParam: _pool,
      ...configParameters
    } = params;
    const { firstBuyParam: _fb, ...cleanConfigParameters } = configParameters;
    return getCreateConfigInstructionAsync({
      config: toSigner(config),
      feeClaimer: toAddress(feeClaimer),
      leftoverReceiver: toAddress(leftoverReceiver),
      quoteMint: toAddress(quoteMint),
      payer: toSigner(payer),
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      configParameters: cleanConfigParameters
    });
  }
  async buildCreatePoolInstructions(params, tokenType, quoteMint) {
    const configAddress = toAddress(params.config);
    const baseMintAddress = toAddress(params.baseMint);
    const pool = await findPoolPda(
      quoteMint,
      baseMintAddress,
      configAddress
    );
    const creatorSigner = toSigner(params.poolCreator);
    const baseMintSigner = toSigner(params.baseMint);
    const payerSigner = toSigner(params.payer);
    if (tokenType === 0 /* SPL */) {
      const mintMetadata = await findMintMetadataPda(baseMintAddress);
      const ix = await getInitializeVirtualPoolWithSplTokenInstructionAsync({
        config: configAddress,
        creator: creatorSigner,
        baseMint: baseMintSigner,
        quoteMint,
        pool,
        mintMetadata,
        payer: payerSigner,
        tokenQuoteProgram: TOKEN_PROGRAM_ADDRESS,
        program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
        params: {
          name: params.name,
          symbol: params.symbol,
          uri: params.uri
        }
      });
      return [ix];
    } else {
      const ix = await getInitializeVirtualPoolWithToken2022InstructionAsync({
        config: configAddress,
        creator: creatorSigner,
        baseMint: baseMintSigner,
        quoteMint,
        pool,
        payer: payerSigner,
        tokenQuoteProgram: TOKEN_PROGRAM_ADDRESS,
        program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
        params: {
          name: params.name,
          symbol: params.symbol,
          uri: params.uri
        }
      });
      return [ix];
    }
  }
  async buildCreatePoolFromCompoundParams(params) {
    return this.buildCreatePoolInstructions(
      {
        ...params.preCreatePoolParam,
        config: params.config,
        payer: params.payer
      },
      params.tokenType,
      toAddress(params.quoteMint)
    );
  }
  async buildFirstBuyFromCompoundParams(firstBuyParam, params) {
    if (firstBuyParam.buyAmount.lte(new (0, _bnjs2.default)(0))) {
      return [];
    }
    const baseMint = toAddress(params.preCreatePoolParam.baseMint);
    const config = toAddress(params.config);
    const quoteMint = toAddress(params.quoteMint);
    const tokenType = params.tokenType;
    const quoteTokenFlag = await getTokenTypeForMint(this.rpc, quoteMint);
    const baseFee = params.poolFees.baseFee;
    let rateLimiterApplied = false;
    if (baseFee.baseFeeMode === 2 /* RateLimiter */) {
      const currentPoint = await this.getCurrentPoint(
        params.activationType
      );
      rateLimiterApplied = isRateLimiterApplied(
        currentPoint,
        new (0, _bnjs2.default)(0),
        1 /* QuoteToBase */,
        new (0, _bnjs2.default)(baseFee.secondFactor.toString()),
        new (0, _bnjs2.default)(baseFee.thirdFactor.toString()),
        new (0, _bnjs2.default)(baseFee.firstFactor.toString())
      );
    }
    const needsRemainingAccounts = rateLimiterApplied || params.enableFirstSwapWithMinFee;
    return this.buildSwapBuyInstructions({
      baseMint,
      quoteMint,
      config,
      baseTokenType: tokenType,
      quoteTokenType: quoteTokenFlag,
      buyerParam: firstBuyParam,
      needsRemainingAccounts
    });
  }
  async buildFirstBuyFromConfigState(firstBuyParam, baseMint, config, configData, tokenType, quoteMint) {
    if (firstBuyParam.buyAmount.lte(new (0, _bnjs2.default)(0))) {
      return [];
    }
    const quoteTokenType = configData.quoteTokenFlag;
    let rateLimiterApplied = false;
    if (configData.poolFees.baseFee.baseFeeMode === 2 /* RateLimiter */) {
      const currentPoint = await this.getCurrentPoint(
        configData.activationType
      );
      rateLimiterApplied = isRateLimiterApplied(
        currentPoint,
        new (0, _bnjs2.default)(0),
        1 /* QuoteToBase */,
        new (0, _bnjs2.default)(configData.poolFees.baseFee.secondFactor.toString()),
        new (0, _bnjs2.default)(configData.poolFees.baseFee.thirdFactor.toString()),
        new (0, _bnjs2.default)(configData.poolFees.baseFee.firstFactor.toString())
      );
    }
    const needsRemainingAccounts = rateLimiterApplied || configData.enableFirstSwapWithMinFee !== 0;
    return this.buildSwapBuyInstructions({
      baseMint,
      quoteMint,
      config,
      baseTokenType: tokenType,
      quoteTokenType,
      buyerParam: firstBuyParam,
      needsRemainingAccounts
    });
  }
  async buildSwapBuyInstructions(opts) {
    const {
      baseMint,
      quoteMint,
      config,
      baseTokenType,
      quoteTokenType,
      buyerParam,
      needsRemainingAccounts
    } = opts;
    const buyerSigner = toSigner(buyerParam.buyer);
    const buyerAddress = toAddress(buyerParam.buyer);
    const receiverAddress = buyerParam.receiver ? toAddress(buyerParam.receiver) : buyerAddress;
    const { inputMint, outputMint, inputTokenProgram, outputTokenProgram } = prepareSwapParams(
      false,
      baseMint,
      baseTokenType,
      quoteMint,
      quoteTokenType
    );
    const pool = await findPoolPda(quoteMint, baseMint, config);
    const baseVault = await findTokenVaultPda(pool, baseMint);
    const quoteVault = await findTokenVaultPda(pool, quoteMint);
    const preInstructions = [];
    const postInstructions = [];
    const { ata: inputTokenAccount, instruction: createInputAtaIx } = await createAssociatedTokenAccountIdempotentInstruction(
      buyerSigner,
      buyerAddress,
      inputMint,
      inputTokenProgram
    );
    preInstructions.push(createInputAtaIx);
    const { ata: outputTokenAccount, instruction: createOutputAtaIx } = await createAssociatedTokenAccountIdempotentInstruction(
      buyerSigner,
      receiverAddress,
      outputMint,
      outputTokenProgram
    );
    preInstructions.push(createOutputAtaIx);
    if (inputMint === NATIVE_MINT_ADDRESS) {
      preInstructions.push(
        ...wrapSolInstructions(
          buyerSigner,
          inputTokenAccount,
          BigInt(buyerParam.buyAmount.toString())
        )
      );
    }
    if (inputMint === NATIVE_MINT_ADDRESS || outputMint === NATIVE_MINT_ADDRESS) {
      postInstructions.push(
        await unwrapSolInstruction(buyerSigner, buyerAddress)
      );
    }
    const swapIx = await getSwapInstructionAsync({
      config,
      pool,
      inputTokenAccount,
      outputTokenAccount,
      baseVault,
      quoteVault,
      baseMint,
      quoteMint,
      payer: buyerSigner,
      tokenBaseProgram: outputTokenProgram,
      tokenQuoteProgram: inputTokenProgram,
      referralTokenAccount: toOptionalAddress(
        buyerParam.referralTokenAccount
      ),
      program: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
      params: {
        amountIn: BigInt(buyerParam.buyAmount.toString()),
        minimumAmountOut: BigInt(
          buyerParam.minimumAmountOut.toString()
        )
      }
    });
    return [
      ...preInstructions,
      needsRemainingAccounts ? addRemainingAccount(swapIx) : swapIx,
      ...postInstructions
    ];
  }
  async checkRateLimiterOrFirstSwapMinFee(configData, poolData, swapBaseForQuote) {
    if (configData.enableFirstSwapWithMinFee !== 0) {
      return true;
    }
    if (configData.poolFees.baseFee.baseFeeMode === 2 /* RateLimiter */) {
      const currentPoint = await this.getCurrentPoint(
        configData.activationType
      );
      return isRateLimiterApplied(
        currentPoint,
        new (0, _bnjs2.default)(poolData.activationPoint.toString()),
        swapBaseForQuote ? 0 /* BaseToQuote */ : 1 /* QuoteToBase */,
        new (0, _bnjs2.default)(configData.poolFees.baseFee.secondFactor.toString()),
        new (0, _bnjs2.default)(configData.poolFees.baseFee.thirdFactor.toString()),
        new (0, _bnjs2.default)(configData.poolFees.baseFee.firstFactor.toString())
      );
    }
    return false;
  }
  async getCurrentPoint(activationType) {
    if (activationType === 0 /* Slot */) {
      const slot = await this.rpc.getSlot().send();
      return new (0, _bnjs2.default)(slot.toString());
    } else {
      const slot = await this.rpc.getSlot().send();
      const blockTime = await this.rpc.getBlockTime(slot).send();
      return new (0, _bnjs2.default)((_nullishCoalesce(blockTime, () => ( 0))).toString());
    }
  }
};
function prepareSwapParams(swapBaseForQuote, baseMint, baseTokenType, quoteMint, quoteTokenType) {
  if (swapBaseForQuote) {
    return {
      inputMint: baseMint,
      outputMint: quoteMint,
      inputTokenProgram: getTokenProgramAddress(baseTokenType),
      outputTokenProgram: getTokenProgramAddress(quoteTokenType)
    };
  } else {
    return {
      inputMint: quoteMint,
      outputMint: baseMint,
      inputTokenProgram: getTokenProgramAddress(quoteTokenType),
      outputTokenProgram: getTokenProgramAddress(baseTokenType)
    };
  }
}
function addRemainingAccount(instruction) {
  const accounts = [..._nullishCoalesce(instruction.accounts, () => ( []))];
  accounts.push({
    address: SYSVAR_INSTRUCTIONS_ADDRESS,
    role: 0
    // readonly
  });
  return { ...instruction, accounts };
}

// src/kit/client.ts
var DynamicBondingCurveKitClient = class _DynamicBondingCurveKitClient {
  constructor(rpc) {
    this.pool = new DynamicBondingCurveKitPoolService(rpc);
    this.partner = new DynamicBondingCurveKitPartnerService(rpc);
    this.creator = new DynamicBondingCurveKitCreatorService(rpc);
    this.migration = new DynamicBondingCurveKitMigrationService(rpc);
    this.state = new DynamicBondingCurveKitStateService(rpc);
  }
  static fromRpcUrl(rpcUrl) {
    const rpc = _kit.createSolanaRpc.call(void 0, rpcUrl);
    return new _DynamicBondingCurveKitClient(rpc);
  }
  static fromRpc(rpc) {
    return new _DynamicBondingCurveKitClient(rpc);
  }
};




exports.DynamicBondingCurveKitStateService = DynamicBondingCurveKitStateService; exports.DynamicBondingCurveKitClient = DynamicBondingCurveKitClient;
//# sourceMappingURL=chunk-UHHSNSU3.cjs.map