import React, { useState } from 'react';
import { X, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Gallery images - using images already present in the website
  const galleryImages = [
    {
      id: 1,
      url: 'https://media.istockphoto.com/id/2234874849/photo/a-wild-and-endangered-gorilla-in-the-bush.webp?s=1024x1024&w=is&k=20&c=e86pB22UY9xN88gprJrZm0qiN527vSltl-4-papeYeQ=',
      title: 'Mountain Gorilla',
      category: 'Wildlife'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1535082623926-b39352a03fb7?w=1920&auto=format&fit=crop&q=80',
      title: 'Safari Adventure',
      category: 'Safari'
    },
    {
      id: 3,
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ab/2a/07/murchison-falls-view.jpg?w=1200&h=-1&s=1',
      title: 'Murchison Falls',
      category: 'Waterfalls'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=1920&q=80&auto=format&fit=crop',
      title: 'Chimpanzee',
      category: 'Wildlife'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1741850821428-01abc97866b3?w=1920&auto=format&fit=crop&q=80',
      title: 'Safari Camping',
      category: 'Adventure'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1551357140-c61c4f40224e?w=1920&auto=format&fit=crop&q=80',
      title: 'Lake Bunyonyi',
      category: 'Landscapes'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1621414050946-1b936a78491f?w=1920&auto=format&fit=crop&q=80',
      title: 'Rwenzori Mountains',
      category: 'Mountains'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=1920&auto=format&fit=crop&q=80',
      title: 'Jinja Rapids',
      category: 'Adventure'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80&auto=format&fit=crop',
      title: 'Tree-Climbing Lions',
      category: 'Wildlife'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1667817418453-3489bb60ce9b?w=1920&auto=format&fit=crop&q=80',
      title: 'Kidepo Valley',
      category: 'Safari'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1660675133902-acd1b057f75d?w=1920&auto=format&fit=crop&q=80',
      title: 'Cultural Heritage',
      category: 'Culture'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1661885869635-eeb583e3378f?w=1920&auto=format&fit=crop&q=80',
      title: 'Source of the Nile',
      category: 'Landmarks'
    },
    {
      id: 13,
      url: 'https://plus.unsplash.com/premium_photo-1722686568915-b40ee8a6c072?w=1920&auto=format&fit=crop&q=80',
      title: 'Shoebill Stork',
      category: 'Wildlife'
    },
    {
      id: 14,
      url: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1200&q=80',
      title: 'Silverback Gorilla',
      category: 'Wildlife'
    }
  ];

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p
              className="text-xs sm:text-sm tracking-widest uppercase text-amber-400 font-semibold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Visual Journey
            </p>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
            >
              Photo Gallery
            </h1>

            <div className="flex justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>

            <p
              className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Explore the breathtaking beauty of Uganda through our lens
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-stone-50 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Filter Buttons */}
          <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Filter:
              </span>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${
                    activeFilter === category
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p
                      className="text-white font-semibold text-lg mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {image.title}
                    </p>
                    <p
                      className="text-amber-300 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <h3
                className="text-white text-2xl sm:text-3xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                {selectedImage.title}
              </h3>
              <p
                className="text-amber-400 text-sm tracking-widest uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;