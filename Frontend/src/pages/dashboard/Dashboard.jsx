import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FolderKanban,
  CheckSquare,
  Clock,
  Users,
  Plus,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { currentUser, initialProjects, initialTasks, recentActivities } from "../../utils/mockData";
import StatsCard from "../../components/dashboard/StatsCard";
import RecentActivity from "../../components/dashboard/RecentActivity";

function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [projects] = useState(initialProjects);

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === taskId
          ? {
            ...t,
            status: t.status === "Completed" ? "In Progress" : "Completed",
          }
          : t
      )
    );
  };

  const completedCount = tasks.filter((t) => t.status === "Completed").length;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 p-6 md:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="space-y-1 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/30">
            <Clock size={13} /> Active Workspace
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Welcome back, {currentUser.name}!
          </h1>
          <p className="text-slate-400 text-xs md:text-sm">
            Here's what's happening with your projects today.
          </p>
        </div>

        <div className="flex gap-3 z-10 w-full md:w-auto">
          <Link
            to="/projects"
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto"
          >
            <Plus size={16} /> New Project
          </Link>
        </div>
      </div>

      {/* Modular Overview Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Projects"
          value={projects.length}
          badge="↑ 2 created this month"
          icon={<FolderKanban size={20} />}
        />
        <StatsCard
          title="Active Tasks"
          value={tasks.length}
          subtitle={`${completedCount} completed`}
          icon={<CheckSquare size={20} />}
        />
        <StatsCard
          title="Completion Rate"
          value={`${Math.round((completedCount / tasks.length) * 100)}%`}
          subtitle="Overall progress"
          icon={<CheckCircle2 size={20} />}
        />
        <StatsCard
          title="Team Collaborators"
          value="8 Members"
          subtitle="Across 3 departments"
          icon={<Users size={20} />}
        />
      </div>

      {/* Main Content Row: Projects & Today's Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Recent Projects */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">Active Projects</h3>
              <p className="text-xs text-slate-500">Ongoing team deliverables and milestones</p>
            </div>
            <Link
              to="/projects"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline"
            >
              View All <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="space-y-3">
            {projects.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/60 transition space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      {proj.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-800 mt-1">{proj.title}</h4>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold ${proj.status === "Completed"
                      ? "bg-emerald-100 text-emerald-700"
                      : proj.status === "In Progress"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-200 text-slate-700"
                      }`}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-1">{proj.description}</p>

                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs font-medium text-slate-600">
                    <span>Progress</span>
                    <span className="font-bold text-slate-800">{proj.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${proj.progress === 100 ? "bg-emerald-500" : "bg-blue-600"
                        }`}
                      style={{ width: `${proj.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <div className="flex -space-x-2">
                    {proj.team.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="member"
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <span>Due: {proj.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Today's Tasks & Activities */}
        <div className="space-y-6">
          {/* Today's Tasks */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">Today's Tasks</h3>
                <p className="text-xs text-slate-500">Click checkbox to mark done</p>
              </div>
              <Link to="/tasks" className="text-xs font-semibold text-blue-600 hover:underline">
                Manage
              </Link>
            </div>

            <div className="space-y-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => handleToggleTask(task.id)}
                  className={`p-3 rounded-xl border transition cursor-pointer flex items-start gap-3 ${task.status === "Completed"
                    ? "bg-slate-50 border-slate-200 opacity-60 line-through"
                    : "bg-white border-slate-200/80 hover:border-blue-400 shadow-2xs"
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={task.status === "Completed"}
                    onChange={() => { }}
                    className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-800 leading-tight">
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-slate-400">{task.projectName}</span>
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-semibold ${task.priority === "Urgent"
                          ? "bg-rose-100 text-rose-700"
                          : task.priority === "High"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                          }`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modular Activity Timeline */}
          <RecentActivity activities={recentActivities} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
