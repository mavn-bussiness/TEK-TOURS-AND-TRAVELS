import React, { useState } from 'react';
import { Award, Users, Globe, Heart, CheckCircle, ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'Every trip we plan starts with genuine excitement. We love what we do — and that energy shows in every itinerary we craft.',
      color: '#d4855a',
    },
    {
      icon: Users,
      title: 'Personal Attention',
      description: 'You\'re not a booking reference. From your first message to your final day, we give you the attention a real guest deserves.',
      color: '#6aab6a',
    },
    {
      icon: Globe,
      title: 'World Without Limits',
      description: 'Africa is our home, but the world is our playground. We arrange journeys from Uganda\'s forests to China\'s ancient walls.',
      color: '#5b9bd5',
    },
    {
      icon: Award,
      title: 'Honest & Transparent',
      description: 'No hidden costs, no vague promises. We tell you exactly what\'s included, what to expect, and how to prepare.',
      color: '#b8975a',
    },
  ];

  const stats = [
    { number: 'New', label: 'Fresh & Hungry', sub: 'Not yet jaded by routine' },
    { number: '100%', label: 'Personalised', sub: 'No cookie-cutter packages' },
    { number: 'Global', label: 'Destinations', sub: 'Africa, Asia & beyond' },
    { number: '24/7', label: 'Support', sub: 'We answer. Always.' },
  ];

  const features = [
    'Custom itineraries built around your schedule and interests',
    'Direct communication — no call centres, no bots',
    'Licensed, knowledgeable guides in every destination',
    'Vetted accommodation partners across all price points',
    'Flexible booking terms and transparent pricing',
    'Group tours and private trips available',
    'Responsible travel practices that give back locally',
    'Airport transfers, visas, and logistics sorted for you',
  ];

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>

      {/* ── HERO ── */}
      <section className="relative" style={{ height: '60vh', minHeight: 380 }}>
        <img
          src="/images/IMG_20230828_131906.jpg"
          alt="Tek Tours travelers at Temple of Heaven, Beijing"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center bottom' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-[#0a0a0f]" />
        {/* grain */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '200px' }} />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full border text-xs tracking-widest uppercase mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a', borderColor: 'rgba(184,151,90,0.3)', background: 'rgba(184,151,90,0.08)' }}>
            Our Story
          </span>
          <h1 className="text-white leading-none mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 7vw, 86px)', letterSpacing: '-0.02em' }}>
            About <span className="italic" style={{ color: '#c9e89d' }}>Tek Tours</span>
          </h1>
          <div className="mb-5" style={{ width: 56, height: 2, background: 'linear-gradient(90deg, transparent, #b8975a, transparent)' }} />
          <p className="text-white/60 max-w-xl" style={{ fontFamily: "'Crimson Text', serif", fontSize: 18 }}>
            A new name in travel — built on honesty, personal service, and a genuine love for the world
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="relative py-16 sm:py-24">
        {/* ambient */}
        <div className="absolute top-0 left-1/4 pointer-events-none"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(184,151,90,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left */}
            <div>
              <p className="text-xs tracking-widest uppercase font-semibold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a' }}>
                Who We Are
              </p>
              <h2 className="text-white leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)' }}>
                Just Starting Out — <br />
                <span className="italic font-normal" style={{ color: '#c9e89d' }}>and That's the Point</span>
              </h2>
              <div className="mb-6" style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #b8975a, transparent)' }} />

              <div className="space-y-5" style={{ fontFamily: "'Crimson Text', serif", fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8 }}>
                <p>
                  Tek Tours & Travels is a new travel company — and we wear that proudly. We haven't been doing this long enough to get complacent. Every client still matters enormously to us, and every trip still gets our full attention.
                </p>
                <p>
                  We're based in Uganda, and East Africa is where our expertise runs deepest. But our ambitions — and our bookings — stretch across the globe. Our recent group trips to Beijing, Phuket, Dubai, and Istanbul are proof that we're just as comfortable arranging international adventures as we are navigating the forests of Bwindi.
                </p>
                <p>
                  Choosing a tour company is about trust, especially somewhere new. We earn that trust by being straight with you: transparent pricing, honest recommendations, and real communication — not automated replies or vague itineraries.
                </p>
              </div>

              {/* Location pill */}
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-full"
                style={{ background: 'rgba(184,151,90,0.1)', border: '1px solid rgba(184,151,90,0.25)' }}>
                <MapPin className="w-4 h-4" style={{ color: '#b8975a' }} />
                <span className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif", color: '#d4af6e' }}>
                  Based in Buwama, Mpigi District, Uganda
                </span>
              </div>
            </div>

            {/* Right — two stacked images */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <img
                  src="/images/IMG_20230826_145742.jpg"
                  alt="Travelers on the Great Wall of China"
                  className="w-full object-cover"
                  style={{ height: 420 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                    style={{ fontFamily: "'Montserrat', sans-serif", background: 'rgba(10,10,15,0.65)', backdropFilter: 'blur(8px)', color: '#d4af6e', border: '1px solid rgba(212,175,110,0.3)' }}>
                    <MapPin className="w-3 h-3" /> Great Wall of China
                  </span>
                </div>
              </div>

              {/* Small inset photo */}
              <div className="absolute -bottom-5 -right-5 rounded-xl overflow-hidden shadow-2xl"
                style={{ width: 160, height: 120, border: '3px solid #0a0a0f' }}>
                <img src="/images/murchison-falls-view.jpg" alt="Murchison Falls, Uganda"
                  className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative py-16"
        style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x" style={{ '--tw-divide-opacity': 1 }}>
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-6">
                <p className="font-bold mb-1 leading-none" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 52px)', color: '#d4af6e' }}>
                  {stat.number}
                </p>
                <p className="text-white font-semibold mb-1 text-sm tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {stat.label}
                </p>
                <p className="text-xs" style={{ fontFamily: "'Crimson Text', serif", color: 'rgba(255,255,255,0.4)' }}>
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute bottom-0 right-1/4 pointer-events-none"
          style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(106,171,106,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 rounded-full border text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a', borderColor: 'rgba(184,151,90,0.3)', background: 'rgba(184,151,90,0.08)' }}>
              What We Stand For
            </span>
            <h2 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)' }}>
              Our Core <span className="italic font-normal" style={{ color: '#c9e89d' }}>Values</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              const active = hoveredValue === i;
              return (
                <div key={i}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  style={{
                    borderRadius: 16,
                    padding: '2rem',
                    background: active ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${active ? v.color + '60' : 'rgba(255,255,255,0.08)'}`,
                    transform: active ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                    boxShadow: active ? `0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px ${v.color}30` : 'none',
                  }}>
                  <div className="mb-5 inline-flex items-center justify-center rounded-xl"
                    style={{ width: 50, height: 50, background: active ? v.color + '30' : 'rgba(255,255,255,0.07)' }}>
                    <Icon style={{ width: 22, height: 22, color: v.color }} />
                  </div>
                  <h3 className="text-white font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: 20 }}>
                    {v.title}
                  </h3>
                  <p style={{ fontFamily: "'Crimson Text', serif", fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="relative py-16 sm:py-24"
        style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left — image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <img
                src="/images/safari-wild.avif"
                alt="Open savannah safari"
                className="w-full object-cover"
                style={{ height: 500 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Right */}
            <div>
              <p className="text-xs tracking-widest uppercase font-semibold mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a' }}>
                Why Choose Us
              </p>
              <h2 className="text-white leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)' }}>
                What Makes Us <br />
                <span className="italic font-normal" style={{ color: '#c9e89d' }}>Different</span>
              </h2>
              <div className="mb-8" style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #b8975a, transparent)' }} />

              <div className="space-y-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="flex-shrink-0 mt-0.5" style={{ width: 18, height: 18, color: '#b8975a' }} />
                    <p style={{ fontFamily: "'Crimson Text', serif", fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
                      {f}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
          alt="Safari background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,20,10,0.90) 0%, rgba(10,15,5,0.88) 100%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full border text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a', borderColor: 'rgba(184,151,90,0.3)', background: 'rgba(184,151,90,0.08)' }}>
            Let's Plan Your Trip
          </span>
          <h2 className="text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(30px, 5vw, 56px)' }}>
            Ready to Go <br />
            <span className="italic font-normal" style={{ color: '#c9e89d' }}>Somewhere Amazing?</span>
          </h2>
          <p className="mb-10" style={{ fontFamily: "'Crimson Text', serif", fontSize: 19, color: 'rgba(255,255,255,0.65)' }}>
            Tell us where you want to go — we'll handle everything else. No pressure, no hard sell. Just good travel planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #b8975a, #d4af6e)', color: '#0a0a0f', fontFamily: "'Montserrat', sans-serif" }}>
              Start Planning
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.15)', fontFamily: "'Montserrat', sans-serif" }}>
              Browse Packages
            </Link>
          </div>
        </div>
      </section>

      <style>{`::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default About;