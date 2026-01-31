import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const TOP_BANNER_HEIGHT = 36; // Height of top banner on desktop

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // On desktop (>= 1024px), scroll triggers after banner height
      // On mobile, scroll triggers after 50px
      const threshold = window.innerWidth >= 1024 ? TOP_BANNER_HEIGHT : 50;
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`
        fixed left-0 right-0 z-40
        transition-all duration-500 ease-in-out
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}
      `}
      style={{
        // On desktop: start below banner, move to top on scroll
        // On mobile: always start at top
        top: isScrolled ? 0 : (typeof window !== 'undefined' && window.innerWidth >= 1024 ? TOP_BANNER_HEIGHT : 0),
      }}
    >
      <div className="grain-overlay"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col">
          <span
            className={`text-xl sm:text-2xl md:text-3xl tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-amber-900' : 'text-white'
            }`}
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            TEK TOURS
          </span>

          <div className="flex items-center gap-2 mt-0.5">
            <div
              className={`h-px w-8 sm:w-10 transition-colors ${
                isScrolled ? 'bg-amber-600' : 'bg-amber-400'
              }`}
            />
            <span
              className={`text-[10px] sm:text-xs tracking-widest uppercase ${
                isScrolled ? 'text-amber-700' : 'text-amber-200'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              & Travels
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                relative font-medium tracking-wide transition-all duration-300
                ${isScrolled
                  ? 'text-gray-700 hover:text-amber-700'
                  : 'text-white hover:text-amber-300'}
              `}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {link.name}
              <span
                className={`
                  absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full
                  transition-all duration-300
                  ${isScrolled ? 'bg-amber-600' : 'bg-amber-400'}
                `}
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+256705407794"
            className={`flex items-center gap-2 transition-colors ${
              isScrolled ? 'text-gray-600 hover:text-amber-700' : 'text-white/90 hover:text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+256 705-407-794</span>
          </a>

          <button
            className={`
              px-6 py-2.5 rounded-sm font-semibold tracking-wide
              transition-all duration-300 hover-lift
              ${isScrolled
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-white text-amber-900 hover:bg-amber-50'}
            `}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            BOOK NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden bg-white shadow-xl overflow-hidden
          transition-all duration-300
          ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 py-6 space-y-6">
          {/* Navigation Links */}
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-amber-700 font-medium text-lg transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Contact Info */}
          <div className="space-y-3">
            <a
              href="tel:+256705407794"
              className="flex items-center gap-3 text-gray-700 hover:text-amber-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+256 705-407-794</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#"
              className="p-3 bg-gray-100 hover:bg-amber-600 hover:text-white rounded-lg transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 hover:bg-amber-600 hover:text-white rounded-lg transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 hover:bg-amber-600 hover:text-white rounded-lg transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Book Now Button */}
          <button
            className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold tracking-wide rounded-lg transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;