import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Bed, Bath, Move, Sparkles } from 'lucide-react';
import { floorplansData } from '../../data/floorplansData';

/**
 * BalancedLivingSection Component
 * ALL 4 floorplan cards explicitly displayed on all desktop & laptop screens (md:grid-cols-4 gap-4).
 * Smooth 1.2s right-to-left gliding entrance with primary orange (#FE9601) theme.
 */
export const BalancedLivingSection = ({ onOpenApply }) => {
  return (
    <section id="gallery" className="relative w-full py-20 px-4 sm:px-6 md:px-8 bg-[#FFF5E3] text-[#160d02] overflow-hidden">

      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FE9601]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFC973]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto space-y-10 relative z-10">

        {/* Centered Headline */}
        <div className="text-center max-w-2xl mx-auto space-y-1 select-none">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2d6a4f]/15 border border-[#2d6a4f]/40 text-[#2d6a4f] text-xs font-roboto font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>Luxury Floorplans</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#160d02] tracking-tight leading-snug">
            Where luxury living
          </h2>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#160d02] tracking-tight leading-snug">
            feels{' '}
            <span className="font-serif-luxury text-[#160d02] inline-block">
              balanced
            </span>
          </h2>
        </div>

        {/* ALL 4 Cards Grid - md:grid-cols-4 for 768px+ desktops/laptops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 pt-2 items-stretch w-full">
          {floorplansData.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ x: 140, opacity: 0, rotate: 0 }}
              whileInView={{
                x: [140, -12, 8, -4, 0],
                opacity: 1,
                rotate: 0,
                transition: {
                  duration: 1.2,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="bg-white p-3.5 sm:p-4 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_45px_rgba(254,150,1,0.25)] border border-[#160d02]/10 flex flex-col justify-between transition-shadow duration-300 cursor-pointer group"
            >
              <div className="space-y-3">

                {/* Image Container with Available Status Badge */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#f4ece1]">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />

                  {/* Available Tag in Helper Green #2d6a4f */}
                  {plan.available && (
                    <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-[#2d6a4f] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Available</span>
                    </div>
                  )}

                  {/* Spec Pills Badge at bottom of image */}
                  <div className="absolute bottom-2 left-1.5 right-1.5 flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-lg border border-black/10 text-[9px] sm:text-[10px] font-bold text-[#160d02] shadow-sm">
                    <div className="flex items-center gap-1 px-1 py-0.5 rounded bg-gray-100">
                      <Bed className="w-2.5 h-2.5 text-[#FE9601]" />
                      <span>{plan.specs.beds} Bed</span>
                    </div>
                    <div className="flex items-center gap-1 px-1 py-0.5 rounded bg-gray-100">
                      <Bath className="w-2.5 h-2.5 text-[#FE9601]" />
                      <span>{plan.specs.baths} Bath</span>
                    </div>
                    <div className="flex items-center gap-1 px-1 py-0.5 rounded bg-gray-100 ml-auto">
                      <Move className="w-2.5 h-2.5 text-[#FE9601]" />
                      <span>{plan.specs.sqft} ft²</span>
                    </div>
                  </div>
                </div>

                {/* Title & Price Header */}
                <div className="flex items-center justify-between pt-0.5">
                  <h3 className="font-serif-luxury font-bold text-base sm:text-lg text-[#160d02]">
                    {plan.title}
                  </h3>
                  <div className="px-2 py-0.5 rounded-full bg-[#FFF5E3] border border-[#FE9601]/40 text-[#160d02] font-bold text-xs">
                    <span className="text-[#FE9601] font-normal">$</span> {plan.price}
                  </div>
                </div>

                {/* Description Copy */}
                <p className="text-[11px] sm:text-xs text-[#160d02]/70 font-sans leading-relaxed min-h-[40px]">
                  {plan.desc}
                </p>

              </div>

              {/* Explore Details CTA Button in Primary Orange */}
              <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                <button
                  onClick={onOpenApply}
                  className="flex-1 btn-gold-gradient py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-between group-hover:shadow-md transition-all"
                >
                  <span>Explore Details</span>
                  <div className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowDownRight className="w-3 h-3 text-black" />
                  </div>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BalancedLivingSection;
