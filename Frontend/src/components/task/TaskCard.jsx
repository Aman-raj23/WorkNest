import React from "react";

function TaskCard({ task, onToggleStatus }) {
  return (
    <div
      onClick={onToggleStatus}
      className={`bg-white p-4 rounded-2xl border transition space-y-2.5 cursor-pointer shadow-2xs hover:shadow-md ${
        task.status === "Completed" ? "opacity-60 line-through bg-slate-50 border-slate-200" : "border-slate-200/80"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[10px] text-slate-400 font-medium">
          {task.projectName}
        </span>
        <span
          className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
            task.priority === "Urgent"
              ? "bg-rose-100 text-rose-700"
              : task.priority === "High"
              ? "bg-amber-100 text-amber-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {task.priority}
        </span>
      </div>

      <p className="text-xs font-bold text-slate-800 leading-snug">{task.title}</p>

      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          {task.avatar && (
            <img
              src={task.avatar}
              alt={task.assignee}
              className="w-5 h-5 rounded-full object-cover"
            />
          )}
          <span>{task.assignee}</span>
        </div>
        <span className="text-slate-400">{task.dueDate}</span>
      </div>
    </div>
  );
}

export default TaskCard;
