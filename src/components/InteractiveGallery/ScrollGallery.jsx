import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollGallery Component
 * Refinements:
 * 1. Reduced heading font size ("Everything homes & estates living should be").
 * 2. All 6 outer surrounding cards have 100% IDENTICAL fixed dimensions & aspect ratios (aspect-[4/3]).
 * 3. Parallax scroll-driven convergence towards center & 3D zoom effect.
 */
export const ScrollGallery = () => {
  const containerRef = useRef(null);

  // Track scroll progress within this section (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scroll Transforms for Convergence towards center and Zoom In
  // Top Left Card
  const tlX = useTransform(scrollYProgress, [0, 0.85], [-260, -60]);
  const tlY = useTransform(scrollYProgress, [0, 0.85], [-180, -35]);
  const tlScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Top Right Card
  const trX = useTransform(scrollYProgress, [0, 0.85], [260, 60]);
  const trY = useTransform(scrollYProgress, [0, 0.85], [-180, -35]);
  const trScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Mid Left Card
  const mlX = useTransform(scrollYProgress, [0, 0.85], [-320, -85]);
  const mlY = useTransform(scrollYProgress, [0, 0.85], [0, 0]);
  const mlScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Mid Right Card
  const mrX = useTransform(scrollYProgress, [0, 0.85], [320, 85]);
  const mrY = useTransform(scrollYProgress, [0, 0.85], [0, 0]);
  const mrScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Bot Left Card
  const blX = useTransform(scrollYProgress, [0, 0.85], [-250, -60]);
  const blY = useTransform(scrollYProgress, [0, 0.85], [200, 35]);
  const blScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Bot Right Card
  const brX = useTransform(scrollYProgress, [0, 0.85], [250, 60]);
  const brY = useTransform(scrollYProgress, [0, 0.85], [200, 35]);
  const brScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Center Focal Card
  const centerScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.55]);

  // Headline opacity and translation on scroll
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  // Uniform dimensions for ALL 6 surrounding outer cards
  const outerCardStyle = "w-32 sm:w-44 md:w-52 h-24 sm:h-32 md:h-38 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-[#2d6a4f] bg-white shadow-black/10";

  return (
    <div id="about" ref={containerRef} className="relative h-[220vh] bg-[#FFF5E3] text-[#160d02]">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between overflow-hidden px-4 py-8">

        {/* Headline Header Block */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="z-30 text-center max-w-xl pt-1 sm:pt-6 select-none px-2"
        >
          <h2 className="text-lg sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#160d02] tracking-tight leading-snug">
            Everything homes & estates living{' '}
            <span className="font-serif-luxury text-[#160d02] inline-block">
              should be
            </span>
          </h2>
        </motion.div>

        {/* Screenshot 2: Scattered Grid of 7 Cards (6 Outer Cards 100% Identical in Size) */}
        <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto">

          {/* 1. Center Focal Card */}
          <motion.div
            style={{ scale: centerScale }}
            className="z-20 w-44 sm:w-60 md:w-72 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2d6a4f] bg-white shadow-black/20"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              alt="Living Room Focal"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 2. Top Left Card */}
          <motion.div
            style={{ x: tlX, y: tlY, scale: tlScale }}
            className={`absolute top-[10%] left-[10%] sm:left-[14%] z-10 ${outerCardStyle}`}
          >
            <img
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop"
              alt="Suite Bedroom"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 3. Top Right Card */}
          <motion.div
            style={{ x: trX, y: trY, scale: trScale }}
            className={`absolute top-[10%] right-[10%] sm:right-[14%] z-10 ${outerCardStyle}`}
          >
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
              alt="Estate Exterior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 4. Mid Left Card */}
          <motion.div
            style={{ x: mlX, y: mlY, scale: mlScale }}
            className={`absolute top-[38%] left-[4%] sm:left-[7%] z-10 ${outerCardStyle}`}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
              alt="Luxury Lounge"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 5. Mid Right Card */}
          <motion.div
            style={{ x: mrX, y: mrY, scale: mrScale }}
            className={`absolute top-[38%] right-[4%] sm:right-[7%] z-10 ${outerCardStyle}`}
          >
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop"
              alt="Resort Pool Aerial"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 6. Bot Left Card */}
          <motion.div
            style={{ x: blX, y: blY, scale: blScale }}
            className={`absolute bottom-[10%] left-[10%] sm:left-[14%] z-10 ${outerCardStyle}`}
          >
            <img
              src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop"
              alt="Infinity Pool Sunset"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 7. Bot Right Card */}
          <motion.div
            style={{ x: brX, y: brY, scale: brScale }}
            className={`absolute bottom-[10%] right-[10%] sm:right-[14%] z-10 ${outerCardStyle}`}
          >
            <img
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop"
              alt="Master Bedroom Balcony"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default ScrollGallery;
