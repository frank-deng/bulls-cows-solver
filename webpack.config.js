var path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/bulls-cows-solver.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bulls-cows-solver.js',
    library:'bullsCowsSolver',
    libraryExport:'default',
    libraryTarget:'umd'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
    ],
  }
};
