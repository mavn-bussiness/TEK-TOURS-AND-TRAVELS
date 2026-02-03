import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Check, 
  Calendar,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Shield,
  ArrowRight
} from 'lucide-react';

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredPackage, setHoveredPackage] = useState(null);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Packages' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'beach', name: 'Beach & Island' },
    { id: 'safari', name: 'Safari' },
    { id: 'family', name: 'Family' }
  ];

  // Mock data - structured for easy API integration
  // API endpoint would be: GET /api/packages
  const packages = [
    {
      id: 1,
      title: 'Greek Islands Odyssey',
      destination: 'Greece',
      category: 'luxury',
      duration: '10 Days, 9 Nights',
      groupSize: { min: 8, max: 12 },
      price: 2499,
      originalPrice: 2999,
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
      featured: true,
      highlights: [
        'Santorini sunset cruise',
        'Private yacht experience',
        'Luxury 5-star hotels',
        'Gourmet dining included'
      ],
      includes: {
        flights: true,
        accommodation: true,
        meals: 'Breakfast & Dinner',
        guide: true,
        activities: true,
        insurance: false
      },
      availability: 'Available',
      nextDeparture: '2026-04-15'
    },
    {
      id: 2,
      title: 'Serengeti Safari Adventure',
      destination: 'Tanzania',
      category: 'safari',
      duration: '8 Days, 7 Nights',
      groupSize: { min: 4, max: 8 },
      price: 3299,
      originalPrice: 3799,
      rating: 5.0,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      featured: true,
      highlights: [
        'Great migration viewing',
        'Big Five game drives',
        'Luxury tented camps',
        'Hot air balloon safari'
      ],
      includes: {
        flights: true,
        accommodation: true,
        meals: 'All Meals',
        guide: true,
        activities: true,
        insurance: true
      },
      availability: 'Limited',
      nextDeparture: '2026-03-20'
    },
    {
      id: 3,
      title: 'Machu Picchu Explorer',
      destination: 'Peru',
      category: 'adventure',
      duration: '7 Days, 6 Nights',
      groupSize: { min: 10, max: 15 },
      price: 1899,
      originalPrice: 2299,
      rating: 4.8,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
      featured: false,
      highlights: [
        'Inca Trail trek',
        'Machu Picchu guided tour',
        'Sacred Valley exploration',
        'Traditional Peruvian cuisine'
      ],
      includes: {
        flights: false,
        accommodation: true,
        meals: 'Breakfast Only',
        guide: true,
        activities: true,
        insurance: false
      },
      availability: 'Available',
      nextDeparture: '2026-05-10'
    },
    
  ];

  // Filter packages based on selected category
  const filteredPackages = selectedCategory === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <section id="packages" className="relative bg-gradient-to-b from-white via-stone-50 to-amber-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span 
            className="inline-block px-4 py-2 bg-amber-600/10 border border-amber-600/30 text-amber-700 text-xs tracking-widest uppercase rounded-full mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Tour Packages
          </span>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Curated Travel Packages
          </h2>
          
          <p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Handpicked journeys designed for unforgettable experiences. All-inclusive packages 
            with expert guides, premium accommodations, and authentic local encounters.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              onMouseEnter={() => setHoveredPackage(pkg.id)}
              onMouseLeave={() => setHoveredPackage(null)}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                hoveredPackage === pkg.id ? 'scale-105 z-10' : 'scale-100'
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-amber-600 text-white text-xs font-bold uppercase tracking-wide rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  Featured
                </div>
              )}

              {/* Availability Badge */}
              <div className={`absolute top-4 right-4 z-20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-full ${
                pkg.availability === 'Limited' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-green-500 text-white'
              }`}>
                {pkg.availability}
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/80 text-xs line-through mb-1">
                        ${pkg.originalPrice}
                      </p>
                      <p className="text-white text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                        ${pkg.price}
                      </p>
                      <p className="text-white/80 text-xs">per person</p>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-white font-semibold">{pkg.rating}</span>
                      <span className="text-white/70 text-xs">({pkg.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Location */}
                <div className="mb-4">
                  <h3 
                    className="text-2xl text-gray-900 mb-2 font-bold leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.destination}</span>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>{pkg.groupSize.min}-{pkg.groupSize.max}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes Icons */}
                <div className="flex items-center gap-3 mb-4 pt-4 border-t border-gray-200">
                  {pkg.includes.flights && (
                    <div className="group/icon relative">
                      <Plane className="w-5 h-5 text-gray-400" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                        Flights
                      </span>
                    </div>
                  )}
                  {pkg.includes.accommodation && (
                    <div className="group/icon relative">
                      <Hotel className="w-5 h-5 text-gray-400" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                        Hotels
                      </span>
                    </div>
                  )}
                  {pkg.includes.meals && (
                    <div className="group/icon relative">
                      <Utensils className="w-5 h-5 text-gray-400" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                        {pkg.includes.meals}
                      </span>
                    </div>
                  )}
                  {pkg.includes.activities && (
                    <div className="group/icon relative">
                      <Camera className="w-5 h-5 text-gray-400" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                        Activities
                      </span>
                    </div>
                  )}
                  {pkg.includes.insurance && (
                    <div className="group/icon relative">
                      <Shield className="w-5 h-5 text-gray-400" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                        Insurance
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Next Departure */}
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>Next departure: {new Date(pkg.nextDeparture).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link 
            to="/packages"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover-lift"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;