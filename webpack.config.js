var path = require('path');

require('babel/register');

var env = require('./config').env;

module.exports = require(
  path.resolve(__dirname, 'build', 'webpack', env + '.config')
);
