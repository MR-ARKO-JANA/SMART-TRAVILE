import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PlanTrip from './pages/PlanTrip';
import Trips from './pages/Trips';
import TripDetails from './pages/TripDetails';
import BucketList from './pages/BucketList';
import Alerts from './pages/Alerts';
import Safety from './pages/Safety';
import Privacy from './pages/Privacy';
import Insights from './pages/Insights';
import Profile from './pages/Profile';

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<PlanTrip />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/bucketlist" element={<BucketList />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
