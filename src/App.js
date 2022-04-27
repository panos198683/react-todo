import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect, Component } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      todos: [],
    };
  }

  componentDidMount() {
    this.getLocalTodos();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      if (this.state.todos.length > 0) {
        this.saveLocalStorage();
      }
    }
  }

  getLocalTodos = () => {
    if (localStorage.getItem("localtodos") === null) {
      console.log("null");
    } else {
      console.log(localStorage.getItem("localtodos"));
      let lTodos = JSON.parse(localStorage.getItem("localtodos"));
      this.setState({ todos: lTodos });
    }
  };
  saveLocalStorage = () => {
    localStorage.setItem("localtodos", JSON.stringify(this.state.todos));
  };
  changeTodos = (newtodos) => {
    this.setState({ todos: newtodos });
  }
  changeInput = (newinputText) => {
    this.setState({ inputText: newinputText });
  }
  render() {
    return (
      <div className="App">
        <main className="wrapper">
          <nav className="navbar">
            <ul className="nav">
              <li className="nav__item">TODO</li>
            </ul>
          </nav>
          <Form
            inputText={this.state.inputText}
            todos={this.state.todos}
            setTodos={this.changeTodos}
            setInputText={this.changeInput}
          />
          <TodoList
            setTodos={this.changeTodos}
            todos={this.state.todos}
          />
        </main>
      </div>
    );
  }
}

export default App;
