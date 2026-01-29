// src/pages/MenuPage.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Coffee, Info, Tag } from "lucide-react";
import { gsap } from "gsap";
import { MENU_CATEGORIES } from "../data/config";

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const tl = gsap.timeline();
    tl.fromTo(
      ".page-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    ).fromTo(
      ".menu-group",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20 px-4 md:px-12">
      <div className="max-w-5xl mx-auto mb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 mb-6 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
        <h1 className="page-title text-5xl md:text-8xl font-['Oswald'] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 uppercase">
          Full Menu
        </h1>
      </div>

      <div className="max-w-5xl mx-auto space-y-20">
        {MENU_CATEGORIES.map((cat, index) => (
          <div key={cat.id} id={cat.id} className="menu-group">
            <h2 className="text-4xl font-['Oswald'] text-orange-500 border-b border-orange-500/20 pb-4 mb-10 flex items-center gap-4">
              <span className="opacity-30">0{index + 1}</span> {cat.title}
            </h2>

            <div className="grid gap-8">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col md:flex-row gap-6 bg-[#141414] p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-500"
                >
                  {/* Item Image */}
                  <div className="w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold font-['Oswald'] tracking-wide group-hover:text-orange-400 transition-colors uppercase">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-orange-500 font-['Oswald']">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4">{item.desc}</p>

                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/5">
                      {item.tags?.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-blue-400 bg-blue-900/10 px-3 py-1 rounded-full border border-blue-400/20"
                        >
                          <Tag size={10} /> {tag}
                        </div>
                      ))}

                      <div className="w-full mt-2 flex items-start gap-2 text-xs text-gray-500 italic">
                        <Info size={14} className="mt-0.5 text-orange-500/50" />
                        <span>Ingredients: {item.ingredients}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
