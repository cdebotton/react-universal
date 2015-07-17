import { UP, DOWN } from "../constants/actionTypes";

export function up() {
  return { type: UP };
}

export function down() {
  return { type: DOWN };
}
