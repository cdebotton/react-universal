import path from 'path';
import fs from 'fs';

const APP = path.join(__dirname, '..', 'app');
const configs = fs.readdirSync(APP)
  .reduce(function getConfigs(acc, dir) {
    const CONFIG_FILE = path.join(APP, dir, 'build', 'webpack.config.js');

    if (fs.existsSync(CONFIG_FILE)) {
      let config = require(CONFIG_FILE).default;

      if (!Array.isArray(config)) {
        config = [config];
      }

      return [
        ...acc,
        ...config,
      ];
    }

    return acc;
  }, []);

module.exports = configs;
