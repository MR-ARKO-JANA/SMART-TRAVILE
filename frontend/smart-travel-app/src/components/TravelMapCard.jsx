import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TravelMapCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl p-5 shadow-card w-full h-full flex flex-col">
      <h2 className="text-lg font-bold text-text-main mb-4">Travel map</h2>
      
      <div className="relative w-full h-[180px] rounded-2xl overflow-hidden mb-4 bg-gray-100 flex-shrink-0 cursor-pointer" onClick={() => navigate('/trips/2')}>
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Map" 
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
        />
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-start gap-4">
          <img 
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
            alt="Shimla" 
            className="w-12 h-12 rounded-xl object-cover cursor-pointer"
            onClick={() => navigate('/trips/2')}
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-text-main cursor-pointer hover:text-primary transition" onClick={() => navigate('/trips/2')}>India, Shimla</h3>
              <div className="flex items-center gap-1 text-sm font-semibold text-text-main">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                4.8<span className="text-gray-400 text-xs">/5</span>
              </div>
            </div>
            <p className="text-xs text-text-muted leading-relaxed font-medium">
              Shimla is the queen of hill stations in Himachal Pradesh with scenic valleys.{' '}
              <span onClick={() => navigate('/trips/2')} className="text-primary font-bold cursor-pointer hover:underline">See more...</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelMapCard;
