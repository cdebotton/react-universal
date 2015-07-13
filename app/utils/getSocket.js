import WebSocket from "ws";

const TIMEOUT = 10000;

function timeout(reject) {
  setTimeout(() => {
    reject(new Error("WebSocket connection timeout."));
  }, TIMEOUT);
}

export default () => {
  if (process.env.BROWSER) {
    let ws = new WebSocket("ws://localhost:8081", {
      protocolVersion: 8,
      origin: "http://localhost"
    });

    return new Promise((resolve, reject) {
      timeout(reject);

      try {
        ws.on("open", () => {
          resolve(ws);
        });
      }
      catch (ex) {
        reject(ex);
      }
    });
  }
  else {
    let ws = new WebSocket.Server({ port: 8081 });
    ws.broadcast = (data) => ws.clients.forEach((client) => client.send(data));

    return new Promise((resolve, reject) => {
      timeout(reject);

      try {
        ws.on("connection", () => {
          resolve(ws);
        });
      }
      catch (ex) {
        reject(ex);
      }
    });
  }
};
