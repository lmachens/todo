import React, { useState, useEffect } from "react";
import { getTodos } from "../api/todos";
import { Link } from "react-router-dom";

const waitFor = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
function Home() {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      try {
        setLoading(true);
        setError(false);
        const todos = await getTodos();
        await waitFor(1000);
        setTodos(todos);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, []);

  return (
    <div>
      <Link to="/add">Add Task</Link>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {todos?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default Home;
