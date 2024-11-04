import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import { Task } from "../types/Task";

interface KanbanColumnProps {
  status: Task["status"];
  tasks: Task[];
}

export const KanbanColumn = ({ status, tasks }: KanbanColumnProps) => {
  return (
    <Droppable droppableId={status}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`bg-gray-100 p-3 md:p-4 rounded-lg min-w-[280px] md:min-w-0 ${
            snapshot.isDraggingOver ? "bg-gray-200" : ""
          }`}
        >
          <h3 className="font-semibold mb-4">{status}</h3>
          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default KanbanColumn;
