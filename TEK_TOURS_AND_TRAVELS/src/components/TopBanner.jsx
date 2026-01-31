import React from 'react';
import { Calendar, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const TopBanner = () => {
  const getFormattedDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    // Show only on desktop (lg and above)
    <div className="hidden lg:block relative z-50 bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900 text-white">
      <div className="grain-overlay"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Date & Location */}
        <div className="flex items-center gap-4 text-xs font-light tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" />
            <span className="opacity-90">{getFormattedDate()}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <a 
              href='https://tekcountrygardens.com/' 
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              Tek Country Gardens
            </a>
          </div>
        </div>

        {/* Book Now CTA */}
        <button 
          className="px-5 py-1 bg-white text-amber-900 font-semibold tracking-wide hover-lift rounded-sm text-xs" 
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          BOOK NOW
        </button>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3">
          <a href="#" className="hover:scale-110 transition-transform duration-200" aria-label="Facebook">
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-200" aria-label="Instagram">
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-200" aria-label="Twitter">
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <a href="tel:+256705407794" className="flex items-center gap-2 ml-2 opacity-90 hover:opacity-100 transition-opacity">
            <Phone className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">+256 705-407-794</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;