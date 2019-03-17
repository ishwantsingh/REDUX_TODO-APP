import { combineReducers } from "redux";
import uuid from "uuid";
import * as types from "./actionTypes";

todos = [
  { id: uuid(), value: "Walk park in the dog", completed: false },
  { id: uuid(), value: "Eat lasagna", completed: false },
  { id: uuid(), value: "complete redux todo", completed: false }
];

function todo(state = todos, action) {
  switch (action.type) {
    case types.COMPLETE_TODO:
      todoIndex = state.findIndex(item => item.id == action.payload);
      return (state[todoIndex].completed = true);
    case types.IN_COMPLETE_TODO:
      todoIndex = state.findIndex(item => item.id == action.payload);
      return (state[todoIndex].completed = true);
    case types.ADD_TODO:
      return state.concat(action.payload);
    default:
      return state;
  }
}
