import { useState } from "react";
import { Task } from "./Task";

//===============================================================
export function TaskList({ taskList, className }) {
  const [isEdit, setIsEditing] = useState(0);

  return (
    <ul className="flex flex-col gap-4">
      {taskList.map((task) => (
        <Task
          task={task}
          className={className}
          key={task.id}
          isEdit={isEdit}
          setIsEditing={setIsEditing}
        ></Task>
      ))}
    </ul>
  );
}
