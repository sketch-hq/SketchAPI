const Settings = require('./Settings')

module.exports = Settings
module.exports.default = Settings

module.exports.version = {
  sketch: BCSketchInfo.shared.metadata().appVersion,
  api: process.env.API_VERSION,
}
