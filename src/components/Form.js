import React from "react";

const Form = (props) => {
  const inputHandler = (e) => {
    props.setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
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

    props.setTodos([
      ...props.todos,
      {
        title: props.inputText,
        editinput: props.inputText,
        editMode: false,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    props.setInputText("");
  };

  const submitApiHandler = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        let apidata = data.slice(0, 10);

        props.setTodos([...props.todos, ...apidata]);
      });
  };

  return (
    <form className="todo-form">
      <div className="input-field">
        <input
          value={props.inputText}
          type="text"
          id="input--add"
          className="input "
          onChange={inputHandler}
          placeholder="e.g. Go to the gym"
        />
      </div>
      <div className="buttonwr">
        <input
          type="submit"
          id="todoBtn"
          onClick={submitTodoHandler}
          className="button button--add"
          value="Add"
        />
        <button
          onClick={submitApiHandler}
          className="button button--add"
          id="apiBtn"
        >
          Todos from API
        </button>
      </div>
    </form>
  );
};
export default Form;
