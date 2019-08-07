/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-dynamic-require, no-console */

/**
 * Generate reference Sketch files and pretty printed JSON contents.
 * Output is generated into:
 *
 *   reference-files/{sketchVersion}/plugin.sketchplugin        // Plugin used for generation
 *   reference-files/{sketchVersion}/files/{type}/output        // Sketch document as JSON
 *   reference-files/{sketchVersion}/files/{type}/output.sketch // Generated Sketch document
 *
 * Usage
 *
 *   To generate just the 'empty' reference file:
 *     npm run docs:generate-reference-files -- empty
 *
 *   To generate all reference files:
 *     npm run docs:generate-reference-files -- '*'
 *
 * Note
 *
 *   This script expects a working version of sketchtool to be in the path
 *   and pointing at the right Sketch version. No Sketch version checking is
 *   performed.
 */

const { execSync } = require('child_process')
const del = require('del')
const { resolve } = require('path')

let sketchVersion

try {
  const [, , ver] = execSync(`sketchtool --version`, {
    encoding: 'utf8',
  }).split(' ')
  if (isNaN(ver)) throw Error("Couldn't parse valid Sketch version")
  sketchVersion = ver
} catch (err) {
  console.error(err)
  process.exit(1)
}

const exec = cmd => {
  try {
    console.log(execSync(cmd, { encoding: 'utf8' }))
  } catch (err) {
    console.error(err)
  }
}

const identifier = process.argv[2] || '*'
const outputDir = resolve(__dirname, `../reference-files/${sketchVersion}`)
const masterPluginPath = resolve(
  __dirname,
  `../reference-files/plugin.sketchplugin`
)
const pluginPath = `${outputDir}/plugin-${sketchVersion}.sketchplugin`

exec(`mkdir -p ${outputDir}`)
exec(`cp -R ${masterPluginPath}/. ${pluginPath}`)

const manifest = require(resolve(pluginPath, 'Contents/Sketch/manifest.json'))
const commands = manifest.commands.filter(
  cmd => identifier === '*' || cmd.identifier === identifier
)

console.log('Generating reference files...')
console.log(`  Sketch version: ${sketchVersion}`)
console.log(`  Commands: ${commands.map(cmd => cmd.identifier).join(',')}`)

commands.forEach(cmd => {
  const dir = resolve(outputDir, 'files', cmd.identifier)
  del.sync(`${dir}/**`)
  exec(`mkdir -p ${dir}`)
  exec(
    `sketchtool run ${pluginPath} ${
      cmd.identifier
    } --context='{"savePath": "${dir}"}'`
  )
  exec(`unzip ${dir}/output.sketch -d ${dir}/output`)
  exec(`npm run prettier:base -- "${dir}/output/**/*.json"`)
})
