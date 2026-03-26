import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const packageDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(packageDir, 'dist')
const kitDistDir = path.join(distDir, 'kit')
const entrypoints = [
    path.join(kitDistDir, 'index.js'),
    path.join(kitDistDir, 'index.cjs'),
    path.join(kitDistDir, 'index.d.ts'),
]
const blockedSpecifiers = ['@solana/web3.js', '@solana/compat']

const visited = new Set()

async function walkRuntimeGraph(filePath) {
    const normalizedPath = path.normalize(resolveLocalImport(filePath, filePath))
    if (visited.has(normalizedPath)) {
        return
    }

    assertInsideKitDist(normalizedPath)
    visited.add(normalizedPath)

    const source = await readFile(normalizedPath, 'utf8')
    const specifiers = new Set([
        ...source.matchAll(/\bfrom\s+['"]([^'"]+)['"]/g),
        ...source.matchAll(/\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g),
        ...source.matchAll(/\brequire\(\s*['"]([^'"]+)['"]\s*\)/g),
    ])

    for (const match of specifiers) {
        const specifier = match[1]
        if (blockedSpecifiers.includes(specifier)) {
            throw new Error(
                `Blocked dependency "${specifier}" found in ${path.relative(
                    packageDir,
                    normalizedPath
                )}`
            )
        }

        if (!specifier.startsWith('.')) {
            continue
        }

        await walkRuntimeGraph(
            path.resolve(path.dirname(normalizedPath), specifier)
        )
    }
}

function assertInsideKitDist(filePath) {
    const normalizedKitDistDir = path.normalize(kitDistDir)
    if (
        filePath !== normalizedKitDistDir &&
        !filePath.startsWith(`${normalizedKitDistDir}${path.sep}`)
    ) {
        throw new Error(
            `Kit entrypoint graph escaped dist/kit via ${path.relative(
                packageDir,
                filePath
            )}`
        )
    }
}

function resolveLocalImport(filePath, importerPath) {
    if (path.extname(filePath) && existsSync(filePath)) {
        return filePath
    }

    const extensions = getPreferredExtensions(importerPath)

    for (const extension of extensions) {
        const candidate = `${filePath}${extension}`
        if (existsSync(candidate)) {
            return candidate
        }
    }

    for (const extension of extensions) {
        const candidate = path.join(filePath, `index${extension}`)
        if (existsSync(candidate)) {
            return candidate
        }
    }

    return filePath
}

function getPreferredExtensions(importerPath) {
    if (importerPath.endsWith('.d.ts')) {
        return ['.d.ts', '.js', '.cjs', '.mjs']
    }

    if (importerPath.endsWith('.cjs')) {
        return ['.cjs', '.js', '.mjs', '.d.ts']
    }

    return ['.js', '.mjs', '.cjs', '.d.ts']
}

for (const entrypoint of entrypoints) {
    await walkRuntimeGraph(entrypoint)
}

const kitModule = await import('@meteora-ag/dynamic-bonding-curve-sdk/kit')
if (typeof kitModule.DynamicBondingCurveKitClient?.fromRpcUrl !== 'function') {
    throw new Error('Expected ./kit to export DynamicBondingCurveKitClient.fromRpcUrl')
}

if (typeof kitModule.DynamicBondingCurveKitClient?.fromRpc !== 'function') {
    throw new Error('Expected ./kit to export DynamicBondingCurveKitClient.fromRpc')
}

if ('fromLegacyClient' in kitModule.DynamicBondingCurveKitClient) {
    throw new Error('The zero-web3 ./kit entrypoint must not expose fromLegacyClient')
}

if (kitModule.SwapMode?.ExactIn !== 0) {
    throw new Error('Expected ./kit to export SwapMode')
}
