import React from 'react';
import UpcomingTripCard from '../components/UpcomingTripCard';
import TravelMapCard from '../components/TravelMapCard';
import FriendsList from '../components/FriendsList';
import ExploreTripCard from '../components/ExploreTripCard';
import DoneTripList from '../components/DoneTripList';

const exploreTripsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Goa
    title: 'Goa',
    price: '₹14,500',
    description: 'Goa is one of the best coastal beach destinations in India',
    rating: '4.8',
    reviews: '24'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Jaipur
    title: 'Jaipur',
    price: '₹18,000',
    description: 'Jaipur is famous for rich royal palaces, forts, and Rajasthani culture',
    rating: '4.9',
    reviews: '32'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kerala
    title: 'Kerala',
    price: '₹22,000',
    description: 'Kerala is known for serene backwaters, houseboats, and green tea gardens',
    rating: '4.9',
    reviews: '40'
  }
];

const Home = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto w-full">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[320px]">
        <div className="lg:col-span-6 h-full">
          <UpcomingTripCard />
        </div>
        <div className="lg:col-span-3 h-full">
          <TravelMapCard />
        </div>
        <div className="lg:col-span-3 h-full">
          <FriendsList />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
        <div className="lg:col-span-8 flex flex-col">
          <h2 className="text-lg font-bold text-text-main mb-4 px-2">Explore trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            {exploreTripsData.map((trip) => (
              <ExploreTripCard 
                key={trip.id}
                image={trip.image}
                title={trip.title}
                price={trip.price}
                description={trip.description}
                rating={trip.rating}
                reviews={trip.reviews}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-4">
          <DoneTripList />
        </div>
      </div>
    </div>
  );
};

export default Home;
