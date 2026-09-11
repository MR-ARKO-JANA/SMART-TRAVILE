import React from 'react';
import { Calendar, Building, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UpcomingTripCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl p-5 shadow-card w-full">
      <h2 className="text-lg font-bold text-text-main mb-4">Upcoming trips</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[220px] shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Leh Ladakh" 
            className="w-full h-[220px] object-cover rounded-2xl cursor-pointer hover:opacity-95 transition"
            onClick={() => navigate('/trips/1')}
          />
        </div>
        
        <div className="flex-1 flex flex-col justify-between py-2">
          <div>
            <h3 className="text-xl font-bold text-text-main mb-3 cursor-pointer hover:text-primary transition" onClick={() => navigate('/trips/1')}>Ladakh, Leh City</h3>
            
            <div className="flex items-center gap-4 text-sm text-text-muted mb-4 font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>15 Oct - 25 Oct</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building className="w-4 h-4" />
                <span>The Grand Dragon Hotel</span>
              </div>
            </div>
            
            <p className="text-sm text-text-muted leading-relaxed mb-4 font-medium">
              Leh Ladakh is one of the most breathtaking high-altitude Himalayan regions in India with scenic mountain passes.{' '}
              <span onClick={() => navigate('/trips/1')} className="text-primary cursor-pointer font-bold hover:underline">See more...</span>
            </p>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="px-4 py-1.5 bg-blue-50 text-primary text-sm font-semibold rounded-lg border border-blue-100 shadow-sm cursor-pointer hover:bg-blue-100 transition">Delhi</span>
              <button className="w-7 h-7 flex items-center justify-center bg-gray-100 text-gray-400 rounded-full hover:bg-gray-200 transition shadow-sm">
                <X className="w-3.5 h-3.5" />
              </button>
              <span className="px-4 py-1.5 bg-blue-50 text-primary text-sm font-semibold rounded-lg border border-blue-100 shadow-sm cursor-pointer hover:bg-blue-100 transition">Leh</span>
            </div>
            
            <button onClick={() => navigate('/trips/1')} className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-sm cursor-pointer">
              Show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTripCard;
