var fs = require("fs");
var path = require("path");

exports.WriteStatsPlugin = function(opts) {
  opts || (opts = {});

  return function writeStats() {
    this.plugin("done", function(stats) {
      var json = stats.toJson();
      var chunks = json.assetsByChunkName["bundle"];

      if ({}.toString.call(chunks) !== "[object Array]") {
        chunks = [chunks];
      }

      var stats = chunks.filter(function(chunk) {
        return [".js", ".css"].indexOf(path.extname(chunk)) > -1;
      }).reduce(function(memo, chunk) {
        var ext = path.extname(chunk).match(/\.(.+)$/)[1];
        memo[ext] || (memo[ext] = []);
        memo[ext].push(opts.publicPath + chunk);

        return memo;
      }, {js: [], css: []});

      fs.writeFileSync(
        opts.target,
        JSON.stringify(stats)
      );
    });
  };
};

exports.NotifyStatsPlugin = function() {

};
