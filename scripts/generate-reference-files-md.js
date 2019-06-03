/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-dynamic-require */

/**
 * Generate markdown for reference Sketch files. The contents of the
 * reference-files/{sketchVersion} folders and the plugin's manifest.json file
 * are taken as the source of truth.
 */

const { resolve } = require('path')
const { readdirSync } = require('fs')
const table = require('markdown-table')
const { writeFileSync } = require('fs')
const { execSync } = require('child_process')

const dir = resolve(__dirname, '../reference-files')
const pages = resolve(__dirname, '../docs/pages')
const pluginPath = resolve(dir, './plugin.sketchplugin')
const manifest = require(resolve(pluginPath, 'Contents/Sketch/manifest.json'))
const repoPath =
  'https://github.com/BohemianCoding/SketchAPI/tree/develop/reference-files'

const versions = readdirSync(dir).filter(name => !isNaN(name))

manifest.commands.forEach(cmd => {
  const md = `---
title: ${cmd.identifier.charAt(0).toUpperCase() + cmd.identifier.slice(1)} file
section: file-format
chapter: Reference files
permalink: /file-format/reference/${cmd.identifier}

order: 201
excerpt: ${cmd.description}
---

${cmd.description}

Use the table below to access pretty printed JSON illustrating the feature, as well as the Sketch file itself and the plugin source used to generate the file from scratch.

${table([
  ['Sketch version', '', '', ''],
  ...versions.map(version => {
    return [
      `Sketch ${version}`,
      `[JSON](${repoPath}/${version}/${cmd.identifier}/output)`,
      `[.sketch](${repoPath}/${version}/${cmd.identifier}/output.sketch)`,
      `[Generator plugin](${repoPath}/plugin.sketchplugin/Contents/Sketch/${
        cmd.identifier
      }.js)`,
    ]
  }),
])}`

  const mdPath = resolve(pages, `file-format-reference-${cmd.identifier}.md`)

  writeFileSync(mdPath, md, 'utf8')
  execSync(`npm run prettier -- --write "${mdPath}"`, { encoding: 'utf8' })
})
