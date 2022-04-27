import React, { Component } from "react";

import TodoList from "./TodoList";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  inputHandler = (e) => {
    this.props.setInputText(e.target.value);
  };
  submitTodoHandler = (e) => {
    e.preventDefault();
    const inputCheck = document.getElementById("input--add");
    if (inputCheck.value == "") {
      inputCheck.classList.add("shake-horizontal");
      inputCheck.classList.add("inputshake");
      inputCheck.placeholder = "Input can't be empty";

      setTimeout(() => {
        inputCheck.classList.remove("shake-horizontal");
        inputCheck.placeholder = "e.g. Go to the gym";
      }, 1500);

      inputCheck.classList.remove("inputshake");

      return;
    }

    this.props.setTodos([
      ...this.props.todos,
      {
        title: this.props.inputText,
        editinput: this.props.inputText,
        editMode: false,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    this.props.setInputText("");
  };

  submitApiHandler = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        let apidata = data.slice(0, 10);

        this.props.setTodos([...this.props.todos, ...apidata]);
      });
  };

  render() {
    return (
      <form className="todo-form">
        <div className="input-field">
          <input
            value={this.props.inputText}
            type="text"
            id="input--add"
            className="input "
            onChange={this.inputHandler}
            placeholder="e.g. Go to the gym"
          />
        </div>
        <div className="buttonwr">
          <input
            type="submit"
            id="todoBtn"
            onClick={this.submitTodoHandler}
            className="button button--add"
            value="Add"
          />
          <button
            onClick={this.submitApiHandler}
            className="button button--add"
            id="apiBtn"
          >
            Todos from API
          </button>
        </div>
      </form>
    );
  }
}
export default Form;
