import React from "react";
import { X } from "lucide-react";
import TaskForm from "../../components/task/TaskForm";

function CreateTask({ isOpen, onClose, onCreate }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-md p-6 space-y-4 relative">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-lg font-bold text-slate-900">Add New Task</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <TaskForm onSubmit={onCreate} onCancel={onClose} />
      </div>
    </div>
  );
}

export default CreateTask;
