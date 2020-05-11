const path = require('path')
const webpack = require('webpack')
const babelLoader = require('@skpm/builder/lib/utils/babelLoader').default({})

const PRODUCTION = process.env.NODE_ENV !== 'development'

const OUTPUT_PATH = path.resolve(__dirname, './build')

const ENTRIES = [
  { entry: './Source/index.js', output: 'SketchAPI.js' },
  { entry: './Source/async/index.js', output: 'SketchAPI_async.js' },
  {
    entry: './Source/data-supplier/index.js',
    output: 'SketchAPI_data-supplier.js',
  },
  { entry: './Source/dom/index.js', output: 'SketchAPI_dom.js' },
  { entry: './Source/settings/index.js', output: 'SketchAPI_settings.js' },
  { entry: './Source/ui/index.js', output: 'SketchAPI_ui.js' },
]

const CORE_MODULES = Object.keys(
  require('./core-modules/package.json').dependencies
).map((k) => k.replace('@skpm/', ''))

babelLoader.test = /\.(ts|js)$/

const config = {
  mode: PRODUCTION ? 'production' : 'development',
  resolve: { extensions: ['.js', '.json'] },
  module: {
    rules: [babelLoader],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(PRODUCTION ? 'production' : 'development'),
        API_VERSION: JSON.stringify(process.env.npm_package_version),
      },
    }),
  ],
  externals: [
    (context, request, callback) => {
      // core modules shipped in Sketch
      if (CORE_MODULES.indexOf(request) !== -1) {
        return callback(null, `commonjs ${request}`)
      }
      return callback()
    },
  ],
}

module.exports = ENTRIES.map(({ entry, output }) => ({
  ...config,
  ...{
    entry,
    output: {
      filename: output,
      libraryTarget: 'commonjs2',
      path: OUTPUT_PATH,
    },
  },
}))

module.exports.config = config
module.exports.CORE_MODULES = CORE_MODULES
