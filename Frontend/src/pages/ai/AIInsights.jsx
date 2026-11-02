import { useState } from 'react';
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Users,
  BrainCircuit,
  Sliders,
  ArrowRight,
  ShieldAlert,
  Zap,
  Download,
  Calendar,
  Layers,
} from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { toast } from 'sonner';

export default function AIInsights() {
  const [projectScope, setProjectScope] = useState('Nova Mobile App 2.0');
  const [isRebalancing, setIsRebalancing] = useState(false);
  const [appliedMitigation, setAppliedMitigation] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [aiGenerating, setAiGenerating] = useState(false);
  const [aiAnalysisResult, setAiAnalysisResult] = useState(null);

  const handleExecuteAction = () => {
    setAppliedMitigation(true);
    toast.success('Auto-reassigned PR #219 to David Kim. Projected delay reduced by 14 hours!');
  };

  const handleSmartRebalance = () => {
    setIsRebalancing(true);
    setTimeout(() => {
      setIsRebalancing(false);
      toast.success('Smart Rebalance completed! Workload variance decreased from 22% to 6%.');
    }, 1200);
  };

  const handleRunAiAnalysis = (e) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;

    setAiGenerating(true);
    setTimeout(() => {
      setAiGenerating(false);
      setAiAnalysisResult({
        query: customPrompt,
        summary:
          'Based on historical commit frequency and sprint velocity data, your team delivers frontend components 22% faster than backend microservices. To optimize sprint 25, consider pre-generating TypeScript interfaces 2 days prior to sprint kick-off.',
        confidence: 94,
        impact: 'High Efficiency Gain',
      });
      setCustomPrompt('');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Top Command & Filter Bar */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-2 border-b border-slate-200/60">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-medium text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              Model updated 12 mins ago
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <BrainCircuit size={14} className="text-purple-600" />
              Gemini 2.5 Flash Engine (Sprint Latency & Resource Mesh)
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            AI Intelligence & Predictive Insights
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Project Scope Dropdown */}
          <select
            value={projectScope}
            onChange={(e) => setProjectScope(e.target.value)}
            className="px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
          >
            <option value="Nova Mobile App 2.0">Nova Mobile App 2.0</option>
            <option value="Core Commerce">Core Commerce</option>
            <option value="Platform Infra">Platform Infra</option>
            <option value="Cross-Workspace">All Workspaces (Cross-Org)</option>
          </select>

          {/* Date Range Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 shadow-2xs">
            <Calendar size={14} className="text-slate-400" />
            <span>Current Sprint (Oct 7 - Oct 21)</span>
          </div>

          <Button
            variant="primary"
            size="sm"
            icon={Download}
            onClick={() => toast.success('Exporting AI Intelligence executive report...')}
          >
            Export AI Report
          </Button>
        </div>
      </div>

      {/* Bento KPI Summary Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* KPI 1: Overall Project Health */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Project Health Score
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">88</span>
                <span className="text-xs text-slate-400 font-medium">/ 100</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Sparkles size={20} />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
              <TrendingUp size={14} /> +4 pts vs cycle
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
              Good Zone
            </span>
          </div>
        </div>

        {/* KPI 2: Predicted On-Time Delivery */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Predicted On-Time Delivery
              </span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-3xl font-extrabold text-slate-900">91.4</span>
                <span className="text-lg font-bold text-slate-900">%</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
              <Zap size={20} />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 text-[11px]">Monte Carlo (10k runs)</span>
            <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold">
              High Confidence
            </span>
          </div>
        </div>

        {/* KPI 3: Burnout & Overload Index */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Burnout & Overload Index
              </span>
              <div className="text-2xl font-extrabold text-amber-600">Low-Med</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <AlertTriangle size={20} />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-amber-700 font-medium text-[11px] truncate">
              1 member at 98% cap
            </span>
            <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">
              Needs Attention
            </span>
          </div>
        </div>

        {/* KPI 4: Bottlenecks Identified */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between group hover:shadow-md transition">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Active Blockers
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">02</span>
                <span className="text-xs text-slate-400 font-medium">identified</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
              <ShieldAlert size={20} />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 text-[11px]">Code Review cycle</span>
            <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[10px] font-bold">
              Impact: High
            </span>
          </div>
        </div>
      </div>

      {/* Primary Split: Anomalies & Predictive Trajectory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Anomaly Detection & Risk Vectors */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <ShieldAlert size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Anomaly Detection & Risk Vectors
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Real-time deviations calculated against baseline sprint velocity
                  </p>
                </div>
              </div>
              <span className="px-2 py-1 rounded-full bg-rose-50 text-rose-700 text-[10px] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600" /> 3 Signals
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {/* Anomaly 1: High Severity */}
              <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/60 hover:bg-slate-50 transition space-y-2.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold">
                      !
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">
                      Code Review Latency in Mobile Sprint
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold">
                    High Severity
                  </span>
                </div>
                <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                  Average PR approval time surged to{' '}
                  <strong className="text-slate-900">34 hours</strong> (standard threshold: 8 hrs).
                  Impacting downstream QA on <span className="font-semibold text-indigo-600">#NOVA-442</span> and{' '}
                  <span className="font-semibold text-indigo-600">#NOVA-448</span>.
                </p>

                {/* Mitigation Action */}
                <div className="ml-8 p-3 bg-white rounded-xl border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <Sparkles size={14} className="text-purple-600 shrink-0" />
                    <span>
                      {appliedMitigation
                        ? 'Action Executed: Reassigned PR #219 to David Kim.'
                        : 'Recommendation: Auto-reassign PR #219 to David K. (0 open reviews)'}
                    </span>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    disabled={appliedMitigation}
                    onClick={handleExecuteAction}
                  >
                    {appliedMitigation ? 'Applied' : 'Execute Action'}
                  </Button>
                </div>
              </div>

              {/* Anomaly 2: Medium Severity */}
              <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/60 hover:bg-slate-50 transition space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">
                      ~
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">
                      Scope Creep in Payments Module
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold">
                    Medium Severity
                  </span>
                </div>
                <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                  5 unestimated user stories (+18 story points) added mid-sprint without milestone extension.
                  Projected delivery slippage of +1.8 days if unmitigated.
                </p>
                <div className="pl-8 flex items-center gap-3 pt-1">
                  <button
                    onClick={() => toast.info('Estimating stories with Gemini AI Assessor...')}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-500 flex items-center gap-1"
                  >
                    Re-estimate via AI Assessor <ArrowRight size={13} />
                  </button>
                  <button
                    onClick={() => toast.success('Stories deferred to sprint backlog.')}
                    className="text-xs font-medium text-slate-500 hover:text-slate-800"
                  >
                    Defer to Backlog
                  </button>
                </div>
              </div>

              {/* Anomaly 3: Low Severity */}
              <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/60 hover:bg-slate-50 transition space-y-1.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold">
                      i
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">
                      Design QA Dependency Gap
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">
                    Low Severity
                  </span>
                </div>
                <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                  3 engineering tasks marked "Ready for Review" are awaiting UI/UX design sign-off.
                  Elena Rostova has available review capacity today.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Anomaly threshold sensitivity: 1.8σ</span>
            <button
              onClick={() => toast.info('Adjusting anomaly threshold rules...')}
              className="text-indigo-600 font-medium hover:underline"
            >
              Adjust Sensitivity Rules
            </button>
          </div>
        </div>

        {/* Right Column: Predictive Burndown Trajectory */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Zap size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Predictive Burndown Trajectory
                  </h3>
                  <p className="text-[11px] text-slate-500">Planned vs Actual vs AI Dynamic Forecast</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold">
                Day 8 of 14
              </span>
            </div>

            {/* SVG Interactive Burndown Graph */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Points Remaining (Initial: 140 pts)</span>
                <span className="font-bold text-slate-900">Today: 54 pts</span>
              </div>

              <div className="w-full h-44 relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 160">
                  <defs>
                    <linearGradient id="aiConfidenceBand" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line stroke="#E2E8F0" strokeDasharray="3 3" x1="0" x2="400" y1="10" y2="10" />
                  <line stroke="#E2E8F0" strokeDasharray="3 3" x1="0" x2="400" y1="50" y2="50" />
                  <line stroke="#E2E8F0" strokeDasharray="3 3" x1="0" x2="400" y1="90" y2="90" />
                  <line stroke="#E2E8F0" strokeDasharray="3 3" x1="0" x2="400" y1="130" y2="130" />

                  {/* Today Marker */}
                  <line stroke="#8A4CFC" strokeDasharray="4 4" strokeWidth="1.5" x1="220" x2="220" y1="0" y2="150" />

                  {/* Planned Baseline (Dotted Grey) */}
                  <line stroke="#94A3B8" strokeDasharray="4 4" strokeWidth="2" x1="20" x2="380" y1="20" y2="140" />

                  {/* AI Confidence Cone */}
                  <polygon fill="url(#aiConfidenceBand)" points="220,78 380,132 380,146 220,78" />

                  {/* Actual Progress Line (Solid Indigo) */}
                  <path
                    d="M 20 20 L 70 32 L 120 45 L 170 56 L 220 78"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* AI Forecast Line (Dashed Purple) */}
                  <path
                    d="M 220 78 L 270 94 L 320 115 L 380 138"
                    fill="none"
                    stroke="#8A4CFC"
                    strokeWidth="2.5"
                    strokeDasharray="5 3"
                    strokeLinecap="round"
                  />

                  <circle cx="20" cy="20" fill="#4F46E5" r="3.5" />
                  <circle cx="120" cy="45" fill="#4F46E5" r="3.5" />
                  <circle cx="220" cy="78" fill="#8A4CFC" r="5" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="380" cy="138" fill="#8A4CFC" r="4" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Oct 7 (Start)</span>
                <span className="text-purple-600 font-bold">▲ Today (Oct 14)</span>
                <span>Oct 21 (Target)</span>
              </div>
            </div>

            {/* Legend & Summary */}
            <div className="flex items-center justify-between text-xs text-slate-600 px-1">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-slate-400" /> Planned Pace
              </span>
              <span className="flex items-center gap-1.5 font-medium text-indigo-600">
                <span className="w-3 h-1 bg-indigo-600 rounded-full" /> Actual Track
              </span>
              <span className="flex items-center gap-1.5 font-medium text-purple-600">
                <span className="w-3 h-1 bg-purple-600 rounded-full" /> AI Forecast
              </span>
            </div>
          </div>

          <div className="p-3 bg-indigo-50/70 border border-indigo-100 rounded-2xl flex items-center gap-2.5 text-xs text-slate-800">
            <CheckCircle2 size={18} className="text-indigo-600 shrink-0" />
            <span>
              Target will complete <strong>8.5 hrs before deadline</strong> under current velocity.
            </span>
          </div>
        </div>
      </div>

      {/* Deep Workload & Capacity Analysis Section */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-indigo-600" />
              <h3 className="text-base font-bold text-slate-900">
                Capacity Distribution & Workload Mesh
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Real-time allocation across core contributors (40 hrs/wk baseline)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden md:inline">
              Load variance: <strong className="text-slate-700">22%</strong>
            </span>
            <Button
              variant="secondary"
              size="sm"
              icon={Sliders}
              loading={isRebalancing}
              onClick={handleSmartRebalance}
            >
              Smart Rebalance (1-Click)
            </Button>
          </div>
        </div>

        {/* Contributor Capacity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Contributor 1 */}
          <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/60 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
                  alt="Sarah Chen"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Sarah Chen</h4>
                  <span className="text-[10px] text-slate-500">Mobile Architect</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold">
                98% Load
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>39.2 / 40 hrs</span>
                <span className="text-rose-600 font-bold">+6 hrs PR spillover</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-rose-600 h-2 rounded-full" style={{ width: '98%' }} />
              </div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 pt-1">
              <span>7 Active Tasks</span>
              <span className="text-rose-600 font-medium">Critical Path</span>
            </div>
          </div>

          {/* Contributor 2 */}
          <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/60 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                  alt="David Kim"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">David Kim</h4>
                  <span className="text-[10px] text-slate-500">iOS Engineer</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold">
                54% Load
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>21.5 / 40 hrs</span>
                <span className="text-indigo-600 font-bold">18.5 hrs open</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '54%' }} />
              </div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 pt-1">
              <span>3 Active Tasks</span>
              <span className="text-indigo-600 font-medium">Candidate for PRs</span>
            </div>
          </div>

          {/* Contributor 3 */}
          <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/60 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
                  alt="Elena Rostova"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Elena Rostova</h4>
                  <span className="text-[10px] text-slate-500">Product Designer</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                82% Load
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>32.8 / 40 hrs</span>
                <span className="text-emerald-600 font-bold">Optimal band</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 pt-1">
              <span>5 Active Tasks</span>
              <span className="text-slate-600 font-medium">Design QA Next</span>
            </div>
          </div>

          {/* Contributor 4 */}
          <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/60 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                  AR
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Aman Raj</h4>
                  <span className="text-[10px] text-slate-500">Project Lead</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold">
                76% Load
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>30.4 / 40 hrs</span>
                <span className="text-purple-600 font-bold">In Target</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '76%' }} />
              </div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 pt-1">
              <span>4 Active Tasks</span>
              <span className="text-slate-600 font-medium">On Track</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Gemini AI Query & Generator Panel */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl p-6 md:p-8 text-white space-y-5 shadow-xl shadow-indigo-950/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
            <Sparkles size={22} />
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-tight">Gemini AI Workspace Copilot</h3>
            <p className="text-xs text-indigo-200/70">
              Ask deep questions about risks, sprint bottlenecks, capacity forecasts, or team performance
            </p>
          </div>
        </div>

        <form onSubmit={handleRunAiAnalysis} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="e.g. Which tasks have the highest probability of missing next week's deadline?"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-xs placeholder:text-indigo-200/40 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/15 transition"
          />
          <Button
            type="submit"
            variant="primary"
            size="md"
            loading={aiGenerating}
            disabled={!customPrompt.trim()}
          >
            Run Predictive Analysis
          </Button>
        </form>

        {aiAnalysisResult && (
          <div className="p-4 bg-white/10 border border-white/15 rounded-2xl space-y-2 backdrop-blur-md animate-fade-in">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-indigo-300 flex items-center gap-1.5">
                <BrainCircuit size={14} /> AI Analysis for: "{aiAnalysisResult.query}"
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                {aiAnalysisResult.confidence}% Confidence
              </span>
            </div>
            <p className="text-xs text-indigo-100/90 leading-relaxed">
              {aiAnalysisResult.summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
