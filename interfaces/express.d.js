type express = {
  listen: (
    port: ?number | ?string | ?Function,
    host: ?string | ?Function,
    callback: ?Function,
  ) => any;
  use: (...middleware: Array<Function>) => any;
};

declare class ExpressRequest {
  url: string;
  body: {[key: string]: any};
  header: {[key: string]: any};
  query: {[key: string]: any};
}

declare module express {
  declare function exports(): express;
}
