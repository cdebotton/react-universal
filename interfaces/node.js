declare class Koa {
  keys: Array<string>;
  use(middleware: Function): Generator;
  listen(port:number): void;
}

declare module koa {
  declare function exports(): Koa;
}

declare module 'koa-jade' {
  declare class Jade {
    middleware: Function,
  }

  declare function exports(config: ?{}): Jade;
}

declare module thenify {
  declare function exports(cb: Function): Function;
}

type ProxyConfig = {
  host: string;
  match?: RegExp;
};

declare module 'koa-proxy' {
  declare function exports(config: ProxyConfig): Function;
}

declare module 'koa-mount' {
  declare function exports(
    path?: string,
    proxy: Function
  ): Function;
}

declare module 'koa-static' {
  declare function exports(
    path: string
  ): Function;
}

declare module 'koa-compress' {
  declare function exports(): Function;
}

declare class Express {
  keys: Array<string>;
  use(middleware: Function): Function;
  listen(port:number): void;
}

declare module express {
  declare function exports(): Express;
}

type GraphQLConfig = {
  schema: {};
  pretty?: boolean;
  rootValue?: {};
};

declare module 'express-graphql' {
  declare function exports(config: GraphQLConfig): Function;
}

declare module 'history' {
  declare function createLocation(path: string): any;
}

type MatchConfig = {
  routes: any;
  location: any;
}

type MatchError = {
  message: string;
}

type RedirectLocation = {
  pathname: string;
  search?: string;
}

declare function MatchCallback(
  error: ?MatchError,
  redirectLocation: ?RedirectLocation,
  renderProps: ?{}
): void;

declare function RoutingContext(opts: ?{}): ReactComponent;

declare module 'react-router' {
  declare function match(opts: MatchConfig, callback: MatchCallback): void;
  declare var RoutingContext: RoutingContext;
  declare var Router: any;
}

declare module 'react-dom/server' {
  declare function renderToString(context: RoutingContext): string;
}

declare module 'history/lib/createBrowserHistory' {
  declare function exports(): {};
}

declare module 'react-dom' {
  declare function render(
    element: ReactElement,
    target: any
  ): any;
}
