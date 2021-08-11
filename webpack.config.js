const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    './dist/bulls-cows-solver':{
      publicPath:'/dist/',
      import:'./src/bulls-cows-solver.js',
      library:{
        name: 'bullsCowsSolver',
        export: 'default',
        type: 'umd',
      }
    },
    testpage:{
      publicPath:'/',
      import:'./src/index.js'
    }
  },
  output:{
    path: __dirname,
    filename:'[name].js'
  },
  devServer:{
    static:__dirname,
    liveReload:false,
    open:true,
    port:8082
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
            loader:"raw-loader"
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
