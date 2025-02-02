import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
export const ScrollNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed w-full px-4 py-4 z-50 transition-all duration-300 ${hasScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#FBDA67]">
          STREETLEAGUE
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-[#FBDA67] transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-[#FBDA67] transition-colors">
            About
          </Link>
          <Link to="/teams" className="text-white hover:text-[#FBDA67] transition-colors">
            Teams
          </Link>
          <Link to="/schedule" className="text-white hover:text-[#FBDA67] transition-colors">
            Schedule
          </Link>
          <Link to="/gallery" className="text-white hover:text-[#FBDA67] transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="text-white hover:text-[#FBDA67] transition-colors">
            Contact
          </Link>
        </div>
        <button className="hidden md:block bg-[#FBDA67] px-4 py-2 rounded-[2px] hover:bg-[#f0ce4f] text-black shadow-sm transition-all hover:shadow-md">
          Register Now
        </button>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && <div className="md:hidden bg-black shadow-lg text-white p-4 mt-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-[#FBDA67] transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#FBDA67] transition-colors">
              About
            </Link>
            <Link to="/teams" className="hover:text-[#FBDA67] transition-colors">
              Teams
            </Link>
            <Link to="/schedule" className="hover:text-[#FBDA67] transition-colors">
              Schedule
            </Link>
            <Link to="/gallery" className="hover:text-[#FBDA67] transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="hover:text-[#FBDA67] transition-colors">
              Contact
            </Link>
            <button className="bg-[#FBDA67] px-4 py-2 rounded-[2px] hover:bg-[#f0ce4f] text-black">
              Register Now
            </button>
          </div>
        </div>}
    </nav>;
};