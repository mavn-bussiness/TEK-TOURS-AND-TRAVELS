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
        {
          id: 'bwindi',
          image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80',
          title: 'Bwindi Impenetrable Forest',
          location: 'Uganda',
          category: 'Wildlife',
          duration: '3–5 Days',
          groupSize: '4–8',
          description: 'Home to nearly half the world\'s mountain gorillas. Trek ancient mist-covered rainforest with expert guides.'
        },
        {
          id: 'masai-mara',
          image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=600&q=80',
          title: 'Masai Mara',
          location: 'Kenya',
          category: 'Wildlife',
          duration: '4–7 Days',
          groupSize: '6–12',
          description: 'Witness the Great Migration — 1.5 million wildebeest crossing the Mara River in a breathtaking spectacle.'
        },
        {
          id: 'zanzibar',
          image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=600&q=80',
          title: 'Zanzibar Archipelago',
          location: 'Tanzania',
          category: 'Beach',
          duration: '5–7 Days',
          groupSize: '2–6',
          description: 'Pristine white sand beaches, UNESCO Stone Town, and world-class coral reef diving on the Indian Ocean.'
        },
        {
          id: 'beijing',
          image: '/images/IMG_20230828_131906.jpg',
          title: 'Beijing & Great Wall',
          location: 'China',
          category: 'Cultural',
          duration: '6–9 Days',
          groupSize: '6–20',
          description: 'Walk the ancient ramparts of the Great Wall and explore the imperial grandeur of the Forbidden City.'
        },
      ],
      offset: 0
    },
    {
      destinations: [
        {
          id: 'serengeti',
          image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
          title: 'Serengeti',
          location: 'Tanzania',
          category: 'Wildlife',
          duration: '5–8 Days',
          groupSize: '4–10',
          description: 'Endless plains supporting the world\'s greatest terrestrial mammal migration. Lions, cheetahs, leopards, and vast zebra herds.'
        },
        {
          id: 'murchison',
          image: '/images/murchison-falls-view.jpg',
          title: 'Murchison Falls',
          location: 'Uganda',
          category: 'Wildlife',
          duration: '3–5 Days',
          groupSize: '6–12',
          description: 'The Nile forces through a 7-metre gap with thunderous power. Boat cruises past hippos and dramatic game drives.'
        },
        {
          id: 'phuket',
          image: '/images/Snapchat-740087849.jpg',
          title: 'Phuket & Phi Phi',
          location: 'Thailand',
          category: 'Beach',
          duration: '6–9 Days',
          groupSize: '2–10',
          description: 'Island-hop limestone cliffs, dive crystal waters, and lose yourself in vibrant Thai street food and night markets.'
        },
        {
          id: 'rwenzori',
          image: '/images/mountain-climbing.avif',
          title: 'Rwenzori Mountains',
          location: 'Uganda',
          category: 'Adventure',
          duration: '7–10 Days',
          groupSize: '4–10',
          description: 'Africa\'s last equatorial glaciers and third highest peak. Trek through giant lobelias and glacial alpine lakes.'
        },
      ],
      offset: -160
    },
    {
      destinations: [
        {
          id: 'kidepo',
          image: 'https://images.unsplash.com/photo-1667817418453-3489bb60ce9b?w=1920&auto=format&fit=crop&q=80',
          title: 'Kidepo Valley NP',
          location: 'Uganda',
          category: 'Safari',
          duration: '3–5 Days',
          groupSize: '4–10',
          description: 'Uganda\'s most remote wilderness — dramatic savannah between the Sudan and Kenya borders. Pure, unspoiled Africa.'
        },
        {
          id: 'dubai',
          image: '/images/Snapchat-1906972103.jpg',
          title: 'Dubai',
          location: 'UAE',
          category: 'Luxury',
          duration: '4–6 Days',
          groupSize: '2–12',
          description: 'From desert dunes at sunset to sky-high infinity pools — the world\'s most audacious city never disappoints.'
        },
        {
          id: 'kilimanjaro',
          image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50b0?w=800&q=80',
          title: 'Mount Kilimanjaro',
          location: 'Tanzania',
          category: 'Adventure',
          duration: '7–10 Days',
          groupSize: '6–12',
          description: 'Africa\'s highest peak at 5,895m. No technical climbing needed — just determination and a great guide.'
        },
        {
          id: 'lake-bunyonyi',
          image: '/images/lake-bunyonyi.avif',
          title: 'Lake Bunyonyi',
          location: 'Uganda',
          category: 'Nature',
          duration: '2–3 Days',
          groupSize: '2–6',
          description: 'Often called Africa\'s most beautiful lake — 29 islands, terraced hills, and safe bilharzia-free swimming.'
        },
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
          <span className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/30 text-amber-400 text-xs tracking-widest uppercase rounded-full mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Explore the World
          </span>
          <h2 className="text-4xl sm:text-5xl text-white font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Discover <br />Destinations
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-lg"
            style={{ fontFamily: "'Crimson Text', serif" }}>
            From African safaris to Asian temples — handpicked destinations across the globe
          </p>
        </div>
        <div className="overflow-x-auto scrollbar-hide px-4 sm:px-6">
          <div className="flex gap-3 pb-4">
            {all.map((d, i) => (
              <div key={`${d.id}-${i}`} className="flex-shrink-0" style={{ width: 180 }}>
                <div className="relative rounded-lg overflow-hidden bg-[#1a1a1a] shadow-2xl" style={{ aspectRatio: '2/3' }}>
                  <img src={d.image} alt={d.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="inline-block px-2 py-0.5 bg-amber-600/90 text-white text-[10px] font-semibold tracking-wide uppercase rounded-full">
                      {d.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2.5">
                    <h4 className="text-white text-[13px] font-bold mb-0.5 leading-tight line-clamp-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}>{d.title}</h4>
                    <div className="flex items-center gap-1 text-gray-400 text-[11px]">
                      <MapPin className="w-2.5 h-2.5" /><span>{d.location}</span>
                    </div>
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

      {/* ── LEFT: scrolling poster columns ── */}
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
                        style={{
                          transition: 'transform 0.3s ease',
                          transform: hov ? 'scale(1.04)' : 'scale(1)',
                          zIndex: hov ? 20 : 1
                        }}
                      >
                        {/* ambient glow */}
                        <div className="absolute -inset-1 rounded-lg blur-xl transition-opacity duration-500"
                          style={{
                            background: 'linear-gradient(135deg,rgba(184,151,90,0.3),rgba(201,232,157,0.08),rgba(184,151,90,0.15))',
                            opacity: hov ? 0.6 : 0
                          }} />

                        {/* poster card */}
                        <div
                          className="relative rounded-lg overflow-hidden"
                          style={{
                            aspectRatio: '2 / 3',
                            background: '#111',
                            boxShadow: hov
                              ? '0 0 22px rgba(184,151,90,0.4), 0 4px 14px rgba(0,0,0,0.6)'
                              : '0 3px 14px rgba(0,0,0,0.5)',
                            transition: 'box-shadow 0.3s ease',
                            border: hov ? '1px solid rgba(184,151,90,0.45)' : '1px solid transparent',
                          }}
                        >
                          <img
                            src={d.image} alt={d.title}
                            className="w-full h-full object-cover"
                            style={{ transition: 'transform 0.7s ease', transform: hov ? 'scale(1.07)' : 'scale(1)' }}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                          {/* category badge */}
                          <div className="absolute top-2 left-2">
                            <span className="inline-block px-2 py-0.5 text-white text-[10px] font-semibold tracking-wide uppercase rounded-full"
                              style={{ background: 'rgba(184,151,90,0.85)', backdropFilter: 'blur(4px)' }}>
                              {d.category}
                            </span>
                          </div>

                          {/* hover detail overlay */}
                          <div
                            className="absolute inset-0 flex flex-col items-center justify-center px-3"
                            style={{
                              background: 'rgba(0,0,0,0.84)',
                              backdropFilter: 'blur(3px)',
                              opacity: hov ? 1 : 0,
                              transition: 'opacity 0.28s ease'
                            }}
                          >
                            <p className="text-white/80 text-[11px] text-center leading-relaxed mb-3"
                              style={{ fontFamily: "'Crimson Text', serif" }}>
                              {d.description}
                            </p>
                            <div className="flex gap-3 text-white/50 text-[10px]">
                              <div className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" /><span>{d.duration}</span></div>
                              <div className="flex items-center gap-1"><Users className="w-2.5 h-2.5" /><span>{d.groupSize}</span></div>
                            </div>
                          </div>

                          {/* title always visible */}
                          <div className="absolute bottom-0 left-0 right-0 p-2.5">
                            <h4 className="text-white text-[13px] font-bold leading-tight line-clamp-2"
                              style={{ fontFamily: "'Playfair Display', serif" }}>
                              {d.title}
                            </h4>
                            <div className="flex items-center gap-1 text-gray-400 text-[11px] mt-0.5">
                              <MapPin className="w-2.5 h-2.5" />
                              <span className="line-clamp-1">{d.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* TOP fade */}
              <div className="absolute top-0 left-0 right-0 pointer-events-none"
                style={{ height: fadeConfig[ci].topGradH, zIndex: 10, background: `linear-gradient(to bottom, ${BG} 0%, rgba(15,15,26,0.75) 45%, rgba(15,15,26,0) 100%)` }} />
              <div className="absolute top-0 left-0 right-0 pointer-events-none"
                style={{ height: fadeConfig[ci].topBlurH, zIndex: 11, WebkitBackdropFilter: `blur(${fadeConfig[ci].topBlur}px)`, backdropFilter: `blur(${fadeConfig[ci].topBlur}px)`, maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }} />

              {/* BOTTOM fade */}
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{ height: fadeConfig[ci].botGradH, zIndex: 10, background: `linear-gradient(to top, ${BG} 0%, rgba(15,15,26,0.75) 45%, rgba(15,15,26,0) 100%)` }} />
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{ height: fadeConfig[ci].botBlurH, zIndex: 11, WebkitBackdropFilter: `blur(${fadeConfig[ci].botBlur}px)`, backdropFilter: `blur(${fadeConfig[ci].botBlur}px)`, maskImage: 'linear-gradient(to top, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)' }} />
            </div>
          ))}
        </div>

        {/* Right-edge fade into text panel */}
        <div className="absolute top-0 right-0 bottom-0 pointer-events-none"
          style={{ width: 180, zIndex: 30, background: `linear-gradient(to right, transparent 0%, rgba(15,15,26,0.55) 35%, ${BG} 100%)` }} />
      </div>

      {/* ── RIGHT: hero copy ── */}
      <div className="flex-1 flex items-center px-10 xl:px-16 2xl:px-24">
        <div className="max-w-lg">
          <span className="inline-block px-4 py-2 rounded-full border text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a', borderColor: 'rgba(184,151,90,0.3)', background: 'rgba(184,151,90,0.08)' }}>
            Explore the World
          </span>

          <h2 className="text-5xl xl:text-6xl text-white font-bold leading-[1.08] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Unlimited<br />
            destinations,<br />
            <span style={{ color: '#c9e89d' }}>tours and<br />more.</span>
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-8"
            style={{ fontFamily: "'Crimson Text', serif" }}>
            From the gorilla forests of Uganda to the temples of Beijing, desert dunes of Dubai to the beaches of Zanzibar — we take you everywhere that matters.
          </p>

          <a href="/destinations"
            className="inline-block px-7 py-3 text-white text-sm font-semibold rounded-lg border transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif", borderColor: 'rgba(255,255,255,0.2)', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
          >
            View All Destinations
          </a>

          {/* Stats */}
          <div className="mt-14 pt-5 flex gap-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {[['14+', 'Destinations'], ['4', 'Continents'], ['100%', 'Personalised']].map(([n, l]) => (
              <div key={l}>
                <div className="text-xl font-bold mb-0.5" style={{ fontFamily: "'Playfair Display', serif", color: '#d4af6e' }}>{n}</div>
                <div className="text-[10px] text-gray-600 uppercase tracking-widest" style={{ fontFamily: "'Montserrat', sans-serif" }}>{l}</div>
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