import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { heroSlidesData } from '../../data/heroData';
import HeroBackground from './HeroBackground';
import Header from './Header';
import HeroContent from './HeroContent';
import ImageThumbnails from './ImageThumbnails';
import ApplyModal from '../Modals/ApplyModal';

/**
 * Hero Component
 * Logo: Ajay Homes & Estates
 * CTA: Joint Venture
 * Rapid auto-advance: 2.0 seconds per slide for frequent background folding transitions.
 */
export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Modal States
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Touch Swipe Gesture Handlers
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Rapid Automatic Timer (2.0 seconds for frequent image change)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 2000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % heroSlidesData.length);
  };

  const handlePrevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + heroSlidesData.length) % heroSlidesData.length);
  };

  const handleSelectSlide = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrevSlide();
    }
  };

  const activeSlide = heroSlidesData[activeIndex];

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-[#e0d6cb]"
    >
      {/* 3D Folding Background Carousel */}
      <HeroBackground
        activeIndex={activeIndex}
        slides={heroSlidesData}
        direction={direction}
      />

      {/* Floating Header */}
      <Header
        onOpenTour={() => setIsTourModalOpen(true)}
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* Main Hero Layout Container - Flush Left End */}
      <div className="relative z-20 max-w-[1800px] mx-auto w-full px-4 sm:px-12 pt-14 xs:pt-16 sm:pt-28 pb-4 sm:pb-8 flex-1 flex flex-col justify-between overflow-hidden">

        {/* Left End Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-end my-auto">
          <div className="lg:col-span-7 xl:col-span-6 text-left">
            <HeroContent activeSlide={activeSlide} />
          </div>
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>

        {/* Bottom Controls Bar: Bottom-Right Image Thumbnails */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2 sm:gap-4 border-t border-white/15">

          {/* Screenshot 1 Replica: Bottom Right Image Thumbnails */}
          <ImageThumbnails
            slides={heroSlidesData}
            activeIndex={activeIndex}
            onSelectSlide={handleSelectSlide}
            isPaused={false}
          />

        </div>

      </div>

      {/* Application Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

    </section>
  );
};

export default Hero;
