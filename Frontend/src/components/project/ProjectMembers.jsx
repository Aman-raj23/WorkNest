import { useState } from 'react';
import { UserPlus, Mail, Shield, Trash2, Check } from 'lucide-react';
import Button from '../common/Button';
import Modal from '../common/Modal';

export default function ProjectMembers({ members = [], onAddMember, onRemoveMember }) {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('Developer');
  const [inviteSuccess, setInviteSuccess] = useState(false);

  const defaultMembers = [
    {
      id: 1,
      name: 'Aman Raj',
      email: 'amanraj@worknest.com',
      role: 'Project Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      isLead: true,
    },
    {
      id: 2,
      name: 'Sarah Chen',
      email: 'sarah.c@worknest.com',
      role: 'Staff Mobile Architect',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      name: 'David Kim',
      email: 'david.k@worknest.com',
      role: 'Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      name: 'Elena Rostova',
      email: 'elena.r@worknest.com',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    },
  ];

  const currentMembers = members.length > 0 ? members : defaultMembers;

  const handleSendInvite = (e) => {
    e.preventDefault();
    if (!inviteEmail) return;

    if (onAddMember) {
      onAddMember({ email: inviteEmail, role: inviteRole });
    }

    setInviteSuccess(true);
    setTimeout(() => {
      setInviteSuccess(false);
      setIsInviteOpen(false);
      setInviteEmail('');
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <h3 className="text-base font-bold text-slate-900">Project Team</h3>
          <p className="text-xs text-slate-500">
            {currentMembers.length} collaborators on this project
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          icon={UserPlus}
          onClick={() => setIsInviteOpen(true)}
        >
          Add Member
        </Button>
      </div>

      <div className="divide-y divide-slate-100">
        {currentMembers.map((member) => (
          <div key={member.id} className="py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-9 h-9 rounded-full object-cover border border-slate-200"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-semibold text-slate-900">{member.name}</h4>
                  {member.isLead && (
                    <span className="text-[10px] bg-indigo-50 text-indigo-700 font-semibold px-1.5 py-0.2 rounded">
                      Lead
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500">{member.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                {member.role}
              </span>
              {!member.isLead && onRemoveMember && (
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition"
                  title="Remove from project"
                >
                  <Trash2 size={13} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Invite Modal */}
      <Modal
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
        title="Invite Collaborator"
        maxWidth="max-w-md"
      >
        {inviteSuccess ? (
          <div className="py-6 text-center space-y-2">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check size={20} />
            </div>
            <p className="text-xs font-semibold text-slate-900">Invitation Sent!</p>
            <p className="text-xs text-slate-500">
              An invite was sent to <strong className="text-slate-700">{inviteEmail}</strong>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendInvite} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail size={15} />
                </span>
                <input
                  type="email"
                  required
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="colleague@worknest.com"
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Role</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Shield size={15} />
                </span>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
                >
                  <option value="Developer">Developer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="QA Tester">QA Tester</option>
                  <option value="Product Manager">Product Manager</option>
                </select>
              </div>
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
                Send Invitation
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
