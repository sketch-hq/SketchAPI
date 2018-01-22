import * as UI from './UI'

const api = UI

api.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}

module.exports = api
