export interface Project {
    id: string;
    name: string;
    status: "To Do" | "In Progress" | "Completed";
    progress: number;
    team: string[];
    tasks: number;
  }
  