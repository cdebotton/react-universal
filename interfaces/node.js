declare class Koa {
  use(middleware: Function): Function;
}

declare module koa {
  declare function exports(): Koa;
}
