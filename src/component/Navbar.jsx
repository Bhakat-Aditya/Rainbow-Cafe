import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"; // Use Router for page switching
import { Link as ScrollLink } from "react-scroll"; // Use Scroll for same-page jumps
import { Coffee, Menu, X, Lock } from "lucide-react";

const Navbar = ({ toggleAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const location = useLocation(); // To know which page we are on
  const navigate = useNavigate(); // To change pages manually

  // Helper: Handle Navigation Logic
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);

    // If we are NOT on the menu page, go there first
    if (location.pathname !== "/menu") {
      navigate("/menu");
      // Wait a bit for page to load, then scroll (optional, but smoother)
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Check for owner mode
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("mode") === "owner") setIsOwner(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOT COFFEE", id: "hot-coffee" },
    { name: "COLD COFFEE", id: "cold-coffee" },
    { name: "MOCKTAILS", id: "mocktails" },
  ];

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out left-0 right-0
        ${
          isScrolled
            ? "top-4 mx-auto w-[90%] md:w-[600px] rounded-full bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl py-3 px-6"
            : "top-0 w-full bg-transparent py-6 px-4 md:px-12"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo - Always goes to Home */}
          <RouterLink to="/" className="flex items-center gap-2 cursor-pointer">
            <Coffee className="w-5 h-5 text-orange-500" />
            <span className="font-['Oswald'] font-bold text-xl text-white tracking-widest">
              RAINBOW
            </span>
          </RouterLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              location.pathname === "/menu" ? (
                // If on Menu Page: SCROLL to section
                <ScrollLink
                  key={link.name}
                  to={link.id}
                  smooth={true}
                  offset={-100} // Adjust for navbar height
                  className="text-xs font-bold text-gray-300 hover:text-orange-500 cursor-pointer tracking-wider transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                // If on Home Page: ROUTE to Menu Page
                <RouterLink
                  key={link.name}
                  to="/menu"
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
