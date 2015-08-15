import fs from 'fs';
import path from 'path';
import {yellow, green} from 'colors';

function notifyError(error) {
  console.log('\x07' + error);
}

function notifyWarning(warning) {
  console.log(warning);
}

export function ReportStatsPlugin() {
  return function() {
    this.plugin('done', (stats) => {
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

export function WriteStatsPlugin() {
    return function() {
      this.plugin('done', (stats) => {
        const json = stats.toJson();
        let chunks = json.assetsByChunkName.bundle;

        if (!Array.isArray(chunks)) {
          chunks = [chunks];
        }

        const assets = chunks.filter((chunk) => {
          return ['.js', '.css'].indexOf(path.extname(chunk)) > -1;
        }).reduce((memo, chunk) => {
          const ext = path.extname(chunk).match(/\.(.+)$/)[1];
          memo[ext] = memo[ext] || [];
          memo[ext].push(chunk);

          return memo;
        }, {});

        console.log(green('Wrote webpack-stats.json:'), JSON.stringify(assets, null, 2));

        fs.writeFileSync(
          path.join(__dirname, '..', '..', 'build', 'webpack-stats.json'),
          JSON.stringify(assets)
        );
      });
    };
}
