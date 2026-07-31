import React, { useState } from "react";
import { currentUser } from "../../utils/mockData";
import ProfileCard from "../../components/profile/ProfileCard";
import EditProfileForm from "../../components/profile/EditProfileForm";

function Profile() {
  const [name, setName] = useState(currentUser.name);
  const [bio, setBio] = useState(currentUser.bio);
  const [role, setRole] = useState(currentUser.role);

  const handleSave = () => {
    // State update callback
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">User Profile</h1>
        <p className="text-xs text-slate-500">Manage your account information and preferences</p>
      </div>

      <ProfileCard user={currentUser} name={name} role={role} bio={bio} />

      <EditProfileForm
        name={name}
        role={role}
        bio={bio}
        setName={setName}
        setRole={setRole}
        setBio={setBio}
        onSave={handleSave}
      />
    </div>
  );
}

export default Profile;
