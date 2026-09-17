import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const faqItems = [
  {
    id: '1',
    question: 'What makes Ajay Homes one of the fastest growing builders in Chennai?',
    answer:
      'Thousands of happy families stand testimony to our heritage of quality housing, custom construction solutions, on-time delivery, and proven value for money across prime Chennai locations.'
  },
  {
    id: '2',
    question: 'Can I customize the floorplan and interior finishes for my residential flat?',
    answer:
      'Yes! We specialize in providing custom construction solutions tailored to every client\'s individual needs, including modular kitchen layouts, wood finishes, electrical layouts, and premium tile selections.'
  },
  {
    id: '3',
    question: 'How does Joint Venture property promotion work with Ajay Homes?',
    answer:
      'If you own land in or around Chennai, we partner with you via Joint Venture to construct luxury flats or villas. We offer the best market share/payout, complete legal transparency, and end-to-end project execution.'
  },
  {
    id: '4',
    question: 'What locations in Chennai do you have active and completed projects in?',
    answer:
      'Our signature residential projects and gated communities are located in prime hubs including Velachery, OMR, Porur, Tambaram, Anna Nagar, and ECR.'
  },
  {
    id: '5',
    question: 'Are all Ajay Homes projects legally verified with clear titles?',
    answer:
      'Yes, 100%. Every project undergoes rigorous legal scrutiny by leading property advocates, securing all necessary CMDA / DTCP approvals, clear titles, and seamless bank loan eligibility.'
  },
  {
    id: '6',
    question: 'What is the typical project completion timeline for custom construction?',
    answer:
      'We pride ourselves on promptness and on-time handovers. Most residential flat developments are completed within 12 to 18 months, with regular milestone progress updates for buyers.'
  }
];

const FAQSection = ({ onOpenTourModal, onOpenApply }) => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-8 sm:py-10 px-6 sm:px-12 lg:px-20 bg-[#0c0d10] text-[#fff5e3] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline - Centered, 2-line structure */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2d6a4f]/20 border border-[#2d6a4f]/50 text-[#2d6a4f] text-xs font-roboto font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#2d6a4f] animate-pulse" />
            <span>Help & Assistance</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-white leading-snug font-serif-luxury">
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        {/* 2-Column Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column (4 cols) */}
          <div className="lg:col-span-4">
            {/* Top Subtitle */}
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-xs">
              Everything you might want to know before moving in.
            </p>
          </div>

          {/* Right Column - Accordions (8 cols) */}
          <div className="lg:col-span-8">
            <div className="border-t border-white/20">
              {faqItems.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className="border-b border-white/15 transition-colors duration-200"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full text-left py-2.5 sm:py-3.5 flex items-center justify-between gap-4 cursor-pointer group"
                    >
                      <span className="text-sm sm:text-lg font-normal text-white/90 group-hover:text-[#2d6a4f] transition-colors leading-snug">
                        {item.question}
                      </span>
                      <span
                        className={`text-lg sm:text-xl font-light text-white/70 group-hover:text-[#2d6a4f] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45 text-[#2d6a4f]' : ''
                          }`}
                      >
                        +
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
