import { useState } from 'react';
import {
  Bell,
  CheckCheck,
  Clock,
  Sparkles,
  AlertCircle,
  MessageSquare,
  CheckCircle2,
  Trash2,
} from 'lucide-react';
import Button from '../../components/common/Button';
import { toast } from 'sonner';

const initialNotifications = [
  {
    id: 1,
    title: 'AI Prediction Alert',
    description: 'Mobile App 2.0 sprint velocity is 14% below target. Automated mitigation suggested.',
    time: '12m ago',
    read: false,
    type: 'ai',
  },
  {
    id: 2,
    title: 'PR #219 Assigned to You',
    description: 'Sarah Chen reassigned Stripe Payment Gateway v2 code review to David Kim.',
    time: '45m ago',
    read: false,
    type: 'task',
  },
  {
    id: 3,
    title: 'New Task Comment',
    description: 'Aman Raj commented on "GraphQL Schema Refactor".',
    time: '2h ago',
    read: true,
    type: 'comment',
  },
  {
    id: 4,
    title: 'Milestone Completed',
    description: 'UI/UX Design Phase & System Specs reached 100% completion.',
    time: '1d ago',
    read: true,
    type: 'success',
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    toast.success('All notifications marked as read.');
  };

  const clearAll = () => {
    setNotifications([]);
    toast.info('Notifications cleared.');
  };

  const getIcon = (type) => {
    switch (type) {
      case 'ai':
        return <Sparkles size={16} className="text-purple-600" />;
      case 'task':
        return <AlertCircle size={16} className="text-indigo-600" />;
      case 'comment':
        return <MessageSquare size={16} className="text-sky-600" />;
      case 'success':
        return <CheckCircle2 size={16} className="text-emerald-600" />;
      default:
        return <Bell size={16} className="text-slate-600" />;
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Notifications Center
          </h1>
          <p className="text-xs text-slate-500">
            Real-time activity, AI predictive flags, and project updates
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" icon={CheckCheck} onClick={markAllRead}>
            Mark All Read
          </Button>
          <Button variant="ghost" size="sm" icon={Trash2} onClick={clearAll}>
            Clear
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-2xl border transition flex items-start gap-3.5 ${
              item.read
                ? 'bg-white border-slate-200/80'
                : 'bg-indigo-50/40 border-indigo-200 shadow-2xs'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
              {getIcon(item.type)}
            </div>

            <div className="flex-1 space-y-0.5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  {item.title}
                  {!item.read && (
                    <span className="w-2 h-2 rounded-full bg-indigo-600 inline-block" />
                  )}
                </h3>
                <span className="text-[10px] text-slate-400 font-medium">{item.time}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-2">
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
              <Bell size={24} />
            </div>
            <h4 className="text-sm font-bold text-slate-900">No new notifications</h4>
            <p className="text-xs text-slate-400">You're all caught up with your projects and sprints.</p>
          </div>
        )}
      </div>
    </div>
  );
}
