import { clsx } from 'clsx';
import { PRIORITY_COLORS, STATUS_COLORS } from '../../utils/constants';

const variants = {
  default: 'bg-slate-100 text-slate-700 border-slate-200',
  primary: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-100 text-amber-700 border-amber-200',
  danger: 'bg-rose-100 text-rose-700 border-rose-200',
  info: 'bg-sky-100 text-sky-700 border-sky-200',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  dot = false,
  className = '',
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 font-semibold rounded-full border',
        size === 'xs' ? 'px-1.5 py-0.5 text-[9px]' : 'px-2.5 py-0.5 text-[10px]',
        variants[variant],
        className
      )}
    >
      {dot && <span className={clsx('w-1.5 h-1.5 rounded-full', `bg-current`)} />}
      {children}
    </span>
  );
}

// Convenience components for priority and status badges
export function PriorityBadge({ priority }) {
  const colors = PRIORITY_COLORS[priority] || PRIORITY_COLORS.Medium;
  return (
    <span className={clsx('inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border', colors.bg, colors.text, colors.border)}>
      <span className={clsx('w-1.5 h-1.5 rounded-full', colors.dot)} />
      {priority}
    </span>
  );
}

export function StatusBadge({ status }) {
  const colors = STATUS_COLORS[status] || STATUS_COLORS['To Do'];
  return (
    <span className={clsx('inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border', colors.bg, colors.text, colors.border)}>
      {status}
    </span>
  );
}
