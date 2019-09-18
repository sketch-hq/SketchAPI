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
const semver = require('semver')

const dir = resolve(__dirname, '../reference-files')
const pages = resolve(__dirname, '../docs/pages')
const pluginPath = resolve(dir, './plugin.sketchplugin')
const manifest = require(resolve(pluginPath, 'Contents/Sketch/manifest.json'))
const githubUrl = require('../package').homepage

const refFilesUrl = `${githubUrl}/tree/develop/reference-files`

// Sort versions in descending order. They need to be coerced into valid semver
// to do this. Also generate a truncated version for display (trim rightmost
// parts that are zero).
const versions = readdirSync(dir)
  .map(v => ({ original: v, coerced: semver.coerce(v) }))
  .filter(v => !!v.coerced)
  .sort((a, b) => semver.compare(b.coerced.version, a.coerced.version))
  .map(v => {
    const truncated = v.original.split('.')
    while (truncated.slice(-1)[0] === '0') {
      truncated.pop()
    }
    return {
      ...v,
      truncated: truncated.join('.'),
    }
  })

manifest.commands.forEach((cmd, index) => {
  const md = `---
title: ${cmd.name}
section: file-format
chapter: Reference files
permalink: /file-format/reference/${cmd.identifier}

order: 1${String(index + 2).padStart(2, 0)}
excerpt: ${cmd.description}
---

${cmd.description}

> Use the table below to access pretty printed JSON illustrating the feature, as well as the Sketch file itself and the plugin source used to generate the file from scratch.

${table([
  ['Sketch version', '', '', ''],
  ...versions.map(v => {
    return [
      `${v.truncated}`,
      `[JSON](${refFilesUrl}/${v.original}/${cmd.identifier}/output)`,
      `[.sketch](${refFilesUrl}/${v.original}/${cmd.identifier}/output.sketch)`,
      `[Generator plugin](${refFilesUrl}/plugin.sketchplugin/Contents/Sketch/${cmd.identifier}.js)`,
    ]
  }),
])}`

  const mdPath = resolve(pages, `file-format-reference-${cmd.identifier}.md`)

  writeFileSync(mdPath, md, 'utf8')
  execSync(`npm run prettier:base -- "${mdPath}"`, { encoding: 'utf8' })
})
