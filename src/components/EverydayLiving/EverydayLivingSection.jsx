import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Award, Users, Building2 } from 'lucide-react';

/**
 * EverydayLivingSection Component
 * Completely fills the left side gap with rich brand story content, philosophy quote box,
 * animated phase transition checklists, and stat badges.
 */
export const EverydayLivingSection = () => {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Track scroll progress through this section (0 to 1)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Track active scroll phase (0, 1, 2) cleanly
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.35) {
      if (activeIdx !== 0) setActiveIdx(0);
    } else if (latest < 0.7) {
      if (activeIdx !== 1) setActiveIdx(1);
    } else {
      if (activeIdx !== 2) setActiveIdx(2);
    }
  });

  // 3 Phases of Right-side Vertical Images and Left Content
  const phases = [
    {
      id: 1,
      title: 'Customized Construction Solutions',
      tagline: 'Heritage of Quality Housing',
      desc: 'Tailored floorplans, teakwood doors, granite flooring, and modular fittings designed to your exact family needs across prime Chennai hubs.',
      checklist: [
        '1000+ Happy families across Chennai',
        'Customized floorplans & interior finishes',
        'Prime hubs: Velachery, OMR, Porur & Tambaram'
      ],
      cardImg: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
      mainImg: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Crafted Interior Architecture',
      tagline: 'Modularity & Modern Comfort',
      desc: 'Space-optimizing kitchens, custom wardrobes, ambient ceiling lighting, and elegant living rooms engineered for luxury and longevity.',
      checklist: [
        'Bespoke modular kitchen layouts',
        'Custom teakwood & glass woodwork',
        'Living spaces engineered for luxury'
      ],
      cardImg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
      mainImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Legal Scrutiny & Clear Titles',
      tagline: '100% Peace of Mind Guarantee',
      desc: 'Full CMDA / DTCP approvals, verified legal titles, on-time project delivery, and seamless bank loan eligibility for every home.',
      checklist: [
        '100% CMDA & DTCP legal approvals',
        'Verified titles by leading advocates',
        'On-time delivery with zero compromises'
      ],
      cardImg: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
      mainImg: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  // Right-side image scroll Y-transforms (Stacked Overlay approach so background NEVER turns blank)
  const rightImgY2 = useTransform(scrollYProgress, [0.25, 0.55], ['100%', '0%']);
  const rightImgY3 = useTransform(scrollYProgress, [0.60, 0.90], ['100%', '0%']);

  return (
    <div id="interior" ref={sectionRef} className="relative h-auto lg:h-[250vh] bg-[#FFF5E3] text-[#160d02] py-10 lg:py-0">
      {/* Stage: Sticky full viewport on desktop (lg:), regular flow on mobile */}
      <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen w-full overflow-visible lg:overflow-hidden flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-4 lg:py-6 max-w-[1800px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center h-auto lg:h-full lg:max-h-[calc(100vh-2rem)] my-auto">

          {/* Left Column (50% Width) - Neatly grouped content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 py-1 my-auto">

            {/* Top Header Block */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#160d02] tracking-tight leading-[1.08]">
                Made for{' '}
                <span className="font-serif-luxury text-[#160d02] inline-block">
                  everyday living
                </span>
              </h2>

              <p className="text-xs sm:text-sm lg:text-base font-roboto font-normal text-[#160d02]/85 leading-relaxed max-w-xl">
                One of the fastest growing construction firms in Chennai. We specialize in constructing quality buildings with customized solutions for thousands of happy families.
              </p>
            </div>

            {/* Mobile Phase Selector Tabs (visible on < lg screens) */}
            <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
              {phases.map((phase, idx) => (
                <button
                  key={phase.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeIdx === idx
                      ? 'bg-[#2d6a4f] text-white shadow-md scale-102'
                      : 'bg-white/80 text-[#160d02]/70 hover:bg-white border border-black/5'
                  }`}
                >
                  0{idx + 1}. {phase.title.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Middle Content Layout: Left Sub-column (Rich Text & Animated Checklist) + Right Sub-column (Card Image) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">

              {/* Left Sub-column (7 cols): Animated Content synced to active scroll phase */}
              <div className="sm:col-span-7 space-y-3">

                {/* Philosophy Quote Badge */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/85 border-l-4 border-[#2d6a4f] shadow-md backdrop-blur-md">
                  <span className="text-[11px] sm:text-xs font-roboto font-black text-[#2d6a4f] uppercase tracking-wider block mb-0.5">Our Philosophy</span>
                  <p className="text-xs sm:text-sm lg:text-base italic text-[#160d02] font-serif-luxury font-semibold">"Our customers are our ambassadors."</p>
                </div>

                {/* Dynamic Animated Content Container synced with activeIdx */}
                <div className="min-h-[120px] sm:min-h-[150px] relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={phases[activeIdx].id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="space-y-2 sm:space-y-2.5"
                    >
                      <h3 className="text-sm sm:text-base font-roboto font-bold text-[#160d02]">
                        {phases[activeIdx].title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#160d02]/85 leading-relaxed">
                        {phases[activeIdx].desc}
                      </p>

                      {/* Checklist items */}
                      <ul className="space-y-1.5 pt-0.5 text-xs sm:text-sm font-roboto font-semibold text-[#160d02]">
                        {phases[activeIdx].checklist.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2d6a4f] flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

              {/* Right Sub-column (5 cols): Feature Image Card Container with Cross-fading Images */}
              <div className="sm:col-span-5 flex justify-center sm:justify-end pt-2 sm:pt-0">
                <div className="w-full max-w-[260px] sm:max-w-full aspect-[4/3] overflow-hidden shadow-xl rounded-2xl border-2 border-[#2d6a4f] bg-[#e0d6cb] relative group">
                  {phases.map((phase, idx) => (
                    <motion.img
                      key={`card-img-${phase.id}`}
                      src={phase.cardImg}
                      alt={phase.title}
                      initial={false}
                      animate={{ opacity: activeIdx === idx ? 1 : 0, scale: activeIdx === idx ? 1 : 1.05 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ))}

                  {/* Phase Indicator Badge on top of image */}
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white font-roboto text-xs font-bold border border-white/20">
                    0{activeIdx + 1} / 03
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Stats Strip */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 border-t border-black/10">
              <div className="p-2 sm:p-3 rounded-xl bg-white/80 border border-black/5 text-center shadow-sm">
                <span className="font-roboto font-black text-base sm:text-2xl text-[#FE9601] block">1000+</span>
                <span className="text-[9px] sm:text-xs font-roboto font-bold text-[#160d02]/80 uppercase tracking-wider block mt-0.5">Happy Families</span>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-white/80 border border-black/5 text-center shadow-sm">
                <span className="font-roboto font-black text-base sm:text-2xl text-[#FE9601] block">120+</span>
                <span className="text-[9px] sm:text-xs font-roboto font-bold text-[#160d02]/80 uppercase tracking-wider block mt-0.5">Projects Done</span>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-white/80 border border-black/5 text-center shadow-sm">
                <span className="font-roboto font-black text-base sm:text-2xl text-[#FE9601] block">20+ Yrs</span>
                <span className="text-[9px] sm:text-xs font-roboto font-bold text-[#160d02]/80 uppercase tracking-wider block mt-0.5">Heritage</span>
              </div>
            </div>

          </div>

          {/* Right Column - Showcase Vertical Image Container (Responsive for mobile & desktop) */}
          <div className="lg:col-span-6 h-[300px] sm:h-[420px] lg:h-[88vh] overflow-hidden relative shadow-2xl bg-[#e0d6cb] rounded-2xl lg:rounded-none border border-black/10">

            {/* Slide 1 Image - Base Layer */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={phases[0].mainImg}
                alt="Bedroom Wall Art & Living Setting"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Slide 2 Image - Crossfades on mobile or slides UP on desktop */}
            <motion.div
              style={{ y: rightImgY2 }}
              animate={{ opacity: activeIdx >= 1 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={phases[1].mainImg}
                alt="Luxury Living Lounge"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Slide 3 Image - Crossfades on mobile or slides UP on desktop */}
            <motion.div
              style={{ y: rightImgY3 }}
              animate={{ opacity: activeIdx >= 2 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
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
