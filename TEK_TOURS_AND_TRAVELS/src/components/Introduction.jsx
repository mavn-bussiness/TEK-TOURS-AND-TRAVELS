import React from 'react';
import { ArrowUpRight, Leaf, Compass, Sparkles } from 'lucide-react';

const Introduction = () => {
  return (
    <section
      id="about"
      className="relative bg-white overflow-hidden flex items-center"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-stone-50 to-amber-50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <div>
              <p
                className="text-sm tracking-widest uppercase text-amber-600 font-semibold mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Tek Tours & Travels
              </p>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mb-4"
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

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-4 py-4">
              <div className="flex flex-col items-start gap-2">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Compass className="w-5 h-5 text-amber-700" />
                </div>
                <span
                  className="text-sm font-medium text-gray-800"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Curated Experiences
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Leaf className="w-5 h-5 text-amber-700" />
                </div>
                <span
                  className="text-sm font-medium text-gray-800"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Responsible Travel
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Sparkles className="w-5 h-5 text-amber-700" />
                </div>
                <span
                  className="text-sm font-medium text-gray-800"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Personal Touch
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                className="inline-flex items-center gap-2 px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold tracking-wide rounded-full transition-all duration-300 shadow-lg hover-lift"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Explore Our Approach
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right - Image Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Image */}
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
                alt="Travel experience"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 md:p-6">
                  <h3
                    className="text-xl md:text-2xl text-gray-900 mb-3"
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