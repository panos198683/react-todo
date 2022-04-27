import React, { Component } from "react";

class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editInput: this.props.todo.title,
    };
  }
  deleteHandler = (e) => {
    e.preventDefault();
    // console.log(this.props.todos);
    this.props.setTodos(
      this.props.todos.filter((el) => el.id !== this.props.todo.id)
    );
  };
  SaveHandler = (e) => {
    e.preventDefault();
    this.props.setTodos(
      this.props.todos.map((item) => {
        if (item.id === this.props.todo.id) {
          return {
            ...item,
            title: this.state.editInput,
            editMode: false,
          };
        }
        return item;
      })
    );
  };

  editHandler = (e) => {
    e.preventDefault();
    // this.props.setEditInputText(this.props.todos.text);
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
  InputHandler = (e) => {
    this.setState({ editInput: e.target.value });
  };
  render() {
    return (
      <li
        className={`todo-collection__item ${
          this.props.todo.completed ? "completed" : ""
        }`}
      >
        <input
          onChange={this.InputHandler}
          value={this.state.editInput}
          className="newInput"
        />
        <i
          className="button saveChange button--save"
          onClick={this.SaveHandler}
        >
          save
        </i>
        <i
          className="fas fa-trash button button--delete"
          onClick={this.deleteHandler}
        ></i>
        <i
          onClick={this.editHandler}
          className="fas fa-edit button button--edit"
        ></i>
      </li>
    );
  }
}
export default TodoEdit;
