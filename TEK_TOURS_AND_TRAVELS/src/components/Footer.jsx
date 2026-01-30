import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Top divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h3
              className="text-4xl tracking-wider"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              TEK TOURS
            </h3>

            <div className="flex items-center gap-3 mt-2 mb-5">
              <div className="h-px w-14 bg-amber-400" />
              <span
                className="text-amber-300 text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                & Travels
              </span>
            </div>

            <p
              className="text-gray-300 text-sm leading-relaxed max-w-md"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              We design unforgettable travel experiences — from luxury getaways
              to adventure tours — crafted with care, trust, and expertise.
            </p>

            {/* Trust */}
            <div className="flex items-center gap-6 mt-6 text-gray-400 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                Trusted & Secure
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-amber-500" />
                Safe Payments
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-amber-400">About Us</a></li>
              <li><a href="#packages" className="hover:text-amber-400">Tour Packages</a></li>
              <li><a href="#gallery" className="hover:text-amber-400">Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#faq" className="hover:text-amber-400">FAQs</a></li>
              <li><a href="#policy" className="hover:text-amber-400">Booking Policy</a></li>
              <li><a href="#terms" className="hover:text-amber-400">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-amber-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold mb-4">Get in Touch</h4>

            <div className="space-y-3 text-sm text-gray-300">
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-amber-400">
                <Phone className="w-4 h-4" />
                +256 705 407 794
              </a>

              <a href="mailto:info@tektours.com" className="flex items-center gap-3 hover:text-amber-400">
                <Mail className="w-4 h-4" />
                info@tektours.com
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                Buwama,  <br />
                Mpigi District, Uganda
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-slate-800 hover:bg-amber-600 rounded-lg transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {year} Tek Tours & Travels. All rights reserved.</p>

          <p>
            Powered by{" "}
            <a
              href="#"
              className="text-amber-400 hover:underline"
            >
              MAVN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
