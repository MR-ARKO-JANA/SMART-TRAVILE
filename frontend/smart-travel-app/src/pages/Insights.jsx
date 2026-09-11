import React from 'react';
import { TrendingUp, Users, MapPin, Plane, Car, Train, BarChart3, PieChart, Activity } from 'lucide-react';

const stats = [
  { label: 'Total Trips', value: '1,284', change: '+12.5%', icon: Activity, color: 'bg-blue-500' },
  { label: 'Active Users', value: '342', change: '+8.2%', icon: Users, color: 'bg-green-500' },
  { label: 'Popular Routes', value: '56', change: '+3.1%', icon: MapPin, color: 'bg-purple-500' },
  { label: 'Avg. Budget', value: '₹25,450', change: '-2.4%', icon: TrendingUp, color: 'bg-orange-500' },
];

const popularDestinations = [
  { name: 'Mumbai', trips: 187, percentage: 85 },
  { name: 'New Delhi', trips: 165, percentage: 75 },
  { name: 'Bengaluru', trips: 142, percentage: 65 },
  { name: 'Goa', trips: 128, percentage: 58 },
  { name: 'Jaipur', trips: 98, percentage: 45 },
];

const travelModes = [
  { mode: 'Flight', percentage: 45, icon: Plane, color: 'bg-blue-500', barColor: 'bg-blue-400' },
  { mode: 'Car', percentage: 25, icon: Car, color: 'bg-green-500', barColor: 'bg-green-400' },
  { mode: 'Train', percentage: 20, icon: Train, color: 'bg-purple-500', barColor: 'bg-purple-400' },
  { mode: 'Other', percentage: 10, icon: Activity, color: 'bg-orange-500', barColor: 'bg-orange-400' },
];

const monthlyData = [
  { month: 'Jan', trips: 85 }, { month: 'Feb', trips: 72 }, { month: 'Mar', trips: 110 },
  { month: 'Apr', trips: 145 }, { month: 'May', trips: 168 }, { month: 'Jun', trips: 195 },
  { month: 'Jul', trips: 210 }, { month: 'Aug', trips: 198 }, { month: 'Sep', trips: 155 },
  { month: 'Oct', trips: 130 }, { month: 'Nov', trips: 95 }, { month: 'Dec', trips: 120 },
];

const maxTrips = Math.max(...monthlyData.map((d) => d.trips));

const Insights = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-main flex items-center gap-2">
          <BarChart3 className="w-6 h-6" /> Research Insights
        </h1>
        <p className="text-text-muted text-sm mt-1">Aggregated travel data for transportation research and planning</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-3xl p-5 shadow-card">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-text-main">{stat.value}</p>
            <p className="text-xs text-text-muted font-medium mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Monthly Trips Chart */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 shadow-card">
          <h2 className="text-lg font-bold text-text-main mb-4">Trips by Month</h2>
          <div className="flex items-end gap-3 h-[200px]">
            {monthlyData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[10px] text-text-muted font-semibold">{d.trips}</span>
                <div className="w-full bg-gray-100 rounded-t-lg relative" style={{ height: '180px' }}>
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all duration-500 hover:bg-blue-700"
                    style={{ height: `${(d.trips / maxTrips) * 100}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-text-muted font-medium">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Mode Distribution */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-card">
          <h2 className="text-lg font-bold text-text-main mb-4">Travel Modes</h2>
          <div className="flex flex-col gap-5">
            {travelModes.map((mode, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg ${mode.color} flex items-center justify-center`}>
                      <mode.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-text-main">{mode.mode}</span>
                  </div>
                  <span className="text-sm font-bold text-text-main">{mode.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${mode.barColor} rounded-full transition-all duration-700`} style={{ width: `${mode.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="bg-white rounded-3xl p-6 shadow-card mt-6">
        <h2 className="text-lg font-bold text-text-main mb-4">Popular Destinations</h2>
        <div className="flex flex-col gap-4">
          {popularDestinations.map((dest, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-6 text-sm font-bold text-text-muted text-right">#{i + 1}</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-text-main">{dest.name}</span>
                  <span className="text-xs text-text-muted font-medium">{dest.trips} trips</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${dest.percentage}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
