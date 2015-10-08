var path = require('path');

require('babel/register');

var env = require('./config').env;
var client = path.resolve(__dirname, 'build', 'webpack', env + '.config');
var server = path.resolve(__dirname, 'build', 'webpack', 'server.config');

module.exports = [
  require(client),
  require(server),
];
