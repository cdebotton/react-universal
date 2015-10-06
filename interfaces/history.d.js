declare module 'history' {
  declare function createLocation(path: string): any;
}

declare module 'history/lib/createBrowserHistory' {
  declare function exports(): {};
}
