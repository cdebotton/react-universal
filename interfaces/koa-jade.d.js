/* @flow */

type JadeConfig = {
  viewPath: ?string;
};

type JadeInstance = {
  middleware: Generator;
};

declare module 'koa-jade' {
  declare function exports(config: JadeConfig): JadeInstance;
}
