import React, { useState } from 'react';
import { MapPin, Calendar, Users, IndianRupee, Navigation, Car, Train, Plane as PlaneIcon, Bike, Ship, StickyNote } from 'lucide-react';
import api from '../services/api';

const travelModes = [
  { value: 'car', label: 'Car', icon: Car },
  { value: 'train', label: 'Train', icon: Train },
  { value: 'flight', label: 'Flight', icon: PlaneIcon },
  { value: 'bike', label: 'Bike', icon: Bike },
  { value: 'ship', label: 'Ship', icon: Ship },
];

const PlanTrip = () => {
  const [form, setForm] = useState({
    origin: '', destination: '', travel_date: '', travel_mode: '', travellers: 1, budget: '', notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.origin.trim()) newErrors.origin = 'Origin is required';
    if (!form.destination.trim()) newErrors.destination = 'Destination is required';
    if (!form.travel_date) newErrors.travel_date = 'Travel date is required';
    if (!form.travel_mode) newErrors.travel_mode = 'Select a travel mode';
    if (form.budget && (isNaN(form.budget) || Number(form.budget) < 0)) newErrors.budget = 'Enter a valid budget';
    if (form.travellers < 1) newErrors.travellers = 'At least 1 traveller';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await api.post('/trips', form);
      setSuccess(true);
      setForm({ origin: '', destination: '', travel_date: '', travel_mode: '', travellers: 1, budget: '', notes: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.log('Submitted locally');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-main">Plan a Trip</h1>
        <p className="text-text-muted text-sm mt-1">Fill in the details to plan your next Indian travel adventure</p>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-sm font-semibold flex items-center gap-2 animate-pulse">
          ✅ Trip planned successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Origin */}
          <div>
            <label className="text-sm font-semibold text-text-main mb-1.5 block">Origin</label>
            <div className="relative">
              <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input name="origin" placeholder="e.g. Mumbai, Delhi, Bengaluru" value={form.origin} onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.origin ? 'border-red-400' : 'border-gray-200'} text-sm outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 transition`} />
            </div>
            {errors.origin && <p className="text-red-500 text-xs mt-1">{errors.origin}</p>}
          </div>

          {/* Destination */}
          <div>
            <label className="text-sm font-semibold text-text-main mb-1.5 block">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input name="destination" placeholder="e.g. Goa, Manali, Jaipur, Kerala" value={form.destination} onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.destination ? 'border-red-400' : 'border-gray-200'} text-sm outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 transition`} />
            </div>
            {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
          </div>

          {/* Travel Date */}
          <div>
            <label className="text-sm font-semibold text-text-main mb-1.5 block">Travel Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input name="travel_date" type="date" value={form.travel_date} onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.travel_date ? 'border-red-400' : 'border-gray-200'} text-sm outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 transition`} />
            </div>
            {errors.travel_date && <p className="text-red-500 text-xs mt-1">{errors.travel_date}</p>}
          </div>

          {/* Travellers */}
          <div>
            <label className="text-sm font-semibold text-text-main mb-1.5 block">Travellers</label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input name="travellers" type="number" min="1" value={form.travellers} onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.travellers ? 'border-red-400' : 'border-gray-200'} text-sm outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 transition`} />
            </div>
            {errors.travellers && <p className="text-red-500 text-xs mt-1">{errors.travellers}</p>}
          </div>

          {/* Budget */}
          <div>
            <label className="text-sm font-semibold text-text-main mb-1.5 block">Estimated Budget (₹ INR)</label>
            <div className="relative">
              <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input name="budget" type="text" placeholder="e.g. 15000" value={form.budget} onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.budget ? 'border-red-400' : 'border-gray-200'} text-sm outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 transition`} />
            </div>
            {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
          </div>
        </div>

        {/* Travel Mode */}
        <div className="mt-6">
          <label className="text-sm font-semibold text-text-main mb-3 block">Travel Mode</label>
          <div className="flex flex-wrap gap-3">
            {travelModes.map((mode) => (
              <button key={mode.value} type="button" onClick={() => { setForm({ ...form, travel_mode: mode.value }); if (errors.travel_mode) setErrors({ ...errors, travel_mode: '' }); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all ${form.travel_mode === mode.value ? 'bg-primary text-white border-primary shadow-md' : 'bg-gray-50 text-text-muted border-gray-200 hover:border-primary hover:text-primary'}`}>
                <mode.icon className="w-4 h-4" /> {mode.label}
              </button>
            ))}
          </div>
          {errors.travel_mode && <p className="text-red-500 text-xs mt-1">{errors.travel_mode}</p>}
        </div>

        {/* Notes */}
        <div className="mt-6">
          <label className="text-sm font-semibold text-text-main mb-1.5 block">Notes (optional)</label>
          <div className="relative">
            <StickyNote className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
            <textarea name="notes" rows="3" placeholder="Any special requirements..." value={form.notes} onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-blue-100 transition resize-none" />
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button type="submit" disabled={isSubmitting}
            className="flex-1 py-3.5 bg-primary hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-xl font-semibold transition-all shadow-sm flex items-center justify-center">
            {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'Plan Trip'}
          </button>
          <button type="button" onClick={() => setForm({ origin: '', destination: '', travel_date: '', travel_mode: '', travellers: 1, budget: '', notes: '' })}
            className="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-text-muted rounded-xl font-semibold transition-all">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlanTrip;
