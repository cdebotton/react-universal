import { UP, DOWN } from "../constants/ActionTypes";

export function up() {
  return { type: UP };
}

export function down() {
  return { type: DOWN };
}
