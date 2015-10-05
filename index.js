require('babel/register');

var createMonitor = require('spawn-monitor').createMonitor;
var paths = require('./config').paths;

createMonitor({
  script: paths.bin('client'),
  key: 'client',
  rebootOnChange: [paths.app()],
});

createMonitor({
  script: './bin/dev-server',
  key: 'dev-server',
});

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
