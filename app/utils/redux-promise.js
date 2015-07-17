export default (getState) => {
  return (next) => (action) => {
    const { promise, types, ...rest } = action;

    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;

    return promise
      .then((result) => next({ ...rest, ...result, type: SUCCESS }))
      .catch((error) => next({ ...rest, error, type: FAILURE }));
  };
};
