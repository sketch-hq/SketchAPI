/* eslint-disable no-param-reassign */
const path = require('path')
const webpack = require('webpack')

// used for tests
const { config: normalConfig, CORE_MODULES } = require('./webpack.config')

module.exports = (config) => {
  config.externals = []
  config.resolve = normalConfig.resolve
  config.resolve.alias = CORE_MODULES.reduce(
    (prev, k) => {
      prev[k] = path.resolve(__dirname, 'core-modules/node_modules/@skpm/', k)
      return prev
    },
    {
      sketch: path.resolve(__dirname, 'Source/index.ts'),
    }
  )
  config.module = normalConfig.module
  config.plugins = config.plugins.concat(normalConfig.plugins)
  config.plugins.push(
    // we need to polyfill them manually now that skpm doesn't and when running on Jenkins, they are not provided
    new webpack.ProvidePlugin({
      setTimeout: [
        path.resolve(
          __dirname,
          'core-modules/node_modules/@skpm/timers/timeout'
        ),
        'setTimeout',
      ],
      clearTimeout: [
        path.resolve(
          __dirname,
          'core-modules/node_modules/@skpm/timers/timeout'
        ),
        'clearTimeout',
      ],
      setImmediate: [
        path.resolve(
          __dirname,
          'core-modules/node_modules/@skpm/timers/immediate'
        ),
        'setImmediate',
      ],
      clearImmediate: [
        path.resolve(
          __dirname,
          'core-modules/node_modules/@skpm/timers/immediate'
        ),
        'clearImmediate',
      ],
      setInterval: [
        path.resolve(
          __dirname,
          'core-modules/node_modules/@skpm/timers/interval'
        ),
        'setInterval',
      ],
      clearInterval: [
        path.resolve(
          __dirname,
          'core-modules/node_modules/@skpm/timers/interval'
        ),
        'clearInterval',
      ],
    })
  )
}
