import { useDroppable } from "@dnd-kit/core";

// eslint-disable-next-line react/prop-types
const Column = ({ name, children }) => {
  const getClassName = (name) => {
    return name === "TO DO"
      ? "bg-red-200"
      : name === "IN PROGRESS"
      ? "bg-yellow-200"
      : "bg-green-200";
  };
  const getBgName = (name) => {
    return name === "TO DO"
      ? "bg-red-100"
      : name === "IN PROGRESS"
      ? "bg-yellow-100"
      : "bg-green-100";
  };

  const { setNodeRef } = useDroppable({
    id: name, // Each column should be droppable
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-[33.33%] min-h-full text-center my-6 font-semibold text-2xl bg-green-100 mx-4 rounded-xl shadow-3xl relative overflow-hidden ${getBgName(
        name
      )}`}
    >
      <p className={`border-b-[1.5px] border-black py-4 ${getClassName(name)}`}>
        {name}
      </p>
      <div className="my-3">{children}</div>
    </div>
  );
};

export default Column;
