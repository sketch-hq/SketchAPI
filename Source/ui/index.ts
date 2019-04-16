const UI = require('./UI')

module.exports = UI
module.exports.default = UI

module.exports.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}
