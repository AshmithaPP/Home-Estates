import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const FloatingBadge = ({ text, slideId }) => {
  return (
    <div className="flex justify-center my-4 select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={`badge-${slideId}`}
          initial={{ opacity: 0, y: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="glass-pill-dark px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/20 shadow-lg text-xs sm:text-sm font-medium text-white/90 hover:text-white hover:border-[#fe9601]/50 transition-colors"
          >
            {/* Glowing Accent Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe9601] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe9601]"></span>
            </span>

            <Sparkles className="w-3.5 h-3.5 text-[#ffc973]" />
            <span className="tracking-wide">{text}</span>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FloatingBadge;
