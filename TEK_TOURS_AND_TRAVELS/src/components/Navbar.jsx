import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const TOP_BANNER_HEIGHT = 36; // px → must match TopBanner height

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > TOP_BANNER_HEIGHT);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      style={{
        top: isScrolled ? 0 : TOP_BANNER_HEIGHT,
      }}
      className={`
        fixed left-0 right-0 z-40
        transition-all duration-500 ease-in-out
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="grain-overlay"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col">
          <span
            className={`text-2xl md:text-3xl tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-amber-900' : 'text-white'
            }`}
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            TEK TOURS
          </span>

          <div className="flex items-center gap-2 mt-0.5">
            <div
              className={`h-px w-10 transition-colors ${
                isScrolled ? 'bg-amber-600' : 'bg-amber-400'
              }`}
            />
            <span
              className={`text-xs tracking-widest uppercase ${
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

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+256705407794"
            className={`flex items-center gap-2 ${
              isScrolled ? 'text-gray-600' : 'text-white/90'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">
              +256 705-407-794 
            </span>
          </a>

          <button
            className={`
              px-6 py-2.5 rounded-sm font-semibold tracking-wide
              transition-all duration-300
              ${isScrolled
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-white text-amber-900 hover:bg-amber-50'}
            `}
          >
            BOOK NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden bg-white shadow-xl overflow-hidden
          transition-all duration-300
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-amber-700 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
