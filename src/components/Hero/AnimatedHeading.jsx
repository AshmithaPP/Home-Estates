import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * AnimatedHeading Component
 * Left-aligned, reduced elegant typography matching Screenshot 1.
 * Motion: Horizontal slide from left + letter-split bottom-up entrance + exit fade out.
 */
export const AnimatedHeading = ({ headingLine1, headingLine2, accentWord, slideId }) => {
  const renderLine = (lineText) => {
    const words = lineText.split(' ');
    let globalCharIndex = 0;

    return (
      <div className="flex flex-wrap items-baseline gap-x-[0.25em] leading-tight justify-start">
        {words.map((word, wordIdx) => {
          const isAccent = accentWord && word.toLowerCase().includes(accentWord.toLowerCase());
          const letters = Array.from(word);

          return (
            <span key={`word-${slideId}-${wordIdx}`} className="inline-flex whitespace-nowrap overflow-hidden py-0.5">
              {letters.map((char, charIdx) => {
                const charCounter = globalCharIndex++;
                return (
                  <motion.span
                    key={`char-${slideId}-${wordIdx}-${charIdx}`}
                    custom={charCounter}
                    variants={{
                      initial: {
                        opacity: 0,
                        y: 30,
                        x: -12,
                        scale: 0.95,
                        filter: 'blur(3px)',
                      },
                      animate: (i) => ({
                        opacity: 1,
                        y: 0,
                        x: 0,
                        scale: 1,
                        filter: 'blur(0px)',
                        transition: {
                          duration: 0.4,
                          delay: i * 0.03, // Sequential letter delay
                          ease: [0.25, 0.1, 0.25, 1], // Natural easing
                        },
                      }),
                      exit: (i) => ({
                        opacity: 0,
                        y: -20,
                        scale: 0.9,
                        filter: 'blur(4px)',
                        transition: {
                          duration: 0.25,
                          delay: i * 0.015,
                          ease: 'easeIn',
                        },
                      }),
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`inline-block ${isAccent
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FE9601] via-[#FFC973] to-[#FE9601] font-serif-luxury italic font-normal px-0.5'
                        : 'text-white'
                      }`}
                    style={{ willChange: 'transform, opacity, filter' }}
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

  return (
    <div className="min-h-0 sm:min-h-[120px] md:min-h-[140px] text-left select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={`heading-block-${slideId}`}
          initial={{ x: -140, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              x: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.4 },
            },
          }}
          exit={{
            scale: 0.92,
            opacity: 0,
            transition: { duration: 0.3, ease: 'easeIn' },
          }}
          className="space-y-0.5"
        >
          {/* Line 1: Live better, */}
          <div className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-bold text-white tracking-tight leading-[1.08]">
            {renderLine(headingLine1)}
          </div>

          {/* Line 2: closer to USC */}
          <div className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-bold text-white tracking-tight leading-[1.08]">
            {renderLine(headingLine2)}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedHeading;
