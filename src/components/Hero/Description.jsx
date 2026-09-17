import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Description Component
 * Left-aligned small copy matching Screenshot 1 density.
 */
export const Description = ({ text, slideId }) => {
  return (
    <div className="min-h-0 sm:min-h-[65px] text-left">
      <AnimatePresence mode="wait">
        <motion.p
          key={`desc-${slideId}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
          className="text-[11px] sm:text-sm text-white/90 font-normal max-w-xs sm:max-w-lg leading-relaxed drop-shadow select-none"
        >
          {text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default Description;
