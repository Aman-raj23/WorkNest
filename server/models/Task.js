import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Task title is required'],
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
    projectName: {
      type: String,
      default: 'General',
    },
    status: {
      type: String,
      enum: ['To Do', 'In Progress', 'In Review', 'Completed'],
      default: 'To Do',
    },
    priority: {
      type: String,
      enum: ['Urgent', 'High', 'Medium', 'Low'],
      default: 'Medium',
    },
    assignee: {
      type: String,
      default: 'Unassigned',
    },
    assigneeUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    dueDate: {
      type: String,
      default: 'Today',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Task || mongoose.model('Task', taskSchema);
