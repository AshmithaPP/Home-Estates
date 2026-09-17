import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare } from 'lucide-react';

/**
 * ContactSection Component
 * Exact replica of the reference 2-column contact layout, using brand color scheme
 * and authentic Ajay Homes & Estates real estate content (no lorem ipsum).
 * Features bottom-to-top transition animations when scrolled into view.
 */
export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative w-full py-16 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#FFF5E3] text-[#160d02] border-t border-[#FE9601]/20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main 2-Column Grid matching reference layout - Equal Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Headline, Subtitle, Bullet list, and Address/Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between pr-0 lg:pr-4 space-y-6"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-roboto text-[#160d02] tracking-tight leading-none">
                Contact us
              </h2>

              {/* Tagline */}
              <h3 className="mt-4 text-base sm:text-lg font-bold font-roboto text-[#160d02] tracking-tight">
                One of the Fastest Growing Construction Firms in Chennai
              </h3>

              {/* Subtitle Description */}
              <p className="mt-2.5 text-xs sm:text-sm font-roboto text-[#666057] leading-relaxed max-w-lg">
                Ajay Homes offers the most desired, fully developed residential flats in and around Chennai. We specialize in constructing quality buildings and offer customized solutions for our clients.
              </p>

              {/* Highlights Bullet List */}
              <ul className="mt-5 space-y-2 text-xs sm:text-sm font-roboto text-[#160d02] font-semibold">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                  <span>Families of thousands stand testimony to our heritage of quality housing and value for money.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                  <span>Customized construction solutions tailored to every client's needs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                  <span>Fully developed residential flats in prime Chennai locations.</span>
                </li>
              </ul>
            </div>

            {/* Bottom 2-Column Details: Our Address & Contact Us */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-[#160d02]/10">
              
              {/* Address sub-col */}
              <div>
                <h3 className="text-sm sm:text-base font-bold font-roboto text-[#160d02] mb-1.5">
                  Our Address
                </h3>
                <p className="text-xs sm:text-sm font-roboto text-[#706a61] leading-relaxed">
                  Ajay Homes & Estates, Plot No. 42, Prime Luxury Avenue, Anna Nagar West, Chennai, Tamil Nadu - 600040.
                </p>
              </div>

              {/* Contact Us sub-col */}
              <div>
                <h3 className="text-sm sm:text-base font-bold font-roboto text-[#160d02] mb-1.5">
                  Contact Us
                </h3>
                <div className="space-y-1.5 text-xs sm:text-sm font-roboto text-[#706a61]">
                  <div className="flex items-center gap-2">
                    <span>+91 98400 12345</span>
                    <MessageSquare className="w-3.5 h-3.5 text-[#2d6a4f] stroke-[2]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span>info@ajayhomes.in</span>
                    <MessageSquare className="w-3.5 h-3.5 text-[#2d6a4f] stroke-[2]" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Exact Form Framed Box Container */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            {/* Solid Framed Taupe Container Box matching screenshot style */}
            <div className="bg-[#bfae9c] p-6 sm:p-10 shadow-lg">
              
              {submitted ? (
                <div className="bg-white p-10 text-center space-y-4 shadow-inner min-h-[360px] flex flex-col items-center justify-center">
                  <CheckCircle2 className="w-14 h-14 text-[#FE9601] mx-auto animate-bounce" />
                  <h3 className="font-roboto font-bold text-2xl text-[#160d02]">
                    Thank You!
                  </h3>
                  <p className="font-roboto text-sm text-gray-600 max-w-xs mx-auto">
                    Your inquiry has been successfully submitted. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full name input */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full bg-white px-5 py-4 text-sm font-roboto text-[#160d02] placeholder:text-[#a09a90] border-none outline-none focus:ring-2 focus:ring-[#FE9601] transition-all"
                    />
                  </div>

                  {/* Your email input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full bg-white px-5 py-4 text-sm font-roboto text-[#160d02] placeholder:text-[#a09a90] border-none outline-none focus:ring-2 focus:ring-[#FE9601] transition-all"
                    />
                  </div>

                  {/* Type a subject input */}
                  <div>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Type a subject (e.g. 3BHK Flat, Joint Venture)"
                      className="w-full bg-white px-5 py-4 text-sm font-roboto text-[#160d02] placeholder:text-[#a09a90] border-none outline-none focus:ring-2 focus:ring-[#FE9601] transition-all"
                    />
                  </div>

                  {/* Type a message input */}
                  <div>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type a message..."
                      className="w-full bg-white px-5 py-4 text-sm font-roboto text-[#160d02] placeholder:text-[#a09a90] border-none outline-none focus:ring-2 focus:ring-[#FE9601] transition-all resize-none"
                    />
                  </div>

                  {/* Full Width Submit Button inside container */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#2b2725] text-white font-roboto font-bold text-base hover:bg-[#FE9601] hover:text-[#0c0d10] transition-colors duration-200 cursor-pointer shadow-md"
                    >
                      Submit
                    </button>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
