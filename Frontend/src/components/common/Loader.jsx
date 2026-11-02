import { clsx } from 'clsx';

export default function Loader({ size = 'md', className = '', text = '' }) {
  const sizes = {
    sm: 'h-5 w-5 border-2',
    md: 'h-8 w-8 border-[3px]',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className={clsx('flex flex-col items-center justify-center gap-3', className)}>
      <div
        className={clsx(
          'animate-spin rounded-full border-indigo-200 border-t-indigo-600',
          sizes[size]
        )}
      />
      {text && <p className="text-xs text-slate-500 font-medium animate-pulse">{text}</p>}
    </div>
  );
}

// Full page loader variant
export function PageLoader({ text = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Loader size="lg" text={text} />
    </div>
  );
}
