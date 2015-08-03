var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var stats = require("./utils/stats");

exports.name = "production";

exports.target = "web";

exports.entry = {
  "bundle": path.resolve(__dirname, "..", "app", "client.js")
}

exports.outputPath = path.resolve(__dirname, "..", "public");
exports.outputPublicPath = "/";

exports.modulePreLoaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint"
  }
];

exports.moduleLoaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel?optional=runtime&stage=0&loose=all"
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style", "css")
  },
  {
    test: /\.styl$/,
    loader: ExtractTextPlugin.extract("style", "css!stylus")
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url?name=fonts/[name].[ext]&limit=10000&minetype=application/font-woff"
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    include: /font/,
    loader: "file?name=fonts/[name].[ext]"
  }
];

exports.plugins = [
  new webpack.DefinePlugin({
    "process.env": JSON.stringify({
      "NODE_ENV": "production",
      "BROWSER": true
    })
  }),
  new ExtractTextPlugin("stylesheets/[hash].css"),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin(),
  new stats.WriteStatsPlugin({
    publicPath: exports.outputPublicPath,
    target: path.join(__dirname, "..", "public", "webpack-stats.json")
  })
];
