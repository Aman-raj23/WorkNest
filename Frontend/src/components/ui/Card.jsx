import { clsx } from 'clsx';

export default function Card({
  children,
  className = '',
  padding = 'p-6',
  hover = false,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-white rounded-2xl border border-slate-200/80 shadow-xs',
        padding,
        hover && 'hover:shadow-md transition cursor-pointer',
        onClick && 'cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={clsx('flex items-center justify-between pb-3 border-b border-slate-100', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, subtitle, className = '' }) {
  return (
    <div className={className}>
      <h3 className="text-base font-bold text-slate-900">{children}</h3>
      {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
    </div>
  );
}
