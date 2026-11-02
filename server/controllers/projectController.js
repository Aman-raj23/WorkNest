import Project from '../models/Project.js';
import { sendSuccess, sendError } from '../utils/response.js';

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().populate('team', 'name email avatar role');
    return sendSuccess(res, 200, 'Projects retrieved successfully', { projects });
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id).populate('team', 'name email avatar role');
    if (!project) {
      return sendError(res, 404, 'Project not found');
    }
    return sendSuccess(res, 200, 'Project details retrieved', { project });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const { title, category, description, dueDate, priority, progress } = req.body;
    const project = await Project.create({
      title,
      category,
      description,
      dueDate,
      priority: priority || 'Medium',
      progress: progress || 0,
      team: req.user?.id ? [req.user.id] : [],
    });

    return sendSuccess(res, 201, 'Project created successfully', { project });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) {
      return sendError(res, 404, 'Project not found');
    }
    return sendSuccess(res, 200, 'Project updated successfully', { project });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return sendError(res, 404, 'Project not found');
    }
    return sendSuccess(res, 200, 'Project deleted successfully');
  } catch (error) {
    next(error);
  }
};
