export interface Task {
    id: string;
    title: string;
    description: string;
    status: "To Do" | "In Progress" | "Completed";
    priority: "High" | "Medium" | "Low";
    deadline: string;
    assignedTo: string[];
  }
  