import { useState } from 'react';
import { Plus, Search, LayoutGrid, List, FolderKanban, CheckCircle2, Clock, Users } from 'lucide-react';
import { initialProjects } from '../../utils/mockData';
import ProjectCard from '../../components/project/ProjectCard';
import ProjectList from '../../components/project/ProjectList';
import CreateProject from './CreateProject';
import EmptyState from '../../components/common/EmptyState';
import Button from '../../components/common/Button';

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [showModal, setShowModal] = useState(false);

  // Filter projects by tab & search
  const filteredProjects = projects.filter((p) => {
    const matchesTab = activeTab === 'All' || p.status === activeTab;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
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
      status: 'In Progress',
      priority: 'Medium',
      team: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80'],
      taskCount: { total: 0, completed: 0 },
    };

    setProjects([newProj, ...projects]);
    setShowModal(false);
  };

  const completedCount = projects.filter((p) => p.status === 'Completed').length;
  const inProgressCount = projects.filter((p) => p.status === 'In Progress').length;

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-2 border-b border-slate-200/60">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Projects Directory</h1>
          <p className="text-xs text-slate-500">
            Monitor cross-functional initiatives, progress, and team assignments
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          icon={Plus}
          onClick={() => setShowModal(true)}
        >
          Create Project
        </Button>
      </div>

      {/* Quick Summary Metrics Strip (Stitch-aligned) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <FolderKanban size={18} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-400">Total Projects</p>
            <p className="text-lg font-extrabold text-slate-900">{projects.length}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Clock size={18} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-400">In Progress</p>
            <p className="text-lg font-extrabold text-slate-900">{inProgressCount}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-400">Completed</p>
            <p className="text-lg font-extrabold text-slate-900">{completedCount}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Users size={18} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-400">Contributors</p>
            <p className="text-lg font-extrabold text-slate-900">8 Members</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs, Search Bar & Grid/List View Toggle */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {['All', 'In Progress', 'Completed', 'On Hold'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 md:w-64">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by title or tag..."
              className="w-full pl-9 pr-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
            />
          </div>

          {/* View Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition ${
                viewMode === 'grid'
                  ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Grid View"
            >
              <LayoutGrid size={15} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition ${
                viewMode === 'list'
                  ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Table View"
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Content Rendering: Grid vs List */}
      {filteredProjects.length === 0 ? (
        <EmptyState
          title="No projects found"
          description="Try adjusting your filter or search keywords."
          action={
            <Button variant="primary" size="sm" onClick={() => setShowModal(true)}>
              Create Project
            </Button>
          }
        />
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      ) : (
        <ProjectList projects={filteredProjects} />
      )}

      {/* Create Project Modal Dialog */}
      <CreateProject
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onCreate={handleCreateProject}
      />
    </div>
  );
}
