import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExploreTripCard = ({ id, image, title, price, description, rating, reviews }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl p-4 shadow-card w-full flex flex-col h-full">
      <div className="relative w-full h-[160px] rounded-2xl overflow-hidden mb-4 cursor-pointer" onClick={() => navigate('/plan')}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-text-main text-lg cursor-pointer hover:text-primary transition" onClick={() => navigate('/plan')}>{title}</h3>
            <span className="font-bold text-text-main text-sm">{price}</span>
          </div>
          
          <p className="text-xs text-text-muted leading-relaxed font-medium mb-3 line-clamp-2">
            {description}{' '}
            <span onClick={() => navigate('/plan')} className="text-primary font-bold cursor-pointer hover:underline">See more...</span>
          </p>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-1 text-sm font-semibold text-text-main">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              {rating}<span className="text-gray-400 text-xs">/5</span>
            </div>
            <span className="text-xs text-text-muted font-medium">{reviews} reviews</span>
          </div>
          
          <button 
            onClick={() => navigate('/plan')}
            className="w-full py-2.5 bg-primary hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-colors shadow-sm cursor-pointer"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreTripCard;
