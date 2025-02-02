import React from "react";
import { ChevronRight, Trophy, Users, Calendar, Mail, Star, Clock, MapPin, ArrowRight } from "lucide-react";
export function Home() {
  const upcomingGames = [{
    team1: "Thunder",
    team2: "Lightning",
    date: "Oct 15",
    time: "7:00 PM",
    venue: "Central Court"
  }, {
    team1: "Hawks",
    team2: "Eagles",
    date: "Oct 16",
    time: "6:30 PM",
    venue: "East Arena"
  }, {
    team1: "Panthers",
    team2: "Tigers",
    date: "Oct 17",
    time: "8:00 PM",
    venue: "West Court"
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-black text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Elevate Your Game
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Join the most competitive basketball league in the city.
                Experience professional-level competition across Men's, Women's,
                and All-Stars divisions.
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#FBDA67] px-8 py-4 rounded-[2px] hover:bg-[#f0ce4f] text-black flex items-center shadow-md hover:shadow-lg transition-all">
                  Register Team <ChevronRight className="ml-2" />
                </button>
                <button className="bg-white text-black px-8 py-4 rounded-[2px] hover:bg-gray-100 transition-all shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img src="/IMG_8909.jpg" alt="Basketball action" className="absolute inset-0 w-full h-full object-cover rounded-[2px] shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#FBDA67] mb-2">24</div>
              <div className="text-black">Teams</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#FBDA67] mb-2">300+</div>
              <div className="text-black">Players</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#FBDA67] mb-2">120</div>
              <div className="text-black">Games per Season</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#FBDA67] mb-2">5</div>
              <div className="text-black">Years Running</div>
            </div>
          </div>
        </div>
      </div>
      {/* Rest of the sections with updated colors... */}
      {/* (Previous sections continued with black and #FBDA67 colors) */}
    </div>;
}