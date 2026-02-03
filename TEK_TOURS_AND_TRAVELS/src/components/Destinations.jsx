import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, Users } from 'lucide-react';

const Destinations = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [columnPausedStates, setColumnPausedStates] = useState([false, false, false]);
  const [isMobile, setIsMobile] = useState(false);

  const scrollPositionsRef = useRef([0, 0, 0]);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const destinationColumns = [
    {
      destinations: [
        { id: 'bwindi', image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=600&q=80', title: 'Bwindi Impenetrable Forest', location: 'Southwestern Uganda', category: 'Gorilla Trekking', duration: '4 Days', groupSize: '4-8', description: 'Unforgettable mountain gorilla trekking and lush rainforest adventures' },
        { id: 'murchison', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', title: 'Murchison Falls NP', location: 'Northwestern Uganda', category: 'Safari & Waterfalls', duration: '3 Days', groupSize: '6-12', description: 'Thundering Nile waterfall and classic African safari experiences' },
        { id: 'queen-elizabeth', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80', title: 'Queen Elizabeth NP', location: 'Western Uganda', category: 'Wildlife Safari', duration: '3 Days', groupSize: '6-14', description: 'Diverse ecosystems, boat cruises, and iconic wildlife sightings' },
        { id: 'lake-bunyonyi', image: 'https://images.unsplash.com/photo-1611416517780-eff3a2f57b89?w=600&q=80', title: 'Lake Bunyonyi', location: 'Southwestern Uganda', category: 'Scenic Lake', duration: '2 Days', groupSize: '2-6', description: 'Serene lake with island hopping, swimming and beautiful views' },
      ],
      offset: 0
    },
    {
      destinations: [
        { id: 'rwenzori', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', title: 'Rwenzori Mountains', location: 'Western Uganda', category: 'Mountain Trek', duration: '7 Days', groupSize: '6-10', description: 'Hike the "Mountains of the Moon" with glaciers and waterfalls' },
        { id: 'jinja', image: 'https://images.unsplash.com/photo-1624714463892-c0e3fe9b1eb1?w=600&q=80', title: 'Jinja & Source of Nile', location: 'Eastern Uganda', category: 'Adventure & River', duration: '2 Days', groupSize: '4-8', description: 'Adventure capital with white-water rafting and Nile views' },
        { id: 'kibale', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&q=80', title: 'Kibale Forest', location: 'Western Uganda', category: 'Chimpanzee Safari', duration: '3 Days', groupSize: '6-10', description: 'Chimpanzee tracking and rich primate biodiversity' },
        { id: 'lake-victoria', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', title: 'Lake Victoria', location: 'Central Uganda', category: 'Lakeside Leisure', duration: '2 Days', groupSize: '2-6', description: "Africa's largest lake with beaches, boat tours and birdlife" },
      ],
      offset: -160
    },
    {
      destinations: [
        { id: 'kidepo', image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=600&q=80', title: 'Kidepo Valley NP', location: 'Northern Uganda', category: 'Remote Safari', duration: '4 Days', groupSize: '6-10', description: 'Wild, rugged landscapes and classic savannah wildlife' },
        { id: 'entebbe', image: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?w=600&q=80', title: 'Entebbe Botanical Gardens', location: 'Entebbe, Uganda', category: 'Nature & Birdwatching', duration: '1 Day', groupSize: '4-8', description: 'Explore tropical plant life, birds and lakeside scenery' },
        { id: 'lake-mburo', image: 'https://images.pexels.com/photos/33045/animal-zebra-lake-blog-mburo.jpg?w=600&q=80', title: 'Lake Mburo NP', location: 'Western Uganda', category: 'Safari Getaway', duration: '2 Days', groupSize: '4-8', description: 'Easy safari with zebras, antelope, and birdlife' },
        { id: 'kampala', image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=600&q=80', title: 'Kampala City', location: 'Central Uganda', category: 'Urban & Culture', duration: '2 Days', groupSize: '1-6', description: 'Experience lively markets, museums, and nightlife' },
      ],
      offset: -80
    }
  ];

  // Uneven blur config per column
  const fadeConfig = [
    { topGradH: 130, topBlurH: 90,  topBlur: 7,  botGradH: 80,  botBlurH: 50,  botBlur: 4  },
    { topGradH: 60,  topBlurH: 40,  topBlur: 3,  botGradH: 150, botBlurH: 100, botBlur: 9  },
    { topGradH: 100, topBlurH: 65,  topBlur: 5,  botGradH: 100, botBlurH: 65,  botBlur: 5  },
  ];

  // Auto-scroll
  useEffect(() => {
    if (isMobile) return;
    const animate = () => {
      const now = Date.now();
      const dt = (now - lastTimeRef.current) / 16.67;
      lastTimeRef.current = now;
      destinationColumns.forEach((_, i) => {
        if (columnPausedStates[i]) return;
        scrollPositionsRef.current[i] += (0.35 + i * 0.1) * dt;
        const el = document.getElementById(`scroll-col-${i}`);
        if (el) {
          const max = el.scrollHeight / 2;
          if (scrollPositionsRef.current[i] >= max) scrollPositionsRef.current[i] = 0;
          el.scrollTop = scrollPositionsRef.current[i];
        }
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isMobile, columnPausedStates]);

  const pause = (i, v) => setColumnPausedStates(p => { const n = [...p]; n[i] = v; return n; });

  // ── MOBILE ──
  if (isMobile) {
    const all = destinationColumns.flatMap(c => c.destinations);
    return (
      <section id="destinations" className="relative bg-[#0f0f1a] overflow-hidden py-16">
        <div className="px-4 sm:px-6 mb-8">
          <span className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/30 text-amber-400 text-xs tracking-widest uppercase rounded-full mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Explore Uganda</span>
          <h2 className="text-4xl sm:text-5xl text-white font-bold mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Discover <br />Destinations</h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-lg" style={{ fontFamily: "'Crimson Text', serif" }}>Handpicked destinations from pristine beaches to majestic mountains</p>
        </div>
        <div className="overflow-x-auto scrollbar-hide px-4 sm:px-6">
          <div className="flex gap-3 pb-4">
            {all.map((d, i) => (
              <div key={`${d.id}-${i}`} className="flex-shrink-0" style={{ width: 180 }}>
                <div className="relative rounded-lg overflow-hidden bg-[#1a1a1a] shadow-2xl" style={{ aspectRatio: '2/3' }}>
                  <img src={d.image} alt={d.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-2 left-2"><span className="inline-block px-2 py-0.5 bg-amber-600/90 text-white text-[10px] font-semibold tracking-wide uppercase rounded-full">{d.category}</span></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2.5">
                    <h4 className="text-white text-[13px] font-bold mb-0.5 leading-tight line-clamp-2" style={{ fontFamily: "'Playfair Display', serif" }}>{d.title}</h4>
                    <div className="flex items-center gap-1 text-gray-400 text-[11px]"><MapPin className="w-2.5 h-2.5" /><span>{d.location}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── DESKTOP ──
  const BG = '#0f0f1a';

  return (
    <section id="destinations" className="relative overflow-hidden min-h-screen flex" style={{ background: BG }}>

      {/* ── LEFT half: scrolling poster columns ── */}
      <div className="relative flex-shrink-0" style={{ width: '50%' }}>
        <div className="flex h-screen">
          {destinationColumns.map((column, ci) => (
            <div
              key={ci}
              className="relative"
              style={{ width: 178, marginLeft: ci === 0 ? 20 : 10 }}
              onMouseEnter={() => pause(ci, true)}
              onMouseLeave={() => pause(ci, false)}
            >
              {/* scrollable gutter */}
              <div
                id={`scroll-col-${ci}`}
                className="scrollbar-hide overflow-y-auto"
                style={{ height: '100vh', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex flex-col gap-3 py-8" style={{ transform: `translateY(${column.offset}px)` }}>
                  {[...column.destinations, ...column.destinations].map((d, idx) => {
                    const key = `${ci}-${idx}`;
                    const hov = hoveredCard === key;
                    return (
                      <div
                        key={key}
                        onMouseEnter={() => setHoveredCard(key)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className="relative cursor-pointer"
                        style={{ transition: 'transform 0.3s ease', transform: hov ? 'scale(1.04)' : 'scale(1)', zIndex: hov ? 20 : 1 }}
                      >
                        {/* ambient glow */}
                        <div className="absolute -inset-1 rounded-lg blur-xl transition-opacity duration-500" style={{ background: 'linear-gradient(135deg,rgba(245,158,11,0.28),rgba(139,92,246,0.08),rgba(59,130,246,0.18))', opacity: hov ? 0.55 : 0 }} />

                        {/* poster card */}
                        <div
                          className="relative rounded-lg overflow-hidden"
                          style={{
                            aspectRatio: '2 / 3',
                            background: '#111',
                            boxShadow: hov ? '0 0 22px rgba(245,158,11,0.38),0 4px 14px rgba(0,0,0,0.6)' : '0 3px 14px rgba(0,0,0,0.5)',
                            transition: 'box-shadow 0.3s ease',
                            border: hov ? '1px solid rgba(245,158,11,0.4)' : '1px solid transparent',
                          }}
                        >
                          <img
                            src={d.image} alt={d.title}
                            className="w-full h-full object-cover"
                            style={{ transition: 'transform 0.7s ease', transform: hov ? 'scale(1.07)' : 'scale(1)' }}
                            loading="lazy"
                          />
                          {/* gradient scrim */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                          {/* category */}
                          <div className="absolute top-2 left-2">
                            <span className="inline-block px-2 py-0.5 bg-amber-600/85 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wide uppercase rounded-full">{d.category}</span>
                          </div>

                          {/* hover detail */}
                          <div
                            className="absolute inset-0 flex flex-col items-center justify-center px-3"
                            style={{ background: 'rgba(0,0,0,0.84)', backdropFilter: 'blur(3px)', opacity: hov ? 1 : 0, transition: 'opacity 0.28s ease' }}
                          >
                            <p className="text-white/82 text-[11px] text-center leading-relaxed mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>{d.description}</p>
                            <div className="flex gap-3 text-white/50 text-[10px]">
                              <div className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" /><span>{d.duration}</span></div>
                              <div className="flex items-center gap-1"><Users className="w-2.5 h-2.5" /><span>{d.groupSize}</span></div>
                            </div>
                          </div>

                          {/* title always visible */}
                          <div className="absolute bottom-0 left-0 right-0 p-2.5">
                            <h4 className="text-white text-[13px] font-bold leading-tight line-clamp-2" style={{ fontFamily: "'Playfair Display', serif" }}>{d.title}</h4>
                            <div className="flex items-center gap-1 text-gray-400 text-[11px] mt-0.5"><MapPin className="w-2.5 h-2.5" /><span className="line-clamp-1">{d.location}</span></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ── TOP fade ── */}
              <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: fadeConfig[ci].topGradH, zIndex: 10, background: `linear-gradient(to bottom, ${BG} 0%, rgba(15,15,26,0.75) 45%, rgba(15,15,26,0) 100%)` }} />
              <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: fadeConfig[ci].topBlurH, zIndex: 11, WebkitBackdropFilter: `blur(${fadeConfig[ci].topBlur}px)`, backdropFilter: `blur(${fadeConfig[ci].topBlur}px)`, maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }} />

              {/* ── BOTTOM fade ── */}
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: fadeConfig[ci].botGradH, zIndex: 10, background: `linear-gradient(to top, ${BG} 0%, rgba(15,15,26,0.75) 45%, rgba(15,15,26,0) 100%)` }} />
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: fadeConfig[ci].botBlurH, zIndex: 11, WebkitBackdropFilter: `blur(${fadeConfig[ci].botBlur}px)`, backdropFilter: `blur(${fadeConfig[ci].botBlur}px)`, maskImage: 'linear-gradient(to top, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)' }} />
            </div>
          ))}
        </div>

        {/* RIGHT-EDGE fade — bleeds columns into the text side */}
        <div
          className="absolute top-0 right-0 bottom-0 pointer-events-none"
          style={{ width: 180, zIndex: 30, background: `linear-gradient(to right, transparent 0%, rgba(15,15,26,0.55) 35%, ${BG} 100%)` }}
        />
      </div>

      {/* ── RIGHT half: hero copy ── */}
      <div className="flex-1 flex items-center px-10 xl:px-16 2xl:px-24">
        <div className="max-w-lg">
          <span className="inline-block text-[11px] tracking-widest uppercase text-gray-500 mb-5 font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            SCROLL
          </span>

          <h2 className="text-5xl xl:text-6xl text-white font-bold leading-[1.08] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Unlimited<br />
            destinations,<br />
            <span style={{ color: '#c9e89d' }}>tours and<br />more.</span>
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
            Discover handpicked destinations around the world. From pristine beaches to majestic mountains, ancient cultures to thrilling safaris.
          </p>

          <button className="px-7 py-3 bg-transparent hover:bg-white/6 text-white text-sm font-semibold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300">
            Contact Us
          </button>

          {/* stats */}
          <div className="mt-14 pt-5 border-t border-white/8 flex gap-10">
            {[['150+', 'Destinations'], ['50K+', 'Travelers'], ['500+', 'Tours']].map(([n, l]) => (
              <div key={l}>
                <div className="text-xl font-bold text-amber-400 mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>{n}</div>
                <div className="text-[10px] text-gray-600 uppercase tracking-widest">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Destinations;