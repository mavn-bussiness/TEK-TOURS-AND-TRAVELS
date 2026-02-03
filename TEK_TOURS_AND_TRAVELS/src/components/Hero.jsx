import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: 'https://media.istockphoto.com/id/2234874849/photo/a-wild-and-endangered-gorilla-in-the-bush.webp?s=1024x1024&w=is&k=20&c=e86pB22UY9xN88gprJrZm0qiN527vSltl-4-papeYeQ=',
      title: 'Mountain Gorilla Trekking',
      subtitle: 'Experience Uganda\'s most iconic wildlife encounter',
      cta: 'Book Gorilla Trek'
    },
    {
      image: 'https://images.unsplash.com/photo-1535082623926-b39352a03fb7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Unforgettable Safari Adventures',
      subtitle: 'Create memories that last a lifetime in the wild',
      cta: 'Safari Packages'
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ab/2a/07/murchison-falls-view.jpg?w=1000&h=-1&s=1',
      title: 'Murchison Falls Safari',
      subtitle: 'Where the Nile thunders through dramatic gorges',
      cta: 'Explore Murchison'
    },
    {
      image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1920&q=80',
      title: 'Chimpanzee Tracking',
      subtitle: 'Encounter our closest relatives in Kibale Forest',
      cta: 'Primate Tours'
    },
    {
      image: 'https://images.unsplash.com/photo-1741850821428-01abc97866b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Safari Camping',
      subtitle: 'Sleep under the stars in comfort and style',
      cta: 'View Camps'
    },
    {
      image: 'https://images.unsplash.com/photo-1551357140-c61c4f40224e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Lake Bunyonyi Relaxation',
      subtitle: 'Unwind on Africa\'s most scenic lake with 29 islands',
      cta: 'Lake Retreats'
    },
    {
      image: 'https://images.unsplash.com/photo-1621414050946-1b936a78491f?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Rwenzori Mountains Trek',
      subtitle: 'Conquer the legendary Mountains of the Moon',
      cta: 'Mountain Expeditions'
    },
    {
      image: 'https://images.unsplash.com/photo-1629248457649-b082812aea6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Jinja Adventure Capital',
      subtitle: 'White-water rafting at the Source of the Nile',
      cta: 'Adventure Tours'
    },
    {
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80',
    title: 'Tree-Climbing Lions',
    subtitle: 'Witness the unique behavior of the Ishasha kings',
    cta: 'Queen Elizabeth Park'
  },
  {
    image: 'https://images.unsplash.com/photo-1667817418453-3489bb60ce9b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Kidepo Valley Wilderness',
    subtitle: 'Discover Africa\'s most hidden and rugged gem',
    cta: 'Explore Kidepo'
  },
  {
    image: 'https://images.unsplash.com/photo-1660675133902-acd1b057f75d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cultural Heritage',
    subtitle: 'Meet the vibrant communities and traditions of Uganda',
    cta: 'Cultural Tours'
  },
  {
    image: 'https://images.unsplash.com/photo-1661885869635-eeb583e3378f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'The Source of the Nile',
    subtitle: 'Stand at the beginning of the world\'s longest river',
    cta: 'Visit Jinja'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1722686568915-b40ee8a6c072?q=80&w=787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Birding Paradise',
    subtitle: 'Home to over 1,000 species, including the Shoebill Stork',
    cta: 'Birding Safaris'
  }
];
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  return (
    <section id="home" className="relative w-full">
      {/* Hero Slider - Proper height on all devices */}
      <div className="relative h-screen bg-slate-900">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-800 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover ${index === currentSlide ? 'slide-enter' : ''}`}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
              <div className="grain-overlay"></div>
            </div>

            {/* Content - Responsive spacing */}
            {index === currentSlide && (
              <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto w-full">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Slide Title - Responsive text sizes */}
                    <h2 
                      className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 leading-tight text-shadow-luxury fade-in"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
                    >
                      {slide.title}
                    </h2>

                    {/* Decorative line */}
                    <div className="flex justify-center mb-6 sm:mb-8 fade-in-delay-1">
                      <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    </div>

                    {/* Subtitle - Responsive text */}
                    <p 
                      className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 font-light leading-relaxed fade-in-delay-1 px-4"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 fade-in-delay-2 px-4">
                      <button 
                        className="px-8 sm:px-10 py-3 sm:py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold tracking-wide hover-lift rounded-sm shadow-xl transition-all duration-300 w-full sm:w-auto"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {slide.cta}
                      </button>
                      <button 
                        className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-amber-900 transition-all duration-300 rounded-sm w-full sm:w-auto"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Arrows - Smaller on mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`nav-dot h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 sm:w-10 bg-amber-400 active' 
                  : 'w-1 sm:w-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator - Hide on mobile */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Scroll
            </span>
            <div className="w-px h-10 sm:h-12 bg-gradient-to-b from-white/70 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;