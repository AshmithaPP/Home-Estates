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
            className="glass-pill-dark px-4 py-1.5 rounded-full border border-[#2d6a4f]/50 shadow-md text-xs font-medium text-white/95 flex items-center hover:border-[#2d6a4f] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#2d6a4f] mr-2 inline-block shadow-[0_0_6px_#2d6a4f]" />
            <span className="tracking-wide">({text})</span>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Eyebrow;
