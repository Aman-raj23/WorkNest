import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { initialProjects } from "../../utils/mockData";
import ProjectCard from "../../components/project/ProjectCard";
import CreateProject from "./CreateProject";

function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Filter projects by tab & search
  const filteredProjects = projects.filter((p) => {
    const matchesTab = activeTab === "All" || p.status === activeTab;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleCreateProject = (projectData) => {
    const newProj = {
      id: Date.now(),
      title: projectData.title,
      category: projectData.category,
      description: projectData.description,
      progress: 0,
      dueDate: projectData.dueDate,
      status: "In Progress",
      priority: "Medium",
      team: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80"],
      taskCount: { total: 0, completed: 0 },
    };

    setProjects([newProj, ...projects]);
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Projects</h1>
          <p className="text-xs text-slate-500">Manage and monitor team projects and milestones</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/30 transition flex items-center gap-2 cursor-pointer"
        >
          <Plus size={16} /> Create Project
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {["All", "In Progress", "Completed", "On Hold"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter projects..."
            className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
          />
        </div>
      </div>

      {/* Projects Grid using ProjectCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      {/* Create Project Modal Dialog */}
      <CreateProject
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onCreate={handleCreateProject}
      />
    </div>
  );
}

export default Projects;
