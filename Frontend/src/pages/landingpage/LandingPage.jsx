import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  FolderKanban,
  CheckCircle2,
  Users,
  ShieldCheck,
  Zap,
  BarChart3,
} from "lucide-react";

function LandingPage() {
  const features = [
    {
      icon: <FolderKanban className="text-blue-600" size={24} />,
      title: "Project Tracking",
      description: "Organize projects with clean progress bars, team assignments, and milestone tracking.",
    },
    {
      icon: <CheckCircle2 className="text-emerald-600" size={24} />,
      title: "Kanban Task Boards",
      description: "Drag-and-drop workflow statuses (To Do, In Progress, In Review, Completed).",
    },
    {
      icon: <Users className="text-indigo-600" size={24} />,
      title: "Team Collaboration",
      description: "Assign responsibilities, set task priorities, and track member contributions seamlessly.",
    },
    {
      icon: <BarChart3 className="text-violet-600" size={24} />,
      title: "Productivity Insights",
      description: "Visual dashboards showing completion rates, active deadlines, and upcoming priorities.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Header Bar */}
      <header className="h-20 border-b border-slate-700/80 px-6 lg:px-12 flex items-center justify-between sticky top-0 bg-slate-900/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/WorkNest-logo.png"
              alt="WorkNest Logo"
              className="w-25 h-25 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-indigo-300 to-blue-800 bg-clip-text text-transparent">WorkNest</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition"
          >
            Sign In
          </Link>
          <Link
            to="/dashboard"
            className="px-5 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all flex items-center gap-2"
          >
            Open Dashboard <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 max-w-5xl mx-auto relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 blur-3xl rounded-full pointer-events-none"></div>


        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Streamline your team's workflow with <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
            WorkNest
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          A clean, intuitive project management platform built to organize tasks, track project progress, and accelerate productivity for modern development teams.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            to="/dashboard"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-3 text-base"
          >
            Explore Live Dashboard <ArrowRight size={18} />
          </Link>
          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700/80 text-slate-200 font-semibold rounded-2xl border border-slate-700 transition flex items-center justify-center text-base"
          >
            Create Free Account
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 text-left w-full">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60 hover:border-slate-600 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        WorkNest Project Management System &bull; Frontend React Demonstration
      </footer>
    </div>
  );
}

export default LandingPage;