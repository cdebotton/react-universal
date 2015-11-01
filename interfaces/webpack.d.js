/* @flow */

type WebpackConfig = {[key: string]: any};

declare module webpack {
  declare function exports(config: WebpackConfig): mixed;
}
