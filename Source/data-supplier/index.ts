module.exports = require('./DataSupplier')

module.exports.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}
