const path = require('path');
const entry = require('./entry');
module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
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
  }
};
