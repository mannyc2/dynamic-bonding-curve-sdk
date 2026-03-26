import {
  findBasePda,
  findBaseVaultPda,
  findEventAuthorityPda,
  findMigrationMetadataPda,
  findPartnerMetadataPda,
  findQuoteVaultPda,
  findVirtualPoolMetadataPda
} from "./chunk-FWNGQBIV.js";

// src/kit/client.ts
import { createSolanaRpc } from "@solana/kit";

// src/kit/generated/instructions/createVirtualPoolMetadata.ts
import {
  addDecoderSizePrefix as addDecoderSizePrefix5,
  addEncoderSizePrefix as addEncoderSizePrefix5,
  combineCodec as combineCodec85,
  fixDecoderSize as fixDecoderSize42,
  fixEncoderSize as fixEncoderSize43,
  getBytesDecoder as getBytesDecoder42,
  getBytesEncoder as getBytesEncoder43,
  getStructDecoder as getStructDecoder85,
  getStructEncoder as getStructEncoder85,
  getU32Decoder as getU32Decoder10,
  getU32Encoder as getU32Encoder10,
  getUtf8Decoder as getUtf8Decoder5,
  getUtf8Encoder as getUtf8Encoder5,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS28,
  SolanaError as SolanaError29,
  transformEncoder as transformEncoder37
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory28,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount10
} from "@solana/program-client-core";

// src/kit/generated/programs/dynamicBondingCurve.ts
import {
  assertIsInstructionWithAccounts,
  containsBytes,
  fixEncoderSize as fixEncoderSize42,
  getBytesEncoder as getBytesEncoder42,
  SOLANA_ERROR__PROGRAM_CLIENTS__FAILED_TO_IDENTIFY_ACCOUNT,
  SOLANA_ERROR__PROGRAM_CLIENTS__FAILED_TO_IDENTIFY_INSTRUCTION,
  SOLANA_ERROR__PROGRAM_CLIENTS__UNRECOGNIZED_INSTRUCTION_TYPE,
  SolanaError as SolanaError28
} from "@solana/kit";
import {
  addSelfFetchFunctions,
  addSelfPlanAndSendFunctions
} from "@solana/program-client-core";

// src/kit/generated/accounts/claimFeeOperator.ts
import {
  assertAccountExists,
  assertAccountsExist,
  combineCodec,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
  fixDecoderSize,
  fixEncoderSize,
  getAddressDecoder,
  getAddressEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  transformEncoder
} from "@solana/kit";
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
import {
  assertAccountExists as assertAccountExists2,
  assertAccountsExist as assertAccountsExist2,
  combineCodec as combineCodec50,
  decodeAccount as decodeAccount2,
  fetchEncodedAccount as fetchEncodedAccount2,
  fetchEncodedAccounts as fetchEncodedAccounts2,
  fixDecoderSize as fixDecoderSize7,
  fixEncoderSize as fixEncoderSize7,
  getAddressDecoder as getAddressDecoder25,
  getAddressEncoder as getAddressEncoder25,
  getBytesDecoder as getBytesDecoder7,
  getBytesEncoder as getBytesEncoder7,
  getStructDecoder as getStructDecoder50,
  getStructEncoder as getStructEncoder50,
  getU64Decoder as getU64Decoder31,
  getU64Encoder as getU64Encoder31,
  getU8Decoder as getU8Decoder15,
  getU8Encoder as getU8Encoder15,
  transformEncoder as transformEncoder2
} from "@solana/kit";

// src/kit/generated/types/baseFeeConfig.ts
import {
  combineCodec as combineCodec2,
  fixDecoderSize as fixDecoderSize2,
  fixEncoderSize as fixEncoderSize2,
  getBytesDecoder as getBytesDecoder2,
  getBytesEncoder as getBytesEncoder2,
  getStructDecoder as getStructDecoder2,
  getStructEncoder as getStructEncoder2,
  getU16Decoder,
  getU16Encoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder
} from "@solana/kit";
function getBaseFeeConfigDecoder() {
  return getStructDecoder2([
    ["cliffFeeNumerator", getU64Decoder()],
    ["secondFactor", getU64Decoder()],
    ["thirdFactor", getU64Decoder()],
    ["firstFactor", getU16Decoder()],
    ["baseFeeMode", getU8Decoder()],
    ["padding0", fixDecoderSize2(getBytesDecoder2(), 5)]
  ]);
}

// src/kit/generated/types/baseFeeParameters.ts
import {
  combineCodec as combineCodec3,
  getStructDecoder as getStructDecoder3,
  getStructEncoder as getStructEncoder3,
  getU16Decoder as getU16Decoder2,
  getU16Encoder as getU16Encoder2,
  getU64Decoder as getU64Decoder2,
  getU64Encoder as getU64Encoder2,
  getU8Decoder as getU8Decoder2,
  getU8Encoder as getU8Encoder2
} from "@solana/kit";
function getBaseFeeParametersEncoder() {
  return getStructEncoder3([
    ["cliffFeeNumerator", getU64Encoder2()],
    ["firstFactor", getU16Encoder2()],
    ["secondFactor", getU64Encoder2()],
    ["thirdFactor", getU64Encoder2()],
    ["baseFeeMode", getU8Encoder2()]
  ]);
}

// src/kit/generated/types/configParameters.ts
import {
  combineCodec as combineCodec4,
  fixDecoderSize as fixDecoderSize3,
  fixEncoderSize as fixEncoderSize3,
  getArrayDecoder,
  getArrayEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getBytesDecoder as getBytesDecoder3,
  getBytesEncoder as getBytesEncoder3,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder as getStructDecoder4,
  getStructEncoder as getStructEncoder4,
  getU128Decoder,
  getU128Encoder,
  getU16Decoder as getU16Decoder3,
  getU16Encoder as getU16Encoder3,
  getU64Decoder as getU64Decoder3,
  getU64Encoder as getU64Encoder3,
  getU8Decoder as getU8Decoder3,
  getU8Encoder as getU8Encoder3
} from "@solana/kit";
function getConfigParametersEncoder() {
  return getStructEncoder4([
    ["poolFees", getPoolFeeParametersEncoder()],
    ["collectFeeMode", getU8Encoder3()],
    ["migrationOption", getU8Encoder3()],
    ["activationType", getU8Encoder3()],
    ["tokenType", getU8Encoder3()],
    ["tokenDecimal", getU8Encoder3()],
    ["partnerLiquidityPercentage", getU8Encoder3()],
    ["partnerPermanentLockedLiquidityPercentage", getU8Encoder3()],
    ["creatorLiquidityPercentage", getU8Encoder3()],
    ["creatorPermanentLockedLiquidityPercentage", getU8Encoder3()],
    ["migrationQuoteThreshold", getU64Encoder3()],
    ["sqrtStartPrice", getU128Encoder()],
    ["lockedVesting", getLockedVestingParamsEncoder()],
    ["migrationFeeOption", getU8Encoder3()],
    ["tokenSupply", getOptionEncoder(getTokenSupplyParamsEncoder())],
    ["creatorTradingFeePercentage", getU8Encoder3()],
    ["tokenUpdateAuthority", getU8Encoder3()],
    ["migrationFee", getMigrationFeeEncoder()],
    ["migratedPoolFee", getMigratedPoolFeeEncoder()],
    ["poolCreationFee", getU64Encoder3()],
    ["partnerLiquidityVestingInfo", getLiquidityVestingInfoParamsEncoder()],
    ["creatorLiquidityVestingInfo", getLiquidityVestingInfoParamsEncoder()],
    ["migratedPoolBaseFeeMode", getU8Encoder3()],
    [
      "migratedPoolMarketCapFeeSchedulerParams",
      getMigratedPoolMarketCapFeeSchedulerParamsEncoder()
    ],
    ["enableFirstSwapWithMinFee", getBooleanEncoder()],
    ["compoundingFeeBps", getU16Encoder3()],
    ["padding", fixEncoderSize3(getBytesEncoder3(), 2)],
    ["curve", getArrayEncoder(getLiquidityDistributionParametersEncoder())]
  ]);
}

// src/kit/generated/types/dynamicFeeConfig.ts
import {
  combineCodec as combineCodec5,
  fixDecoderSize as fixDecoderSize4,
  fixEncoderSize as fixEncoderSize4,
  getBytesDecoder as getBytesDecoder4,
  getBytesEncoder as getBytesEncoder4,
  getStructDecoder as getStructDecoder5,
  getStructEncoder as getStructEncoder5,
  getU128Decoder as getU128Decoder2,
  getU128Encoder as getU128Encoder2,
  getU16Decoder as getU16Decoder4,
  getU16Encoder as getU16Encoder4,
  getU32Decoder,
  getU32Encoder,
  getU8Decoder as getU8Decoder4,
  getU8Encoder as getU8Encoder4
} from "@solana/kit";
function getDynamicFeeConfigDecoder() {
  return getStructDecoder5([
    ["initialized", getU8Decoder4()],
    ["padding", fixDecoderSize4(getBytesDecoder4(), 7)],
    ["maxVolatilityAccumulator", getU32Decoder()],
    ["variableFeeControl", getU32Decoder()],
    ["binStep", getU16Decoder4()],
    ["filterPeriod", getU16Decoder4()],
    ["decayPeriod", getU16Decoder4()],
    ["reductionFactor", getU16Decoder4()],
    ["padding2", fixDecoderSize4(getBytesDecoder4(), 8)],
    ["binStepU128", getU128Decoder2()]
  ]);
}

// src/kit/generated/types/dynamicFeeParameters.ts
import {
  combineCodec as combineCodec6,
  getStructDecoder as getStructDecoder6,
  getStructEncoder as getStructEncoder6,
  getU128Decoder as getU128Decoder3,
  getU128Encoder as getU128Encoder3,
  getU16Decoder as getU16Decoder5,
  getU16Encoder as getU16Encoder5,
  getU32Decoder as getU32Decoder2,
  getU32Encoder as getU32Encoder2
} from "@solana/kit";
function getDynamicFeeParametersEncoder() {
  return getStructEncoder6([
    ["binStep", getU16Encoder5()],
    ["binStepU128", getU128Encoder3()],
    ["filterPeriod", getU16Encoder5()],
    ["decayPeriod", getU16Encoder5()],
    ["reductionFactor", getU16Encoder5()],
    ["maxVolatilityAccumulator", getU32Encoder2()],
    ["variableFeeControl", getU32Encoder2()]
  ]);
}

// src/kit/generated/types/evtClaimCreatorTradingFee.ts
import {
  combineCodec as combineCodec7,
  getAddressDecoder as getAddressDecoder2,
  getAddressEncoder as getAddressEncoder2,
  getStructDecoder as getStructDecoder7,
  getStructEncoder as getStructEncoder7,
  getU64Decoder as getU64Decoder4,
  getU64Encoder as getU64Encoder4
} from "@solana/kit";

// src/kit/generated/types/evtClaimPoolCreationFee.ts
import {
  combineCodec as combineCodec8,
  getAddressDecoder as getAddressDecoder3,
  getAddressEncoder as getAddressEncoder3,
  getStructDecoder as getStructDecoder8,
  getStructEncoder as getStructEncoder8,
  getU64Decoder as getU64Decoder5,
  getU64Encoder as getU64Encoder5
} from "@solana/kit";

// src/kit/generated/types/evtClaimProtocolFee.ts
import {
  combineCodec as combineCodec9,
  getAddressDecoder as getAddressDecoder4,
  getAddressEncoder as getAddressEncoder4,
  getStructDecoder as getStructDecoder9,
  getStructEncoder as getStructEncoder9,
  getU64Decoder as getU64Decoder6,
  getU64Encoder as getU64Encoder6
} from "@solana/kit";

// src/kit/generated/types/evtClaimProtocolLiquidityMigrationFee.ts
import {
  combineCodec as combineCodec10,
  getAddressDecoder as getAddressDecoder5,
  getAddressEncoder as getAddressEncoder5,
  getStructDecoder as getStructDecoder10,
  getStructEncoder as getStructEncoder10,
  getU64Decoder as getU64Decoder7,
  getU64Encoder as getU64Encoder7
} from "@solana/kit";

// src/kit/generated/types/evtClaimTradingFee.ts
import {
  combineCodec as combineCodec11,
  getAddressDecoder as getAddressDecoder6,
  getAddressEncoder as getAddressEncoder6,
  getStructDecoder as getStructDecoder11,
  getStructEncoder as getStructEncoder11,
  getU64Decoder as getU64Decoder8,
  getU64Encoder as getU64Encoder8
} from "@solana/kit";

// src/kit/generated/types/evtCloseClaimFeeOperator.ts
import {
  combineCodec as combineCodec12,
  getAddressDecoder as getAddressDecoder7,
  getAddressEncoder as getAddressEncoder7,
  getStructDecoder as getStructDecoder12,
  getStructEncoder as getStructEncoder12
} from "@solana/kit";

