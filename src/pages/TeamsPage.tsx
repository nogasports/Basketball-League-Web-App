import React from "react";
import { Users, Trophy, Star } from "lucide-react";
export const TeamsPage = () => {
  const teams = [{
    name: "Thunder",
    division: "Men's A",
    wins: 12,
    losses: 4
  }, {
    name: "Lightning",
    division: "Men's A",
    wins: 11,
    losses: 5
  }, {
    name: "Hawks",
    division: "Men's B",
    wins: 10,
    losses: 6
  }, {
    name: "Eagles",
    division: "Women's A",
    wins: 13,
    losses: 3
  }, {
    name: "Panthers",
    division: "Women's A",
    wins: 11,
    losses: 5
  }, {
    name: "Tigers",
    division: "Men's B",
    wins: 9,
    losses: 7
  }];
  return <div className="bg-white">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Teams</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Meet the competitive teams that make up our league across multiple
            divisions.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((team, index) => <div key={index} className="p-6 border border-gray-200 rounded-[2px] hover:border-[#FBDA67] transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{team.name}</h3>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-[2px]">
                  {team.division}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <span>Wins: {team.wins}</span>
                <span>Losses: {team.losses}</span>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};