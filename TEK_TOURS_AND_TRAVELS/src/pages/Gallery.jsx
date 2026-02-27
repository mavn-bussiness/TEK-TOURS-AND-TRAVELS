import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleIds, setVisibleIds] = useState(new Set());

  const galleryImages = [
    // ── ROW 1: Strong hero openers ──
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1509897739002-791fa79aac9b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mountain Gorilla, Bwindi',
      size: 'hero',
    },
    {
      id: 2,
      url: '/images/murchison-falls-view.jpg',
      title: 'Murchison Falls, Uganda',
      size: 'wide',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1535082623926-b39352a03fb7?w=1920&auto=format&fit=crop&q=80',
      title: 'Safari Game Drive',
      size: 'tall',
    },

    // ── ROW 2 ──
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1920&q=80&auto=format&fit=crop',
      title: 'Chimpanzee Tracking, Kibale',
      size: 'hero',
    },
    {
      id: 5,
      url: '/images/lake-bunyonyi.avif',
      title: 'Lake Bunyonyi, Uganda',
      size: 'wide',
    },
    {
      id: 6,
      url: '/images/monkey.avif',
      title: 'Red-Tailed Monkey, Uganda',
      size: 'small',
    },
    {
      id: 7,
      url: '/images/51.jpg',
      title: 'Gorillas in the Forest',
      size: 'small',
    },

    // ── ROW 3 ──
    {
      id: 8,
      url: '/images/lion.avif',
      title: 'Tree-Climbing Lions, Queen Elizabeth',
      size: 'wide',
    },
    {
      id: 9,
      url: '/images/mountain-climbing.avif',
      title: 'Rwenzori Mountains Expedition',
      size: 'tall',
    },
    {
      id: 10,
      url: '/images/rafting.avif',
      title: 'White-Water Rafting, Jinja',
      size: 'small',
    },
    {
      id: 11,
      url: '/images/safari-wild.avif',
      title: 'Open Savannah, Kidepo Valley',
      size: 'small',
    },

    // ── ROW 4 ──
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1667817418453-3489bb60ce9b?w=1920&auto=format&fit=crop&q=80',
      title: 'Kidepo Valley National Park',
      size: 'hero',
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1200&q=80',
      title: 'Silverback Gorilla, Bwindi',
      size: 'wide',
    },
    {
      id: 14,
      url: '/images/IMG_20230826_145742.jpg',
      title: 'Great Wall of China Tour',
      size: 'tall',
    },

    // ── ROW 5 ──
    {
      id: 15,
      url: '/images/IMG_20230828_130510.jpg',
      title: 'Temple of Heaven, Beijing',
      size: 'wide',
    },
    {
      id: 16,
      url: '/images/IMG_20230828_131906.jpg',
      title: 'Group Trip to China',
      size: 'wide',
    },

    // ── ROW 6 ──
    {
      id: 17,
      url: 'https://images.unsplash.com/photo-1660675133902-acd1b057f75d?w=1920&auto=format&fit=crop&q=80',
      title: 'Ugandan Cultural Heritage',
      size: 'small',
    },
    {
      id: 18,
      url: 'https://images.unsplash.com/photo-1661885869635-eeb583e3378f?w=1920&auto=format&fit=crop&q=80',
      title: 'Source of the Nile, Jinja',
      size: 'tall',
    },
    {
      id: 19,
      url: 'https://plus.unsplash.com/premium_photo-1722686568915-b40ee8a6c072?w=1920&auto=format&fit=crop&q=80',
      title: 'Shoebill Stork Sighting',
      size: 'small',
    },
    {
      id: 20,
      url: '/images/IMG-20250216-WA0057.jpg',
      title: 'ATV Adventure Trail',
      size: 'wide',
    },

    // ── ROW 7 ──
    {
      id: 21,
      url: '/images/IMG-20250124-WA0027.jpeg',
      title: 'Port of Entebbe, Lake Victoria',
      size: 'tall',
    },
    {
      id: 22,
      url: '/images/IMG-20250123-WA0010.jpeg',
      title: 'Travelling in Style',
      size: 'small',
    },
    {
      id: 23,
      url: '/images/20250215_132630.jpg',
      title: 'Departure Lounge',
      size: 'small',
    },
    {
      id: 24,
      url: '/images/IMG-20250216-WA0007.jpg',
      title: 'Directions Board, Dubai',
      size: 'small',
    },
    {
      id: 25,
      url: '/images/20250215_121903.jpg',
      title: 'Hotel Location, Phuket',
      size: 'small',
    },

    // ── ROW 8 ──
    {
      id: 26,
      url: '/images/20241018_124304.jpg',
      title: 'Safari Camp Morning',
      size: 'small',
    },
    {
      id: 27,
      url: '/images/20241108_124605.jpg',
      title: 'Group Trek, Uganda',
      size: 'tall',
    },
    {
      id: 28,
      url: '/images/20250216_131041(0).jpg',
      title: 'Golden Hour View',
      size: 'small',
    },
    {
      id: 29,
      url: '/images/20250727_073341.jpg',
      title: 'Elephant Safari Sign',
      size: 'wide',
    },

    // ── ROW 9: Snapchat — international destinations ──
    {
      id: 30,
      url: '/images/Snapchat-676467696.jpg',
      title: 'Poolside, Bangkok',
      size: 'small',
    },
    {
      id: 31,
      url: '/images/Snapchat-740087849.jpg',
      title: 'Phuket Kart, Thailand',
      size: 'wide',
    },
    {
      id: 32,
      url: '/images/Snapchat-783147270.jpg',
      title: 'Istanbul Airport Connection',
      size: 'small',
    },
    {
      id: 33,
      url: '/images/Snapchat-735314938.jpg',
      title: 'Palm Trees at Sunset',
      size: 'tall',
    },

    // ── ROW 10 ──
    {
      id: 34,
      url: '/images/Snapchat-1297880643.jpg',
      title: 'Evening Markets Abroad',
      size: 'wide',
    },
    {
      id: 35,
      url: '/images/Snapchat-1364101570.jpg',
      title: 'Uganda National Park Map',
      size: 'small',
    },
    {
      id: 36,
      url: '/images/Snapchat-1699218897.jpg',
      title: 'Dubai Infinity Pool',
      size: 'tall',
    },
    {
      id: 37,
      url: '/images/Snapchat-1724205484.jpg',
      title: 'City Break, Dubai',
      size: 'small',
    },

    // ── ROW 11 ──
    {
      id: 38,
      url: '/images/Snapchat-1906972103.jpg',
      title: 'Dubai Marina Skyline',
      size: 'wide',
    },
    {
      id: 39,
      url: '/images/Snapchat-1967223933.jpg',
      title: 'Phi Phi Islands, Thailand',
      size: 'small',
    },
    {
      id: 40,
      url: 'https://images.unsplash.com/photo-1741850821428-01abc97866b3?w=1920&auto=format&fit=crop&q=80',
      title: 'Safari Tented Camp',
      size: 'small',
    },
  ];

  // Staggered reveal on mount
  useEffect(() => {
    setVisibleIds(new Set());
    galleryImages.forEach((img, i) => {
      setTimeout(() => setVisibleIds(prev => new Set([...prev, img.id])), i * 40);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const next = useCallback(
    () => setSelectedIndex(i => (i !== null && i < galleryImages.length - 1) ? i + 1 : i),
    [galleryImages.length]
  );
  const prev = useCallback(
    () => setSelectedIndex(i => (i !== null && i > 0) ? i - 1 : i),
    []
  );

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

      {/* ─── HERO BANNER ─── */}
      <section className="relative" style={{ height: '58vh', minHeight: 380 }}>
        <img
          src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80"
          alt="Gallery hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#0a0a0f]" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px',
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <span
            className="inline-block px-4 py-2 rounded-full border text-xs tracking-widest uppercase mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#b8975a',
              borderColor: 'rgba(184,151,90,0.3)',
              background: 'rgba(184,151,90,0.08)',
            }}
          >
            Visual Journey
          </span>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(52px, 9vw, 100px)',
              letterSpacing: '-0.02em',
            }}
          >
            Photo{' '}
            <span className="italic" style={{ color: '#c9e89d' }}>
              Gallery
            </span>
          </h1>
          <div
            className="mt-5 mb-4"
            style={{
              width: 56,
              height: 2,
              background: 'linear-gradient(90deg, transparent, #b8975a, transparent)',
            }}
          />
          <p
            className="text-white/60 max-w-xl"
            style={{ fontFamily: "'Crimson Text', serif", fontSize: 18 }}
          >
            Uganda safaris, primate treks, and adventures across the world
          </p>
        </div>
      </section>

      {/* ─── MOSAIC GRID ─── */}
      <section className="relative py-10 sm:py-16">
        {/* ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 700,
            height: 500,
            background: 'radial-gradient(ellipse, rgba(184,151,90,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridAutoRows: '165px',
              gap: 10,
            }}
          >
            {galleryImages.map((image, idx) => {
              const visible = visibleIds.has(image.id);
              return (
                <div
                  key={image.id}
                  onClick={() => setSelectedIndex(idx)}
                  className="relative overflow-hidden cursor-pointer"
                  style={{
                    ...getGridStyle(image.size),
                    borderRadius: 14,
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(20px) scale(0.97)',
                    transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${(idx % 12) * 0.05}s,
                                 transform 0.5s cubic-bezier(0.22,1,0.36,1) ${(idx % 12) * 0.05}s`,
                  }}
                >
                  {/* Photo */}
                  <img
                    src={image.url}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                      transform: 'scale(1)',
                    }}
                    onMouseEnter={e => (e.target.style.transform = 'scale(1.07)')}
                    onMouseLeave={e => (e.target.style.transform = 'scale(1)')}
                    loading="lazy"
                  />

                  {/* Gradient scrim */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
                    style={{ transition: 'opacity 0.35s', opacity: 0.65 }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={e => (e.currentTarget.style.opacity = 0.65)}
                  />

                  {/* Title — slides up on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 pb-4"
                    style={{
                      zIndex: 2,
                      transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
                      transform: 'translateY(10px)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(0)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(10px)')}
                  >
                    <h3
                      className="text-white font-bold drop-shadow-md"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: image.size === 'hero' ? 22 : 15,
                        lineHeight: 1.3,
                      }}
                    >
                      {image.title}
                    </h3>
                  </div>

                  {/* Expand icon */}
                  <div
                    className="absolute bottom-3 right-3 flex items-center justify-center rounded-full"
                    style={{
                      width: 32,
                      height: 32,
                      background: 'rgba(10,10,15,0.55)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      zIndex: 3,
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={e => (e.currentTarget.style.opacity = 0)}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
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
          style={{ background: 'rgba(0,0,0,0.95)', zIndex: 50, backdropFilter: 'blur(10px)' }}
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 flex items-center justify-center rounded-full"
            style={{
              width: 40,
              height: 40,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              zIndex: 10,
            }}
            onClick={() => setSelectedIndex(null)}
          >
            <X className="text-white" style={{ width: 18, height: 18 }} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors"
            style={{
              width: 46,
              height: 46,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              zIndex: 10,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="text-white" style={{ width: 22, height: 22 }} />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors"
            style={{
              width: 46,
              height: 46,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              zIndex: 10,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="text-white" style={{ width: 22, height: 22 }} />
          </button>

          {/* Image + caption */}
          <div
            className="flex flex-col items-center px-16 max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedIndex].url}
              alt={galleryImages[selectedIndex].title}
              className="object-contain rounded-xl"
              style={{ maxHeight: '72vh', maxWidth: '100%' }}
            />
            <h3
              className="mt-5 text-white text-center"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700 }}
            >
              {galleryImages[selectedIndex].title}
            </h3>
            <p
              className="mt-2 text-white/30 text-xs"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {selectedIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* Filmstrip */}
          <div
            className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 px-6 overflow-x-auto"
            style={{ scrollbarWidth: 'none' }}
            onClick={e => e.stopPropagation()}
          >
            {galleryImages.map((img, i) => (
              <button
                key={img.id}
                onClick={e => { e.stopPropagation(); setSelectedIndex(i); }}
                className="flex-shrink-0 rounded-md overflow-hidden transition-all duration-300"
                style={{
                  width: 64,
                  height: 44,
                  border:
                    i === selectedIndex
                      ? '2px solid #b8975a'
                      : '2px solid rgba(255,255,255,0.1)',
                  opacity: i === selectedIndex ? 1 : 0.4,
                  boxShadow:
                    i === selectedIndex
                      ? '0 0 14px rgba(184,151,90,0.45)'
                      : 'none',
                }}
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default Gallery;