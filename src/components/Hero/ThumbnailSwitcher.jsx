import React from 'react';
import { motion } from 'framer-motion';

/**
 * ThumbnailSwitcher Component
 * Replicates the bottom-right 3 thumbnail preview cards from Screenshot 1.
 * Supports manual thumbnail click and auto-play timer visual indicator.
 */
export const ThumbnailSwitcher = ({ slides, currentSlide, onSelectSlide, isPaused }) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 glass-card rounded-2xl border border-white/15 shadow-2xl backdrop-blur-xl">
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;

        return (
          <button
            key={slide.id}
            onClick={() => onSelectSlide(index)}
            className={`group relative overflow-hidden rounded-xl w-16 sm:w-24 md:w-28 h-12 sm:h-16 md:h-18 transition-all duration-500 cursor-pointer text-left ${
              isActive
                ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-105 shadow-[0_0_20px_rgba(254,150,1,0.4)]'
                : 'opacity-65 hover:opacity-100 hover:scale-102 filter grayscale-[30%] hover:grayscale-0'
            }`}
          >
            {/* Thumbnail Image */}
            <img
              src={slide.thumbnail}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Slide Index Badge */}
            <div className="absolute top-1 left-1.5 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] font-bold text-white tracking-widest">
              0{index + 1}
            </div>

            {/* Active Indicator & Countdown Progress Line */}
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 overflow-hidden">
                <motion.div
                  key={`timer-${index}-${isPaused}`}
                  initial={{ width: '0%' }}
                  animate={{ width: isPaused ? '0%' : '100%' }}
                  transition={{
                    duration: isPaused ? 0 : 6,
                    ease: 'linear',
                  }}
                  className="h-full bg-gradient-to-r from-[#fe9601] to-[#ffc973]"
                />
              </div>
            )}

            {/* Hover Title tooltip on laptop */}
            <div className="absolute bottom-1 left-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
              <p className="text-[9px] font-medium text-white/90 truncate leading-none">
                {slide.tagline}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ThumbnailSwitcher;
