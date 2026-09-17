import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import ScrollGallery from './components/InteractiveGallery/ScrollGallery';
import EverydayLivingSection from './components/EverydayLiving/EverydayLivingSection';
import BalancedLivingSection from './components/BalancedLiving/BalancedLivingSection';
import CustomerStoriesSection from './components/CustomerStories/CustomerStoriesSection';
import FAQSection from './components/FAQ/FAQSection';
import FindYourPlaceSection from './components/CTA/FindYourPlaceSection';
import Footer from './components/Footer/Footer';
import ApplyModal from './components/Modals/ApplyModal';

function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#FFF5E3] selection:bg-[#FE9601] selection:text-black font-sans">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Interactive Scroll Gallery with Converging Zoom Motion */}
      <ScrollGallery />

      {/* 3. Made for Everyday Living Section */}
      <EverydayLivingSection />

      {/* 4. Where Luxury Living Feels Balanced (Floorplan Cards) */}
      <BalancedLivingSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* 5. Customer Stories Video Section */}
      <CustomerStoriesSection />

      {/* 6. Frequently Asked Questions Section */}
      <FAQSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* 7. Pre-Footer Banner: Find your place. Make it yours. */}
      <FindYourPlaceSection />

      {/* 8. Footer */}
      <Footer
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* Modals */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}

export default App;
