/* eslint-disable no-param-reassign */
const path = require('path')

// used for tests
const { config: normalConfig, CORE_MODULES } = require('./webpack.config')

module.exports = config => {
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
}
