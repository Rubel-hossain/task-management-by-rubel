import { Project } from "../types/Project";

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    status: "In Progress",
    progress: 65,
    team: [
      "randomuser.me/api/portraits/men/1.jpg",
      "randomuser.me/api/portraits/women/2.jpg",
      "randomuser.me/api/portraits/men/3.jpg",
    ],
    tasks: 8,
  },
  {
    id: "2",
    name: "Mobile App Development",
    status: "To Do",
    progress: 0,
    team: [
      "randomuser.me/api/portraits/women/4.jpg",
      "randomuser.me/api/portraits/men/5.jpg",
    ],
    tasks: 12,
  },
  {
    id: "3",
    name: "Marketing Campaign",
    status: "Completed",
    progress: 100,
    team: [
      "randomuser.me/api/portraits/men/6.jpg",
      "randomuser.me/api/portraits/women/7.jpg",
      "randomuser.me/api/portraits/men/8.jpg",
      "randomuser.me/api/portraits/women/9.jpg",
    ],
    tasks: 15,
  },
  {
    id: "4",
    name: "Data Migration",
    status: "In Progress",
    progress: 45,
    team: [
      "randomuser.me/api/portraits/men/10.jpg",
      "randomuser.me/api/portraits/women/11.jpg",
    ],
    tasks: 20,
  },
];
