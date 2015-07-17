export default class SocketAction {
  constructor(type, payload = {}) {
    const keys = Object.keys(payload);

    this.assignReadOnlyProperty("type", type);
    keys.forEach((key) => this.assignReadOnlyProperty(key, payload[key]));

    Object.freeze(this);
  }

  assignReadOnlyProperty(key, value) {
    const writable = false;
    const enumerable = true;

    Object.defineProperty(this, key, {value, writable, enumerable});
  }
}
