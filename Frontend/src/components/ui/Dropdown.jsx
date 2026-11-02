import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

export default function Dropdown({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select...',
  icon: Icon,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find((o) =>
    typeof o === 'object' ? o.value === value : o === value
  );
  const displayText = selectedLabel
    ? typeof selectedLabel === 'object' ? selectedLabel.label : selectedLabel
    : placeholder;

  return (
    <div className={clsx('space-y-1', className)} ref={dropdownRef}>
      {label && <label className="text-xs font-semibold text-slate-700">{label}</label>}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition text-slate-800 cursor-pointer px-4"
        >
          <span className="flex items-center gap-2">
            {Icon && <Icon size={16} className="text-slate-400" />}
            <span className={!value ? 'text-slate-400' : ''}>{displayText}</span>
          </span>
          <ChevronDown size={16} className={clsx('text-slate-400 transition-transform', isOpen && 'rotate-180')} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 py-1 max-h-48 overflow-auto">
            {options.map((option, i) => {
              const optValue = typeof option === 'object' ? option.value : option;
              const optLabel = typeof option === 'object' ? option.label : option;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => { onChange(optValue); setIsOpen(false); }}
                  className={clsx(
                    'w-full text-left px-4 py-2 text-xs transition cursor-pointer',
                    optValue === value
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {optLabel}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
