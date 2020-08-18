import React, { useState, useEffect } from "react";
import "./App.css";
import { getTodos } from "./api/todos";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    doFetch();
  }, []);

  return (
    <div className="App">
      {todos?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;
