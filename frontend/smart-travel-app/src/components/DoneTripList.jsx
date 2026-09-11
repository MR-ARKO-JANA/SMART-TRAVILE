import React from 'react';
import { useNavigate } from 'react-router-dom';

const doneTrips = [
  {
    id: 1,
    city: 'Udaipur',
    date: '02 Aug - 06 Aug',
    time: '8:00am - 2pm',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 2,
    city: 'Manali',
    date: '10 Jul - 14 Jul',
    time: '9:00am - 4pm',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 3,
    city: 'Rishikesh',
    date: '15 May - 18 May',
    time: '7:00am - 1pm',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 4,
    city: 'Munnar',
    date: '01 Apr - 05 Apr',
    time: '8:30am - 3pm',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  }
];

const DoneTripList = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <h2 className="text-lg font-bold text-text-main mb-4 px-2">Done Trip</h2>
      
      <div className="flex flex-col gap-3">
        {doneTrips.map((trip) => (
          <div 
            key={trip.id} 
            onClick={() => navigate('/trips/4')}
            className="bg-white rounded-2xl p-3 shadow-sm flex items-center justify-between border border-gray-50 hover:bg-gray-50 cursor-pointer transition"
          >
            <div className="flex items-center gap-4 w-1/3">
              <img 
                src={trip.image} 
                alt={trip.city} 
                className="w-10 h-10 rounded-full object-cover shadow-sm"
              />
              <h4 className="font-bold text-text-main text-sm">{trip.city}</h4>
            </div>
            
            <div className="text-xs text-text-muted font-medium w-1/3 text-center">
              {trip.date}
            </div>
            
            <div className="text-xs text-text-muted font-medium w-1/3 text-right pr-2">
              {trip.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoneTripList;
