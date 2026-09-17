import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wifi, Compass, Award, Sparkles, ArrowDownRight, MapPin } from 'lucide-react';

export const PropertyHighlights = ({ onOpenTour, onOpenApply }) => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "24/7 Security & Concierge",
      desc: "Biometric access control, private garage parking, and round-the-clock security personnel for peace of mind."
    },
    {
      icon: Wifi,
      title: "Ultra High-Speed Gigabit WiFi",
      desc: "Dedicated fiber network, quiet study suites, and pod workstations designed for university students & remote executives."
    },
    {
      icon: Compass,
      title: "Prime Location near USC",
      desc: "Walking distance to Williams-Brice Stadium, academic halls, fine dining, and vibrant nightlife districts."
    },
    {
      icon: Award,
      title: "Resort Sky Lounge & Pool",
      desc: "Heated infinity pool, rooftop cabanas, outdoor kitchen, and private event space for residents."
    }
  ];

  return (
    <section id="residences" className="relative bg-[#0a0b0e] py-24 px-4 sm:px-8 border-t border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#fe9601]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffc973]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#fe9601]">
              <Sparkles className="w-4 h-4" />
              <span>Unmatched Living Standards</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white">
              Designed for Focused Mornings & Balanced Living
            </h2>
          </div>
          <p className="text-white/70 max-w-md text-sm leading-relaxed">
            21OAKS combines estate-level craftsmanship with modern technology to deliver Columbia’s most coveted residential experience.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#fe9601]/50 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(254,150,1,0.15)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-[#fe9601] group-hover:bg-[#fe9601] group-hover:text-black transition-all mb-6">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif-luxury font-semibold text-white mb-2 group-hover:text-[#ffc973] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Banner CTA Card (Using Client's Requested Golden Gradient & Color Scheme) */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#181a22] via-[#20222e] to-[#181a22] border border-[#ffc973]/30 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <span className="px-3.5 py-1 rounded-full bg-[#2d6a4f] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              Limited Availability for Fall 2026
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white">
              Secure Your Estate Residence Today
            </h3>
            <p className="text-sm text-white/70">
              Schedule your private tour or apply now to unlock exclusive pre-leasing concessions and custom furnished options.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenTour}
              className="glass-pill px-6 py-3.5 rounded-2xl font-semibold text-sm text-white hover:bg-white/20 transition-all text-center cursor-pointer"
            >
              Book Private Tour
            </button>
            <button
              onClick={onOpenApply}
              className="btn-gold-gradient px-8 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Get the report & Apply</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyHighlights;
