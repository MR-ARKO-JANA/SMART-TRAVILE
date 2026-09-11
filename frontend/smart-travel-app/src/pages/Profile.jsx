import React, { useState, useEffect } from 'react';
import { User, Mail, Camera, MapPin, Calendar, Shield, LogOut, Edit3, Save } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || 'Traveler',
    email: user?.email || 'user@example.com',
    location: 'Mumbai, India',
    joinDate: 'September 2026',
    bio: 'Passionate traveller exploring the beauty of India one city at a time.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256&h=256&fit=crop',
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (user) {
      setProfile((prev) => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
      }));
    }
  }, [user]);

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSave = () => {
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const travelStats = [
    { label: 'Trips Taken', value: '4' },
    { label: 'Destinations Visited', value: '8' },
    { label: 'Bucket List', value: '5' },
    { label: 'Total Spent', value: '₹74,000' },
  ];

  return (
    <div className="max-w-[800px] mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-main">My Profile</h1>
        <p className="text-text-muted text-sm mt-1">Manage your account information</p>
      </div>

      {saved && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-sm font-semibold">
          ✅ Profile updated successfully!
        </div>
      )}

      {/* Profile Header */}
      <div className="bg-white rounded-3xl shadow-card overflow-hidden mb-6">
        <div className="h-32 bg-gradient-to-r from-primary to-blue-400"></div>
        <div className="px-6 pb-6 -mt-16">
          <div className="flex items-end gap-4">
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl bg-primary/10 border-4 border-white shadow-lg flex items-center justify-center text-4xl font-bold text-primary bg-white">
                {profile.name ? profile.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <button className="absolute bottom-1 right-1 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shadow-md hover:bg-blue-700 transition">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="pb-2 flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-text-main">{profile.name}</h2>
                  <p className="text-text-muted text-sm">{profile.email}</p>
                </div>
                <button onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-1.5 ${isEditing ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-text-main'}`}>
                  {isEditing ? <><Save className="w-4 h-4" /> Save</> : <><Edit3 className="w-4 h-4" /> Edit</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {travelStats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-primary">{stat.value}</p>
            <p className="text-xs text-text-muted font-medium mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Profile Form */}
      <div className="bg-white rounded-3xl p-6 shadow-card">
        <h2 className="text-lg font-bold text-text-main mb-5">Account Information</h2>
        <div className="flex flex-col gap-5">
          <div>
            <label className="text-sm font-semibold text-text-main mb-1.5 block">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input name="name" value={profile.name} onChange={handleChange} disabled={!isEditing}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition ${isEditing ? 'bg-white focus:border-primary focus:ring-2 focus:ring-blue-100' : 'bg-gray-50 text-text-muted cursor-not-allowed'}`} />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-text-main mb-1.5 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input name="email" value={profile.email} onChange={handleChange} disabled={!isEditing}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition ${isEditing ? 'bg-white focus:border-primary focus:ring-2 focus:ring-blue-100' : 'bg-gray-50 text-text-muted cursor-not-allowed'}`} />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-text-main mb-1.5 block">Location</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input name="location" value={profile.location} onChange={handleChange} disabled={!isEditing}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition ${isEditing ? 'bg-white focus:border-primary focus:ring-2 focus:ring-blue-100' : 'bg-gray-50 text-text-muted cursor-not-allowed'}`} />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-text-main mb-1.5 block">Bio</label>
            <textarea name="bio" rows="3" value={profile.bio} onChange={handleChange} disabled={!isEditing}
              className={`w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none transition resize-none ${isEditing ? 'bg-white focus:border-primary focus:ring-2 focus:ring-blue-100' : 'bg-gray-50 text-text-muted cursor-not-allowed'}`} />
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Calendar className="w-3.5 h-3.5" />
            Member since {profile.joinDate}
          </div>
          <button onClick={logout} className="flex items-center gap-1.5 px-4 py-2 text-red-500 hover:bg-red-50 rounded-xl text-sm font-semibold transition">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
