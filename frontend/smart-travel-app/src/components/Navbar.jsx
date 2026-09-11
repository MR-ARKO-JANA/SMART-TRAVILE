import React from 'react';
import { Search, Bell, LogIn, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="h-[80px] flex items-center justify-between px-8 bg-transparent w-full">
      <div className="flex-1 max-w-[400px]">
        <div className="relative flex items-center w-full h-10 rounded-full bg-white shadow-sm border border-gray-100 px-4">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search trips, destinations.." 
            className="w-full bg-transparent outline-none text-sm text-text-main placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-gray-100 rounded-full p-1 text-xs font-medium">
          <button className="px-3 py-1.5 rounded-full bg-primary text-white shadow-sm">IN (INR)</button>
          <button className="px-3 py-1.5 rounded-full text-gray-600 hover:text-gray-900 transition-colors">Global</button>
        </div>

        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full shadow-sm border border-gray-100">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/profile" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-sm bg-primary/10 flex items-center justify-center font-bold text-primary">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <span className="text-sm font-semibold text-text-main hidden md:inline">{user.name}</span>
            </Link>
            <button 
              onClick={logout}
              className="p-2 text-gray-400 hover:text-red-600 transition-colors bg-white rounded-full shadow-sm border border-gray-100"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <Link 
            to="/login"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
