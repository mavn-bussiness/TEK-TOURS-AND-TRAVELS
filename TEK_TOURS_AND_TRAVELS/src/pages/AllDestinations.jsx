import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Search,
  Filter,
  ArrowRight,
  Mountain,
  Palmtree,
  Waves,
  TreePine,
  Camera,
  ChevronLeft,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

const AllDestinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 9;

  // East African destinations - will come from API
  const allDestinations = [
    {
      id: 1,
      name: 'Bwindi Impenetrable Forest',
      country: 'Uganda',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      description: 'Home to half of the world\'s remaining mountain gorillas. Trek through ancient rainforest for an unforgettable encounter.',
      duration: '3-5 Days',
      groupSize: '6-8',
      rating: 5.0,
      reviews: 342,
      price: 2500,
      trending: true,
      highlights: ['Gorilla Trekking', 'Bird Watching', 'Nature Walks', 'Local Communities']
    },
    {
      id: 2,
      name: 'Masai Mara National Reserve',
      country: 'Kenya',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1547970810-dc1e684a4a8d?w=800&q=80',
      description: 'Witness the Great Migration and experience world-class game viewing in Kenya\'s most famous reserve.',
      duration: '4-7 Days',
      groupSize: '8-12',
      rating: 4.9,
      reviews: 528,
      price: 2400,
      trending: true,
      highlights: ['Great Migration', 'Big Five', 'Hot Air Balloon Safari', 'Maasai Culture']
    },
    {
      id: 3,
      name: 'Serengeti National Park',
      country: 'Tanzania',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      description: 'Experience endless plains teeming with wildlife. Home to the annual wildebeest migration.',
      duration: '5-8 Days',
      groupSize: '6-10',
      rating: 5.0,
      reviews: 612,
      price: 2800,
      trending: true,
      highlights: ['Wildlife Migration', 'Big Five', 'Balloon Safaris', 'Photography']
    },
    {
      id: 4,
      name: 'Volcanoes National Park',
      country: 'Rwanda',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1535262412227-95c06e741c08?w=800&q=80',
      description: 'Trek to see endangered mountain gorillas and golden monkeys in the Virunga Mountains.',
      duration: '3-4 Days',
      groupSize: '6-8',
      rating: 5.0,
      reviews: 289,
      price: 3200,
      trending: false,
      highlights: ['Gorilla Trekking', 'Golden Monkeys', 'Volcano Hiking', 'Cultural Tours']
    },
    {
      id: 5,
      name: 'Zanzibar Archipelago',
      country: 'Tanzania',
      category: 'beach',
      image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&q=80',
      description: 'Pristine white sand beaches, turquoise waters, and rich Swahili culture await in this island paradise.',
      duration: '5-7 Days',
      groupSize: '2-6',
      rating: 4.8,
      reviews: 445,
      price: 1800,
      trending: true,
      highlights: ['Beach Relaxation', 'Snorkeling', 'Stone Town', 'Spice Tours']
    },
    {
      id: 6,
      name: 'Mount Kilimanjaro',
      country: 'Tanzania',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50b0?w=800&q=80',
      description: 'Conquer Africa\'s highest peak. Various routes available for different skill levels.',
      duration: '7-10 Days',
      groupSize: '8-12',
      rating: 4.9,
      reviews: 367,
      price: 3500,
      trending: false,
      highlights: ['Summit Attempt', 'Multiple Routes', 'Stunning Views', 'Achievement']
    },
    {
      id: 7,
      name: 'Lake Victoria',
      country: 'Uganda',
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      description: 'Africa\'s largest lake offers fishing villages, islands, and diverse birdlife.',
      duration: '2-4 Days',
      groupSize: '4-10',
      rating: 4.6,
      reviews: 198,
      price: 1200,
      trending: false,
      highlights: ['Island Hopping', 'Fishing', 'Bird Watching', 'Local Culture']
    },
    {
      id: 8,
      name: 'Jinja - Source of the Nile',
      country: 'Uganda',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80',
      description: 'Adventure capital of East Africa. White water rafting, bungee jumping, and the Nile\'s source.',
      duration: '2-3 Days',
      groupSize: '6-15',
      rating: 4.8,
      reviews: 423,
      price: 900,
      trending: false,
      highlights: ['White Water Rafting', 'Bungee Jumping', 'Kayaking', 'River Cruises']
    },
    {
      id: 9,
      name: 'Ngorongoro Crater',
      country: 'Tanzania',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
      description: 'World\'s largest inactive volcanic caldera with incredible wildlife concentration.',
      duration: '2-3 Days',
      groupSize: '6-10',
      rating: 4.9,
      reviews: 501,
      price: 2200,
      trending: false,
      highlights: ['Big Five', 'Crater Floor', 'Maasai Culture', 'Photography']
    },
    {
      id: 10,
      name: 'Lake Nakuru National Park',
      country: 'Kenya',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
      description: 'Famous for flamingos and rhino sanctuary. Excellent for bird watching and wildlife.',
      duration: '2-3 Days',
      groupSize: '6-12',
      rating: 4.7,
      reviews: 234,
      price: 1600,
      trending: false,
      highlights: ['Flamingos', 'Rhinos', 'Bird Watching', 'Day Trips']
    },
    {
      id: 11,
      name: 'Kidepo Valley National Park',
      country: 'Uganda',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1535338623465-c1aa3b671af7?w=800&q=80',
      description: 'Uganda\'s most remote park offers pristine wilderness and unique wildlife.',
      duration: '3-5 Days',
      groupSize: '4-8',
      rating: 4.8,
      reviews: 156,
      price: 2100,
      trending: false,
      highlights: ['Remote Wilderness', 'Unique Wildlife', 'Cultural Encounters', 'Scenic Views']
    },
    {
      id: 12,
      name: 'Mombasa Beaches',
      country: 'Kenya',
      category: 'beach',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
      description: 'Kenya\'s coastal paradise with beautiful beaches, marine parks, and Swahili culture.',
      duration: '4-7 Days',
      groupSize: '2-8',
      rating: 4.6,
      reviews: 389,
      price: 1500,
      trending: false,
      highlights: ['Beach Relaxation', 'Snorkeling', 'Old Town', 'Water Sports']
    },
    {
      id: 13,
      name: 'Rwenzori Mountains',
      country: 'Uganda',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      description: 'The "Mountains of the Moon" offer challenging treks through unique afro-alpine vegetation.',
      duration: '7-10 Days',
      groupSize: '4-8',
      rating: 4.9,
      reviews: 167,
      price: 2800,
      trending: false,
      highlights: ['Mountain Trekking', 'Alpine Lakes', 'Glaciers', 'Unique Flora']
    },
    {
      id: 14,
      name: 'Lake Kivu',
      country: 'Rwanda',
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',
      description: 'One of Africa\'s Great Lakes, perfect for relaxation, kayaking, and island exploration.',
      duration: '3-5 Days',
      groupSize: '2-6',
      rating: 4.7,
      reviews: 178,
      price: 1400,
      trending: false,
      highlights: ['Beach Relaxation', 'Kayaking', 'Island Tours', 'Coffee Tours']
    },
    {
      id: 15,
      name: 'Amboseli National Park',
      country: 'Kenya',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&q=80',
      description: 'Iconic views of Mount Kilimanjaro and large elephant herds.',
      duration: '2-3 Days',
      groupSize: '6-10',
      rating: 4.8,
      reviews: 412,
      price: 1900,
      trending: false,
      highlights: ['Elephants', 'Kilimanjaro Views', 'Bird Watching', 'Maasai Culture']
    },
    {
      id: 16,
      name: 'Queen Elizabeth National Park',
      country: 'Uganda',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
      description: 'Tree-climbing lions, boat safaris on Kazinga Channel, and diverse ecosystems.',
      duration: '3-4 Days',
      groupSize: '6-12',
      rating: 4.7,
      reviews: 298,
      price: 1700,
      trending: false,
      highlights: ['Tree-climbing Lions', 'Boat Safari', 'Chimp Tracking', 'Crater Lakes']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations', icon: MapPin },
    { id: 'wildlife', name: 'Wildlife & Safari', icon: Camera },
    { id: 'adventure', name: 'Adventure', icon: Mountain },
    { id: 'beach', name: 'Beach & Islands', icon: Waves },
    { id: 'nature', name: 'Nature & Lakes', icon: TreePine }
  ];

  const countries = [
    { id: 'all', name: 'All Countries' },
    { id: 'Uganda', name: 'Uganda' },
    { id: 'Kenya', name: 'Kenya' },
    { id: 'Tanzania', name: 'Tanzania' },
    { id: 'Rwanda', name: 'Rwanda' }
  ];

  // Filter destinations
  const filteredDestinations = allDestinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
    const matchesCountry = selectedCountry === 'all' || dest.country === selectedCountry;
    
    return matchesSearch && matchesCategory && matchesCountry;
  });

  // Pagination
  const totalPages = Math.ceil(filteredDestinations.length / destinationsPerPage);
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = filteredDestinations.slice(indexOfFirstDestination, indexOfLastDestination);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedCountry]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-stone-50">
      {/* Hero Banner with Image */}
      <div className="relative h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
          alt="East African Destinations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dest-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="white" />
                <path d="M50 30 L50 45 M35 50 L45 50 M50 55 L50 70 M55 50 L65 50" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dest-pattern)"/>
          </svg>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center w-full">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span 
                className="text-amber-200 text-xs sm:text-sm tracking-widest uppercase font-semibold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Discover East Africa
              </span>
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {filteredDestinations.length} Amazing Destinations
            </h1>
            
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 px-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Discover breathtaking landscapes, incredible wildlife, and rich cultures 
              across Uganda, Kenya, Tanzania, and Rwanda.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto px-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations..."
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-full text-sm sm:text-base text-gray-900 focus:ring-4 focus:ring-amber-300 focus:outline-none shadow-2xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        {/* Filters */}
        <div className="mb-8 sm:mb-12">
          {/* Category Filter */}
          <div className="mb-6">
            <h3 
              className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full font-medium transition-all text-xs sm:text-sm ${
                      selectedCategory === category.id
                        ? 'bg-amber-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Country Filter */}
          <div>
            <h3 
              className="text-base sm:text-lg font-semibold text-gray-900 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Filter by Country
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country.id)}
                  className={`px-3 sm:px-4 py-2 rounded-full font-medium transition-all text-xs sm:text-sm ${
                    selectedCountry === country.id
                      ? 'bg-amber-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {country.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Showing <span className="font-semibold text-gray-900">{indexOfFirstDestination + 1}-{Math.min(indexOfLastDestination, filteredDestinations.length)}</span> of <span className="font-semibold text-gray-900">{filteredDestinations.length}</span> destinations
          </p>
          {totalPages > 1 && (
            <p className="text-xs sm:text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* Destinations Grid */}
        {currentDestinations.length === 0 ? (
          <div className="text-center py-12 sm:py-20">
            <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
            <h3 
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              No destinations found
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">Try adjusting your filters or search query</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedCountry('all');
              }}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {currentDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative"
                >
                  {destination.trending && (
                    <div className="absolute top-4 left-4 z-20 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold uppercase rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span className="hidden sm:inline">Trending</span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Country Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm text-amber-900 text-xs font-bold uppercase rounded-full">
                        {destination.country}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-12 sm:top-14 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />
                      <span className="text-xs sm:text-sm font-semibold">{destination.rating}</span>
                      <span className="hidden sm:inline text-xs text-gray-600">({destination.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-amber-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg">
                        <div className="text-[10px] sm:text-xs">From</div>
                        <div className="text-lg sm:text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>${destination.price}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 
                      className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 line-clamp-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {destination.name}
                    </h3>

                    <p 
                      className="text-gray-600 text-sm mb-4 line-clamp-2"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                      {destination.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{destination.groupSize}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 sm:py-1 bg-amber-50 text-amber-700 text-[10px] sm:text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/destination/${destination.id}`}
                      className="w-full py-2.5 sm:py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Explore Destination</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-1.5 sm:p-2 rounded-lg transition-all ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-amber-600 hover:text-white border border-gray-200 shadow-md'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all ${
                          currentPage === pageNumber
                            ? 'bg-amber-600 text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200 shadow-md'
                        }`}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    (pageNumber === currentPage - 2 && pageNumber > 1) ||
                    (pageNumber === currentPage + 2 && pageNumber < totalPages)
                  ) {
                    return <span key={pageNumber} className="text-gray-400 px-1">...</span>;
                  }
                  return null;
                })}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-1.5 sm:p-2 rounded-lg transition-all ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-amber-600 hover:text-white border border-gray-200 shadow-md'
                  }`}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllDestinations;