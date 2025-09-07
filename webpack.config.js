const path = require('path');

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
};