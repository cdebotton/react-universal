declare module graphql {
  declare function graphql(schema: {}, introspectionQuery?: {}): Promise;
}

declare module 'graphql/utils' {
  declare var introspectionQuery: {};
}
