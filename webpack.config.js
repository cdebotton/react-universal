require('babel-core/register')({
  presets: [
    'react',
    'es2015',
    'stage-0',
  ],
});
module.exports = require('./lib/webpack.config');
