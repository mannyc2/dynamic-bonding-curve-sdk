import { Connection } from '@solana/web3.js'
import { describe, expect, test } from 'vitest'
import {
    DynamicBondingCurveClient,
    DynamicBondingCurveKitClient,
} from '../src'
import { LOCALNET_RPC_URL } from './utils/common'

describe('Root Kit compatibility surface', () => {
    test('root export preserves mixed-mode constructors', () => {
        const connection = new Connection(LOCALNET_RPC_URL, 'confirmed')
        const legacyClient = DynamicBondingCurveClient.create(
            connection,
            'confirmed'
        )

        const rootClient = DynamicBondingCurveKitClient.fromRpcUrl(
            LOCALNET_RPC_URL,
            'confirmed'
        )
        const legacyBridgeClient = DynamicBondingCurveKitClient.fromLegacyClient(
            legacyClient,
            LOCALNET_RPC_URL
        )

        expect(rootClient.pool).toBeDefined()
        expect(rootClient.partner).toBeDefined()
        expect(legacyBridgeClient.pool).toBeDefined()
        expect(legacyBridgeClient.migration).toBeDefined()
    })
})
