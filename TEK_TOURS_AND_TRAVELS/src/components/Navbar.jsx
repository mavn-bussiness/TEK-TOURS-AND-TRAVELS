import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TOP_BANNER_HEIGHT = 36;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerWidth >= 1024 ? TOP_BANNER_HEIGHT : 50;
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About', href: '/about', type: 'link' },
    { name: 'Destinations', href: '/destinations', type: 'link' },
    { name: 'Packages', href: '/packages', type: 'link' },
    { name: 'Gallery', href: '/gallery', type: 'link' },
    { name: 'Contact', href: '#footer', type: 'hash' }
  ];

  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, link) => {
    if (link.type === 'hash') {
      e.preventDefault();
      if (location.pathname !== '/') {
        window.location.href = '/' + link.href;
      } else {
        scrollToSection(link.href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      style={{
        top: isScrolled ? 0 : (typeof window !== 'undefined' && window.innerWidth >= 1024 ? TOP_BANNER_HEIGHT : 0),
      }}
    >
      <div className="grain-overlay"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span
            className={`text-xl sm:text-2xl md:text-3xl tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-amber-900' : 'text-white'
            }`}
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            TEK TOURS
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <div className={`h-px w-8 sm:w-10 transition-colors ${isScrolled ? 'bg-amber-600' : 'bg-amber-400'}`} />
            <span
              className={`text-[10px] sm:text-xs tracking-widest uppercase ${
                isScrolled ? 'text-amber-700' : 'text-amber-200'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              & Travels
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.type === 'link' ? (
              <Link
                key={link.name}
                to={link.href}
                className={`relative font-medium tracking-wide transition-all duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-300'
                } ${location.pathname === link.href ? 'text-amber-600' : ''}`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0'
                  } ${isScrolled ? 'bg-amber-600' : 'bg-amber-400'}`}
                />
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative font-medium tracking-wide transition-all duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-300'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.name}
              </a>
            )
          ))}
        </div>

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

          <Link
            to="/booking"
            className={`px-6 py-2.5 rounded-sm font-semibold tracking-wide transition-all duration-300 hover-lift ${
              isScrolled ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-white text-amber-900 hover:bg-amber-50'
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            BOOK NOW
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden bg-white shadow-xl overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          <nav className="space-y-4">
            {navLinks.map((link) => (
              link.type === 'link' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block text-gray-700 hover:text-amber-700 font-medium text-lg transition-colors ${
                    location.pathname === link.href ? 'text-amber-600' : ''
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="block text-gray-700 hover:text-amber-700 font-medium text-lg transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          <div className="border-t border-gray-200"></div>

          <div className="space-y-3">
            <a href="tel:+256705407794" className="flex items-center gap-3 text-gray-700 hover:text-amber-700 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+256 705-407-794</span>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a href="#" className="p-3 bg-gray-100 hover:bg-amber-600 hover:text-white rounded-lg transition-all" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-100 hover:bg-amber-600 hover:text-white rounded-lg transition-all" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-100 hover:bg-amber-600 hover:text-white rounded-lg transition-all" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <Link
            to="/booking"
            className="block w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold tracking-wide rounded-lg transition-all text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;