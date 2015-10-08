require('babel/register');

var createMonitor = require('spawn-monitor').createMonitor;
var config = require('./config');
var paths = config.paths;
var __DEV__ = config.globals.__DEV__;
var __PROD__ = config.globals.__PROD__;

if (__PROD__) {
  require(paths.bin('client'));
  require(paths.bin('graphql'));
}

if (__DEV__) {
  createMonitor({
    script: paths.bin('client'),
    key: 'client',
  });

  createMonitor({
    script: paths.bin('graphql'),
    key: 'graphql',
  });


  createMonitor({
    script: paths.bin('dev-server'),
    key: 'dev-server',
  });

  createMonitor({
    script: paths.bin('relay'),
    key: 'relay',
  });
}

// createMonitor({
//   script: './bin/test',
//   key: 'test',
// });
