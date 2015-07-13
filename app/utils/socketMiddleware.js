import getSocket from "./getSocket";

export default async (getState) => {
  const socket = await getSocket();

  return (next) => (action) => {
    const { emit, broadcast, ...rest } = action;

    next(rest);

    if (emit) {
      socket.send(
        typeof emit === "function" ?
        emit(getState) :
        emit
      );
    }

    if (broadcast) {
      socket.broadcast(
        typeof emit === "function" ?
          broadcast(getState) :
          emit
      );
    }
  };
};
