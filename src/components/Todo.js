import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.todoRef = React.createRef();
  }
  removeTodo = (e) => {
    e.preventDefault();
    this.props.setTodos(
      this.props.todos.filter((el) => el.id !== this.props.todo.id)
    );
  };
  deleteHandler = (e) => {
    e.preventDefault();
    const todoItem = this.todoRef.current;
    todoItem.classList.add("fall");
    todoItem.addEventListener("transitionend", this.removeTodo);
  };
  completedHandler = (e) => {
    e.preventDefault();
    this.props.setTodos(
      this.props.todos.map((item) => {
        if (item.id === this.props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  editHandler = (e) => {
    e.preventDefault();
    this.props.setTodos(
      this.props.todos.map((item) => {
        if (item.id === this.props.todo.id) {
          return {
            ...item,
            editMode: !item.editMode,
          };
        }
        return item;
      })
    );
  };
  render() {
    return (
      <li
        ref={this.todoRef}
        className={`todo-collection__item ${
          this.props.todo.completed ? "completed" : ""
        }`}
      >
        {this.props.todo.title}{" "}
        <i
          className="fas fa-check button button--save"
          onClick={this.completedHandler}
        ></i>
        <i
          className="fas fa-trash button button--delete"
          onClick={this.deleteHandler}
        ></i>
        <i
          onClick={this.editHandler}
          className={`fas fa-edit button button--edit ${
            this.props.todo.completed ? "hidden" : ""
          }`}
        ></i>{" "}
      </li>
    );
  }
}
export default Todo;
