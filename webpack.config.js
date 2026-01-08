const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|hdr|glb)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][hash][ext]"
        }
      },
    ],
  },

  entry: {
    main: './src/main/index.js',
    playground: './src/playground/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js',
    clean: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/playground/index.html',
      filename: 'playground/index.html',
      chunks: ['playground']
    })
  ],
};