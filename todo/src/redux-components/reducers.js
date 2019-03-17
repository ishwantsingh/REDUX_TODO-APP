import * as types from "./actionTypes";
import todos from "../state/dummyTodos";

export default function todo(state = todos, action) {
  switch (action.type) {
    case types.COMPLETE_TODO:
      const todoIndex = state.findIndex(item => item.id === action.payload);
      return (state[todoIndex].completed = true);
    case types.IN_COMPLETE_TODO:
      const todoIndex2 = state.findIndex(item => item.id === action.payload);
      return (state[todoIndex2].completed = true);
    case types.ADD_TODO:
      return state.concat(action.payload);
    default:
      return state;
  }
}
