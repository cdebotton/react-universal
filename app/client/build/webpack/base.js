import { format } from 'util';
import webpack from 'webpack';
import CleanPlugin from 'clean-webpack-plugin';
import { WriteStatsPlugin } from '../../../../lib/webpack-plugins';

import {
  paths,
  vendors,
  alias,
  NODE_ENV,
  __PROD__,
} from '../../config';

export const cssIdentName = __PROD__ ?
  '[hash:base64:16]' :
  '[name]__[local]___[hash:base64:5]';

export default {
  name: format('[%s] client', NODE_ENV.toUpperCase()),
  target: 'web',
  entry: {
    vendors,
    bundle: [
      paths.src('entryPoints/client.js'),
    ],
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/',
    path: paths.dist('client'),
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.css',
    ],
    alias,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: paths.base('src'),
        loader: 'strip?strip[]=debug,strip[]=console.log!babel',
      },
      {
        test: /\.css$/,
        include: paths.base('src'),
        loaders: [
          'style',
          'css?modules&imports=1&localIdentName=' + cssIdentName,
          'cssnext',
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: [
          'style',
          'css',
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=fonts/[name].[ext]'
          + '&limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: /font/,
        loader: 'file?name=fonts/[name].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /node_modules/,
        loader: 'file?name=assets/[name].[ext]',
      },
    ],
  },
  plugins: [
    new CleanPlugin(['*', 'webpack-stats.json'], paths.dist('client')),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new WriteStatsPlugin(paths.base('dist')),
  ],
  babel: {
    presets: [
      'es2015',
      'react',
      'stage-0',
    ],
  },
};
