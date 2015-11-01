type express = {
  listen: (
    port: ?number | ?string | ?Function,
    host: ?string | ?Function,
    callback: ?Function,
  ) => any;
  use: (...middleware: Array<Function>) => any;
};

declare module express {
  declare function exports(): express;
}
