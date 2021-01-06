const DataSupplier = require('./DataSupplier')

module.exports = DataSupplier
module.exports.default = DataSupplier

module.exports.version = {
  sketch: BCSketchInfo.shared.metadata().appVersion,
  api: process.env.API_VERSION,
}
