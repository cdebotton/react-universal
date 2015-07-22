import {Server as http} from "http";
import chai from "chai";
import sinonChai from "sinon-chai";
import io from "socket.io";
import ioc from "socket.io-client";
import socketMiddleware from "../app/utils/redux-socket";
import {createStore, applyMiddleware, combineReducers} from "redux";

chai.should();
chai.use(sinonChai);

const ACTION_REQUEST = "@@redux-socket/ACTION_REQUEST";
const ACTION_SUCCESS = "@@redux-socket/ACTION_SUCCESS";
const ACTION_FAILURE = "@@redux-socket/ACTION_FAILURE";
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

    sio.on("connection", (socket) => {
      socket.on("error", (err) => {
        done(err);
      });
      socket.on(ACTION_REQUEST, (message) => {
        message.should.eql({query: "Hello"});
        done();
      });
    });

    dispatch({
      type: ACTION_REQUEST,
      responseTypes: [ACTION_SUCCESS, ACTION_FAILURE],
      query: "Hello"
    });
  });

  it("should return a promise", () => {
    const srv = http();
    const sio = io(srv);
    const createWithMiddleware = applyMiddleware(
      socketMiddleware(client(srv))
    )(createStore);
    const store = createWithMiddleware(reducer);
    const {dispatch} = store;
    const promise = dispatch({
      type: ACTION_REQUEST,
      responseTypes: [ACTION_SUCCESS, ACTION_FAILURE],
      query: `{
        users {
          id,
          email
        }
      }`
    });

    promise.then.should.be.a("Function");
  });
});
