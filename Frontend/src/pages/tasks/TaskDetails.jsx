import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, CheckCircle2 } from "lucide-react";
import { initialTasks } from "../../utils/mockData";

function TaskDetails() {
  const { id } = useParams();
  const task = initialTasks.find((t) => t.id === Number(id)) || initialTasks[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          to="/tasks"
          className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 transition shadow-2xs"
        >
          <ArrowLeft size={18} />
        </Link>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
            {task.projectName}
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{task.title}</h1>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <User size={16} className="text-slate-400" />
            <span className="text-xs text-slate-600">Assignee: <strong className="text-slate-900">{task.assignee}</strong></span>
          </div>

          <span
            className={`text-xs px-3 py-1 rounded-full font-semibold ${
              task.priority === "Urgent"
                ? "bg-rose-100 text-rose-700"
                : task.priority === "High"
                ? "bg-amber-100 text-amber-700"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Priority: {task.priority}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-slate-400" />
            <span>Due Date: {task.dueDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span>Status: <strong className="text-slate-800">{task.status}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
