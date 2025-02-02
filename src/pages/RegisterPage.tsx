import React from "react";
import { Mail, Phone, Users } from "lucide-react";
export const RegisterPage = () => {
  return <div className="bg-white">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Register Your Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Join the most competitive basketball league in the city.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Team Name
              </label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-[2px] focus:border-[#FBDA67] focus:ring-1 focus:ring-[#FBDA67] outline-none" placeholder="Enter team name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Division
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-[2px] focus:border-[#FBDA67] focus:ring-1 focus:ring-[#FBDA67] outline-none">
                <option>Men's A</option>
                <option>Men's B</option>
                <option>Women's A</option>
                <option>Women's B</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Team Captain
              </label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-[2px] focus:border-[#FBDA67] focus:ring-1 focus:ring-[#FBDA67] outline-none" placeholder="Enter captain's name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email
              </label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-[2px] focus:border-[#FBDA67] focus:ring-1 focus:ring-[#FBDA67] outline-none" placeholder="Enter email address" />
            </div>
            <button className="w-full bg-[#FBDA67] text-black px-6 py-3 rounded-[2px] hover:bg-[#f0cc4d] transition-all font-medium">
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>;
};