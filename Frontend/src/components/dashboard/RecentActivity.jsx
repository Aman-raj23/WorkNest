import React from "react";

function RecentActivity({ activities }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
      <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-200">
        Recent Activity
      </h3>
      <div className="space-y-3">
        {activities.map((act) => (
          <div key={act.id} className="flex items-start gap-2.5 text-xs">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
            <div>
              <p className="text-slate-700">
                <span className="font-semibold text-slate-900">{act.user}</span>{" "}
                {act.action}{" "}
                <span className="font-medium text-blue-600">"{act.target}"</span>
              </p>
              <span className="text-[10px] text-slate-400">{act.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
