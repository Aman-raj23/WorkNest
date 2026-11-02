import { Link } from 'react-router-dom';
import { Clock, AlertCircle, ArrowUpRight } from 'lucide-react';

const deadlines = [
  {
    id: 1,
    title: 'Stripe Payment Gateway v2',
    project: 'Core Commerce',
    priority: 'Urgent',
    due: 'Tomorrow',
    isUrgent: true,
    status: 'In Review',
    assignees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 2,
    title: 'iOS Design System Tokenization',
    project: 'Mobile App 2.0',
    priority: 'High',
    due: 'In 3 days',
    status: 'In Progress',
    assignees: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 3,
    title: 'GraphQL Schema Refactor',
    project: 'Platform Infra',
    priority: 'Medium',
    due: 'Oct 28',
    status: 'Blocked',
    isBlocked: true,
    assignees: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 4,
    title: 'SOC2 Compliance Audit Checklist',
    project: 'Security & Ops',
    priority: 'High',
    due: 'Nov 02',
    status: 'Audit Prep',
    assignees: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    ],
  },
];

export default function UpcomingDeadlines() {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            Upcoming Deadlines & Critical Tasks
          </h3>
          <p className="text-xs text-slate-500">
            Sorted by urgency and dependency weight
          </p>
        </div>
        <Link
          to="/tasks"
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 flex items-center gap-1"
        >
          View All <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
              <th className="py-2.5 px-2">Task Name</th>
              <th className="py-2.5 px-2">Project</th>
              <th className="py-2.5 px-2">Priority</th>
              <th className="py-2.5 px-2">Due Date</th>
              <th className="py-2.5 px-2">Assignees</th>
              <th className="py-2.5 px-2 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {deadlines.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/70 transition group">
                <td className="py-3 px-2 font-semibold text-slate-900">
                  <span className="group-hover:text-indigo-600 transition cursor-pointer">
                    {item.title}
                  </span>
                </td>
                <td className="py-3 px-2 text-slate-500 whitespace-nowrap">
                  {item.project}
                </td>
                <td className="py-3 px-2 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      item.priority === 'Urgent'
                        ? 'bg-rose-50 text-rose-700'
                        : item.priority === 'High'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.priority === 'Urgent'
                          ? 'bg-rose-600'
                          : item.priority === 'High'
                          ? 'bg-amber-600'
                          : 'bg-slate-500'
                      }`}
                    />
                    {item.priority}
                  </span>
                </td>
                <td className="py-3 px-2 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1 font-medium ${
                      item.isUrgent ? 'text-rose-600 font-semibold' : 'text-slate-600'
                    }`}
                  >
                    <Clock size={12} />
                    {item.due}
                  </span>
                </td>
                <td className="py-3 px-2 whitespace-nowrap">
                  <div className="flex -space-x-1.5">
                    {item.assignees.map((avatar, i) => (
                      <img
                        key={i}
                        src={avatar}
                        alt="Assignee"
                        className="w-6 h-6 rounded-full border border-white object-cover shadow-2xs"
                      />
                    ))}
                  </div>
                </td>
                <td className="py-3 px-2 text-right whitespace-nowrap">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${
                      item.isBlocked
                        ? 'bg-rose-100 text-rose-700'
                        : 'bg-indigo-50 text-indigo-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
