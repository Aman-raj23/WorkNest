// ==========================================
// WorkNest Application Constants
// ==========================================

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  WORKSPACES: '/workspaces',
  PROJECTS: '/projects',
  TASKS: '/tasks',
  COMMENTS: '/comments',
  NOTIFICATIONS: '/notifications',
  AI: {
    PLAN: '/ai/plan',
    SUBTASKS: '/ai/subtasks',
    RISK: '/ai/risk',
    WORKLOAD: '/ai/workload',
    ASSISTANT: '/ai/assistant',
    REPORT: '/ai/report',
  },
};

// Task Statuses (Kanban columns)
export const TASK_STATUSES = ['To Do', 'In Progress', 'In Review', 'Completed'];

// Task Priorities
export const TASK_PRIORITIES = ['Low', 'Medium', 'High', 'Urgent'];

// Project Statuses
export const PROJECT_STATUSES = ['Planning', 'In Progress', 'Completed', 'On Hold', 'Archived'];

// Project Categories
export const PROJECT_CATEGORIES = [
  'Mobile App',
  'Web Application',
  'Backend Architecture',
  'Design & Marketing',
  'Infrastructure',
  'Data & Analytics',
  'DevOps',
  'Other',
];

// User Roles
export const USER_ROLES = [
  'Project Lead',
  'Developer',
  'UI/UX Designer',
  'QA Engineer',
  'DevOps Engineer',
  'Product Manager',
];

// Workspace Roles
export const WORKSPACE_ROLES = ['owner', 'admin', 'member', 'viewer'];

// Priority color mappings (Tailwind classes)
export const PRIORITY_COLORS = {
  Urgent: { bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-200', dot: 'bg-rose-500' },
  High: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500' },
  Medium: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500' },
  Low: { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-200', dot: 'bg-slate-400' },
};

// Status color mappings
export const STATUS_COLORS = {
  'To Do': { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200' },
  'In Progress': { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' },
  'In Review': { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200' },
  'Completed': { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' },
  'Planning': { bg: 'bg-sky-100', text: 'text-sky-700', border: 'border-sky-200' },
  'On Hold': { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' },
  'Archived': { bg: 'bg-gray-100', text: 'text-gray-500', border: 'border-gray-200' },
};

// Date format options
export const DATE_FORMAT = {
  SHORT: { month: 'short', day: 'numeric' },
  MEDIUM: { month: 'short', day: 'numeric', year: 'numeric' },
  LONG: { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' },
};

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
};

// Socket events
export const SOCKET_EVENTS = {
  TASK_UPDATED: 'task:updated',
  TASK_CREATED: 'task:created',
  TASK_DELETED: 'task:deleted',
  PROJECT_UPDATED: 'project:updated',
  COMMENT_ADDED: 'comment:added',
  NOTIFICATION: 'notification',
  USER_ONLINE: 'user:online',
  USER_OFFLINE: 'user:offline',
};
