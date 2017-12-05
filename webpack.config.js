const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const PRODUCTION =
  process.argv.indexOf('-p') !== -1 || process.env.NODE_ENV === 'production'

// heuristic to know if we are inside the Sketch repo
const IS_BC_BUILD = /\/Modules\/SketchAPI$/.test(__dirname)

const OUTPUT_PATH = path.resolve(
  __dirname,
  IS_BC_BUILD ? '../SketchPluginManager/Source/' : './build'
)

const config = {
  entry: './Source/index.js',
  output: {
    filename: 'SketchAPI.js',
    library: 'SketchAPI',
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
        API_VERSION: JSON.stringify(process.env.npm_package_version),
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
  // config.devtool = 'source-map'
}

module.exports = config
