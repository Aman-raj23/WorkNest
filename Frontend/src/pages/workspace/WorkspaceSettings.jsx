import { useState } from 'react';
import { Building, Database, Users, Shield, Save, Check } from 'lucide-react';
import Button from '../../components/common/Button';
import { toast } from 'sonner';

export default function WorkspaceSettings() {
  const [workspaceName, setWorkspaceName] = useState('Acme Studio');
  const [workspaceSlug, setWorkspaceSlug] = useState('acme-studio');
  const [allowPublicInvites, setAllowPublicInvites] = useState(true);
  const [aiAssistantEnabled, setAiAssistantEnabled] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    toast.success('Workspace settings updated successfully!');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="pb-3 border-b border-slate-200/60">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Workspace Settings
        </h1>
        <p className="text-xs text-slate-500">
          Configure organization preferences, member permissions, and Gemini AI features
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* General Info Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <Building size={18} className="text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">General Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Workspace Name</label>
              <input
                type="text"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Workspace URL Identifier</label>
              <div className="flex items-center">
                <span className="px-3 py-2 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl text-xs text-slate-500">
                  worknest.io/
                </span>
                <input
                  type="text"
                  value={workspaceSlug}
                  onChange={(e) => setWorkspaceSlug(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-r-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Storage & Limits Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <Database size={18} className="text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">Workspace Storage & Capacity</h3>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-700">Asset & Project Storage</span>
              <span className="font-bold text-indigo-600">78% used (15.6 GB / 20 GB)</span>
            </div>
            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '78%' }} />
            </div>
            <p className="text-[11px] text-slate-400">
              Upgrade to WorkNest Enterprise for unlimited Cloudinary asset storage and 99.9% SLA.
            </p>
          </div>
        </div>

        {/* Feature Permissions */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <Shield size={18} className="text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">Intelligence & Access Controls</h3>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200/60 cursor-pointer hover:bg-slate-100/60 transition">
              <div>
                <p className="text-xs font-bold text-slate-900">Gemini AI Workspace Copilot</p>
                <p className="text-[11px] text-slate-500">
                  Allow automated sprint latency analysis and risk detection
                </p>
              </div>
              <input
                type="checkbox"
                checked={aiAssistantEnabled}
                onChange={(e) => setAiAssistantEnabled(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200/60 cursor-pointer hover:bg-slate-100/60 transition">
              <div>
                <p className="text-xs font-bold text-slate-900">Open Collaborator Invitations</p>
                <p className="text-[11px] text-slate-500">
                  Allow project leads to invite external contractors and clients
                </p>
              </div>
              <input
                type="checkbox"
                checked={allowPublicInvites}
                onChange={(e) => setAllowPublicInvites(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" variant="primary" size="md" icon={Save}>
            Save Workspace Settings
          </Button>
        </div>
      </form>
    </div>
  );
}
