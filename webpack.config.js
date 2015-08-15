var path = require('path');

require('babel/register')({
  stage: 0,
  loose: ['all'],
});

var ENV = process.env.NODE_ENV || 'development';
var envPath = path.resolve(__dirname, 'webpack', ENV + '.config.js');

module.exports = require(envPath);
