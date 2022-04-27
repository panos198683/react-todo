import React, { useState } from "react";

const TodoEdit = (props) => {
  const [editInput, setEditInput] = useState(props.todo.title);

  const deleteHandler = (e) => {
    e.preventDefault();
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };

  const SaveHandler = (e) => {
    e.preventDefault();
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            title: editInput,
            editMode: false,
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
  const InputHandler = (e) => {
    // this.setState({ editInput: e.target.value });
    setEditInput(e.target.value);
  };

  return (
    <li
      className={`todo-collection__item ${
        props.todo.completed ? "completed" : ""
      }`}
    >
      <input onChange={InputHandler} value={editInput} className="newInput" />
      <i className="button saveChange button--save" onClick={SaveHandler}>
        save
      </i>
      <i
        className="fas fa-trash button button--delete"
        onClick={deleteHandler}
      ></i>
      <i onClick={editHandler} className="fas fa-edit button button--edit"></i>
    </li>
  );
};
export default TodoEdit;
