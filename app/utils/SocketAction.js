export default class SocketAction {
  constructor(type, payload = {}) {
    Object.defineProperty(this, "type", {
      value: type,
      writable: false,
      enumerable: true
    });

    Object.keys(payload).forEach((key) => {
      Object.defineProperty(this, key, {
        value: payload[key],
        writable: false,
        enumerable: true
      });
    });

    Object.freeze(this);
  }
}
