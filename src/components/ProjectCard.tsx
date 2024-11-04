interface Project {
  name: string;
  status: "To Do" | "In Progress" | "Completed";
  progress: number;
  team: string[]; // Array of team member image URLs
  tasks: number;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800">{project.name}</h3>
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          project.status === "In Progress"
            ? "bg-blue-100 text-blue-800"
            : project.status === "Completed"
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {project.status}
      </span>
    </div>
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Progress</span>
        <span className="text-gray-800 font-medium">{project.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`rounded-full h-2 ${
            project.progress === 100 ? "bg-green-600" : "bg-blue-600"
          }`}
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex -space-x-2">
        {project.team.map((member, index) => (
          <img
            key={index}
            src={`https://${member}`}
            alt="Team member"
            className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white"
          />
        ))}
      </div>
      <span className="text-gray-600 text-sm">{project.tasks} tasks</span>
    </div>
  </div>
);

export default ProjectCard;
