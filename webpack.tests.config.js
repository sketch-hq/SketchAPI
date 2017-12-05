const path = require('path')
const { ConcatSource } = require('webpack-sources') // eslint-disable-line
const normalConfig = require('./webpack.config')

// // heuristic to know if we are inside the Sketch repo
// const IS_BC_BUILD = /\/Modules\/SketchAPI$/.test(__dirname)

// const OUTPUT_PATH = path.resolve(
//   __dirname,
//   IS_BC_BUILD
//     ? '../SketchPluginManager/Tests/Data/PluginScriptTests'
//     : './build'
// )

// We need to do a bit of magic to allow the es6 module syntax to work. Taken from skpm.
const header = `var onRun = function (context) {`
// exports is defined here by webpack
const footer = `  exports(context);
};
`

normalConfig.entry = './Source/__tests__/index.js'
normalConfig.output = {
  filename: 'SketchAPI.tests.js',
  library: 'exports',
  path: path.resolve(__dirname, './.test-runner.sketchplugin/Contents/Sketch'),
}

// remove the header plugin

normalConfig.plugins[1] = {
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
}

module.exports = normalConfig
