declare module 'redux-devtools' {
  declare function devTools(): Function;
  declare function persistState(match: any): Function;
}

declare module 'redux-devtools/lib/react' {
  declare var LogMonitor: Function;
  declare var DevTools: Function;
  declare var DebugPanel: Function;
}
