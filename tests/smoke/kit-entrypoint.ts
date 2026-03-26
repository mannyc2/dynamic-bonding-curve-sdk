import { createSolanaRpc } from '@solana/kit'
import {
    DynamicBondingCurveKitClient,
    SwapMode,
    type KitTransactionPlan,
} from '@meteora-ag/dynamic-bonding-curve-sdk/kit'

const rpc = createSolanaRpc('http://127.0.0.1:8899')
const client = DynamicBondingCurveKitClient.fromRpc(rpc)
const swapMode: SwapMode = SwapMode.ExactIn
const plan = null as unknown as KitTransactionPlan

export { client, plan, swapMode }
