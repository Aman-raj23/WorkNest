import { useState } from 'react';
import {
  Users,
  UserPlus,
  Mail,
  Shield,
  Search,
  CheckCircle2,
  FolderKanban,
  CheckSquare,
  MoreVertical,
} from 'lucide-react';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import { toast } from 'sonner';

const initialMembers = [
  {
    id: 1,
    name: 'Aman Raj',
    email: 'amanraj@worknest.com',
    role: 'Project Lead',
    department: 'Management',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    status: 'Online',
    projectsCount: 4,
    tasksCount: 8,
    workload: 76,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    email: 'sarah.c@worknest.com',
    role: 'Staff Mobile Architect',
    department: 'Engineering',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    status: 'Online',
    projectsCount: 3,
    tasksCount: 12,
    workload: 98,
  },
  {
    id: 3,
    name: 'David Kim',
    email: 'david.k@worknest.com',
    role: 'iOS Engineer II',
    department: 'Engineering',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    status: 'Away',
    projectsCount: 2,
    tasksCount: 5,
    workload: 54,
  },
  {
    id: 4,
    name: 'Elena Rostova',
    email: 'elena.r@worknest.com',
    role: 'Lead Product Designer',
    department: 'Design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    status: 'Online',
    projectsCount: 3,
    tasksCount: 7,
    workload: 82,
  },
  {
    id: 5,
    name: 'Marcus Vance',
    email: 'marcus.v@worknest.com',
    role: 'Backend Systems Engineer',
    department: 'Engineering',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    status: 'Offline',
    projectsCount: 2,
    tasksCount: 6,
    workload: 74,
  },
  {
    id: 6,
    name: 'Priya Sharma',
    email: 'priya.s@worknest.com',
    role: 'QA Automation Lead',
    department: 'QA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    status: 'Online',
    projectsCount: 4,
    tasksCount: 9,
    workload: 80,
  },
];

export default function Team() {
  const [members, setMembers] = useState(initialMembers);
  const [filterRole, setFilterRole] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('Developer');

  const filteredMembers = members.filter((member) => {
    const matchesFilter =
      filterRole === 'All' ||
      member.department === filterRole ||
      member.role.toLowerCase().includes(filterRole.toLowerCase());
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleInvite = (e) => {
    e.preventDefault();
    if (!newEmail || !newName) return;

    const newMember = {
      id: Date.now(),
      name: newName,
      email: newEmail,
      role: newRole,
      department: newRole.includes('Designer') ? 'Design' : 'Engineering',
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(newName)}`,
      status: 'Offline',
      projectsCount: 1,
      tasksCount: 0,
      workload: 20,
    };

    setMembers([newMember, ...members]);
    setIsInviteOpen(false);
    setNewName('');
    setNewEmail('');
    toast.success(`Invitation sent to ${newEmail}!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/60">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Team Members</h1>
          <p className="text-xs text-slate-500">
            Manage contributors, departments, and capacity across the workspace
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          icon={UserPlus}
          onClick={() => setIsInviteOpen(true)}
        >
          Invite Member
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search team by name or role..."
            className="w-full pl-9 pr-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 shadow-2xs"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {['All', 'Engineering', 'Design', 'QA', 'Management'].map((dept) => (
            <button
              key={dept}
              onClick={() => setFilterRole(dept)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                filterRole === dept
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Member Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-2xl object-cover border border-slate-200 shadow-2xs"
                  />
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                      member.status === 'Online'
                        ? 'bg-emerald-500'
                        : member.status === 'Away'
                        ? 'bg-amber-500'
                        : 'bg-slate-300'
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{member.name}</h3>
                  <p className="text-[11px] text-slate-500">{member.email}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-semibold">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <FolderKanban size={14} className="text-indigo-600" />
                <span>
                  <strong>{member.projectsCount}</strong> Projects
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquare size={14} className="text-purple-600" />
                <span>
                  <strong>{member.tasksCount}</strong> Tasks
                </span>
              </div>
            </div>

            {/* Workload */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-medium">
                <span className="text-slate-500">Weekly Workload</span>
                <span
                  className={
                    member.workload > 90
                      ? 'text-rose-600 font-bold'
                      : member.workload > 75
                      ? 'text-indigo-600 font-bold'
                      : 'text-slate-600'
                  }
                >
                  {member.workload}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    member.workload > 90
                      ? 'bg-rose-500'
                      : member.workload > 75
                      ? 'bg-indigo-600'
                      : 'bg-emerald-500'
                  }`}
                  style={{ width: `${member.workload}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Invite Modal */}
      <Modal
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
        title="Invite New Team Member"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleInvite} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Full Name</label>
            <input
              type="text"
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="e.g. Liam Taylor"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Email Address</label>
            <input
              type="email"
              required
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="liam@worknest.com"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Role / Title</label>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
            >
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="QA Engineer">QA Engineer</option>
              <option value="Product Manager">Product Manager</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setIsInviteOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              Send Invite
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
