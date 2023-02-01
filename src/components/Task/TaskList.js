import { React, useState, useEffect } from "react";
import { useTaskState, useTaskDispatch } from "../../context/TaskContext";
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
            <div className="task-container">
              <div key={task.id} className="task-default">
                <span className="task-checkbox">
                  <svg
                    class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0"
                    fill="currentColor"
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                  >
                    <path
                      d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <button className="task-wrapper">
                  <span aria-label={task.name}>
                    {" "}
                    <span>{task.name} </span>{" "}
                  </span>
                  <div className="task-metadata-info">
                    <span className="task-metadata-info-group">
                      <span className="task-item-info-title">
                        <span>작업</span>
                      </span>
                    </span>
                  </div>
                </button>
                <div>
                  <span>
                    <svg
                      class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0"
                      fill="currentColor"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                    >
                      <path
                        d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <path
                      d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z"
                      fill="currentColor"
                    ></path>
                  </span>
                </div>
                {/* <button onClick={() => dispatch({ type: "delete-task", payload: { id: task.id } })}>
                Delete
              </button>
              <button onClick={() => dispatch({ type: "complete-task", payload: { id: task.id } })}>
                Complete
              </button> */}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
