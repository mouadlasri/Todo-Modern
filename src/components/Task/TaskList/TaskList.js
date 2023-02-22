import React, { useState, useEffect } from "react";
import { useTaskState, useTaskDispatch } from "../../../context/TaskContext";

import { Task } from "../Task";

import "./TaskList.css";

export function TaskList() {
  const state = useTaskState();
  const dispatch = useTaskDispatch();
  const [countOngoingTasks, setCountOngoingTasks] = useState(0);
  const [collapsed, setCollapsed] = useState(true);

  function toggleCollapseIcon() {
    setCollapsed((collapsed) => !collapsed);
  }

  function svgIcon() {
    if (collapsed) {
      return "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z";
    } else {
      return "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z";
    }
  }

  useEffect(() => {
    // Filter the uncompleted tasks
    let ongoingTasks = state.tasks.filter((task) => task.complete === false);

    setCountOngoingTasks(ongoingTasks.length);
  }, [state.tasks]);

  return (
    <>
      {countOngoingTasks > 0 && (
        <div className="flex-1 mt-4 items-center">
          <button
            className="collapse-button px-6 py-2.5  items-center  font-medium text-xs leading-tight uppercase rounded shadow-md  transition duration-500 ease-in-out"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOngoingTasks"
            aria-expanded="false"
            aria-controls="collapseOngoingTasks"
            onClick={toggleCollapseIcon}
          >
            <span className="task-checkbox items-center">
              <svg
                class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0 transition duration-500 ease-in-out"
                fill="#2564cf"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path d={svgIcon()} fill="#2564cf"></path>
              </svg>
            </span>
            Ongoing Tasks <span className="count-completed-tasks-label">{countOngoingTasks}</span>
          </button>

          <div className="collapse" id="collapseOngoingTasks">
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
        </div>
      )}
    </>
  );
}
