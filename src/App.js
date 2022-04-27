
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText,setInputText]= useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      saveLocalStorage();
    }
  }, [todos]);

  const getLocalTodos = () => {
    if (localStorage.getItem("localtodos") === null) {
      console.log("null");
    } else {
      console.log(localStorage.getItem("localtodos"));
      let lTodos = JSON.parse(localStorage.getItem("localtodos"));
      setTodos(lTodos);
    }
  };

  const saveLocalStorage = () => {
    localStorage.setItem("localtodos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <main className="wrapper">
        <nav className="navbar">
          <ul className="nav">
            <li className="nav__item">TODO</li>
          </ul>
        </nav>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
        <TodoList setTodos={setTodos} todos={todos} />
      </main>
    </div>
  );
};
export default App;
