import React, { useState } from "react";
import { useTaskDispatch } from "../../../context/TaskContext";
import "./AddTask.css";

export function AddTask({ taskType }) {
  const [input, setInput] = useState("");
  const dispatch = useTaskDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "add-task", payload: { name: input, important: taskType.important } });
    setInput("");
  }

  function changeStyleFocus() {
    // Make style as state
  }

  return (
    <div className="mt-auto">
      <div className="w-full add-task-default">
        <span className="task-checkbox">
          <svg
            class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0"
            fill={taskType.styleIconColor}
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <path
              d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z"
              fill={taskType.styleIconColor}
            ></path>
          </svg>
        </span>
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
