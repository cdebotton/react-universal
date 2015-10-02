require('babel/register');

var createMonitor = require('./lib/createMonitor');

// createMonitor({
//   script: './bin/client',
//   key: 'client',
// });

// createMonitor({
//   script: './bin/dev-server',
//   key: 'dev-server',
// });

// createMonitor({
//   script: './bin/flow',
//   key: 'flow',
// });

// createMonitor({
//   script: './bin/graphql',
//   key: 'graphql',
// });

// createMonitor({
//   script: './bin/graphiql',
//   key: 'graphiql',
// });

createMonitor({
  script: './bin/test',
  key: 'test',
});
