import path from 'path';
import { argv } from 'yargs';

const config = new Map();

config.set('app', 'app');
config.set('dist', 'dist');

config.set('projectPath', path.resolve(__dirname, '../'));

const paths = (() => {
  const base = config.get('projectPath');
  const { resolve } = path;

  const project = (...args) => resolve.apply(resolve, [base, ...args]);

  return {
    project,
    app: project.bind(null, config.get('app')),
    data: project.bind(null, config.get('data')),
    dist: project.bind(null, config.get('dist')),
  };
})();

config.set('paths', paths);

export default config;
