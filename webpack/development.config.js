var webpack = require("webpack");
var path = require("path");
var stats = require("./utils/stats");

var DEV_PORT = process.env.DEV_PORT || 3001;
var CLIENT = "http://localhost:" + DEV_PORT;
var publicPath = CLIENT + "/";

exports.name = "development";

exports.target = "web";

exports.devtool = "eval-source-map";

exports.entry = {
  "bundle": [
    "webpack-dev-server/client?" + CLIENT,
    "webpack/hot/only-dev-server",
    path.resolve(__dirname, "..", "app", "client.js")
  ]
}

exports.outputPath = path.resolve(__dirname, "..", "public");
exports.outputPublicPath = publicPath;

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
    loader: "react-hot!babel?optional=runtime&stage=0&loose=all"
  },
  {
    test: /\.css$/,
    loader: "style!css"
  },
  {
    test: /\.styl$/,
    loader: "style!css!stylus"
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url?name=fonts/[name].[ext]&limit=10000&minetype=application/font-woff"
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    include: /font/,
    loader: "file?name=fonts/[name].[ext]"
  },
  {
    test: /\.ico$/,
    loader: "file?name=[name].[ext]"
  }
];

exports.plugins = [
  new webpack.DefinePlugin({
    "process.env": JSON.stringify({
      "NODE_ENV": "development",
      "BROWSER": true
    })
  }),
  new webpack.NoErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new stats.WriteStatsPlugin({
    publicPath: exports.outputPublicPath,
    target: path.join(__dirname, "..", "public", "webpack-stats.json")
  })
];
