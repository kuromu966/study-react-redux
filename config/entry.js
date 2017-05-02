const path = require('path');
const jsEntry = {
  test: path.resolve(__dirname, '../src/root', 'test.jsx'),
  /* init: path.resolve(__dirname, '../src/root', 'init.jsx'),*/
  /* bootstrap: path.resolve(__dirname, '../src/bundle', 'bootstrap.jsx'),*/
};
const cssEntry = {
  skin_all: path.resolve(__dirname, '../less', 'skins.less'),
  /* bootstrap: path.resolve(__dirname, '../less', 'bootstrap.less'),*/
  ui: path.resolve(__dirname, '../less', 'ui.less'),
  icons: path.resolve(__dirname, '../scss', 'icons.scss'),
};
module.exports = {jsEntry, cssEntry};
