import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
export function Schedule() {
  const games = [{
    date: "Oct 15",
    time: "7:00 PM",
    team1: "Thunder",
    team2: "Lightning",
    venue: "Central Court"
  }, {
    date: "Oct 16",
    time: "6:30 PM",
    team1: "Hawks",
    team2: "Eagles",
    venue: "East Arena"
  }];
  return <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">
          Game Schedule
        </h1>
        <div className="space-y-6">
          {games.map((game, index) => <div key={index} className="bg-white rounded-[2px] p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center space-x-4">
                  <Calendar className="text-[#FBDA67]" />
                  <span className="font-bold">{game.date}</span>
                  <Clock className="text-[#FBDA67]" />
                  <span>{game.time}</span>
                </div>
                <div className="font-bold text-xl my-4 md:my-0">
                  {game.team1} vs {game.team2}
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-[#FBDA67]" />
                  <span>{game.venue}</span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}