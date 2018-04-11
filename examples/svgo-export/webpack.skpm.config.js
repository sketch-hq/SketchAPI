const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function (config) {
  config.plugins.push(
    new CopyWebpackPlugin([ {from:'assets/node_modules', to:'../Resources/node_modules'} ], {})
  );
}
