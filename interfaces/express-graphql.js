/* @flow */

type GraphQLConfig = {
  schema: {};
  graphiql?: bool;
  pretty?: bool;
  rootValue?: {};
};

declare module 'express-graphql' {
  declare function exports(
    config: (request: ExpressRequest) => GraphQLConfig
  ): Function;
}
