/* @flow */

import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';

import {
  devTools,
  persistState,
} from 'redux-devtools';

import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let createStoreWithMiddleware: ?Function;

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

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
