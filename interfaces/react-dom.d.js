declare module 'react-dom/server' {
  declare function renderToString(context: RoutingContext): string;
}

declare module 'react-dom' {
  declare function render(
    element: ReactElement,
    target: any
  ): any;
}
