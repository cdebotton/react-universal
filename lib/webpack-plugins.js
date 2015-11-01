/* @flow */

import fs from 'fs';
import path from 'path';
import { format } from 'util';
import { name as APP_NAME } from '../config';

const debug = require('debug')(format('%s:report-stats', APP_NAME));
const error = require('debug')(format('%s:report-stats:error', APP_NAME));

function notifyError(err: string & Error): void {
  error('\x07' + err);
}

function notifyWarning(warning: string & Error): void {
  debug(warning);
}

export function ReportStatsPlugin(): Function {
  return function reportStats(): void {
    this.plugin('done', stats => {
      const json = stats.toJson();

      if (json.errors.length > 0) {
        json.errors.forEach(notifyError);
      } else if (json.warnings.length > 0) {
        json.warnings.forEach(notifyWarning);
      } else {
        debug(stats.toString({
          chunks: false,
          colors: true,
        }));
      }
    });
  };
}

export function WriteStatsPlugin(writePath: string): Function {
  return function writeStats(): void {
    this.plugin('done', stats => {
      const json = stats.toJson();
      const bundle = json.assetsByChunkName.bundle;
      const vendors = json.assetsByChunkName.vendors;

      const chunks = [].concat(vendors, bundle);

      const assets = chunks.filter(chunk => {
        return ['.js', '.css'].indexOf(path.extname(chunk)) > -1;
      }).reduce((memo, chunk) => {
        const ext: string = path.extname(chunk).slice(1);

        memo[ext] = memo[ext] || [];
        memo[ext].push(chunk);

        return memo;
      }, {});

      fs.writeFileSync(
        path.join(writePath, 'webpack-stats.json'),
        JSON.stringify(assets)
      );
      debug('Wrote assets, %o', assets);
    });
  };
}
