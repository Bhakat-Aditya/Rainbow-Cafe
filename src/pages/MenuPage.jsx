import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Info } from "lucide-react";
import { gsap } from "gsap";
import { MENU_CATEGORIES } from "../data/config";

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Start at top

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
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 mb-6 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
        <h1 className="page-title text-5xl md:text-8xl font-['Oswald'] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
          FULL MENU
        </h1>
        <p className="page-title text-gray-400 mt-4 max-w-2xl text-lg">
          Detailed breakdown of our ingredients, flavors, and pricing. <br />
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">
            * All prices include taxes
          </span>
        </p>
      </div>

      {/* Menu Categories */}
      <div className="max-w-5xl mx-auto space-y-20">
        {MENU_CATEGORIES.map((cat, index) => (
          <div key={cat.id} className="menu-group">
            <h2 className="text-3xl font-['Oswald'] text-orange-500 border-b border-orange-500/20 pb-4 mb-8 flex items-center gap-3">
              0{index + 1}. {cat.title}
            </h2>

            <div className="grid gap-6">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-[#141414] p-6 rounded-xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:bg-[#1a1a1a]"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-['Oswald'] tracking-wide group-hover:text-orange-400 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-orange-500">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 border-l-2 border-white/10 pl-3">
                    {item.desc}
                  </p>

                  {/* Detailed Ingredients / Stats Section */}
                  <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1.5 text-xs text-green-400 bg-green-900/20 px-3 py-1 rounded-full">
                      <Leaf size={12} />
                      <span>100% Arabica</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">
                      <Info size={12} />
                      <span>High Caffeine</span>
                    </div>
                    {/* You can add dynamic ingredients from config here later */}
                    <span className="text-xs text-gray-500 flex items-center px-2">
                      Ingredients: Milk, Espresso, Cocoa Dust
                    </span>
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
