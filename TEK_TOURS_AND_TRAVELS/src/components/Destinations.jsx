import React, { useState, useEffect, useRef } from 'react';
import { Play, Info, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionsRef = useRef([0, 0, 0, 0]);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(Date.now());
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Organized destination data by column
 const destinationColumns = [
  {
    destinations: [
      {
        id: 'bwindi-impenetrable',
        image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=600&q=80',
        title: 'Bwindi Impenetrable Forest',
        location: 'Southwestern Uganda',
        category: 'Gorilla Trekking',
        duration: '4 Days',
        groupSize: '4-8',
        description: 'Unforgettable mountain gorilla trekking and lush rainforest adventures'
      },
      {
        id: 'murchison-falls',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        title: 'Murchison Falls NP',
        location: 'Northwestern Uganda',
        category: 'Safari & Waterfalls',
        duration: '3 Days',
        groupSize: '6-12',
        description: 'Thundering Nile waterfall and classic African safari experiences'
      },
      {
        id: 'queen-elizabeth',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        title: 'Queen Elizabeth NP',
        location: 'Western Uganda',
        category: 'Wildlife Safari',
        duration: '3 Days',
        groupSize: '6-14',
        description: 'Diverse ecosystems, boat cruises, and iconic wildlife sightings'
      },
      {
        id: 'lake-bunyonyi',
        image: 'https://images.unsplash.com/photo-1611416517780-eff3a2f57b89?w=600&q=80',
        title: 'Lake Bunyonyi',
        location: 'Southwestern Uganda',
        category: 'Scenic Lake',
        duration: '2 Days',
        groupSize: '2-6',
        description: 'Serene lake with island hopping, swimming and beautiful views'
      }
    ],
    offset: 0
  },
  {
    destinations: [
      {
        id: 'rwenzori-mountains',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
        title: 'Rwenzori Mountains',
        location: 'Western Uganda',
        category: 'Mountain Trek',
        duration: '7 Days',
        groupSize: '6-10',
        description: 'Hike the "Mountains of the Moon" with glaciers and waterfalls'
      },
      {
        id: 'jinja-nile',
        image: 'https://images.unsplash.com/photo-1624714463892-c0e3fe9b1eb1?w=600&q=80',
        title: 'Jinja & Source of Nile',
        location: 'Eastern Uganda',
        category: 'Adventure & River',
        duration: '2 Days',
        groupSize: '4-8',
        description: 'Adventure capital with white-water rafting and Nile views'
      },
      {
        id: 'kibale-forest',
        image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&q=80',
        title: 'Kibale Forest',
        location: 'Western Uganda',
        category: 'Chimpanzee Safari',
        duration: '3 Days',
        groupSize: '6-10',
        description: 'Chimpanzee tracking and rich primate biodiversity'
      },
      {
        id: 'lake-victoria',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
        title: 'Lake Victoria',
        location: 'Central Uganda',
        category: 'Lakeside Leisure',
        duration: '2 Days',
        groupSize: '2-6',
        description: 'Africa\'s largest lake with beaches, boat tours and birdlife'
      }
    ],
    offset: -150
  },
  {
    destinations: [
      {
        id: 'entebbe-gardens',
        image: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?w=600&q=80',
        title: 'Entebbe Botanical Gardens',
        location: 'Entebbe, Uganda',
        category: 'Nature & Birdwatching',
        duration: '1 Day',
        groupSize: '4-8',
        description: 'Explore tropical plant life, birds and lakeside scenery'
      },
      {
        id: 'lake-mburo',
        image: 'https://images.pexels.com/photos/33045/animal-zebra-lake-blog-mburo.jpg?w=600&q=80',
        title: 'Lake Mburo NP',
        location: 'Western Uganda',
        category: 'Safari Getaway',
        duration: '2 Days',
        groupSize: '4-8',
        description: 'Easy safari with zebras, antelope, and birdlife'
      },
      {
        id: 'tororo-rock',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
        title: 'Tororo Rock',
        location: 'Eastern Uganda',
        category: 'Hiking & Views',
        duration: '1 Day',
        groupSize: '6-12',
        description: 'Climb the iconic volcanic rock for panoramic views'
      },
      {
        id: 'uganda-mosque',
        image: 'https://images.pexels.com/photos/5024619/pexels-photo-5024619.jpeg?w=600&q=80',
        title: 'Uganda National Mosque',
        location: 'Kampala, Uganda',
        category: 'Cultural Landmark',
        duration: '1 Day',
        groupSize: '1-4',
        description: 'Visit East Africa\'s largest mosque and city views'
      }
    ],
    offset: -75
  },
  {
    destinations: [
      {
        id: 'kidepo-valley',
        image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=600&q=80',
        title: 'Kidepo Valley NP',
        location: 'Northern Uganda',
        category: 'Remote Safari',
        duration: '4 Days',
        groupSize: '6-10',
        description: 'Wild, rugged landscapes and classic savannah wildlife'
      },
      {
        id: 'semuliki',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
        title: 'Semuliki National Park',
        location: 'Western Uganda',
        category: 'Forest & Hot Springs',
        duration: '3 Days',
        groupSize: '4-8',
        description: 'Explore hot springs and dense rainforest'
      },
      {
        id: 'zziwa-rhino',
        image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=600&q=80',
        title: 'Ziwa Rhino Sanctuary',
        location: 'Central Uganda',
        category: 'Wildlife Sanctuary',
        duration: '1 Day',
        groupSize: '4-10',
        description: 'Track rhinos on foot in Uganda\'s only rhino sanctuary'
      },
      {
        id: 'kampala-city',
        image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=600&q=80',
        title: 'Kampala City',
        location: 'Central Uganda',
        category: 'Urban & Culture',
        duration: '2 Days',
        groupSize: '1-6',
        description: 'Experience lively markets, museums, and nightlife'
      }
    ],
    offset: -225
  }
];

  // Flatten for mobile horizontal scroll
  const allDestinations = destinationColumns.flatMap(col => col.destinations);

  // Smooth continuous scrolling (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const animate = () => {
      if (!isPaused) {
        const currentTime = Date.now();
        const deltaTime = (currentTime - lastTimeRef.current) / 16.67;
        lastTimeRef.current = currentTime;

        destinationColumns.forEach((column, columnIndex) => {
          const baseSpeed = 0.3;
          const speedVariation = columnIndex * 0.08;
          const speed = (baseSpeed + speedVariation) * deltaTime;
          
          scrollPositionsRef.current[columnIndex] += speed;

          const container = document.getElementById(`scroll-column-${columnIndex}`);
          if (container) {
            const maxScroll = container.scrollHeight / 2;
            
            if (scrollPositionsRef.current[columnIndex] >= maxScroll) {
              scrollPositionsRef.current[columnIndex] = 0;
            }
            
            container.scrollTop = scrollPositionsRef.current[columnIndex];
          }
        });
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, isMobile, destinationColumns.length]);

  // Mobile View - Horizontal Scroll
  if (isMobile) {
    return (
      <section 
        id="destinations"
        className="relative bg-[#0a0a0a] overflow-hidden py-16"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none z-10" />

        <div className="relative z-10">
          {/* Header */}
          <div className="px-4 sm:px-6 mb-8">
            <span 
              className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/30 text-amber-400 text-xs tracking-widest uppercase rounded-full mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore Uganda
            </span>
            
            <h2 
              className="text-4xl sm:text-5xl text-white font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Discover <br />Destinations
            </h2>
            
            <p 
              className="text-gray-400 text-base leading-relaxed max-w-lg"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Handpicked destinations from pristine beaches to majestic mountains
            </p>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="overflow-x-auto scrollbar-hide px-4 sm:px-6">
            <div className="flex gap-4 pb-4">
              {allDestinations.map((destination, index) => (
                <div
                  key={`${destination.id}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px]"
                >
                  <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a] shadow-2xl">
                    <div className="relative aspect-[3/4]">
                      <img
                        src={destination.image}
                        alt={destination.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                      
                      <div className="absolute top-3 left-3 right-3">
                        <span className="inline-block px-3 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wide uppercase rounded-full">
                          {destination.category}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-white text-lg font-bold mb-1 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {destination.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-gray-300 text-sm mb-3">
                          <MapPin className="w-3 h-3" />
                          <span>{destination.location}</span>
                        </div>

                        <p className="text-white/80 text-sm mb-3 line-clamp-2" style={{ fontFamily: "'Crimson Text', serif" }}>
                          {destination.description}
                        </p>

                        <div className="flex items-center justify-between text-white/70 text-xs">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{destination.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{destination.groupSize}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    );
  }

  // Desktop View - Vertical Scrolling Columns
  return (
    <section 
      id="destinations"
      className="relative bg-[#0a0a0a] overflow-hidden"
      style={{ height: '100vh' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none z-10" />

      <div className="relative z-10 h-full flex">
        {/* Left Side - Hero Text */}
        <div className="lg:w-2/5 xl:w-1/3 flex items-center justify-center p-12 xl:p-16">
          <div className="max-w-xl">
            <span 
              className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/30 text-amber-400 text-xs tracking-widest uppercase rounded-full mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore Uganda
            </span>
            
            <h2 
              className="text-5xl xl:text-6xl text-white font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Destinations,
              <br />
              tours and
              <br />
              more.
            </h2>
            
            <p 
              className="text-gray-400 text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Discover handpicked destinations around the world. From pristine beaches 
              to majestic mountains, ancient cultures to thrilling safaris.
            </p>
            
            <div className="flex flex-col gap-4">
              <button className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300">
                Contact Us
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>150+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Destinations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>50K+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Travelers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Tours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Scrolling Columns */}
        <div className="lg:w-3/5 xl:w-2/3 relative">
          <div className="h-full flex gap-4 px-8 py-8 overflow-x-auto scrollbar-hide">
            {destinationColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                id={`scroll-column-${columnIndex}`}
                className="flex-shrink-0 w-[260px] xl:w-[280px] h-full overflow-y-auto scrollbar-hide"
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  transform: `translateY(${column.offset}px)`
                }}
              >
                <div className="flex flex-col gap-4">
                  {[...column.destinations, ...column.destinations].map((destination, index) => (
                    <div
                      key={`${destination.id}-${index}`}
                      onMouseEnter={() => setHoveredCard(`${columnIndex}-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`relative group cursor-pointer transition-all duration-300 ${
                        hoveredCard === `${columnIndex}-${index}` ? 'scale-105 z-20' : 'scale-100'
                      }`}
                    >
                      <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a] shadow-2xl">
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img
                            src={destination.image}
                            alt={destination.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                          
                          <div className="absolute top-3 left-3 right-3">
                            <span className="inline-block px-3 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wide uppercase rounded-full">
                              {destination.category}
                            </span>
                          </div>

                          <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 flex flex-col items-center justify-center gap-3 ${
                            hoveredCard === `${columnIndex}-${index}` ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <p className="text-white/90 text-sm text-center px-6 mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>
                              {destination.description}
                            </p>

                            <div className="flex items-center justify-center gap-4 text-white/70 text-xs mt-2">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{destination.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                <span>{destination.groupSize}</span>
                              </div>
                            </div>
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-white text-base lg:text-lg font-bold mb-1 line-clamp-2 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                              {destination.title}
                            </h4>
                            <div className="flex items-center gap-1.5 text-gray-300 text-xs">
                              <MapPin className="w-3 h-3" />
                              <span className="line-clamp-1">{destination.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Destinations;