import React from "react";
import { CheckCircle2 } from "lucide-react";

function ProfileCard({ user, name, role, bio }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center md:items-start gap-6">
      <img
        src={user.avatar}
        alt={name}
        className="w-24 h-24 rounded-2xl object-cover border-4 border-slate-100 shadow-md"
      />

      <div className="flex-1 text-center md:text-left space-y-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900">{name}</h2>
            <p className="text-xs font-semibold text-blue-600">{role}</p>
          </div>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 self-center md:self-auto">
            <CheckCircle2 size={13} /> Verified Lead
          </span>
        </div>

        <p className="text-xs text-slate-600 max-w-xl">{bio}</p>

        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100 max-w-md">
          <div>
            <p className="text-lg font-extrabold text-slate-900">{user.stats.projectsCompleted}</p>
            <p className="text-[11px] text-slate-400">Projects</p>
          </div>
          <div>
            <p className="text-lg font-extrabold text-slate-900">{user.stats.tasksFinished}</p>
            <p className="text-[11px] text-slate-400">Tasks Completed</p>
          </div>
          <div>
            <p className="text-lg font-extrabold text-slate-900">{user.stats.hoursTracked}h</p>
            <p className="text-[11px] text-slate-400">Tracked</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
