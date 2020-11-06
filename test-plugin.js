const fs = require('fs')
const os = require('os')
const path = require('path')
const globby = require('globby')

const VirtualModulesPlugin = require('webpack-virtual-modules')
const CopyPlugin = require('copy-webpack-plugin')

// TODO:
// ✔ scan source folder recursively
// ✔ skip if ignored
// - export default module containing test suites, bundle all into single script
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

const script = `
  function onRun(context) {
    const path = require('path')
    const os = require('os')
    
    let out = path.join(os.tmpdir(), 'SketchIntegationTests-output.log')
    
    let data = NSString.alloc().initWithString('sample test output log')
    let err = MOPointer.alloc().init()
    
    data.writeToFile_atomically_encoding_error(out, false, NSUTF8StringEncoding, err)
  }
`

/**
 * Walks a directory and returns a generator for all files within the
 * directory and all included subdirectories.
 *
 * @param {string} dir A path to a directory to be read recursively.
 */
async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name)
    if (d.isDirectory()) yield* walk(entry)
    else if (d.isFile()) yield entry
  }
}

/**
 * Converts package.json into a plugin manifest.
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
          run: 'onRun',
          actions: {
            HandleURL: 'onRun',
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

async function testSuites(dir) {
  const isIgnored = await globby.gitignore()
  const isTest = /(.*\/)*__tests__\/(.*)\.test\.js/i

  let all = []
  for await (const p of walk(dir)) {
    if (isIgnored(p)) continue
    if (!isTest.test(p)) continue

    all.push({ name: p.replace(isTest, '$2'), path: p })
  }
  return all
}

function source(tests) {
  const reducer = (prev, curr) =>
    `${prev}\nimport ${curr.name} from '${curr.path}'`
  return tests.reduce(reducer, '')
}

const { NODE_ENV } = process.env

module.exports = {
  mode: NODE_ENV || 'development',
  output: {
    filename: 'tests.js',
    path: plugin,
  },
  entry: {
    index: './tests.js',
  },
  plugins: [
    new VirtualModulesPlugin({
      './tests.js': testSuites(process.cwd()).then((tests) => source(tests)),
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
