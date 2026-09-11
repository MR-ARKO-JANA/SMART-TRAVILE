import React from 'react';
import { Home, Map, FileText, Heart, Bell, Shield, Lock, BarChart3, User, Settings, Sun, Plane } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const mainLinks = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Plan Trip', icon: Map, path: '/plan' },
    { name: 'My Trips', icon: FileText, path: '/trips' },
    { name: 'Bucket List', icon: Heart, path: '/bucketlist' },
    { name: 'Alerts', icon: Bell, path: '/alerts' },
    { name: 'Safety', icon: Shield, path: '/safety' },
    { name: 'Privacy', icon: Lock, path: '/privacy' },
    { name: 'Insights', icon: BarChart3, path: '/insights' },
  ];

  const bottomLinks = [
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="w-[80px] bg-white flex flex-col items-center py-6 h-screen border-r border-gray-100 flex-shrink-0">
      {/* Logo */}
      <Link to="/" className="mb-8 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
        <Plane className="w-5 h-5 text-white" />
      </Link>

      <div className="flex-1 w-full flex flex-col items-center gap-1.5 overflow-y-auto">
        {mainLinks.map((link) => {
          const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all relative group ${
                isActive
                  ? 'bg-blue-50 text-primary'
                  : 'text-gray-400 hover:text-text-main hover:bg-gray-50'
              }`}
              title={link.name}
            >
              {isActive && <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-primary rounded-r-full"></div>}
              <link.icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.5px]'}`} />
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2.5 py-1 bg-gray-800 text-white text-[10px] font-semibold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap z-50">
                {link.name}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="w-full flex flex-col items-center gap-1.5 mt-2 pt-2 border-t border-gray-100">
        {bottomLinks.map((link) => {
          const isActive = currentPath === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all relative group ${
                isActive
                  ? 'bg-blue-50 text-primary'
                  : 'text-gray-400 hover:text-text-main hover:bg-gray-50'
              }`}
              title={link.name}
            >
              <link.icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.5px]'}`} />
              <div className="absolute left-full ml-2 px-2.5 py-1 bg-gray-800 text-white text-[10px] font-semibold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap z-50">
                {link.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
