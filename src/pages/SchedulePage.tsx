import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
export const SchedulePage = () => {
  const games = [{
    date: "Oct 15",
    time: "7:00 PM",
    team1: "Thunder",
    team2: "Lightning",
    venue: "Central Court",
    division: "Men's A"
  }, {
    date: "Oct 16",
    time: "6:30 PM",
    team1: "Hawks",
    team2: "Eagles",
    venue: "East Arena",
    division: "Men's B"
  }, {
    date: "Oct 17",
    time: "8:00 PM",
    team1: "Panthers",
    team2: "Tigers",
    venue: "West Court",
    division: "Women's A"
  }];
  return <div className="bg-white">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Schedule</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            View upcoming games and match schedules across all divisions.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {games.map((game, index) => <div key={index} className="border border-gray-200 rounded-[2px] p-6 hover:border-[#FBDA67] transition-all">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex items-center space-x-8">
                  <div className="text-xl font-bold">
                    {game.team1} vs {game.team2}
                  </div>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-[2px]">
                    {game.division}
                  </span>
                </div>
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {game.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {game.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {game.venue}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};