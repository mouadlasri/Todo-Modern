import React, { useState } from "react";

import { useTaskDispatch } from "../../context/TaskContext";

export function AddTask() {
  const [input, setInput] = useState("");

  const dispatch = useTaskDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "add-task", payload: { name: input } });
    setInput("");
  }

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      </form>
    </div>
  );
}
