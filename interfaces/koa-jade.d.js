declare module 'koa-jade' {
  declare class Jade {
    middleware: Function,
  }

  declare function exports(config: ?{}): Jade;
}
