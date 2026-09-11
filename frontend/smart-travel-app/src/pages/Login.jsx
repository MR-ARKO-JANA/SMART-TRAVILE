import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Plane } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    if (!validate()) return;
    setIsLoading(true);
    const res = await login(email, password);
    setIsLoading(false);
    if (res.success) navigate('/');
    else setApiError(res.message);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Indian Travel Imagery */}
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
          alt="India Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-indigo-900/70"></div>
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">Smart Travel</span>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
              Your India,<br />Your Journey.
            </h1>
            <p className="text-white/75 text-base leading-relaxed max-w-sm">
              Discover the breathtaking landscapes, rich heritage, and vibrant culture of India — all planned in one smart app.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Goa 🏖️', 'Leh ❄️', 'Jaipur 🏯', 'Kerala 🌿', 'Manali 🏔️'].map((d) => (
                <span key={d} className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-10 bg-gray-50">
        <div className="w-full max-w-[420px]">
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center">
              <Plane className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">Smart Travel</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome back</h2>
            <p className="text-gray-500 text-sm">Log in to continue your India adventure</p>
          </div>

          {apiError && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl flex items-center gap-2">
              <span>⚠️</span> {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'} text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all`} />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-11 pr-12 py-3.5 rounded-xl border ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'} text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all`} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-blue-600" />
                <span className="text-sm text-gray-500">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 font-semibold hover:underline">Forgot password?</a>
            </div>

            <button type="submit" disabled={isLoading}
              className="w-full py-3.5 mt-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-200 flex items-center justify-center gap-2">
              {isLoading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'Log in to Smart Travel'}
            </button>

            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400 font-medium">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <button type="button" className="w-full py-3.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-3 shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-7">
            New to Smart Travel?{' '}
            <Link to="/register" className="text-blue-600 font-bold hover:underline">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
