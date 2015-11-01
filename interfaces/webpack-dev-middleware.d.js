/* @flow */

type WebpackDevConfig = {
  hot: bool;
  publicPath: string;
  historyApiFallback: bool;
  quiet: bool;
  noInfo: bool;
};

declare module 'webpack-dev-middleware' {
  declare function exports(
    compiler: any,
    config: WebpackDevConfig,
  ): Function;
}
