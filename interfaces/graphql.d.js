declare module graphql {
  declare function graphql(schema: {}, introspectionQuery?: {}): Promise;
}

declare module 'graphql/utilities' {
  declare var introspectionQuery: {};
}
