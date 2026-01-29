import React, { useEffect, useState, useRef } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Coffee, Menu, X, Lock } from "lucide-react";
import { gsap } from "gsap";

const Navbar = ({ toggleAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const navLinks = [
    { name: "HOT COFFEE", id: "hot-coffee" },
    { name: "COLD COFFEE", id: "cold-coffee" },
    { name: "MOCKTAILS", id: "mocktails" },
    { name: "SEASONAL", id: "seasonal" },
  ];

  // --- SMOOTH SIDEBAR ANIMATION (MOBILE ONLY) ---
  useEffect(() => {
    if (mobileMenuOpen) {
      // Open Animation
      gsap.to(overlayRef.current, {
        opacity: 1,
        display: "block",
        duration: 0.3,
      });
      gsap.to(menuRef.current, { x: 0, duration: 0.6, ease: "expo.out" });
      gsap.fromTo(
        ".mobile-link",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.2 },
      );
    } else {
      // Close Animation
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "expo.in" });
      gsap.to(overlayRef.current, {
        opacity: 0,
        display: "none",
        duration: 0.3,
      });
    }
  }, [mobileMenuOpen]);

  // --- FIXED MOBILE NAVIGATION LOGIC ---
  const handleMobileNav = (sectionId) => {
    // 1. Close sidebar first (triggers GSAP close animation)
    setMobileMenuOpen(false);

    const scrollToSection = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname === "/menu") {
      // 2a. Already on menu → scroll immediately
      scrollToSection();
    } else {
      // 2b. Navigate to menu
      navigate(`/menu#${sectionId}`);

      // 3. Mobile-safe forced scroll after route change
      setTimeout(scrollToSection, 600);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("mode") === "owner") setIsOwner(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP & BASE NAVBAR */}
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 border
  ${
    isScrolled
      ? "top-4 w-[90%] md:w-[600px] rounded-full bg-black/90 backdrop-blur-md border-white/10 shadow-2xl py-3 px-6"
      : "top-0 w-full bg-transparent py-6 px-4 md:px-12 rounded-none border-transparent"
  }`}
      >
        <div className="flex items-center justify-between">
          <RouterLink to="/" className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-orange-500" />
            <span className="font-['Oswald'] font-bold text-xl text-white tracking-widest">
              RAINBOW
            </span>
          </RouterLink>

          {/* Desktop Links - Animation/logic untouched */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              location.pathname === "/menu" ? (
                <ScrollLink
                  key={link.name}
                  to={link.id}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="text-xs font-bold text-gray-300 hover:text-orange-500 cursor-pointer tracking-wider transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={link.name}
                  to={`/menu#${link.id}`}
                  className="text-xs font-bold text-gray-300 hover:text-orange-500 cursor-pointer tracking-wider transition-colors"
                >
                  {link.name}
                </RouterLink>
              ),
            )}

            {isOwner && (
              <button
                onClick={toggleAdmin}
                className="p-2 text-red-500 hover:bg-red-900/20 rounded-full"
              >
                <Lock size={14} />
              </button>
            )}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* --- SMOOTH MOBILE SIDEBAR --- */}
      {/* Dark Overlay with Blur */}
      <div
        ref={overlayRef}
        onClick={() => setMobileMenuOpen(false)}
        className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm hidden opacity-0"
      />

      {/* Sidebar Panel */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[280px] z-[60] bg-[#0a0a0a] border-l border-white/10 p-8 transform translate-x-full shadow-2xl flex flex-col"
      >
        <button
          className="self-end text-white mb-12 hover:rotate-90 transition-transform duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={30} />
        </button>

        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleMobileNav(link.id)}
              className="mobile-link text-2xl font-['Oswald'] text-white hover:text-orange-500 text-left uppercase tracking-tighter"
            >
              {link.name}
            </button>
          ))}

          <RouterLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link mt-8 text-sm text-gray-500 border-b border-gray-800 pb-2 inline-block w-max"
          >
            BACK TO HOME
          </RouterLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
