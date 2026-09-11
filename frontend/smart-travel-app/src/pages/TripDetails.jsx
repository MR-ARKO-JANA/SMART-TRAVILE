import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, IndianRupee, Users, Navigation, StickyNote, Plane, Train, Car, Bike, Ship } from 'lucide-react';
import api from '../services/api';

const sampleIndianTripDetails = {
  1: { id: 1, origin: 'Mumbai', destination: 'Goa', travel_date: '2026-10-15', return_date: '2026-10-20', travel_mode: 'train', travellers: 2, budget: 15000, notes: 'Beach vacation — book beachfront resort, Mandovi river cruise', status: 'upcoming', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', stops: ['Ratnagiri', 'Madgaon'] },
  2: { id: 2, origin: 'Delhi', destination: 'Manali', travel_date: '2026-11-20', return_date: '2026-11-25', travel_mode: 'car', travellers: 4, budget: 25000, notes: 'Snow & mountains — Solang Valley skiing and Rohtang pass', status: 'upcoming', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', stops: ['Chandigarh', 'Mandi'] },
  3: { id: 3, origin: 'Bengaluru', destination: 'Ooty', travel_date: '2026-12-10', return_date: '2026-12-14', travel_mode: 'car', travellers: 2, budget: 12000, notes: 'Hill station retreat — botanical gardens and Nilgiri Toy Train', status: 'planned', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80', stops: ['Mysore'] },
  4: { id: 4, origin: 'Kolkata', destination: 'Darjeeling', travel_date: '2026-09-28', return_date: '2026-10-02', travel_mode: 'train', travellers: 3, budget: 18000, notes: 'Tea gardens visit — Tiger Hill sunrise view over Kanchenjunga', status: 'completed', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80', stops: ['Siliguri'] },
};

const statusColors = { upcoming: 'bg-blue-50 text-blue-600', planned: 'bg-yellow-50 text-yellow-600', completed: 'bg-green-50 text-green-600' };

const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(sampleIndianTripDetails[id] || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/trips/${id}`);
        if (data) setTrip(data);
      } catch (err) {
        console.log('Using sample Indian trip fallback');
      } finally {
        setLoading(false);
      }
    };
    fetchTrip();
  }, [id]);

  if (!trip) {
    return (
      <div className="max-w-[800px] mx-auto text-center py-20">
        <p className="text-text-muted text-lg font-semibold">Trip not found</p>
        <Link to="/trips" className="text-primary font-semibold hover:underline text-sm mt-2 inline-block">← Back to My Trips</Link>
      </div>
    );
  }

  const tripImage = trip.image || 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80';
  const tripStops = trip.stops || [];

  return (
    <div className="max-w-[900px] mx-auto w-full">
      <Link to="/trips" className="inline-flex items-center gap-2 text-text-muted hover:text-primary text-sm font-semibold mb-6 transition">
        <ArrowLeft className="w-4 h-4" /> Back to My Trips
      </Link>

      {/* Hero Image */}
      <div className="relative w-full h-[300px] rounded-3xl overflow-hidden mb-6 shadow-card">
        <img src={tripImage} alt={trip.destination} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 left-6">
          <span className={`px-3 py-1 rounded-lg text-xs font-bold capitalize ${statusColors[trip.status || 'upcoming']}`}>{trip.status || 'upcoming'}</span>
          <h1 className="text-3xl font-bold text-white mt-2">{trip.destination}</h1>
          <p className="text-white/80 text-sm font-medium">from {trip.origin}</p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-3xl p-6 shadow-card">
          <h2 className="text-lg font-bold text-text-main mb-4">Trip Information</h2>
          <div className="grid grid-cols-2 gap-y-5 gap-x-8">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0"><Navigation className="w-4 h-4 text-primary" /></div>
              <div><p className="text-xs text-text-muted font-medium">Origin</p><p className="text-sm font-bold text-text-main">{trip.origin}</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-primary" /></div>
              <div><p className="text-xs text-text-muted font-medium">Destination</p><p className="text-sm font-bold text-text-main">{trip.destination}</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0"><Calendar className="w-4 h-4 text-primary" /></div>
              <div><p className="text-xs text-text-muted font-medium">Travel Date</p><p className="text-sm font-bold text-text-main">{trip.travel_date}</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0"><Calendar className="w-4 h-4 text-primary" /></div>
              <div><p className="text-xs text-text-muted font-medium">Return Date</p><p className="text-sm font-bold text-text-main">{trip.return_date || 'N/A'}</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0"><Plane className="w-4 h-4 text-primary" /></div>
              <div><p className="text-xs text-text-muted font-medium">Travel Mode</p><p className="text-sm font-bold text-text-main capitalize">{trip.travel_mode}</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0"><Users className="w-4 h-4 text-primary" /></div>
              <div><p className="text-xs text-text-muted font-medium">Travellers</p><p className="text-sm font-bold text-text-main">{trip.travellers}</p></div>
            </div>
          </div>

          {trip.notes && (
            <div className="mt-6 p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-2 mb-2"><StickyNote className="w-4 h-4 text-text-muted" /><p className="text-xs text-text-muted font-semibold">Notes</p></div>
              <p className="text-sm text-text-main font-medium">{trip.notes}</p>
            </div>
          )}
        </div>

        {/* Side Panel */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-card text-center">
            <IndianRupee className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-xs text-text-muted font-medium">Total Budget</p>
            <p className="text-3xl font-bold text-text-main mt-1">₹{Number(trip.budget).toLocaleString('en-IN')}</p>
            <p className="text-xs text-text-muted mt-1">₹{Math.round(trip.budget / (trip.travellers || 1)).toLocaleString('en-IN')} per person</p>
          </div>

          {tripStops.length > 0 && (
            <div className="bg-white rounded-3xl p-6 shadow-card">
              <h3 className="text-sm font-bold text-text-main mb-3">Stops</h3>
              <div className="flex flex-col gap-2">
                {tripStops.map((stop, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-text-main font-medium">{stop}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
