declare class Koa {
  keys: Array<string>;
  use(middleware: Function): Generator;
  listen(port:number): void;
}

declare module koa {
  declare function exports(): Koa;
}
