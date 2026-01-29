import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Coffee, Menu, X, Lock } from "lucide-react";

const Navbar = ({ toggleAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    // 1. Scroll Effect Logic
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // 2. SECRET KEY LOGIC
    // The button only appears if URL is website.com/?mode=owner
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("mode") === "owner") {
      setIsOwner(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOT COFFEE", to: "hot-coffee" },
    { name: "COLD COFFEE", to: "cold-coffee" },
    { name: "MOCKTAILS", to: "mocktails" },
  ];

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out left-0 right-0
        ${
          isScrolled
            ? "top-4 mx-auto w-[90%] md:w-[600px] rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl py-3 px-6"
            : "top-0 w-full bg-transparent py-6 px-4 md:px-12"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Coffee className="w-5 h-5 text-orange-500" />
            <span className="font-['Oswald'] font-bold text-xl text-white tracking-widest">
              RAINBOW
            </span>
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.id}
                smooth={true}
                className="text-xs font-bold text-gray-300 hover:text-orange-500 cursor-pointer tracking-wider transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* THE SECRET BUTTON (Only visible to you) */}
            {isOwner && (
              <button
                onClick={toggleAdmin}
                className="p-2 bg-red-600/20 text-red-500 rounded-full hover:bg-red-600 hover:text-white transition-all"
                title="Owner Dashboard"
              >
                <Lock size={14} />
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.id}
              smooth={true}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-['Oswald'] text-white hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}

          {/* Secret Button for Mobile */}
          {isOwner && (
            <button
              onClick={() => {
                toggleAdmin();
                setMobileMenuOpen(false);
              }}
              className="mt-8 flex items-center gap-2 text-red-500 border border-red-500/30 px-6 py-2 rounded-full"
            >
              <Lock size={16} /> OWNER PANEL
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
