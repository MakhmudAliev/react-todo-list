import React from "react";

function Todo({ todo, removeTodo, toggleComplete }) {
  const handleRemoveButton = () => {
    removeTodo(todo.id);
  };

  const handleToggleItem = () => {
    toggleComplete(todo.id);
  };

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onChange={handleToggleItem} />
      <li
        style={{
          listStyle: "none",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemoveButton}>x</button>
    </div>
  );
}

export default Todo;
