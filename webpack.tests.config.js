const path = require('path')
const webpack = require('webpack') // eslint-disable-line
const { ConcatSource } = require('webpack-sources') // eslint-disable-line
const normalConfig = require('./webpack.config')

const IS_WATCHING = !!process.argv.find(
  arg => arg === '-w' || arg === '--watch'
)

// We need to do a bit of magic to allow the es6 module syntax to work. Taken from skpm.
const header = `var onRun = function (context) {`
// exports is defined here by webpack
const footer = `  exports(context);
};
`

normalConfig.entry = './test-utils/generated-index.js'
normalConfig.output = {
  filename: 'SketchAPI.tests.js',
  library: 'exports',
  path: path.resolve(__dirname, './.test-runner.sketchplugin/Contents/Sketch'),
  devtoolModuleFilenameTemplate: '[absolute-resource-path]',
}

normalConfig.plugins.push(
  new webpack.ProvidePlugin({
    expect: [require.resolve('./test-utils/expect.js'), 'expect'],
  })
)

normalConfig.plugins.push({
  // eslint-disable-next-line strict
  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
        chunks.forEach(chunk => {
          if (!chunk.isInitial()) return
          chunk.files.forEach(file => {
            // eslint-disable-next-line
            compilation.assets[file] = new ConcatSource(
              header,
              '\n',
              compilation.assets[file],
              '\n',
              footer
            )
          })
        })
        callback()
      })
    })
  },
})

if (IS_WATCHING) {
  const WebpackShellPlugin = require('webpack-shell-plugin') // eslint-disable-line
  normalConfig.plugins.push(
    new WebpackShellPlugin({
      onBuildExit: ['npm run run-tests'],
    })
  )
}

normalConfig.devtool = 'source-map'

module.exports = normalConfig
