import React from "react";
import { useRef } from "react";

const Todo = (props) => {
  const todoRef = useRef();
  const removeTodo = (e) => {
    e.preventDefault();
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    const todoItem = todoRef.current;
    todoItem.classList.add("fall");
    todoItem.addEventListener("transitionend", removeTodo);
  };
  const completedHandler = (e) => {
    e.preventDefault();
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const editHandler = (e) => {
    e.preventDefault();
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            editMode: !item.editMode,
          };
        }
        return item;
      })
    );
  };

  return (
    <li
      ref={todoRef}
      className={`todo-collection__item ${
        props.todo.completed ? "completed" : ""
      }`}
    >
      {props.todo.title}{" "}
      <i
        className="fas fa-check button button--save"
        onClick={completedHandler}
      ></i>
      <i
        className="fas fa-trash button button--delete"
        onClick={deleteHandler}
      ></i>
      <i
        onClick={editHandler}
        className={`fas fa-edit button button--edit ${
          props.todo.completed ? "hidden" : ""
        }`}
      ></i>{" "}
    </li>
  );
};
export default Todo;
