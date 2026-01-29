import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Coffee, Menu, X, Lock } from "lucide-react";

const Navbar = ({ toggleAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Updated Links to include Seasonal
  const navLinks = [
    { name: "HOT COFFEE", id: "hot-coffee" },
    { name: "COLD COFFEE", id: "cold-coffee" },
    { name: "MOCKTAILS", id: "mocktails" },
    { name: "SEASONAL", id: "seasonal" },
  ];

  // Helper to handle both scrolling and cross-page navigation
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/menu") {
      // Navigate to the menu page with the specific hash
      navigate(`/menu#${sectionId}`);
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
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2
  ${
    isScrolled
      ? "top-4 w-[90%] md:w-[600px] rounded-full bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl py-3 px-6"
      : "top-0 w-full bg-transparent py-6 px-4 md:px-12 rounded-none"
  }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-orange-500" />
            <span className="font-['Oswald'] font-bold text-xl text-white tracking-widest">
              RAINBOW
            </span>
          </div>

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

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-3xl font-['Oswald'] text-white hover:text-orange-500 uppercase"
            >
              {link.name}
            </button>
          ))}

          <RouterLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 text-sm text-gray-500 border-b border-gray-700 pb-1"
          >
            BACK TO HOME
          </RouterLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
