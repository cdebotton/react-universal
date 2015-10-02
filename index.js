require('babel/register');

const createMonitor = require('./lib/createMonitor');

createMonitor({
  script: './bin/server',
  key: 'koa',
});

createMonitor({
  script: './bin/graphql',
  key: 'graphql',
});

createMonitor({
  script: './bin/webpack',
  key: 'webpack',
});

createMonitor({
  script: './bin/graphiql',
  key: 'graphiql',
});

createMonitor({
  script: './bin/flow',
  key: 'flow',
});
