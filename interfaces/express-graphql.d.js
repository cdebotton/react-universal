type GraphQLConfig = {
  schema: {};
  pretty?: boolean;
  rootValue?: {};
};

declare function GraphQLConfigFn(request: ?{}): GraphQLConfig;

declare module 'express-graphql' {
  declare function exports(config: GraphQLConfig | GraphQLConfigFn): Function;
}
