var path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    main:[
      'core-js/stable',
      'regenerator-runtime/runtime',
      './src/bulls-cows-solver.js'
    ]
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bulls-cows-solver.es5.js',
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
