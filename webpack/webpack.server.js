var webpack = require("webpack");
var path = require("path");
var fs = require("fs");

var noop = function() { return new Function(); };
var ENV = process.env.NODE_ENV || "development";
var PRODUCTION = ENV === "production";
var publicPath = PRODUCTION ? "/build/" : "http://localhost:8080/build/";
var FILEPATH = path.resolve(__dirname, "../app/assets/webpack-stats.json");
var entry = path.join(__dirname, "../app/client.js");

module.exports = {
  name: "server",
  target: "node",
  externals: fs.readdirSync(path.join(__dirname, "../node_modules"))
    .filter(function (dir) {
      return dir !== ".bin";
    })
    .reduce(function(memo, dir) {
      memo[dir] = "commonjs2 " + dir;
      return memo;
    }, {}),
  entry: path.join(__dirname, "../app/routes.js"),
  output: {
    path: path.join(__dirname, "../app/assets"),
    filename: "routes.compiled.js",
    chunkFilename: "[chunkhash].js",
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel?stage=0&optional=runtime"
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};
