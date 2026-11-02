import { useState } from 'react';
import { Plus, Search, CheckSquare, Clock, Filter, X } from 'lucide-react';
import { initialTasks } from '../../utils/mockData';
import TaskBoard from '../../components/task/TaskBoard';
import CreateTask from './CreateTask';
import Modal from '../../components/common/Modal';
import Button from '../../components/common/Button';
import TaskComments from '../../components/task/TaskComments';
import TaskAttachments from '../../components/task/TaskAttachments';
import { toast } from 'sonner';

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTaskStatus, setNewTaskStatus] = useState('To Do');

  const handleTaskMove = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id.toString() === taskId.toString() ? { ...t, status: newStatus } : t
      )
    );
    toast.success(`Moved task to "${newStatus}"`);
  };

  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      projectId: 1,
      projectName: taskData.projectName || 'Nova Mobile App 2.0',
      status: taskData.status || newTaskStatus,
      priority: taskData.priority || 'Medium',
      assignee: 'Aman Raj',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      dueDate: taskData.dueDate || 'Nov 12',
    };

    setTasks([newTask, ...tasks]);
    setShowCreateModal(false);
    toast.success('Task created successfully!');
  };

  const handleOpenCreateForColumn = (columnId) => {
    setNewTaskStatus(columnId);
    setShowCreateModal(true);
  };

  const filteredTasks = tasks.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.projectName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.assignee?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority =
      priorityFilter === 'All' || t.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-2 border-b border-slate-200/60">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Sprint Kanban Board
          </h1>
          <p className="text-xs text-slate-500">
            Drag and drop tasks between workflow columns to update real-time progress
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          icon={Plus}
          onClick={() => {
            setNewTaskStatus('To Do');
            setShowCreateModal(true);
          }}
        >
          Add Task
        </Button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, project, or assignee..."
            className="w-full pl-9 pr-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
          />
        </div>

        {/* Priority Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {['All', 'Urgent', 'High', 'Medium', 'Low'].map((pri) => (
            <button
              key={pri}
              onClick={() => setPriorityFilter(pri)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                priorityFilter === pri
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              {pri}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive DnD Task Board */}
      <TaskBoard
        tasks={filteredTasks}
        onTaskMove={handleTaskMove}
        onSelectTask={(task) => setSelectedTask(task)}
        onAddTaskToColumn={handleOpenCreateForColumn}
      />

      {/* Create Task Modal */}
      <CreateTask
        isOpen={showCreateModal}
        defaultStatus={newTaskStatus}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleAddTask}
      />

      {/* Task Details Modal */}
      {selectedTask && (
        <Modal
          isOpen={!!selectedTask}
          onClose={() => setSelectedTask(null)}
          title={selectedTask.title}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-6 pt-1">
            {/* Meta Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/60 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Status</span>
                <select
                  value={selectedTask.status}
                  onChange={(e) => {
                    handleTaskMove(selectedTask.id, e.target.value);
                    setSelectedTask({ ...selectedTask, status: e.target.value });
                  }}
                  className="font-semibold text-slate-800 bg-transparent outline-none cursor-pointer mt-0.5"
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="In Review">In Review</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Priority</span>
                <span className="font-semibold text-indigo-700 mt-0.5 inline-block">
                  {selectedTask.priority}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Assignee</span>
                <span className="font-semibold text-slate-800 mt-0.5 inline-block truncate">
                  {selectedTask.assignee}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Target Date</span>
                <span className="font-semibold text-slate-800 mt-0.5 inline-block">
                  {selectedTask.dueDate || 'None'}
                </span>
              </div>
            </div>

            {/* Task Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-slate-800">Task Scope</h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-slate-100">
                {selectedTask.description ||
                  'Coordinate cross-functional implementation, dependency analysis, and review requirements.'}
              </p>
            </div>

            {/* Attachments Section */}
            <TaskAttachments taskId={selectedTask.id} />

            {/* Comments Thread Section */}
            <TaskComments taskId={selectedTask.id} />
          </div>
        </Modal>
      )}
    </div>
  );
}
