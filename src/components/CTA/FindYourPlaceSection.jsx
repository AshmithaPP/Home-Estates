import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FindYourPlaceSection = ({ onOpenTourModal }) => {
  return (
    <section className="relative w-full h-[540px] sm:h-[640px] lg:h-[720px] overflow-hidden bg-[#0c0d10]">
      {/* Background Image Container - 100% Full Width Edge-to-Edge */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Ajay Homes & Estates Luxury Interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Ambient Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Floating Card Content Container */}
      <div className="relative max-w-7xl mx-auto h-full flex items-center px-6 sm:px-12 lg:px-20 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-[500px] md:w-[560px] bg-[#f2e6f9] text-[#120b02] rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-2xl border border-white/40 relative overflow-hidden"
        >
          {/* Card Headline */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#2d6a4f] font-extrabold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2d6a4f] animate-pulse" />
              Joint Venture Property Promotion
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif-luxury leading-[1.1] tracking-tight text-[#140c02]">
              Interested in promoting your property?
            </h2>
            <p className="text-xs sm:text-sm text-[#140c02]/85 font-sans leading-relaxed pt-1">
              Get the best offer in the market with Chennai's most trusted partner. Let's build value together — for your land and our legacy.
            </p>
          </div>

          {/* Bottom Controls inside card */}
          <div className="mt-8 pt-4 flex items-center justify-between border-t border-black/10">
            {/* Button Group */}
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenTourModal}
                className="btn-gold-gradient px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer shadow-md"
              >
                Get Best Offer
              </button>
              <button
                onClick={onOpenTourModal}
                className="w-10 h-10 rounded-xl bg-[#2d6a4f] hover:bg-[#23533e] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Line Art Door Icon */}
            <div className="text-[#181109]/70 opacity-80 hover:opacity-100 transition-opacity">
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 4h-7a2 2 0 0 0 -2 2v14" />
                <path d="M6 20h12" />
                <path d="M13 4l6 2v14l-6 2v-18z" />
                <circle cx="15.5" cy="13.5" r=".5" fill="currentColor" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FindYourPlaceSection;
