const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: 'development',
  entry: './src/linefold.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'linefold.test.js',
    library: 'linefold',
    libraryTarget: 'umd'
  },
  target: 'node',
  externals: [nodeExternals()]
};
