import React from 'react';
import Eyebrow from './Eyebrow';
import AnimatedHeading from './AnimatedHeading';
import Description from './Description';

/**
 * HeroContent Component
 * Assembles Eyebrow, AnimatedHeading, and Description in exact screenshot hierarchy.
 */
export const HeroContent = ({ activeSlide }) => {
  return (
    <div className="w-full space-y-4">
      {/* Screenshot Eyebrow Badge */}
      <div className="flex justify-start">
        <Eyebrow text={activeSlide.eyebrow} slideId={activeSlide.id} />
      </div>

      {/* Main Heading with Motion Animation */}
      <AnimatedHeading
        headingLine1={activeSlide.headingLine1}
        headingLine2={activeSlide.headingLine2}
        accentWord={activeSlide.accentWord}
        slideId={activeSlide.id}
      />

      {/* Screenshot Short Description */}
      <Description text={activeSlide.description} slideId={activeSlide.id} />
    </div>
  );
};

export default HeroContent;
