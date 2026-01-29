import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_CONFIG } from "../data/config";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Image "Breathing" Effect (Slow Zoom)
    gsap.to(".hero-bg", {
      scale: 1.1,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 2. Text Reveal (Staggered Explosion)
    tl.fromTo(
      ".hero-char",
      { y: 100, opacity: 0, rotate: 5 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
        stagger: 0.05,
        ease: "back.out(1.7)",
      },
    );

    // 3. Subtitle Fade In
    tl.fromTo(
      ".hero-sub",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5",
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[90vh] w-full overflow-hidden bg-black"
    >
      {/* Dynamic Background */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${SITE_CONFIG.hero.image})` }}
      />

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-end h-full pb-20 px-4 text-center"
      >
        {/* Animated Title */}
        <div className="flex flex-wrap justify-center gap-x-4 mb-2 overflow-hidden">
          {"SIP THE".split("").map((char, i) => (
            <span
              key={i}
              className="hero-char inline-block text-5xl md:text-8xl font-['Oswald'] font-bold text-white"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 mb-6 overflow-hidden">
          {"HAPPINESS".split("").map((char, i) => (
            <span
              key={i}
              className="hero-char inline-block text-6xl md:text-9xl font-['Oswald'] font-bold text-orange-500"
            >
              {char}
            </span>
          ))}
        </div>

        <p className="hero-sub text-gray-300 text-lg md:text-xl max-w-md font-light mb-8">
          Midnapore's Premium Takeaway Counter. <br />
          <span className="text-orange-400 font-semibold">
            Order. Grab. Go.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="hero-sub flex gap-4">
          <Link
            to="/menu"
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20 inline-block"
          >
            VIEW MENU
          </Link>
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
            className="px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            CALL TO ORDER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
