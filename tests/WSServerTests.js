import http from "http";
import chai from "chai";
import sinonChai from "sinon-chai";
import ws from "../app/utils/ws-server";
import wsClient from "ws";

chai.should();
chai.use(sinonChai);

describe("WSServer", () => {
  it("should accept connections", () => {
    const server = ws({ port: 9000 });

  });
});
