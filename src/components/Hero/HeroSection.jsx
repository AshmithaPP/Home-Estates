import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, MapPin, Bed, Bath, Move, ArrowUpRight, Sparkles } from 'lucide-react';

import { heroSlides } from '../../data/slidesData';
import FoldingBackground from './FoldingBackground';
import AnimatedText from './AnimatedText';
import FloatingBadge from './FloatingBadge';
import ThumbnailSwitcher from './ThumbnailSwitcher';
import Navbar from './Navbar';
import TourModal from '../Modals/TourModal';
import ApplyModal from '../Modals/ApplyModal';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Modal States
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Touch Swipe Handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play timer effect (6 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  const handleNextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSelectSlide = (index) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Touch gesture listeners
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left -> Next slide
      handleNextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right -> Prev slide
      handlePrevSlide();
    }
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0c0d10]"
    >
      {/* 3D Folding Background Carousel */}
      <FoldingBackground
        currentSlide={currentSlide}
        slides={heroSlides}
        direction={direction}
      />

      {/* Floating Navigation Header (Screenshot 1 Replica) */}
      <Navbar
        onOpenTourModal={() => setIsTourModalOpen(true)}
        onOpenApplyModal={() => setIsApplyModalOpen(true)}
      />

      {/* Main Center Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-28 sm:pt-36 pb-12 flex-1 flex flex-col justify-between">
        
        {/* Screenshot 1 Center Floating Badge */}
        <FloatingBadge text={activeSlide.badge} slideId={activeSlide.id} />

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto pt-6">
          
          {/* Screenshot 1 Left Content Block: Title + Subtitle */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Location Tag */}
            <motion.div
              key={`loc-${activeSlide.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-xs font-semibold text-[#ffc973]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#fe9601]" />
              <span>{activeSlide.location}</span>
            </motion.div>

            {/* Headline with Staggered Letter Animation (Exact JSON specification) */}
            <div className="min-h-[120px] sm:min-h-[160px] md:min-h-[190px]">
              <AnimatePresence mode="wait">
                <motion.div key={`title-container-${activeSlide.id}`}>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-bold text-white tracking-tight leading-[1.05]">
                    <AnimatedText
                      text={activeSlide.title}
                      accentWord={activeSlide.accentWord}
                      slideId={activeSlide.id}
                    />
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subtext Paragraph (Screenshot 1 replica copy) */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${activeSlide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg text-white/85 font-normal max-w-2xl leading-relaxed drop-shadow-md"
              >
                {activeSlide.subtitle}
              </motion.p>
            </AnimatePresence>

            {/* Specs Quick Pill Bar */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`specs-${activeSlide.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2"
              >
                <div className="glass-pill-dark px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold text-white/90">
                  <Bed className="w-4 h-4 text-[#fe9601]" />
                  <span>{activeSlide.specs.beds} Bedrooms</span>
                </div>
                <div className="glass-pill-dark px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold text-white/90">
                  <Bath className="w-4 h-4 text-[#fe9601]" />
                  <span>{activeSlide.specs.baths} Baths</span>
                </div>
                <div className="glass-pill-dark px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold text-white/90">
                  <Move className="w-4 h-4 text-[#fe9601]" />
                  <span>{activeSlide.specs.sqft} Sq Ft</span>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Area: Empty on desktop grid to allow background view, controlled by bottom switcher */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>

        {/* Bottom Bar Controls: Slide Numbers, Prev/Next Arrows, Sound Toggle & Screenshot 1 Thumbnail Switcher */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          
          {/* Left Controls: Prev/Next Arrow & Slide Indicator */}
          {/* Left Controls: Ambiance Audio Toggle */}
          <div className="flex items-center gap-4">
            {/* Ambiance Audio Toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="glass-pill p-2.5 rounded-full text-white/80 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium cursor-pointer"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-white/50" />
                  <span className="text-white/50">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#fe9601] animate-pulse" />
                  <span className="text-[#ffc973]">Sound On</span>
                </>
              )}
            </button>
          </div>

          {/* Screenshot 1 Replica: Bottom Right 3 Thumbnail Cards Switcher */}
          <ThumbnailSwitcher
            slides={heroSlides}
            currentSlide={currentSlide}
            onSelectSlide={handleSelectSlide}
            isPaused={isPaused}
          />

        </div>

      </div>

      {/* Interactive Booking & Leasing Modals */}
      <TourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

    </section>
  );
};

export default HeroSection;
