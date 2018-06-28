const path = require('path')
const webpack = require('webpack')

const PRODUCTION =
  process.argv.indexOf('-p') !== -1 || process.env.NODE_ENV === 'production'

// heuristic to know if we are inside the Sketch repo
const IS_BC_BUILD = /\/Modules\/SketchAPI$/.test(__dirname)

const OUTPUT_PATH = path.resolve(
  __dirname,
  IS_BC_BUILD ? '../SketchPluginManager/Source/api/' : './build'
)

const ENTRIES = [
  { entry: './Source/index.ts', output: 'SketchAPI.js' },
  { entry: './Source/async/index.ts', output: 'SketchAPI_async.js' },
  {
    entry: './Source/data-supplier/index.ts',
    output: 'SketchAPI_data-supplier.js',
  },
  { entry: './Source/dom/index.js', output: 'SketchAPI_dom.js' },
  { entry: './Source/settings/index.ts', output: 'SketchAPI_settings.js' },
  { entry: './Source/ui/index.ts', output: 'SketchAPI_ui.js' },
]

const config = {
  resolve: {
    // Add '.ts' as resolvable extensions.
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.js' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.(ts|js)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(PRODUCTION ? 'production' : 'development'),
        API_VERSION: JSON.stringify(process.env.npm_package_version),
      },
    }),
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
