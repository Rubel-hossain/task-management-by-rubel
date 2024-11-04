import { useState } from "react";
import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";
import KanbanBoard from "./KanbanBoard";
import EditTaskModal from "./EditTaskModal";
import { initialTasks } from "../data/mockTasks";
import { mockProjects } from "../data/mockProjects";
import { DropResult } from "react-beautiful-dnd";

// Define types for task and project
interface Task {
  id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Completed";
  priority: "High" | "Medium" | "Low";
  deadline?: string;
  assignedTo?: string[];
}

interface Project {
  id: string;
  name: string;
  description?: string; 
  status: "To Do" | "In Progress" | "Completed";
  progress: number; 
  team: string[];
  tasks: number; 
}

interface Filters {
  "To Do": string;
  "In Progress": string;
  "Completed": string;
}




export const ProjectManagementDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({
    "To Do": "all",
    "In Progress": "all",
    Completed: "all",
  });
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState<boolean>(false);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;
    const sourceDroppableId = result.source.droppableId as Task["status"];
    const destDroppableId = result.destination.droppableId as Task["status"];

    if (!["To Do", "In Progress", "Completed"].includes(sourceDroppableId) || !["To Do", "In Progress", "Completed"].includes(destDroppableId)) {
      return;
    }

    const tasksList = Array.from(tasks);
    const filteredSourceTasks = tasksList.filter((task) => task.status === sourceDroppableId);
    const [removed] = filteredSourceTasks.splice(sourceIndex, 1);

    const updatedTask: Task = {
      ...removed,
      status: destDroppableId,
    };

    const newTasks = tasksList.filter((task) => task.id !== removed.id);
    const destTasks = newTasks.filter((task) => task.status === destDroppableId);
    destTasks.splice(destIndex, 0, updatedTask);
    const finalTasks = [
      ...newTasks.filter((task) => task.status !== destDroppableId),
      ...destTasks,
    ];

    setTasks(finalTasks);
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsEditModalOpen(true);
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setIsEditModalOpen(false);
    setEditingTask(null);
  };

  const filteredTasks = (status: Task["status"]) => {
    return tasks
      .filter((task) => task.status === status)
      .filter((task) => {
        if (filters[status] === "all") return true;
        return task.priority === filters[status];
      })
      .filter(
        (task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Project Dashboard
          </h1>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isMobileSearchVisible={isMobileSearchVisible}
            setIsMobileSearchVisible={setIsMobileSearchVisible}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {mockProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="overflow-x-auto">
          <KanbanBoard
            tasks={tasks}
            filters={filters}
            setFilters={setFilters}
            filteredTasks={filteredTasks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleDragEnd={handleDragEnd}
          />
        </div>

        {isEditModalOpen && editingTask && (
          <EditTaskModal
            task={{ ...editingTask, deadline: editingTask.deadline ?? "" }} // Provide a default value
            onClose={() => setIsEditModalOpen(false)}
            onUpdate={handleUpdateTask}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectManagementDashboard;