// src/kit/generated/types/evtCreateClaimFeeOperator.ts
import {
  combineCodec as combineCodec13,
  getAddressDecoder as getAddressDecoder8,
  getAddressEncoder as getAddressEncoder8,
  getStructDecoder as getStructDecoder13,
  getStructEncoder as getStructEncoder13
} from "@solana/kit";

// src/kit/generated/types/evtCreateConfig.ts
import {
  combineCodec as combineCodec14,
  getAddressDecoder as getAddressDecoder9,
  getAddressEncoder as getAddressEncoder9,
  getArrayDecoder as getArrayDecoder2,
  getArrayEncoder as getArrayEncoder2,
  getStructDecoder as getStructDecoder14,
  getStructEncoder as getStructEncoder14,
  getU128Decoder as getU128Decoder4,
  getU128Encoder as getU128Encoder4,
  getU64Decoder as getU64Decoder9,
  getU64Encoder as getU64Encoder9,
  getU8Decoder as getU8Decoder5,
  getU8Encoder as getU8Encoder5
} from "@solana/kit";

// src/kit/generated/types/evtCreateConfigV2.ts
import {
  combineCodec as combineCodec15,
  getAddressDecoder as getAddressDecoder10,
  getAddressEncoder as getAddressEncoder10,
  getStructDecoder as getStructDecoder15,
  getStructEncoder as getStructEncoder15
} from "@solana/kit";

// src/kit/generated/types/evtCreateMeteoraMigrationMetadata.ts
import {
  combineCodec as combineCodec16,
  getAddressDecoder as getAddressDecoder11,
  getAddressEncoder as getAddressEncoder11,
  getStructDecoder as getStructDecoder16,
  getStructEncoder as getStructEncoder16
} from "@solana/kit";

// src/kit/generated/types/evtCreatorWithdrawSurplus.ts
import {
  combineCodec as combineCodec17,
  getAddressDecoder as getAddressDecoder12,
  getAddressEncoder as getAddressEncoder12,
  getStructDecoder as getStructDecoder17,
  getStructEncoder as getStructEncoder17,
  getU64Decoder as getU64Decoder10,
  getU64Encoder as getU64Encoder10
} from "@solana/kit";

// src/kit/generated/types/evtCurveComplete.ts
import {
  combineCodec as combineCodec18,
  getAddressDecoder as getAddressDecoder13,
  getAddressEncoder as getAddressEncoder13,
  getStructDecoder as getStructDecoder18,
  getStructEncoder as getStructEncoder18,
  getU64Decoder as getU64Decoder11,
  getU64Encoder as getU64Encoder11
} from "@solana/kit";

// src/kit/generated/types/evtInitializePool.ts
import {
  combineCodec as combineCodec19,
  getAddressDecoder as getAddressDecoder14,
  getAddressEncoder as getAddressEncoder14,
  getStructDecoder as getStructDecoder19,
  getStructEncoder as getStructEncoder19,
  getU64Decoder as getU64Decoder12,
  getU64Encoder as getU64Encoder12,
  getU8Decoder as getU8Decoder6,
  getU8Encoder as getU8Encoder6
} from "@solana/kit";

// src/kit/generated/types/evtPartnerClaimPoolCreationFee.ts
import {
  combineCodec as combineCodec20,
  getAddressDecoder as getAddressDecoder15,
  getAddressEncoder as getAddressEncoder15,
  getStructDecoder as getStructDecoder20,
  getStructEncoder as getStructEncoder20,
  getU64Decoder as getU64Decoder13,
  getU64Encoder as getU64Encoder13
} from "@solana/kit";

// src/kit/generated/types/evtPartnerMetadata.ts
import {
  combineCodec as combineCodec21,
  getAddressDecoder as getAddressDecoder16,
  getAddressEncoder as getAddressEncoder16,
  getStructDecoder as getStructDecoder21,
  getStructEncoder as getStructEncoder21
} from "@solana/kit";

// src/kit/generated/types/evtPartnerWithdrawMigrationFee.ts
import {
  combineCodec as combineCodec22,
  getAddressDecoder as getAddressDecoder17,
  getAddressEncoder as getAddressEncoder17,
  getStructDecoder as getStructDecoder22,
  getStructEncoder as getStructEncoder22,
  getU64Decoder as getU64Decoder14,
  getU64Encoder as getU64Encoder14
} from "@solana/kit";

// src/kit/generated/types/evtPartnerWithdrawSurplus.ts
import {
  combineCodec as combineCodec23,
  getAddressDecoder as getAddressDecoder18,
  getAddressEncoder as getAddressEncoder18,
  getStructDecoder as getStructDecoder23,
  getStructEncoder as getStructEncoder23,
  getU64Decoder as getU64Decoder15,
  getU64Encoder as getU64Encoder15
} from "@solana/kit";

// src/kit/generated/types/evtSwap.ts
import {
  combineCodec as combineCodec24,
  getAddressDecoder as getAddressDecoder19,
  getAddressEncoder as getAddressEncoder19,
  getBooleanDecoder as getBooleanDecoder2,
  getBooleanEncoder as getBooleanEncoder2,
  getStructDecoder as getStructDecoder24,
  getStructEncoder as getStructEncoder24,
  getU64Decoder as getU64Decoder16,
  getU64Encoder as getU64Encoder16,
  getU8Decoder as getU8Decoder7,
  getU8Encoder as getU8Encoder7
} from "@solana/kit";

// src/kit/generated/types/evtSwap2.ts
import {
  combineCodec as combineCodec25,
  getAddressDecoder as getAddressDecoder20,
  getAddressEncoder as getAddressEncoder20,
  getBooleanDecoder as getBooleanDecoder3,
  getBooleanEncoder as getBooleanEncoder3,
  getStructDecoder as getStructDecoder25,
  getStructEncoder as getStructEncoder25,
  getU64Decoder as getU64Decoder17,
  getU64Encoder as getU64Encoder17,
  getU8Decoder as getU8Decoder8,
  getU8Encoder as getU8Encoder8
} from "@solana/kit";

// src/kit/generated/types/evtUpdatePoolCreator.ts
import {
  combineCodec as combineCodec26,
  getAddressDecoder as getAddressDecoder21,
  getAddressEncoder as getAddressEncoder21,
  getStructDecoder as getStructDecoder26,
  getStructEncoder as getStructEncoder26
} from "@solana/kit";

// src/kit/generated/types/evtVirtualPoolMetadata.ts
import {
  combineCodec as combineCodec27,
  getAddressDecoder as getAddressDecoder22,
  getAddressEncoder as getAddressEncoder22,
  getStructDecoder as getStructDecoder27,
  getStructEncoder as getStructEncoder27
} from "@solana/kit";

// src/kit/generated/types/evtWithdrawLeftover.ts
import {
  combineCodec as combineCodec28,
  getAddressDecoder as getAddressDecoder23,
  getAddressEncoder as getAddressEncoder23,
  getStructDecoder as getStructDecoder28,
  getStructEncoder as getStructEncoder28,
  getU64Decoder as getU64Decoder18,
  getU64Encoder as getU64Encoder18
} from "@solana/kit";

// src/kit/generated/types/evtWithdrawMigrationFee.ts
import {
  combineCodec as combineCodec29,
  getAddressDecoder as getAddressDecoder24,
  getAddressEncoder as getAddressEncoder24,
  getStructDecoder as getStructDecoder29,
  getStructEncoder as getStructEncoder29,
  getU64Decoder as getU64Decoder19,
  getU64Encoder as getU64Encoder19,
  getU8Decoder as getU8Decoder9,
  getU8Encoder as getU8Encoder9
} from "@solana/kit";

// src/kit/generated/types/initializePoolParameters.ts
import {
  addDecoderSizePrefix,
  addEncoderSizePrefix,
  combineCodec as combineCodec30,
  getStructDecoder as getStructDecoder30,
  getStructEncoder as getStructEncoder30,
  getU32Decoder as getU32Decoder3,
  getU32Encoder as getU32Encoder3,
  getUtf8Decoder,
  getUtf8Encoder
} from "@solana/kit";
function getInitializePoolParametersEncoder() {
  return getStructEncoder30([
    ["name", addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder3())],
    ["symbol", addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder3())],
    ["uri", addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder3())]
  ]);
}

// src/kit/generated/types/liquidityDistributionConfig.ts
import {
  combineCodec as combineCodec31,
  getStructDecoder as getStructDecoder31,
  getStructEncoder as getStructEncoder31,
  getU128Decoder as getU128Decoder5,
  getU128Encoder as getU128Encoder5
} from "@solana/kit";
function getLiquidityDistributionConfigDecoder() {
  return getStructDecoder31([
    ["sqrtPrice", getU128Decoder5()],
    ["liquidity", getU128Decoder5()]
  ]);
}

// src/kit/generated/types/liquidityDistributionParameters.ts
import {
  combineCodec as combineCodec32,
  getStructDecoder as getStructDecoder32,
  getStructEncoder as getStructEncoder32,
  getU128Decoder as getU128Decoder6,
  getU128Encoder as getU128Encoder6
} from "@solana/kit";
function getLiquidityDistributionParametersEncoder() {
  return getStructEncoder32([
    ["sqrtPrice", getU128Encoder6()],
    ["liquidity", getU128Encoder6()]
  ]);
}

// src/kit/generated/types/liquidityVestingInfo.ts
import {
  combineCodec as combineCodec33,
  fixDecoderSize as fixDecoderSize5,
  fixEncoderSize as fixEncoderSize5,
  getBytesDecoder as getBytesDecoder5,
  getBytesEncoder as getBytesEncoder5,
  getStructDecoder as getStructDecoder33,
  getStructEncoder as getStructEncoder33,
  getU16Decoder as getU16Decoder6,
  getU16Encoder as getU16Encoder6,
  getU32Decoder as getU32Decoder4,
  getU32Encoder as getU32Encoder4,
  getU8Decoder as getU8Decoder10,
  getU8Encoder as getU8Encoder10
} from "@solana/kit";
function getLiquidityVestingInfoDecoder() {
  return getStructDecoder33([
    ["isInitialized", getU8Decoder10()],
    ["vestingPercentage", getU8Decoder10()],
    ["padding", fixDecoderSize5(getBytesDecoder5(), 2)],
    ["bpsPerPeriod", getU16Decoder6()],
    ["numberOfPeriods", getU16Decoder6()],
    ["frequency", getU32Decoder4()],
    ["cliffDurationFromMigrationTime", getU32Decoder4()]
  ]);
}

// src/kit/generated/types/liquidityVestingInfoParams.ts
import {
  combineCodec as combineCodec34,
  getStructDecoder as getStructDecoder34,
  getStructEncoder as getStructEncoder34,
  getU16Decoder as getU16Decoder7,
  getU16Encoder as getU16Encoder7,
  getU32Decoder as getU32Decoder5,
  getU32Encoder as getU32Encoder5,
  getU8Decoder as getU8Decoder11,
  getU8Encoder as getU8Encoder11
} from "@solana/kit";
function getLiquidityVestingInfoParamsEncoder() {
  return getStructEncoder34([
    ["vestingPercentage", getU8Encoder11()],
    ["bpsPerPeriod", getU16Encoder7()],
    ["numberOfPeriods", getU16Encoder7()],
    ["cliffDurationFromMigrationTime", getU32Encoder5()],
    ["frequency", getU32Encoder5()]
  ]);
}

// src/kit/generated/types/lockedVestingConfig.ts
import {
  combineCodec as combineCodec35,
  getStructDecoder as getStructDecoder35,
  getStructEncoder as getStructEncoder35,
  getU64Decoder as getU64Decoder20,
  getU64Encoder as getU64Encoder20
} from "@solana/kit";
function getLockedVestingConfigDecoder() {
  return getStructDecoder35([
    ["amountPerPeriod", getU64Decoder20()],
    ["cliffDurationFromMigrationTime", getU64Decoder20()],
    ["frequency", getU64Decoder20()],
    ["numberOfPeriod", getU64Decoder20()],
    ["cliffUnlockAmount", getU64Decoder20()],
    ["padding", getU64Decoder20()]
  ]);
}

// src/kit/generated/types/lockedVestingParams.ts
import {
  combineCodec as combineCodec36,
  getStructDecoder as getStructDecoder36,
  getStructEncoder as getStructEncoder36,
  getU64Decoder as getU64Decoder21,
  getU64Encoder as getU64Encoder21
} from "@solana/kit";
function getLockedVestingParamsEncoder() {
  return getStructEncoder36([
    ["amountPerPeriod", getU64Encoder21()],
    ["cliffDurationFromMigrationTime", getU64Encoder21()],
    ["frequency", getU64Encoder21()],
    ["numberOfPeriod", getU64Encoder21()],
    ["cliffUnlockAmount", getU64Encoder21()]
  ]);
}

