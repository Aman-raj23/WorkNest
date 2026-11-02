import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
        <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
          <ShieldAlert size={32} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
            Error 403
          </span>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Access Restricted</h1>
          <p className="text-sm text-slate-500">
            You don't have the required permissions to view this workspace or resource. Contact your workspace administrator for access.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => window.history.back()}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <ArrowLeft size={14} /> Go Back
          </button>
          <Link
            to="/dashboard"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition"
          >
            <Home size={14} /> Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
