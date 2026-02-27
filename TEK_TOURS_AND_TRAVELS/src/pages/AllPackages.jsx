import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Star, Clock, Users, MapPin, Check,
  ArrowRight, Plane, Hotel, Utensils,
  Camera, Shield, Search, ChevronLeft, ChevronRight
} from 'lucide-react';

const AllPackages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleIds, setVisibleIds] = useState(new Set());
  const packagesPerPage = 9;

  const allPackages = [
    {
      id: 1,
      title: 'Ultimate Gorilla Experience',
      destination: 'Uganda & Rwanda',
      region: 'Africa',
      category: 'wildlife',
      duration: '7 Days, 6 Nights',
      groupSize: { min: 4, max: 8 },
      price: 4200,
      originalPrice: 4800,
      rating: 5.0,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      featured: true,
      highlights: ['Gorilla trekking in Bwindi & Volcanoes NP', 'Golden monkey tracking', 'Cultural village visits', 'Luxury lodge accommodation'],
      includes: { flights: true, accommodation: true, meals: 'All Meals', guide: true, activities: true, insurance: true }
    },
    {
      id: 2,
      title: 'Great Migration Safari',
      destination: 'Kenya & Tanzania',
      region: 'Africa',
      category: 'wildlife',
      duration: '10 Days, 9 Nights',
      groupSize: { min: 6, max: 12 },
      price: 3800,
      originalPrice: 4200,
      rating: 4.9,
      reviews: 287,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      featured: true,
      highlights: ['Witness the Great Migration', 'Masai Mara & Serengeti game drives', 'Hot air balloon safari', 'Maasai cultural experience'],
      includes: { flights: true, accommodation: true, meals: 'All Meals', guide: true, activities: true, insurance: true }
    },
    {
      id: 3,
      title: 'Zanzibar Beach Paradise',
      destination: 'Tanzania',
      region: 'Africa',
      category: 'beach',
      duration: '6 Days, 5 Nights',
      groupSize: { min: 2, max: 6 },
      price: 1800,
      originalPrice: 2200,
      rating: 4.8,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&q=80',
      featured: false,
      highlights: ['Pristine white sand beaches', 'Stone Town exploration', 'Spice farm tours', 'Snorkeling & diving'],
      includes: { flights: true, accommodation: true, meals: 'Breakfast & Dinner', guide: true, activities: true, insurance: false }
    },
    {
      id: 4,
      title: 'Mount Kilimanjaro Trek',
      destination: 'Tanzania',
      region: 'Africa',
      category: 'adventure',
      duration: '8 Days, 7 Nights',
      groupSize: { min: 6, max: 12 },
      price: 2900,
      originalPrice: 3400,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50b0?w=800&q=80',
      featured: false,
      highlights: ["Summit Africa's highest peak", 'Machame Route trek', 'Professional mountain guides', 'All camping equipment included'],
      includes: { flights: false, accommodation: true, meals: 'All Meals', guide: true, activities: true, insurance: true }
    },
    {
      id: 5,
      title: 'Beijing & Great Wall Explorer',
      destination: 'China',
      region: 'Asia',
      category: 'cultural',
      duration: '8 Days, 7 Nights',
      groupSize: { min: 6, max: 20 },
      price: 2400,
      originalPrice: 2900,
      rating: 4.8,
      reviews: 143,
      image: '/images/IMG_20230828_131906.jpg',
      featured: true,
      highlights: ['Great Wall of China hike', 'Temple of Heaven', 'Forbidden City tour', 'Traditional Hutong experience'],
      includes: { flights: true, accommodation: true, meals: 'Breakfast & Dinner', guide: true, activities: true, insurance: false }
    },
    {
      id: 6,
      title: 'Phuket Beach Escape',
      destination: 'Thailand',
      region: 'Asia',
      category: 'beach',
      duration: '7 Days, 6 Nights',
      groupSize: { min: 2, max: 10 },
      price: 1600,
      originalPrice: 2000,
      rating: 4.7,
      reviews: 312,
      image: '/images/Snapchat-1297880643.jpg',
      featured: false,
      highlights: ['Phi Phi Islands cruise', 'ATV jungle adventure', 'Thai cooking class', 'Rooftop bar experiences'],
      includes: { flights: true, accommodation: true, meals: 'Breakfast Only', guide: true, activities: true, insurance: false }
    },
    {
      id: 7,
      title: 'Dubai City & Desert',
      destination: 'UAE',
      region: 'Middle East',
      category: 'luxury',
      duration: '5 Days, 4 Nights',
      groupSize: { min: 2, max: 12 },
      price: 2200,
      originalPrice: 2700,
      rating: 4.9,
      reviews: 189,
      image: '/images/Snapchat-1906972103.jpg',
      featured: false,
      highlights: ['Burj Khalifa visit', 'Desert safari & dune bashing', 'Dubai Marina cruise', 'Gold & Spice Souks'],
      includes: { flights: true, accommodation: true, meals: 'Breakfast & Dinner', guide: true, activities: true, insurance: false }
    },
    {
      id: 8,
      title: 'Murchison Falls Safari',
      destination: 'Uganda',
      region: 'Africa',
      category: 'wildlife',
      duration: '4 Days, 3 Nights',
      groupSize: { min: 6, max: 12 },
      price: 2200,
      originalPrice: 2600,
      rating: 4.8,
      reviews: 145,
      image: '/images/murchison-falls-view.jpg',
      featured: false,
      highlights: ['Game drives in Murchison Falls NP', 'Nile boat cruise', 'Top of the falls hike', 'Big Five spotting'],
      includes: { flights: false, accommodation: true, meals: 'All Meals', guide: true, activities: true, insurance: false }
    },
    {
      id: 9,
      title: 'Istanbul City Break',
      destination: 'Turkey',
      region: 'Europe & Asia',
      category: 'cultural',
      duration: '5 Days, 4 Nights',
      groupSize: { min: 2, max: 15 },
      price: 1400,
      originalPrice: 1800,
      rating: 4.7,
      reviews: 98,
      image: '/images/Snapchat-783147270.jpg',
      featured: false,
      highlights: ['Hagia Sophia & Blue Mosque', 'Grand Bazaar shopping', 'Bosphorus cruise', 'Turkish cuisine tour'],
      includes: { flights: true, accommodation: true, meals: 'Breakfast Only', guide: true, activities: false, insurance: false }
    },
    {
      id: 10,
      title: 'Ngorongoro Crater Adventure',
      destination: 'Tanzania',
      region: 'Africa',
      category: 'wildlife',
      duration: '5 Days, 4 Nights',
      groupSize: { min: 4, max: 8 },
      price: 3200,
      originalPrice: 3700,
      rating: 5.0,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      featured: true,
      highlights: ['Ngorongoro Crater floor game drive', 'Olduvai Gorge visit', 'Maasai village experience', 'Luxury tented camps'],
      includes: { flights: true, accommodation: true, meals: 'All Meals', guide: true, activities: true, insurance: true }
    },
    {
      id: 11,
      title: 'Lake Victoria Islands',
      destination: 'Uganda',
      region: 'Africa',
      category: 'adventure',
      duration: '4 Days, 3 Nights',
      groupSize: { min: 4, max: 10 },
      price: 1200,
      originalPrice: 1500,
      rating: 4.6,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1551357140-c61c4f40224e?w=1920&auto=format&fit=crop&q=80',
      featured: false,
      highlights: ['Ssese Islands exploration', 'Boat cruises', 'Bird watching', 'Beach relaxation'],
      includes: { flights: false, accommodation: true, meals: 'All Meals', guide: true, activities: true, insurance: false }
    },
    {
      id: 12,
      title: 'Rwenzori Mountains Trek',
      destination: 'Uganda',
      region: 'Africa',
      category: 'adventure',
      duration: '9 Days, 8 Nights',
      groupSize: { min: 4, max: 10 },
      price: 3100,
      originalPrice: 3600,
      rating: 4.8,
      reviews: 54,
      image: '/images/mountain-climbing.avif',
      featured: false,
      highlights: ['Summit Margherita Peak', 'Equatorial glaciers', 'Unique alpine vegetation', 'Expert mountain guides'],
      includes: { flights: false, accommodation: true, meals: 'All Meals', guide: true, activities: true, insurance: true }
    },
  ];

  const categories = [
    { id: 'all', name: 'All Packages' },
    { id: 'wildlife', name: 'Wildlife Safari' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'beach', name: 'Beach & Relax' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'luxury', name: 'Luxury' },
  ];

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'Africa', name: 'Africa' },
    { id: 'Asia', name: 'Asia' },
    { id: 'Middle East', name: 'Middle East' },
    { id: 'Europe & Asia', name: 'Europe & Asia' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Under $2,000', max: 2000 },
    { id: 'mid', name: '$2,000–$4,000', min: 2000, max: 4000 },
    { id: 'luxury', name: 'Above $4,000', min: 4000 },
  ];

  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredPackages = allPackages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || pkg.region === selectedRegion;
    let matchesPrice = true;
    const selectedPriceRange = priceRanges.find(r => r.id === priceRange);
    if (selectedPriceRange && selectedPriceRange.id !== 'all') {
      if (selectedPriceRange.min && selectedPriceRange.max) {
        matchesPrice = pkg.price >= selectedPriceRange.min && pkg.price <= selectedPriceRange.max;
      } else if (selectedPriceRange.max) {
        matchesPrice = pkg.price <= selectedPriceRange.max;
      } else if (selectedPriceRange.min) {
        matchesPrice = pkg.price >= selectedPriceRange.min;
      }
    }
    return matchesSearch && matchesCategory && matchesRegion && matchesPrice;
  });

  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);
  const indexOfLast = currentPage * packagesPerPage;
  const indexOfFirst = indexOfLast - packagesPerPage;
  const currentPackages = filteredPackages.slice(indexOfFirst, indexOfLast);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, selectedCategory, selectedRegion, priceRange]);

  useEffect(() => {
    setVisibleIds(new Set());
    currentPackages.forEach((pkg, i) => {
      setTimeout(() => setVisibleIds(prev => new Set([...prev, pkg.id])), i * 60);
    });
  }, [currentPage, selectedCategory, selectedRegion, priceRange, searchQuery]);

  const paginate = (n) => { setCurrentPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const FilterBtn = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className="flex-shrink-0 px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        color: active ? '#0a0a0f' : 'rgba(255,255,255,0.55)',
        background: active ? 'linear-gradient(135deg, #b8975a, #d4af6e)' : 'rgba(255,255,255,0.06)',
        boxShadow: active ? '0 2px 16px rgba(184,151,90,0.35)' : 'none',
        border: active ? 'none' : '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>

      {/* ── HERO ── */}
      <section className="relative" style={{ height: '62vh', minHeight: 420 }}>
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
          alt="World travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0f]" />
        {/* grain */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '200px' }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center" style={{ paddingTop: 80 }}>
          <span className="inline-block px-4 py-2 rounded-full border text-xs tracking-widest uppercase mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a', borderColor: 'rgba(184,151,90,0.3)', background: 'rgba(184,151,90,0.08)' }}>
            Worldwide Experiences
          </span>
          <h1 className="text-white leading-none mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(42px, 7vw, 86px)', letterSpacing: '-0.02em' }}>
            Tour <span className="italic" style={{ color: '#c9e89d' }}>Packages</span>
          </h1>
          <div className="mb-5" style={{ width: 56, height: 2, background: 'linear-gradient(90deg, transparent, #b8975a, transparent)' }} />
          <p className="text-white/60 max-w-xl mb-8" style={{ fontFamily: "'Crimson Text', serif", fontSize: 18 }}>
            Handcrafted journeys across Africa, Asia, the Middle East and beyond
          </p>
          {/* Search */}
          <div className="w-full max-w-lg relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search packages or destinations..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full text-sm text-gray-900 focus:ring-2 focus:ring-amber-400 focus:outline-none shadow-2xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>
        </div>
      </section>

      {/* ── FILTER RAIL ── */}
      <div className="sticky top-0 z-20"
        style={{ background: 'rgba(10,10,15,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 space-y-2">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <span className="text-white/30 text-[10px] tracking-widest uppercase flex-shrink-0 mr-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Type</span>
            {categories.map(c => (
              <FilterBtn key={c.id} active={selectedCategory === c.id} onClick={() => setSelectedCategory(c.id)}>{c.name}</FilterBtn>
            ))}
          </div>
          {/* Regions + Price */}
          <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <span className="text-white/30 text-[10px] tracking-widest uppercase flex-shrink-0 mr-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Region</span>
            {regions.map(r => (
              <FilterBtn key={r.id} active={selectedRegion === r.id} onClick={() => setSelectedRegion(r.id)}>{r.name}</FilterBtn>
            ))}
            <div className="w-px h-4 bg-white/10 mx-2 flex-shrink-0" />
            <span className="text-white/30 text-[10px] tracking-widest uppercase flex-shrink-0 mr-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Price</span>
            {priceRanges.map(r => (
              <FilterBtn key={r.id} active={priceRange === r.id} onClick={() => setPriceRange(r.id)}>{r.name}</FilterBtn>
            ))}
          </div>
        </div>
      </div>

      {/* ── PACKAGES GRID ── */}
      <section className="relative py-12 sm:py-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(184,151,90,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-white/40 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <span className="text-white font-semibold">{filteredPackages.length}</span> packages found
            </p>
            {totalPages > 1 && (
              <p className="text-white/40 text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Page <span className="text-white">{currentPage}</span> of {totalPages}
              </p>
            )}
          </div>

          {currentPackages.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-white/50 text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>No packages match your filters</p>
              <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedRegion('all'); setPriceRange('all'); }}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #b8975a, #d4af6e)', fontFamily: "'Montserrat', sans-serif" }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentPackages.map((pkg, idx) => {
                  const visible = visibleIds.has(pkg.id);
                  return (
                    <div
                      key={pkg.id}
                      className="relative overflow-hidden cursor-pointer group"
                      style={{
                        borderRadius: 16,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(20px)',
                        transition: `opacity 0.5s ease ${idx * 0.06}s, transform 0.5s ease ${idx * 0.06}s`,
                      }}
                    >
                      {/* Featured badge */}
                      {pkg.featured && (
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                          style={{ background: 'linear-gradient(135deg, #b8975a, #d4af6e)', color: '#0a0a0f', fontFamily: "'Montserrat', sans-serif" }}>
                          <Star className="w-3 h-3 fill-current" /> Featured
                        </div>
                      )}

                      {/* Region badge */}
                      <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest"
                        style={{ background: 'rgba(10,10,15,0.6)', backdropFilter: 'blur(6px)', color: '#b8975a', border: '1px solid rgba(184,151,90,0.25)', fontFamily: "'Montserrat', sans-serif" }}>
                        {pkg.region}
                      </div>

                      {/* Image */}
                      <div className="relative h-52 overflow-hidden" style={{ borderRadius: '16px 16px 0 0' }}>
                        <img src={pkg.image} alt={pkg.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        {/* Price overlay */}
                        <div className="absolute bottom-4 left-4">
                          <p className="text-white/50 text-xs line-through">${pkg.originalPrice.toLocaleString()}</p>
                          <p className="text-white font-bold leading-none" style={{ fontFamily: "'Playfair Display', serif", fontSize: 28 }}>
                            ${pkg.price.toLocaleString()}
                          </p>
                          <p className="text-white/50 text-xs">per person</p>
                        </div>
                        {/* Rating */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2.5 py-1.5 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)' }}>
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-white text-xs font-semibold">{pkg.rating}</span>
                          <span className="text-white/50 text-[10px]">({pkg.reviews})</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-white font-bold mb-1 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontSize: 20 }}>
                          {pkg.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mb-4" style={{ color: '#b8975a' }}>
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>{pkg.destination}</span>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-4 mb-4 pb-4 text-xs text-white/40"
                          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Montserrat', sans-serif" }}>
                          <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{pkg.duration}</div>
                          <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{pkg.groupSize.min}–{pkg.groupSize.max} pax</div>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-1.5 mb-4">
                          {pkg.highlights.slice(0, 3).map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                              <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#b8975a' }} />
                              <span style={{ fontFamily: "'Crimson Text', serif", fontSize: 15 }}>{h}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Includes icons */}
                        <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                          {pkg.includes.flights && <Plane className="w-4 h-4 text-white/30" title="Flights included" />}
                          {pkg.includes.accommodation && <Hotel className="w-4 h-4 text-white/30" title="Accommodation" />}
                          {pkg.includes.meals && <Utensils className="w-4 h-4 text-white/30" title={pkg.includes.meals} />}
                          {pkg.includes.activities && <Camera className="w-4 h-4 text-white/30" title="Activities" />}
                          {pkg.includes.insurance && <Shield className="w-4 h-4 text-white/30" title="Insurance" />}
                        </div>

                        {/* CTA */}
                        <Link
                          to="/booking"
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 group/btn"
                          style={{
                            background: 'linear-gradient(135deg, #b8975a, #d4af6e)',
                            color: '#0a0a0f',
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          Book Now
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}
                    className="flex items-center justify-center rounded-full transition-all"
                    style={{ width: 40, height: 40, background: currentPage === 1 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: currentPage === 1 ? 'rgba(255,255,255,0.2)' : 'white' }}>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {[...Array(totalPages)].map((_, i) => {
                    const n = i + 1;
                    if (n === 1 || n === totalPages || (n >= currentPage - 1 && n <= currentPage + 1)) {
                      return (
                        <button key={n} onClick={() => paginate(n)}
                          className="rounded-full text-sm font-semibold transition-all"
                          style={{
                            width: 40, height: 40,
                            background: currentPage === n ? 'linear-gradient(135deg, #b8975a, #d4af6e)' : 'rgba(255,255,255,0.06)',
                            color: currentPage === n ? '#0a0a0f' : 'rgba(255,255,255,0.6)',
                            border: currentPage === n ? 'none' : '1px solid rgba(255,255,255,0.1)',
                            fontFamily: "'Montserrat', sans-serif",
                          }}>
                          {n}
                        </button>
                      );
                    } else if (n === currentPage - 2 || n === currentPage + 2) {
                      return <span key={n} className="text-white/30 px-1">…</span>;
                    }
                    return null;
                  })}
                  <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}
                    className="flex items-center justify-center rounded-full transition-all"
                    style={{ width: 40, height: 40, background: currentPage === totalPages ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: currentPage === totalPages ? 'rgba(255,255,255,0.2)' : 'white' }}>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <style>{`::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default AllPackages;