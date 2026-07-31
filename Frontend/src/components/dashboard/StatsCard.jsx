import React from "react";

function StatsCard({ title, value, subtitle, icon, badge }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">{title}</span>
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-slate-900 mt-2">{value}</p>
      {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
      {badge && <p className="text-xs text-emerald-600 font-medium mt-1">{badge}</p>}
    </div>
  );
}

export default StatsCard;
