import { React, useState } from "react";
import { useTaskDispatch } from "../../context/TaskContext";

import "./Task.css";

export function Task({ task }) {
  const dispatch = useTaskDispatch();
  const [taskContainerIsHovered, setTaskContainerIsHovered] = useState(false);
  const [svgIsHovered, setSvgIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // handling when user hovers over a task item
  function handleTaskContainerHover() {
    setTaskContainerIsHovered((taskContainerIsHovered) => !taskContainerIsHovered);
  }

  // handling when user hovers over checkmark icon
  function handleSvgHover() {
    setSvgIsHovered((svgIsHovered) => !svgIsHovered);
  }

  // handling when user clicks on task
  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  function svgIcon() {
    if (task.complete) {
      return "M10 2a8 8 0 110 16 8 8 0 010-16zm3.36 5.65a.5.5 0 00-.64-.06l-.07.06L9 11.3 7.35 9.65l-.07-.06a.5.5 0 00-.7.7l.07.07 2 2 .07.06c.17.11.4.11.56 0l.07-.06 4-4 .07-.08a.5.5 0 00-.06-.63z";
    } else {
      if (svgIsHovered) {
        return "M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z";
      } else if (!svgIsHovered) {
        return "M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z";
      }
    }
  }

  const styles = {
    taskDefault: {
      backgroundColor: isClicked ? "#eff6fc" : "",
    },
    taskCompleteText: {
      textDecoration: task.complete ? "line-through" : "none",
    },
  };

  return (
    <div className={`task-container`} onClick={handleClick}>
      <div
        key={task.id}
        className={`task-default ${
          taskContainerIsHovered ? "task-item-hovered" : "task-item-not-hovered"
        }`}
        style={styles.taskDefault}
        onMouseEnter={handleTaskContainerHover}
        onMouseLeave={handleTaskContainerHover}
      >
        <span
          className="task-checkbox"
          onClick={() => dispatch({ type: "complete-task", payload: { id: task.id } })}
        >
          <svg
            class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0"
            fill="#2564cf"
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            onMouseEnter={handleSvgHover}
            onMouseLeave={handleSvgHover}
          >
            <path d={svgIcon()} fill="#2564cf"></path>
          </svg>
        </span>
        <button className="task-wrapper">
          <span aria-label={task.name} style={styles.taskCompleteText}>
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
