import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddTask() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Submitted" + title + " " + author);
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
        <input type="submit" value="Add task" />
      </form>
      <Link to="/">Tasks</Link>
    </>
  );
}

export default AddTask;
