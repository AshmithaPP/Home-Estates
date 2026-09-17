import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FoldingBackground Component
 * Implements 3D right-to-left origami folding transition effect between background images.
 */
export const FoldingBackground = ({ currentSlide, slides, direction = 1 }) => {
  const activeSlide = slides[currentSlide];

  const foldVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      rotateY: direction > 0 ? 40 : -40,
      scale: 0.88,
      opacity: 0,
      filter: 'brightness(0.5) contrast(1.2)',
      transformOrigin: direction > 0 ? 'left center' : 'right center',
    }),
    center: {
      x: '0%',
      rotateY: 0,
      scale: 1,
      opacity: 1,
      filter: 'brightness(1) contrast(1)',
      transformOrigin: 'center center',
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 28 },
        rotateY: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.5 },
        filter: { duration: 0.7 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      rotateY: direction > 0 ? -45 : 45,
      scale: 0.85,
      opacity: 0,
      filter: 'brightness(0.3) blur(4px)',
      transformOrigin: direction > 0 ? 'right center' : 'left center',
      transition: {
        x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        rotateY: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.5 },
      },
    }),
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black perspective-container select-none">
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
          {/* Background Image */}
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] ease-out"
          />

          {/* Luxury Gradient Overlay for Contrast & Aesthetics */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e]/50 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0e]/90 via-[#0a0b0e]/40 to-transparent" />

          {/* Subtle Warm Amber Light Leak Glow */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#fe9601]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#ffc973]/10 rounded-full blur-[140px] pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Grid Pattern Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
    </div>
  );
};

export default FoldingBackground;
