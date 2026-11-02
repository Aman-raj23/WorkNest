import Task from '../models/Task.js';
import { sendSuccess, sendError } from '../utils/response.js';

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ order: 1, createdAt: -1 });
    return sendSuccess(res, 200, 'Tasks retrieved successfully', { tasks });
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const { title, description, project, projectName, status, priority, assignee, dueDate } = req.body;
    const task = await Task.create({
      title,
      description,
      project,
      projectName: projectName || 'General',
      status: status || 'To Do',
      priority: priority || 'Medium',
      assignee: assignee || 'Unassigned',
      dueDate: dueDate || 'Today',
    });

    return sendSuccess(res, 201, 'Task created successfully', { task });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return sendError(res, 404, 'Task not found');
    }
    return sendSuccess(res, 200, 'Task updated successfully', { task });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return sendError(res, 404, 'Task not found');
    }
    return sendSuccess(res, 200, 'Task deleted successfully');
  } catch (error) {
    next(error);
  }
};
