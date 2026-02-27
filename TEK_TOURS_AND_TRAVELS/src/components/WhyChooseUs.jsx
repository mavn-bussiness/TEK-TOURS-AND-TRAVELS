import React, { useState } from 'react';
import { Shield, Compass, Users, Leaf, Award, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Compass,
    number: '01',
    title: 'Bespoke Itineraries',
    description:
      'Every journey is tailored from scratch. We listen first, then craft a route that matches your pace, interests, and budget — no copy-paste tours.',
    color: '#b8975a',
    bg: 'rgba(184,151,90,0.08)',
  },
  {
    icon: Users,
    number: '02',
    title: 'Expert Local Guides',
    description:
      'Born and raised in Uganda, our guides carry decades of bush knowledge, fluent in the land\'s rhythms, languages, and hidden corners.',
    color: '#6aab6a',
    bg: 'rgba(106,171,106,0.08)',
  },
  {
    icon: Shield,
    number: '03',
    title: 'Safety First, Always',
    description:
      'Fully licensed, insured, and affiliated with Uganda Tourism Board. Your well-being is woven into every logistical decision we make.',
    color: '#5b9bd5',
    bg: 'rgba(91,155,213,0.08)',
  },
  {
    icon: Leaf,
    number: '04',
    title: 'Responsible Tourism',
    description:
      'We actively support conservation projects and local communities. When you travel with us, your visit directly funds what you come to see.',
    color: '#78b87e',
    bg: 'rgba(120,184,126,0.08)',
  },
  {
    icon: Award,
    number: '05',
    title: 'Award-Winning Service',
    description:
      'Recognized by TripAdvisor and Africa Travel Association. Our 4.9-star average is built one unforgettable encounter at a time.',
    color: '#d4855a',
    bg: 'rgba(212,133,90,0.08)',
  },
  {
    icon: Clock,
    number: '06',
    title: '24 / 7 On-Trip Support',
    description:
      'From arrival to departure, our ops team is reachable around the clock — because the wild operates on its own schedule.',
    color: '#9b7ec8',
    bg: 'rgba(155,126,200,0.08)',
  },
];

const Stat = ({ value, label }) => (
  <div className="text-center">
    <p
      className="text-5xl lg:text-6xl font-bold text-white mb-1 leading-none"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {value}
    </p>
    <p
      className="text-xs tracking-widest uppercase text-amber-300"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {label}
    </p>
  </div>
);

const WhyChooseUs = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
          alt="Safari background"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for depth and readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,20,10,0.88) 0%, rgba(20,35,15,0.82) 50%, rgba(10,15,5,0.90) 100%)' }} />
        {/* Subtle warm tint at top */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(184,151,90,0.08) 0%, transparent 40%, rgba(10,10,5,0.3) 100%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 border text-xs tracking-widest uppercase rounded-full mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif", color: '#d4af6e', borderColor: 'rgba(212,175,110,0.4)', background: 'rgba(212,175,110,0.1)' }}
          >
            Why Travel With Us
          </span>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            More Than a Tour Operator —{' '}
            <span className="italic font-normal" style={{ color: '#d4af6e' }}>
              Your Local Insiders
            </span>
          </h2>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Crimson Text', serif", color: 'rgba(255,255,255,0.75)' }}
          >
            Tek Tours & Travels was built on one belief: the best Africa
            experiences come from people who live it, love it, and share it
            honestly.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            const isActive = active === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="relative rounded-2xl p-8 cursor-default transition-all duration-400 group"
                style={{
                  background: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)',
                  border: `1px solid ${isActive ? item.color + '80' : 'rgba(255,255,255,0.12)'}`,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: isActive
                    ? `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${item.color}40`
                    : '0 4px 24px rgba(0,0,0,0.2)',
                  transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                }}
              >
                {/* Number watermark */}
                <span
                  className="absolute top-5 right-6 font-bold select-none transition-opacity duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 52,
                    lineHeight: 1,
                    color: item.color,
                    opacity: isActive ? 0.15 : 0.07,
                  }}
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div
                  className="mb-5 inline-flex items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    width: 52,
                    height: 52,
                    background: isActive ? item.color + '40' : 'rgba(255,255,255,0.1)',
                  }}
                >
                  <Icon
                    style={{
                      width: 24,
                      height: 24,
                      color: item.color,
                      transition: 'transform 0.3s ease',
                      transform: isActive ? 'scale(1.15)' : 'scale(1)',
                    }}
                  />
                </div>

                <h3
                  className="text-xl mb-3 font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>

                <p
                  className="leading-relaxed text-base"
                  style={{ fontFamily: "'Crimson Text', serif", fontSize: 17, color: 'rgba(255,255,255,0.7)' }}
                >
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, transparent)`,
                    opacity: isActive ? 1 : 0,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl py-10 px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y-2 lg:divide-y-0 lg:divide-x"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(212,175,110,0.3)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            divideColor: 'rgba(212,175,110,0.3)',
          }}
        >
          <Stat value="2,400+" label="Happy Travelers" />
          <Stat value="4.9★" label="Average Rating" />
          <Stat value="20+" label="Travel Partners" />
          <Stat value="98%" label="Would Return" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;