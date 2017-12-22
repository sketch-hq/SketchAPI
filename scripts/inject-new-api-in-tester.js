/*
 * `skpm-test` uses `sketch-api` to generate a new Document.
 * This is unfortunate since we are the one providing Document.
 * So we need to replace `require('sketch-api')` by `require(./Source)`
 */
const fs = require('fs')
const path = require('path')

const templatePath = path.join(
  __dirname,
  '../node_modules/@skpm/test-runner/test-runner.sketchplugin/Contents/Sketch/tests-template.js'
)

const indexJS = fs
  .readFileSync(templatePath, 'utf8')
  .replace(
    "Document = require('sketch-api')",
    `Document = require('${path.join(__dirname, '../Source/')}')`
  )

fs.writeFileSync(templatePath, indexJS, 'utf8')
