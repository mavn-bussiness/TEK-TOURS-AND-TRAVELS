import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin, Compass, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80"
          alt="Lost in the forest"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-amber-900/75 to-stone-900/85"></div>
        
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lost-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="2" fill="white" />
                <path d="M40 20 L40 35 M25 40 L35 40 M40 45 L40 60 M45 40 L55 40" stroke="white" strokeWidth="1.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lost-pattern)"/>
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated Compass */}
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-amber-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="relative bg-white/95 backdrop-blur-sm rounded-full p-8 shadow-2xl border-4 border-amber-400">
            <Compass className="w-32 h-32 text-amber-600 animate-spin-slow" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 
          className="text-8xl md:text-9xl font-bold text-white mb-4 drop-shadow-2xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          404
        </h1>

        {/* Heading */}
        <h2 
          className="text-3xl md:text-5xl font-bold text-white mb-12 drop-shadow-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Lost on Your Journey?
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            to="/"
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/destinations"
            className="px-8 py-4 bg-white hover:bg-gray-50 text-amber-600 font-semibold rounded-lg border-2 border-white transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <MapPin className="w-5 h-5" />
            <span>Explore Destinations</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link to="/packages" className="text-white/90 hover:text-white font-medium transition-colors flex items-center gap-2">
            <span>Packages</span>
          </Link>
          <span className="text-white/40">•</span>
          <Link to="/booking" className="text-white/90 hover:text-white font-medium transition-colors flex items-center gap-2">
            <span>Book a Trip</span>
          </Link>
          <span className="text-white/40">•</span>
          <Link to="/#contact" className="text-white/90 hover:text-white font-medium transition-colors flex items-center gap-2">
            <span>Contact</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;