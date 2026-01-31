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
                Tek Tours & Travels
              </p>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                Thoughtfully crafted journeys, designed to inspire
              </h2>

              <p
                className="text-base md:text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                Tek Tours & Travels is a newly established travel company built on a simple idea —
                travel should feel personal, intentional, and unforgettable. We design experiences
                that go beyond sightseeing, allowing you to connect deeply with places, cultures,
                and moments that matter.
              </p>
            </div>

            {/* Values - Responsive grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4">
              <div className="flex flex-col items-start gap-2">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                </div>
                <span
                  className="text-xs sm:text-sm font-medium text-gray-800"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Curated Experiences
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                </div>
                <span
                  className="text-xs sm:text-sm font-medium text-gray-800"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Responsible Travel
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                </div>
                <span
                  className="text-xs sm:text-sm font-medium text-gray-800"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Personal Touch
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold tracking-wide rounded-full transition-all duration-300 shadow-lg hover-lift text-sm sm:text-base"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Explore Our Approach
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right - Image Card - Better responsive handling */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
            {/* Image with responsive aspect ratio */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
                alt="Travel experience"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-5 md:p-6">
                  <h3
                    className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 sm:mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    A new journey, built with intention
                  </h3>

                  <p
                    className="text-sm md:text-base text-gray-700 leading-relaxed"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    From curated destinations to carefully planned itineraries, every journey
                    we offer is designed with care. As a growing brand, we focus on quality,
                    attention to detail, and travel experiences that feel authentic.
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