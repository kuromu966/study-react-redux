const webpack = require('webpack');
const path = require('path');
const {jsEntry} = require('./entry');

/* ********************************************************************
 * Common
 * *******************************************************************/
const Resolve = {
  extensions: ['.js', '.jsx'],
};
const babelLoader = {
  test: /\.jsx*$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
};

/* ********************************************************************
 * Development Version
 * *******************************************************************/
let jsDevelTarget = {
  entry: jsEntry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js'
  },
  devtool: 'inline-source-map',
  resolve: Resolve,
  module: {
    rules: [babelLoader]
  }
};

/* ********************************************************************
 * Product Version
 * *******************************************************************/
let jsProductionTarget = {
  entry: jsEntry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/redux',
    filename: 'js/[name].min.js'
  },
  resolve: Resolve,
  module: {
    rules: [babelLoader]
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

/* ********************************************************************
 * Export
 * *******************************************************************/
module.exports = {jsDevelTarget,jsProductionTarget};
