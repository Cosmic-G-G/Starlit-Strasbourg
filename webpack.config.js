const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      { test: /\.(png|jpe?g|gif|hdr|glb)$/i, use: [{ loader: 'file-loader' }]},
    ],
  },
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ]
};