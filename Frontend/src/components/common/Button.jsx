import { clsx } from 'clsx';

const variants = {
  primary:
    'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25 focus:ring-indigo-500',
  secondary:
    'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-xs focus:ring-slate-400',
  ghost:
    'bg-transparent hover:bg-slate-100 text-slate-600 focus:ring-slate-400',
  danger:
    'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/25 focus:ring-rose-500',
  success:
    'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/25 focus:ring-emerald-500',
};

const sizes = {
  xs: 'px-2.5 py-1 text-[11px]',
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : Icon && iconPosition === 'left' ? (
        <Icon size={16} />
      ) : null}
      {children}
      {!loading && Icon && iconPosition === 'right' ? <Icon size={16} /> : null}
    </button>
  );
}
