import {Server as http} from "http";
import chai from "chai";
import sinonChai from "sinon-chai";
import io from "socket.io";
import ioc from "socket.io-client";

chai.should();
chai.use(sinonChai);

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

describe("WSServer", () => {
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
});
