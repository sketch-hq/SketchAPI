const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const PRODUCTION =
  process.argv.indexOf('-p') !== -1 || process.env.NODE_ENV === 'production'

const OUTPUT_PATH = path.resolve(
  __dirname,
  path.dirname(process.env.npm_package_config_output || '') || './build'
)
const OUTPUT_FILE = process.env.npm_package_config_output
  ? path.basename(process.env.npm_package_config_output)
  : 'SketchAPI.js'

const config = {
  entry: './Source/index.js',
  output: {
    filename: OUTPUT_FILE,
    library: 'SketchAPIWithCapturedContext',
    path: OUTPUT_PATH,
  },
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

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(PRODUCTION ? 'production' : 'development'),
      },
    }),
    new webpack.BannerPlugin({
      banner: fs.readFileSync(path.resolve(__dirname, './header.js'), 'utf-8'),
      raw: true,
      entryOnly: true,
    }),
  ],
}

if (!PRODUCTION) {
  config.devtool = 'source-map'
}

module.exports = config
