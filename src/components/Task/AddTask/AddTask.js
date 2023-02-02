import React, { useState } from "react";
import "./AddTask.css";
import { useTaskDispatch } from "../../../context/TaskContext";

export function AddTask() {
  const [input, setInput] = useState("");

  const dispatch = useTaskDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "add-task", payload: { name: input } });
    setInput("");
  }

  function changeStyleFocus() {
    // Make style as state
  }

  return (
    <div className="mt-auto">
      <div className="w-full add-task-default">
        {/* <h1>Add Task</h1> */}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <input
            type="text"
            value={input}
            placeholder="add task"
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => changeStyleFocus()}
          ></input>
        </form>
      </div>
    </div>
  );
}
