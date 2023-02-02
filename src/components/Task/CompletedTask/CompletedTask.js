import React, { useState } from "react";
import { useTaskState, useTaskDispatch } from "../../../context/TaskContext";
import { Task } from "../Task";
import "./CompletedTask.css";

export function CompletedTask() {
  const state = useTaskState();
  const dispatch = useTaskDispatch();

  return (
    <div>
      <h1>Completed Tasks</h1>
      {state.tasks.map((task) => {
        if (task.complete) {
          return <Task task={task} />;
        }
      })}
    </div>
  );
}
