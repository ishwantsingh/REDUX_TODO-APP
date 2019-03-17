import React, { Component } from "react";

export default class Todo extends Component {
  changeStatus = () => {
    console.log(this.props.todo.completed);
    if (!this.props.todo.completed) {
      this.props.completeTodo(this.props.id);
    } else if (this.props.todo.completed) {
      this.props.inCompleteTodo(this.props.id);
    }
  };
  render() {
    return (
      <div>
        <div onClick={this.changeStatus}>
          <h3>{this.props.todo.value}</h3>
          <div>{`Completed: ${this.props.todo.completed}`}</div>
        </div>
      </div>
    );
  }
}
