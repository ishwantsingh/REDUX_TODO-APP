import React, { Component } from "react";
import Todo from "./Todo";
import {
  completeTodo,
  inCompleteTodo
} from "../redux-components/actionCreators";

import { connect } from "react-redux";

// export class TodoList extends Component {
//   render() {
//     return (
//       <div className="todo-list">
//         <div>
//           {this.props.todos.map(todo => (
//             <Todo key={todo.id} todo={this.props.todo} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

export class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h3>My Todos</h3>
        <div>
          {this.props.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              inCompleteTodo={inCompleteTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { todos: state };
}
export default connect(
  mapStateToProps,
  { completeTodo, inCompleteTodo }
)(TodoList);
