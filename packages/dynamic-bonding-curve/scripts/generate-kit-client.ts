import { createFromRoot } from 'codama'
import { rootNodeFromAnchor } from '@codama/nodes-from-anchor'
import renderVisitor from '@codama/renderers-js'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageRoot = join(__dirname, '..')

const idl = JSON.parse(
    readFileSync(
        join(packageRoot, 'src/idl/dynamic-bonding-curve/idl.json'),
        'utf-8'
    )
)

// Fix IDL name collision: MeteoraDammMigrationMetadata has fields "padding_0"
// (32-byte tombstone) and "_padding_0" (u8) which both normalize to "padding0"
// in camelCase. Rename "_padding_0" to avoid duplicate property names.
for (const type of idl.types ?? []) {
    if (type.name !== 'MeteoraDammMigrationMetadata') continue
    const fields = type.type?.fields ?? []
    const seen = new Set<string>()
    for (const field of fields) {
        const normalized = field.name.replace(/^_+/, '')
        if (seen.has(normalized)) {
            field.name = field.name + '_byte'
        }
        seen.add(normalized)
    }
}

const root = rootNodeFromAnchor(idl)
const codama = createFromRoot(root)

const outputDir = join(packageRoot, 'src/generated')

await codama.accept(
    renderVisitor(outputDir, {
        deleteFolderBeforeRendering: true,
        formatCode: true,
        kitImportStrategy: 'preferRoot',
        generatedFolder: '.',
        syncPackageJson: false,
    })
)

console.log(`Generated Kit client in ${outputDir}`)
