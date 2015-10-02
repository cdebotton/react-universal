declare class Koa {
  use(middleware: Function): Function;
  listen(port: number): void;
}

declare class Express {
  use(middleware: Function): Function;
  listen(port: number): void;
}

declare module koa {
  declare function exports(): Koa;
}

declare module express {
  declare function exports(): Express;
}

type GraphQLConfig = {
  schema: {};
  pretty?: boolean;
  rootValue?: {};
}

declare module 'express-graphql' {
  declare function exports(config: GraphQLConfig): Function;
}
