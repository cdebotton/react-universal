declare module 'redux' {
  declare function applyMiddleware(
    ...middleware: Array<Function>
  ): Function;
  declare function combineReducers(
    reducers: any
  ): Function;
  declare function compose(...middleware: Array<Function>): Function;
  declare function createStore(rootReducer: Function, initialState: ?{}): Function;
}

declare module 'redux-devtools' {
  declare function devTools(): Function;
}

declare module 'redux-thunk' {
  declare function exports(): Function;
}

declare module 'react-redux' {
  declare var Provider: Function;
}
