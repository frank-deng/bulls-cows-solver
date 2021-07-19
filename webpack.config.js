const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    main:{
      import:'./src/bulls-cows-solver.js',
      library:{
        name: 'bullsCowsSolver',
        export: 'default',
        type: 'umd',
      }
    },
    testpage:{
      import:'./src/index.js'
    }
  },
  output:{
    path: __dirname,
    filename(data){
      return `${data.runtime}.js`;
    }
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
            loader:"css-loader"
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
      template: 'src/index.ejs',
      inject:false
    })
  ],
};
