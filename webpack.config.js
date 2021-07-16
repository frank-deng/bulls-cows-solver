var path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    main:[
      './src/bulls-cows-solver.js'
    ]
  },
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
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        exclude: /node_modules/
      },
    ]
  }
};
