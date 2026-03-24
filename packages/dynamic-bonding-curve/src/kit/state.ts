import { type Address, type Rpc, type SolanaRpcApi } from '@solana/kit'
import {
    fetchVirtualPool,
    fetchMaybeVirtualPool,
    fetchPoolConfig,
    fetchMaybePoolConfig,
    type VirtualPool,
    type PoolConfig,
} from '../generated/accounts'
import type { Account, MaybeAccount } from '@solana/kit'

type KitRpc = Rpc<SolanaRpcApi>

export class DynamicBondingCurveKitStateService {
    constructor(private readonly rpc: KitRpc) {}

    async getPool<TAddress extends string = string>(
        poolAddress: Address<TAddress>
    ): Promise<Account<VirtualPool, TAddress>> {
        return fetchVirtualPool(this.rpc, poolAddress)
    }

    async getMaybePool<TAddress extends string = string>(
        poolAddress: Address<TAddress>
    ): Promise<MaybeAccount<VirtualPool, TAddress>> {
        return fetchMaybeVirtualPool(this.rpc, poolAddress)
    }

    async getPoolConfig<TAddress extends string = string>(
        configAddress: Address<TAddress>
    ): Promise<Account<PoolConfig, TAddress>> {
        return fetchPoolConfig(this.rpc, configAddress)
    }

    async getMaybePoolConfig<TAddress extends string = string>(
        configAddress: Address<TAddress>
    ): Promise<MaybeAccount<PoolConfig, TAddress>> {
        return fetchMaybePoolConfig(this.rpc, configAddress)
    }
}
