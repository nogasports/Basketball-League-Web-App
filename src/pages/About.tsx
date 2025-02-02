import React from "react";
import { Trophy, Users, Target } from "lucide-react";
export function About() {
  return <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">
          About Streetleague
        </h1>
        {/* Mission Section */}
        <div className="bg-white rounded-[2px] p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-black">Our Mission</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-8">
            Streetleague aims to provide a professional-grade basketball
            experience for players of all skill levels while fostering community
            engagement and promoting the sport's development in our region.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <Trophy size={48} className="text-[#FBDA67] mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Promoting high-quality competition and sportsmanship
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users size={48} className="text-[#FBDA67] mb-4" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                Building lasting connections through basketball
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Target size={48} className="text-[#FBDA67] mb-4" />
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-600">
                Supporting player growth at all levels
              </p>
            </div>
          </div>
        </div>
        {/* History Section */}
        <div className="bg-white rounded-[2px] p-8">
          <h2 className="text-3xl font-bold mb-6 text-black">Our History</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#FBDA67] pl-6">
              <h3 className="text-xl font-bold mb-2">2019</h3>
              <p className="text-gray-600">
                Founded with just 8 teams in a local community center
              </p>
            </div>
            <div className="border-l-4 border-[#FBDA67] pl-6">
              <h3 className="text-xl font-bold mb-2">2020</h3>
              <p className="text-gray-600">
                Expanded to include women's division and youth programs
              </p>
            </div>
            <div className="border-l-4 border-[#FBDA67] pl-6">
              <h3 className="text-xl font-bold mb-2">2021</h3>
              <p className="text-gray-600">
                Introduced the All-Stars event and skills competitions
              </p>
            </div>
            <div className="border-l-4 border-[#FBDA67] pl-6">
              <h3 className="text-xl font-bold mb-2">2022</h3>
              <p className="text-gray-600">
                Partnered with local schools and sports organizations
              </p>
            </div>
            <div className="border-l-4 border-[#FBDA67] pl-6">
              <h3 className="text-xl font-bold mb-2">2023</h3>
              <p className="text-gray-600">
                Growing to 24 teams across multiple divisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}