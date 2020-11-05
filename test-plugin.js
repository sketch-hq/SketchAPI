const fs = require('fs')
const os = require('os')
const path = require('path')
const globby = require('globby')

const webpack = require('webpack')

// TODO:
// - scan source folder recursively
// - skip if ignored
// - export default module containing test suites, bundle all into single script
// - load output file
// - parse results
// - return appropriate exit code
// - use UUID for plugin name and identifier in manifest
// - use argument as output file path (include in script)
// - delete plugin after run

const plugin = path.join(
  os.homedir(),
  'Library/Application Support/com.bohemiancoding.sketch3/Plugins/SketchIntegrationTests.sketchplugin',
  'Contents/Sketch'
)

if (!fs.existsSync(plugin)) {
  fs.mkdirSync(plugin, { recursive: true })
}

const manifest = {
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
  version: '1.0.0',
  name: 'Sketch API Integration Tests',
  identifier: 'com.sketch.plugin.integration-tests',
  disableCocoaScriptPreprocessor: true,
}

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
fs.writeFileSync(path.join(plugin, 'manifest.json'), JSON.stringify(manifest))
// fs.writeFileSync(path.join(plugin, 'tests.js'), script)

// Run plugin within Sketch using `open`

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name)
    if (d.isDirectory()) yield* walk(entry)
    else if (d.isFile()) yield entry
  }
}

async function main() {
  const isIgnored = await globby.gitignore()
  const isTest = /(.*\/)*__tests__\/(.*)\.test\.js/i

  let dir = process.cwd()
  let all = []
  for await (const p of walk(dir)) {
    if (isIgnored(p)) continue
    if (!isTest.test(p)) continue

    all.push({ name: p.replace(isTest, '$2'), path: p })
  }

  let config = {
    output: {
      filename: 'tests.js',
      path: plugin,
    },
    entry: path.join(plugin, 'source.js'),
  }

  webpack(config)
}

function source(tests) {
  return tests.reduce(
    (prev, curr) => `${prev}\nimport ${curr.name} from '${curr.path}'`
  )
}

main()
