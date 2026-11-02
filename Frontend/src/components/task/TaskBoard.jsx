import { useState } from 'react';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragOverlay,
  useDroppable,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import TaskCard from './TaskCard';
import { Plus } from 'lucide-react';

const COLUMNS = [
  { id: 'To Do', label: 'To Do', color: 'bg-slate-400' },
  { id: 'In Progress', label: 'In Progress', color: 'bg-indigo-600' },
  { id: 'In Review', label: 'In Review', color: 'bg-purple-600' },
  { id: 'Completed', label: 'Completed', color: 'bg-emerald-600' },
];

function KanbanColumn({ id, label, color, tasks, onSelectTask, onAddTaskToColumn }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`bg-slate-100/70 p-4 rounded-3xl border border-slate-200/80 space-y-3 min-h-[480px] flex flex-col transition ${
        isOver ? 'bg-indigo-50/50 border-indigo-300 ring-2 ring-indigo-400/20' : ''
      }`}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between px-1 pb-1">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${color}`} />
          <h3 className="text-xs font-bold text-slate-900">{label}</h3>
          <span className="text-[10px] font-bold bg-white text-slate-600 px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs">
            {tasks.length}
          </span>
        </div>
        <button
          onClick={() => onAddTaskToColumn(id)}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white transition"
          title={`Add task to ${label}`}
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Task List */}
      <SortableContext
        items={tasks.map((t) => t.id.toString())}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-3 flex-1">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={() => onSelectTask(task)}
            />
          ))}

          {tasks.length === 0 && (
            <div className="h-32 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-[11px] text-slate-400 italic">
              Drop task here
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
}

export default function TaskBoard({ tasks = [], onTaskMove, onSelectTask, onAddTaskToColumn }) {
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragStart = (event) => {
    const { active } = event;
    const task = tasks.find((t) => t.id.toString() === active.id);
    if (task) setActiveTask(task);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id;
    const overId = over.id;

    // Check if dropped directly onto a column or onto another card
    let targetColumn = COLUMNS.find((col) => col.id === overId)?.id;
    if (!targetColumn) {
      // It was dropped onto another task, find that task's column
      const targetTask = tasks.find((t) => t.id.toString() === overId);
      if (targetTask) targetColumn = targetTask.status;
    }

    if (targetColumn && onTaskMove) {
      onTaskMove(taskId, targetColumn);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {COLUMNS.map((col) => (
          <KanbanColumn
            key={col.id}
            id={col.id}
            label={col.label}
            color={col.color}
            tasks={tasks.filter((t) => t.status === col.id)}
            onSelectTask={onSelectTask}
            onAddTaskToColumn={onAddTaskToColumn}
          />
        ))}
      </div>

      <DragOverlay>
        {activeTask ? (
          <div className="w-64 rotate-2 opacity-90 shadow-2xl">
            <TaskCard task={activeTask} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
