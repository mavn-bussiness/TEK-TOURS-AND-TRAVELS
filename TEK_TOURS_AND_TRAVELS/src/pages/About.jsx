import React from 'react';
import { Award, Users, Globe, Heart, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We live and breathe adventure, bringing you closer to the heart of Uganda.'
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Local knowledge combined with international expertise for authentic experiences.'
    },
    {
      icon: Globe,
      title: 'Sustainable Tourism',
      description: 'Committed to preserving Uganda\'s natural beauty for generations to come.'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in customer satisfaction and tour quality.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Travelers' },
    { number: '50+', label: 'Tour Packages' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const features = [
    'Personalized itineraries tailored to your interests',
    '24/7 customer support throughout your journey',
    'Licensed and experienced tour guides',
    'Comfortable and safe transportation',
    'Partnerships with top-rated accommodations',
    'Comprehensive travel insurance options',
    'Flexible booking and cancellation policies',
    'Eco-friendly and responsible tourism practices'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80"
            alt="About Tek Tours"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p
              className="text-xs sm:text-sm tracking-widest uppercase text-amber-400 font-semibold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Discover Our Story
            </p>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
            >
              About Tek Tours & Travels
            </h1>

            <div className="flex justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>

            <p
              className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Crafting unforgettable journeys through the Pearl of Africa since 2009
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50 to-white pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <p
                className="text-xs sm:text-sm tracking-widest uppercase text-amber-600 font-semibold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our Journey
              </p>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                More Than Just a <br />
                <span className="italic font-normal text-amber-700">Travel Company</span>
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-transparent mb-6" />

              <div className="space-y-4 text-gray-700" style={{ fontFamily: "'Crimson Text', serif" }}>
                <p className="text-base md:text-lg leading-relaxed">
                  Choosing a tour company is about trust. We understand that — especially when you’re traveling somewhere new.

That’s why we focus on transparency, flexibility, and personal attention. From your first message to the final goodbye, you’re not just a booking — you’re a guest.

                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  We believe that travel should be transformative. Every journey we design is crafted 
                  with care, combining thrilling adventures with authentic cultural encounters. Our team 
                  of experienced guides doesn't just show you Uganda – they help you feel it, understand 
                  it, and fall in love with it.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  Based in Buwama, Mpigi District, we maintain close relationships with local communities 
                  and conservation efforts across Uganda. When you travel with us, you're not just a tourist 
                  – you're part of a sustainable tourism movement that benefits both visitors and locals alike.
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1535082623926-b39352a03fb7?w=1200&q=80"
                  alt="Safari Adventure"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl max-w-xs">
                <p className="text-4xl font-bold text-amber-600 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  15+
                </p>
                <p className="text-gray-700 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Years of Excellence in Uganda Tourism
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-400 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-sm sm:text-base text-gray-300 uppercase tracking-wider"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-stone-50 to-white pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p
              className="text-xs sm:text-sm tracking-widest uppercase text-amber-600 font-semibold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              What We Stand For
            </p>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-amber-700" />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621414050946-1b936a78491f?w=1200&q=80"
                alt="Mountain Trek"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Right - Features */}
            <div>
              <p
                className="text-xs sm:text-sm tracking-widest uppercase text-amber-600 font-semibold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Why Choose Us
              </p>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                What Makes Us <br />
                <span className="italic font-normal text-amber-700">Stand Out</span>
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-amber-600 to-transparent mb-8" />

              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <p
                      className="text-gray-700"
                      style={{ fontFamily: "'Crimson Text', serif", fontSize: '1.125rem' }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Ready to Start Your <br className="hidden sm:block" />
            <span className="italic font-normal text-amber-400">Uganda Adventure?</span>
          </h2>

          <p
            className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Let us design a personalized journey that matches your dreams and exceeds your expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold tracking-wide rounded-full transition-all duration-300 shadow-lg hover-lift"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Browse Packages
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold tracking-wide rounded-full transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;