type ProxyConfig = {
  host: string;
  match?: RegExp;
};

declare module 'koa-proxy' {
  declare function exports(config: ProxyConfig): Function;
}
