const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {cssEntry} = require('./entry');

/* ********************************************************************
 * Common
 * *******************************************************************/
const imageFileLoader = {
  test: /\.(jpg|png|gif)$/,
  loader: 'file-loader?name=[name].[ext]&outputPath=/img/',
};
const fontFileLoader = {
  test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  loader: 'file-loader?name=[name].[ext]&outputPath=/font/',
};

/* ********************************************************************
 * Development Version
 * *******************************************************************/
const extractLess = new ExtractTextPlugin({filename: "css/[name].css"});
let cssDevelTarget = {
  entry: cssEntry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'css/[name].css'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
	test: /\.less$/,
	use: extractLess.extract({
	  use: [
	    { loader: "css-loader", options: { sourceMap: true } },
	    { loader: "less-loader", options: { sourceMap: true } }
	  ],
	  fallback: "style-loader"
	})
      },
      {
	test: /\.s(c|a)ss$/,
	use: extractLess.extract({
	  use: [
	    { loader: "css-loader", options: { sourceMap: true } },
	    { loader: "resolve-url-loader", options: { sourceMap: true } },
	    { loader: "sass-loader", options: { sourceMap: true } }
	  ],
	  fallback: "style-loader"
	})
      },
      imageFileLoader,
      fontFileLoader,
    ]
  },
  plugins: [
    extractLess,
  ],
};

/* ********************************************************************
 * Product Version
 * *******************************************************************/
const extractProductionLess = new ExtractTextPlugin({filename: 'css/[name].min.css'});
let cssProductionTarget = {
  entry: cssEntry,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/redux',
    filename: 'css/[name].min.css'
  },
  module: {
    rules: [
      {
	test: /\.less$/,
	use: extractProductionLess.extract({
	  use: [
	    { loader: 'css-loader', options:{ minimize: true } },
	    { loader: 'less-loader', options:{ minimize: true } }
	  ],
	  fallback: 'style-loader'
	})
      },
      {
	test: /\.s(c|a)ss$/,
	use: extractProductionLess.extract({
	  use: [
	    { loader: "css-loader", options: { sourceMap: false, minimize: true } },
	    { loader: "resolve-url-loader", options: { sourceMap: false } },
	    { loader: "sass-loader", options: { sourceMap: true } }
	  ],
	  fallback: 'style-loader'
	})
      },
      imageFileLoader,
      fontFileLoader,
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
    }),
    extractProductionLess,
  ]
};

/* ********************************************************************
 * Export
 * *******************************************************************/
module.exports = {cssDevelTarget,cssProductionTarget};
