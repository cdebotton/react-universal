const blacklist = [
  require('babel-plugin-transform-regenerator'),
];

const esFiltered = require('babel-preset-es2015');

esFiltered.plugins = esFiltered.plugins.filter(function filter(plugin) {
  return blacklist.indexOf(plugin[0] || plugin) === -1;
});

require('babel-core/register')({
  presets: [
    esFiltered,
    require('babel-preset-stage-0'),
    require('babel-preset-react'),
  ],
});
