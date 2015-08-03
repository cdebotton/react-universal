var webpack = require("webpack");
var path = require("path");
var fs = require("fs");
var stats = require("./utils/stats");
var ENV = process.env.NODE_ENV || "development";

exports.name = "server";

exports.target = "node";

exports.filename = "application.compiled.js";

exports.externals = fs.readdirSync(path.join(__dirname, "..", "node_modules"))
  .reduce(function(memo, dir) {
    if ([".bin"].indexOf(dir) === -1) {
      memo[dir] = dir;
    }
    return memo;
  }, {});

exports.libraryTarget = "commonjs2";

exports.entry = {
  "bundle": path.resolve(__dirname, "..", "app", "routes.js")
};

exports.outputPath = path.resolve(__dirname, "..", "build");
exports.outputPublicPath = "/build/";

exports.moduleLoaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel?optional=runtime&stage=0&loose=all"
  },
  {
    test: /\.css$/,
    loader: "css-loader/locals"
  },
  {
    test: /\.styl$/,
    loader: "css-loader/locals!stylus"
  }
];

exports.plugins = [
  new webpack.DefinePlugin({
    "process.env": JSON.stringify({
      "NODE_ENV": ENV,
      "BROWSER": false
    })
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
];
