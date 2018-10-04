/* eslint-disable no-param-reassign */

// used for tests
const normalConfig = require('./webpack.config').config

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
  config.module = normalConfig.module
  config.plugins = config.plugins.concat(normalConfig.plugins)
}
