/* eslint-disable no-param-reassign */
const path = require('path')

// used for tests
const { config: normalConfig, CORE_MODULES } = require('./webpack.config')

module.exports = config => {
  config.externals = normalConfig.externals.concat(
    (context, request, callback) => {
      // sketch API
      if (/^sketch\//.test(request) || request === 'sketch') {
        return callback(null, `commonjs ${request}`)
      }
      return callback()
    }
  )
  config.resolve = normalConfig.resolve
  config.resolve.alias = CORE_MODULES.reduce((prev, k) => {
    prev[k] = path.resolve(__dirname, 'core-modules/node_modules/@skpm/', k)
    return prev
  }, {})
  config.module = normalConfig.module
  config.module.rules[0].use[0].options.silent = true
  config.plugins = config.plugins.concat(normalConfig.plugins)
}
