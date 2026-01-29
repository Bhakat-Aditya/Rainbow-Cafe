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

    // 1. Image "Breathing" Effect
    gsap.to(".hero-bg", {
      scale: 1.1,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 2. Text Reveal
    tl.fromTo(
      ".hero-char",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        ease: "power3.out",
      },
    );

    // 3. Subtitle Fade In
    tl.fromTo(
      ".hero-sub",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.4",
    );
  }, []);

  // Helper to split text into spans while keeping words together
  const SplitWord = ({ text, className }) => (
    <span className="inline-block whitespace-nowrap">
      {text.split("").map((char, i) => (
        <span key={i} className={`hero-char inline-block ${className}`}>
          {char}
        </span>
      ))}
    </span>
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[90vh] w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Dynamic Background */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${SITE_CONFIG.hero.image})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center"
      >
        {/* BRAND NAME - BIG & BOLD */}
        <div className="mb-2 overflow-hidden">
          <SplitWord
            text="RAINBOW &nbsp;CAFE"
            className="text-4xl md:text-7xl font-['Oswald'] font-black text-white tracking-[0.2em]"
          />
        </div>

        {/* SIP THE HAPPINESS - SMALLER & GROUPED */}
        <div className="flex flex-col items-center gap-0 mb-8">
          <div className="flex gap-x-3 overflow-hidden">
            <SplitWord
              text="SIP"
              className="text-xl md:text-3xl font-bold text-orange-500/80"
            />
            <SplitWord
              text="THE"
              className="text-xl md:text-3xl font-bold text-orange-500/80"
            />
          </div>
          <div className="overflow-hidden">
            {/* Added tracking-tighter on mobile to ensure it fits one line */}
            <SplitWord
              text="HAPPINESS"
              className="text-4xl md:text-6xl font-['Oswald'] font-bold text-orange-500 tracking-tighter md:tracking-normal"
            />
          </div>
        </div>

        <p className="hero-sub text-gray-400 text-sm md:text-lg max-w-md font-light mb-10 tracking-wide uppercase">
          Midnapore's Premium Takeaway. <br />
          <span className="text-white font-semibold">Order. Grab. Go.</span>
        </p>

        {/* Action Buttons */}
        <div className="hero-sub flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
          <Link
            to="/menu"
            className="px-10 py-4 bg-orange-500 text-black font-black rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl shadow-orange-500/20 text-sm tracking-widest uppercase"
          >
            VIEW MENU
          </Link>
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
            className="px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-md transition-all text-sm tracking-widest uppercase"
          >
            CALL TO ORDER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
