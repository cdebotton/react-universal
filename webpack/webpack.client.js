var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var fs = require("fs");

var noop = function() { return new Function(); };
var ENV = process.env.NODE_ENV || "development";
var PRODUCTION = ENV === "production";
var publicPath = PRODUCTION ? "/build/" : "http://localhost:8080/build/";
var FILEPATH = path.resolve(__dirname, "../app/assets/webpack-stats.json");
var entry = path.join(__dirname, "../app/client.js");

module.exports = {
  name: "client",
  target: "web",
  entry: {
      bundle: PRODUCTION ? entry : [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        entry
      ]
  },
  output: {
    path: path.join(__dirname, "../public/build"),
    filename: PRODUCTION ? "bundle.min.js" : "[hash].js",
    chunkFilename: "[chunkhash].js",
    publicPath: publicPath
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint"
    }],
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.(css|styl)$/,
      loader: PRODUCTION ? ExtractTextPlugin.extract("style", "css!stylus") : "style!css!stylus"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "react-hot!babel?stage=0&optional=runtime"
    }]
  },
  plugins: [
    PRODUCTION ? noop() : new webpack.HotModuleReplacementPlugin(),
    PRODUCTION ? noop() : new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env.BROWSER": JSON.stringify(true),
      "process.env.NODE_ENV": JSON.stringify(ENV)
    }),
    PRODUCTION ? new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }) : noop(),
    PRODUCTION ? new ExtractTextPlugin("stylesheets/[chunkhash].css") : noop(),
    function () {
      this.plugin("done", function(stats) {
        var json = stats.toJson();
        var chunk = json.assetsByChunkName["bundle"];

        if (Object.prototype.toString.call(chunk) !== "[object Array]") {
          chunk = [chunk];
        }

        const assets = chunk.filter(function(chunk) {
          return [".js", ".css"].indexOf(path.extname(chunk)) > -1;
        }).reduce(function(memo, chunk) {
          var ext = path.extname(chunk).match(/\.(.+)$/)[1];
          memo[ext] = memo[ext] || [];
          memo[ext].push("/build/" + chunk);
          return memo;
        }, {});

        console.log("webpack-stats.json updated", assets);

        fs.writeFileSync(FILEPATH, JSON.stringify(assets));
      });
    }
  ],
  stylus: {
    use: [require("nib")(), require("rupture")()]
  },
  eslint: {
    failOnError: true
  }
};
