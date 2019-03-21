import * as types from "./actionTypes";
import todos from "../state/dummyTodos";

export default function todo(state = todos, action) {
  switch (action.type) {
    case types.COMPLETE_TODO:
      const todoIndex = state.findIndex(item => item.id === action.payload);
      const arrComp = [...state, (state[todoIndex].completed = true)];
      return arrComp.slice(0, arrComp.length - 1);
    case types.IN_COMPLETE_TODO:
      const todoIndex2 = state.findIndex(item => item.id === action.payload);
      const arrInComp = [...state, (state[todoIndex2].completed = false)];
      return arrInComp.slice(0, arrInComp.length - 1);
    case types.ADD_TODO:
      return state.concat(action.payload);
    default:
      return state;
  }
}
