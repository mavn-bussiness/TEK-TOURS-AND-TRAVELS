import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Calendar,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Shield,
  Check,
  ArrowRight,
  ArrowLeft,
  Sun,
  CloudRain,
  Thermometer,
  Info,
  Phone,
  Mail,
  ChevronRight,
  Heart,
  Share2
} from 'lucide-react';

const DestinationDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // In production, this would be fetched from API based on the ID
  // API: GET /api/destinations/:id
  const destination = {
    id: parseInt(id) || 1,
    name: 'Bwindi Impenetrable Forest',
    country: 'Uganda',
    region: 'Southwestern Uganda',
    category: 'Wildlife & Nature',
    tagline: 'Home to Half the World\'s Mountain Gorillas',
    description: 'Bwindi Impenetrable National Park is a UNESCO World Heritage Site and one of Africa\'s most biodiverse forests. This ancient rainforest is home to approximately half of the world\'s remaining mountain gorillas, making it one of the most important conservation areas on the planet.',
    longDescription: `Nestled in southwestern Uganda, Bwindi Impenetrable Forest is a pristine wilderness that has remained largely unchanged for over 25,000 years. The park encompasses 331 square kilometers of mountainous terrain covered in dense tropical rainforest, creating a mystical landscape shrouded in mist and home to extraordinary wildlife.

The park's most famous residents are the mountain gorillas, with over 450 individuals living in the forest - representing nearly half of the world's population. Trekking through the dense undergrowth to encounter these gentle giants in their natural habitat is consistently rated as one of the world's most profound wildlife experiences.

Beyond gorillas, Bwindi is a biodiversity hotspot supporting 120 species of mammals, 350 species of birds (including 23 Albertine Rift endemics), 310 species of butterflies, and over 1,000 flowering plant species. The forest's multiple ecosystems range from lowland to montane forests, creating diverse habitats across its dramatic elevation changes of 1,160m to 2,607m.`,
    
    images: [
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80',
      'https://images.unsplash.com/photo-1535262412227-95c06e741c08?w=1200&q=80',
      'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=1200&q=80',
      'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&q=80'
    ],

    highlights: [
      'Gorilla trekking with habituated gorilla families',
      'Over 350 bird species including 23 Albertine Rift endemics',
      'Guided nature walks through ancient rainforest',
      'Batwa cultural experiences with indigenous people',
      'Waterfall hikes and forest canopy views',
      'Community village tours and craft markets'
    ],

    activities: [
      {
        name: 'Gorilla Trekking',
        duration: '4-8 hours',
        difficulty: 'Moderate to Challenging',
        price: '$700 per permit',
        description: 'Trek through the forest to spend one hour with a habituated gorilla family. Limited to 8 people per group.'
      },
      {
        name: 'Bird Watching',
        duration: '3-5 hours',
        difficulty: 'Easy to Moderate',
        price: '$50 per person',
        description: 'Guided birding walks to spot endemic and rare species in the montane and lowland forests.'
      },
      {
        name: 'Nature Walks',
        duration: '2-4 hours',
        difficulty: 'Easy',
        price: '$30 per person',
        description: 'Explore forest trails, waterfalls, and learn about the incredible biodiversity of the park.'
      },
      {
        name: 'Batwa Cultural Experience',
        duration: '3-4 hours',
        difficulty: 'Easy',
        price: '$80 per group',
        description: 'Meet the indigenous Batwa people and learn about their traditional forest lifestyle and culture.'
      }
    ],

    packages: [
      {
        id: 1,
        name: '3-Day Gorilla Trekking Safari',
        duration: '3 Days, 2 Nights',
        price: 2500,
        groupSize: '4-8',
        includes: ['Gorilla permit', 'Accommodation', 'All meals', 'Transportation', 'Park fees']
      },
      {
        id: 2,
        name: '5-Day Bwindi & Queen Elizabeth Combo',
        duration: '5 Days, 4 Nights',
        price: 3200,
        groupSize: '6-10',
        includes: ['Gorilla permit', 'Game drives', 'Boat safari', 'Accommodation', 'All meals']
      },
      {
        id: 3,
        name: '4-Day Birding & Gorilla Adventure',
        duration: '4 Days, 3 Nights',
        price: 2800,
        groupSize: '4-6',
        includes: ['Gorilla permit', 'Birding guide', 'Accommodation', 'All meals', 'Park fees']
      }
    ],

    bestTimeToVisit: {
      peak: 'June to September & December to February',
      description: 'Dry seasons offer easier trekking conditions, though gorillas can be tracked year-round.',
      wetSeason: 'March to May & September to November',
      note: 'Wet season offers fewer crowds and lush green scenery, but trails can be muddy and slippery.'
    },

    weather: {
      temperature: '15-25°C (59-77°F)',
      rainfall: 'Year-round, heavier March-May & Sept-Nov',
      climate: 'Cool and misty in higher altitudes'
    },

    accessibility: {
      fromKampala: '8-9 hours by road',
      nearestAirport: 'Kihihi Airstrip (1 hour) or Kisoro Airstrip (1.5 hours)',
      roadCondition: 'Paved to Kabale, then murram roads to park'
    },

    accommodation: {
      luxury: ['Sanctuary Gorilla Forest Camp', 'Bwindi Lodge', 'Clouds Mountain Gorilla Lodge'],
      midrange: ['Silverback Lodge', 'Mahogany Springs', 'Engagi Lodge'],
      budget: ['Buhoma Community Rest Camp', 'Ride 4 a Woman Guesthouse', 'Rushaga Gorilla Camp']
    },

    travelTips: [
      'Book gorilla permits at least 3-6 months in advance',
      'Bring waterproof hiking boots and rain gear',
      'Pack layers as temperatures vary with altitude',
      'Hire a porter to support local community and help with bags',
      'Minimum age for gorilla trekking is 15 years',
      'Maintain 7-meter distance from gorillas',
      'Keep voices low and movements calm during encounters'
    ],

    conservation: {
      status: 'UNESCO World Heritage Site',
      establishment: '1991',
      area: '331 square kilometers',
      gorillaPopulation: '459 individuals (2020 census)',
      significance: 'Critical habitat for half of world\'s mountain gorillas'
    },

    rating: 4.9,
    reviews: 342,
    reviewsData: [
      {
        author: 'Sarah M.',
        date: 'December 2025',
        rating: 5,
        title: 'Life-Changing Experience',
        content: 'Tracking gorillas in Bwindi was the highlight of our African adventure. The trek was challenging but absolutely worth it. Spending an hour with the gorilla family was magical and humbling.'
      },
      {
        author: 'John K.',
        date: 'November 2025',
        rating: 5,
        title: 'Incredible Wildlife',
        content: 'Beyond the gorillas, the forest itself is stunning. We saw so many birds and monkeys. Our guide was knowledgeable and the accommodation was comfortable. Highly recommended!'
      },
      {
        author: 'Emma L.',
        date: 'October 2025',
        rating: 4.5,
        title: 'Worth Every Penny',
        content: 'The permit is expensive but it goes toward conservation. The experience is once-in-a-lifetime. Just be prepared for a strenuous hike and muddy conditions.'
      }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: destination.name,
        text: destination.tagline,
        url: window.location.href
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Gallery */}
      <div className="relative">
        {/* Main Image */}
        <div className="relative h-[400px] md:h-[600px] overflow-hidden">
          <img
            src={destination.images[selectedImage]}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Breadcrumb */}
          <div className="absolute top-6 left-6 z-20">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">{destination.name}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-6 right-6 z-20 flex gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all"
            >
              <Share2 className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="inline-block px-4 py-2 bg-amber-600 rounded-full mb-4">
                <span className="text-white text-sm font-semibold">{destination.category}</span>
              </div>
              
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {destination.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/90 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{destination.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="text-lg font-semibold">{destination.rating}</span>
                  <span className="text-white/70">({destination.reviews} reviews)</span>
                </div>
              </div>

              <p 
                className="text-xl md:text-2xl text-white/90 max-w-3xl"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {destination.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="bg-black/90 py-4">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {destination.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden transition-all ${
                    selectedImage === index ? 'ring-4 ring-amber-500 scale-105' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
              {['overview', 'activities', 'packages', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold capitalize transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? 'text-amber-600 border-b-2 border-amber-600'
                      : 'text-gray-600 hover:text-amber-600'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
              {activeTab === 'overview' && (
                <>
                  {/* Description */}
                  <div>
                    <h2 
                      className="text-3xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      About {destination.name}
                    </h2>
                    <p 
                      className="text-gray-700 text-lg leading-relaxed mb-4"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                      {destination.description}
                    </p>
                    <p 
                      className="text-gray-700 leading-relaxed whitespace-pre-line"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                      {destination.longDescription}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h3 
                      className="text-2xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Highlights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                          <Check className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Travel Tips */}
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Info className="w-6 h-6 text-blue-600" />
                      <h3 
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Travel Tips
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {destination.travelTips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {activeTab === 'activities' && (
                <div className="space-y-6">
                  <h2 
                    className="text-3xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Things to Do
                  </h2>
                  {destination.activities.map((activity, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {activity.name}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{activity.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Info className="w-4 h-4" />
                              <span>{activity.difficulty}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-amber-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {activity.price}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{activity.description}</p>
                      <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all">
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'packages' && (
                <div className="space-y-6">
                  <h2 
                    className="text-3xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Tour Packages
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {destination.packages.map((pkg) => (
                      <div key={pkg.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {pkg.name}
                        </h3>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{pkg.groupSize}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-2 font-semibold">Includes:</p>
                          <div className="flex flex-wrap gap-2">
                            {pkg.includes.map((item, i) => (
                              <span key={i} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div>
                            <p className="text-sm text-gray-600">From</p>
                            <p className="text-3xl font-bold text-amber-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                              ${pkg.price}
                            </p>
                          </div>
                          <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2">
                            <span>Book</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 
                      className="text-3xl font-bold text-gray-900"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Traveler Reviews
                    </h2>
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                      <span className="text-2xl font-bold text-gray-900">{destination.rating}</span>
                      <span className="text-gray-600">({destination.reviews} reviews)</span>
                    </div>
                  </div>

                  {destination.reviewsData.map((review, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-gray-900">{review.author}</h4>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">{review.title}</h5>
                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Widget & Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Booking Card */}
              <div className="bg-white border-2 border-amber-600 rounded-2xl p-6 shadow-xl">
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Plan Your Visit
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Dates</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3-4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>

                <Link
                  to="/booking"
                  className="block w-full py-4 bg-amber-600 hover:bg-amber-700 text-white text-center font-bold rounded-lg transition-all mb-3"
                >
                  Check Availability
                </Link>
                
                <button className="w-full py-3 bg-white border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us
                </button>
              </div>

              {/* Quick Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Quick Information</h4>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Sun className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Best Time to Visit</p>
                      <p className="text-gray-600">{destination.bestTimeToVisit.peak}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Thermometer className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Temperature</p>
                      <p className="text-gray-600">{destination.weather.temperature}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Plane className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Getting There</p>
                      <p className="text-gray-600">{destination.accessibility.fromKampala}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">{destination.region}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-xl mb-4">Need Help Planning?</h4>
                <p className="mb-6 text-amber-100">Our travel experts are ready to create your perfect itinerary.</p>
                
                <div className="space-y-3">
                  <a href="tel:+256705407794" className="flex items-center gap-3 text-white hover:text-amber-100 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>+256 705-407-794</span>
                  </a>
                  <a href="mailto:info@tektours.com" className="flex items-center gap-3 text-white hover:text-amber-100 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>info@tektours.com</span>
                  </a>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default DestinationDetail;