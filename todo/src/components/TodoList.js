import React from "react";
import Todo from "./Todo";
import {
  completeTodo,
  inCompleteTodo
} from "../redux-components/actionCreators";

import { connect } from "react-redux";

export class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h1>My Todos:</h1>
        <div>
          {/* {console.log(this.props)} */}
          {this.props.todos.map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo}
              completeTodo={this.props.completeTodo}
              inCompleteTodo={this.props.inCompleteTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return { todos: state };
}
export default connect(
  mapStateToProps,
  { completeTodo, inCompleteTodo }
)(TodoList);
