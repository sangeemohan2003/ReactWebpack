const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      static: './dist',
    }, 
    module: {
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
      ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve('./index.html'),
        }),
      ]
  };