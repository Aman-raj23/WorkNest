import { clsx } from 'clsx';

export default function Avatar({
  src,
  alt = 'User',
  size = 'md',
  fallback,
  className = '',
  status,
}) {
  const sizes = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-base',
    xl: 'w-20 h-20 text-lg',
  };

  const statusColors = {
    online: 'bg-emerald-500',
    offline: 'bg-slate-400',
    busy: 'bg-rose-500',
  };

  const initials = fallback || alt.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="relative inline-flex">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={clsx(
            'rounded-full object-cover border-2 border-white',
            sizes[size],
            className
          )}
        />
      ) : (
        <div
          className={clsx(
            'rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center justify-center border-2 border-white',
            sizes[size],
            className
          )}
        >
          {initials}
        </div>
      )}
      {status && (
        <span
          className={clsx(
            'absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-2 ring-white',
            statusColors[status]
          )}
        />
      )}
    </div>
  );
}

// Avatar stack for team displays
export function AvatarGroup({ users = [], max = 4, size = 'sm' }) {
  const visible = users.slice(0, max);
  const overflow = users.length - max;

  return (
    <div className="flex -space-x-2">
      {visible.map((user, i) => (
        <Avatar
          key={i}
          src={user.avatar || user}
          alt={user.name || `Member ${i + 1}`}
          size={size}
        />
      ))}
      {overflow > 0 && (
        <div className={clsx(
          'rounded-full bg-slate-200 text-slate-600 font-semibold flex items-center justify-center border-2 border-white',
          size === 'xs' ? 'w-6 h-6 text-[9px]' : 'w-8 h-8 text-[10px]'
        )}>
          +{overflow}
        </div>
      )}
    </div>
  );
}
