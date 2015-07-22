import {Server as http} from "http";
import chai from "chai";
import sinonChai from "sinon-chai";
import io from "socket.io";
import ioc from "socket.io-client";
import socketMiddleware from "../app/utils/redux-socket";
import {createStore, applyMiddleware, combineReducers} from "redux";

chai.should();
chai.use(sinonChai);

const reducers = {
  test: function(state={}, action) {
    return state;
  }
};
const reducer = combineReducers(reducers);

const client = (srv, nsp, opts) => {
  if (typeof nsp === "object") {
    opts = nsp;
    nsp = null;
  }
  let addr = srv.address();
  if (!addr) addr = srv.listen().address();

  const url = `ws://localhost:${addr.port + (nsp || "")}`;

  return ioc(url, opts);
};

describe("Redux Socket", () => {
  it("should accept connections", (done) => {
    const srv = http();
    const sio = io(srv);

    sio.on("connection", (socket) => {
      done();
    });

    srv.listen(() => {
      const socket = client(srv);
    });
  });

  it("should send action through socket", (done) => {
    const srv = http();
    const sio = io(srv);
    const createWithMiddleware = applyMiddleware(
      socketMiddleware(client(srv))
    )(createStore);
    const store = createWithMiddleware(reducer);
    const {dispatch} = store;
    const ACTION_TYPE = "TEST_ACTION";

    sio.on(ACTION_TYPE, (message) => {
      message.should.be("Hello");
      done();
    });

    dispatch({
      type: ACTION_TYPE,
      message: "Hello"
    });
  });
});
