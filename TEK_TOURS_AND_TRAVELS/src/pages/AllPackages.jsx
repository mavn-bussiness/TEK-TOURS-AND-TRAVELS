import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Clock, 
  Users, 
  MapPin,
  Check,
  ArrowRight,
  Filter,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Shield,
  Calendar,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const AllPackages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 9;

  // Mock data - in production, this would come from an API
  const allPackages = [
    {
      id: 1,
      title: 'Ultimate Gorilla Experience',
      destination: 'Uganda & Rwanda',
      category: 'wildlife',
      duration: '7 Days, 6 Nights',
      groupSize: { min: 4, max: 8 },
      price: 4200,
      originalPrice: 4800,
      rating: 5.0,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      featured: true,
      highlights: [
        'Gorilla trekking in Bwindi & Volcanoes NP',
        'Golden monkey tracking',
        'Cultural village visits',
        'Luxury lodge accommodation'
      ],
      includes: {
        flights: true,
        accommodation: true,
        meals: 'All Meals',
        guide: true,
        activities: true,
        insurance: true
      }
    },
    {
      id: 2,
      title: 'Great Migration Safari',
      destination: 'Kenya & Tanzania',
      category: 'wildlife',
      duration: '10 Days, 9 Nights',
      groupSize: { min: 6, max: 12 },
      price: 3800,
      originalPrice: 4200,
      rating: 4.9,
      reviews: 287,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      featured: true,
      highlights: [
        'Witness the Great Migration',
        'Masai Mara & Serengeti game drives',
        'Hot air balloon safari',
        'Maasai cultural experience'
      ],
      includes: {
        flights: true,
        accommodation: true,
        meals: 'All Meals',
        guide: true,
        activities: true,
        insurance: true
      }
    },
    {
      id: 3,
      title: 'Zanzibar Beach Paradise',
      destination: 'Tanzania',
      category: 'beach',
      duration: '6 Days, 5 Nights',
      groupSize: { min: 2, max: 6 },
      price: 1800,
      originalPrice: 2200,
      rating: 4.8,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&q=80',
      featured: false,
      highlights: [
        'Pristine white sand beaches',
        'Stone Town exploration',
        'Spice farm tours',
        'Snorkeling & diving'
      ],
      includes: {
        flights: true,
        accommodation: true,
        meals: 'Breakfast & Dinner',
        guide: true,
        activities: true,
        insurance: false
      }
    },
    {
      id: 4,
      title: 'Mount Kilimanjaro Trek',
      destination: 'Tanzania',
      category: 'adventure',
      duration: '8 Days, 7 Nights',
      groupSize: { min: 6, max: 12 },
      price: 2900,
      originalPrice: 3400,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50b0?w=800&q=80',
      featured: false,
      highlights: [
        'Summit Africa\'s highest peak',
        'Machame Route trek',
        'Professional mountain guides',
        'All camping equipment included'
      ],
      includes: {
        flights: false,
        accommodation: true,
        meals: 'All Meals',
        guide: true,
        activities: true,
        insurance: true
      }
    },
    {
      id: 5,
      title: 'Cultural Rwanda Experience',
      destination: 'Rwanda',
      category: 'cultural',
      duration: '5 Days, 4 Nights',
      groupSize: { min: 8, max: 14 },
      price: 1600,
      originalPrice: 1900,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      featured: false,
      highlights: [
        'Kigali city tour',
        'Genocide memorial visit',
        'Traditional dance performances',
        'Local craft markets'
      ],
      includes: {
        flights: true,
        accommodation: true,
        meals: 'Breakfast & Lunch',
        guide: true,
        activities: true,
        insurance: false
      }
    },
    {
      id: 6,
      title: 'Lake Victoria Islands',
      destination: 'Uganda',
      category: 'adventure',
      duration: '4 Days, 3 Nights',
      groupSize: { min: 4, max: 10 },
      price: 1200,
      originalPrice: 1500,
      rating: 4.6,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50b0?w=800&q=80',
      featured: false,
      highlights: [
        'Ssese Islands exploration',
        'Boat cruises',
        'Bird watching',
        'Beach relaxation'
      ],
      includes: {
        flights: false,
        accommodation: true,
        meals: 'All Meals',
        guide: true,
        activities: true,
        insurance: false
      }
    },
    {
      id: 7,
      title: 'Murchison Falls Safari',
      destination: 'Uganda',
      category: 'wildlife',
      duration: '4 Days, 3 Nights',
      groupSize: { min: 6, max: 12 },
      price: 2200,
      originalPrice: 2600,
      rating: 4.8,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      featured: false,
      highlights: [
        'Game drives in Murchison Falls NP',
        'Nile boat cruise',
        'Top of the falls hike',
        'Big Five spotting'
      ],
      includes: {
        flights: false,
        accommodation: true,
        meals: 'All Meals',
        guide: true,
        activities: true,
        insurance: false
      }
    },
    {
      id: 8,
      title: 'Ngorongoro Crater Adventure',
      destination: 'Tanzania',
      category: 'wildlife',
      duration: '5 Days, 4 Nights',
      groupSize: { min: 4, max: 8 },
      price: 3200,
      originalPrice: 3700,
      rating: 5.0,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      featured: true,
      highlights: [
        'Ngorongoro Crater floor game drive',
        'Olduvai Gorge visit',
        'Maasai village experience',
        'Luxury tented camps'
      ],
      includes: {
        flights: true,
        accommodation: true,
        meals: 'All Meals',
        guide: true,
        activities: true,
        insurance: true
      }
    },
    {
      id: 9,
      title: 'Nairobi to Mombasa',
      destination: 'Kenya',
      category: 'combo',
      duration: '8 Days, 7 Nights',
      groupSize: { min: 6, max: 14 },
      price: 2700,
      originalPrice: 3100,
      rating: 4.7,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&q=80',
      featured: false,
      highlights: [
        'Nairobi National Park',
        'Train journey to coast',
        'Diani Beach resort',
        'Marine park snorkeling'
      ],
      includes: {
        flights: true,
        accommodation: true,
        meals: 'Breakfast & Dinner',
        guide: true,
        activities: true,
        insurance: false
      }
    },
    {
      id: 10,
      title: 'Queen Elizabeth Safari',
      destination: 'Uganda',
      category: 'wildlife',
      duration: '3 Days, 2 Nights',
      groupSize: { min: 4, max: 10 },
      price: 1500,
      originalPrice: 1800,
      rating: 4.6,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      featured: false,
      highlights: [
        'Tree-climbing lions',
        'Kazinga Channel boat cruise',
        'Chimp tracking',
        'Crater lakes exploration'
      ],
      includes: {
        flights: false,
        accommodation: true,
        meals: 'All Meals',
        guide: true,
        activities: true,
        insurance: false
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Packages' },
    { id: 'wildlife', name: 'Wildlife Safari' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'beach', name: 'Beach & Relax' },
    { id: 'combo', name: 'Combination' },
    { id: 'cultural', name: 'Cultural' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Under $2000', max: 2000 },
    { id: 'mid', name: '$2000 - $4000', min: 2000, max: 4000 },
    { id: 'luxury', name: 'Above $4000', min: 4000 }
  ];

  // Filter packages
  const filteredPackages = allPackages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
    
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

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = filteredPackages.slice(indexOfFirstPackage, indexOfLastPackage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, priceRange]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-stone-50">
      {/* Hero Banner */}
      <div className="relative h-[350px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=80"
          alt="Tour Packages"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center w-full">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tour Packages
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Carefully curated East African adventures with expert guides 
              and premium experiences.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto px-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search packages..."
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
        <div className="mb-8 sm:mb-12 space-y-6">
          {/* Category */}
          <div>
            <h3 
              className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
              Category
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 sm:px-4 py-2 rounded-full font-medium transition-all text-xs sm:text-sm ${
                    selectedCategory === cat.id
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 
              className="text-base sm:text-lg font-semibold text-gray-900 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Price Range
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setPriceRange(range.id)}
                  className={`px-3 sm:px-4 py-2 rounded-full font-medium transition-all text-xs sm:text-sm ${
                    priceRange === range.id
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Showing <span className="font-semibold text-gray-900">{indexOfFirstPackage + 1}-{Math.min(indexOfLastPackage, filteredPackages.length)}</span> of <span className="font-semibold text-gray-900">{filteredPackages.length}</span> packages
          </p>
          {totalPages > 1 && (
            <p className="text-xs sm:text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </p>
          )}
        </div>

        {/* Packages Grid */}
        {currentPackages.length === 0 ? (
          <div className="text-center py-12 sm:py-20">
            <p className="text-xl sm:text-2xl text-gray-600" style={{ fontFamily: "'Playfair Display', serif" }}>
              No packages found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {currentPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative"
                >
                  {pkg.featured && (
                    <div className="absolute top-4 left-4 z-20 px-2 sm:px-3 py-1 sm:py-1.5 bg-amber-600 text-white text-xs font-bold uppercase rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      <span className="hidden sm:inline">Featured</span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-56 sm:h-64">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <p className="text-white/80 text-[10px] sm:text-xs line-through mb-1">${pkg.originalPrice}</p>
                        <p className="text-white text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>${pkg.price}</p>
                        <p className="text-white/80 text-[10px] sm:text-xs">per person</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                        <span className="text-white text-xs sm:text-sm font-semibold">{pkg.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 
                      className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 line-clamp-1" 
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {pkg.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-4">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{pkg.destination}</span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{pkg.groupSize.min}-{pkg.groupSize.max}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {pkg.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 sm:gap-3 mb-4 pt-4 border-t">
                      {pkg.includes.flights && <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" title="Flights" />}
                      {pkg.includes.accommodation && <Hotel className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" title="Hotels" />}
                      {pkg.includes.meals && <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" title="Meals" />}
                      {pkg.includes.activities && <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" title="Activities" />}
                      {pkg.includes.insurance && <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" title="Insurance" />}
                    </div>

                    <button className="w-full py-2.5 sm:py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
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
                      : 'bg-white text-gray-700 hover:bg-amber-600 hover:text-white border border-gray-200'
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
                            ? 'bg-amber-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
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
                      : 'bg-white text-gray-700 hover:bg-amber-600 hover:text-white border border-gray-200'
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

export default AllPackages;