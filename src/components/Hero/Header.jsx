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
      <header className="absolute top-0 left-0 right-0 z-40 px-3 sm:px-12 py-3 sm:py-6 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-2">

          {/* Logo on Left (Clean normal letters: Ajay Homes & Estates) */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-1.5 group shrink-0"
          >
            <span className="font-sans font-black text-sm xs:text-base sm:text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FE9601] via-[#FF9F14] to-[#D97706] drop-shadow-sm whitespace-nowrap">
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
            className="flex items-center gap-1.5 sm:gap-3 shrink-0"
          >

            {/* Joint Venture CTA (#FE9601 -> #FFC973 Gradient) */}
            <button
              onClick={onOpenApply}
              className="btn-gold-gradient px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-bold flex items-center gap-1 sm:gap-2 cursor-pointer group whitespace-nowrap"
            >
              <span>Joint Venture</span>
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
                <ArrowDownRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black" />
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass-pill-dark p-1.5 sm:p-2 rounded-full text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#FE9601]" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </motion.div>

        </div>
      </header>

      {/* Simple Compact Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Compact Top Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="fixed top-0 left-0 right-0 z-50 bg-[#0c0d10]/98 border-b border-[#2d6a4f]/40 backdrop-blur-2xl text-white shadow-2xl rounded-b-2xl p-4 sm:p-6 pt-14 sm:pt-16"
            >
              <div className="max-w-md mx-auto w-full space-y-3">
                
                {/* Header row inside menu */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="font-sans font-black text-sm tracking-tight text-[#FE9601]">
                    Ajay Homes & Estates
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-[#FE9601]" />
                  </button>
                </div>

                {/* 4 Clean Menu Items */}
                <nav className="flex flex-col gap-1 pt-1">
                  {menuItems.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 + idx * 0.04 }}
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-[#2d6a4f]/20 border border-white/5 hover:border-[#2d6a4f]/40 transition-all cursor-pointer group"
                    >
                      <span className="text-sm font-bold text-white group-hover:text-[#FFC973] transition-colors">
                        {item.label}
                      </span>
                      <ArrowDownRight className="w-4 h-4 text-[#2d6a4f] group-hover:text-[#FE9601] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                    </motion.a>
                  ))}
                </nav>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
