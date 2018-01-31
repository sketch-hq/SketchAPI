/* eslint-disable no-param-reassign */

// used for tests
const normalConfig = require('./webpack.config').config

module.exports = config => {
  config.resolve = normalConfig.resolve
  config.module = normalConfig.module
  config.module.rules[0].use[0].options.silent = true
  config.plugins = config.plugins.concat(normalConfig.plugins)
}
