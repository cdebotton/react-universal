import * as actionTypes from "../constants/actionTypes";
import SocketAction from "../utils/SocketAction";

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
  const {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
  } = actionTypes;

  return new SocketAction(CREATE_USER_SUCCESS, {
    responseTypes: [CREATE_USER_SUCCESS, CREATE_USER_FAILURE],
    query: `mutation createUser(
      $email: String!,
      $firstName: String!,
      $lastName: String!,
      $password: String!,
      $confirmPasswod: String!
    ) {
      createUser(
        email: $email,
        firstName: $firstName,
        lastName: $lastName,
        password: $password,
        confirmPasswod: $confirmPasswod
      ) {
        id,
        email,
        firstName,
        lastName
      }
    }`
  });
}

export function getUsers() {
  const {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
  } = actionTypes;

  return new SocketAction(GET_USERS_REQUEST, {
    responseTypes: [GET_USERS_SUCCESS, GET_USERS_FAILURE],
    query: `{
      users {
        id,
        email
      }
    }`
  });
}

export function getUser() {

}

export function updateUser() {

}

export function destroyUser() {

}
