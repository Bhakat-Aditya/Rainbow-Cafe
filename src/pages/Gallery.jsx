import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import { GALLERY_IMAGES } from "../data/config";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from(".gallery-item", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <h1 className="text-5xl md:text-8xl font-['Oswald'] font-bold mb-12 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
          Cafe Gallery
        </h1>

        {/* Masonry-style column layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="gallery-item relative group overflow-hidden rounded-xl break-inside-avoid"
            >
              <img
                src={img.url}
                alt="Cafe Moment"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Date Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/80 backdrop-blur-sm text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                  Uploaded: {img.date}
                </span>
              </div>
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
