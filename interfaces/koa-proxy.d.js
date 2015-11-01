/* @flow */

type ProxyConfig = {
  host: string;
};

declare module 'koa-proxy' {
  declare function exports(config: ProxyConfig): Generator;
}
