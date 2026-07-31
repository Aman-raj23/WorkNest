import React from "react";
import TaskCard from "./TaskCard";

function TaskBoard({ tasks }) {
  const columns = ["To Do", "In Progress", "In Review", "Completed"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
      {columns.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col);
        return (
          <div
            key={col}
            className="bg-slate-100/70 p-4 rounded-3xl border border-slate-200/80 space-y-3 min-h-[400px]"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-800">{col}</span>
                <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">
                  {colTasks.length}
                </span>
              </div>
            </div>

            {/* Task Cards List */}
            <div className="space-y-3">
              {colTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskBoard;
