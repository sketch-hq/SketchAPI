const { existsSync, mkdirSync, writeFileSync } = require('fs')
const os = require('os')
const path = require('path')

// TODO:
// - scan source folder recursively
// - skip if ignored
// - export default module containing test suites, bundle all into single script
// - load output file
// - parse results
// - return appropriate exit code
// - use UUID for plugin name and identifier in manifest
// - delete plugin after run

const plugin = path.join(
  os.homedir(),
  'Library/Application Support/com.bohemiancoding.sketch3/Plugins/SketchIntegrationTests.sketchplugin',
  'Contents/Sketch'
)

if (!existsSync(plugin)) {
  mkdirSync(plugin, { recursive: true })
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
writeFileSync(path.join(plugin, 'manifest.json'), JSON.stringify(manifest))
writeFileSync(path.join(plugin, 'tests.js'), script)
