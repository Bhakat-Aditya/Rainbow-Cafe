import React from "react";
import { Link } from "react-router-dom";
import { GALLERY_IMAGES } from "../data/config";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Clock,
  Navigation,
} from "lucide-react";
import { SITE_CONFIG } from "../data/config";

const Footer = () => {
  const footerGallery = GALLERY_IMAGES.slice(0, 4);

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Takeaway Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-['Oswald'] font-bold text-orange-500 tracking-tighter">
              RAINBOW CAFE
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Midnapore's premier takeaway experience. <br />
              Freshly brewed happiness, ready to grab and go.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Location & Interactive Map Link */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-orange-500">
              FIND US
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={18} />
                <p className="text-gray-300 text-sm">
                  {SITE_CONFIG.contact.address}
                </p>
              </div>
              {/* MINI MAP UI */}
              <a
                href="https://maps.app.goo.gl/TV6jWfacjtyFwn5bA" // Replace with actual Google Maps link
                target="_blank"
                rel="noreferrer"
                className="group relative block w-full h-32 rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-colors"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=400')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                  <Navigation
                    className="text-orange-500 mb-1 group-hover:animate-bounce"
                    size={24}
                  />
                  <span className="text-[10px] font-bold tracking-tighter uppercase">
                    Open in Google Maps
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links & Status */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-orange-500">
              GRAB & GO
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3 text-gray-400">
                <Clock size={16} className="text-orange-500" /> 11:00 AM - 10:00
                PM
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-orange-500" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/menu"
                  className="text-xs font-bold text-black bg-orange-500 px-4 py-2 rounded-full hover:bg-white transition-all"
                >
                  VIEW FULL MENU
                </Link>
              </li>
            </ul>
          </div>

          {/* Sexy Image Gallery Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-orange-500">
              GALLERY
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerGallery.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-white/5"
                >
                  <img
                    src={img.url}
                    alt="Cafe"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/gallery"
                className="text-[10px] text-gray-500 uppercase tracking-widest hover:text-orange-500 transition-colors"
              >
                Click here to view full gallery
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Rainbow Cafe. Built by Aditya.
          </p>
          <div className="flex gap-6 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <span className="hover:text-orange-500 cursor-pointer">
              Takeaway Only
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Quality Assured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
