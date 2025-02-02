import React from "react";
import { Trophy, Users, Target } from "lucide-react";
export const AboutPage = () => {
  return <div className="bg-white">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Streetleague</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Founded in 2018, Streetleague has grown to become the premier
            basketball competition in the region, fostering talent and building
            communities through sport.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border border-gray-200 rounded-[2px]">
            <Trophy className="text-[#FBDA67] mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide a professional-grade basketball experience that
              develops players and builds community through competitive sport.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-[2px]">
            <Users className="text-[#FBDA67] mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-600">
              Creating connections and fostering relationships through
              basketball, bringing together players from all backgrounds.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-[2px]">
            <Target className="text-[#FBDA67] mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-600">
              Committed to maintaining the highest standards in competition,
              organization, and player development.
            </p>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Streetleague began as a small community tournament in 2018,
              bringing together local basketball enthusiasts for weekend
              competitions. What started as a passion project quickly evolved
              into a structured league that now serves hundreds of players
              across multiple divisions.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've expanded to include women's divisions, youth
              development programs, and our annual All-Stars event that has
              become a highlight of the local sports calendar.
            </p>
            <p className="text-gray-600">
              Today, Streetleague represents the pinnacle of amateur basketball
              in the region, providing a platform for players to compete,
              improve, and build lasting connections through sport.
            </p>
          </div>
        </div>
        <div className="bg-black text-white p-8 rounded-[2px]">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Whether you're a seasoned player or new to competitive basketball,
            there's a place for you in Streetleague.
          </p>
          <button className="bg-[#FBDA67] text-black px-6 py-3 rounded-[2px] hover:bg-[#f0cc4d] transition-all">
            Register Now
          </button>
        </div>
      </div>
    </div>;
};