import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react';

const Footer = ({ onOpenTourModal, onOpenApply }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fff5e3] text-[#1a1209] border-t border-[#fe9601]/20 pt-16 pb-12 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1a1209]/15">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-montserrat font-black text-2xl sm:text-3xl tracking-tighter text-[#1a1209]">
              Ajay<span className="text-[#fe9601]">Homes</span> & Estates
            </h3>
            <p className="text-sm text-[#1a1209]/75 max-w-sm leading-relaxed font-normal">
              Designing and crafting luxury residential estates, modern living spaces, and high-yield joint venture developments built for life.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Website"
                className="w-9 h-9 rounded-full bg-[#1a1209]/5 hover:bg-[#fe9601] hover:text-white text-[#1a1209] transition-all flex items-center justify-center border border-[#1a1209]/10"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Share"
                className="w-9 h-9 rounded-full bg-[#1a1209]/5 hover:bg-[#fe9601] hover:text-white text-[#1a1209] transition-all flex items-center justify-center border border-[#1a1209]/10"
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
            <ul className="space-y-2.5 text-sm text-[#1a1209]/80 font-medium">
              <li><a href="#hero" className="hover:text-[#fe9601] transition-colors">Home</a></li>
              <li><a href="#gallery" className="hover:text-[#fe9601] transition-colors">Photo Gallery</a></li>
              <li><a href="#living" className="hover:text-[#fe9601] transition-colors">Everyday Living</a></li>
              <li><a href="#balanced" className="hover:text-[#fe9601] transition-colors">Floor Plans</a></li>
              <li><a href="#stories" className="hover:text-[#fe9601] transition-colors">Customer Stories</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#fe9601] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#1a1209]/80 font-medium">
              <li><button onClick={onOpenApply} className="hover:text-[#fe9601] transition-colors text-left cursor-pointer">Joint Venture</button></li>
              <li><button onClick={onOpenTourModal} className="hover:text-[#fe9601] transition-colors text-left cursor-pointer">Schedule a Tour</button></li>
              <li><button onClick={onOpenApply} className="hover:text-[#fe9601] transition-colors text-left cursor-pointer">Digital Application</button></li>
              <li><a href="#" className="hover:text-[#fe9601] transition-colors">Architectural Customization</a></li>
              <li><a href="#" className="hover:text-[#fe9601] transition-colors">Estate Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#fe9601] mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#1a1209]/80 font-medium">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#fe9601]" />
                <span>Anna Nagar, Chennai, TN</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#fe9601]" />
                <span>+91 98400 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#fe9601]" />
                <span>contact@ajayhomes.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1a1209]/60 font-medium">
          <p>© {new Date().getFullYear()} Ajay Homes & Estates. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#fe9601] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#fe9601] transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#1a1209]/10 hover:bg-[#fe9601] hover:text-white text-[#1a1209] flex items-center justify-center transition-all cursor-pointer shadow-sm"
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
