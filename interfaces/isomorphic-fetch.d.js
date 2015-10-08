type FetchConfig = {
  method: string;
  data: FormData;
};

declare module 'isomorphic-fetch' {
  declare function exports(
    uri: string,
    opts: FetchConfig,
  ): Promise;
}
