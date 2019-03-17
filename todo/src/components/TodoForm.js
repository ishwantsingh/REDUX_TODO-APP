import React from "react";
import { addTodo } from "../redux-components/actionCreators";

import { connect } from "react-redux";

export class TodoForm extends React.Component {
  todoRef = React.createRef();

  onAddTodo = () => {
    const todoRef = this.todoRef.current.value;
    this.props.addTodo(todoRef);
    this.todoRef.current.value = "";
  };
  render() {
    return (
      <div>
        <h1>ADD A TODO:</h1>
        <div>
          <input placeholder="write todo" ref={this.todoRef} />
          <button onClick={this.onAddTodo}>Add Todo</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state };
}
export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
