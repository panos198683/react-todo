import React from "react";
import Todo from "./Todo";
import TodoEdit from "./TodoEdit";

const TodoList = (props) => {
  return (
    <ul className="todo-collection">
      {props.todos.map((todo) =>
        todo.editMode ? (
          <TodoEdit
            key={todo.id}
            todos={props.todos}
            todo={todo}
            setTodos={props.setTodos}
          />
        ) : (
          <Todo
            key={todo.id}
            todos={props.todos}
            todo={todo}
            setTodos={props.setTodos}
          />
        )
      )}
    </ul>
  );
};
export default TodoList;
