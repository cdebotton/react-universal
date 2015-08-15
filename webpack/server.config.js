import path from 'path';
import webpack from 'webpack';
import fs from 'fs';
import {
  ReportStatsPlugin,
} from './helpers/plugins';

const PUBLIC_PATH = `/`;

export default {
  target: 'node',
  externals: fs.readdirSync(path.join(__dirname, '..', 'node_modules'))
    .filter((dir) => ['.bin'].indexOf(dir) === -1)
    .reduce((memo, dir) => {
      memo[dir] = dir;
      return memo;
    }, {}),
  entry: {
    bundle: path.join(__dirname, '..', 'src', 'routes.js'),
  },
  output: {
    path: path.join(__dirname, '..','build'),
    publicPath: PUBLIC_PATH,
    filename: 'routes-compiled.js',
    chunkFilename: '[chunkhash].js',
    'libraryTarget': 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: 'css/locals',
      },
      {
        test: /\.styl$/,
        loaders: [
          'css/locals',
          'stylus'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      }
    ],
  },
  babel: {
    stage: 0,
    loose: [
      'all',
    ],
    optional: [
      'runtime',
    ],
    plugins: [
      path.join(__dirname, 'helpers', 'babel-relay-plugin'),
    ],
  },
  stylus: {
    use: [
      require('nib')(),
      require('rupture')(),
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: 'server',
        BROWSER: false,
      }),
    }),
    new ReportStatsPlugin(),
  ]
};
