import { Link } from 'react-router-dom';
import { Calendar, Users, ArrowUpRight } from 'lucide-react';
import Badge from '../ui/Badge';

export default function ProjectList({ projects = [] }) {
  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80">
        <p className="text-sm text-slate-500">No projects found matching the filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              <th className="py-3 px-4">Project</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Progress</th>
              <th className="py-3 px-4">Due Date</th>
              <th className="py-3 px-4">Team</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-slate-50/70 transition group">
                <td className="py-3 px-4 font-semibold text-slate-900">
                  <Link
                    to={`/projects/${project.id}`}
                    className="hover:text-indigo-600 transition flex items-center gap-1.5"
                  >
                    {project.title}
                  </Link>
                </td>
                <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] text-slate-600 font-medium">
                    {project.category}
                  </span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                      project.status === 'Completed'
                        ? 'bg-emerald-50 text-emerald-700'
                        : project.status === 'In Progress'
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-medium text-slate-600">
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-slate-400" />
                    <span>{project.dueDate}</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex -space-x-1.5">
                    {project.team?.slice(0, 3).map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="member"
                        className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-2xs"
                      />
                    ))}
                    {(project.team?.length || 0) > 3 && (
                      <span className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white text-[10px] font-bold text-slate-600 flex items-center justify-center shadow-2xs">
                        +{project.team.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4 text-right whitespace-nowrap">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    View <ArrowUpRight size={13} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
