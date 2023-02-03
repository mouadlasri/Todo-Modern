import { React, useState, useEffect } from "react";
import { useTaskState, useTaskDispatch } from "../../../context/TaskContext";

import { Task } from "../Task";

import "./TaskList.css";

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
              <Task task={task} />
            </div>
          );
        }
      })}
    </div>
  );
}
