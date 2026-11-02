import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Sparkles,
  Users,
  Settings,
  Building2,
  ChevronDown,
  HardDrive,
  X,
} from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const mainItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Projects', path: '/projects', icon: FolderKanban },
    { name: 'Kanban Board', path: '/tasks', icon: CheckSquare },
  ];

  const intelligenceItems = [
    { name: 'AI Insights', path: '/ai-insights', icon: Sparkles, accent: true },
  ];

  const workspaceItems = [
    { name: 'Team', path: '/team', icon: Users },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen lg:h-[calc(100vh-4rem)] w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col overflow-y-auto p-4 space-y-4">
          {/* Mobile close button & brand header */}
          <div className="flex items-center justify-between lg:hidden pb-2 border-b border-slate-100">
            <span className="font-bold text-slate-900 text-sm">Navigation</span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
            >
              <X size={18} />
            </button>
          </div>

          {/* Workspace Switcher */}
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/60 text-slate-700 transition">
            <div className="flex items-center gap-2.5 truncate">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                <Building2 size={15} />
              </div>
              <div className="text-left truncate">
                <p className="text-xs font-bold text-slate-900 truncate">Acme Studio</p>
                <p className="text-[10px] text-slate-400">Team Workspace</p>
              </div>
            </div>
            <ChevronDown size={14} className="text-slate-400 shrink-0" />
          </button>

          {/* Main Navigation */}
          <div className="space-y-1">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Workspace
            </span>
            {mainItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => onClose && onClose()}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Intelligence Navigation */}
          <div className="space-y-1 pt-2 border-t border-slate-100">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-indigo-500 flex items-center gap-1">
              <Sparkles size={11} /> Intelligence
            </span>
            {intelligenceItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => onClose && onClose()}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25'
                        : 'text-indigo-600 bg-indigo-50/60 hover:bg-indigo-50 hover:text-indigo-700'
                    }`
                  }
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Management Navigation */}
          <div className="space-y-1 pt-2 border-t border-slate-100">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Organization
            </span>
            {workspaceItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => onClose && onClose()}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Workspace Storage Indicator (Stitch aligned) */}
        <div className="p-4 border-t border-slate-100 space-y-3">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-2">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-slate-500 font-medium flex items-center gap-1.5">
                <HardDrive size={13} className="text-indigo-600" /> Storage
              </span>
              <span className="font-bold text-slate-900">78%</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '78%' }} />
            </div>
            <p className="text-[10px] text-slate-400">15.6 GB of 20 GB used</p>
          </div>
        </div>
      </aside>
    </>
  );
}