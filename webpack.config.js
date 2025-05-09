const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const pkg = require('./package')
const accountName = require('./package.json').accountName;
const { createProxyMiddleware } = require('http-proxy-middleware');
const history = require('connect-history-api-fallback');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/js/index.js',
    './src/scss/index.scss',
    'webpack-hot-middleware/client'
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    
    // Configuração do proxy para o carrinho
    setupMiddlewares: (middlewares, devServer) => {
      // Middleware para lidar com páginas de carrinho
      devServer.app.use(
        '/carrinho',
        createProxyMiddleware({
          target: 'https://www.mercosulvendas.com.br',
          changeOrigin: true,
          secure: false,
          onProxyRes: function(proxyRes, req, res) {
            // Modificar cabeçalhos para evitar problemas de CORS
            proxyRes.headers['Access-Control-Allow-Origin'] = '*';
            
            // Log para debug
            console.log(`Proxying request to: ${req.url}`);
          }
        })
      );
      
      return middlewares;
    }
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
    }),    new CopyPlugin({
      patterns: [
        { from: './src/js/components/carrinhoRedesign.js', to: 'js/components/' },
        { from: './src/js/components/carrinhoPrecos.js', to: 'js/components/' },
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${pkg.accountName}-min.js`, // Alterado de .min.js para -min.js
    publicPath: '/'
  }
}
