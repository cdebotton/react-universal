/* @flow */

declare module debug {
  declare function exports(
    name: string
  ): (msg: string, ...parts: Array<any>) => string;
}
