/* @flow */

import { compose, createStore } from 'redux';
import { devTools } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let createStoreWithMiddleware: ?Function;

if (__DEBUG__) {
  createStoreWithMiddleware = compose(devTools(), thunk)(createStore);
} else {
  createStoreWithMiddleware = createStore;
}

export function configureStore(initialState: ?{}): Function {
  if (!createStoreWithMiddleware) {
    throw new Error('No store creator configured.');
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