// src/kit/generated/types/migratedPoolFee.ts
import {
  combineCodec as combineCodec37,
  getStructDecoder as getStructDecoder37,
  getStructEncoder as getStructEncoder37,
  getU16Decoder as getU16Decoder8,
  getU16Encoder as getU16Encoder8,
  getU8Decoder as getU8Decoder12,
  getU8Encoder as getU8Encoder12
} from "@solana/kit";
function getMigratedPoolFeeEncoder() {
  return getStructEncoder37([
    ["collectFeeMode", getU8Encoder12()],
    ["dynamicFee", getU8Encoder12()],
    ["poolFeeBps", getU16Encoder8()]
  ]);
}

// src/kit/generated/types/migratedPoolMarketCapFeeSchedulerParams.ts
import {
  combineCodec as combineCodec38,
  getStructDecoder as getStructDecoder38,
  getStructEncoder as getStructEncoder38,
  getU16Decoder as getU16Decoder9,
  getU16Encoder as getU16Encoder9,
  getU32Decoder as getU32Decoder6,
  getU32Encoder as getU32Encoder6,
  getU64Decoder as getU64Decoder22,
  getU64Encoder as getU64Encoder22
} from "@solana/kit";
function getMigratedPoolMarketCapFeeSchedulerParamsEncoder() {
  return getStructEncoder38([
    ["numberOfPeriod", getU16Encoder9()],
    ["sqrtPriceStepBps", getU16Encoder9()],
    ["schedulerExpirationDuration", getU32Encoder6()],
    ["reductionFactor", getU64Encoder22()]
  ]);
}

// src/kit/generated/types/migrationFee.ts
import {
  combineCodec as combineCodec39,
  getStructDecoder as getStructDecoder39,
  getStructEncoder as getStructEncoder39,
  getU8Decoder as getU8Decoder13,
  getU8Encoder as getU8Encoder13
} from "@solana/kit";
function getMigrationFeeEncoder() {
  return getStructEncoder39([
    ["feePercentage", getU8Encoder13()],
    ["creatorFeePercentage", getU8Encoder13()]
  ]);
}

// src/kit/generated/types/poolFeeParameters.ts
import {
  combineCodec as combineCodec40,
  getOptionDecoder as getOptionDecoder2,
  getOptionEncoder as getOptionEncoder2,
  getStructDecoder as getStructDecoder40,
  getStructEncoder as getStructEncoder40
} from "@solana/kit";
function getPoolFeeParametersEncoder() {
  return getStructEncoder40([
    ["baseFee", getBaseFeeParametersEncoder()],
    ["dynamicFee", getOptionEncoder2(getDynamicFeeParametersEncoder())]
  ]);
}

// src/kit/generated/types/poolFees.ts
import {
  combineCodec as combineCodec41,
  getStructDecoder as getStructDecoder41,
  getStructEncoder as getStructEncoder41,
  getU64Decoder as getU64Decoder23,
  getU64Encoder as getU64Encoder23
} from "@solana/kit";

// src/kit/generated/types/poolFeesConfig.ts
import {
  combineCodec as combineCodec42,
  getStructDecoder as getStructDecoder42,
  getStructEncoder as getStructEncoder42
} from "@solana/kit";
function getPoolFeesConfigDecoder() {
  return getStructDecoder42([
    ["baseFee", getBaseFeeConfigDecoder()],
    ["dynamicFee", getDynamicFeeConfigDecoder()]
  ]);
}

// src/kit/generated/types/poolMetrics.ts
import {
  combineCodec as combineCodec43,
  getStructDecoder as getStructDecoder43,
  getStructEncoder as getStructEncoder43,
  getU64Decoder as getU64Decoder24,
  getU64Encoder as getU64Encoder24
} from "@solana/kit";
function getPoolMetricsDecoder() {
  return getStructDecoder43([
    ["totalProtocolBaseFee", getU64Decoder24()],
    ["totalProtocolQuoteFee", getU64Decoder24()],
    ["totalTradingBaseFee", getU64Decoder24()],
    ["totalTradingQuoteFee", getU64Decoder24()]
  ]);
}

// src/kit/generated/types/swapParameters.ts
import {
  combineCodec as combineCodec44,
  getStructDecoder as getStructDecoder44,
  getStructEncoder as getStructEncoder44,
  getU64Decoder as getU64Decoder25,
  getU64Encoder as getU64Encoder25
} from "@solana/kit";
function getSwapParametersEncoder() {
  return getStructEncoder44([
    ["amountIn", getU64Encoder25()],
    ["minimumAmountOut", getU64Encoder25()]
  ]);
}

// src/kit/generated/types/swapParameters2.ts
import {
  combineCodec as combineCodec45,
  getStructDecoder as getStructDecoder45,
  getStructEncoder as getStructEncoder45,
  getU64Decoder as getU64Decoder26,
  getU64Encoder as getU64Encoder26,
  getU8Decoder as getU8Decoder14,
  getU8Encoder as getU8Encoder14
} from "@solana/kit";
function getSwapParameters2Encoder() {
  return getStructEncoder45([
    ["amount0", getU64Encoder26()],
    ["amount1", getU64Encoder26()],
    ["swapMode", getU8Encoder14()]
  ]);
}

// src/kit/generated/types/swapResult.ts
import {
  combineCodec as combineCodec46,
  getStructDecoder as getStructDecoder46,
  getStructEncoder as getStructEncoder46,
  getU128Decoder as getU128Decoder7,
  getU128Encoder as getU128Encoder7,
  getU64Decoder as getU64Decoder27,
  getU64Encoder as getU64Encoder27
} from "@solana/kit";

// src/kit/generated/types/swapResult2.ts
import {
  combineCodec as combineCodec47,
  getStructDecoder as getStructDecoder47,
  getStructEncoder as getStructEncoder47,
  getU128Decoder as getU128Decoder8,
  getU128Encoder as getU128Encoder8,
  getU64Decoder as getU64Decoder28,
  getU64Encoder as getU64Encoder28
} from "@solana/kit";

// src/kit/generated/types/tokenSupplyParams.ts
import {
  combineCodec as combineCodec48,
  getStructDecoder as getStructDecoder48,
  getStructEncoder as getStructEncoder48,
  getU64Decoder as getU64Decoder29,
  getU64Encoder as getU64Encoder29
} from "@solana/kit";
function getTokenSupplyParamsEncoder() {
  return getStructEncoder48([
    ["preMigrationTokenSupply", getU64Encoder29()],
    ["postMigrationTokenSupply", getU64Encoder29()]
  ]);
}

