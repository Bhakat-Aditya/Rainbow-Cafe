import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Coffee } from "lucide-react";
import { MENU_CATEGORIES } from "../data/config";

gsap.registerPlugin(ScrollTrigger);

const HomeMenu = () => {
  useEffect(() => {
    gsap.from(".menu-card-anim", {
      scrollTrigger: {
        trigger: "#home-menu",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="home-menu"
      className="py-20 bg-[#0f0f0f] text-white px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div className="menu-card-anim">
            <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">
              Our Selection
            </span>
            <h2 className="text-5xl md:text-7xl font-['Oswald'] font-bold mt-2">
              CRAFTED <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                FOR TASTE
              </span>
            </h2>
          </div>

          <Link
            to="/menu"
            className="menu-card-anim group flex items-center gap-2 mt-6 md:mt-0 text-lg font-bold hover:text-orange-500 transition-colors"
          >
            VIEW FULL MENU{" "}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENU_CATEGORIES.slice(0, 3).map((cat, index) => (
            <Link
              to="/menu"
              key={cat.id}
              // Changed bg-[#1a1a1a] to bg-[#2a2a2a] for a lighter base
              className="menu-card-anim group relative h-[400px] overflow-hidden rounded-2xl bg-[#2a2a2a] border border-white/10 hover:border-orange-500/50 transition-all duration-500"
            >
              {/* 1. LIGHTER GRADIENT: Only dark at the very bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />

              {/* 2. BRIGHTER IMAGE: Changed opacity-60 to opacity-90 */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <Coffee className="w-8 h-8 text-orange-500 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Text Shadow added to ensure text pops even on bright images */}
                <h3 className="text-4xl font-['Oswald'] font-bold uppercase mb-2 group-hover:text-orange-400 transition-colors drop-shadow-lg">
                  {cat.title}
                </h3>

                <p className="text-gray-200 text-sm line-clamp-2 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-md">
                  Click to explore our {cat.items.length} premium{" "}
                  {cat.title.toLowerCase()} blends.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
