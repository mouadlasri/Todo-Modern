import { React, useState, useEffect } from "react";
import { useTaskState, useTaskDispatch } from "../../context/TaskContext";

export function TaskList() {
  const state = useTaskState();
  const dispatch = useTaskDispatch();

  // Have the state and all functions that modify the state
  // Pass it to each task component
  return (
    <div>
      {state.tasks.map((task) => {
        if (!task.complete) {
          return (
            <div key={task.id}>
              {task.name}
              <button onClick={() => dispatch({ type: "delete-task", payload: { id: task.id } })}>
                Delete
              </button>
              <button onClick={() => dispatch({ type: "complete-task", payload: { id: task.id } })}>
                Complete
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}
