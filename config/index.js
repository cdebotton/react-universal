import path from 'path';
import { argv } from 'yargs';

const config = new Map();

config.set('app', 'app');
config.set('bin', 'bin');
config.set('data', 'data');
config.set('dist', 'dist');

config.set('clientHost', process.env.HOST || 'localhost');
config.set('clientPort', parseInt(process.env.PORT, 10) || 3000);
config.set('graphQLPort', parseInt(process.env.GRAPHQL_PORT, 10) || 8080);

config.set('projectPath', path.resolve(__dirname, '../'));

const paths = (() => {
  const base = config.get('projectPath');
  const { resolve } = path;

  const project = (...args) => resolve.apply(resolve, [base, ...args]);

  return {
    project,
    app: project.bind(null, config.get('app')),
    bin: project.bind(null, config.get('bin')),
    data: project.bind(null, config.get('data')),
    dist: project.bind(null, config.get('dist')),
  };
})();

config.set('paths', paths);

export default config;
