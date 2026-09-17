import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react';

const Footer = ({ onOpenTourModal, onOpenApply }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c0d10] text-white border-t border-white/15 pt-16 pb-12 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/15">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sans font-black text-2xl sm:text-3xl tracking-tight text-white">
              Ajay<span className="text-[#fe9601]">Homes</span> & Estates
            </h3>
            <p className="text-sm text-white/80 max-w-sm leading-relaxed font-normal">
              One of the fastest growing construction firms in Chennai, delivering quality residential flats, villas, and joint venture promotions with custom solutions for thousands of families.
            </p>
            <div className="p-3.5 rounded-xl bg-white/10 border border-[#2d6a4f]/50 max-w-sm shadow-sm backdrop-blur-md">
              <span className="text-[11px] font-extrabold text-[#2d6a4f] uppercase tracking-wider block">Our Philosophy</span>
              <p className="text-xs italic text-white font-serif-luxury">"Our customers are our ambassadors."</p>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                aria-label="Website"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2d6a4f] hover:text-white text-white transition-all flex items-center justify-center border border-white/20"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Share"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2d6a4f] hover:text-white text-white transition-all flex items-center justify-center border border-white/20"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#fe9601] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75 font-medium">
              <li><a href="#hero" className="hover:text-[#2d6a4f] transition-colors">Home</a></li>
              <li><a href="#gallery" className="hover:text-[#2d6a4f] transition-colors">Photo Gallery</a></li>
              <li><a href="#living" className="hover:text-[#2d6a4f] transition-colors">Everyday Living</a></li>
              <li><a href="#balanced" className="hover:text-[#2d6a4f] transition-colors">Floor Plans</a></li>
              <li><a href="#stories" className="hover:text-[#2d6a4f] transition-colors">Customer Stories</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#fe9601] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75 font-medium">
              <li><button onClick={onOpenApply} className="hover:text-[#2d6a4f] transition-colors text-left cursor-pointer">Joint Venture</button></li>
              <li><button onClick={onOpenTourModal} className="hover:text-[#2d6a4f] transition-colors text-left cursor-pointer">Schedule a Tour</button></li>
              <li><button onClick={onOpenApply} className="hover:text-[#2d6a4f] transition-colors text-left cursor-pointer">Digital Application</button></li>
              <li><a href="#" className="hover:text-[#2d6a4f] transition-colors">Architectural Customization</a></li>
              <li><a href="#" className="hover:text-[#2d6a4f] transition-colors">Estate Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#fe9601] mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/75 font-medium">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2d6a4f]" />
                <span>Anna Nagar, Chennai, TN</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2d6a4f]" />
                <span>+91 98400 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2d6a4f]" />
                <span>contact@ajayhomes.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-medium">
          <p>© {new Date().getFullYear()} Ajay Homes & Estates. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#2d6a4f] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#2d6a4f] transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2d6a4f] hover:text-white text-white flex items-center justify-center transition-all cursor-pointer shadow-sm border border-white/20"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
