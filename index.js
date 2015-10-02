require('babel/register');

var createMonitor = require('spawn-monitor').createMonitor;
var config = require('./config');
var paths = config.get('paths');

createMonitor({
  script: paths.bin('client'),
  key: 'client',
  rebootOnChange: [
    paths.project('src'),
  ],
});

// createMonitor({
//   script: './bin/dev-server',
//   key: 'dev-server',
// });

createMonitor({
  script: './bin/flow',
  key: 'flow',
});

createMonitor({
  script: './bin/graphql',
  key: 'graphql',
});

// createMonitor({
//   script: './bin/graphiql',
//   key: 'graphiql',
// });

// createMonitor({
//   script: './bin/test',
//   key: 'test',
// });
