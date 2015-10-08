type MatchConfig = {
  routes: any;
  location: any;
}

type MatchError = {
  message: string;
}

type RedirectLocation = {
  pathname: string;
  search?: string;
}

declare function MatchCallback(
  error: ?MatchError,
  redirectLocation: ?RedirectLocation,
  renderProps: ?{}
): void;

declare function RoutingContext(opts: ?{}): ReactComponent;

declare module 'react-router' {
  declare function match(opts: MatchConfig, callback: MatchCallback): void;
  declare var RoutingContext: RoutingContext;
  declare var Router: any;
}
