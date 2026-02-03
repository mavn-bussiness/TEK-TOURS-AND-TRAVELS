import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryPreview = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="grid lg:grid-cols-2 min-h-[420px]">
            
            {/* LEFT: Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1600&q=80"
                alt="Uganda Safari Gallery"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-center px-10 lg:px-14">
                <p
                  className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Our Visual Stories
                </p>

                <h2
                  className="text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Moments Captured <br /> In the Wild
                </h2>

                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-3 w-fit px-6 py-3 rounded-full bg-white text-gray-900 font-semibold transition-all duration-300 hover:bg-amber-600 hover:text-white group"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Explore Gallery
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* RIGHT: Content */}
            <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center px-10 lg:px-16">
              <div>
                <p
                  className="text-2xl lg:text-3xl text-white italic leading-relaxed mb-8"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  “Every image reflects the raw beauty, adventure, and soul of
                  Uganda — moments our travelers never forget.”
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                      alt="Safari Guide"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p
                      className="text-white font-semibold"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Senior Safari Guide
                    </p>
                    <p
                      className="text-amber-400 text-sm tracking-widest"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      TEK TOURS & TRAVELS
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative blur */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
