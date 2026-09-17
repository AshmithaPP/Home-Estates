import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Menu, X, Calendar, Sparkles } from 'lucide-react';

export const Header = ({ onOpenTour, onOpenApply }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Exact menu items requested by user
  const menuItems = [
    { label: 'About us', href: '#about' },
    { label: 'Photo gallery', href: '#gallery' },
    { label: 'Interior', href: '#interior' },
    { label: 'Contact us', href: '#contact' },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-40 px-6 sm:px-12 py-6 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">

          {/* Logo on Left (Clean normal letters: Ajay Homes & Estates) */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 group"
          >
            <span className="font-sans font-black text-xl sm:text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FE9601] via-[#FF9F14] to-[#D97706] drop-shadow-sm">
              Ajay Homes & Estates
            </span>
          </motion.a>

          {/* Center Inline Navigation Bar */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#2d6a4f]/30 shadow-lg"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-[#2d6a4f] hover:text-[#193d2d] hover:bg-[#2d6a4f]/10 transition-all cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>

          {/* Right CTAs (Schedule a Tour & Joint Venture) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >

            {/* Joint Venture CTA (#FE9601 -> #FFC973 Gradient) */}
            <button
              onClick={onOpenApply}
              className="btn-gold-gradient px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer group"
            >
              <span>Joint Venture</span>
              <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
                <ArrowDownRight className="w-3.5 h-3.5 text-black" />
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass-pill-dark p-2 rounded-full text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-[#FE9601]" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>

        </div>
      </header>

      {/* Navigation Top Half Drawer Bar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Semi-transparent Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Smooth Top Half Drawer Menu Bar */}
            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 left-0 right-0 z-50 max-h-[85vh] sm:max-h-[60vh] bg-[#0c0d10]/98 border-b border-[#FE9601]/30 backdrop-blur-2xl text-white shadow-2xl rounded-b-3xl p-6 sm:p-10 pt-20 overflow-y-auto"
            >
              <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Left Column: Requested Menu Links */}
                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#FE9601] font-semibold">
                    Navigation Links
                  </p>
                  <nav className="flex flex-col gap-1.5 text-base sm:text-lg font-semibold">
                    {menuItems.map((item, idx) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 + idx * 0.04 }}
                        className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-[#FE9601] tracking-wider">
                            0{idx + 1}.
                          </span>
                          <span className="text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all">
                            {item.label}
                          </span>
                        </div>
                        <ArrowDownRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-[#FE9601] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                      </motion.a>
                    ))}
                  </nav>
                </div>

                {/* Right Column: Info Card */}
                <div className="glass-card p-6 rounded-2xl space-y-4 border border-white/10">
                  <div className="flex items-center gap-2 text-[#FFC973]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Ajay Homes & Estates</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-sans">Luxury Residences & Joint Venture Partnerships</h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Explore custom estate designs, architectural interiors, and exclusive joint venture investment opportunities.
                  </p>
                  <div className="flex gap-3 pt-1">
                    <button
                      onClick={() => { setIsMenuOpen(false); onOpenTour(); }}
                      className="flex-1 glass-pill py-2.5 rounded-xl text-center font-medium text-xs sm:text-sm hover:bg-white/20 transition-all"
                    >
                      Schedule a Tour
                    </button>
                    <button
                      onClick={() => { setIsMenuOpen(false); onOpenApply(); }}
                      className="flex-1 btn-gold-gradient py-2.5 rounded-xl text-center font-bold text-xs sm:text-sm"
                    >
                      Joint Venture
                    </button>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Bar */}
              <div className="max-w-5xl mx-auto w-full pt-6 mt-6 border-t border-white/10 flex justify-between items-center text-xs text-white/40">
                <span>© 2026 Ajay Homes & Estates. All Rights Reserved.</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#FE9601] font-semibold transition-colors cursor-pointer"
                >
                  Close Menu ✕
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
