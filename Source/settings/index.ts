import * as Settings from './Settings'

module.exports = Settings
module.exports.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}
