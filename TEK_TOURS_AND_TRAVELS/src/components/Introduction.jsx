import React from "react";
import { ArrowUpRight, Leaf, Compass, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section
      id="about"
      className="relative bg-white overflow-hidden"
      style={{ minHeight: "100vh" }}
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
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                The World is Yours, <br />
                <span className="italic font-normal">
                  Let Us Take You There
                </span>
              </h2>

              <p
                className="text-base md:text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                At Tek Tours & Travels, we believe every journey should be more
                than a trip — it should be a story worth telling. From wildlife
                safaris and mountain treks to cultural city breaks and beach
                escapes, we craft travel experiences tailored to who you are and
                where you've always dreamed of going.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4">
              <div className="flex flex-col items-start gap-2">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-tighter">
                  Tailored Trips
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="p-2 sm:p-3 bg-emerald-100 rounded-lg">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-tighter">
                  Responsible Travel
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-tighter">
                  Expert Guides
                </span>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-stone-900 hover:bg-amber-800 text-white font-semibold tracking-wide rounded-full transition-all duration-300 shadow-lg text-sm sm:text-base"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Discover Our Story
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right - Image with layered design */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative background accent */}
            <div
              className="absolute -top-4 -right-4 w-full h-full rounded-2xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #b8975a22, #78b87e22)",
                zIndex: 0,
              }}
            />

            {/* Main image frame */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ zIndex: 1 }}
            >
              <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] lg:h-[560px]">
                {/* Primary image — two travelers on the Great Wall */}
                <img
                  src="/images/IMG_20230826_145742.jpg"
                  alt="Travelers on the Great Wall of China"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center center" }}
                />

                {/* Gradient overlay — lighter so image stays bright */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Destination badge — top left */}
                <div className="absolute top-5 left-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      background: "rgba(10,10,15,0.55)",
                      backdropFilter: "blur(8px)",
                      color: "#d4af6e",
                      border: "1px solid rgba(212,175,110,0.35)",
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    Beijing, China
                  </span>
                </div>
              </div>
            </div>

            {/* Info card — sits BELOW the image, never overlaps left column */}
            <div
              className="mt-4 rounded-xl p-5 shadow-lg border border-amber-100"
              style={{ background: "rgba(255,255,255,0.97)" }}
            >
              <div className="flex items-start gap-4">
                {/* Small thumbnail */}
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                  <img
                    src="/images/IMG_20230828_131906.jpg"
                    alt="Tek Tours group at Temple of Heaven"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center bottom" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex -space-x-1.5">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white bg-amber-200 flex items-center justify-center"
                          style={{ zIndex: 3 - i }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="#92650a"
                          >
                            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <span
                      className="text-xs text-gray-400 font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Real Tek Tours travelers
                    </span>
                  </div>
                  <h3
                    className="text-base md:text-lg text-gray-900 font-bold leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Your journey, our passion.
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed italic mt-0.5"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    "We don't just book trips. We craft experiences — from the
                    first inquiry to the last memory made."
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
