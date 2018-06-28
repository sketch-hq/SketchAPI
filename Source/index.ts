const api = require('./dom')

module.exports = api
module.exports.Async = require('./async')
module.exports.DataSupplier = require('./data-supplier')
module.exports.Settings = require('./settings')
module.exports.UI = require('./ui')
module.exports.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}
