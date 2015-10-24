import path, { resolve } from 'path';
import { argv } from 'yargs';

/**********************************************************************
 * Path Declarations
 * ---------------------------------
 * Modify where different portions of your application are stored.
 **********************************************************************/

export const BASE_PATH = path.resolve(__dirname, '../');
export const APP = 'app';
export const BIN = 'bin';
export const BUILD = 'build';
export const DATA = 'data';
export const DIST = 'dist';

/**********************************************************************
 * Environmental Variables
 * ---------------------------------
 * Get runtime variables passed through the environment and export
 * them as configuration delcarations.
 **********************************************************************/

export const {
  NODE_ENV: env = 'development',
  HOST: host = 'localhost',
  PORT: port = 3000,
  GRAPHQL_PORT: graphQLPort = 8080,
  WEBPACK_PORT: webpackPort = 3001,
} = process.env;

/**********************************************************************
 * Globals
 * ---------------------------------
 * Declare global variables for use in webpack bundles.
 **********************************************************************/

export const globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(env),
  },
  'NODE_ENV': env,
  '__DEV__': env === 'development',
  '__PROD__': env === 'production',
  '__DEBUG__': env === 'development' && !argv.no_debug,
  '__DEBUG_NW__': !!argv.nw,
};

/**********************************************************************
 * Webpack Public Paths
 * ---------------------------------
 * The path for the client and hot module replacement extensions.
 **********************************************************************/

export const webpackPublicPath = `http://${host}:${webpackPort}/`;
export const webpackHmrPath = `http://${host}:${webpackPort}/__webpack_hmr`;

/**********************************************************************
 * Path Helper
 * ---------------------------------
 * Declare a helper for quickly generating paths to key folders
 * of the application.
 **********************************************************************/

export const paths = (() => {
  const base = (...args) => resolve.apply(resolve, [BASE_PATH, ...args]);

  return {
    base,
    app: base.bind(null, APP),
    bin: base.bind(null, BIN),
    build: base.bind(null, BUILD),
    data: base.bind(null, DATA),
    dist: base.bind(null, DIST),
  };
})();

/**********************************************************************
 * Webpack Aliases
 * ---------------------------------
 * Allow for the importing of modules through wepback by way of
 * shortened absolute paths rather than relative paths.
 **********************************************************************/

const appAliases = [
  'actions',
  'components',
  'constants',
  'containers',
  'entryPoints',
  'reducers',
  'routes',
  'store',
  'styles',
  'utils',
  'views',
].reduce((acc, key) => ((acc[key] = paths.app(key)) && acc), {});


const rootAliases = [
  'build',
  'bin',
  'config',
  'data',
].reduce((acc, key) => ((acc[key] = paths.base(key)) && acc), {});

export const aliases = {
  ...appAliases,
  ...rootAliases,
};


/**********************************************************************
 * Webpack Vendors
 * ---------------------------------
 * Modules to load into a separate vendor package.
 **********************************************************************/

export const vendors = [
  'history',
  'immutable',
  'react',
  'react-relay',
  'react-redux',
  'react-router',
  'redux',
  'redux-devtools',
  'redux-devtools/lib/react',
];
