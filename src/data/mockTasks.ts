import { Task } from "../types/Task";

export const initialTasks: Task[] = [
  {
    id: "task-1",
    title: "Set up project repository",
    description: "Initialize the Git repository and add initial project setup files.",
    status: "To Do",
    priority: "High",
    deadline: "2024-11-10",
    assignedTo: [
      "randomuser.me/api/portraits/men/1.jpg",
      "randomuser.me/api/portraits/women/2.jpg",
    ],
  },
  {
    id: "task-2",
    title: "Create wireframes",
    description: "Design the wireframes for the homepage and dashboard.",
    status: "In Progress",
    priority: "Medium",
    deadline: "2024-11-15",
    assignedTo: [
      "randomuser.me/api/portraits/women/4.jpg",
    ],
  },
  {
    id: "task-3",
    title: "Develop login functionality",
    description: "Implement user authentication with JWT.",
    status: "In Progress",
    priority: "High",
    deadline: "2024-11-18",
    assignedTo: [
      "randomuser.me/api/portraits/men/5.jpg",
    ],
  },
  {
    id: "task-4",
    title: "Finalize UI components",
    description: "Create reusable components for buttons, forms, and modals.",
    status: "To Do",
    priority: "Low",
    deadline: "2024-11-22",
    assignedTo: [
      "randomuser.me/api/portraits/men/6.jpg",
      "randomuser.me/api/portraits/women/7.jpg",
    ],
  },
  {
    id: "task-5",
    title: "User testing and feedback",
    description: "Conduct user testing sessions and gather feedback.",
    status: "Completed",
    priority: "Medium",
    deadline: "2024-11-05",
    assignedTo: [
      "randomuser.me/api/portraits/men/8.jpg",
      "randomuser.me/api/portraits/women/9.jpg",
    ],
  },
  {
    id: "task-6",
    title: "Optimize database queries",
    description: "Review and optimize database queries for faster response times.",
    status: "To Do",
    priority: "High",
    deadline: "2024-11-25",
    assignedTo: [
      "randomuser.me/api/portraits/men/10.jpg",
    ],
  },
];
