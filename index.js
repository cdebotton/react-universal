require('babel/register')({
  stage: 0,
  loose: ['all'],
});

require('./src/server');
