/* @flow */

import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import {
  devTools,
  persistState,
} from 'redux-devtools';

import thunk from 'redux-thunk';
import * as reducers from '../reducers';

let createStoreWithMiddleware: ?Function;
let rootReducer: ?Function;

export function configureStore(initialState: ?{}): Function {
  if (__DEBUG__ && __CLIENT__) {
    createStoreWithMiddleware = compose(
      devTools(),
      applyMiddleware(thunk),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
  } else {
    createStoreWithMiddleware = createStore;
  }

  rootReducer = combineReducers(reducers);
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = combineReducers(require('../reducers/index'));
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
