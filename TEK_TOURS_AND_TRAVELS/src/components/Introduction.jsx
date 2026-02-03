import React from 'react';
import { ArrowUpRight, Leaf, Compass, Sparkles } from 'lucide-react';

const Introduction = () => {
  return (
    <section
      id="about"
      className="relative bg-white overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-stone-50 to-amber-50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <p
                className="text-xs sm:text-sm tracking-widest uppercase text-amber-600 font-semibold mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                The Spirit of Tek Tours & Travels
              </p>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                The Pearl of Africa, <br />
                <span className="italic font-normal">Personalized for You</span>
              </h2>

              <p
                className="text-base md:text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                At Tek Tours & Travels, we believe Uganda is more than a destination; it's a profound connection to the natural world. From the misty heights of Bwindi to the thundering waters of the Nile, we design intentional journeys that bypass the generic "tourist track" to reveal the true soul of our home.
              </p>
            </div>

            {/* Values - Tailored to Safari Context */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4">
              <div className="flex flex-col items-start gap-2">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-tighter">
                  Bespoke Routes
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="p-2 sm:p-3 bg-emerald-100 rounded-lg">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-tighter">
                  Eco-Conscious
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-tighter">
                  Local Insight
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-stone-900 hover:bg-amber-800 text-white font-semibold tracking-wide rounded-full transition-all duration-300 shadow-lg hover-lift text-sm sm:text-base"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Discover Our Story
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right - High-Quality Safari Interaction Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[650px]">
              <img
                src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1200&q=80" 
                alt="Silverback Gorilla in Bwindi"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Card - Responsive positioning */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 md:p-8 shadow-xl">
                  <h3
                    className="text-xl md:text-2xl text-gray-900 mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    Your adventure, reimagined.
                  </h3>

                  <p
                    className="text-sm md:text-base text-gray-700 leading-relaxed italic"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    "We don't just book trips. We curate the moments between the milestones—the quiet morning mist, the local shared meal, and the thrill of the first sighting."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;