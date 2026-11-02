import { Routes, Route } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

// Public pages
import Landing from "../pages/landingpage/LandingPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

// Dashboard & App pages
import Dashboard from "../pages/dashboard/Dashboard";
import Projects from "../pages/projects/Projects";
import ProjectDetails from "../pages/projects/ProjectDetails";
import Tasks from "../pages/tasks/Tasks";
import TaskDetails from "../pages/tasks/TaskDetails";
import AIInsights from "../pages/ai/AIInsights";
import Team from "../pages/team/Team";
import Notifications from "../pages/notifications/Notifications";
import WorkspaceSettings from "../pages/workspace/WorkspaceSettings";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";

// Error pages
import Unauthorized from "../pages/errors/Unauthorized";
import NotFound from "../pages/errors/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Landing */}
      <Route path="/" element={<Landing />} />

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/ai-insights" element={<AIInsights />} />
          <Route path="/team" element={<Team />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/workspace-settings" element={<WorkspaceSettings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>

      {/* Error & Fallback Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}