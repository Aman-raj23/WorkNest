import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  FolderKanban,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Plus,
  ArrowUpRight,
  CheckSquare,
  ShieldAlert,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { initialProjects, initialTasks, recentActivities } from '../../utils/mockData';
import UpcomingDeadlines from '../../components/dashboard/UpcomingDeadlines';
import ProductivityChart from '../../components/dashboard/ProductivityChart';
import RecentActivity from '../../components/dashboard/RecentActivity';
import Button from '../../components/common/Button';
import { toast } from 'sonner';

export default function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('Overview');
  const [tasks, setTasks] = useState(initialTasks);
  const [projects] = useState(initialProjects);
  const [autoFixApplied, setAutoFixApplied] = useState(false);

  const userName = user?.name ? user.name.split(' ')[0] : 'Sarah';

  const handleApplyAutoFix = () => {
    setAutoFixApplied(true);
    toast.success('AI Auto-Fix applied: Reassigned 2 PR reviews to unblock Mobile App 2.0!');
  };

  const handleToggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? { ...t, status: t.status === 'Completed' ? 'In Progress' : 'Completed' }
          : t
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Dynamic Header & Greeting Area (Stitch Aligned) */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>Sprint Cycle 24 • Q3 Roadmap</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            Good morning, {userName} <span className="inline-block cursor-default">👋</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Here is what needs your attention today across 4 active projects. 2 critical path items require approval.
          </p>
        </div>

        {/* Segmented Filter Bar */}
        <div className="flex items-center bg-white p-1 rounded-2xl border border-slate-200/80 shadow-2xs overflow-x-auto self-start lg:self-auto">
          {['Overview', 'My Tasks (14)', 'Pending Reviews (3)', 'Milestones'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* KPI Metric Row (from Stitch Executive Dashboard) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Metric 1: Task Completion with Circular SVG Gauge */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Task Completion
              </span>
              <div className="text-3xl font-extrabold text-slate-900 mt-1">84.2%</div>
            </div>
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100 stroke-current"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  strokeWidth="3.5"
                />
                <path
                  className="text-indigo-600 stroke-current"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  strokeDasharray="84.2, 100"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />
              </svg>
              <CheckCircle2 size={16} className="absolute text-indigo-600" />
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-500">142 of 168 completed</span>
            <span className="text-emerald-600 font-semibold inline-flex items-center gap-0.5">
              <TrendingUp size={13} /> +6.4%
            </span>
          </div>
        </div>

        {/* Metric 2: Active Projects */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Active Projects
              </span>
              <div className="text-3xl font-extrabold text-slate-900 mt-1">
                7 <span className="text-xs font-normal text-slate-400">in flight</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <FolderKanban size={20} />
            </div>
          </div>
          <div className="flex items-center gap-2 pt-3 mt-3 border-t border-slate-100 text-xs">
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
              5 On Track
            </span>
            <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[10px] font-bold">
              2 At Risk
            </span>
          </div>
        </div>

        {/* Metric 3: Team Velocity */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Team Velocity
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-extrabold text-slate-900">42</span>
                <span className="text-xs text-slate-400 font-medium">pts / sprint</span>
              </div>
            </div>
            {/* Sparkline visualization */}
            <div className="w-16 h-10 flex items-end gap-1">
              <div className="w-2.5 bg-indigo-200 rounded-t h-4" />
              <div className="w-2.5 bg-indigo-200 rounded-t h-6" />
              <div className="w-2.5 bg-indigo-300 rounded-t h-5" />
              <div className="w-2.5 bg-indigo-400 rounded-t h-8" />
              <div className="w-2.5 bg-indigo-600 rounded-t h-10" />
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-500">Target: 40 pts</span>
            <span className="text-emerald-600 font-semibold inline-flex items-center gap-0.5">
              <TrendingUp size={13} /> +12%
            </span>
          </div>
        </div>

        {/* Metric 4: AI Risk Alerts */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                AI Risk Alerts
              </span>
              <div className="text-3xl font-extrabold text-rose-600 mt-1">1 High</div>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <ShieldAlert size={20} />
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-500 text-[11px] truncate">Mobile App Sprint block</span>
            <Link
              to="/ai-insights"
              className="text-indigo-600 font-semibold flex items-center gap-0.5 hover:underline"
            >
              Review <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Prominent AI Intelligence Banner (from Stitch) */}
      <section className="relative rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 p-[1px] shadow-sm">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/25 shrink-0">
              <Sparkles size={20} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-bold text-slate-900">
                  AI Sprint Prediction Flag
                </span>
                <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-wider">
                  High Risk Delay
                </span>
                <span className="text-[10px] text-slate-400">
                  Triggered 14m ago by Gemini Health Pipeline
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                <strong className="text-slate-900 font-semibold">Mobile App 2.0</strong> release is
                projected <span className="text-rose-600 font-semibold">3 days behind schedule</span>{' '}
                due to 4 unresolved backend dependencies. Suggested mitigation:{' '}
                {autoFixApplied
                  ? 'Reassigned 2 PR reviews from Marcus Vance to Alex Chen. Status: Unblocking merges.'
                  : 'Reassign 2 PR reviews from Marcus Vance to Alex Chen to unblock frontend merges.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end lg:self-center shrink-0">
            <Link
              to="/ai-insights"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition"
            >
              View Insights
            </Link>
            <Button
              variant="primary"
              size="sm"
              icon={Sparkles}
              disabled={autoFixApplied}
              onClick={handleApplyAutoFix}
            >
              {autoFixApplied ? 'Auto-Fix Applied' : 'Apply Auto-Fix'}
            </Button>
          </div>
        </div>
      </section>

      {/* Two-Column Content Grid: Deadlines & Charts (Left 8) + Projects & Tasks (Right 4) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Critical Deadlines & Velocity Chart */}
        <div className="lg:col-span-8 space-y-6">
          <UpcomingDeadlines />
          <ProductivityChart />
        </div>

        {/* Right Column (4 cols): Projects, Today's Tasks, Activity */}
        <div className="lg:col-span-4 space-y-6">
          {/* Active Projects Summary Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Active Projects</h3>
                <p className="text-[11px] text-slate-500">Deliverables in flight</p>
              </div>
              <Link
                to="/projects"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 flex items-center gap-0.5"
              >
                All <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="space-y-3">
              {projects.slice(0, 3).map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-slate-100/70 transition space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      {proj.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        proj.status === 'Completed'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-indigo-100 text-indigo-700'
                      }`}
                    >
                      {proj.status}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">{proj.title}</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>Progress</span>
                      <span className="font-bold text-slate-800">{proj.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Today's Tasks</h3>
                <p className="text-[11px] text-slate-500">Interactive quick checklist</p>
              </div>
              <Link to="/tasks" className="text-xs font-semibold text-indigo-600 hover:underline">
                Manage
              </Link>
            </div>

            <div className="space-y-2">
              {tasks.slice(0, 4).map((task) => (
                <div
                  key={task.id}
                  onClick={() => handleToggleTask(task.id)}
                  className={`p-3 rounded-2xl border transition cursor-pointer flex items-start gap-3 ${
                    task.status === 'Completed'
                      ? 'bg-slate-50 border-slate-200 opacity-60 line-through'
                      : 'bg-white border-slate-200/80 hover:border-indigo-400 shadow-2xs'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={task.status === 'Completed'}
                    onChange={() => {}}
                    className="mt-0.5 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 cursor-pointer"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-900 leading-tight">
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-slate-400">{task.projectName}</span>
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                          task.priority === 'Urgent'
                            ? 'bg-rose-100 text-rose-700'
                            : task.priority === 'High'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Timeline */}
          <RecentActivity activities={recentActivities} />
        </div>
      </div>
    </div>
  );
}
