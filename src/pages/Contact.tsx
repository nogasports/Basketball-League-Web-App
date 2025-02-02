import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
export function Contact() {
  return <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">
          Contact Us
        </h1>
        <div className="bg-white rounded-[2px] p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full p-2 border rounded-[2px]" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded-[2px]" placeholder="Your email" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full p-2 border rounded-[2px]" rows={4} placeholder="Your message"></textarea>
                </div>
                <button className="bg-[#FBDA67] px-6 py-3 rounded-[2px] hover:bg-[#f0ce4f] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-[#FBDA67] mr-4" />
                  <span>info@streetleague.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-[#FBDA67] mr-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-[#FBDA67] mr-4" />
                  <span>123 Basketball Court, Sports City, ST 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}