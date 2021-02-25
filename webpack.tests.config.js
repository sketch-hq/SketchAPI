const fs = require('fs')
const path = require('path')
const globby = require('globby')

const { ProvidePlugin } = require('webpack')
const VirtualModulesPlugin = require('webpack-virtual-modules')
const CopyPlugin = require('copy-webpack-plugin')

const TestGlobalsPlugin = require('./Source/test/globals')

// All core modules are made available within the Sketch runtime environment
// without using the `@skpm/` organisation namespace.
const coreModules = Object.keys(
  require('./core-modules/package.json').dependencies
).map((name) => name.replace(/^@skpm\/(.+)/, '$1'))

/**
 * Walks a directory and returns a generator for all files within the
 * directory and all included subdirectories.
 *
 * @param {string} dir A path to a directory to be read recursively.
 */
function* walk(dir) {
  const d = fs.opendirSync(dir)
  var f = d.readSync()
  while (f) {
    const entry = path.join(dir, f.name)
    if (f.isDirectory()) yield* walk(entry)
    else if (f.isFile()) yield entry

    f = d.readSync()
  }
  d.closeSync()
}

/**
 * Converts package.json into a plugin manifest.
 *
 * @param {Object} pkg A parsed package.json object.
 * @param {Object} identifier A unique identifier for the plugin.
 */
function manifest(pkg, identifier) {
  return JSON.stringify({
    commands: [
      {
        name: 'Test Sketch API',
        identifier: 'test',
        script: 'tests.js',
        scope: 'application',
        handlers: {
          run: 'tests',
          actions: {
            HandleURL: 'tests',
          },
        },
      },
    ],
    version: pkg.version,
    name: `Sketch API Integration Tests (${identifier})`,
    identifier: `com.sketch.plugin.integration-tests.${identifier}`,
    disableCocoaScriptPreprocessor: true,
  })
}

/**
 * Scan a given directory searching for the given test file.
 *
 * @param {string} dir A path to a directory containing test files.
 * @param {string} fileName The spec file name.
 */
function searchTestFile(dir, fileName) {
  const isIgnored = globby.gitignore.sync()
  const isTest = /(.*\/)*__tests__\/(.*)\.test\.js/i

  let testFiles = []
  for (const p of walk(dir)) {
    if (isIgnored(p)) continue
    if (!isTest.test(p)) continue
    if (!new RegExp(fileName).test(p)) continue

    testFiles.push({ name: p.replace(isTest, '$2'), path: p })
  }

  if (!testFiles) throw `Test file "${fileName}" not found.`

  console.log('Test files:')
  testFiles.forEach(({ path }, index) => {
    console.log(
      `- ${path.split(/SketchAPI/)[1]} ${
        index === testFiles.length - 1 && '\n'
      }`
    )
  })

  return testFiles
}

/**
 * Scans a given directory and returns a `Promise` that resolves with
 * a list of test suites containing name and path for each entry.
 *
 * @param {string} dir A path to a directory containing test files.
 */
function testSuites(dir) {
  const isIgnored = globby.gitignore.sync()
  const isTest = /(.*\/)*__tests__\/(.*)\.test\.js/i

  let all = []
  for (const p of walk(dir)) {
    if (isIgnored(p)) continue
    if (!isTest.test(p)) continue

    all.push({ name: p.replace(isTest, '$2'), path: p })
  }

  return all
}

const findTestSuites = (spec) => {
  return spec ? searchTestFile(process.cwd(), spec) : testSuites(process.cwd())
}

/**
 * Generate the source code of the entry script to import and run all
 * provided test suites.
 *
 * @param {Object[]} tests An array of test suites to run.
 */
