import React, { useState } from 'react';
import { AlertTriangle, Info, CloudRain, Wind, Bell, CheckCircle, X } from 'lucide-react';

const alertTypeConfig = {
  warning: { icon: AlertTriangle, bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-700' },
  danger: { icon: AlertTriangle, bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-100 text-red-700' },
  info: { icon: Info, bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
  weather: { icon: CloudRain, bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-700' },
};

const initialAlerts = [
  { id: 1, title: 'Monsoon Heavy Rainfall — Goa', message: 'Heavy rainfall expected along coastal Goa. Consider adjusting your beach plans and water activities.', alert_type: 'weather', location: 'Goa, India', created_at: '2 hours ago', read: false },
  { id: 2, title: 'Flight Advisory — Delhi Airport (DEL)', message: 'Dense fog in Delhi causing morning flight delays. Check your flight status before departing.', alert_type: 'warning', location: 'New Delhi, India', created_at: '5 hours ago', read: false },
  { id: 3, title: 'Landslide Warning — Leh Manali Highway', message: 'Landslides reported near Rohtang Pass. Highway maintenance underway; expect 3 hour delays.', alert_type: 'danger', location: 'Himachal Pradesh, India', created_at: '1 day ago', read: true },
  { id: 4, title: 'Vande Bharat Express Schedule Update', message: 'New high-speed Vande Bharat train added between Mumbai and Goa with reduced travel time.', alert_type: 'info', location: 'Mumbai - Goa Route', created_at: '2 days ago', read: true },
  { id: 5, title: 'High Altitude Travel Advisory — Ladakh', message: 'Temperatures dropping below 0°C in Leh. Proper winter gear and acclimatization recommended.', alert_type: 'weather', location: 'Leh Ladakh, India', created_at: '3 days ago', read: true },
];

const Alerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [filter, setFilter] = useState('all');

  const markAsRead = (id) => setAlerts(alerts.map((a) => a.id === id ? { ...a, read: true } : a));
  const dismiss = (id) => setAlerts(alerts.filter((a) => a.id !== id));
  const markAllRead = () => setAlerts(alerts.map((a) => ({ ...a, read: true })));

  const unreadCount = alerts.filter((a) => !a.read).length;
  const filtered = filter === 'all' ? alerts : filter === 'unread' ? alerts.filter((a) => !a.read) : alerts.filter((a) => a.alert_type === filter);

  return (
    <div className="max-w-[900px] mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-main flex items-center gap-2">
            <Bell className="w-6 h-6" /> Travel Alerts
          </h1>
          <p className="text-text-muted text-sm mt-1">{unreadCount} unread alert(s)</p>
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllRead} className="px-4 py-2 bg-white text-primary border border-blue-200 rounded-xl text-xs font-semibold hover:bg-blue-50 transition flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" /> Mark all read
          </button>
        )}
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {['all', 'unread', 'warning', 'danger', 'info', 'weather'].map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition capitalize ${filter === f ? 'bg-primary text-white' : 'bg-white text-text-muted shadow-sm hover:bg-gray-50'}`}>
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 shadow-card text-center">
          <p className="text-4xl mb-3">🔔</p>
          <p className="text-text-muted font-semibold">No alerts to show</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((alert) => {
            const config = alertTypeConfig[alert.alert_type] || alertTypeConfig.info;
            const Icon = config.icon;
            return (
              <div key={alert.id} className={`${config.bg} border ${config.border} rounded-2xl p-5 ${!alert.read ? 'ring-2 ring-blue-200' : ''} transition-all`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${config.badge}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-bold text-sm ${config.text}`}>{alert.title}</h3>
                        {!alert.read && <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>}
                      </div>
                      <p className="text-sm text-text-main font-medium mb-2">{alert.message}</p>
                      <div className="flex items-center gap-4 text-xs text-text-muted font-medium">
                        <span>📍 {alert.location}</span>
                        <span>🕐 {alert.created_at}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {!alert.read && (
                      <button onClick={() => markAsRead(alert.id)} className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition" title="Mark as read">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </button>
                    )}
                    <button onClick={() => dismiss(alert.id)} className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition" title="Dismiss">
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Alerts;
