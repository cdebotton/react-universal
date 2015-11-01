import webpack from 'webpack';
import { format } from 'util';
import base from './base';

import {
  host as WEBPACK_HOST,
  webpackPort as WEBPACK_PORT,
} from '../../config';

const hmr = format('http://%s:%s/__webpack_hmr', WEBPACK_HOST, WEBPACK_PORT);

export default {
  ...base,
  entry: {
    ...base.entry,
    bundle: [
      `webpack-hot-middleware/client?path=${hmr}`,
      ...base.entry.bundle,
    ],
  },
  plugins: [
    ...base.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  babel: {
    ...base.babel,
    plugins: [
      ['react-transform', {
        transforms: [
          {
            transform: 'react-transform-hmr',
            imports: ['react'],
            locals: ['module'],
          }, {
            transform: 'react-transform-catch-errors',
            imports: ['react', 'redbox-react'],
          },
        ],
      }],
    ],
  },
};
