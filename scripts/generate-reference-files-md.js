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
const githubUrl = require('../package').homepage

const refFilesUrl = `${githubUrl}/tree/develop/reference-files`

const versions = readdirSync(dir).filter(name => !isNaN(name))

manifest.commands.forEach((cmd, index) => {
  const md = `---
title: ${cmd.name}
section: file-format
chapter: Reference files
permalink: /file-format/reference/${cmd.identifier}

order: ${index + 2}01
excerpt: ${cmd.description}
---

${cmd.description}

> Use the table below to access pretty printed JSON illustrating the feature, as well as the Sketch file itself and the plugin source used to generate the file from scratch.

${table([
  ['Sketch version', '', '', ''],
  ...versions.map(version => {
    return [
      `Sketch ${version}`,
      `[JSON](${refFilesUrl}/${version}/${cmd.identifier}/output)`,
      `[.sketch](${refFilesUrl}/${version}/${cmd.identifier}/output.sketch)`,
      `[Generator plugin](${refFilesUrl}/plugin.sketchplugin/Contents/Sketch/${
        cmd.identifier
      }.js)`,
    ]
  }),
])}`

  const mdPath = resolve(pages, `file-format-reference-${cmd.identifier}.md`)

  writeFileSync(mdPath, md, 'utf8')
  execSync(`npm run prettier:base -- "${mdPath}"`, { encoding: 'utf8' })
})
