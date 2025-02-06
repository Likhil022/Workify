import Column from "./Components/Column";
import TaskCard from "./Components/TaskCard";
import { useState } from "react";

function App() {
  const columnName = ["TO DO", "IN PROGRESS", "DONE"];
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      priority: "High",
      DueDate: "02 / 06 / 2025",
      status: "TO DO",
    },
    {
      id: 2,
      title: "Task 2",
      priority: "Low",
      DueDate: "02 / 06 / 2025",
      status: "IN PROGRESS",
    },
    {
      id: 3,
      title: "Task 3",
      priority: "Medium",
      DueDate: "02 / 06 / 2025",
      status: "DONE",
    },
    {
      id: 4,
      title: "Task 1",
      priority: "High",
      DueDate: "02 / 06 / 2025",
      status: "TO DO",
    },
  ]);
  return (
    <>
      <div className="h-screen w-screen bg-blue-200 text-black font-poppins flex pb-10">
        <div className="flex divide-x w-screen justify-between">
          {columnName.map((colName) => (
            <Column name={colName} key={colName}>
              {tasks
                .filter(
                  (task) => task.status.toLowerCase() === colName.toLowerCase()
                )
                .map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
            </Column>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
