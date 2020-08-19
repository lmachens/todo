import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postTodo } from "../api/todos";

function AddTask() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    const todo = {
      title,
      author,
      createdAt: Date.now(),
    };
    await postTodo(todo);

    setTitle("");
    setAuthor("");
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Author:
          <input value={author} onChange={handleAuthorChange} />
        </label>
        <input
          type="submit"
          value="Add task"
          disabled={!title || !author || loading}
        />
      </form>
      <Link to="/">Tasks</Link>
    </>
  );
}

export default AddTask;
