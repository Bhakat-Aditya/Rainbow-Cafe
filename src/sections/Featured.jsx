import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_ITEMS = [
  {
    id: 1,
    name: "OREO SHAKE",
    price: "₹50",
    tag: "CROWD FAVORITE",
    desc: "Crunchy Oreo bits blended with vanilla. The undisputed king of cold coffee.",
    image: "https://images.unsplash.com/photo-1572490122447-e139c1f09e91?q=80&w=1888&auto=format&fit=crop", // Dark Oreo/Choco vibe
    color: "from-blue-900 to-black"
  },
  {
    id: 2,
    name: "CAPPUCCINO",
    price: "₹50",
    tag: "BEST SELLER",
    desc: "Classic frothy delight with cocoa dust. Perfect for the evening chill.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1935&auto=format&fit=crop", // Warm Coffee vibe
    color: "from-orange-900 to-black"
  },
  {
    id: 3,
    name: "BLUE LAGOON",
    price: "₹60",
    tag: "SUMMER HIT",
    desc: "Deep berry flavor with a cool finish. Refreshing and Instagram-worthy.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1887&auto=format&fit=crop", // Blue Drink
    color: "from-purple-900 to-black"
  }
];

const Featured = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Horizontal Scroll Animation
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw", // Move left by 2 screen widths (since we have 3 screens)
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000", // Scroll distance
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-black">
      {/* Scroll Trigger Wrapper */}
      <div ref={triggerRef}>
        
        {/* Horizontal Container */}
        <div ref={sectionRef} className="flex w-[300vw] h-screen">
          
          {FEATURED_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`w-screen h-full flex flex-col md:flex-row items-center justify-center relative bg-gradient-to-br ${item.color}`}
            >
              {/* Text Side */}
              <div className="w-full md:w-1/2 p-8 md:p-20 z-10 flex flex-col justify-center h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-yellow-400 fill-yellow-400" size={20} />
                  <span className="text-yellow-400 font-bold tracking-widest text-sm">{item.tag}</span>
                </div>
                
                <h2 className="text-6xl md:text-9xl font-['Oswald'] font-bold text-white mb-6 leading-none">
                  {item.name}
                </h2>
                
                <p className="text-gray-300 text-lg md:text-2xl max-w-md mb-8">
                  {item.desc}
                </p>
                
                <div className="flex items-center gap-6">
                  <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                    {item.price}
                  </span>
                  <Link 
                    to="/menu"
                    className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all flex items-center gap-2"
                  >
                    ORDER NOW <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Image Side */}
              <div className="absolute inset-0 md:relative md:w-1/2 h-full">
                <div className="absolute inset-0 bg-black/40 md:hidden z-0" /> {/* Mobile Overlay */}
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover opacity-60 md:opacity-100 mask-image-gradient"
                />
              </div>

              {/* Step Indicator (01 / 03) */}
              <div className="absolute bottom-10 right-10 text-white/20 font-['Oswald'] text-9xl font-bold z-20 pointer-events-none">
                0{index + 1}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Featured;