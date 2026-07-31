import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, Sparkles, CheckCircle2, User, LogOut } from "lucide-react";
import { currentUser } from "../../utils/mockData";

function Navbar() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    return (
        <header className="h-16 bg-white border-b border-slate-200 shadow-xs flex items-center justify-between px-6 sticky top-0 z-30">
            {/* Left: Brand Logo & Search */}
            <div className="flex items-center gap-6 flex-1">
                <Link to="/" className="flex items-center gap-2.5 group">
                    <img
                        src="/WorkNest-logo.png"
                        alt="WorkNest Logo"
                        className="w-25 h-25 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Global Search input */}
                <div className="relative w-full max-w-md hidden md:block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                        <Search size={18} />
                    </span>
                    <input
                        type="text"
                        placeholder="Search projects, tasks, or members (Press '/' to focus)..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all text-slate-700 placeholder-slate-400"
                    />
                </div>
            </div>

            {/* Right: Notifications & Profile */}
            <div className="flex items-center gap-3">
                {/* Quick Status Tag */}
                <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                    <CheckCircle2 size={13} />
                    Workspace Active
                </span>

                {/* Notification Bell */}
                <div className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition relative cursor-pointer"
                        title="Notifications"
                    >
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white"></span>
                    </button>

                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                <h4 className="font-semibold text-slate-800 text-sm">Notifications</h4>
                                <span className="text-xs bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">2 New</span>
                            </div>
                            <div className="py-2 space-y-2 text-xs">
                                <div className="p-2.5 rounded-xl hover:bg-slate-50 transition cursor-pointer">
                                    <p className="font-medium text-slate-800">David assigned you to API Gateway</p>
                                    <p className="text-slate-400 mt-0.5">15 minutes ago</p>
                                </div>
                                <div className="p-2.5 rounded-xl hover:bg-slate-50 transition cursor-pointer">
                                    <p className="font-medium text-slate-800">Sprint 4 Retro scheduled for 3 PM</p>
                                    <p className="text-slate-400 mt-0.5">2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* User Profile */}
                <div className="relative">
                    <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-slate-100 transition cursor-pointer"
                    >
                        <img
                            src={currentUser.avatar}
                            alt={currentUser.name}
                            className="rounded-xl w-9 h-9 object-cover border border-slate-200"
                        />
                        <div className="text-left hidden sm:block">
                            <p className="text-sm font-semibold text-slate-800 leading-tight">{currentUser.name}</p>
                            <p className="text-xs text-slate-500 leading-tight">{currentUser.role}</p>
                        </div>
                    </button>

                    {showProfileMenu && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                            <div className="px-4 py-2 border-b border-slate-100">
                                <p className="text-xs font-semibold text-slate-800">{currentUser.name}</p>
                                <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
                            </div>
                            <Link
                                to="/profile"
                                className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
                                onClick={() => setShowProfileMenu(false)}
                            >
                                <User size={15} />
                                My Profile
                            </Link>
                            <Link
                                to="/login"
                                className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition"
                                onClick={() => setShowProfileMenu(false)}
                            >
                                <LogOut size={15} />
                                Log Out
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;