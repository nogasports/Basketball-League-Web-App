import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollNavbar } from "./components/ScrollNavbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Teams } from "./pages/Teams";
import { Schedule } from "./pages/Schedule";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
export function App() {
  return <Router>
      <div className="w-full min-h-screen bg-black">
        <ScrollNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>;
}