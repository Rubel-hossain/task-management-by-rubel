import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import {
  FiEdit2,
  FiTrash2,
  FiCalendar,
  FiFlag,
  FiFilter,
} from "react-icons/fi";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Completed";
  priority: "High" | "Medium" | "Low";
  deadline?: string;
  assignedTo?: string[];
}

interface Filters {
  "To Do": string;
  "In Progress": string;
  Completed: string;
}

interface KanbanBoardProps {
  tasks: Task[];
  filters: Filters;
  setFilters: (filters: Filters) => void;
  filteredTasks: (status: Task["status"]) => Task[];
  handleEdit: (task: Task) => void;
  handleDelete: (taskId: string) => void;
  handleDragEnd: (result: DropResult) => void;
}

export const KanbanBoard = ({
  filters,
  setFilters,
  filteredTasks,
  handleEdit,
  handleDelete,
  handleDragEnd,
}: KanbanBoardProps) => (
  <DragDropContext onDragEnd={handleDragEnd}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto">
      {["To Do", "In Progress", "Completed"].map((column) => (
        <Droppable key={column} droppableId={column}>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`bg-gray-100 p-3 md:p-4 rounded-lg min-w-[280px] md:min-w-0 ${
                snapshot.isDraggingOver ? "bg-gray-200" : ""
              }`}
            >
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h3 className="font-semibold">{column}</h3>
                <div className="flex items-center gap-2">
                  <FiFilter className="text-gray-500" />
                  <select
                    value={filters[column as keyof Filters]}
                    onChange={(e) =>
                      setFilters({ ...filters, [column]: e.target.value })
                    }
                    className="text-sm border rounded-md px-2 py-1"
                  >
                    <option value="all">All Priorities</option>
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                </div>
              </div>
              {filteredTasks(column as Task["status"]).map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`bg-white p-3 md:p-4 rounded-lg shadow-sm mb-3 ${
                        snapshot.isDragging
                          ? "shadow-lg border-2 border-blue-500"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{task.title}</h4>
                          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            {task.description}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleEdit(task)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <FiEdit2 />
                          </button>
                          <button
                            onClick={() => handleDelete(task.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="flex items-center gap-1 text-gray-600">
                            <FiCalendar className="w-4 h-4" />
                            <span className="text-sm">{task.deadline}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiFlag
                              className={`w-4 h-4 ${
                                task.priority === "High"
                                  ? "text-red-500"
                                  : task.priority === "Medium"
                                  ? "text-yellow-500"
                                  : "text-green-500"
                              }`}
                            />
                            <span className="text-sm text-gray-600">
                              {task.priority}
                            </span>
                          </div>
                        </div>
                        <div className="flex -space-x-2">
                          {task.assignedTo?.map((member, index) => (
                            <img
                              key={index}
                              src={`https://${member}`}
                              alt="Assigned to"
                              className="w-6 h-6 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </div>
  </DragDropContext>
);

export default KanbanBoard;
