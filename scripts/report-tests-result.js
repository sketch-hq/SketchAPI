#!/usr/bin/env node

/* eslint-disable prefer-template, no-console */

// get the stdin
const stdin = process.openStdin()
let data = ''

const JSON_RESULT_REGEX = /^json results: (.*)$/g
function reportData() {
  const lines = data.split('\n')

  const raw = lines.find(l => JSON_RESULT_REGEX.test(l))
  if (!raw) {
    console.log("Error: couldn't find the test results")
    return
  }
  const json = JSON.parse(raw.replace('json results: ', ''))

  const colors = require('./console-colors') // eslint-disable-line

  let suites = []

  json.forEach(test => {
    if (!test.suite) {
      test.suite = test.name // eslint-disable-line
    }
    const existingSuite = suites.find(s => s.name === test.suite)
    if (existingSuite) {
      existingSuite.tests.push(test)
      return
    }
    suites.push({
      name: test.suite,
      tests: [test],
    })
  })

  suites.forEach(suite => {
    const failedTests = suite.tests.filter(t => t.type === 'failed')
    suite.failed = failedTests // eslint-disable-line
  })

  suites = suites
    .map(suite => {
      const failedTests = suite.tests.filter(t => t.type === 'failed')
      suite.failed = failedTests // eslint-disable-line
      return suite
    })
    .sort((a, b) => a.failed.length - b.failed.length)

  suites.forEach(suite => {
    if (!suite.failed.length) {
      console.log(
        colors.bgGreen(colors.white(' PASS ')) + ' ' + colors.dim(suite.name)
      )
      return
    }

    console.log('')
    console.log(colors.bgRed(colors.white(' FAIL ')) + ' ' + suite.name)

    suite.failed.forEach(failure => {
      console.log('')
      console.log(colors.red('  ● ' + suite.name + ' › ' + failure.name))
      console.log('')
      console.log(failure.reason)
      console.log('')
    })

    console.log(suite.name)
    suite.tests.forEach(test => {
      console.log(
        (test.type === 'passed' ? colors.green('  ✓') : colors.red('  ✖︎')) +
          ' ' +
          colors.dim(test.name)
      )
    })
  })

  console.log('')
  const passedSuites = suites.filter(s => !s.failed.length).length
  const failedSuites = suites.filter(s => s.failed.length).length
  console.log(
    'Test Suites: ' +
      (passedSuites ? colors.green(passedSuites + ' passed, ') : '') +
      (failedSuites ? colors.red(failedSuites + ' failed, ') : '') +
      suites.length +
      ' total'
  )
  const passedTests = suites.reduce(
    (prev, s) => prev + (s.tests.length - s.failed.length),
    0
  )
  const failedTests = suites.reduce((prev, s) => prev + s.failed.length, 0)
  console.log(
    'Tests: ' +
      (passedTests ? colors.green(passedTests + ' passed, ') : '') +
      (failedTests ? colors.red(failedTests + ' failed, ') : '') +
      (passedTests + failedTests) +
      ' total'
  )
}

stdin.on('data', chunk => {
  data += chunk
})
stdin.on('end', reportData)
