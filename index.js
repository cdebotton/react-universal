require('babel/register');

var createMonitor = require('spawn-monitor').createMonitor;
var config = require('./config');
var paths = config.paths;
var __DEV__ = config.globals.__DEV__;

createMonitor({
  script: paths.bin('client'),
  key: 'client',
  rebootOnChange: [paths.app()],
});

createMonitor({
  script: './bin/graphql',
  key: 'graphql',
});

if (__DEV__) {
  createMonitor({
    script: './bin/dev-server',
    key: 'dev-server',
  });
}

// createMonitor({
//   script: './bin/graphiql',
//   key: 'graphiql',
// });

// createMonitor({
//   script: './bin/test',
//   key: 'test',
// });
