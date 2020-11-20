const fs = require('fs')
const os = require('os')
const path = require('path')
const globby = require('globby')

const VirtualModulesPlugin = require('webpack-virtual-modules')
const CopyPlugin = require('copy-webpack-plugin')

// All core modules are made available within the Sketch runtime environment
// without using the `@skpm/` organisation namespace.
const coreModules = Object.keys(
  require('./core-modules/package.json').dependencies
).map((name) => name.replace(/^@skpm\/(.+)/, '$1'))

// TODO:
// ✔ scan source folder recursively
// ✔ skip if ignored
// ✔ export default module containing test suites, bundle all into single script
// - load output file
// - parse results
// - return appropriate exit code
// - use UUID for plugin name and identifier in manifest
// - use argument as output file path (include in script)
// - delete plugin after run
// - Run plugin within Sketch using `open`

const plugin = path.join(
  os.homedir(),
  'Library/Application Support/com.bohemiancoding.sketch3/Plugins/SketchIntegrationTests.sketchplugin',
  'Contents/Sketch'
)

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
 */
function manifest(pkg) {
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
    name: 'Sketch API Integration Tests',
    identifier: 'com.sketch.plugin.integration-tests',
    disableCocoaScriptPreprocessor: true,
  })
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
  // TODO: Return entire array, limiting during development.
  return all //.slice(0, 1)
}

/**
 * Generate the source code of the entry script to import and run all
 * provided test suites.
 *
 * @param {Object[]} tests An array of test suites to run.
 */
function source(tests) {
  const reducer = (name) => {
    return (prev, curr) =>
      `${prev}\n${name}['${curr.name}'] = require('${curr.path}')`
  }

  // return `
  return `
  var testSuites = {}
  ${tests.reduce(reducer('testSuites'), '')}

  export default function(context) {
    const path = require('path')
    const os = require('os')
    const sketch = require('sketch')
    
    let out = path.join(os.tmpdir(), 'SketchIntegationTests-output.log')
    
    let data = NSString.alloc().initWithString('sample test output log')
    let err = MOPointer.alloc().init()
    
    data.writeToFile_atomically_encoding_error(out, false, NSUTF8StringEncoding, err)
    console.log('✅ Test output written to disk: ' + out)

    sketch.UI.message('✅ Test output written to disk.')
  }
  `
}

const { NODE_ENV } = process.env

/**
 * Creates webpack configuration
 */
let src = source(testSuites(process.cwd()))

console.log(src)

module.exports = {
  mode: NODE_ENV || 'development',
  output: {
    filename: 'tests.js',
    path: plugin,
    libraryTarget: 'var',
    libraryExport: 'default',
    library: 'tests',
  },
  entry: {
    index: './tests.js',
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
      // `sketch` module bundled with the application.
      const isSource = /^\Source\/(.+)/
      const res = path.join(ctx, req) // fully resolved path
      const rel = path.relative(__dirname, res)
      if (isSource.test(rel)) {
        return callback(null, rel.replace(isSource, 'sketch/$1'), `commonjs`)
      }

      return callback()
    },
  ],
  plugins: [
    // All __tests__/*.test.js files are gathered and bundled as a single plugin.
    new VirtualModulesPlugin({
      './tests.js': src,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './package.json',
          to: `${plugin}/manifest.json`,
          transform(content) {
            const pkg = JSON.parse(content.toString())
            return manifest(pkg)
          },
        },
      ],
    }),
  ],
}
