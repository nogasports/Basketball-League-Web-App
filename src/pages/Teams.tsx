import React from "react";
import { Users, Trophy, Star } from "lucide-react";
export function Teams() {
  const teams = [{
    name: "Thunder",
    wins: 12,
    losses: 4,
    standing: 1
  }, {
    name: "Lightning",
    wins: 11,
    losses: 5,
    standing: 2
  }, {
    name: "Hawks",
    wins: 10,
    losses: 6,
    standing: 3
  }];
  return <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">
          Our Teams
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((team, index) => <div key={index} className="bg-white rounded-[2px] p-6">
              <div className="flex items-center mb-4">
                <Users className="text-[#FBDA67] mr-2" size={24} />
                <h2 className="text-2xl font-bold">{team.name}</h2>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">Wins: {team.wins}</p>
                <p className="text-gray-600">Losses: {team.losses}</p>
                <p className="text-gray-600">Standing: #{team.standing}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}