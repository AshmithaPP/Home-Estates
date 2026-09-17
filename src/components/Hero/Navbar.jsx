import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowDownRight, Calendar, Phone, MapPin, Sparkles, Home, Shield, Compass } from 'lucide-react';

export const Navbar = ({ onOpenTourModal, onOpenApplyModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Brand Logo (Screenshot 1: 21OAKS) */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="group flex items-center gap-2"
          >
            <div className="flex flex-col">
              <span className="font-montserrat font-black text-2xl tracking-tighter text-white group-hover:text-[#fe9601] transition-colors">
                21OAKS
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#ffc973]/80 font-medium">
                Homes & Estates
              </span>
            </div>
          </motion.a>

          {/* Center Inline Navigation Bar */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#2d6a4f]/30 shadow-lg"
          >
            {[
              { label: 'About us', href: '#about' },
              { label: 'Photo gallery', href: '#gallery' },
              { label: 'Interior', href: '#interior' },
              { label: 'Contact us', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-[#2d6a4f] hover:text-[#193d2d] hover:bg-[#2d6a4f]/10 transition-all cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>

          {/* Right Controls (Screenshot 1: Schedule a Tour & Apply Now) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Schedule a Tour Button with Green Status Dot */}
            <button
              onClick={onOpenTourModal}
              className="hidden sm:flex glass-pill hover:bg-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white transition-all items-center gap-2 cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-[#2d6a4f] animate-pulse inline-block shadow-[0_0_8px_#2d6a4f]" />
              <Calendar className="w-3.5 h-3.5 text-[#ffc973]" />
              <span>Schedule a Tour</span>
            </button>

            {/* Apply Now Button with Arrow (Gradient requested in prompt) */}
            <button
              onClick={onOpenApplyModal}
              className="btn-gold-gradient px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer group"
            >
              <span>Apply Now</span>
              <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
                <ArrowDownRight className="w-3.5 h-3.5 text-black" />
              </div>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass-pill-dark p-2.5 rounded-full text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-[#fe9601]" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>

        </div>
      </header>

      {/* Full-Screen / Overlay Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#0c0d10]/95 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-16 pt-28 text-white overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column: Navigation Links */}
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#fe9601] font-semibold">
                  Navigation Menu
                </p>
                <nav className="flex flex-col gap-4 text-3xl sm:text-5xl font-serif-luxury">
                  {[
                    { label: 'Residences & Floorplans', href: '#residences' },
                    { label: 'Amenities & Services', href: '#amenities' },
                    { label: 'Neighborhood & USC', href: '#neighborhood' },
                    { label: 'Virtual Gallery', href: '#gallery' },
                    { label: 'Contact & Leasing', href: '#contact' }
                  ].map((link, idx) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.08 }}
                      className="group flex items-center justify-between border-b border-white/10 pb-3 hover:text-[#fe9601] transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowDownRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -rotate-90 group-hover:rotate-0 transition-all text-[#fe9601]" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Right Column: Contact Info & Highlight Card */}
              <div className="glass-card p-8 rounded-3xl space-y-6 border border-white/10">
                <div className="flex items-center gap-3 text-[#ffc973]">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-semibold tracking-wider uppercase">21OAKS Estates</span>
                </div>
                <h3 className="text-2xl font-serif-luxury">Experience Premium Student & Estate Luxury</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Located right at the doorstep of top university campuses and estate districts. Featuring private infinity pools, study suites, and 24/7 concierge service.
                </p>
                <div className="pt-4 border-t border-white/10 space-y-3 text-sm text-white/80">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#fe9601]" />
                    <span>821 Williams St, Columbia, SC 29201</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#fe9601]" />
                    <span>+1 (803) 555-OAKS (6257)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => { setIsMenuOpen(false); onOpenTourModal(); }}
                    className="flex-1 glass-pill py-3 rounded-xl text-center font-medium text-sm hover:bg-white/20 transition-all"
                  >
                    Book In-Person Tour
                  </button>
                  <button
                    onClick={() => { setIsMenuOpen(false); onOpenApplyModal(); }}
                    className="flex-1 btn-gold-gradient py-3 rounded-xl text-center font-bold text-sm"
                  >
                    Apply Online
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom bar inside drawer */}
            <div className="max-w-6xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-4">
              <span>© 2026 21OAKS Homes & Estates. All Rights Reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
