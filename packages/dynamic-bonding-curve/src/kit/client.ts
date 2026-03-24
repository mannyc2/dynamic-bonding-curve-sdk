import { type Commitment, Connection } from '@solana/web3.js'
import { createSolanaRpc, type Rpc, type SolanaRpcApi } from '@solana/kit'
import { DynamicBondingCurveClient } from '../client'
import { DynamicBondingCurveKitCreatorService } from './creator'
import { DynamicBondingCurveKitMigrationService } from './migration'
import { DynamicBondingCurveKitPartnerService } from './partner'
import { DynamicBondingCurveKitPoolService } from './pool'
import { DynamicBondingCurveKitStateService } from './state'
import type {
    DynamicBondingCurveKitCreatorClient,
    DynamicBondingCurveKitMigrationClient,
    DynamicBondingCurveKitPartnerClient,
    DynamicBondingCurveKitPoolClient,
} from './types'

type DynamicBondingCurveLegacyTransactionClient = Pick<
    DynamicBondingCurveClient,
    'pool' | 'partner' | 'creator' | 'migration'
>

export class DynamicBondingCurveKitClient {
    public readonly pool: DynamicBondingCurveKitPoolClient
    public readonly partner: DynamicBondingCurveKitPartnerClient
    public readonly creator: DynamicBondingCurveKitCreatorClient
    public readonly migration: DynamicBondingCurveKitMigrationClient
    public readonly state: DynamicBondingCurveKitStateService

    private constructor(
        legacyClient: DynamicBondingCurveLegacyTransactionClient,
        rpc: Rpc<SolanaRpcApi>
    ) {
        this.pool = new DynamicBondingCurveKitPoolService(legacyClient.pool)
        this.partner = new DynamicBondingCurveKitPartnerService(
            legacyClient.partner
        )
        this.creator = new DynamicBondingCurveKitCreatorService(
            legacyClient.creator
        )
        this.migration = new DynamicBondingCurveKitMigrationService(
            legacyClient.migration
        )
        this.state = new DynamicBondingCurveKitStateService(rpc)
    }

    static fromLegacyClient(
        legacyClient: DynamicBondingCurveLegacyTransactionClient,
        rpcUrl: string
    ): DynamicBondingCurveKitClient {
        const rpc = createSolanaRpc(rpcUrl)
        return new DynamicBondingCurveKitClient(legacyClient, rpc)
    }

    static fromRpcUrl(
        rpcUrl: string,
        commitment: Commitment = 'confirmed'
    ): DynamicBondingCurveKitClient {
        const legacyClient = DynamicBondingCurveClient.create(
            new Connection(rpcUrl, commitment),
            commitment
        )
        const rpc = createSolanaRpc(rpcUrl)

        return new DynamicBondingCurveKitClient(legacyClient, rpc)
    }
}
