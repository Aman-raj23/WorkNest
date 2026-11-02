import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Bell,
  CheckCircle2,
  User,
  LogOut,
  Menu,
  Plus,
  Settings,
  ChevronDown,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';

export default function Navbar({ onToggleSidebar, onOpenCreateTask }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const currentUser = user || {
    name: 'Aman Raj',
    email: 'amanraj@worknest.com',
    role: 'Project Lead',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200/80 shadow-2xs flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
      {/* Left: Mobile hamburger & Brand */}
      <div className="flex items-center gap-3 md:gap-6 flex-1">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation"
        >
          <Menu size={20} />
        </button>

        <Link to="/dashboard" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/WorkNest-logo.png"
            alt="WorkNest"
            className="h-8 w-auto object-contain"
          />
          <span className="font-extrabold text-base tracking-tight text-slate-900 hidden sm:inline">
            WorkNest
          </span>
        </Link>

        {/* Global Search */}
        <div className="relative w-full max-w-md hidden md:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="Type ⌘K to search tasks, projects, or commands..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all text-slate-700 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* All Systems Normal Tag (from Stitch) */}
        <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>All systems normal</span>
        </div>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition relative cursor-pointer"
            title="Notifications"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="font-bold text-slate-900 text-xs">Notifications</h4>
                <Link
                  to="/notifications"
                  onClick={() => setShowNotifications(false)}
                  className="text-[11px] text-indigo-600 font-semibold hover:underline"
                >
                  View All
                </Link>
              </div>
              <div className="py-2 space-y-2 text-xs">
                <div className="p-2.5 rounded-xl hover:bg-slate-50 transition cursor-pointer">
                  <p className="font-semibold text-slate-800">
                    AI Prediction: PR #219 bottleneck flagged
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">12 minutes ago</p>
                </div>
                <div className="p-2.5 rounded-xl hover:bg-slate-50 transition cursor-pointer">
                  <p className="font-semibold text-slate-800">
                    Sprint Cycle 24 kick-off scheduled
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">2 hours ago</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-slate-100 transition cursor-pointer"
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="rounded-xl w-8 h-8 object-cover border border-slate-200"
            />
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-slate-800 leading-tight">
                {currentUser.name}
              </p>
              <p className="text-[10px] text-slate-400 leading-tight">
                {currentUser.role}
              </p>
            </div>
            <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
              <div className="px-4 py-2 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-900">{currentUser.name}</p>
                <p className="text-[11px] text-slate-500 truncate">{currentUser.email}</p>
              </div>

              <Link
                to="/profile"
                className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
                onClick={() => setShowProfileMenu(false)}
              >
                <User size={14} /> My Profile
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
                onClick={() => setShowProfileMenu(false)}
              >
                <Settings size={14} /> Settings
              </Link>
              <div className="my-1 border-t border-slate-100" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition text-left"
              >
                <LogOut size={14} /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}