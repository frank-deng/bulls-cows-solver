const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    main:[
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname,'assets'),
    filename: 'index.js'
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
      {
        test: /\.less$/,
        use: [
          {
            loader:"style-loader"
          },
          {
            loader:"css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader:"postcss-loader",
            options: {
              postcssOptions:{
                plugins: {
                  'cssnano': {}
                }
              }
            }
          },
          {
            loader:"less-loader"
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname,'index.html'),
      template: 'src/index.ejs'
    })
  ],
};
