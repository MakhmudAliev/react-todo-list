import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
    }
    setTodo({ ...todo, task: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo.task} onChange={handleTaskInputChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
