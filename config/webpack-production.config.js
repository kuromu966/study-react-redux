var webpack = require('webpack');
const path = require('path');
const entry = require('./entry');
module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
	test: /\.jsx*$/,
	exclude: /node_modules/,
	loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
	warnings: false
      }
    })
  ]
};
