import { React, useEffect, useState } from "react";
import { TaskList } from "../Task/TaskList/TaskList";
import { useTaskState, useTaskDispatch } from "../../context/TaskContext";

import { AddTask } from "../Task/AddTask/AddTask";
import { CompletedTask } from "../Task/CompletedTask/CompletedTask";

import "./Home.css";

export function Home() {
  const state = useTaskState();
  const dispatch = useTaskDispatch();
  const [input, setInput] = useState("");

  const styles = {
    homeContainer: {
      marginLeft: "24px",
      marginRight: "24px",
      height: "100%",
      paddingBottom: "48px",
    },
    testContainerBorder: {
      border: "2px solid green",
    },
  };

  useEffect(() => {
    console.log(`Tasks: ${JSON.stringify(state.tasks)}`);
  }, [state]);

  return (
    <div style={styles.homeContainer} className="flex flex-col flex-1">
      <h1>Home </h1>

      {/* Three sub components */}

      {/* Component #1 - Display all notes */}
      <div>
        <TaskList />
      </div>

      {/* Component #2 - Display completed notes */}
      <div>
        <CompletedTask />
      </div>

      {/* Component #3 - Form to add a new Task */}
      <AddTask />
    </div>
  );
}
