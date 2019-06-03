/* eslint-disable import/no-dynamic-require, no-console */

/**
 * Generate reference Sketch files and pretty printed JSON contents.
 * Output is generated into:
 *
 *   reference-files/{sketchVersion}/output
 *   reference-files/{sketchVersion}/output.sketch
 *
 * Usage
 *
 *   To generate just the 'empty' reference file for Sketch 55:
 *     npm run docs:generate-reference-files -- 55 empty
 *
 *   To generate all reference files:
 *     npm run docs:generate-reference-files -- 55 '*'
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

const sketchVersion = process.argv[2] || '55'
const identifier = process.argv[3] || '*'
const outputDir = resolve(__dirname, `../reference-files/${sketchVersion}`)
const pluginPath = resolve(__dirname, `../reference-files/plugin.sketchplugin`)

const manifest = require(resolve(pluginPath, 'Contents/Sketch/manifest.json'))
const commands = manifest.commands.filter(
  cmd => identifier === '*' || cmd.identifier === identifier
)

const exec = cmd => {
  try {
    console.log(execSync(cmd, { encoding: 'utf8' }))
  } catch (err) {
    console.error(err)
  }
}

console.log('Generating reference files...')
console.log(`  Sketch version: ${sketchVersion}`)
console.log(`  Commands: ${commands.map(cmd => cmd.identifier).join(',')}`)

commands.forEach(cmd => {
  const currDir = resolve(outputDir, cmd.identifier)
  const savePath = resolve(currDir, 'output')
  del.sync(`${currDir}/**`)
  exec(`mkdir -p ${currDir}`)
  exec(
    `sketchtool run ${pluginPath} ${
      cmd.identifier
    } --context='{"savePath": "${savePath}.sketch"}'`
  )
  exec(`unzip ${savePath}.sketch -d ${savePath}`)
  exec(`npm run prettier -- --write "${savePath}/**/*.json"`)
})
