const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const accountName = require('./package.json').accountName;

module.exports = {
  mode: 'production',
  entry: [
    './src/js/index.js',
    './src/scss/index.scss'
  ],
  devServer: {
    contentBase: './dist',
    hot: false
  },
  module: {
    rules: [
      { 
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: `${accountName}-min.css`, // Use accountName em vez de name
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${accountName}-min.js`, // Alterado de .min.js para -min.js
    publicPath: '/'
  }
}
