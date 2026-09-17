import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * EverydayLivingSection Component
 * Fixes MotionValue reactivity using direct style opacity bindings for scroll transitions.
 */
export const EverydayLivingSection = () => {
  const sectionRef = useRef(null);

  // Track scroll progress through this section (0 to 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // 3 Phases of Right-side Vertical Images and Left Content
  const phases = [
    {
      id: 1,
      title: 'Private space',
      desc: 'Your space to reset and focus',
      cardImg: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
      mainImg: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Curated interiors',
      desc: 'Designed for modern comfort and ease',
      cardImg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
      mainImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Resort amenities',
      desc: 'Expansive views and dedicated service',
      cardImg: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
      mainImg: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  // Right-side image scroll Y-transforms
  const rightImgY1 = useTransform(scrollYProgress, [0, 0.35], ['0%', '-100%']);
  const rightImgY2 = useTransform(scrollYProgress, [0.35, 0.7], ['100%', '0%']);
  const rightImgY3 = useTransform(scrollYProgress, [0.7, 1], ['100%', '0%']);

  // MotionValue Opacity transforms for responsive scroll transitions
  const cardOpacity1 = useTransform(scrollYProgress, [0, 0.3, 0.38], [1, 1, 0]);
  const cardOpacity2 = useTransform(scrollYProgress, [0.35, 0.42, 0.65, 0.72], [0, 1, 1, 0]);
  const cardOpacity3 = useTransform(scrollYProgress, [0.68, 0.76, 1], [0, 1, 1]);

  const cardOpacities = [cardOpacity1, cardOpacity2, cardOpacity3];

  return (
    <div ref={sectionRef} className="relative h-[250vh] bg-[#FFF5E3] text-[#160d02]">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between px-6 sm:px-12 py-6 max-w-[1800px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full my-auto">
          
          {/* Left Column (50% Width) */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full py-4 space-y-4">
            
            {/* Top Headline */}
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal text-[#160d02] tracking-tight leading-[1.08]">
                Made for
              </h2>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal text-[#160d02] tracking-tight leading-[1.08]">
                <span className="underline-brush font-serif-luxury text-[#160d02] inline-block">
                  everyday living
                </span>
              </h2>
            </div>

            {/* Feature Image Card + Content Below */}
            <div className="flex flex-col items-end pr-2 sm:pr-6 pt-2 space-y-2">
              
              {/* Short Feature Image Container */}
              <div className="w-64 sm:w-80 lg:w-96 h-72 sm:h-96 lg:h-[420px] overflow-hidden shadow-2xl bg-white rounded-none border border-black/10 relative">
                {phases.map((phase, idx) => (
                  <motion.img
                    key={`card-${phase.id}`}
                    src={phase.cardImg}
                    alt="Interior Card"
                    style={{ opacity: cardOpacities[idx] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ))}
              </div>

              {/* Content Below Short Image (Dot + Title + Subtext) */}
              <div className="w-64 sm:w-80 lg:w-96 space-y-1 pt-1 text-left relative h-16">
                {phases.map((phase, idx) => (
                  <motion.div
                    key={`text-${phase.id}`}
                    style={{ opacity: cardOpacities[idx] }}
                    className="absolute inset-0 space-y-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                      <h4 className="font-serif-luxury font-bold text-sm sm:text-base text-[#160d02]">
                        {phase.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#160d02]/75 font-sans pl-3.5">
                      {phase.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>

          {/* Right Column - Tall Vertical Image Container */}
          <div className="lg:col-span-6 h-[88vh] sm:h-[92vh] overflow-hidden relative shadow-2xl bg-[#e0d6cb] rounded-none border border-black/10">
            
            {/* Slide 1 Image */}
            <motion.div
              style={{ y: rightImgY1 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={phases[0].mainImg}
                alt="Bedroom Wall Art & Living Setting"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Slide 2 Image */}
            <motion.div
              style={{ y: rightImgY2 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={phases[1].mainImg}
                alt="Luxury Living Lounge"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Slide 3 Image */}
            <motion.div
              style={{ y: rightImgY3 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={phases[2].mainImg}
                alt="Estate Dining & Balcony"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          </div>

        </div>

      </div>
    </div>
  );
};

export default EverydayLivingSection;
