import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Big CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-8xl font-['Oswald'] font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
            READY TO TASTE?
          </h2>
          <Link 
             to="/menu"
             className="inline-block px-10 py-4 bg-orange-500 text-black font-bold text-xl rounded-full hover:scale-110 transition-transform shadow-lg shadow-orange-500/25"
          >
            SEE FULL MENU
          </Link>
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-['Oswald'] font-bold text-orange-500 mb-4">RAINBOW CAFE</h3>
            <p className="text-gray-400">
              Midnapore's premium takeaway coffee experience. <br/> 
              Brewing happiness, one cup at a time.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">CONTACT</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                Food Zone, College Rd, Midnapore
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <a href="tel:07584062468" className="hover:text-white transition-colors">075840 62468</a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-bold mb-4">FOLLOW US</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm mt-20">
          © {new Date().getFullYear()} Rainbow Cafe. Built by Aditya.
        </div>

      </div>
    </footer>
  );
};

export default Footer;