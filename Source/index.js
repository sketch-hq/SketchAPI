const api = require('./dom')

api.Async = require('./async')
api.DataSupplier = require('./data-supplier')
api.Settings = require('./settings')
api.UI = require('./ui')

api.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}

module.exports = api
