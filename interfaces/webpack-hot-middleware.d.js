/* @flow */

declare module 'webpack-hot-middleware' {
  declare function exports(
    compiler: any
  ): Function;
}
