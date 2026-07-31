import React from "react";
import { Clock } from "lucide-react";

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between cursor-pointer"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
            {project.category}
          </span>
          <span
            className={`text-xs px-3 py-1 rounded-full font-semibold ${
              project.status === "Completed"
                ? "bg-emerald-100 text-emerald-700"
                : project.status === "In Progress"
                ? "bg-amber-100 text-amber-700"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900">{project.title}</h3>
        <p className="text-xs text-slate-600 line-clamp-2">{project.description}</p>
      </div>

      <div className="space-y-4 pt-2 border-t border-slate-100">
        {/* Progress */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-medium text-slate-600">
            <span>Overall Completion</span>
            <span className="font-bold text-slate-900">{project.progress}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                project.progress === 100 ? "bg-emerald-500" : "bg-blue-600"
              }`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-slate-400" />
            <span>Due {project.dueDate}</span>
          </div>

          <div className="flex -space-x-2">
            {project.team?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="team member"
                className="w-7 h-7 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
