import { clsx } from 'clsx';

export default function Input({
  label,
  type = 'text',
  icon: Icon,
  error,
  helpText,
  className = '',
  id,
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold text-slate-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Icon size={17} />
          </span>
        )}
        <input
          id={inputId}
          type={type}
          className={clsx(
            'w-full py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition text-slate-800 placeholder-slate-400',
            Icon ? 'pl-10 pr-4' : 'px-4',
            error ? 'border-rose-300 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-[11px] text-rose-600 font-medium">{error}</p>}
      {helpText && !error && <p className="text-[11px] text-slate-400">{helpText}</p>}
    </div>
  );
}
