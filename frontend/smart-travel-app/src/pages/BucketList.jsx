import React, { useState } from 'react';
import { Heart, Trash2, IndianRupee, Sun, Snowflake, Cloud, Leaf } from 'lucide-react';

const seasonIcons = { Summer: Sun, Winter: Snowflake, Autumn: Leaf, Spring: Cloud, 'Year-round': Sun };

const initialDestinations = [
  { id: 1, name: 'Taj Mahal', description: 'Iconic marble mausoleum in Agra', best_season: 'Winter', estimated_budget: 12000, image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80', saved: true },
  { id: 2, name: 'Jaipur', description: 'The Pink City with majestic forts and palaces', best_season: 'Autumn', estimated_budget: 15000, image: 'https://images.unsplash.com/photo-1605649487212-4dcb18a2bd72?w=400&q=80', saved: true },
  { id: 3, name: 'Kerala Backwaters', description: 'Serene houseboat cruises through lush waterways', best_season: 'Winter', estimated_budget: 25000, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80', saved: true },
  { id: 4, name: 'Goa', description: 'Sun, sand, and vibrant nightlife', best_season: 'Summer', estimated_budget: 18000, image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80', saved: false },
  { id: 5, name: 'Varanasi', description: 'Spiritual capital of India on the banks of Ganges', best_season: 'Year-round', estimated_budget: 10000, image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&q=80', saved: false },
  { id: 6, name: 'Ladakh', description: 'High-altitude desert with stunning mountain passes', best_season: 'Summer', estimated_budget: 35000, image: 'https://images.unsplash.com/photo-1623547076495-2fc45dfb1e95?w=400&q=80', saved: false },
];

const BucketList = () => {
  const [destinations, setDestinations] = useState(initialDestinations);
  const [tab, setTab] = useState('saved');

  const toggleSave = (id) => {
    setDestinations(destinations.map((d) => d.id === id ? { ...d, saved: !d.saved } : d));
  };

  const removeFromBucket = (id) => {
    setDestinations(destinations.map((d) => d.id === id ? { ...d, saved: false } : d));
  };

  const savedList = destinations.filter((d) => d.saved);
  const exploreList = destinations.filter((d) => !d.saved);

  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-main">Bucket List</h1>
        <p className="text-text-muted text-sm mt-1">Dream destinations you want to visit</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => setTab('saved')} className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${tab === 'saved' ? 'bg-primary text-white' : 'bg-white text-text-muted shadow-card hover:bg-gray-50'}`}>
          ❤️ Saved ({savedList.length})
        </button>
        <button onClick={() => setTab('explore')} className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${tab === 'explore' ? 'bg-primary text-white' : 'bg-white text-text-muted shadow-card hover:bg-gray-50'}`}>
          🌍 Explore ({exploreList.length})
        </button>
      </div>

      {tab === 'saved' && savedList.length === 0 && (
        <div className="bg-white rounded-3xl p-12 shadow-card text-center">
          <p className="text-4xl mb-3">🗺️</p>
          <p className="text-text-muted font-semibold">Your bucket list is empty</p>
          <p className="text-text-muted text-sm mt-1">Explore destinations and add them to your list!</p>
          <button onClick={() => setTab('explore')} className="mt-4 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition">Explore Destinations</button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(tab === 'saved' ? savedList : exploreList).map((dest) => {
          const SeasonIcon = seasonIcons[dest.best_season] || Sun;
          return (
            <div key={dest.id} className="bg-white rounded-3xl shadow-card overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-[180px] overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <button onClick={() => toggleSave(dest.id)} className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition ${dest.saved ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-400 hover:text-red-500'}`}>
                  <Heart className={`w-4 h-4 ${dest.saved ? 'fill-current' : ''}`} />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-text-main text-lg mb-1">{dest.name}</h3>
                <p className="text-xs text-text-muted mb-3 line-clamp-2">{dest.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-text-muted font-medium">
                    <SeasonIcon className="w-3.5 h-3.5" /> {dest.best_season}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold text-text-main">
                    <IndianRupee className="w-3.5 h-3.5" />{dest.estimated_budget.toLocaleString()}
                  </div>
                </div>
                {tab === 'saved' && (
                  <button onClick={() => removeFromBucket(dest.id)} className="mt-4 w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1">
                    <Trash2 className="w-3.5 h-3.5" /> Remove from Bucket List
                  </button>
                )}
                {tab === 'explore' && (
                  <button onClick={() => toggleSave(dest.id)} className="mt-4 w-full py-2.5 bg-primary hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1">
                    <Heart className="w-3.5 h-3.5" /> Add to Bucket List
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BucketList;
