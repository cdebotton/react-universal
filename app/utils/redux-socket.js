export default (socket) => {
  return ({ getState, dispatch }) => (next) => (action) => {
    const {message, type, ...rest} = action;

    if (!message) {
      return next(action);
    }

    socket.emit(type, message);
  }
};

