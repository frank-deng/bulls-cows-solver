const nodeExternals = require('webpack-node-externals');
const fs = require('fs');
module.exports = {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    '__test__':{
      publicPath:'/',
      import:'./test.js'
    }
  },
  output:{
    path: __dirname,
    filename:'[name].js'
  },
  optimization: {
    minimize: false
  }
};
