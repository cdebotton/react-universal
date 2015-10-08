type Color = (...parts: Array<string>) => string;

declare module 'chalk' {
  declare var green: Color;
}
