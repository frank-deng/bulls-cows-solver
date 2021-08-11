const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()]
};
