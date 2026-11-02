import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', completed: 12, target: 10, aiPredicted: 11 },
  { name: 'Tue', completed: 19, target: 15, aiPredicted: 18 },
  { name: 'Wed', completed: 15, target: 20, aiPredicted: 17 },
  { name: 'Thu', completed: 25, target: 22, aiPredicted: 24 },
  { name: 'Fri', completed: 32, target: 28, aiPredicted: 30 },
  { name: 'Sat', completed: 28, target: 30, aiPredicted: 31 },
  { name: 'Sun', completed: 38, target: 35, aiPredicted: 39 },
];

export default function ProductivityChart() {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            Sprint Velocity & Burnup
          </h3>
          <p className="text-xs text-slate-500">
            Actual output vs. team baseline & AI projection
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" /> Completed
          </span>
          <span className="flex items-center gap-1.5 text-slate-400 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" /> Baseline
          </span>
          <span className="flex items-center gap-1.5 text-purple-600 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> AI Forecast
          </span>
        </div>
      </div>

      <div className="w-full h-64 pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8A4CFC" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#8A4CFC" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0F172A',
                borderRadius: '0.75rem',
                border: 'none',
                color: '#fff',
                fontSize: '12px',
                padding: '8px 12px',
              }}
            />
            <Area
              type="monotone"
              dataKey="completed"
              stroke="#4F46E5"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#colorCompleted)"
            />
            <Area
              type="monotone"
              dataKey="aiPredicted"
              stroke="#8A4CFC"
              strokeWidth={2}
              strokeDasharray="4 4"
              fillOpacity={1}
              fill="url(#colorPredicted)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
