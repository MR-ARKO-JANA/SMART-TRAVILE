import React, { useState } from 'react';
import { Phone, Shield, MapPin, AlertTriangle, Siren, Heart, Flame, Navigation } from 'lucide-react';

const emergencyContacts = [
  { name: 'National Emergency', number: '112', icon: Siren, color: 'bg-purple-500' },
  { name: 'Police', number: '100', icon: Shield, color: 'bg-blue-500' },
  { name: 'Ambulance', number: '108', icon: Heart, color: 'bg-red-500' },
  { name: 'Fire Department', number: '101', icon: Flame, color: 'bg-orange-500' },
];

const safetyTips = [
  { title: 'Share Your Itinerary', desc: 'Always share your travel plans with a trusted friend or family member before departing.' },
  { title: 'Keep Copies of Documents', desc: 'Photograph your passport, ID, insurance, and tickets. Store them in a secure cloud location.' },
  { title: 'Research Local Laws', desc: 'Understand the local laws and customs of your destination to avoid unintentional violations.' },
  { title: 'Register with Your Embassy', desc: 'Register your travel plans with your country\'s embassy or consulate in the destination country.' },
  { title: 'Stay Alert in Crowded Areas', desc: 'Keep your valuables secure and be aware of your surroundings in tourist-heavy areas.' },
  { title: 'Have Travel Insurance', desc: 'Ensure your travel insurance covers medical emergencies, trip cancellations, and lost luggage.' },
];

const Safety = () => {
  const [sosTriggered, setSosTriggered] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const triggerSOS = () => {
    setSosTriggered(true);
    let count = 5;
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        alert('🚨 SOS Alert Sent! (Demo mode — in production this would contact emergency services and share your location)');
        setSosTriggered(false);
        setCountdown(5);
      }
    }, 1000);
  };

  const cancelSOS = () => {
    setSosTriggered(false);
    setCountdown(5);
  };

  return (
    <div className="max-w-[900px] mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-main flex items-center gap-2">
          <Shield className="w-6 h-6" /> Safety & Emergency
        </h1>
        <p className="text-text-muted text-sm mt-1">Quick access to emergency services and safety information</p>
      </div>

      {/* SOS Button */}
      <div className="bg-white rounded-3xl p-8 shadow-card mb-6 text-center">
        <Siren className="w-10 h-10 text-red-500 mx-auto mb-3" />
        <h2 className="text-lg font-bold text-text-main mb-2">Emergency SOS</h2>
        <p className="text-text-muted text-sm mb-6 max-w-md mx-auto">
          Press the SOS button to send an emergency alert. Your location will be shared with emergency contacts.
        </p>
        {!sosTriggered ? (
          <button onClick={triggerSOS}
            className="w-40 h-40 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold text-2xl mx-auto flex items-center justify-center shadow-lg hover:shadow-xl transition-all animate-pulse border-4 border-red-300">
            SOS
          </button>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-40 h-40 rounded-full bg-red-600 text-white font-bold text-lg mx-auto flex flex-col items-center justify-center shadow-xl border-4 border-red-400">
              <span className="text-4xl font-bold">{countdown}</span>
              <span className="text-xs mt-1">Sending alert...</span>
            </div>
            <button onClick={cancelSOS} className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-text-main rounded-xl text-sm font-semibold transition">
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white rounded-3xl p-6 shadow-card mb-6">
        <h2 className="text-lg font-bold text-text-main mb-4">Emergency Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, i) => (
            <a key={i} href={`tel:${contact.number}`}
              className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition cursor-pointer group">
              <div className={`w-12 h-12 rounded-xl ${contact.color} flex items-center justify-center flex-shrink-0`}>
                <contact.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-text-main text-sm">{contact.name}</p>
                <p className="text-text-muted text-xs">{contact.number}</p>
              </div>
              <Phone className="w-5 h-5 text-text-muted group-hover:text-primary transition" />
            </a>
          ))}
        </div>
      </div>

      {/* Safety Tips */}
      <div className="bg-white rounded-3xl p-6 shadow-card">
        <h2 className="text-lg font-bold text-text-main mb-4">Safety Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {safetyTips.map((tip, i) => (
            <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-text-main text-sm mb-1 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" /> {tip.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Safety;
