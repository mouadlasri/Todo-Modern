import { React, useState, useEffect } from "react";

let list = [
  {
    id: 0,
    name: "first task",
  },
  {
    id: 1,
    id: "second task",
  },
];

export function TaskList() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    setTasks(list);
  }, []);

  // Have the state and all functions that modify the state
  // Pass it to each task component
  return (
    <>
      {list.map((task) => (
        <div>{task.name}</div>
      ))}
    </>
  );
}
