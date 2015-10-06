declare module 'koa-mount' {
  declare function exports(
    path?: string,
    proxy: Function
  ): Function;
}
