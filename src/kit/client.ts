import { createSolanaRpc, type Rpc, type SolanaRpcApi } from '@solana/kit'
import {
    DynamicBondingCurveKitCreatorService,
    DynamicBondingCurveKitMigrationService,
    DynamicBondingCurveKitPartnerService,
    DynamicBondingCurveKitPoolService,
    DynamicBondingCurveKitStateService,
} from './services'
import type {
    DynamicBondingCurveKitCreatorClient,
    DynamicBondingCurveKitMigrationClient,
    DynamicBondingCurveKitPartnerClient,
    DynamicBondingCurveKitPoolClient,
} from './types'

export class DynamicBondingCurveKitClient {
    public readonly pool: DynamicBondingCurveKitPoolClient
    public readonly partner: DynamicBondingCurveKitPartnerClient
    public readonly creator: DynamicBondingCurveKitCreatorClient
    public readonly migration: DynamicBondingCurveKitMigrationClient
    public readonly state: DynamicBondingCurveKitStateService

    private constructor(rpc: Rpc<SolanaRpcApi>) {
        this.pool = new DynamicBondingCurveKitPoolService(rpc)
        this.partner = new DynamicBondingCurveKitPartnerService(rpc)
        this.creator = new DynamicBondingCurveKitCreatorService(rpc)
        this.migration = new DynamicBondingCurveKitMigrationService(rpc)
        this.state = new DynamicBondingCurveKitStateService(rpc)
    }

    static fromRpcUrl(rpcUrl: string): DynamicBondingCurveKitClient {
        const rpc = createSolanaRpc(rpcUrl)
        return new DynamicBondingCurveKitClient(rpc)
    }

    static fromRpc(rpc: Rpc<SolanaRpcApi>): DynamicBondingCurveKitClient {
        return new DynamicBondingCurveKitClient(rpc)
    }
}
