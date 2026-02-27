import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Clock, Search, Mountain,
  Camera, Loader, Waves, TreePine, Check, ArrowRight, Globe
} from 'lucide-react';

const AllDestinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleIds, setVisibleIds] = useState(new Set());
  const loadMoreRef = useRef(null);

  const allDestinations = [
    // ── Africa ──
    {
      id: 1,
      name: 'Bwindi Impenetrable Forest',
      country: 'Uganda', region: 'Africa', category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      description: 'Home to nearly half the world\'s remaining mountain gorillas, Bwindi is a UNESCO World Heritage Site draped in ancient mist-covered rainforest. Trek with expert guides to encounter these gentle giants, while 350+ bird species and rich Batwa culture complete an extraordinary experience.',
      duration: '3–5 Days',
      highlights: ['Mountain Gorilla Trekking', 'Bird Watching', 'Nature Walks', 'Batwa Cultural Experience'],
    },
    {
      id: 2,
      name: 'Masai Mara National Reserve',
      country: 'Kenya', region: 'Africa', category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80',
      description: 'Kenya\'s most celebrated reserve, renowned for the annual Great Migration where 1.5 million wildebeest thunder across the Mara River. Big Five game drives, hot air balloon rides over golden plains, and authentic Maasai culture make this one of Earth\'s ultimate safari destinations.',
      duration: '4–7 Days',
      highlights: ['Great Wildebeest Migration', 'Big Five Safaris', 'Hot Air Balloon Rides', 'Maasai Village Visits'],
    },
    {
      id: 3,
      name: 'Serengeti National Park',
      country: 'Tanzania', region: 'Africa', category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      description: '"Endless plains" in Maasai — and this UNESCO site delivers. 15,000 sq km of pristine savannah support the world\'s greatest terrestrial mammal migration. Lions, cheetahs, leopards, and vast zebra herds roam a landscape that shifts from open grassland to riverine forest and dramatic kopjes.',
      duration: '5–8 Days',
      highlights: ['Annual Wildlife Migration', 'Big Five Game Viewing', 'Balloon Safaris', 'Kopje Rock Formations'],
    },
    {
      id: 4,
      name: 'Zanzibar Archipelago',
      country: 'Tanzania', region: 'Africa', category: 'beach',
      image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&q=80',
      description: 'Pristine white sand beaches meet a UNESCO-listed Stone Town in this Indian Ocean jewel. Winding alleyways, Swahili architecture, world-class dive sites, and spice plantations weave African, Arab, and Indian influences into one unforgettable island escape.',
      duration: '5–7 Days',
      highlights: ['White Sand Beaches', 'Stone Town Heritage', 'Spice Farm Tours', 'Coral Reef Snorkeling'],
    },
    {
      id: 5,
      name: 'Mount Kilimanjaro',
      country: 'Tanzania', region: 'Africa', category: 'adventure',
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50b0?w=800&q=80',
      description: 'Africa\'s highest peak at 5,895m — and no technical climbing required. Trek through five distinct climate zones, from lush rainforest to arctic summit, along the famous Machame or Marangu routes. Standing on Uhuru Peak at sunrise is a life-defining moment.',
      duration: '7–10 Days',
      highlights: ['Summit Uhuru Peak', 'Five Climate Zones', 'Glaciers & Ice Fields', 'Sunrise from the Roof of Africa'],
    },
    {
      id: 6,
      name: 'Murchison Falls',
      country: 'Uganda', region: 'Africa', category: 'wildlife',
      image: '/images/murchison-falls-view.jpg',
      description: 'Where the Nile forces itself through a 7-metre gap with thunderous force. Uganda\'s largest national park offers game drives for the Big Five, Nile boat cruises past hippos and crocodiles, and the dramatic hike to the top of the falls itself.',
      duration: '3–5 Days',
      highlights: ['Nile Boat Cruise', 'Big Five Game Drives', 'Top of the Falls Hike', 'Shoebill Spotting'],
    },
    {
      id: 7,
      name: 'Kidepo Valley National Park',
      country: 'Uganda', region: 'Africa', category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1667817418453-3489bb60ce9b?w=1920&auto=format&fit=crop&q=80',
      description: 'Uganda\'s most remote and rewarding park — a true wilderness between the borders of Sudan and Kenya. Dramatic semi-arid valleys, mountains, and open savannah shelter lions, elephants, cheetahs, and ostriches found nowhere else in the country. Pure, unspoiled Africa.',
      duration: '3–5 Days',
      highlights: ['Remote Wilderness', 'Unique Wildlife Species', 'Karamojong Culture', 'Dramatic Landscapes'],
    },
    {
      id: 8,
      name: 'Lake Bunyonyi',
      country: 'Uganda', region: 'Africa', category: 'nature',
      image: '/images/lake-bunyonyi.avif',
      description: 'Often called Africa\'s most beautiful lake, Lake Bunyonyi sits at 1,962m surrounded by terraced hills and dotted with 29 islands. Canoe between islands, swim in safe bilharzia-free waters, and soak in the serenity of one of Uganda\'s most underrated gems.',
      duration: '2–3 Days',
      highlights: ['Island Hopping', 'Canoeing', 'Birdwatching', 'Hill Terraces Views'],
    },
    {
      id: 9,
      name: 'Rwenzori Mountains',
      country: 'Uganda', region: 'Africa', category: 'adventure',
      image: '/images/mountain-climbing.avif',
      description: 'The legendary "Mountains of the Moon" — Africa\'s third highest peak and the continent\'s last equatorial glaciers. Trek through giant lobelias, heather moorlands, and glacial lakes in this UNESCO site. One of Africa\'s most challenging and visually surreal trekking experiences.',
      duration: '7–10 Days',
      highlights: ['Margherita Peak Summit', 'Equatorial Glaciers', 'Alpine Lakes', 'Unique Afro-Alpine Flora'],
    },
    {
      id: 10,
      name: 'Ngorongoro Crater',
      country: 'Tanzania', region: 'Africa', category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
      description: 'The world\'s largest intact volcanic caldera — a natural enclosure supporting 25,000 large animals including the Big Five. Permanent water sources and rich grazing on the crater floor make it possible to see more wildlife in a single day here than almost anywhere on Earth.',
      duration: '2–3 Days',
      highlights: ['Crater Floor Safari', 'Big Five in One Day', 'Flamingos at Lake Magadi', 'Olduvai Gorge'],
    },

    // ── Asia ──
    {
      id: 11,
      name: 'Beijing & the Great Wall',
      country: 'China', region: 'Asia', category: 'cultural',
      image: '/images/IMG_20230828_131906.jpg',
      description: 'One of humanity\'s greatest achievements stretches across misty mountains above one of the world\'s most dynamic capitals. Walk the ancient ramparts, explore the Forbidden City\'s imperial grandeur, and wander Hutong alleyways where Beijing\'s traditional soul still breathes.',
      duration: '6–9 Days',
      highlights: ['Great Wall of China', 'Temple of Heaven', 'Forbidden City', 'Traditional Hutong Culture'],
    },
    {
      id: 12,
      name: 'Phuket & Phi Phi Islands',
      country: 'Thailand', region: 'Asia', category: 'beach',
      image: '/images/Snapchat-740087849.jpg',
      description: 'Thailand\'s jewel of the Andaman Sea — from the vibrant beach clubs of Patong to the serene limestone cliffs of Phi Phi. Island-hop by longboat, dive crystal waters, conquer jungle ATV trails, and lose yourself in night markets and street food that define Southeast Asia.',
      duration: '6–9 Days',
      highlights: ['Phi Phi Islands Cruise', 'ATV Jungle Adventure', 'Thai Cooking Class', 'Snorkeling & Diving'],
    },

    // ── Middle East ──
    {
      id: 13,
      name: 'Dubai',
      country: 'UAE', region: 'Middle East', category: 'luxury',
      image: '/images/Snapchat-1906972103.jpg',
      description: 'The future built in the desert — a dazzling skyline, world-record towers, and gold-trimmed malls alongside ancient souks and camel-trodden dunes. Dune-bash at sunset, sail the Marina, and dine above the clouds in one of the world\'s most audacious cities.',
      duration: '4–6 Days',
      highlights: ['Burj Khalifa', 'Desert Safari & Dune Bashing', 'Dubai Marina', 'Gold & Spice Souks'],
    },

    // ── Europe & Asia ──
    {
      id: 14,
      name: 'Istanbul',
      country: 'Turkey', region: 'Europe & Asia', category: 'cultural',
      image: '/images/Snapchat-783147270.jpg',
      description: 'The only city that straddles two continents — where minarets pierce the sky above a bazaar that has traded spices for 550 years. Hagia Sophia, the Blue Mosque, and a Bosphorus at sunset blending Europe and Asia into an unrepeatable crossroads of civilisation.',
      duration: '4–6 Days',
      highlights: ['Hagia Sophia', 'Grand Bazaar', 'Bosphorus Cruise', 'Turkish Cuisine Tour'],
    },
  ];

  const categories = [
    { id: 'all', name: 'All', icon: Globe },
    { id: 'wildlife', name: 'Wildlife', icon: Camera },
    { id: 'adventure', name: 'Adventure', icon: Mountain },
    { id: 'beach', name: 'Beach', icon: Waves },
    { id: 'nature', name: 'Nature', icon: TreePine },
    { id: 'cultural', name: 'Cultural', icon: MapPin },
    { id: 'luxury', name: 'Luxury', icon: MapPin },
  ];

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'Africa', name: 'Africa' },
    { id: 'Asia', name: 'Asia' },
    { id: 'Middle East', name: 'Middle East' },
    { id: 'Europe & Asia', name: 'Europe & Asia' },
  ];

  const filtered = allDestinations.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = selectedCategory === 'all' || d.category === selectedCategory;
    const matchRegion = selectedRegion === 'all' || d.region === selectedRegion;
    return matchSearch && matchCat && matchRegion;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(n => Math.min(n + 4, filtered.length));
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting && hasMore && !isLoading) loadMore(); },
      { threshold: 0.5 }
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  useEffect(() => {
    setVisibleCount(6);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchQuery, selectedCategory, selectedRegion]);

  useEffect(() => {
    setVisibleIds(new Set());
    visible.forEach((d, i) => {
      setTimeout(() => setVisibleIds(prev => new Set([...prev, d.id])), i * 70);
    });
  }, [visibleCount, selectedCategory, selectedRegion, searchQuery]);

  const FilterBtn = ({ active, onClick, children }) => (
    <button onClick={onClick}
      className="flex-shrink-0 px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        color: active ? '#0a0a0f' : 'rgba(255,255,255,0.55)',
        background: active ? 'linear-gradient(135deg, #b8975a, #d4af6e)' : 'rgba(255,255,255,0.06)',
        boxShadow: active ? '0 2px 16px rgba(184,151,90,0.35)' : 'none',
        border: active ? 'none' : '1px solid rgba(255,255,255,0.1)',
      }}>
      {children}
    </button>
  );

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>

      {/* ── HERO ── */}
      <section className="relative" style={{ height: '62vh', minHeight: 420 }}>
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
          alt="World destinations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0f]" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '200px' }} />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center" style={{ paddingTop: 80 }}>
          <span className="inline-block px-4 py-2 rounded-full border text-xs tracking-widest uppercase mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a', borderColor: 'rgba(184,151,90,0.3)', background: 'rgba(184,151,90,0.08)' }}>
            Explore the World
          </span>
          <h1 className="text-white leading-none mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(42px, 7vw, 86px)', letterSpacing: '-0.02em' }}>
            Our <span className="italic" style={{ color: '#c9e89d' }}>Destinations</span>
          </h1>
          <div className="mb-5" style={{ width: 56, height: 2, background: 'linear-gradient(90deg, transparent, #b8975a, transparent)' }} />
          <p className="text-white/60 max-w-xl mb-8" style={{ fontFamily: "'Crimson Text', serif", fontSize: 18 }}>
            From the savannahs of Africa to the temples of Asia — {allDestinations.length} extraordinary places to discover
          </p>
          <div className="w-full max-w-lg relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search destinations or countries..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full text-sm text-gray-900 focus:ring-2 focus:ring-amber-400 focus:outline-none shadow-2xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }} />
          </div>
        </div>
      </section>

      {/* ── FILTER RAIL ── */}
      <div className="sticky top-0 z-20"
        style={{ background: 'rgba(10,10,15,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 space-y-2">
          <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <span className="text-white/30 text-[10px] tracking-widest uppercase flex-shrink-0 mr-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Type</span>
            {categories.map(c => (
              <FilterBtn key={c.id} active={selectedCategory === c.id} onClick={() => setSelectedCategory(c.id)}>{c.name}</FilterBtn>
            ))}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <span className="text-white/30 text-[10px] tracking-widest uppercase flex-shrink-0 mr-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Region</span>
            {regions.map(r => (
              <FilterBtn key={r.id} active={selectedRegion === r.id} onClick={() => setSelectedRegion(r.id)}>{r.name}</FilterBtn>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESTINATIONS LIST ── */}
      <section className="relative py-12 sm:py-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(184,151,90,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Count */}
          <div className="mb-8">
            <p className="text-white/40 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Showing <span className="text-white font-semibold">{visible.length}</span> of{' '}
              <span className="text-white font-semibold">{filtered.length}</span> destinations
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-white/40 text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>No destinations match your filters</p>
              <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedRegion('all'); }}
                className="px-6 py-3 rounded-full text-sm font-semibold text-[#0a0a0f]"
                style={{ background: 'linear-gradient(135deg, #b8975a, #d4af6e)', fontFamily: "'Montserrat', sans-serif" }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {visible.map((dest, idx) => {
                const isVis = visibleIds.has(dest.id);
                return (
                  <div key={dest.id}
                    style={{
                      borderRadius: 16,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      overflow: 'hidden',
                      opacity: isVis ? 1 : 0,
                      transform: isVis ? 'translateY(0)' : 'translateY(16px)',
                      transition: `opacity 0.5s ease ${(idx % 6) * 0.07}s, transform 0.5s ease ${(idx % 6) * 0.07}s`,
                    }}>
                    <div className="grid md:grid-cols-5">

                      {/* Image */}
                      <div className="md:col-span-2 relative overflow-hidden" style={{ minHeight: 260 }}>
                        <img src={dest.image} alt={dest.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 md:to-[#111111]/60" />
                        {/* Country + region badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                            style={{ fontFamily: "'Montserrat', sans-serif", background: 'rgba(10,10,15,0.65)', backdropFilter: 'blur(6px)', color: '#d4af6e', border: '1px solid rgba(212,175,110,0.3)' }}>
                            {dest.country}
                          </span>
                          <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest"
                            style={{ fontFamily: "'Montserrat', sans-serif", background: 'rgba(10,10,15,0.55)', backdropFilter: 'blur(6px)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            {dest.region}
                          </span>
                        </div>
                        {/* Duration badge bottom */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                          style={{ background: 'rgba(10,10,15,0.65)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <Clock className="w-3 h-3" style={{ color: '#b8975a' }} />
                          <span className="text-white/70 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>{dest.duration}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-white font-bold mb-3 leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                            {dest.name}
                          </h3>
                          <p className="mb-5 leading-relaxed"
                            style={{ fontFamily: "'Crimson Text', serif", fontSize: 17, color: 'rgba(255,255,255,0.65)' }}>
                            {dest.description}
                          </p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {dest.highlights.map((h, i) => (
                              <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs"
                                style={{
                                  fontFamily: "'Montserrat', sans-serif",
                                  background: 'rgba(184,151,90,0.1)',
                                  color: '#d4af6e',
                                  border: '1px solid rgba(184,151,90,0.2)',
                                }}>
                                <Check className="w-3 h-3" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-3">
                          <Link to="/booking"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group"
                            style={{ background: 'linear-gradient(135deg, #b8975a, #d4af6e)', color: '#0a0a0f', fontFamily: "'Montserrat', sans-serif" }}>
                            Book Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <Link to="/packages"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: "'Montserrat', sans-serif" }}>
                            View Packages
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Load more */}
              {hasMore && (
                <div ref={loadMoreRef} className="pt-8 text-center">
                  {isLoading ? (
                    <div className="flex flex-col items-center gap-3">
                      <Loader className="w-8 h-8 animate-spin" style={{ color: '#b8975a' }} />
                      <p className="text-white/40 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>Loading more…</p>
                    </div>
                  ) : (
                    <button onClick={loadMore}
                      className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all"
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)', fontFamily: "'Montserrat', sans-serif" }}>
                      Load More Destinations
                    </button>
                  )}
                </div>
              )}

              {!hasMore && filtered.length > 4 && (
                <div className="pt-8 text-center">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs"
                    style={{ background: 'rgba(184,151,90,0.1)', color: '#b8975a', border: '1px solid rgba(184,151,90,0.2)', fontFamily: "'Montserrat', sans-serif" }}>
                    <Check className="w-3.5 h-3.5" />
                    All {filtered.length} destinations shown
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <style>{`::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default AllDestinations;