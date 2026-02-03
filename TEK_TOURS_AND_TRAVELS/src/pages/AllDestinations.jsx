import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Clock, 
  Search,
  Filter,
  Mountain,
  Camera,
  Loader,
  Waves,
  TreePine,
  Check
} from 'lucide-react';

const AllDestinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4); // Reduced initial load
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef(null);

  // All destinations data
  const allDestinations = [
    {
      id: 1,
      name: 'Bwindi Impenetrable Forest',
      country: 'Uganda',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      description: 'Bwindi Impenetrable Forest is a UNESCO World Heritage Site and home to nearly half of the world\'s remaining mountain gorillas. This ancient rainforest, with its mist-covered hills and dense vegetation, offers one of the most extraordinary wildlife experiences on Earth. Trek through the jungle with experienced guides to encounter these gentle giants in their natural habitat. Beyond gorillas, the forest hosts over 350 bird species, 120 mammals, and countless butterflies and plants.',
      duration: '3-5 Days',
      highlights: ['Mountain Gorilla Trekking', 'Bird Watching', 'Nature Walks', 'Batwa Cultural Experience']
    },
    {
      id: 2,
      name: 'Masai Mara National Reserve',
      country: 'Kenya',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1547970810-dc1e684a4a8d?w=800&q=80',
      description: 'The Masai Mara is Kenya\'s most famous wildlife reserve, renowned for its exceptional population of lions, leopards, cheetahs, and the annual Great Migration. Between July and October, over 1.5 million wildebeest and hundreds of thousands of zebras cross the Mara River in one of nature\'s most spectacular events. The reserve\'s rolling grasslands and acacia-dotted plains provide the perfect backdrop for game drives, where you can witness the Big Five and immerse yourself in Maasai culture.',
      duration: '4-7 Days',
      highlights: ['Great Wildebeest Migration', 'Big Five Safaris', 'Hot Air Balloon Rides', 'Maasai Village Visits']
    },
    {
      id: 3,
      name: 'Serengeti National Park',
      country: 'Tanzania',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      description: 'Serengeti means "endless plains" in the Maasai language, and this UNESCO World Heritage Site lives up to its name. The park covers nearly 15,000 square kilometers of pristine savannah, home to the largest terrestrial mammal migration in the world. The Serengeti ecosystem supports diverse wildlife year-round, including massive herds of wildebeest, zebra, and gazelle, along with their predators - lions, cheetahs, leopards, and hyenas. The landscape varies from open grasslands to riverine forests and kopjes (rocky outcrops).',
      duration: '5-8 Days',
      highlights: ['Annual Wildlife Migration', 'Big Five Game Viewing', 'Balloon Safaris', 'Kopje Formations']
    },
    {
      id: 4,
      name: 'Volcanoes National Park',
      country: 'Rwanda',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1535262412227-95c06e741c08?w=800&q=80',
      description: 'Nestled in the Virunga Mountains, Volcanoes National Park is Rwanda\'s premier destination for mountain gorilla trekking. The park protects the Rwandan section of the Virunga mountain range, which spans three countries. Beyond gorillas, the park is home to the rare golden monkeys, diverse bird species, and five volcanic peaks. The bamboo forests and afro-alpine vegetation create a mystical atmosphere. This park was also the base for Dian Fossey\'s groundbreaking gorilla research.',
      duration: '3-4 Days',
      highlights: ['Mountain Gorilla Encounters', 'Golden Monkey Tracking', 'Volcano Hiking', 'Dian Fossey Tomb Visit']
    },
    {
      id: 5,
      name: 'Zanzibar Archipelago',
      country: 'Tanzania',
      category: 'beach',
      image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&q=80',
      description: 'Zanzibar is an archipelago off the coast of Tanzania, famous for its pristine white sand beaches, crystal-clear turquoise waters, and rich cultural heritage. Stone Town, the historic heart of Zanzibar City, is a UNESCO World Heritage Site with winding alleyways, bustling bazaars, and stunning Swahili architecture. The islands offer world-class diving and snorkeling, spice plantations to explore, and a fascinating blend of African, Arab, and Indian influences that have shaped its unique culture and cuisine.',
      duration: '5-7 Days',
      highlights: ['White Sand Beaches', 'Stone Town Heritage', 'Spice Farm Tours', 'Coral Reef Snorkeling']
    },
    {
      id: 6,
      name: 'Mount Kilimanjaro',
      country: 'Tanzania',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50b0?w=800&q=80',
      description: 'Mount Kilimanjaro, Africa\'s highest peak at 5,895 meters, is a dormant volcano offering one of the world\'s most accessible high-altitude climbs. No technical climbing skills are required, making it possible for determined trekkers to reach the summit. The mountain features five distinct climate zones - from tropical rainforest at the base to arctic conditions at the peak. Several routes are available, including the popular Machame and Marangu routes, each offering unique perspectives of this majestic mountain.',
      duration: '7-10 Days',
      highlights: ['Summit Uhuru Peak', 'Five Climate Zones', 'Glaciers and Ice Fields', 'Sunrise from the Roof of Africa']
    },
    {
      id: 7,
      name: 'Lake Victoria',
      country: 'Uganda',
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      description: 'Lake Victoria is Africa\'s largest lake and the world\'s second-largest freshwater lake by surface area. Shared by Uganda, Kenya, and Tanzania, it\'s the source of the White Nile and supports millions of people. The Ugandan shores offer peaceful fishing villages, beautiful islands like the Ssese Islands, and incredible birdwatching opportunities. Experience traditional fishing methods, explore lush tropical islands, and enjoy stunning sunsets over the vast expanse of water that feels more like an inland sea.',
      duration: '2-4 Days',
      highlights: ['Ssese Islands', 'Sport Fishing', 'Bird Watching', 'Traditional Fishing Villages']
    },
    {
      id: 8,
      name: 'Jinja - Source of the Nile',
      country: 'Uganda',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80',
      description: 'Jinja, known as the adventure capital of East Africa, sits at the source of the mighty Nile River. The town offers world-class white water rafting on the Nile\'s Grade 5 rapids, bungee jumping from a 44-meter platform, kayaking, stand-up paddleboarding, and river boarding. Beyond adrenaline activities, visit the actual source of the Nile at Jinja, enjoy sunset cruises, explore local markets, and experience the vibrant energy of this riverside town that has become a hub for adventure seekers.',
      duration: '2-3 Days',
      highlights: ['White Water Rafting', 'Bungee Jumping', 'Source of the Nile', 'Kayaking Adventures']
    },
    {
      id: 9,
      name: 'Ngorongoro Crater',
      country: 'Tanzania',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
      description: 'The Ngorongoro Crater is the world\'s largest intact volcanic caldera, formed millions of years ago when a massive volcano exploded and collapsed. The crater floor, 600 meters below the rim, is home to an estimated 25,000 large animals including the Big Five. This unique ecosystem is a haven for wildlife, with permanent water sources and rich grazing lands supporting dense populations of predators and prey. The crater walls create a natural enclosure, making it one of the best places in Africa to see wildlife.',
      duration: '2-3 Days',
      highlights: ['Crater Floor Safari', 'Big Five in One Day', 'Flamingos at Lake Magadi', 'Olduvai Gorge']
    },
    {
      id: 10,
      name: 'Lake Nakuru National Park',
      country: 'Kenya',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
      description: 'Lake Nakuru National Park is a haven for bird lovers and wildlife enthusiasts. While famous for its massive flocks of pink flamingos that create a stunning spectacle along the lake shores, the park is also a rhino sanctuary protecting both black and white rhinos. The park\'s varied habitats - from lake waters to surrounding woodland and grassland - support over 450 bird species and diverse mammals including lions, leopards, buffalo, and endangered Rothschild giraffes.',
      duration: '2-3 Days',
      highlights: ['Pink Flamingo Flocks', 'Rhino Sanctuary', '450+ Bird Species', 'Rothschild Giraffes']
    },
    {
      id: 11,
      name: 'Kidepo Valley National Park',
      country: 'Uganda',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1535338623465-c1aa3b671af7?w=800&q=80',
      description: 'Kidepo Valley National Park is Uganda\'s most remote and least visited park, offering a true wilderness experience. Located in the rugged, semi-arid valleys between Uganda\'s borders with Sudan and Kenya, the park boasts spectacular scenery with mountains, valleys, and vast open savannah. Wildlife includes lions, elephants, buffalo, and unique species like cheetahs, ostriches, and bat-eared foxes found nowhere else in Uganda. The isolation adds to its appeal for adventurous travelers.',
      duration: '3-5 Days',
      highlights: ['Remote Wilderness', 'Unique Wildlife Species', 'Karamojong Culture', 'Dramatic Landscapes']
    },
    {
      id: 12,
      name: 'Mombasa Beaches',
      country: 'Kenya',
      category: 'beach',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
      description: 'Mombasa, Kenya\'s coastal jewel, offers pristine white sand beaches along the Indian Ocean, rich Swahili culture, and historic sites. The beaches - including Diani, Nyali, and Bamburi - feature coral reefs perfect for snorkeling and diving. Fort Jesus, a UNESCO World Heritage Site, tells the story of the region\'s colonial past. The Old Town\'s narrow streets reveal centuries of Arab, Portuguese, and British influence. Enjoy fresh seafood, water sports, and the warm hospitality of the coast.',
      duration: '4-7 Days',
      highlights: ['Diani Beach Paradise', 'Marine Parks', 'Fort Jesus', 'Old Town Exploration']
    },
    {
      id: 13,
      name: 'Rwenzori Mountains',
      country: 'Uganda',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      description: 'The Rwenzori Mountains, known as the "Mountains of the Moon," offer some of Africa\'s most challenging and rewarding trekking experiences. This UNESCO World Heritage Site features Africa\'s third highest peak, Margherita, at 5,109 meters. The mountains showcase unique afro-alpine vegetation, glacial lakes, and the last equatorial glaciers in Africa. Trek through multiple vegetation zones from tropical rainforest to snow and ice, encountering giant lobelias, heathers, and groundsels along the way.',
      duration: '7-10 Days',
      highlights: ['Margherita Peak Summit', 'Equatorial Glaciers', 'Alpine Lakes', 'Unique Flora']
    },
    {
      id: 14,
      name: 'Lake Kivu',
      country: 'Rwanda',
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',
      description: 'Lake Kivu, one of Africa\'s Great Lakes, offers serene beauty with its sparkling waters surrounded by steep green hills. The lake forms part of Rwanda\'s western border with the Democratic Republic of Congo. Towns like Gisenyi and Kibuye provide beach resorts, water sports, and stunning sunsets. The lake is unique as one of three known "exploding lakes," though it poses no danger to visitors. Explore coffee plantations, kayak to islands, and enjoy the peaceful atmosphere of this highland lake.',
      duration: '3-5 Days',
      highlights: ['Beach Relaxation', 'Island Hopping', 'Coffee Plantation Tours', 'Water Sports']
    },
    {
      id: 15,
      name: 'Amboseli National Park',
      country: 'Kenya',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&q=80',
      description: 'Amboseli National Park is famous for its large elephant herds and spectacular views of Mount Kilimanjaro, Africa\'s highest peak. The park\'s varied landscape includes dried-up lake beds, wetlands fed by underground springs, savannah, and woodlands. This diversity supports abundant wildlife including lions, cheetahs, buffalo, zebras, and over 400 bird species. The elephants of Amboseli are among the most photographed in the world, often seen with Kilimanjaro\'s snow-capped peak in the background.',
      duration: '2-3 Days',
      highlights: ['Kilimanjaro Views', 'Large Elephant Herds', 'Observation Hill', 'Maasai Community']
    },
    {
      id: 16,
      name: 'Queen Elizabeth National Park',
      country: 'Uganda',
      category: 'wildlife',
      image: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
      description: 'Queen Elizabeth National Park is Uganda\'s most popular savannah reserve, famous for its tree-climbing lions in the Ishasha sector and boat cruises on the Kazinga Channel. The channel connects Lake Edward and Lake George and hosts one of the greatest concentrations of hippos in Africa, along with massive Nile crocodiles. The park\'s diverse ecosystems include sprawling savannah, humid forests, sparkling lakes, and fertile wetlands, supporting 95 mammal species and over 600 bird species.',
      duration: '3-4 Days',
      highlights: ['Tree-climbing Lions', 'Kazinga Channel Cruise', 'Chimp Tracking', 'Crater Lakes']
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

  // Get visible destinations
  const visibleDestinations = filteredDestinations.slice(0, visibleCount);
  const hasMore = visibleCount < filteredDestinations.length;

  // Load more function
  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 4, filteredDestinations.length)); // Load 4 at a time
      setIsLoading(false);
    }, 600); // Reduced timeout
  };

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchQuery, selectedCategory, selectedCountry]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-amber-50">
      {/* Hero Section with Optimized Image */}
      <div className="relative overflow-hidden h-[400px] sm:h-[500px] md:h-[600px]">
        {/* Optimized Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80&auto=format&fit=crop"
            alt="East African Safari"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="text-center w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 sm:mb-6">
              <MapPin className="w-4 h-4 text-amber-200" />
              <span className="text-amber-100 text-sm font-medium tracking-wide">
                Explore East Africa
              </span>
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Discover Amazing Destinations
            </h1>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 px-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              From wildlife safaris to pristine beaches, adventure peaks to serene lakes - 
              explore the best of Uganda, Kenya, Tanzania, and Rwanda
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto px-4">
              <div className="relative">
                <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations..."
                  className="w-full pl-11 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base text-gray-900 bg-white/95 backdrop-blur-sm shadow-xl focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        {/* Filters Section */}
        <div className="mb-12">
          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-amber-700" />
              <h3 
                className="text-lg font-bold text-gray-900"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Filter by Category
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-xl scale-105'
                        : 'bg-white text-gray-700 hover:bg-amber-50 border-2 border-gray-200 hover:border-amber-300 shadow-md'
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-amber-600'}`} />
                    <span>{category.name}</span>
                    {isActive && <Check className="w-4 h-4" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Country Filters */}
          <div>
            <h3 
              className="text-lg font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Filter by Country
            </h3>
            <div className="flex flex-wrap gap-3">
              {countries.map((country) => {
                const isActive = selectedCountry === country.id;
                return (
                  <button
                    key={country.id}
                    onClick={() => setSelectedCountry(country.id)}
                    className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-xl scale-105'
                        : 'bg-white text-gray-700 hover:bg-amber-50 border-2 border-gray-200 hover:border-amber-300 shadow-md'
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {country.name}
                    {isActive && <Check className="w-4 h-4 inline ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-lg">
              Showing <span className="font-bold text-gray-900">{visibleDestinations.length}</span> of{' '}
              <span className="font-bold text-gray-900">{filteredDestinations.length}</span> destinations
            </p>
          </div>
          {filteredDestinations.length > 0 && (
            <div className="text-sm text-gray-500">
              {hasMore && `${filteredDestinations.length - visibleCount} more to explore`}
            </div>
          )}
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-12 h-12 text-amber-600" />
            </div>
            <h3 
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              No destinations found
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedCountry('all');
              }}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-8">
              {visibleDestinations.map((destination, index) => (
                <div
                  key={destination.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Image Section */}
                    <div className="md:col-span-2 relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      
                      {/* Country Badge */}
                      <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/95 backdrop-blur-sm text-amber-900 text-sm font-bold uppercase rounded-lg shadow-lg">
                        {destination.country}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-3 p-6 md:p-8">
                      <div className="flex items-start justify-between mb-3">
                        <h3 
                          className="text-2xl md:text-3xl font-bold text-gray-900"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {destination.name}
                        </h3>
                      </div>

                      <p 
                        className="text-gray-700 mb-5 leading-relaxed text-base"
                        style={{ fontFamily: "'Crimson Text', serif" }}
                      >
                        {destination.description}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center gap-2 mb-4 text-gray-600">
                        <Clock className="w-5 h-5 text-amber-600" />
                        <span className="font-medium">{destination.duration}</span>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                          Key Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-amber-50 text-amber-800 text-sm font-medium rounded-lg border border-amber-200"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Section */}
            {hasMore && (
              <div ref={loadMoreRef} className="mt-12 text-center">
                {isLoading ? (
                  <div className="flex flex-col items-center gap-4">
                    <Loader className="w-12 h-12 text-amber-600 animate-spin" />
                    <p className="text-gray-600 font-medium">Loading more destinations...</p>
                  </div>
                ) : (
                  <button
                    onClick={loadMore}
                    className="px-8 py-4 bg-white hover:bg-amber-50 text-amber-700 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl border-2 border-amber-200 hover:border-amber-400 transform hover:scale-105"
                  >
                    Load More Destinations
                  </button>
                )}
              </div>
            )}

            {/* End of Results */}
            {!hasMore && filteredDestinations.length > 4 && (
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">You've viewed all {filteredDestinations.length} destinations</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AllDestinations;