import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <div className="w-full min-h-screen bg-gray-50">
      <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <Link to="/" className="text-2xl font-bold text-[#FBDA67]">
            STREETLEAGUE
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={`hover:text-[#FBDA67] transition-colors ${isScrolled ? "text-white" : "text-white"}`}>
              Home
            </Link>
            <Link to="/about" className={`hover:text-[#FBDA67] transition-colors ${isScrolled ? "text-white" : "text-white"}`}>
              About
            </Link>
            <Link to="/teams" className={`hover:text-[#FBDA67] transition-colors ${isScrolled ? "text-white" : "text-white"}`}>
              Teams
            </Link>
            <Link to="/schedule" className={`hover:text-[#FBDA67] transition-colors ${isScrolled ? "text-white" : "text-white"}`}>
              Schedule
            </Link>
            <Link to="/gallery" className={`hover:text-[#FBDA67] transition-colors ${isScrolled ? "text-white" : "text-white"}`}>
              Gallery
            </Link>
          </div>
          <Link to="/register" className="hidden md:block bg-[#FBDA67] px-4 py-2 rounded-[2px] hover:bg-[#f0cc4d] text-black shadow-sm transition-all hover:shadow-md">
            Register Now
          </Link>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden bg-black shadow-lg text-white p-4">
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
              <Link to="/register" className="bg-[#FBDA67] px-4 py-2 rounded-[2px] text-black hover:bg-[#f0cc4d]">
                Register Now
              </Link>
            </div>
          </div>}
      </nav>
      {/* Page Content */}
      <div className="pt-16">{children}</div>
    </div>;
};