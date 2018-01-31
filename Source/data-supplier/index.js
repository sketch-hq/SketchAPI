import { DataSupplier } from './DataSupplier'

const api = DataSupplier

api.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}

module.exports = api
