import React from 'react';

const friends = [
  {
    id: 1,
    name: 'Rahul',
    location: 'Mumbai',
    time: '01:23',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256&h=256&fit=crop',
    isActive: true,
  },
  {
    id: 2,
    name: 'Priya',
    location: 'Delhi',
    time: '01:30',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop',
    isActive: true,
  },
  {
    id: 3,
    name: 'Vikram',
    location: 'Bengaluru',
    time: '06:03',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=256&h=256&fit=crop',
    isActive: true,
  },
  {
    id: 4,
    name: 'Ananya',
    location: 'Pune',
    time: '04:43',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&h=256&fit=crop',
    isActive: false,
  },
  {
    id: 5,
    name: 'Rohan',
    location: 'Hyderabad',
    time: '06:13',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop',
    isActive: false,
  },
];

const FriendsList = () => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-card w-full h-full">
      <h2 className="text-lg font-bold text-text-main mb-4">Friends</h2>
      
      <div className="flex flex-col gap-5">
        {friends.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={friend.avatar} 
                alt={friend.name} 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-text-main text-sm">{friend.name}</h4>
                <p className="text-xs text-text-muted font-medium">{friend.location}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-1">
              <span className={`text-xs font-bold ${friend.isActive ? 'text-primary' : 'text-text-muted'}`}>
                {friend.time}
              </span>
              {friend.isActive && (
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
