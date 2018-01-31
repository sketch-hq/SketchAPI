import * as Settings from './Settings'

const api = Settings

api.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}

module.exports = api
