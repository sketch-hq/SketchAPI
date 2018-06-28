import * as DataSupplier from './DataSupplier'

module.exports = DataSupplier
module.exports.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}
