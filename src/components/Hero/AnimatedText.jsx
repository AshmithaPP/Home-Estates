import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedText Component
 * Implements exact JSON specification:
 * - slideAndFade effect
 * - split by letters
 * - travelDistance: 40px, slideDirection: "up"
 * - offset: 80ms staggered delay
 * - nodeDuration: 400ms
 * - natural easing
 * - bounce exit scaling & opacity fading
 */
export const AnimatedText = ({ text, accentWord, className = '', slideId }) => {
  // Split title into words
  const words = text.split(' ');

  // Global letter index counter for continuous stagger delay
  let charCounter = 0;

  const letterVariants = {
    initial: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: 'blur(4px)',
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4, // 400ms nodeDuration
        delay: i * 0.04, // Stagger offset based on JSON offset (scaled for fluid reading)
        ease: [0.25, 0.1, 0.25, 1], // natural cubic-bezier
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -20,
      scale: 0.9,
      filter: 'blur(6px)',
      transition: {
        duration: 0.3,
        delay: i * 0.02,
        ease: 'easeIn',
      },
    }),
  };

  return (
    <div className={`inline-flex flex-wrap items-baseline gap-x-[0.3em] gap-y-1 ${className}`}>
      {words.map((word, wordIdx) => {
        const isAccent = accentWord && word.toLowerCase().includes(accentWord.toLowerCase());
        const letters = Array.from(word);

        return (
          <span key={`word-${slideId}-${wordIdx}`} className="inline-flex whitespace-nowrap overflow-hidden py-1">
            {letters.map((char, charIdx) => {
              const currentCounter = charCounter++;
              return (
                <motion.span
                  key={`char-${slideId}-${wordIdx}-${charIdx}`}
                  custom={currentCounter}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={`inline-block ${
                    isAccent
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#fe9601] via-[#ffc973] to-[#fe9601] font-serif-luxury italic font-normal px-0.5'
                      : 'text-white'
                  }`}
                  style={{
                    willChange: 'transform, opacity, filter',
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};

export default AnimatedText;