// src/kit/generated/types/volatilityTracker.ts
import {
  combineCodec as combineCodec49,
  fixDecoderSize as fixDecoderSize6,
  fixEncoderSize as fixEncoderSize6,
  getBytesDecoder as getBytesDecoder6,
  getBytesEncoder as getBytesEncoder6,
  getStructDecoder as getStructDecoder49,
  getStructEncoder as getStructEncoder49,
  getU128Decoder as getU128Decoder9,
  getU128Encoder as getU128Encoder9,
  getU64Decoder as getU64Decoder30,
  getU64Encoder as getU64Encoder30
} from "@solana/kit";
function getVolatilityTrackerDecoder() {
  return getStructDecoder49([
    ["lastUpdateTimestamp", getU64Decoder30()],
    ["padding", fixDecoderSize6(getBytesDecoder6(), 8)],
    ["sqrtPriceReference", getU128Decoder9()],
    ["volatilityAccumulator", getU128Decoder9()],
    ["volatilityReference", getU128Decoder9()]
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
import {
  assertAccountExists as assertAccountExists3,
  assertAccountsExist as assertAccountsExist3,
  combineCodec as combineCodec51,
  decodeAccount as decodeAccount3,
  fetchEncodedAccount as fetchEncodedAccount3,
  fetchEncodedAccounts as fetchEncodedAccounts3,
  fixDecoderSize as fixDecoderSize8,
  fixEncoderSize as fixEncoderSize8,
  getAddressDecoder as getAddressDecoder26,
  getAddressEncoder as getAddressEncoder26,
  getBytesDecoder as getBytesDecoder8,
  getBytesEncoder as getBytesEncoder8,
  getStructDecoder as getStructDecoder51,
  getStructEncoder as getStructEncoder51,
  getU128Decoder as getU128Decoder10,
  getU128Encoder as getU128Encoder10,
  getU64Decoder as getU64Decoder32,
  getU64Encoder as getU64Encoder32,
  getU8Decoder as getU8Decoder16,
  getU8Encoder as getU8Encoder16,
  transformEncoder as transformEncoder3
} from "@solana/kit";
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
import {
  assertAccountExists as assertAccountExists4,
  assertAccountsExist as assertAccountsExist4,
  combineCodec as combineCodec52,
  decodeAccount as decodeAccount4,
  fetchEncodedAccount as fetchEncodedAccount4,
  fetchEncodedAccounts as fetchEncodedAccounts4,
  fixDecoderSize as fixDecoderSize9,
  fixEncoderSize as fixEncoderSize9,
  getAddressDecoder as getAddressDecoder27,
  getAddressEncoder as getAddressEncoder27,
  getBytesDecoder as getBytesDecoder9,
  getBytesEncoder as getBytesEncoder9,
  getStructDecoder as getStructDecoder52,
  getStructEncoder as getStructEncoder52,
  getU64Decoder as getU64Decoder33,
  getU64Encoder as getU64Encoder33,
  getU8Decoder as getU8Decoder17,
  getU8Encoder as getU8Encoder17,
  transformEncoder as transformEncoder4
} from "@solana/kit";
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
import {
  assertAccountExists as assertAccountExists5,
  assertAccountsExist as assertAccountsExist5,
  combineCodec as combineCodec53,
  decodeAccount as decodeAccount5,
  fetchEncodedAccount as fetchEncodedAccount5,
  fetchEncodedAccounts as fetchEncodedAccounts5,
  fixDecoderSize as fixDecoderSize10,
  fixEncoderSize as fixEncoderSize10,
  getAddressDecoder as getAddressDecoder28,
  getAddressEncoder as getAddressEncoder28,
  getArrayDecoder as getArrayDecoder3,
  getArrayEncoder as getArrayEncoder3,
  getBytesDecoder as getBytesDecoder10,
  getBytesEncoder as getBytesEncoder10,
  getStructDecoder as getStructDecoder53,
  getStructEncoder as getStructEncoder53,
  getU128Decoder as getU128Decoder11,
  getU128Encoder as getU128Encoder11,
  getU64Decoder as getU64Decoder34,
  getU64Encoder as getU64Encoder34,
  transformEncoder as transformEncoder5
} from "@solana/kit";
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
import {
  addDecoderSizePrefix as addDecoderSizePrefix2,
  addEncoderSizePrefix as addEncoderSizePrefix2,
  assertAccountExists as assertAccountExists6,
  assertAccountsExist as assertAccountsExist6,
  combineCodec as combineCodec54,
  decodeAccount as decodeAccount6,
  fetchEncodedAccount as fetchEncodedAccount6,
  fetchEncodedAccounts as fetchEncodedAccounts6,
  fixDecoderSize as fixDecoderSize11,
  fixEncoderSize as fixEncoderSize11,
  getAddressDecoder as getAddressDecoder29,
  getAddressEncoder as getAddressEncoder29,
  getArrayDecoder as getArrayDecoder4,
  getArrayEncoder as getArrayEncoder4,
  getBytesDecoder as getBytesDecoder11,
  getBytesEncoder as getBytesEncoder11,
  getStructDecoder as getStructDecoder54,
  getStructEncoder as getStructEncoder54,
  getU128Decoder as getU128Decoder12,
  getU128Encoder as getU128Encoder12,
  getU32Decoder as getU32Decoder7,
  getU32Encoder as getU32Encoder7,
  getUtf8Decoder as getUtf8Decoder2,
  getUtf8Encoder as getUtf8Encoder2,
  transformEncoder as transformEncoder6
} from "@solana/kit";
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
import {
  assertAccountExists as assertAccountExists7,
  assertAccountsExist as assertAccountsExist7,
  combineCodec as combineCodec55,
  decodeAccount as decodeAccount7,
  fetchEncodedAccount as fetchEncodedAccount7,
  fetchEncodedAccounts as fetchEncodedAccounts7,
  fixDecoderSize as fixDecoderSize12,
  fixEncoderSize as fixEncoderSize12,
  getAddressDecoder as getAddressDecoder30,
  getAddressEncoder as getAddressEncoder30,
  getArrayDecoder as getArrayDecoder5,
  getArrayEncoder as getArrayEncoder5,
  getBytesDecoder as getBytesDecoder12,
  getBytesEncoder as getBytesEncoder12,
  getStructDecoder as getStructDecoder55,
  getStructEncoder as getStructEncoder55,
  getU128Decoder as getU128Decoder13,
  getU128Encoder as getU128Encoder13,
  getU16Decoder as getU16Decoder10,
  getU16Encoder as getU16Encoder10,
  getU64Decoder as getU64Decoder35,
  getU64Encoder as getU64Encoder35,
  getU8Decoder as getU8Decoder18,
  getU8Encoder as getU8Encoder18,
  transformEncoder as transformEncoder7
} from "@solana/kit";
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
  return getStructDecoder55([
    ["discriminator", fixDecoderSize12(getBytesDecoder12(), 8)],
    ["quoteMint", getAddressDecoder30()],
    ["feeClaimer", getAddressDecoder30()],
    ["leftoverReceiver", getAddressDecoder30()],
    ["poolFees", getPoolFeesConfigDecoder()],
    ["partnerLiquidityVestingInfo", getLiquidityVestingInfoDecoder()],
    ["creatorLiquidityVestingInfo", getLiquidityVestingInfoDecoder()],
    ["padding0", fixDecoderSize12(getBytesDecoder12(), 14)],
    ["padding1", getU16Decoder10()],
    ["collectFeeMode", getU8Decoder18()],
    ["migrationOption", getU8Decoder18()],
    ["activationType", getU8Decoder18()],
    ["tokenDecimal", getU8Decoder18()],
    ["version", getU8Decoder18()],
    ["tokenType", getU8Decoder18()],
    ["quoteTokenFlag", getU8Decoder18()],
    ["partnerPermanentLockedLiquidityPercentage", getU8Decoder18()],
    ["partnerLiquidityPercentage", getU8Decoder18()],
    ["creatorPermanentLockedLiquidityPercentage", getU8Decoder18()],
    ["creatorLiquidityPercentage", getU8Decoder18()],
    ["migrationFeeOption", getU8Decoder18()],
    ["fixedTokenSupplyFlag", getU8Decoder18()],
    ["creatorTradingFeePercentage", getU8Decoder18()],
    ["tokenUpdateAuthority", getU8Decoder18()],
    ["migrationFeePercentage", getU8Decoder18()],
    ["creatorMigrationFeePercentage", getU8Decoder18()],
    ["padding2", fixDecoderSize12(getBytesDecoder12(), 7)],
    ["swapBaseAmount", getU64Decoder35()],
    ["migrationQuoteThreshold", getU64Decoder35()],
    ["migrationBaseThreshold", getU64Decoder35()],
    ["migrationSqrtPrice", getU128Decoder13()],
    ["lockedVestingConfig", getLockedVestingConfigDecoder()],
    ["preMigrationTokenSupply", getU64Decoder35()],
    ["postMigrationTokenSupply", getU64Decoder35()],
    ["migratedCollectFeeMode", getU8Decoder18()],
    ["migratedDynamicFee", getU8Decoder18()],
    ["migratedPoolFeeBps", getU16Decoder10()],
    ["migratedPoolBaseFeeMode", getU8Decoder18()],
    ["enableFirstSwapWithMinFee", getU8Decoder18()],
    ["migratedCompoundingFeeBps", getU16Decoder10()],
    ["poolCreationFee", getU64Decoder35()],
    ["migratedPoolBaseFeeBytes", fixDecoderSize12(getBytesDecoder12(), 16)],
    ["sqrtStartPrice", getU128Decoder13()],
    [
      "curve",
      getArrayDecoder5(getLiquidityDistributionConfigDecoder(), {
        size: 20
      })
    ]
  ]);
}
function decodePoolConfig(encodedAccount) {
  return decodeAccount7(
    encodedAccount,
    getPoolConfigDecoder()
  );
}
async function fetchPoolConfig(rpc, address, config) {
  const maybeAccount = await fetchMaybePoolConfig(rpc, address, config);
  assertAccountExists7(maybeAccount);
  return maybeAccount;
}
async function fetchMaybePoolConfig(rpc, address, config) {
  const maybeAccount = await fetchEncodedAccount7(rpc, address, config);
  return decodePoolConfig(maybeAccount);
}

// src/kit/generated/accounts/virtualPool.ts
import {
  assertAccountExists as assertAccountExists8,
  assertAccountsExist as assertAccountsExist8,
  combineCodec as combineCodec56,
  decodeAccount as decodeAccount8,
  fetchEncodedAccount as fetchEncodedAccount8,
  fetchEncodedAccounts as fetchEncodedAccounts8,
  fixDecoderSize as fixDecoderSize13,
  fixEncoderSize as fixEncoderSize13,
  getAddressDecoder as getAddressDecoder31,
  getAddressEncoder as getAddressEncoder31,
  getArrayDecoder as getArrayDecoder6,
  getArrayEncoder as getArrayEncoder6,
  getBytesDecoder as getBytesDecoder13,
  getBytesEncoder as getBytesEncoder13,
  getStructDecoder as getStructDecoder56,
  getStructEncoder as getStructEncoder56,
  getU128Decoder as getU128Decoder14,
  getU128Encoder as getU128Encoder14,
  getU16Decoder as getU16Decoder11,
  getU16Encoder as getU16Encoder11,
  getU64Decoder as getU64Decoder36,
  getU64Encoder as getU64Encoder36,
  getU8Decoder as getU8Decoder19,
  getU8Encoder as getU8Encoder19,
  transformEncoder as transformEncoder8
} from "@solana/kit";
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
  return getStructDecoder56([
    ["discriminator", fixDecoderSize13(getBytesDecoder13(), 8)],
    ["volatilityTracker", getVolatilityTrackerDecoder()],
    ["config", getAddressDecoder31()],
    ["creator", getAddressDecoder31()],
    ["baseMint", getAddressDecoder31()],
    ["baseVault", getAddressDecoder31()],
    ["quoteVault", getAddressDecoder31()],
    ["baseReserve", getU64Decoder36()],
    ["quoteReserve", getU64Decoder36()],
    ["protocolBaseFee", getU64Decoder36()],
    ["protocolQuoteFee", getU64Decoder36()],
    ["partnerBaseFee", getU64Decoder36()],
    ["partnerQuoteFee", getU64Decoder36()],
    ["sqrtPrice", getU128Decoder14()],
    ["activationPoint", getU64Decoder36()],
    ["poolType", getU8Decoder19()],
    ["isMigrated", getU8Decoder19()],
    ["isPartnerWithdrawSurplus", getU8Decoder19()],
    ["isProtocolWithdrawSurplus", getU8Decoder19()],
    ["migrationProgress", getU8Decoder19()],
    ["isWithdrawLeftover", getU8Decoder19()],
    ["isCreatorWithdrawSurplus", getU8Decoder19()],
    ["migrationFeeWithdrawStatus", getU8Decoder19()],
    ["metrics", getPoolMetricsDecoder()],
    ["finishCurveTimestamp", getU64Decoder36()],
    ["creatorBaseFee", getU64Decoder36()],
    ["creatorQuoteFee", getU64Decoder36()],
    ["legacyCreationFeeBits", getU8Decoder19()],
    ["creationFeeBits", getU8Decoder19()],
    ["hasSwap", getU8Decoder19()],
    ["padding0", fixDecoderSize13(getBytesDecoder13(), 5)],
    ["protocolLiquidityMigrationFeeBps", getU16Decoder11()],
    ["padding1", fixDecoderSize13(getBytesDecoder13(), 6)],
    ["protocolMigrationBaseFeeAmount", getU64Decoder36()],
    ["protocolMigrationQuoteFeeAmount", getU64Decoder36()],
    ["padding2", getArrayDecoder6(getU64Decoder36(), { size: 3 })]
  ]);
}
function decodeVirtualPool(encodedAccount) {
  return decodeAccount8(
    encodedAccount,
    getVirtualPoolDecoder()
  );
}
async function fetchVirtualPool(rpc, address, config) {
  const maybeAccount = await fetchMaybeVirtualPool(rpc, address, config);
  assertAccountExists8(maybeAccount);
  return maybeAccount;
}
async function fetchMaybeVirtualPool(rpc, address, config) {
  const maybeAccount = await fetchEncodedAccount8(rpc, address, config);
  return decodeVirtualPool(maybeAccount);
}

// src/kit/generated/accounts/virtualPoolMetadata.ts
import {
  addDecoderSizePrefix as addDecoderSizePrefix3,
  addEncoderSizePrefix as addEncoderSizePrefix3,
  assertAccountExists as assertAccountExists9,
  assertAccountsExist as assertAccountsExist9,
  combineCodec as combineCodec57,
  decodeAccount as decodeAccount9,
  fetchEncodedAccount as fetchEncodedAccount9,
  fetchEncodedAccounts as fetchEncodedAccounts9,
  fixDecoderSize as fixDecoderSize14,
  fixEncoderSize as fixEncoderSize14,
  getAddressDecoder as getAddressDecoder32,
  getAddressEncoder as getAddressEncoder32,
  getArrayDecoder as getArrayDecoder7,
  getArrayEncoder as getArrayEncoder7,
  getBytesDecoder as getBytesDecoder14,
  getBytesEncoder as getBytesEncoder14,
  getStructDecoder as getStructDecoder57,
  getStructEncoder as getStructEncoder57,
  getU128Decoder as getU128Decoder15,
  getU128Encoder as getU128Encoder15,
  getU32Decoder as getU32Decoder8,
  getU32Encoder as getU32Encoder8,
  getUtf8Decoder as getUtf8Decoder3,
  getUtf8Encoder as getUtf8Encoder3,
  transformEncoder as transformEncoder9
} from "@solana/kit";
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
import {
  combineCodec as combineCodec58,
  fixDecoderSize as fixDecoderSize15,
  fixEncoderSize as fixEncoderSize15,
  getBytesDecoder as getBytesDecoder15,
  getBytesEncoder as getBytesEncoder15,
  getStructDecoder as getStructDecoder58,
  getStructEncoder as getStructEncoder58,
  getU64Decoder as getU64Decoder37,
  getU64Encoder as getU64Encoder37,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS,
  SolanaError,
  transformEncoder as transformEncoder10
} from "@solana/kit";
import {
  getAccountMetaFactory
} from "@solana/program-client-core";
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
  return transformEncoder10(
    getStructEncoder58([
      ["discriminator", fixEncoderSize15(getBytesEncoder15(), 8)],
      ["maxBaseAmount", getU64Encoder37()],
      ["maxQuoteAmount", getU64Encoder37()]
    ]),
    (value) => ({
      ...value,
      discriminator: CLAIM_CREATOR_TRADING_FEE_DISCRIMINATOR
    })
  );
}
async function getClaimCreatorTradingFeeInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    poolAuthority: {
      value: input.poolAuthority ?? null,
      isWritable: false
    },
    pool: { value: input.pool ?? null, isWritable: true },
    tokenAAccount: { value: input.tokenAAccount ?? null, isWritable: true },
    tokenBAccount: { value: input.tokenBAccount ?? null, isWritable: true },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    baseMint: { value: input.baseMint ?? null, isWritable: false },
    quoteMint: { value: input.quoteMint ?? null, isWritable: false },
    creator: { value: input.creator ?? null, isWritable: false },
    tokenBaseProgram: {
      value: input.tokenBaseProgram ?? null,
      isWritable: false
    },
    tokenQuoteProgram: {
      value: input.tokenQuoteProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory(programAddress, "programId");
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
import {
  combineCodec as combineCodec59,
  fixDecoderSize as fixDecoderSize16,
  fixEncoderSize as fixEncoderSize16,
  getBytesDecoder as getBytesDecoder16,
  getBytesEncoder as getBytesEncoder16,
  getStructDecoder as getStructDecoder59,
  getStructEncoder as getStructEncoder59,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS2,
  SolanaError as SolanaError2,
  transformEncoder as transformEncoder11
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory2
} from "@solana/program-client-core";
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
  return transformEncoder11(
    getStructEncoder59([
      ["discriminator", fixEncoderSize16(getBytesEncoder16(), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: CLAIM_PARTNER_POOL_CREATION_FEE_DISCRIMINATOR
    })
  );
}
async function getClaimPartnerPoolCreationFeeInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    config: { value: input.config ?? null, isWritable: false },
    pool: { value: input.pool ?? null, isWritable: true },
    feeClaimer: { value: input.feeClaimer ?? null, isWritable: false },
    feeReceiver: { value: input.feeReceiver ?? null, isWritable: true },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory2(programAddress, "programId");
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
import {
  combineCodec as combineCodec60,
  fixDecoderSize as fixDecoderSize17,
  fixEncoderSize as fixEncoderSize17,
  getBytesDecoder as getBytesDecoder17,
  getBytesEncoder as getBytesEncoder17,
  getStructDecoder as getStructDecoder60,
  getStructEncoder as getStructEncoder60,
  getU64Decoder as getU64Decoder38,
  getU64Encoder as getU64Encoder38,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS3,
  SolanaError as SolanaError3,
  transformEncoder as transformEncoder12
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory3
} from "@solana/program-client-core";
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
import {
  combineCodec as combineCodec61,
  fixDecoderSize as fixDecoderSize18,
  fixEncoderSize as fixEncoderSize18,
  getBytesDecoder as getBytesDecoder18,
  getBytesEncoder as getBytesEncoder18,
  getStructDecoder as getStructDecoder61,
  getStructEncoder as getStructEncoder61,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS4,
  SolanaError as SolanaError4,
  transformEncoder as transformEncoder13
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory4
} from "@solana/program-client-core";
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
import {
  combineCodec as combineCodec62,
  fixDecoderSize as fixDecoderSize19,
  fixEncoderSize as fixEncoderSize19,
  getBytesDecoder as getBytesDecoder19,
  getBytesEncoder as getBytesEncoder19,
  getStructDecoder as getStructDecoder62,
  getStructEncoder as getStructEncoder62,
  getU64Decoder as getU64Decoder39,
  getU64Encoder as getU64Encoder39,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS5,
  SolanaError as SolanaError5,
  transformEncoder as transformEncoder14
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory5
} from "@solana/program-client-core";
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
  return transformEncoder14(
    getStructEncoder62([
      ["discriminator", fixEncoderSize19(getBytesEncoder19(), 8)],
      ["maxAmountA", getU64Encoder39()],
      ["maxAmountB", getU64Encoder39()]
    ]),
    (value) => ({
      ...value,
      discriminator: CLAIM_TRADING_FEE_DISCRIMINATOR
    })
  );
}
async function getClaimTradingFeeInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    poolAuthority: {
      value: input.poolAuthority ?? null,
      isWritable: false
    },
    config: { value: input.config ?? null, isWritable: false },
    pool: { value: input.pool ?? null, isWritable: true },
    tokenAAccount: { value: input.tokenAAccount ?? null, isWritable: true },
    tokenBAccount: { value: input.tokenBAccount ?? null, isWritable: true },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    baseMint: { value: input.baseMint ?? null, isWritable: false },
    quoteMint: { value: input.quoteMint ?? null, isWritable: false },
    feeClaimer: { value: input.feeClaimer ?? null, isWritable: false },
    tokenBaseProgram: {
      value: input.tokenBaseProgram ?? null,
      isWritable: false
    },
    tokenQuoteProgram: {
      value: input.tokenQuoteProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory5(programAddress, "programId");
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
import {
  combineCodec as combineCodec63,
  fixDecoderSize as fixDecoderSize20,
  fixEncoderSize as fixEncoderSize20,
  getBytesDecoder as getBytesDecoder20,
  getBytesEncoder as getBytesEncoder20,
  getStructDecoder as getStructDecoder63,
  getStructEncoder as getStructEncoder63,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS6,
  SolanaError as SolanaError6,
  transformEncoder as transformEncoder15
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory6
} from "@solana/program-client-core";
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
import {
  combineCodec as combineCodec64,
  fixDecoderSize as fixDecoderSize21,
  fixEncoderSize as fixEncoderSize21,
  getBytesDecoder as getBytesDecoder21,
  getBytesEncoder as getBytesEncoder21,
  getStructDecoder as getStructDecoder64,
  getStructEncoder as getStructEncoder64,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS7,
  SolanaError as SolanaError7,
  transformEncoder as transformEncoder16
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory7
} from "@solana/program-client-core";
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
import {
  combineCodec as combineCodec65,
  fixDecoderSize as fixDecoderSize22,
  fixEncoderSize as fixEncoderSize22,
  getBytesDecoder as getBytesDecoder22,
  getBytesEncoder as getBytesEncoder22,
  getStructDecoder as getStructDecoder65,
  getStructEncoder as getStructEncoder65,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS8,
  SolanaError as SolanaError8,
  transformEncoder as transformEncoder17
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory8
} from "@solana/program-client-core";
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
  return transformEncoder17(
    getStructEncoder65([
      ["discriminator", fixEncoderSize22(getBytesEncoder22(), 8)],
      ["configParameters", getConfigParametersEncoder()]
    ]),
    (value) => ({ ...value, discriminator: CREATE_CONFIG_DISCRIMINATOR })
  );
}
async function getCreateConfigInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    config: { value: input.config ?? null, isWritable: true },
    feeClaimer: { value: input.feeClaimer ?? null, isWritable: false },
    leftoverReceiver: {
      value: input.leftoverReceiver ?? null,
      isWritable: false
    },
    quoteMint: { value: input.quoteMint ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: {
      value: input.systemProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory8(programAddress, "programId");
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
import {
  combineCodec as combineCodec66,
  fixDecoderSize as fixDecoderSize23,
  fixEncoderSize as fixEncoderSize23,
  getBytesDecoder as getBytesDecoder23,
  getBytesEncoder as getBytesEncoder23,
  getStructDecoder as getStructDecoder66,
  getStructEncoder as getStructEncoder66,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS9,
  SolanaError as SolanaError9,
  transformEncoder as transformEncoder18
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory9,
  getAddressFromResolvedInstructionAccount
} from "@solana/program-client-core";
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
  return transformEncoder18(
    getStructEncoder66([
      ["discriminator", fixEncoderSize23(getBytesEncoder23(), 8)]
    ]),
    (value) => ({ ...value, discriminator: CREATE_LOCKER_DISCRIMINATOR })
  );
}
async function getCreateLockerInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    virtualPool: { value: input.virtualPool ?? null, isWritable: true },
    config: { value: input.config ?? null, isWritable: false },
    poolAuthority: { value: input.poolAuthority ?? null, isWritable: true },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    baseMint: { value: input.baseMint ?? null, isWritable: true },
    base: { value: input.base ?? null, isWritable: true },
    creator: { value: input.creator ?? null, isWritable: false },
    escrow: { value: input.escrow ?? null, isWritable: true },
    escrowToken: { value: input.escrowToken ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    lockerProgram: {
      value: input.lockerProgram ?? null,
      isWritable: false
    },
    lockerEventAuthority: {
      value: input.lockerEventAuthority ?? null,
      isWritable: false
    },
    systemProgram: {
      value: input.systemProgram ?? null,
      isWritable: false
    }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.base.value) {
    accounts.base.value = await findBasePda({
      virtualPool: getAddressFromResolvedInstructionAccount(
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
  const getAccountMeta = getAccountMetaFactory9(programAddress, "programId");
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
import {
  combineCodec as combineCodec67,
  fixDecoderSize as fixDecoderSize24,
  fixEncoderSize as fixEncoderSize24,
  getBytesDecoder as getBytesDecoder24,
  getBytesEncoder as getBytesEncoder24,
  getStructDecoder as getStructDecoder67,
  getStructEncoder as getStructEncoder67,
  getU128Decoder as getU128Decoder16,
  getU128Encoder as getU128Encoder16,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS10,
  SolanaError as SolanaError10,
  transformEncoder as transformEncoder19
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory10,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount2
} from "@solana/program-client-core";
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
import {
  addDecoderSizePrefix as addDecoderSizePrefix4,
  addEncoderSizePrefix as addEncoderSizePrefix4,
  combineCodec as combineCodec68,
  fixDecoderSize as fixDecoderSize25,
  fixEncoderSize as fixEncoderSize25,
  getBytesDecoder as getBytesDecoder25,
  getBytesEncoder as getBytesEncoder25,
  getStructDecoder as getStructDecoder68,
  getStructEncoder as getStructEncoder68,
  getU32Decoder as getU32Decoder9,
  getU32Encoder as getU32Encoder9,
  getUtf8Decoder as getUtf8Decoder4,
  getUtf8Encoder as getUtf8Encoder4,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS11,
  SolanaError as SolanaError11,
  transformEncoder as transformEncoder20
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory11,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount3
} from "@solana/program-client-core";
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
  return transformEncoder20(
    getStructEncoder68([
      ["discriminator", fixEncoderSize25(getBytesEncoder25(), 8)],
      ["padding", fixEncoderSize25(getBytesEncoder25(), 96)],
      ["name", addEncoderSizePrefix4(getUtf8Encoder4(), getU32Encoder9())],
      [
        "website",
        addEncoderSizePrefix4(getUtf8Encoder4(), getU32Encoder9())
      ],
      ["logo", addEncoderSizePrefix4(getUtf8Encoder4(), getU32Encoder9())]
    ]),
    (value) => ({
      ...value,
      discriminator: CREATE_PARTNER_METADATA_DISCRIMINATOR
    })
  );
}
async function getCreatePartnerMetadataInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    partnerMetadata: {
      value: input.partnerMetadata ?? null,
      isWritable: true
    },
    payer: { value: input.payer ?? null, isWritable: true },
    feeClaimer: { value: input.feeClaimer ?? null, isWritable: false },
    systemProgram: {
      value: input.systemProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.partnerMetadata.value) {
    accounts.partnerMetadata.value = await findPartnerMetadataPda({
      feeClaimer: getAddressFromResolvedInstructionAccount3(
        "feeClaimer",
        accounts.feeClaimer.value
      )
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory11(programAddress, "programId");
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
import {
  combineCodec as combineCodec69,
  fixDecoderSize as fixDecoderSize26,
  fixEncoderSize as fixEncoderSize26,
  getBytesDecoder as getBytesDecoder26,
  getBytesEncoder as getBytesEncoder26,
  getStructDecoder as getStructDecoder69,
  getStructEncoder as getStructEncoder69,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS12,
  SolanaError as SolanaError12,
  transformEncoder as transformEncoder21
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory12
} from "@solana/program-client-core";
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
  return transformEncoder21(
    getStructEncoder69([
      ["discriminator", fixEncoderSize26(getBytesEncoder26(), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: CREATOR_WITHDRAW_SURPLUS_DISCRIMINATOR
    })
  );
}
async function getCreatorWithdrawSurplusInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    poolAuthority: {
      value: input.poolAuthority ?? null,
      isWritable: false
    },
    config: { value: input.config ?? null, isWritable: false },
    virtualPool: { value: input.virtualPool ?? null, isWritable: true },
    tokenQuoteAccount: {
      value: input.tokenQuoteAccount ?? null,
      isWritable: true
    },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    quoteMint: { value: input.quoteMint ?? null, isWritable: false },
    creator: { value: input.creator ?? null, isWritable: false },
    tokenQuoteProgram: {
      value: input.tokenQuoteProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory12(programAddress, "programId");
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
import {
  combineCodec as combineCodec70,
  fixDecoderSize as fixDecoderSize27,
  fixEncoderSize as fixEncoderSize27,
  getBytesDecoder as getBytesDecoder27,
  getBytesEncoder as getBytesEncoder27,
  getStructDecoder as getStructDecoder70,
  getStructEncoder as getStructEncoder70,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS13,
  SolanaError as SolanaError13,
  transformEncoder as transformEncoder22
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory13,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount4
} from "@solana/program-client-core";
var INITIALIZE_VIRTUAL_POOL_WITH_SPL_TOKEN_DISCRIMINATOR = new Uint8Array([140, 85, 215, 176, 102, 54, 104, 79]);
function getInitializeVirtualPoolWithSplTokenInstructionDataEncoder() {
  return transformEncoder22(
    getStructEncoder70([
      ["discriminator", fixEncoderSize27(getBytesEncoder27(), 8)],
      ["params", getInitializePoolParametersEncoder()]
    ]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_VIRTUAL_POOL_WITH_SPL_TOKEN_DISCRIMINATOR
    })
  );
}
async function getInitializeVirtualPoolWithSplTokenInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    config: { value: input.config ?? null, isWritable: false },
    poolAuthority: {
      value: input.poolAuthority ?? null,
      isWritable: false
    },
    creator: { value: input.creator ?? null, isWritable: false },
    baseMint: { value: input.baseMint ?? null, isWritable: true },
    quoteMint: { value: input.quoteMint ?? null, isWritable: false },
    pool: { value: input.pool ?? null, isWritable: true },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    mintMetadata: { value: input.mintMetadata ?? null, isWritable: true },
    metadataProgram: {
      value: input.metadataProgram ?? null,
      isWritable: false
    },
    payer: { value: input.payer ?? null, isWritable: true },
    tokenQuoteProgram: {
      value: input.tokenQuoteProgram ?? null,
      isWritable: false
    },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: {
      value: input.systemProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.baseVault.value) {
    accounts.baseVault.value = await findBaseVaultPda({
      baseMint: getAddressFromResolvedInstructionAccount4(
        "baseMint",
        accounts.baseMint.value
      ),
      pool: getAddressFromResolvedInstructionAccount4(
        "pool",
        accounts.pool.value
      )
    });
  }
  if (!accounts.quoteVault.value) {
    accounts.quoteVault.value = await findQuoteVaultPda({
      quoteMint: getAddressFromResolvedInstructionAccount4(
        "quoteMint",
        accounts.quoteMint.value
      ),
      pool: getAddressFromResolvedInstructionAccount4(
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
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory13(programAddress, "programId");
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
import {
  combineCodec as combineCodec71,
  fixDecoderSize as fixDecoderSize28,
  fixEncoderSize as fixEncoderSize28,
  getBytesDecoder as getBytesDecoder28,
  getBytesEncoder as getBytesEncoder28,
  getStructDecoder as getStructDecoder71,
  getStructEncoder as getStructEncoder71,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS14,
  SolanaError as SolanaError14,
  transformEncoder as transformEncoder23
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory14,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount5
} from "@solana/program-client-core";
var INITIALIZE_VIRTUAL_POOL_WITH_TOKEN2022_DISCRIMINATOR = new Uint8Array([169, 118, 51, 78, 145, 110, 220, 155]);
function getInitializeVirtualPoolWithToken2022InstructionDataEncoder() {
  return transformEncoder23(
    getStructEncoder71([
      ["discriminator", fixEncoderSize28(getBytesEncoder28(), 8)],
      ["params", getInitializePoolParametersEncoder()]
    ]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_VIRTUAL_POOL_WITH_TOKEN2022_DISCRIMINATOR
    })
  );
}
async function getInitializeVirtualPoolWithToken2022InstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    config: { value: input.config ?? null, isWritable: false },
    poolAuthority: {
      value: input.poolAuthority ?? null,
      isWritable: false
    },
    creator: { value: input.creator ?? null, isWritable: false },
    baseMint: { value: input.baseMint ?? null, isWritable: true },
    quoteMint: { value: input.quoteMint ?? null, isWritable: false },
    pool: { value: input.pool ?? null, isWritable: true },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    tokenQuoteProgram: {
      value: input.tokenQuoteProgram ?? null,
      isWritable: false
    },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: {
      value: input.systemProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.baseVault.value) {
    accounts.baseVault.value = await findBaseVaultPda({
      baseMint: getAddressFromResolvedInstructionAccount5(
        "baseMint",
        accounts.baseMint.value
      ),
      pool: getAddressFromResolvedInstructionAccount5(
        "pool",
        accounts.pool.value
      )
    });
  }
  if (!accounts.quoteVault.value) {
    accounts.quoteVault.value = await findQuoteVaultPda({
      quoteMint: getAddressFromResolvedInstructionAccount5(
        "quoteMint",
        accounts.quoteMint.value
      ),
      pool: getAddressFromResolvedInstructionAccount5(
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
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory14(programAddress, "programId");
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
import {
  combineCodec as combineCodec72,
  fixDecoderSize as fixDecoderSize29,
  fixEncoderSize as fixEncoderSize29,
  getBytesDecoder as getBytesDecoder29,
  getBytesEncoder as getBytesEncoder29,
  getStructDecoder as getStructDecoder72,
  getStructEncoder as getStructEncoder72,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS15,
  SolanaError as SolanaError15,
  transformEncoder as transformEncoder24
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory15
} from "@solana/program-client-core";
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
  return transformEncoder24(
    getStructEncoder72([
      ["discriminator", fixEncoderSize29(getBytesEncoder29(), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: MIGRATE_METEORA_DAMM_DISCRIMINATOR
    })
  );
}
function getMigrateMeteoraDammInstruction(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    virtualPool: { value: input.virtualPool ?? null, isWritable: true },
    migrationMetadata: {
      value: input.migrationMetadata ?? null,
      isWritable: true
    },
    config: { value: input.config ?? null, isWritable: false },
    poolAuthority: { value: input.poolAuthority ?? null, isWritable: true },
    pool: { value: input.pool ?? null, isWritable: true },
    dammConfig: { value: input.dammConfig ?? null, isWritable: false },
    lpMint: { value: input.lpMint ?? null, isWritable: true },
    tokenAMint: { value: input.tokenAMint ?? null, isWritable: true },
    tokenBMint: { value: input.tokenBMint ?? null, isWritable: false },
    aVault: { value: input.aVault ?? null, isWritable: true },
    bVault: { value: input.bVault ?? null, isWritable: true },
    aTokenVault: { value: input.aTokenVault ?? null, isWritable: true },
    bTokenVault: { value: input.bTokenVault ?? null, isWritable: true },
    aVaultLpMint: { value: input.aVaultLpMint ?? null, isWritable: true },
    bVaultLpMint: { value: input.bVaultLpMint ?? null, isWritable: true },
    aVaultLp: { value: input.aVaultLp ?? null, isWritable: true },
    bVaultLp: { value: input.bVaultLp ?? null, isWritable: true },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    virtualPoolLp: { value: input.virtualPoolLp ?? null, isWritable: true },
    protocolTokenAFee: {
      value: input.protocolTokenAFee ?? null,
      isWritable: true
    },
    protocolTokenBFee: {
      value: input.protocolTokenBFee ?? null,
      isWritable: true
    },
    payer: { value: input.payer ?? null, isWritable: true },
    rent: { value: input.rent ?? null, isWritable: false },
    mintMetadata: { value: input.mintMetadata ?? null, isWritable: true },
    metadataProgram: {
      value: input.metadataProgram ?? null,
      isWritable: false
    },
    ammProgram: { value: input.ammProgram ?? null, isWritable: false },
    vaultProgram: { value: input.vaultProgram ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false
    },
    systemProgram: {
      value: input.systemProgram ?? null,
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
  const getAccountMeta = getAccountMetaFactory15(programAddress, "programId");
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
import {
  combineCodec as combineCodec73,
  fixDecoderSize as fixDecoderSize30,
  fixEncoderSize as fixEncoderSize30,
  getAddressEncoder as getAddressEncoder33,
  getBytesDecoder as getBytesDecoder30,
  getBytesEncoder as getBytesEncoder30,
  getProgramDerivedAddress,
  getStructDecoder as getStructDecoder73,
  getStructEncoder as getStructEncoder73,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS16,
  SolanaError as SolanaError16,
  transformEncoder as transformEncoder25
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory16,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount6
} from "@solana/program-client-core";
var MIGRATE_METEORA_DAMM_CLAIM_LP_TOKEN_DISCRIMINATOR = new Uint8Array(
  [139, 133, 2, 30, 91, 145, 127, 154]
);
function getMigrateMeteoraDammClaimLpTokenInstructionDataEncoder() {
  return transformEncoder25(
    getStructEncoder73([
      ["discriminator", fixEncoderSize30(getBytesEncoder30(), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: MIGRATE_METEORA_DAMM_CLAIM_LP_TOKEN_DISCRIMINATOR
    })
  );
}
async function getMigrateMeteoraDammClaimLpTokenInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    virtualPool: { value: input.virtualPool ?? null, isWritable: false },
    migrationMetadata: {
      value: input.migrationMetadata ?? null,
      isWritable: true
    },
    poolAuthority: { value: input.poolAuthority ?? null, isWritable: true },
    lpMint: { value: input.lpMint ?? null, isWritable: false },
    sourceToken: { value: input.sourceToken ?? null, isWritable: true },
    destinationToken: {
      value: input.destinationToken ?? null,
      isWritable: true
    },
    owner: { value: input.owner ?? null, isWritable: false },
    sender: { value: input.sender ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.sourceToken.value) {
    accounts.sourceToken.value = await getProgramDerivedAddress({
      programAddress: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
      seeds: [
        getAddressEncoder33().encode(
          getAddressFromResolvedInstructionAccount6(
            "poolAuthority",
            accounts.poolAuthority.value
          )
        ),
        getBytesEncoder30().encode(
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
        getAddressEncoder33().encode(
          getAddressFromResolvedInstructionAccount6(
            "migrationMetadata",
            accounts.migrationMetadata.value
          )
        )
      ]
    });
  }
  if (!accounts.destinationToken.value) {
    accounts.destinationToken.value = await getProgramDerivedAddress({
      programAddress: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
      seeds: [
        getAddressEncoder33().encode(
          getAddressFromResolvedInstructionAccount6(
            "owner",
            accounts.owner.value
          )
        ),
        getBytesEncoder30().encode(
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
        getAddressEncoder33().encode(
          getAddressFromResolvedInstructionAccount6(
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
  const getAccountMeta = getAccountMetaFactory16(programAddress, "programId");
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
import {
  combineCodec as combineCodec74,
  fixDecoderSize as fixDecoderSize31,
  fixEncoderSize as fixEncoderSize31,
  getAddressEncoder as getAddressEncoder34,
  getBytesDecoder as getBytesDecoder31,
  getBytesEncoder as getBytesEncoder31,
  getProgramDerivedAddress as getProgramDerivedAddress2,
  getStructDecoder as getStructDecoder74,
  getStructEncoder as getStructEncoder74,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS17,
  SolanaError as SolanaError17,
  transformEncoder as transformEncoder26
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory17,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount7
} from "@solana/program-client-core";
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
  return transformEncoder26(
    getStructEncoder74([
      ["discriminator", fixEncoderSize31(getBytesEncoder31(), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: MIGRATE_METEORA_DAMM_LOCK_LP_TOKEN_DISCRIMINATOR
    })
  );
}
async function getMigrateMeteoraDammLockLpTokenInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    virtualPool: { value: input.virtualPool ?? null, isWritable: false },
    migrationMetadata: {
      value: input.migrationMetadata ?? null,
      isWritable: true
    },
    poolAuthority: { value: input.poolAuthority ?? null, isWritable: true },
    pool: { value: input.pool ?? null, isWritable: true },
    lpMint: { value: input.lpMint ?? null, isWritable: false },
    lockEscrow: { value: input.lockEscrow ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
    sourceTokens: { value: input.sourceTokens ?? null, isWritable: true },
    escrowVault: { value: input.escrowVault ?? null, isWritable: true },
    ammProgram: { value: input.ammProgram ?? null, isWritable: false },
    aVault: { value: input.aVault ?? null, isWritable: false },
    bVault: { value: input.bVault ?? null, isWritable: false },
    aVaultLp: { value: input.aVaultLp ?? null, isWritable: false },
    bVaultLp: { value: input.bVaultLp ?? null, isWritable: false },
    aVaultLpMint: { value: input.aVaultLpMint ?? null, isWritable: false },
    bVaultLpMint: { value: input.bVaultLpMint ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.sourceTokens.value) {
    accounts.sourceTokens.value = await getProgramDerivedAddress2({
      programAddress: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
      seeds: [
        getAddressEncoder34().encode(
          getAddressFromResolvedInstructionAccount7(
            "poolAuthority",
            accounts.poolAuthority.value
          )
        ),
        getBytesEncoder31().encode(
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
        getAddressEncoder34().encode(
          getAddressFromResolvedInstructionAccount7(
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
  const getAccountMeta = getAccountMetaFactory17(programAddress, "programId");
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
import {
  combineCodec as combineCodec75,
  fixDecoderSize as fixDecoderSize32,
  fixEncoderSize as fixEncoderSize32,
  getBytesDecoder as getBytesDecoder32,
  getBytesEncoder as getBytesEncoder32,
  getStructDecoder as getStructDecoder75,
  getStructEncoder as getStructEncoder75,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS18,
  SolanaError as SolanaError18,
  transformEncoder as transformEncoder27
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory18
} from "@solana/program-client-core";
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
  return transformEncoder27(
    getStructEncoder75([
      ["discriminator", fixEncoderSize32(getBytesEncoder32(), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: MIGRATION_DAMM_V2_DISCRIMINATOR
    })
  );
}
function getMigrationDammV2Instruction(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    virtualPool: { value: input.virtualPool ?? null, isWritable: true },
    migrationMetadata: {
      value: input.migrationMetadata ?? null,
      isWritable: false
    },
    config: { value: input.config ?? null, isWritable: false },
    poolAuthority: { value: input.poolAuthority ?? null, isWritable: true },
    pool: { value: input.pool ?? null, isWritable: true },
    firstPositionNftMint: {
      value: input.firstPositionNftMint ?? null,
      isWritable: true
    },
    firstPositionNftAccount: {
      value: input.firstPositionNftAccount ?? null,
      isWritable: true
    },
    firstPosition: { value: input.firstPosition ?? null, isWritable: true },
    secondPositionNftMint: {
      value: input.secondPositionNftMint ?? null,
      isWritable: true
    },
    secondPositionNftAccount: {
      value: input.secondPositionNftAccount ?? null,
      isWritable: true
    },
    secondPosition: {
      value: input.secondPosition ?? null,
      isWritable: true
    },
    dammPoolAuthority: {
      value: input.dammPoolAuthority ?? null,
      isWritable: false
    },
    ammProgram: { value: input.ammProgram ?? null, isWritable: false },
    baseMint: { value: input.baseMint ?? null, isWritable: true },
    quoteMint: { value: input.quoteMint ?? null, isWritable: true },
    tokenAVault: { value: input.tokenAVault ?? null, isWritable: true },
    tokenBVault: { value: input.tokenBVault ?? null, isWritable: true },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    tokenBaseProgram: {
      value: input.tokenBaseProgram ?? null,
      isWritable: false
    },
    tokenQuoteProgram: {
      value: input.tokenQuoteProgram ?? null,
      isWritable: false
    },
    token2022Program: {
      value: input.token2022Program ?? null,
      isWritable: false
    },
    dammEventAuthority: {
      value: input.dammEventAuthority ?? null,
      isWritable: false
    },
    systemProgram: {
      value: input.systemProgram ?? null,
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
  const getAccountMeta = getAccountMetaFactory18(programAddress, "programId");
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
import {
  combineCodec as combineCodec76,
  fixDecoderSize as fixDecoderSize33,
  fixEncoderSize as fixEncoderSize33,
  getBytesDecoder as getBytesDecoder33,
  getBytesEncoder as getBytesEncoder33,
  getStructDecoder as getStructDecoder76,
  getStructEncoder as getStructEncoder76,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS19,
  SolanaError as SolanaError19,
  transformEncoder as transformEncoder28
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory19
} from "@solana/program-client-core";
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
import {
  combineCodec as combineCodec77,
  fixDecoderSize as fixDecoderSize34,
  fixEncoderSize as fixEncoderSize34,
  getBytesDecoder as getBytesDecoder34,
  getBytesEncoder as getBytesEncoder34,
  getStructDecoder as getStructDecoder77,
  getStructEncoder as getStructEncoder77,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS20,
  SolanaError as SolanaError20,
  transformEncoder as transformEncoder29
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory20,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount8
} from "@solana/program-client-core";
var MIGRATION_METEORA_DAMM_CREATE_METADATA_DISCRIMINATOR = new Uint8Array([47, 94, 126, 115, 221, 226, 194, 133]);
function getMigrationMeteoraDammCreateMetadataInstructionDataEncoder() {
  return transformEncoder29(
    getStructEncoder77([
      ["discriminator", fixEncoderSize34(getBytesEncoder34(), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: MIGRATION_METEORA_DAMM_CREATE_METADATA_DISCRIMINATOR
    })
  );
}
async function getMigrationMeteoraDammCreateMetadataInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    virtualPool: { value: input.virtualPool ?? null, isWritable: false },
    config: { value: input.config ?? null, isWritable: false },
    migrationMetadata: {
      value: input.migrationMetadata ?? null,
      isWritable: true
    },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: {
      value: input.systemProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.migrationMetadata.value) {
    accounts.migrationMetadata.value = await findMigrationMetadataPda({
      virtualPool: getAddressFromResolvedInstructionAccount8(
        "virtualPool",
        accounts.virtualPool.value
      )
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory20(programAddress, "programId");
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
import {
  combineCodec as combineCodec78,
  fixDecoderSize as fixDecoderSize35,
  fixEncoderSize as fixEncoderSize35,
  getBytesDecoder as getBytesDecoder35,
  getBytesEncoder as getBytesEncoder35,
  getStructDecoder as getStructDecoder78,
  getStructEncoder as getStructEncoder78,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS21,
  SolanaError as SolanaError21,
  transformEncoder as transformEncoder30
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory21
} from "@solana/program-client-core";
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
  return transformEncoder30(
    getStructEncoder78([
      ["discriminator", fixEncoderSize35(getBytesEncoder35(), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: PARTNER_WITHDRAW_SURPLUS_DISCRIMINATOR
    })
  );
}
async function getPartnerWithdrawSurplusInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    poolAuthority: {
      value: input.poolAuthority ?? null,
      isWritable: false
    },
    config: { value: input.config ?? null, isWritable: false },
    virtualPool: { value: input.virtualPool ?? null, isWritable: true },
    tokenQuoteAccount: {
      value: input.tokenQuoteAccount ?? null,
      isWritable: true
    },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    quoteMint: { value: input.quoteMint ?? null, isWritable: false },
    feeClaimer: { value: input.feeClaimer ?? null, isWritable: false },
    tokenQuoteProgram: {
      value: input.tokenQuoteProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory21(programAddress, "programId");
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
import {
  combineCodec as combineCodec79,
  fixDecoderSize as fixDecoderSize36,
  fixEncoderSize as fixEncoderSize36,
  getBytesDecoder as getBytesDecoder36,
  getBytesEncoder as getBytesEncoder36,
  getStructDecoder as getStructDecoder79,
  getStructEncoder as getStructEncoder79,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS22,
  SolanaError as SolanaError22,
  transformEncoder as transformEncoder31
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory22
} from "@solana/program-client-core";
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
  return transformEncoder31(
    getStructEncoder79([
      ["discriminator", fixEncoderSize36(getBytesEncoder36(), 8)],
      ["params", getSwapParametersEncoder()]
    ]),
    (value) => ({ ...value, discriminator: SWAP_DISCRIMINATOR })
  );
}
async function getSwapInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    poolAuthority: {
      value: input.poolAuthority ?? null,
      isWritable: false
    },
    config: { value: input.config ?? null, isWritable: false },
    pool: { value: input.pool ?? null, isWritable: true },
    inputTokenAccount: {
      value: input.inputTokenAccount ?? null,
      isWritable: true
    },
    outputTokenAccount: {
      value: input.outputTokenAccount ?? null,
      isWritable: true
    },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    baseMint: { value: input.baseMint ?? null, isWritable: false },
    quoteMint: { value: input.quoteMint ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: false },
    tokenBaseProgram: {
      value: input.tokenBaseProgram ?? null,
      isWritable: false
    },
    tokenQuoteProgram: {
      value: input.tokenQuoteProgram ?? null,
      isWritable: false
    },
    referralTokenAccount: {
      value: input.referralTokenAccount ?? null,
      isWritable: true
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory22(programAddress, "programId");
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
import {
  combineCodec as combineCodec80,
  fixDecoderSize as fixDecoderSize37,
  fixEncoderSize as fixEncoderSize37,
  getBytesDecoder as getBytesDecoder37,
  getBytesEncoder as getBytesEncoder37,
  getStructDecoder as getStructDecoder80,
  getStructEncoder as getStructEncoder80,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS23,
  SolanaError as SolanaError23,
  transformEncoder as transformEncoder32
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory23
} from "@solana/program-client-core";
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
  return transformEncoder32(
    getStructEncoder80([
      ["discriminator", fixEncoderSize37(getBytesEncoder37(), 8)],
      ["params", getSwapParameters2Encoder()]
    ]),
    (value) => ({ ...value, discriminator: SWAP2_DISCRIMINATOR })
  );
}
async function getSwap2InstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    poolAuthority: {
      value: input.poolAuthority ?? null,
      isWritable: false
    },
    config: { value: input.config ?? null, isWritable: false },
    pool: { value: input.pool ?? null, isWritable: true },
    inputTokenAccount: {
      value: input.inputTokenAccount ?? null,
      isWritable: true
    },
    outputTokenAccount: {
      value: input.outputTokenAccount ?? null,
      isWritable: true
    },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    baseMint: { value: input.baseMint ?? null, isWritable: false },
    quoteMint: { value: input.quoteMint ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: false },
    tokenBaseProgram: {
      value: input.tokenBaseProgram ?? null,
      isWritable: false
    },
    tokenQuoteProgram: {
      value: input.tokenQuoteProgram ?? null,
      isWritable: false
    },
    referralTokenAccount: {
      value: input.referralTokenAccount ?? null,
      isWritable: true
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory23(programAddress, "programId");
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
import {
  combineCodec as combineCodec81,
  fixDecoderSize as fixDecoderSize38,
  fixEncoderSize as fixEncoderSize38,
  getBytesDecoder as getBytesDecoder38,
  getBytesEncoder as getBytesEncoder38,
  getStructDecoder as getStructDecoder81,
  getStructEncoder as getStructEncoder81,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS24,
  SolanaError as SolanaError24,
  transformEncoder as transformEncoder33
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory24
} from "@solana/program-client-core";
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
  return transformEncoder33(
    getStructEncoder81([
      ["discriminator", fixEncoderSize38(getBytesEncoder38(), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: TRANSFER_POOL_CREATOR_DISCRIMINATOR
    })
  );
}
async function getTransferPoolCreatorInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    virtualPool: { value: input.virtualPool ?? null, isWritable: true },
    config: { value: input.config ?? null, isWritable: false },
    creator: { value: input.creator ?? null, isWritable: false },
    newCreator: { value: input.newCreator ?? null, isWritable: false },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory24(programAddress, "programId");
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
import {
  combineCodec as combineCodec82,
  fixDecoderSize as fixDecoderSize39,
  fixEncoderSize as fixEncoderSize39,
  getAddressEncoder as getAddressEncoder35,
  getBytesDecoder as getBytesDecoder39,
  getBytesEncoder as getBytesEncoder39,
  getProgramDerivedAddress as getProgramDerivedAddress3,
  getStructDecoder as getStructDecoder82,
  getStructEncoder as getStructEncoder82,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS25,
  SolanaError as SolanaError25,
  transformEncoder as transformEncoder34
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory25,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount9
} from "@solana/program-client-core";
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
  return transformEncoder34(
    getStructEncoder82([
      ["discriminator", fixEncoderSize39(getBytesEncoder39(), 8)]
    ]),
    (value) => ({
      ...value,
      discriminator: WITHDRAW_LEFTOVER_DISCRIMINATOR
    })
  );
}
async function getWithdrawLeftoverInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    poolAuthority: {
      value: input.poolAuthority ?? null,
      isWritable: false
    },
    config: { value: input.config ?? null, isWritable: false },
    virtualPool: { value: input.virtualPool ?? null, isWritable: true },
    tokenBaseAccount: {
      value: input.tokenBaseAccount ?? null,
      isWritable: true
    },
    baseVault: { value: input.baseVault ?? null, isWritable: true },
    baseMint: { value: input.baseMint ?? null, isWritable: false },
    leftoverReceiver: {
      value: input.leftoverReceiver ?? null,
      isWritable: false
    },
    tokenBaseProgram: {
      value: input.tokenBaseProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.tokenBaseAccount.value) {
    accounts.tokenBaseAccount.value = await getProgramDerivedAddress3({
      programAddress: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
      seeds: [
        getAddressEncoder35().encode(
          getAddressFromResolvedInstructionAccount9(
            "leftoverReceiver",
            accounts.leftoverReceiver.value
          )
        ),
        getAddressEncoder35().encode(
          getAddressFromResolvedInstructionAccount9(
            "tokenBaseProgram",
            accounts.tokenBaseProgram.value
          )
        ),
        getAddressEncoder35().encode(
          getAddressFromResolvedInstructionAccount9(
            "baseMint",
            accounts.baseMint.value
          )
        )
      ]
    });
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory25(programAddress, "programId");
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
import {
  combineCodec as combineCodec83,
  fixDecoderSize as fixDecoderSize40,
  fixEncoderSize as fixEncoderSize40,
  getBytesDecoder as getBytesDecoder40,
  getBytesEncoder as getBytesEncoder40,
  getStructDecoder as getStructDecoder83,
  getStructEncoder as getStructEncoder83,
  getU8Decoder as getU8Decoder20,
  getU8Encoder as getU8Encoder20,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS26,
  SolanaError as SolanaError26,
  transformEncoder as transformEncoder35
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory26
} from "@solana/program-client-core";
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
  return transformEncoder35(
    getStructEncoder83([
      ["discriminator", fixEncoderSize40(getBytesEncoder40(), 8)],
      ["flag", getU8Encoder20()]
    ]),
    (value) => ({
      ...value,
      discriminator: WITHDRAW_MIGRATION_FEE_DISCRIMINATOR
    })
  );
}
async function getWithdrawMigrationFeeInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    poolAuthority: {
      value: input.poolAuthority ?? null,
      isWritable: false
    },
    config: { value: input.config ?? null, isWritable: false },
    virtualPool: { value: input.virtualPool ?? null, isWritable: true },
    tokenQuoteAccount: {
      value: input.tokenQuoteAccount ?? null,
      isWritable: true
    },
    quoteVault: { value: input.quoteVault ?? null, isWritable: true },
    quoteMint: { value: input.quoteMint ?? null, isWritable: false },
    sender: { value: input.sender ?? null, isWritable: false },
    tokenQuoteProgram: {
      value: input.tokenQuoteProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.poolAuthority.value) {
    accounts.poolAuthority.value = "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory26(programAddress, "programId");
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
import {
  combineCodec as combineCodec84,
  fixDecoderSize as fixDecoderSize41,
  fixEncoderSize as fixEncoderSize41,
  getBytesDecoder as getBytesDecoder41,
  getBytesEncoder as getBytesEncoder41,
  getStructDecoder as getStructDecoder84,
  getStructEncoder as getStructEncoder84,
  getU64Decoder as getU64Decoder40,
  getU64Encoder as getU64Encoder40,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS27,
  SolanaError as SolanaError27,
  transformEncoder as transformEncoder36
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory27
} from "@solana/program-client-core";
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
  return transformEncoder37(
    getStructEncoder85([
      ["discriminator", fixEncoderSize43(getBytesEncoder43(), 8)],
      ["padding", fixEncoderSize43(getBytesEncoder43(), 96)],
      ["name", addEncoderSizePrefix5(getUtf8Encoder5(), getU32Encoder10())],
      [
        "website",
        addEncoderSizePrefix5(getUtf8Encoder5(), getU32Encoder10())
      ],
      ["logo", addEncoderSizePrefix5(getUtf8Encoder5(), getU32Encoder10())]
    ]),
    (value) => ({
      ...value,
      discriminator: CREATE_VIRTUAL_POOL_METADATA_DISCRIMINATOR
    })
  );
}
async function getCreateVirtualPoolMetadataInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS;
  const originalAccounts = {
    virtualPool: { value: input.virtualPool ?? null, isWritable: true },
    virtualPoolMetadata: {
      value: input.virtualPoolMetadata ?? null,
      isWritable: true
    },
    creator: { value: input.creator ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: {
      value: input.systemProgram ?? null,
      isWritable: false
    },
    eventAuthority: {
      value: input.eventAuthority ?? null,
      isWritable: false
    },
    program: { value: input.program ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.virtualPoolMetadata.value) {
    accounts.virtualPoolMetadata.value = await findVirtualPoolMetadataPda({
      virtualPool: getAddressFromResolvedInstructionAccount10(
        "virtualPool",
        accounts.virtualPool.value
      )
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  if (!accounts.eventAuthority.value) {
    accounts.eventAuthority.value = await findEventAuthorityPda();
  }
  const getAccountMeta = getAccountMetaFactory28(programAddress, "programId");
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
import {
  isTransactionSigner
} from "@solana/kit";
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
  return value != null && typeof value === "object" && "address" in value && isTransactionSigner(
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
import {
  getAddressEncoder as getAddressEncoder36,
  getProgramDerivedAddress as getProgramDerivedAddress4
} from "@solana/kit";
var addressEncoder = getAddressEncoder36();
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
  const [pda] = await getProgramDerivedAddress4({
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
  const [pda] = await getProgramDerivedAddress4({
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
  const [pda] = await getProgramDerivedAddress4({
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
  const [pda] = await getProgramDerivedAddress4({
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
  const [pda] = await getProgramDerivedAddress4({
    programAddress: DAMM_V1_PROGRAM_ADDRESS,
    seeds: ["lp_mint", addressEncoder.encode(pool)]
  });
  return pda;
}
async function findDammV1VaultLpPda(vault, pool) {
  const [pda] = await getProgramDerivedAddress4({
    programAddress: DAMM_V1_PROGRAM_ADDRESS,
    seeds: [addressEncoder.encode(vault), addressEncoder.encode(pool)]
  });
  return pda;
}
async function findDammV1LockEscrowPda(dammPool, creator) {
  const [pda] = await getProgramDerivedAddress4({
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
  const [pda] = await getProgramDerivedAddress4({
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
  const [pda] = await getProgramDerivedAddress4({
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
  const [pda] = await getProgramDerivedAddress4({
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
  const [pda] = await getProgramDerivedAddress4({
    programAddress: DAMM_V2_PROGRAM_ADDRESS,
    seeds: ["position", addressEncoder.encode(positionNft)]
  });
  return pda;
}
async function findDammV2PositionNftAccountPda(positionNftMint) {
  const [pda] = await getProgramDerivedAddress4({
    programAddress: DAMM_V2_PROGRAM_ADDRESS,
    seeds: ["position_nft_account", addressEncoder.encode(positionNftMint)]
  });
  return pda;
}
async function findDammV2EventAuthorityPda() {
  const [pda] = await getProgramDerivedAddress4({
    programAddress: DAMM_V2_PROGRAM_ADDRESS,
    seeds: ["__event_authority"]
  });
  return pda;
}
async function findDammV2PoolAuthorityPda() {
  const [pda] = await getProgramDerivedAddress4({
    programAddress: DAMM_V2_PROGRAM_ADDRESS,
    seeds: ["pool_authority"]
  });
  return pda;
}
async function findDammV2MigrationMetadataPda(virtualPool) {
  const [pda] = await getProgramDerivedAddress4({
    programAddress: DYNAMIC_BONDING_CURVE_PROGRAM_ADDRESS2,
    seeds: ["damm_v2", addressEncoder.encode(virtualPool)]
  });
  return pda;
}
async function findEscrowPda(base) {
  const [pda] = await getProgramDerivedAddress4({
    programAddress: LOCKER_PROGRAM_ADDRESS,
    seeds: ["escrow", addressEncoder.encode(base)]
  });
  return pda;
}
async function findLockerEventAuthorityPda() {
  const [pda] = await getProgramDerivedAddress4({
    programAddress: LOCKER_PROGRAM_ADDRESS,
    seeds: ["__event_authority"]
  });
  return pda;
}
async function findVaultPdas(tokenMint, seedBaseKey) {
  const base = seedBaseKey ?? BASE_ADDRESS;
  const [vault] = await getProgramDerivedAddress4({
    programAddress: VAULT_PROGRAM_ADDRESS,
    seeds: [
      "vault",
      addressEncoder.encode(tokenMint),
      addressEncoder.encode(base)
    ]
  });
  const [tokenVault] = await getProgramDerivedAddress4({
    programAddress: VAULT_PROGRAM_ADDRESS,
    seeds: ["token_vault", addressEncoder.encode(vault)]
  });
  const [lpMint] = await getProgramDerivedAddress4({
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
import {
  createNoopSigner,
  fetchEncodedAccount as fetchEncodedAccount10
} from "@solana/kit";
import { getTransferSolInstruction } from "@solana-program/system";
import {
  findAssociatedTokenPda,
  getCloseAccountInstruction,
  getCreateAssociatedTokenIdempotentInstruction,
  getSyncNativeInstruction
} from "@solana-program/token";
function getTokenProgramAddress(tokenType) {
  return tokenType === 0 /* SPL */ ? TOKEN_PROGRAM_ADDRESS : TOKEN_2022_PROGRAM_ADDRESS;
}
async function getTokenTypeForMint(rpc, mint) {
  if (mint === NATIVE_MINT_ADDRESS) {
    return 0 /* SPL */;
  }
  const account = await fetchEncodedAccount10(rpc, mint);
  if (!account.exists) {
    throw new Error(`Mint account not found: ${mint}`);
  }
  return account.programAddress === TOKEN_PROGRAM_ADDRESS ? 0 /* SPL */ : 1 /* Token2022 */;
}
function toSigner2(value) {
  return typeof value === "string" ? createNoopSigner(value) : value;
}
function toAddress2(value) {
  return typeof value === "string" ? value : value.address;
}
async function createAssociatedTokenAccountIdempotentInstruction(payer, owner, mint, tokenProgram) {
  const [ata] = await findAssociatedTokenPda({
    owner,
    tokenProgram,
    mint
  });
  const instruction = getCreateAssociatedTokenIdempotentInstruction({
    payer: toSigner2(payer),
    ata,
    owner,
    mint,
    tokenProgram
  });
  return { ata, instruction };
}
function wrapSolInstructions(from, to, amount) {
  const transferIx = getTransferSolInstruction({
    source: toSigner2(from),
    destination: to,
    amount
  });
  const syncNativeIx = getSyncNativeInstruction({
    account: to
  });
  return [transferIx, syncNativeIx];
}
async function unwrapSolInstruction(owner, receiver) {
  const ownerAddress = toAddress2(owner);
  const [wSolAta] = await findAssociatedTokenPda({
    owner: ownerAddress,
    tokenProgram: TOKEN_PROGRAM_ADDRESS,
    mint: NATIVE_MINT_ADDRESS
  });
  return getCloseAccountInstruction({
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
    const [migrationMetadataPda] = await findMigrationMetadataPda({
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
import {
  fetchEncodedAccount as fetchEncodedAccount11,
  generateKeyPairSigner
} from "@solana/kit";
import { findAssociatedTokenPda as findAssociatedTokenPda2 } from "@solana-program/token";
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
        const { findBasePda: findBasePda2 } = await import("./pdas-VZI35AEK.js");
        const [base] = await findBasePda2({ virtualPool });
        return base;
      })()
    );
    const [escrowToken] = await findAssociatedTokenPda2({
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
    const { findMigrationMetadataPda: findMigrationMetadataPda2 } = await import("./pdas-VZI35AEK.js");
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
      fetchEncodedAccount11(this.rpc, aVaultPdas.vaultPda),
      fetchEncodedAccount11(this.rpc, bVaultPdas.vaultPda)
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
    const [virtualPoolLp] = await findAssociatedTokenPda2({
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
    const { findMigrationMetadataPda: findMigrationMetadataPda2 } = await import("./pdas-VZI35AEK.js");
    const [migrationMetadata] = await findMigrationMetadataPda2({
      virtualPool
    });
    const [aVaultPdas, bVaultPdas] = await Promise.all([
      findVaultPdas(baseMint),
      findVaultPdas(quoteMint)
    ]);
    const [aVaultAccountInfo, bVaultAccountInfo] = await Promise.all([
      fetchEncodedAccount11(this.rpc, aVaultPdas.vaultPda),
      fetchEncodedAccount11(this.rpc, bVaultPdas.vaultPda)
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
    const lockEscrowAccountInfo = await fetchEncodedAccount11(
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
    const [escrowVault] = await findAssociatedTokenPda2({
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
    const [sourceTokens] = await findAssociatedTokenPda2({
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
    const { findMigrationMetadataPda: findMigrationMetadataPda2 } = await import("./pdas-VZI35AEK.js");
    const [migrationMetadata] = await findMigrationMetadataPda2({
      virtualPool
    });
    const lpMint = await findDammV1LpMintPda(dammPool);
    const owner = isPartner ? configState.data.feeClaimer : poolState.data.creator;
    const [destinationToken] = await findAssociatedTokenPda2({
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
    const [sourceToken] = await findAssociatedTokenPda2({
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
      generateKeyPairSigner(),
      generateKeyPairSigner()
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
import {
  createNoopSigner as createNoopSigner2
} from "@solana/kit";
import { findAssociatedTokenPda as findAssociatedTokenPda3 } from "@solana-program/token";
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
    const feeReceiver = receiverAddress ?? feeClaimerAddress;
    let tokenBaseAccount;
    let tokenQuoteAccount;
    if (isSOLQuoteMint) {
      const tempWSolOwner = receiverAddress && receiverAddress !== feeClaimerAddress ? toAddressOrSigner(tempWSolAcc) : feeClaimerSigner;
      const tempWSolAddress = toAddress(tempWSolOwner);
      [tokenBaseAccount] = await findAssociatedTokenPda3({
        owner: feeReceiver,
        mint: poolState.baseMint,
        tokenProgram: tokenBaseProgram
      });
      [tokenQuoteAccount] = await findAssociatedTokenPda3({
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
      [tokenBaseAccount] = await findAssociatedTokenPda3({
        owner: receiverAddress,
        mint: poolState.baseMint,
        tokenProgram: tokenBaseProgram
      });
      [tokenQuoteAccount] = await findAssociatedTokenPda3({
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
    const feeClaimerPlaceholder = createNoopSigner2(configState.feeClaimer);
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
import BN from "bn.js";
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
          params.firstBuyParam?.buyer
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
        params.firstBuyParam?.buyer
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
        params.partnerFirstBuyParam?.partner,
        params.creatorFirstBuyParam?.creator
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
    if (firstBuyParam.buyAmount.lte(new BN(0))) {
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
        new BN(0),
        1 /* QuoteToBase */,
        new BN(baseFee.secondFactor.toString()),
        new BN(baseFee.thirdFactor.toString()),
        new BN(baseFee.firstFactor.toString())
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
    if (firstBuyParam.buyAmount.lte(new BN(0))) {
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
        new BN(0),
        1 /* QuoteToBase */,
        new BN(configData.poolFees.baseFee.secondFactor.toString()),
        new BN(configData.poolFees.baseFee.thirdFactor.toString()),
        new BN(configData.poolFees.baseFee.firstFactor.toString())
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
        new BN(poolData.activationPoint.toString()),
        swapBaseForQuote ? 0 /* BaseToQuote */ : 1 /* QuoteToBase */,
        new BN(configData.poolFees.baseFee.secondFactor.toString()),
        new BN(configData.poolFees.baseFee.thirdFactor.toString()),
        new BN(configData.poolFees.baseFee.firstFactor.toString())
      );
    }
    return false;
  }
  async getCurrentPoint(activationType) {
    if (activationType === 0 /* Slot */) {
      const slot = await this.rpc.getSlot().send();
      return new BN(slot.toString());
    } else {
      const slot = await this.rpc.getSlot().send();
      const blockTime = await this.rpc.getBlockTime(slot).send();
      return new BN((blockTime ?? 0).toString());
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
  const accounts = [...instruction.accounts ?? []];
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
    const rpc = createSolanaRpc(rpcUrl);
    return new _DynamicBondingCurveKitClient(rpc);
  }
  static fromRpc(rpc) {
    return new _DynamicBondingCurveKitClient(rpc);
  }
};

export {
  DynamicBondingCurveKitStateService,
  DynamicBondingCurveKitClient
};
//# sourceMappingURL=chunk-5ND2GVCF.js.map