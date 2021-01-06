const UI = require('./UI')

module.exports = UI
module.exports.default = UI

module.exports.version = {
  sketch: BCSketchInfo.shared.metadata().appVersion,
  api: process.env.API_VERSION,
}
