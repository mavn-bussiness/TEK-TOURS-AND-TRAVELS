import React, { useState, useEffect, useRef } from 'react';
import { Play, Info, MapPin, Clock, Users } from 'lucide-react';

const Destinations = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionsRef = useRef([0, 0, 0, 0]);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  // Organized destination data by column
  const destinationColumns = [
    // Column 1 - Beach & Islands
    {
      destinations: [
        {
          id: 'santorini',
          image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80',
          title: 'Santorini',
          location: 'Greece',
          category: 'Island Paradise',
          duration: '7 Days',
          groupSize: '12-16',
          description: 'Iconic white-washed villages and stunning sunsets'
        },
        {
          id: 'maldives',
          image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
          title: 'Maldives',
          location: 'Indian Ocean',
          category: 'Luxury Beach',
          duration: '7 Days',
          groupSize: '2-4',
          description: 'Crystal waters and overwater bungalows'
        },
        {
          id: 'bali',
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
          title: 'Bali',
          location: 'Indonesia',
          category: 'Cultural Beach',
          duration: '9 Days',
          groupSize: '10-15',
          description: 'Temples, rice terraces, and tropical beaches'
        },
        {
          id: 'seychelles',
          image: 'https://images.unsplash.com/photo-1589197331516-6c0c71d37ebc?w=600&q=80',
          title: 'Seychelles',
          location: 'East Africa',
          category: 'Island Paradise',
          duration: '7 Days',
          groupSize: '4-8',
          description: 'Pristine beaches and granite rock formations'
        }
      ],
      offset: 0 // No offset for first column
    },
    // Column 2 - Mountains & Adventure
    {
      destinations: [
        {
          id: 'swiss-alps',
          image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80',
          title: 'Swiss Alps',
          location: 'Switzerland',
          category: 'Mountain Trek',
          duration: '10 Days',
          groupSize: '8-12',
          description: 'Majestic peaks and alpine meadows'
        },
        {
          id: 'patagonia',
          image: 'https://images.unsplash.com/photo-1611214729937-e4ab5f85ab5c?w=600&q=80',
          title: 'Patagonia',
          location: 'Argentina & Chile',
          category: 'Wilderness',
          duration: '12 Days',
          groupSize: '8-10',
          description: 'Glaciers, peaks, and wild landscapes'
        },
        {
          id: 'nepal',
          image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
          title: 'Nepal',
          location: 'Himalayas',
          category: 'Mountain Trek',
          duration: '14 Days',
          groupSize: '10-12',
          description: 'Himalayan trails and ancient monasteries'
        },
        {
          id: 'dolomites',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
          title: 'Dolomites',
          location: 'Italy',
          category: 'Alpine Adventure',
          duration: '8 Days',
          groupSize: '12-16',
          description: 'Dramatic peaks and mountain villages'
        }
      ],
      offset: -150 // Displaced up by 150px
    },
    // Column 3 - Cultural & Heritage
    {
      destinations: [
        {
          id: 'kyoto',
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
          title: 'Kyoto',
          location: 'Japan',
          category: 'Cultural Heritage',
          duration: '8 Days',
          groupSize: '12-18',
          description: 'Ancient temples and zen gardens'
        },
        {
          id: 'morocco',
          image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&q=80',
          title: 'Morocco',
          location: 'North Africa',
          category: 'Desert Culture',
          duration: '10 Days',
          groupSize: '12-16',
          description: 'Souks, kasbahs, and Sahara dunes'
        },
        {
          id: 'machu-picchu',
          image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80',
          title: 'Machu Picchu',
          location: 'Peru',
          category: 'Ancient Wonder',
          duration: '10 Days',
          groupSize: '10-12',
          description: 'Incan citadel in the clouds'
        },
        {
          id: 'egypt',
          image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80',
          title: 'Egypt',
          location: 'North Africa',
          category: 'Ancient Heritage',
          duration: '12 Days',
          groupSize: '15-20',
          description: 'Pyramids, temples, and the Nile'
        }
      ],
      offset: -75 // Displaced up by 75px
    },
    // Column 4 - Safari & Wildlife
    {
      destinations: [
        {
          id: 'serengeti',
          image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
          title: 'Serengeti',
          location: 'Tanzania',
          category: 'Safari Adventure',
          duration: '11 Days',
          groupSize: '6-8',
          description: 'Great migration and Big Five'
        },
        {
          id: 'masai-mara',
          image: 'https://images.unsplash.com/photo-1547970810-dc1e684a4a8d?w=600&q=80',
          title: 'Masai Mara',
          location: 'Kenya',
          category: 'Wildlife Safari',
          duration: '9 Days',
          groupSize: '8-10',
          description: 'Witness wildlife in their natural habitat'
        },
        {
          id: 'kruger',
          image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&q=80',
          title: 'Kruger Park',
          location: 'South Africa',
          category: 'Safari Experience',
          duration: '10 Days',
          groupSize: '10-14',
          description: 'Diverse wildlife and luxury lodges'
        },
        {
          id: 'galapagos',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
          title: 'Galápagos',
          location: 'Ecuador',
          category: 'Wildlife Expedition',
          duration: '12 Days',
          groupSize: '12-16',
          description: 'Unique wildlife and volcanic islands'
        }
      ],
      offset: -225 // Displaced up by 225px
    }
  ];

  // Smooth continuous scrolling with varying speeds
  useEffect(() => {
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
  }, [isPaused, destinationColumns.length]);

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
        <div className="hidden lg:flex lg:w-2/5 xl:w-1/3 items-center justify-center p-12 xl:p-16">
          <div className="max-w-xl">
            <span 
              className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/30 text-amber-400 text-xs tracking-widest uppercase rounded-full mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore The World
            </span>
            
            <h2 
              className="text-5xl xl:text-6xl text-white font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              destinations,
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
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                <span>View All</span>
                <Play className="w-4 h-4 fill-white group-hover:translate-x-1 transition-transform" />
              </button>
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
        <div className="w-full lg:w-3/5 xl:w-2/3 relative">
          <div className="lg:hidden absolute top-0 left-0 right-0 z-20 p-6 bg-gradient-to-b from-black/80 to-transparent">
            <h2 className="text-3xl text-white font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Explore Destinations
            </h2>
            <p className="text-gray-300 text-sm">Discover amazing places</p>
          </div>

          <div className="h-full flex gap-3 md:gap-4 px-4 md:px-8 py-8 pt-24 lg:pt-8 overflow-x-auto scrollbar-hide">
            {destinationColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                id={`scroll-column-${columnIndex}`}
                className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] xl:w-[280px] h-full overflow-y-auto scrollbar-hide"
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  transform: `translateY(${column.offset}px)`
                }}
              >
                <div className="flex flex-col gap-3 md:gap-4">
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
                            <span className="inline-block px-3 py-1 bg-amber-600/90 backdrop-blur-sm text-white text-[10px] md:text-xs font-semibold tracking-wide uppercase rounded-full">
                              {destination.category}
                            </span>
                          </div>

                          <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 flex flex-col items-center justify-center gap-3 ${
                            hoveredCard === `${columnIndex}-${index}` ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <p className="text-white/90 text-xs md:text-sm text-center px-6 mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>
                              {destination.description}
                            </p>

                            <div className="flex flex-col gap-2 w-full px-6">
                              <button className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs md:text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                                <Play className="w-3 h-3 md:w-4 md:h-4 fill-white" />
                                View Tour
                              </button>
                              <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs md:text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 border border-white/30">
                                <Info className="w-3 h-3 md:w-4 md:h-4" />
                                Details
                              </button>
                            </div>

                            <div className="flex items-center justify-center gap-4 text-white/70 text-[10px] md:text-xs mt-2">
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

                          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                            <h4 className="text-white text-sm md:text-base lg:text-lg font-bold mb-1 line-clamp-2 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
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