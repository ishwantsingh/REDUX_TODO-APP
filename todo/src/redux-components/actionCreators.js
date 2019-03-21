import uuid from "uuid";
import * as types from "./actionTypes";

export function completeTodo(id) {
  return {
    type: types.COMPLETE_TODO,
    payload: id
  };
}
export function inCompleteTodo(id) {
  return {
    type: types.IN_COMPLETE_TODO,
    payload: id
  };
}
export function addTodo(value) {
  return {
    type: types.ADD_TODO,
    payload: {
      id: uuid(),
      value,
      completed: false
    }
  };
}
