import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  User,
  Settings,
  PlusCircle,
  HelpCircle,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={19} />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FolderKanban size={19} />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <CheckSquare size={19} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={19} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={19} />,
    },
  ];

  return (
    <aside className="w-64 bg-slate-800 text-slate-300 flex flex-col justify-between p-4 min-h-[calc(100vh-4rem)] border-r border-slate-800">
      <div>
        {/* Navigation Group Header */}
        <div className="px-3 mb-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Navigation</p>
        </div>

        {/* Main Nav Items */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                  : "hover:bg-slate-800/80 hover:text-white text-slate-400"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer Info Widget for Intermediate Learners */}
      <div className="space-y-3 pt-4 border-t border-slate-800">
        {/* <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-3.5 rounded-2xl border border-slate-700/50">
          <div className="flex items-center gap-2 mb-1.5 text-amber-400 font-semibold text-xs">
            <PlusCircle size={15} />
            <span>Intermediate Tip</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            WorkNest routes are wrapped inside modular React Router layouts for clean UI reuse.
          </p>
        </div> */}

        <div className="flex items-center justify-between text-xs text-slate-500 px-2">
          <span>WorkNest v1.0.0</span>
          <span className="flex items-center gap-1 hover:text-slate-300 cursor-pointer transition">
            <HelpCircle size={13} /> Docs
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;