function source(tests, output) {
  // The test suites are build up by `test` function within unit tests
  // and have the following structure:
  //
  // {
  //   tests: [Getter],
  //   logs: [Getter],
  //   afterAlls: [Getter],
  //   beforeAlls: [Getter],
  //   afterEachs: [Getter],
  //   beforeEachs: [Getter]
  // }
  const reducer = (name) => {
    return (prev, curr) =>
      `${prev}\n${name}['${curr.name}'] = {
        source: require('${curr.path}'),
        path: '${curr.path}'
      }`
  }

  const runner = ({
    context,
    suites,
    createNewDocument,
    expect,
    onProgress,
    prepareStackTrace,
  }) => {
    function getTestFailure(err) {
      let testFailure
      if (err instanceof Error) {
        testFailure = {
          message: err.message,
          name: err.name,
          stack: prepareStackTrace(err.stack || ''),
        }
        if (err.actual) {
          testFailure.actual = err.actual
          testFailure.expected = err.expected
          testFailure.operator = err.operator
        }
        if (err.nativeException) {
          testFailure.message += ' '
          testFailure.message += String(err.nativeException.reason())
        }
      } else if (err.reason && err.name) {
        testFailure = {
          message: String(err.reason()),
          name: String(err.name()),
        }
      } else {
        testFailure = err
      }
      return testFailure
    }

    // Runs all test suites
    const numSuites = Object.entries(suites).length
    let all = []
    Object.entries(suites).forEach(([suiteTitle, val], index) => {
      let res = Object.entries(val.source.tests).map(([title, test]) => {
        const document = createNewDocument()

        let status = 'pending'
        let failureReason

        try {
          expect.resetAssertionsLocalState()

          // All tests are givent he plugin command context and a new
          // document.
          //
          // TODO: check if the document needs to be closed, what happens
          // with unsaved changes, etc. or if it would be better to have
          // unit tests handle document creation and closing.
          test(context, document)
          status = 'passed'
        } catch (err) {
          status = 'failed'
          failureReason = getTestFailure(err)
        }

        try {
          document.close()
        } catch (err) {
          console.log(`Failed to close document: ${err}`)
        }

        return {
          ancestorTitles: [suiteTitle], // we don't have nested test suites in the API but sticking to Jest types anyway.
          fullName: `${suiteTitle} ${title}`,
          status,
          title,
          relativePath: `.${val.path.split(/SketchAPI/)[1]}`,
          failureReason,
        }
      })

      all = all.concat(res)

      if (!onProgress) return

      // When only one suite return "1", otherwhise progress will always be "0"
      const progress = numSuites === 1 ? 1 : index / (numSuites - 1)
      onProgress(progress)
    })

    return all
  }

  return `
  var testSuites = {}
  ${tests.reduce(reducer('testSuites'), '')}

  // Returns file attributes with extended file attributes containing the
  // progress information.
  const attributes = (fractionCompleted) => {
    const data = NSString.alloc()
                  .initWithString(String(fractionCompleted))
                  .dataUsingEncoding(NSASCIIStringEncoding)
    return {
      'NSFileExtendedAttributes': {
        'com.apple.progress.fractionCompleted': data
      }
    }
  }

  export default function(context) {
    const path = require('path')
    const os = require('os')
    const sketch = require('sketch')
    const prepareStackTrace = require('sketch-utils/prepare-stack-trace')

    const fileManager = NSFileManager.defaultManager()
    const out = '${path.resolve(output)}'

    // Create the results file and write extended file attributes with zero
    // progress information
    fileManager.createFileAtPath_contents_attributes(
      out,
      nil,
      attributes(0),
    )

    const runner = ${runner.toString()}
    const result = runner({ 
      context,
      expect,
      suites: testSuites,
      createNewDocument: () => { return sketch.fromNative(MSDocumentData.new()) },
      onProgress: (fraction) => { // update the extended file attributes
        fileManager.setAttributes_ofItemAtPath_error(
          attributes(fraction),
          out,
          nil,
        )
      },
      prepareStackTrace
    })

    const data = NSString.alloc().initWithString(JSON.stringify(result, null, 2))
    const err = MOPointer.alloc().init()

    data.writeToFile_atomically_encoding_error(
      out,
      false,
      NSUTF8StringEncoding,
      err
    )

    console.log('✅ Test results saved to: ' + out)
    sketch.UI.message('✅ Test results saved to disk.')
  }
  `
}

const { NODE_ENV } = process.env

/**
 * Creates webpack configuration
 */
let src = (output, spec) => source(findTestSuites(spec), output)

module.exports = ({ identifier, output, spec }) => {
  // To allow multiple instances of Sketch to run API tests concurrently
  // the plugin must use a unique name and plugin identifier.
  //
  // The `identifier` and `output` parameters are passed in from the
  // command-line.
  //
  // The plugin itself is written to the build artefacts and can be used
  // from there by copying into:
  //
  //   ~/Library/Application Support/com.bohemiancoding.sketch3/Plugins
  //
  // or by creating a symbolic link.
  let pluginName = `SketchIntegrationTests-${identifier}.sketchplugin`
  let plugin = path.join(__dirname, 'build', pluginName, 'Contents/Sketch')

  return {
    mode: NODE_ENV || 'development',
    target: 'node',
    output: {
      filename: '[name].js',
      path: plugin,
      libraryTarget: 'var',
      libraryExport: 'default',
      library: 'tests',
    },
    entry: {
      tests: './tests.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [TestGlobalsPlugin],
            },
          },
        },
      ],
    },
    externals: [
      // Don't resolve modules that are available at runtime within the Sketch
      // environment.
      (ctx, req, callback) => {
        // Sketch JavaScript API, e.g. `sketch`, `sketch/dom`, or core module
        // included with the Sketch application bundle.
        if (/^sketch($|\/.+)/.test(req) || coreModules.includes(req)) {
          return callback(null, `commonjs ${req}`)
        }

        // Sketch API source imported using relative paths must point at the
        // `sketch` module bundled with the application, with the exception of
        // the test package containing the babel plugin and the test utils used
        // by the unit tests.
        const isRelative = /^\.{1,2}/
        const isSource = /^\Source\/(?!test\/|test-utils)(.+)/
        const res = path.join(ctx, req) // fully resolved path
        const rel = path.relative(__dirname, res)
        if (isRelative.test(req) && isSource.test(rel)) {
          return callback(null, rel.replace(isSource, 'sketch/$1'), `commonjs`)
        }

        return callback()
      },
    ],
    plugins: [
      // All __tests__/*.test.js files are gathered and bundled as a single plugin.
      new VirtualModulesPlugin({
        './tests.js': src(output, spec),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: './package.json',
            to: `${plugin}/manifest.json`,
            transform(content) {
              const pkg = JSON.parse(content.toString())
              return manifest(pkg, identifier)
            },
          },
        ],
      }),
      // Unit tests make use of `expect` but don't explicitely import it. Provide
      // it by default instead.
      new ProvidePlugin({
        expect: require.resolve('./Source/test/expect'),
      }),
    ],
  }
}
