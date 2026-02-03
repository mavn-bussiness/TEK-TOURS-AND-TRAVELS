import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleIds, setVisibleIds] = useState(new Set());

  const galleryImages = [
    { id: 1,  url: 'https://media.istockphoto.com/id/2234874849/photo/a-wild-and-endangered-gorilla-in-the-bush.webp?s=1024x1024&w=is&k=20&c=e86pB22UY9xN88gprJrZm0qiN527vSltl-4-papeYeQ=', title: 'Mountain Gorilla',        category: 'Wildlife',   size: 'hero' },
    { id: 2,  url: 'https://images.unsplash.com/photo-1535082623926-b39352a03fb7?w=1920&auto=format&fit=crop&q=80',  title: 'Safari Adventure',        category: 'Safari',     size: 'tall' },
    { id: 3,  url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ab/2a/07/murchison-falls-view.jpg?w=1200&h=-1&s=1', title: 'Murchison Falls',         category: 'Waterfalls', size: 'wide' },
    { id: 4,  url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1920&q=80&auto=format&fit=crop',  title: 'Chimpanzee',              category: 'Wildlife',   size: 'hero' },
    { id: 5,  url: 'https://images.unsplash.com/photo-1741850821428-01abc97866b3?w=1920&auto=format&fit=crop&q=80',  title: 'Safari Camping',         category: 'Adventure',  size: 'small' },
    { id: 6,  url: 'https://images.unsplash.com/photo-1551357140-c61c4f40224e?w=1920&auto=format&fit=crop&q=80',     title: 'Lake Bunyonyi',           category: 'Landscapes', size: 'wide' },
    { id: 7,  url: 'https://images.unsplash.com/photo-1621414050946-1b936a78491f?w=1920&auto=format&fit=crop&q=80',  title: 'Rwenzori Mountains',      category: 'Mountains',  size: 'tall' },
    { id: 8,  url: 'https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=1920&auto=format&fit=crop&q=80',  title: 'Jinja Rapids',            category: 'Adventure',  size: 'small' },
    { id: 9,  url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80&auto=format&fit=crop',     title: 'Tree-Climbing Lions',     category: 'Wildlife',   size: 'wide' },
    { id: 10, url: 'https://images.unsplash.com/photo-1667817418453-3489bb60ce9b?w=1920&auto=format&fit=crop&q=80',  title: 'Kidepo Valley',           category: 'Safari',     size: 'hero' },
    { id: 11, url: 'https://images.unsplash.com/photo-1660675133902-acd1b057f75d?w=1920&auto=format&fit=crop&q=80',  title: 'Cultural Heritage',       category: 'Culture',    size: 'small' },
    { id: 12, url: 'https://images.unsplash.com/photo-1661885869635-eeb583e3378f?w=1920&auto=format&fit=crop&q=80',  title: 'Source of the Nile',      category: 'Landmarks',  size: 'tall' },
    { id: 13, url: 'https://plus.unsplash.com/premium_photo-1722686568915-b40ee8a6c072?w=1920&auto=format&fit=crop&q=80', title: 'Shoebill Stork',       category: 'Wildlife',   size: 'small' },
    { id: 14, url: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1200&q=80',                          title: 'Silverback Gorilla',      category: 'Wildlife',   size: 'wide' },
  ];

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  // Staggered reveal on mount / filter change
  useEffect(() => {
    setVisibleIds(new Set());
    filteredImages.forEach((img, i) => {
      setTimeout(() => setVisibleIds(prev => new Set([...prev, img.id])), i * 60);
    });
  }, [activeFilter]);

  // Lightbox keyboard nav
  const next = useCallback(() => setSelectedIndex(i => (i !== null && i < filteredImages.length - 1) ? i + 1 : i), [filteredImages.length]);
  const prev = useCallback(() => setSelectedIndex(i => (i !== null && i > 0) ? i - 1 : i), []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'Escape')     setSelectedIndex(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedIndex, next, prev]);

  // Grid placement map: hero = 2col×2row, wide = 2col×1row, tall = 1col×2row, small = 1col×1row
  const getGridStyle = (size) => {
    switch (size) {
      case 'hero':  return { gridColumn: 'span 2', gridRow: 'span 2' };
      case 'wide':  return { gridColumn: 'span 2', gridRow: 'span 1' };
      case 'tall':  return { gridColumn: 'span 1', gridRow: 'span 2' };
      default:      return { gridColumn: 'span 1', gridRow: 'span 1' };
    }
  };

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>

      {/* ─── HERO ─── */}
      <section className="relative" style={{ height: '58vh', minHeight: 380 }}>
        <img
          src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80"
          alt="Gallery hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* layered scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#0a0a0f]" />

        {/* grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '200px' }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <span
            className="inline-block px-4 py-2 rounded-full border text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a', borderColor: 'rgba(184,151,90,0.3)', background: 'rgba(184,151,90,0.08)' }}
          >
            Visual Journey
          </span>

          <h1
            className="text-white leading-[1.0]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(52px, 9vw, 100px)', letterSpacing: '-0.02em' }}
          >
            Photo <span className="italic" style={{ color: '#c9e89d' }}>Gallery</span>
          </h1>

          <div className="mt-5 mb-4" style={{ width: 56, height: 2, background: 'linear-gradient(90deg, transparent, #b8975a, transparent)' }} />

          <p className="text-white/60 max-w-xl" style={{ fontFamily: "'Crimson Text', serif", fontSize: 18 }}>
            Explore the breathtaking beauty of Uganda through our lens
          </p>
        </div>
      </section>

      {/* ─── FILTER RAIL ─── */}
      <div className="sticky top-0 z-20" style={{ background: 'rgba(10,10,15,0.88)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-4" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => {
              const active = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="flex-shrink-0 relative px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: active ? '#0a0a0f' : 'rgba(255,255,255,0.5)',
                    background: active ? 'linear-gradient(135deg, #b8975a, #d4af6e)' : 'rgba(255,255,255,0.06)',
                    boxShadow: active ? '0 2px 16px rgba(184,151,90,0.35)' : 'none',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── MASONRY GRID ─── */}
      <section className="relative py-10 sm:py-16">
        {/* ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(184,151,90,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridAutoRows: '160px',
              gap: 10,
            }}
          >
            {filteredImages.map((image, idx) => {
              const visible = visibleIds.has(image.id);
              return (
                <div
                  key={image.id}
                  onClick={() => setSelectedIndex(idx)}
                  className="relative overflow-hidden cursor-pointer group"
                  style={{
                    ...getGridStyle(image.size),
                    borderRadius: 12,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
                    transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${idx * 0.06}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${idx * 0.06}s`,
                  }}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)', transform: 'scale(1)' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.07)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    loading="lazy"
                  />

                  {/* scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" style={{ transition: 'opacity 0.4s', opacity: 0.6 }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
                  />

                  {/* category badge — top left */}
                  <div className="absolute top-3 left-3" style={{ zIndex: 2 }}>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[10px] tracking-widest uppercase"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        background: 'rgba(10,10,15,0.55)',
                        backdropFilter: 'blur(6px)',
                        color: '#b8975a',
                        border: '1px solid rgba(184,151,90,0.25)',
                      }}
                    >
                      {image.category}
                    </span>
                  </div>

                  {/* title — bottom left, slides up on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4"
                    style={{ zIndex: 2, transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)', transform: 'translateY(12px)' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(0)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(12px)'}
                  >
                    <h3
                      className="text-white font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: image.size === 'hero' ? 24 : 17 }}
                    >
                      {image.title}
                    </h3>
                  </div>

                  {/* corner expand hint */}
                  <div
                    className="absolute bottom-3 right-3 flex items-center justify-center rounded-full"
                    style={{
                      width: 34, height: 34,
                      background: 'rgba(10,10,15,0.5)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      opacity: 0, transition: 'opacity 0.3s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.94)', zIndex: 50, backdropFilter: 'blur(8px)' }}
          onClick={() => setSelectedIndex(null)}
        >
          {/* close */}
          <button
            className="absolute top-5 right-5 flex items-center justify-center rounded-full transition-colors"
            style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', zIndex: 10 }}
            onClick={() => setSelectedIndex(null)}
          >
            <X className="text-white" style={{ width: 18, height: 18 }} />
          </button>

          {/* prev */}
          <button
            className="absolute left-4 flex items-center justify-center rounded-full transition-colors hover:bg-white/15"
            style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', zIndex: 10, top: '50%', transform: 'translateY(-50%)' }}
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="text-white" style={{ width: 22, height: 22 }} />
          </button>

          {/* next */}
          <button
            className="absolute right-4 flex items-center justify-center rounded-full transition-colors hover:bg-white/15"
            style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', zIndex: 10, top: '50%', transform: 'translateY(-50%)' }}
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="text-white" style={{ width: 22, height: 22 }} />
          </button>

          {/* main image */}
          <div className="flex flex-col items-center px-16 max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <div className="relative w-full flex items-center justify-center" style={{ maxHeight: '72vh' }}>
              <img
                src={filteredImages[selectedIndex].url}
                alt={filteredImages[selectedIndex].title}
                className="object-contain rounded-lg"
                style={{ maxHeight: '72vh', maxWidth: '100%' }}
              />
            </div>

            {/* caption */}
            <div className="mt-5 text-center">
              <h3 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700 }}>
                {filteredImages[selectedIndex].title}
              </h3>
              <span
                className="inline-block mt-1 px-3 py-0.5 rounded-full text-[10px] tracking-widest uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a', background: 'rgba(184,151,90,0.12)', border: '1px solid rgba(184,151,90,0.25)' }}
              >
                {filteredImages[selectedIndex].category}
              </span>
            </div>

            {/* counter */}
            <p className="mt-3 text-white/30 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {selectedIndex + 1} / {filteredImages.length}
            </p>
          </div>

          {/* ── FILMSTRIP ── */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 px-6 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {filteredImages.map((img, i) => (
              <button
                key={img.id}
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                className="flex-shrink-0 rounded-md overflow-hidden transition-all duration-300"
                style={{
                  width: 64, height: 44,
                  border: i === selectedIndex ? '2px solid #b8975a' : '2px solid rgba(255,255,255,0.12)',
                  opacity: i === selectedIndex ? 1 : 0.45,
                  boxShadow: i === selectedIndex ? '0 0 12px rgba(184,151,90,0.4)' : 'none',
                }}
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Gallery;