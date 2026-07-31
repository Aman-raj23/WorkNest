import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { initialTasks } from "../../utils/mockData";
import TaskBoard from "../../components/task/TaskBoard";
import CreateTask from "./CreateTask";

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      projectId: 1,
      projectName: "WorkNest Project",
      status: taskData.status,
      priority: taskData.priority,
      assignee: "Aman Raj",
      avatar: "https://static.vecteezy.com/system/resources/previews/071/309/483/non_2x/professional-man-working-on-laptop-avatar-style-illustration-for-business-presentation-free-vector.jpg",
      dueDate: "Today",
    };

    setTasks([...tasks, newTask]);
    setShowModal(false);
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Tasks Board</h1>
          <p className="text-xs text-slate-500">Organize and track individual task progress</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/30 transition flex items-center gap-2 cursor-pointer"
        >
          <Plus size={16} /> Add Task
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks..."
            className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
          />
        </div>
      </div>

      {/* Modular Task Board */}
      <TaskBoard tasks={filteredTasks} />

      {/* Create Task Modal */}
      <CreateTask
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onCreate={handleAddTask}
      />
    </div>
  );
}

export default Tasks;
