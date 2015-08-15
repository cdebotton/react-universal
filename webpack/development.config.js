import path from 'path';
import webpack from 'webpack';
import {
  ReportStatsPlugin,
  WriteStatsPlugin,
} from './helpers/plugins';

const WEBPACK_PORT = process.env.WEBPACK_PORT || '3333';
const PUBLIC_PATH = `http://localhost:${WEBPACK_PORT}/`;

export default {
  devtool: '#eval',
  entry: {
    bundle: [
      `webpack-dev-server/client?${PUBLIC_PATH}`,
      'webpack/hot/only-dev-server',
      path.join(__dirname, '..', 'src', 'client.js'),
    ],
  },
  output: {
    path: path.join(__dirname, '..', 'public','build'),
    publicPath: PUBLIC_PATH,
    filename: '[hash].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?name=fonts/[name].[ext]&limit=10000&minetype=application/font-woff',
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
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ],
      },
      {
        test: /\.styl$/,
        loaders: [
          'style',
          'css',
          'stylus'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      }
    ],
  },
  babel: {
    stage: 0,
    loose: [
      'all'
    ],
    optional: [
      'runtime'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: 'development',
        BROWSER: true,
      }),
    }),
    new ReportStatsPlugin(),
    new WriteStatsPlugin(),
  ]
};
