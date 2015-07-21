import http from "http";
import chai from "chai";
import sinonChai from "sinon-chai";
import ws from "../app/utils/ws-server";

chai.should();
chai.use(sinonChai);

describe("WSServer", () => {
  it("should accept connections", () => {
    const server = http.createServer();
    ws(server);
    server.listen();
  });
});
