const path = require('path');
const {cssDevelTarget} = require('./targets.css');
const {jsDevelTarget} = require('./targets.src');
const server = {
  contentBase: path.resolve(__dirname, '../pages'),
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      pathRewrite: {"^/api" : ""}
    },
  }
};
jsDevelTarget.devServer = server;
cssDevelTarget.devServer = server;
module.exports = [jsDevelTarget,cssDevelTarget];

