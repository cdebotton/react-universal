import { resolve } from 'path';
import * as rootConfig from '../../../config';

const {
  base,
  dirSetup,
  ...rest,
} = rootConfig;

export const port = parseInt((process.env.PORT || 9000), 10);
export const host = (process.env.HOST || 'localhost').trim();
export const webpackPort = parseInt(
  (process.env.ADMIN_WEBPACK_PORT || port + 1),
  10
);

export const paths = (() => {
  const getDir = dirSetup(resolve(__dirname, '..'));

  return {
    base: getDir.bind(null, null),
    src: getDir.bind(null, 'src'),
    build: getDir.bind(null, 'build'),
    dist: getDir.bind(null, 'dist'),
  };
})();

export const globals = {
  ...rest,
  'process.env': JSON.stringify({
    NODE_ENV: rest.NODE_ENV,
  }),
};

export const vendors = [
  'react',
  'react-dom',
  'react-relay',
  'react-router',
  'react-relay',
  'history',
];

export const alias = {
  actions: paths.src('actions'),
  components: paths.src('components'),
  constants: paths.src('constants'),
  containers: paths.src('containers'),
  config: paths.base('config'),
  mutations: paths.src('mutations'),
  reducers: paths.src('reducers'),
  routes: paths.src('routes'),
  store: paths.src('store'),
};

export const NODE_ENV = rest.NODE_ENV;
export const __DEV__ = rest.__DEV__;
export const __PROD__ = rest.__PROD__;
export const __DEBUG__ = rest.__DEBUG__;
