import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle2, Users, FolderKanban } from "lucide-react";
import { initialProjects, initialTasks } from "../../utils/mockData";

function ProjectDetails() {
  const { id } = useParams();
  const project = initialProjects.find((p) => p.id === Number(id)) || initialProjects[0];
  const projectTasks = initialTasks.filter((t) => t.projectId === project.id);

  return (
    <div className="space-y-6">
      {/* Back Button & Header */}
      <div className="flex items-center gap-3">
        <Link
          to="/projects"
          className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 transition shadow-2xs"
        >
          <ArrowLeft size={18} />
        </Link>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
            {project.category}
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{project.title}</h1>
        </div>
      </div>

      {/* Project Overview Card */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">{project.description}</p>
          <span
            className={`text-xs px-3 py-1 rounded-full font-semibold shrink-0 ${
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

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold text-slate-700">
            <span>Overall Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Due date & team */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 gap-4">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-slate-400" />
            <span>Target Completion: <strong className="text-slate-800">{project.dueDate}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} className="text-slate-400" />
            <span>Team Members ({project.team.length})</span>
            <div className="flex -space-x-2 ml-2">
              {project.team.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="member"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Associated Tasks */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
          Project Tasks ({projectTasks.length})
        </h3>

        {projectTasks.length === 0 ? (
          <p className="text-xs text-slate-400 italic">No tasks created for this project yet.</p>
        ) : (
          <div className="space-y-2">
            {projectTasks.map((t) => (
              <div
                key={t.id}
                className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/60 flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-bold text-slate-800">{t.title}</p>
                  <p className="text-[11px] text-slate-500">Assigned to: {t.assignee}</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
