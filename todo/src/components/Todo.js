import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.todo.value}</h1>
          <div>{`Completed: ${this.props.todo.completed}`}</div>
        </div>
        <div>
          <button onClick={() => this.props.completeTodo()}>Complete It</button>
          <button onClick={() => this.props.inCompleteTodo()}>
            In-complete It
          </button>
        </div>
      </div>
    );
  }
}
