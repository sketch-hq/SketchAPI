const Async = require('./async')

module.exports = Async
module.exports.default = Async

module.exports.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}
