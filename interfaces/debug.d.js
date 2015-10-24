/* @flow */

declare module "debug" {
  declare function exports(namespace: string): (
    message: string,
    ...replacements: Array<string>
  ) => void;

  declare function enable(namespaces: string): void;
  declare function disable(namespace: string): void;
  declare function enabled(namespace: string): boolean;
}
