import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowDownRight, FileText, Sparkles, CheckCircle2, Download, ShieldCheck } from 'lucide-react';

export const ApplyModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative w-full max-w-2xl bg-[#fff5e3] text-[#160d02] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden border border-[#ffc973]"
        >
          {/* Top Decorative Sparkle (Screenshot 2: 4-point star element) */}
          <div className="absolute top-8 right-16 text-[#fe9601]">
            <Sparkles className="w-8 h-8 fill-[#fe9601]" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/10 hover:bg-black/20 text-[#160d02] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              {/* Screenshot 2 OUT NOW pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#160d02] text-xs font-bold tracking-widest uppercase text-[#160d02]">
                <span>OUT NOW</span>
                <ArrowDownRight className="w-4 h-4" />
              </div>

              {/* Screenshot 2 Big Title Typography */}
              <h2 className="text-3xl sm:text-5xl font-montserrat font-black leading-tight tracking-tight uppercase text-[#160d02]">
                2026 GLOBAL LUXURY & ESTATE TRENDS REPORT
              </h2>

              <p className="text-sm sm:text-base text-[#160d02]/80 font-medium max-w-lg leading-relaxed">
                Get priority access to 21OAKS pre-leasing specials, floorplan specifications, and our exclusive 2026 estate market analysis.
              </p>

              {/* Form with requested "Get the report" button gradient */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#160d02]/80 mb-1.5">
                    Your Preferred Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#ffc973] rounded-2xl px-5 py-3.5 text-base text-[#160d02] placeholder:text-[#160d02]/40 focus:outline-none focus:ring-2 focus:ring-[#fe9601]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="btn-gold-gradient py-4 px-8 rounded-2xl font-black text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-xl hover:scale-102 active:scale-98 cursor-pointer"
                  >
                    <span>Get the report</span>
                    <ArrowDownRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#160d02]/70 px-2 py-2">
                    <ShieldCheck className="w-4 h-4 text-[#fe9601]" />
                    <span>Instant PDF Download + Priority Pre-Lease VIP Pass</span>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#fe9601] flex items-center justify-center mx-auto text-[#160d02]">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-montserrat font-black uppercase">Report Sent!</h3>
              <p className="text-sm text-[#160d02]/80 max-w-md mx-auto">
                We have emailed the 2026 Trends Report and pre-lease application link to <span className="font-bold underline">{email}</span>.
              </p>
              <button
                onClick={onClose}
                className="btn-gold-gradient px-8 py-3.5 rounded-2xl font-bold uppercase text-xs tracking-wider mt-4"
              >
                Close & Return to Site
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ApplyModal;
