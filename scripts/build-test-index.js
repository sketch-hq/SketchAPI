#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const gitignore = fs
  .readFileSync(path.join(__dirname, '../.gitignore'), 'utf8')
  .split('\n')
  .filter(l => l)

// https://facebook.github.io/jest/docs/en/configuration.html#testregex-string
const TEST_REGEX = new RegExp('(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$')

function findAllTestFiles(dir) {
  const files = fs.readdirSync(dir)
  return files.reduce((prev, file) => {
    const fullPath = path.join(dir, file)
    if (gitignore.some(ignoredPath => fullPath.match(ignoredPath))) {
      return prev
    }
    if (fs.statSync(fullPath).isDirectory()) {
      return prev.concat(findAllTestFiles(fullPath))
    } else if (TEST_REGEX.test(fullPath)) {
      prev.push(fullPath)
    }
    return prev
  }, [])
}

const testFiles = findAllTestFiles(path.join(__dirname, '../')).map(fullPath =>
  fullPath.replace(path.join(__dirname, '../'), '../')
)

const indexJS = fs
  .readFileSync(path.join(__dirname, '../test-utils/index.js'), 'utf8')
  .replace(
    '/*{{IMPORTS}}*/',
    testFiles.reduce((prev, file) => {
      let name = file.split('/')
      name = name[name.length - 1]
      name = name.replace('.js', '').replace('.test', '')
      return `${prev}    ${name}: require('${file}'),\n`
    }, '\n')
  )

fs.writeFileSync(
  path.join(__dirname, '../test-utils/generated-index.js'),
  `/* ⛔⚠️ THIS IS A GENERATED FILE. DO NOT MODIFY THIS ⛔⚠️ */\n\n${indexJS}`,
  'utf8'
)
