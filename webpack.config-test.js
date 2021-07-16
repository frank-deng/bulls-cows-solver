const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: 'development',
  entry: './src/bulls-cows-solver.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bulls-cows-solver.test.js',
    library:'bullsCowsSolver',
    libraryTarget:'umd'
  },
  target: 'node',
  externals: [nodeExternals()]
};
