import {
  GRAPHQL_REQUEST,
  GRAPHQL_SUCCESS,
  GRAPHQL_FAILURE
} from "../constants/actionTypes";

export function query(query, params) {
  return {
    type: GRAPHQL_REQUEST,
    responseTypes: [GRAPHQL_SUCCESS, GRAPHQL_FAILURE],
    query,
    params
  };
}
