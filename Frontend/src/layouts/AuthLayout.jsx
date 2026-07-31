import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-900 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Brand Header */}
      <Link to="/" className="flex items-center gap-2.5 mb-8 z-10 group">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
          <Sparkles size={24} />
        </div>
        <span className="text-3xl font-extrabold text-white tracking-tight">WorkNest</span>
      </Link>

      {/* Auth Card Container */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 z-10">
        <Outlet />
      </div>

      {/* Footer copyright */}
      <p className="mt-8 text-xs text-slate-500 text-center z-10">
        &copy; {new Date().getFullYear()} WorkNest Project Management Tool. Built for learning.
      </p>
    </div>
  );
}

export default AuthLayout;