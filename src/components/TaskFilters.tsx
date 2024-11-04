import React from "react";

interface TaskFiltersProps {
  filters: Record<"To Do" | "In Progress" | "Completed", string>;
  setFilters: React.Dispatch<
    React.SetStateAction<Record<"To Do" | "In Progress" | "Completed", string>>
  >;
}

const TaskFilters = ({ filters, setFilters }: TaskFiltersProps) => (
  <div className="flex items-center gap-2">
    {Object.keys(filters).map((status) => (
      <select
        key={status}
        value={filters[status as "To Do" | "In Progress" | "Completed"]}
        onChange={(e) => setFilters({ ...filters, [status]: e.target.value })}
        className="text-sm border rounded-md px-2 py-1"
      >
        <option value="all">All Priorities</option>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
    ))}
  </div>
);

export default TaskFilters;
