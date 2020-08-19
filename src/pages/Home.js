import React, { useState, useEffect } from "react";
import { getTodos } from "../api/todos";

function Home() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    doFetch();
  }, []);

  return (
    <div>
      {todos?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default Home;
