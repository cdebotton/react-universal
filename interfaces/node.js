declare class Koa {
  keys: Array<string>;
  use(middleware: Function): Function;
  listen(port:number): void;
}

declare module koa {
  declare function exports(): Koa;
}

declare module 'react-dom/server' {
  declare function render(elem: any): string;
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
