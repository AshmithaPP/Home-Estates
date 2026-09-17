import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Eyebrow Component
 * Left-aligned badge: ( Comfort in every corner )
 * Removed glowing dot as requested by user.
 */
export const Eyebrow = ({ text, slideId }) => {
  return (
    <div className="flex justify-start my-2 select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={`eyebrow-${slideId}`}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="inline-flex items-center"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-pill-dark px-4 py-1 rounded-full border border-white/20 shadow-md text-xs font-medium text-white/90 hover:border-[#FE9601]/50 transition-colors"
          >
            <span className="tracking-wide">({text})</span>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Eyebrow;
