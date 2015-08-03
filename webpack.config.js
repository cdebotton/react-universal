var path = require("path");
var ENV = process.env.NODE_ENV || "development";
var configFile = path.join(__dirname, "webpack", ENV + ".config");
var config = require(configFile);

module.exports = {
  devtool: config.devtool,
  target: config.target,
  externals: config.externals,
  entry: config.entry,
  output: {
    path: config.outputPath,
    publicPath: config.outputPublicPath,
    filename: config.filename || "[hash].js",
    chunkFilename: "[chunkhash].js",
    libraryTarget: config.libraryTarget
  },
  module: {
    preLoaders: config.modulePreLoaders || [],
    loaders: config.moduleLoaders
  },
  plugins: config.plugins,
  stylus: {
    use: [
      require("nib")(),
      require("rupture")()
    ]
  },
  eslint: {
    failOnError: false
  }
};
