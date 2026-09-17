import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const faqItems = [
  {
    id: '1',
    question: 'How do I apply for an apartment?',
    answer:
      'You can apply directly online through our digital portal by clicking "Apply Now" or scheduling a private consultation with our leasing team. The online form takes under 10 minutes to complete.'
  },
  {
    id: '2',
    question: 'What does by-the-bed leasing mean?',
    answer:
      'By-the-bed leasing means you rent an individual bedroom and private bathroom within a multi-bedroom suite. You are only responsible for your individual lease contract, giving you complete financial independence.'
  },
  {
    id: '3',
    question: 'What do I need to apply?',
    answer:
      'You will need a valid government-issued ID, proof of income or student enrollment status, emergency contact details, and contact info for a guarantor if applicable.'
  },
  {
    id: '4',
    question: 'Do I need a guarantor?',
    answer:
      'If you do not meet our minimum income or credit requirements independently, a guarantor (such as a parent or guardian) can co-sign your lease agreement.'
  },
  {
    id: '5',
    question: 'How long does approval take?',
    answer:
      'Most completed applications are reviewed and approved within 24 to 48 business hours once all supporting documentation and background checks are submitted.'
  },
  {
    id: '6',
    question: 'Can I apply if I\'m not a student?',
    answer:
      'Yes! While our developments offer world-class student amenities, we welcome young professionals and individuals looking for premium estate living.'
  },
  {
    id: '7',
    question: 'How is rent paid?',
    answer:
      'Rent is paid conveniently through our resident portal via bank transfer, credit card, or automatic monthly ACH payments due on the 1st of each month.'
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
                      <span className="text-sm sm:text-lg font-normal text-white/90 group-hover:text-[#ffc973] transition-colors leading-snug">
                        {item.question}
                      </span>
                      <span
                        className={`text-lg sm:text-xl font-light text-white/70 group-hover:text-white transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45 text-[#fe9601]' : ''
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
