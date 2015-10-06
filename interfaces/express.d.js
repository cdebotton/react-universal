declare class Express {
  keys: Array<string>;
  use(middleware: Function): Function;
  listen(port:number): void;
}

declare module express {
  declare function exports(): Express;
}
