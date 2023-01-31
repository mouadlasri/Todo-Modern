import React, { useState } from "react";
import { useTaskState, useTaskDispatch } from "../../context/TaskContext";

export function CompletedTask() {
  const state = useTaskState();
  const dispatch = useTaskDispatch();

  return (
    <div>
      <h1>Completed Tasks</h1>
      {state.tasks.map((task) => {
        if (task.complete) {
          return (
            <div key={task.id}>
              <h1>{task.name}</h1>
            </div>
          );
        }
      })}
    </div>
  );
}
