import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Calendar, GripVertical, MessageSquare, Paperclip } from 'lucide-react';

export default function TaskCard({ task, onClick }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id.toString(), data: { task } });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.35 : 1,
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'Urgent':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'High':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Medium':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition group select-none relative ${
        isDragging ? 'ring-2 ring-indigo-500 shadow-xl' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-[10px] font-semibold text-slate-400">
          {task.projectName || 'General'}
        </span>
        <div className="flex items-center gap-1.5">
          <span
            className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${getPriorityStyle(
              task.priority
            )}`}
          >
            {task.priority}
          </span>
          {/* Drag Handle */}
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-600 p-0.5"
            title="Drag task"
          >
            <GripVertical size={13} />
          </div>
        </div>
      </div>

      {/* Task Title (clickable to view details) */}
      <h4
        onClick={onClick}
        className="text-xs font-bold text-slate-900 leading-snug cursor-pointer hover:text-indigo-600 transition"
      >
        {task.title}
      </h4>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          {task.avatar ? (
            <img
              src={task.avatar}
              alt={task.assignee}
              className="w-5 h-5 rounded-full object-cover border border-slate-200"
            />
          ) : (
            <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[9px] flex items-center justify-center">
              {task.assignee?.charAt(0) || 'U'}
            </div>
          )}
          <span className="truncate max-w-[80px]">{task.assignee}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 text-[10px]">
          {task.dueDate && (
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {task.dueDate}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
