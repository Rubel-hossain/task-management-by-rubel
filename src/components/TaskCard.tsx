import { Draggable } from "react-beautiful-dnd";
import { Task } from "../types/Task";
import { FiCalendar, FiFlag } from "react-icons/fi";

interface TaskCardProps {
  task: Task;
  index: number;
}

export const TaskCard = ({ task, index }: TaskCardProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white p-3 md:p-4 rounded-lg shadow-sm mb-3 ${
            snapshot.isDragging ? "shadow-lg border-2 border-blue-500" : ""
          }`}
        >
          <h4 className="font-medium truncate">{task.title}</h4>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{task.description}</p>
          <div className="mt-4 flex items-center gap-2">
            <FiCalendar className="text-gray-600" />
            <span className="text-sm">{task.deadline}</span>
            <FiFlag
              className={`w-4 h-4 ${
                task.priority === "High"
                  ? "text-red-500"
                  : task.priority === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            />
            <span className="text-sm">{task.priority}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
