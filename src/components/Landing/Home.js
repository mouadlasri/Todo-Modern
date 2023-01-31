import { React, useEffect, useState } from "react";
import { TaskList } from "../Task/TaskList";
import { useTaskState, useTaskDispatch } from "../../context/TaskContext";

import { AddTask } from "../Task/AddTask";
import { CompletedTask } from "../Task/CompletedTask";

export function Home() {
  const state = useTaskState();
  const dispatch = useTaskDispatch();
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`Tasks: ${JSON.stringify(state.tasks)}`);
  }, [state]);

  return (
    <div>
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
      <div>
        <AddTask />
      </div>
    </div>
  );
}
