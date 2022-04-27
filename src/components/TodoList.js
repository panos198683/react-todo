import React, { Component } from "react";
import Todo from "./Todo";
import TodoEdit from "./TodoEdit";

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-collection">
        {this.props.todos.map((todo) =>
          todo.editMode ? (
            <TodoEdit
              key={todo.id}
              todos={this.props.todos}
              todo={todo}
              setTodos={this.props.setTodos}
            />
          ) : (
            <Todo
              key={todo.id}
              todos={this.props.todos}
              todo={todo}
              setTodos={this.props.setTodos}
            />
          )
        )}
      </ul>
    );
  }
}
export default TodoList;
