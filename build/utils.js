/* @flow */

import fs from 'fs';
import path from 'path';
import { green } from 'chalk';
import { paths, globals } from '../config';

const __DEV__ = globals.__DEV__;
const __PROD__ = globals.__PROD__;

function notifyError(error: string & Error): void {
  console.log('\x07' + error);
}

function notifyWarning(warning: string & Error): void {
  console.log(warning);
}

export function ReportStatsPlugin(): Function {
  return function reportStats(): void {
    this.plugin('done', (stats) => {
      if (__DEV__) {
        console.log('Compiled client with Webpack');
        return;
      }

      const json = stats.toJson();

      if (json.errors.length > 0) {
        json.errors.forEach(notifyError);
      } else if (json.warnings.length > 0) {
        json.warnings.forEach(notifyWarning);
      } else {
        console.log(stats.toString({
          chunks: false,
          colors: true,
        }));
      }
    });
  };
}

export function WriteStatsPlugin(): Function {
  return function writeStats(): void {
    this.plugin('done', (stats) => {
      const json = stats.toJson();
      const app = json.assetsByChunkName.json;
      const vendor = json.assetsByChunkName.vendor;

      const chunks = [].concat(vendor, app);

      const assets = chunks.filter((chunk) => {
        return ['.js', '.css'].indexOf(path.extname(chunk)) > -1;
      }).reduce((memo, chunk) => {
        const ext = path.extname(chunk).match(/\.(.+)$/)[1];
        memo[ext] = memo[ext] || [];
        memo[ext].push(chunk);

        return memo;
      }, {});

      if (__PROD__) {
        console.log(
          green('Wrote webpack-stats.json:'),
          JSON.stringify(assets, null, 2)
        );
      }

      fs.writeFileSync(
        paths.dist('webpack-stats.json'),
        JSON.stringify(assets)
      );
    });
  };
}
