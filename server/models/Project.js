import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    category: {
      type: String,
      default: 'Web App',
    },
    description: {
      type: String,
      default: '',
    },
    workspace: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Workspace',
    },
    status: {
      type: String,
      enum: ['In Progress', 'Completed', 'On Hold'],
      default: 'In Progress',
    },
    priority: {
      type: String,
      enum: ['Urgent', 'High', 'Medium', 'Low'],
      default: 'Medium',
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    dueDate: {
      type: String,
      default: 'Next Sprint',
    },
    team: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project || mongoose.model('Project', projectSchema);
