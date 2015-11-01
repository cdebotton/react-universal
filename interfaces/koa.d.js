type Koa = {
  listen: (
    port: ?number | ?string | ?Function,
    host: ?string | ?Function,
    callback: ?Function,
  ) => any;
  use: (...middleware: Array<Generator|Function>) => any;
};

declare module koa {
  declare function exports(): Koa;
}
