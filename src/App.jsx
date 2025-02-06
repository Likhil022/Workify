// import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
// import { sortableContext, useSortable } from "@dnd-kit/sortable";

// import Column from "./Components/Column";
// import TaskCard from "./Components/TaskCard";
// import { useState } from "react";

// function App() {
//   const columnName = ["TO DO", "IN PROGRESS", "DONE"];
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       title: "Task 1",
//       priority: "High",
//       DueDate: "02 / 06 / 2025",
//       status: "TO DO",
//     },
//     {
//       id: 2,
//       title: "Task 2",
//       priority: "Low",
//       DueDate: "02 / 06 / 2025",
//       status: "IN PROGRESS",
//     },
//     {
//       id: 3,
//       title: "Task 3",
//       priority: "Medium",
//       DueDate: "02 / 06 / 2025",
//       status: "DONE",
//     },
//     {
//       id: 4,
//       title: "Task 1",
//       priority: "High",
//       DueDate: "02 / 06 / 2025",
//       status: "TO DO",
//     },
//   ]);

//   const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (over) {
//       const updatedTask = tasks.find((task) => task.id === active.id);
//       setTask({ ...updatedTask, status: over.id }); // Update task status based on the dropped column
//     }
//   };

//   const setTask = (updatedTask) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
//     );
//   };
//   return (
//     <>
//       <DndContext onDragEnd={handleDragEnd}>
//         <div className="h-screen w-screen bg-blue-200 text-black font-poppins flex pb-10">
//           <div className="flex divide-x w-screen justify-between">
//             {columnName.map((colName) => (
//               <Column name={colName} key={colName}>
//                 {tasks
//                   .filter(
//                     (task) =>
//                       task.status.toLowerCase() === colName.toLowerCase()
//                   )
//                   .map((task) => (
//                     <TaskCard key={task.id} task={task} setTask={setTask} />
//                   ))}
//               </Column>
//             ))}
//           </div>
//         </div>
//       </DndContext>
//     </>
//   );
// }

// export default App;
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import Column from "./Components/Column";
import TaskCard from "./Components/TaskCard";

function App() {
  const columnNames = ["TO DO", "IN PROGRESS", "DONE"];
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
      title: "Task 4",
      priority: "High",
      DueDate: "02 / 06 / 2025",
      status: "TO DO",
    },
  ]);

  const setTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over) {
      const updatedTask = tasks.find((task) => task.id === active.id);
      setTask({ ...updatedTask, status: over.id }); // Update task status based on the dropped column
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-screen w-screen bg-blue-200 text-black font-poppins flex pb-10">
        <div className="flex divide-x w-full justify-between">
          {columnNames.map((colName) => (
            <Column name={colName} key={colName}>
              {tasks
                .filter(
                  (task) => task.status.toLowerCase() === colName.toLowerCase()
                )
                .map((task) => (
                  <TaskCard key={task.id} task={task} setTask={setTask} />
                ))}
            </Column>
          ))}
        </div>
      </div>
    </DndContext>
  );
}

export default App;
