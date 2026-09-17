import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HeroBackground Component
 * Implements 3D right-to-left folding image transition.
 * Lightened background image filter matching Screenshot 1 bright interior warmth.
 */
export const HeroBackground = ({ activeIndex, slides, direction = 1 }) => {
  const activeSlide = slides[activeIndex];

  const foldVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      rotateY: direction > 0 ? 35 : -35,
      scale: 0.92,
      opacity: 0,
      filter: 'brightness(1) contrast(1)',
      transformOrigin: direction > 0 ? 'left center' : 'right center',
    }),
    center: {
      x: '0%',
      rotateY: 0,
      scale: 1,
      opacity: 1,
      filter: 'brightness(1.06) contrast(0.98)',
      transformOrigin: 'center center',
      transition: {
        x: { type: 'spring', stiffness: 220, damping: 26 },
        rotateY: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      rotateY: direction > 0 ? -35 : 35,
      scale: 0.9,
      opacity: 0,
      filter: 'brightness(0.95) blur(2px)',
      transformOrigin: direction > 0 ? 'right center' : 'left center',
      transition: {
        x: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        rotateY: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#e0d6cb] perspective-container select-none">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={activeSlide.id}
          custom={direction}
          variants={foldVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full fold-layer shadow-2xl"
          style={{ willChange: 'transform, opacity, filter' }}
        >
          {/* Background Image with subtle Ken Burns zoom */}
          <motion.img
            src={activeSlide.image}
            alt="Hero Background"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 6, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center"
          />

          {/* Light Soft Gradient Overlays for contrast while maintaining bright image feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />

          {/* Soft Warm Ambient Light Accents */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#FE9601]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#FFC973]/10 rounded-full blur-[120px] pointer-events-none" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroBackground;
