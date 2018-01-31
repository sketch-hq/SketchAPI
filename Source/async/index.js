import * as Async from './async'

const api = Async

api.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}

module.exports = api
