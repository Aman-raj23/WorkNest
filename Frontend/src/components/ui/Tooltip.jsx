import { useState, useRef } from 'react';
import { clsx } from 'clsx';

export default function Tooltip({
  children,
  content,
  position = 'top',
  delay = 150,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  if (!content) return children;

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      className={clsx('relative inline-flex items-center', className)}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={clsx(
            'absolute z-50 px-2 py-1 text-xs font-medium text-white bg-slate-900 rounded shadow-lg whitespace-nowrap pointer-events-none transition-opacity duration-150',
            positionClasses[position] || positionClasses.top
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
