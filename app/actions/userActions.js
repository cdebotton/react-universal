import * as actionTypes from "../constants/actionTypes";

export function initializeUser(email) {
  const {INITIALIZE_USER} = actionTypes;

  return {
    type: INITIALIZE_USER,
    email
  };
}

export function cancelInitializeUser() {
  const {CANCEL_INITIALIZE_USER} = actionTypes;

  return {
    type: CANCEL_INITIALIZE_USER
  };
}

export function createUser() {

}

export function getUsers() {

}

export function getUser() {

}

export function updateUser() {

}

export function destroyUser() {

}
