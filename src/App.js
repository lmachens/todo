import React, { useState, useEffect } from "react";
import "./App.css";
import { getTodos } from "./api/todos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Router>
      <Switch>
        <Route path="/add">
          <div>ADD TASK</div>
        </Route>
        <Route path="/">
          <div>All Tasks</div>
        </Route>
      </Switch>
      <div className="App">
        {todos?.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </Router>
  );
}

export default App;
