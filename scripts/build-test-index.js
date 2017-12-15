#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const gitignore = fs
  .readFileSync(path.join(__dirname, '../.gitignore'), 'utf8')
  .split('\n')
  .filter(l => l)
  .concat(['.git'])

// https://facebook.github.io/jest/docs/en/configuration.html#testregex-string
const TEST_REGEX = new RegExp('(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$')

function findAllTestFiles(inputDir, dir) {
  const files = fs.readdirSync(dir)
  return files.reduce((prev, file) => {
    const fullPath = path.join(dir, file)
    const relativePath = fullPath.split(inputDir)[1]
    if (gitignore.some(ignoredPath => fullPath.match(ignoredPath))) {
      return prev
    }
    if (fs.statSync(fullPath).isDirectory()) {
      return prev.concat(findAllTestFiles(inputDir, fullPath))
    } else if (TEST_REGEX.test(relativePath)) {
      let name = file.split('/')
      name = name[name.length - 1]
      name = name.replace('.js', '').replace('.test', '')
      prev.push({
        name,
        path: fullPath,
      })
    }
    return prev
  }, [])
}

const testFiles = findAllTestFiles(
  path.join(__dirname, '../'),
  path.join(__dirname, '../')
)

const indexJS = fs
  .readFileSync(path.join(__dirname, '../test-utils/index.js'), 'utf8')
  .replace(
    '/* {{IMPORTS}} */',
    testFiles.reduce(
      (prev, file) => `${prev}
try {
  testSuites.suites[${JSON.stringify(file.name)}] = require('${file.path}')
} catch (err) {
  testResults.push({
    name: 'loading the test suite',
    type: 'failed',
    suite: ${JSON.stringify(file.name)},
    reason: {
      message: err.message,
      name: err.name,
      stack: prepareStackTrace(err.stack),
    },
  })
}
`,
      ''
    )
  )

fs.writeFileSync(
  path.join(__dirname, '../test-utils/generated-index.js'),
  `/* ⛔⚠️ THIS IS A GENERATED FILE. DO NOT MODIFY THIS ⛔⚠️ */\n\n${indexJS}`,
  'utf8'
)
