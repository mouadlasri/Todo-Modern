import { React, useEffect, useState } from "react";
import { TaskList } from "../Task/TaskList";
import { useTaskState, useTaskDispatch } from "../../context/TaskContext";

export function Home() {
  const state = useTaskState();
  const dispatch = useTaskDispatch();
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "add-task", payload: { name: input } });
    setInput("");
  }

  useEffect(() => {
    console.log(`Tasks: ${JSON.stringify(state.tasks)}`);
  }, [state]);

  return (
    <div>
      <h1>Home </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      </form>
      {state.tasks.map((task) => (
        <div key={task.id}>
          {task.name}
          <button onClick={() => dispatch({ type: "delete-task", payload: { id: task.id } })}>
            Delete
          </button>
          <button onClick={() => dispatch({ type: "complete-task", payload: { id: task.id } })}>
            Complete
          </button>
        </div>
      ))}

      {/* <TaskList /> */}
    </div>
  );
}
