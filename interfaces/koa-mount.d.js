/* @flow */

declare module 'koa-mount' {
  declare function exports(
    mount: string,
    handler: Generator
  ): Generator;
}
