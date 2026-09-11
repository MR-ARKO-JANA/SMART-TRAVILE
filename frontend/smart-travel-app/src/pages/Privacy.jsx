import React, { useState } from 'react';
import { ShieldCheck, Eye, MapPin, Database, ToggleLeft, ToggleRight, FileText, Lock } from 'lucide-react';

const Privacy = () => {
  const [consent, setConsent] = useState({
    research_data: false,
    location_data: false,
    analytics: true,
    personalized: true,
  });

  const toggleConsent = (key) => {
    setConsent({ ...consent, [key]: !consent[key] });
  };

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const consentItems = [
    { key: 'research_data', label: 'Research Data Sharing', desc: 'Allow your anonymized trip data (origin, destination, travel mode, date) to be used for transportation research and planning. No personal information is shared.', icon: Database, critical: true },
    { key: 'location_data', label: 'Location Data Collection', desc: 'Allow the app to collect your approximate location during trips to improve route suggestions and emergency services.', icon: MapPin, critical: true },
    { key: 'analytics', label: 'Usage Analytics', desc: 'Help us improve the app by sharing anonymous usage statistics like which features you use most.', icon: Eye, critical: false },
    { key: 'personalized', label: 'Personalized Recommendations', desc: 'Use your travel history to provide personalized destination recommendations and travel tips.', icon: ShieldCheck, critical: false },
  ];

  return (
    <div className="max-w-[800px] mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-main flex items-center gap-2">
          <Lock className="w-6 h-6" /> Privacy & Consent
        </h1>
        <p className="text-text-muted text-sm mt-1">Control what data is collected and how it is used</p>
      </div>

      {saved && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-sm font-semibold flex items-center gap-2">
          ✅ Consent settings saved successfully!
        </div>
      )}

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-primary mb-1">Your Privacy Matters</h3>
            <p className="text-xs text-blue-700 leading-relaxed">
              Smart Travel Insights follows a privacy-first approach. Research data is only collected with your explicit consent. 
              You can change these settings at any time, and any previously shared data can be withdrawn.
            </p>
          </div>
        </div>
      </div>

      {/* Consent Toggles */}
      <div className="bg-white rounded-3xl p-6 shadow-card mb-6">
        <h2 className="text-lg font-bold text-text-main mb-5">Data Sharing Preferences</h2>
        <div className="flex flex-col gap-6">
          {consentItems.map((item) => (
            <div key={item.key} className={`flex items-start justify-between gap-4 p-4 rounded-2xl border ${consent[item.key] ? 'border-blue-200 bg-blue-50/50' : 'border-gray-100 bg-gray-50/50'} transition-all`}>
              <div className="flex items-start gap-3 flex-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${consent[item.key] ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'} transition-all`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-text-main text-sm">{item.label}</h3>
                    {item.critical && <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded">IMPORTANT</span>}
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
              <button onClick={() => toggleConsent(item.key)} className="flex-shrink-0 mt-1">
                {consent[item.key] ? (
                  <ToggleRight className="w-10 h-10 text-primary" />
                ) : (
                  <ToggleLeft className="w-10 h-10 text-gray-300" />
                )}
              </button>
            </div>
          ))}
        </div>

        <button onClick={handleSave}
          className="mt-6 w-full py-3.5 bg-primary hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-sm">
          Save Preferences
        </button>
      </div>

      {/* Privacy Policy */}
      <div className="bg-white rounded-3xl p-6 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-text-muted" />
          <h2 className="text-lg font-bold text-text-main">What We Collect & Why</h2>
        </div>
        <div className="space-y-4 text-sm">
          <div className="p-3 rounded-xl bg-gray-50">
            <p className="font-semibold text-text-main mb-1">Trip Information</p>
            <p className="text-text-muted text-xs">Origin, destination, travel mode, date, and budget — used to provide trip management features and, with consent, for transportation research.</p>
          </div>
          <div className="p-3 rounded-xl bg-gray-50">
            <p className="font-semibold text-text-main mb-1">Account Information</p>
            <p className="text-text-muted text-xs">Name, email — used for authentication and communication. Never shared with third parties.</p>
          </div>
          <div className="p-3 rounded-xl bg-gray-50">
            <p className="font-semibold text-text-main mb-1">Research Data</p>
            <p className="text-text-muted text-xs">Anonymized, aggregated travel patterns — only collected when research data sharing is enabled. Used for transportation planning insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
