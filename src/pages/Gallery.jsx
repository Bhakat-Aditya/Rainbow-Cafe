import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera } from "lucide-react";
import { gsap } from "gsap";
import { GALLERY_IMAGES } from "../data/config";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Smooth entrance animation
    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
      },
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 mb-8 transition-all duration-300"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-bold tracking-widest text-xs uppercase">
            Back to Home
          </span>
        </Link>

        {/* Title Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-orange-500"></div>
            <span className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
              Visual Journey
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-['Oswald'] font-bold uppercase leading-none">
            CAFE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-700">
              GALLERY
            </span>
          </h1>
        </div>

        {/* Masonry Layout - High Visibility Mode */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="gallery-item relative group overflow-hidden rounded-2xl bg-[#111] border border-white/5 break-inside-avoid shadow-2xl"
            >
              {/* Image with High Opacity (100% by default now) */}
              <img
                src={img.url}
                alt="Rainbow Cafe Moment"
                className="w-full h-auto object-cover brightness-110 contrast-105 transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              {/* Subtle Bottom Vignette for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Date Badge - Now more "Premium" */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white px-4 py-1.5 rounded-full shadow-xl">
                  <p className="text-black text-[9px] font-black uppercase tracking-tighter">
                    SHOT ON: {img.date}
                  </p>
                </div>
                <div className="bg-orange-500 p-1.5 rounded-full shadow-xl">
                  <Camera size={12} className="text-black" />
                </div>
              </div>

              {/* Hover Frame Effect */}
              <div className="absolute inset-0 border-0 group-hover:border-[12px] border-orange-500/10 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Footer Link for better UX */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-sm font-medium tracking-widest uppercase">
            End of visual journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
