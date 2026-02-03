import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryPreview = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef(null);

  // Subtle parallax on mouse move
  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  // Photos: staggered grid — varying sizes, offset positions
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=900&q=80",
      alt: "Gorilla in the wild",
      // top-left, tall
      style: { gridColumn: "1", gridRow: "1 / 3", objectPosition: "center" },
      parallax: { x: -8, y: -5 },
    },
    {
      src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80",
      alt: "Elephant on safari",
      // top-middle, square-ish
      style: { gridColumn: "2", gridRow: "1", objectPosition: "center top" },
      parallax: { x: 4, y: -3 },
    },
    {
      src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=80",
      alt: "Murchison Falls",
      // top-right, tall
      style: { gridColumn: "3", gridRow: "1 / 3", objectPosition: "center" },
      parallax: { x: 6, y: -7 },
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      alt: "Mountain landscape",
      // bottom-middle
      style: { gridColumn: "2", gridRow: "2", objectPosition: "center bottom" },
      parallax: { x: -3, y: 5 },
    },
  ];

  return (
    <section
      className="relative bg-[#0a0a0f] overflow-hidden"
      style={{ padding: "100px 0" }}
    >
      {/* ── Faint grain overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
          zIndex: 1,
        }}
      />

      {/* ── Ambient colour blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute rounded-full blur-3xl"
          style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(180,140,60,0.12) 0%, transparent 70%)", top: "-100px", left: "10%" }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(60,100,140,0.1) 0%, transparent 70%)", bottom: "-80px", right: "5%" }}
        />
      </div>

      <div className="relative" style={{ zIndex: 2 }}>
        {/* ── Top label ── */}
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-2 rounded-full border text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "#b8975a",
              borderColor: "rgba(184,151,90,0.3)",
              background: "rgba(184,151,90,0.08)",
            }}
          >
            Our Visual Stories
          </span>
        </div>

        {/* ── Headline — oversized, breaks visual weight ── */}
        <div className="text-center mb-14 px-6">
          <h2
            className="text-white leading-[1.02]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(52px, 8vw, 96px)",
              letterSpacing: "-0.02em",
            }}
          >
            Moments{" "}
            <span
              className="italic"
              style={{ color: "#c9e89d" }}
            >
              Captured
            </span>
            <br />
            In the Wild
          </h2>
        </div>

        {/* ── Photo mosaic + quote row ── */}
        <div
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => { setHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
          className="relative mx-auto px-6"
          style={{ maxWidth: 1200 }}
        >
          <div className="flex gap-4 items-stretch" style={{ height: 460 }}>

            {/* ── Photo grid (left ~65%) ── */}
            <div
              className="relative flex-1 rounded-2xl overflow-hidden"
              style={{ minWidth: 0 }}
            >
              {/* CSS grid mosaic */}
              <div
                className="absolute inset-0"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.1fr 1fr 1.1fr",
                  gridTemplateRows: "1fr 1fr",
                  gap: 6,
                }}
              >
                {photos.map((photo, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden"
                    style={{
                      ...photo.style,
                      borderRadius: i === 0 ? "14px 0 0 14px" : i === 2 ? "0 14px 14px 0" : 6,
                      transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
                      transform: hovered
                        ? `translate(${(mousePos.x - 0.5) * photo.parallax.x}px, ${(mousePos.y - 0.5) * photo.parallax.y}px)`
                        : "translate(0,0)",
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s ease",
                        transform: hovered ? "scale(1.04)" : "scale(1)",
                        filter: hovered ? "brightness(1.05) saturate(1.1)" : "brightness(0.9) saturate(0.95)",
                      }}
                    />
                    {/* per-photo scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              {/* Outer vignette over the whole mosaic */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  boxShadow: "inset 0 0 60px rgba(10,10,15,0.5)",
                }}
              />
            </div>

            {/* ── Quote panel (right ~35%) ── */}
            <div
              className="flex-shrink-0 flex flex-col justify-center px-8"
              style={{ width: "34%", minWidth: 280 }}
            >
              {/* Decorative open-quote mark */}
              <div
                className="mb-2 select-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 80,
                  lineHeight: 0.85,
                  color: "#b8975a",
                  opacity: 0.5,
                }}
              >
                "
              </div>

              <p
                className="text-white leading-relaxed mb-8"
                style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: 19,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                Every image reflects the raw beauty, adventure, and soul of
                Uganda — moments our travelers never forget.
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-4 mb-10">
                <div
                  className="rounded-full overflow-hidden flex-shrink-0"
                  style={{ width: 52, height: 52, border: "2px solid #b8975a" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                    alt="Safari Guide"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Senior Safari Guide
                  </p>
                  <p className="text-xs tracking-widest mt-0.5" style={{ fontFamily: "'Montserrat', sans-serif", color: "#b8975a" }}>
                    TEK TOURS & TRAVELS
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/gallery"
                className="group inline-flex items-center gap-3 w-fit"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="relative px-6 py-3 rounded-full font-semibold text-sm overflow-hidden"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    background: "linear-gradient(135deg, #b8975a, #d4af6e)",
                    color: "#0a0a0f",
                    transition: "filter 0.3s ease, transform 0.3s ease",
                    filter: "brightness(1)",
                  }}
                >
                  Explore Gallery
                </span>
                <ArrowRight
                  className="text-white transition-all duration-300"
                  style={{ width: 20, height: 20 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;