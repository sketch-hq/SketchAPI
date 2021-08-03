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
function source(identifier, tests) {
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
    createDocumentData,
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
    let results = []

    Object.entries(suites).forEach(([suiteTitle, val], index) => {
      const numTests = Object.entries(val.source.tests).length

      Object.entries(val.source.tests).forEach(([title, test], testIndex) => {
        console.log(`Running test: ${suiteTitle} ${title}`)

        let status = 'pending'
        let failureReason

        try {
          expect.resetAssertionsLocalState()

          // All tests are given the plugin command context and a new document data
          // object.
          //
          // Note: This is not a full Document instance wrapping MSDocument. Using
          // MSDocument slows down tests massively, so we rely on the private API
          // creating document data from MSDocumentData.
          test(context, createDocumentData())
          status = 'passed'
        } catch (err) {
          status = 'failed'
          failureReason = getTestFailure(err)
        }

        const fraction =
          index / numSuites + (testIndex + 1) / numTests / numSuites

        results.push({
          ancestorTitles: [suiteTitle], // we don't have nested test suites in the API but sticking to Jest types anyway.
          fullName: `${suiteTitle} ${title}`,
          status,
          title,
          relativePath: `.${val.path.split(/SketchAPI/)[1]}`,
          failureReason,
        })

        if (!onProgress) return

        onProgress({ fraction, results })
      })
    })
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

  // Writes the file contents as UTF8 encoded string and attributes to the file
  // at the given path.
  const writeToFile = ({ path, contents = '', attributes }) => {
    const fileManager = NSFileManager.defaultManager()
    fileManager.setAttributes_ofItemAtPath_error(
      attributes,
      path,
      nil,
    )

    const data = NSString.alloc().initWithString(contents)
    const err = MOPointer.alloc().init()

    data.writeToFile_atomically_encoding_error(
      path,
      false,
      NSUTF8StringEncoding,
      err
    )
  }

  const runner = ${runner.toString()}

  export default function(context) {
    const path = require('path')
    const os = require('os')
    const sketch = require('sketch')

    // Use a default path for the test results if not specified by the user,
    // for instance when running the test plugin from the Sketch app menu.
    const { 
      actionContext: {
        query: {
          output = path.resolve(os.tmpdir(), "SketchIntegrationTests-${identifier}.log")
        }, 
      },
    } = { actionContext: { query: { output: undefined}}, ...context }

    console.log('⏳ Starting tests, writing results to: ' + output)

    // Create the results file and write extended file attributes with zero
    // progress information
    const fileManager = NSFileManager.defaultManager()
    fileManager.createFileAtPath_contents_attributes(
      output,
      nil,
      attributes(0),
    )

    console.log(\`🏇 Running \${Object.keys(testSuites).length} test suites…\`)

    const result = runner({ 
      context,
      expect,
      suites: testSuites,
      createDocumentData: () => { return sketch.fromNative(MSDocumentData.new()) },
      onProgress: ({ fraction, results }) => {
        // Overwrite the file with latest results and update the extended file 
        // attributes. We can't append JSON, so we replace all file contents.
        writeToFile({
          path: output,
          attributes: attributes(fraction),
          contents: JSON.stringify(results, null, 2)
        })
      },
      prepareStackTrace
    })

    const data = NSString.alloc().initWithString(JSON.stringify(result, null, 2))
    const err = MOPointer.alloc().init()

    data.writeToFile_atomically_encoding_error(
      output,
      false,
      NSUTF8StringEncoding,
      err
    )

    console.log('✅ Test results saved to: ' + output)
    sketch.UI.message('✅ Test results saved to disk.')
  }
  `
}

const { NODE_ENV } = process.env

/**
 * Creates webpack configuration
 */
let src = (identifier, spec) => source(identifier, findTestSuites(spec))

module.exports = ({ identifier, spec }) => {
  // To allow multiple instances of Sketch to run API tests concurrently
  // the plugin must use a unique name and plugin identifier.
  //
  // The `identifier` parameter is passed in from the command-line.
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
        './tests.js': src(identifier, spec),
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
        prepareStackTrace: require.resolve('sketch-utils/prepare-stack-trace'),
      }),
    ],
  }
}
