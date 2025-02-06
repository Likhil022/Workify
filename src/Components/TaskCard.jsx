import trashit from "../assets/trashit.gif";
import trash from "../assets/trash.png";
import { useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const TaskCard = ({ task, setTask }) => {
  console.log("Rendering task: ", task);
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (title) => {
    setTask({ ...task, title });
  };
  return (
    <div
      draggable
      className="z-20 flex flex-col items-center mb-4 cursor-pointer"
    >
      <div className="bg-white px-4 py-5 w-[92%] min-h-24 flex justify-between flex-col  gap-3 rounded-lg shadow-lg">
        <div className="flex justify-between px-3">
          <h4 className="text-lg font-semibold">
            {isEditing ? (
              <input
                className="px-3 py-1"
                type="text"
                maxLength={20}
                value={task.title}
                onBlur={() => setIsEditing(false)}
                onChange={(e) => handleTitleChange(e.target.value)}
              />
            ) : (
              <div className="px-0 py-0" onClick={setIsEditing(true)}>
                {task.title}
              </div>
            )}
          </h4>
          <button
            className="text-black "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="w-6 h-6"
              src={isHovered ? trashit : trash}
              alt={isHovered ? "Trash Animates" : "Trash"}
            />
          </button>
        </div>
        <div className="flex justify-between px-3">
          <p className="text-sm text-gray-600 border-[1px] rounded-2xl px-3 py-1 border-gray-500 ">
            {task.priority}
          </p>
          <p className="text-sm text-gray-600 font-medium text-center pt-2">
            <span className="font-semibold">Due Date:</span> {task.DueDate}
          </p>
        </div>
      </div>
    </div>
  );
};
TaskCard.propTypes = {
  Task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    DueDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskCard;
