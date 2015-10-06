/* @flow */

type StateObject = {
  counter: number;
};

type ActionType = {
  type: string;
};

const initialState: StateObject = {
  counter: 0,
};

export default function app(
  state: StateObject = initialState,
  action: ActionType
): StateObject {
  switch (action.type) {
  default:
    return state;
  }
}
