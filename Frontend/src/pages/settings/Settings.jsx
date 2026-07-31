import React, { useState } from "react";
import { Sliders, Bell, ShieldCheck, Palette, Check } from "lucide-react";

function Settings() {
  const [activeTab, setActiveTab] = useState("General");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackAlerts, setSlackAlerts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [saved, setSaved] = useState(false);

  const tabs = [
    { name: "General", icon: <Sliders size={16} /> },
    { name: "Notifications", icon: <Bell size={16} /> },
    { name: "Security", icon: <ShieldCheck size={16} /> },
    { name: "Theme", icon: <Palette size={16} /> },
  ];

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Workspace Settings</h1>
        <p className="text-xs text-slate-500">Configure workspace preferences and notifications</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
        {tabs.map((t) => (
          <button
            key={t.name}
            onClick={() => setActiveTab(t.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
              activeTab === t.name
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {t.icon}
            <span>{t.name}</span>
          </button>
        ))}
      </div>

      {/* Settings Body */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-6 max-w-3xl">
        {saved && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-700 font-medium flex items-center gap-2">
            <Check size={16} /> Settings saved successfully!
          </div>
        )}

        <form onSubmit={handleSaveSettings} className="space-y-6">
          {activeTab === "General" && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Workspace Name</label>
                <input
                  type="text"
                  defaultValue="WorkNest Workspace"
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Primary Timezone</label>
                <select className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 cursor-pointer">
                  <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                  <option>(GMT+00:00) London, UTC</option>
                  <option>(GMT+05:30) India Standard Time (IST)</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "Notifications" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200/60">
                <div>
                  <p className="text-xs font-bold text-slate-800">Email Notifications</p>
                  <p className="text-[11px] text-slate-500">Receive daily summary emails of active tasks</p>
                </div>
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200/60">
                <div>
                  <p className="text-xs font-bold text-slate-800">Slack Instant Alerts</p>
                  <p className="text-[11px] text-slate-500">Ping Slack channel on high priority task creation</p>
                </div>
                <input
                  type="checkbox"
                  checked={slackAlerts}
                  onChange={(e) => setSlackAlerts(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>
            </div>
          )}

          {activeTab === "Security" && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">New Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
                />
              </div>
            </div>
          )}

          {activeTab === "Theme" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200/60">
                <div>
                  <p className="text-xs font-bold text-slate-800">Dark Mode Contrast</p>
                  <p className="text-[11px] text-slate-500">Switch workspace layout color scheme</p>
                </div>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-slate-100">
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/30 transition cursor-pointer"
            >
              Save Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
