import { composeStores, createDispatcher, createRedux } from "redux";
import thunkMiddleware from "redux/lib/middleware/thunk";
import * as reducers from "./reducers";

const store = composeStores(reducers);
const dispatcher = createDispatcher(store, (getState) => [
  thunkMiddleware(getState)
]);
const redux = createRedux(dispatcher);

export default redux;
