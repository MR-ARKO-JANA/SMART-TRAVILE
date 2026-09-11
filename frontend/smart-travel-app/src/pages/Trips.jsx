import React, { useState, useEffect } from 'react';
import { Calendar, Car, Train, Plane, Bike, Ship, IndianRupee, Trash2, Eye, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const modeIcons = { car: Car, train: Train, flight: Plane, bike: Bike, ship: Ship };

const sampleIndianTrips = [
  { id: 1, origin: 'Mumbai', destination: 'Goa', travel_date: '2026-10-15', travel_mode: 'train', travellers: 2, budget: 15000, notes: 'Beach vacation', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80' },
  { id: 2, origin: 'Delhi', destination: 'Manali', travel_date: '2026-11-20', travel_mode: 'car', travellers: 4, budget: 25000, notes: 'Snow & mountains', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80' },
  { id: 3, origin: 'Bengaluru', destination: 'Ooty', travel_date: '2026-12-10', travel_mode: 'car', travellers: 2, budget: 12000, notes: 'Hill station retreat', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=400&q=80' },
  { id: 4, origin: 'Kolkata', destination: 'Darjeeling', travel_date: '2026-09-28', travel_mode: 'train', travellers: 3, budget: 18000, notes: 'Tea gardens visit', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80' },
];

const Trips = () => {
  const [trips, setTrips] = useState(sampleIndianTrips);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('/trips');
        if (data && data.length > 0) {
          setTrips(data);
        }
      } catch (err) {
        console.log('Using sample Indian trips fallback');
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  const filteredTrips = trips.filter((t) => {
    const matchSearch = t.destination.toLowerCase().includes(search.toLowerCase()) || t.origin.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || t.travel_mode === filter;
    return matchSearch && matchFilter;
  });

  const deleteTrip = async (id) => {
    if (confirm('Are you sure you want to delete this trip?')) {
      try {
        await api.delete(`/trips/${id}`);
      } catch (e) {
        console.log('Local delete');
      }
      setTrips(trips.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-main">My Trips</h1>
          <p className="text-text-muted text-sm mt-1">{filteredTrips.length} trip(s) found</p>
        </div>
        <Link to="/plan" className="px-6 py-2.5 bg-primary hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition shadow-sm">
          + New Trip
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-card mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search trips in India..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-primary transition" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {['all', 'flight', 'train', 'car', 'bike', 'ship'].map((mode) => (
            <button key={mode} onClick={() => setFilter(mode)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition capitalize ${filter === mode ? 'bg-primary text-white' : 'bg-gray-100 text-text-muted hover:bg-gray-200'}`}>
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Trip Cards */}
      {filteredTrips.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 shadow-card text-center">
          <p className="text-text-muted text-lg font-semibold">No trips found</p>
          <p className="text-text-muted text-sm mt-1">Try adjusting your search or create a new trip.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTrips.map((trip) => {
            const ModeIcon = modeIcons[trip.travel_mode] || Car;
            const tripImg = trip.image || 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80';
            return (
              <div key={trip.id} className="bg-white rounded-3xl shadow-card overflow-hidden flex flex-col md:flex-row group hover:shadow-lg transition-shadow">
                <div className="w-full md:w-[180px] h-[160px] md:h-auto flex-shrink-0 overflow-hidden">
                  <img src={tripImg} alt={trip.destination} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-text-main text-lg">{trip.origin} → {trip.destination}</h3>
                      <span className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-primary rounded-lg text-xs font-semibold capitalize">
                        <ModeIcon className="w-3.5 h-3.5" /> {trip.travel_mode}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-text-muted font-medium mt-2">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {trip.travel_date}</span>
                      <span className="flex items-center gap-1"><IndianRupee className="w-3.5 h-3.5" /> {trip.budget}</span>
                      <span className="flex items-center gap-1">👥 {trip.travellers} traveller(s)</span>
                    </div>
                    {trip.notes && <p className="text-xs text-text-muted mt-2 italic">"{trip.notes}"</p>}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Link to={`/trips/${trip.id}`} className="flex-1 py-2 bg-primary hover:bg-blue-700 text-white rounded-xl text-xs font-semibold text-center transition flex items-center justify-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> View Details
                    </Link>
                    <button onClick={() => deleteTrip(trip.id)} className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl text-xs font-semibold transition flex items-center gap-1">
                      <Trash2 className="w-3.5 h-3.5" /> Delete
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

export default Trips;
