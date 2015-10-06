type GraphQLConfig = {
  schema: {};
  pretty?: boolean;
  rootValue?: {};
};

declare module 'express-graphql' {
  declare function exports(config: GraphQLConfig): Function;
}
