const path = require('path');
const entry = require('./entry');
module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: "/js/"
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../pages'),
    port: 3000
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
  }
};
