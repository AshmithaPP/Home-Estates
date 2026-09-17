import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, Star, Quote, RotateCcw, ShieldCheck, MapPin, Building2, Users } from 'lucide-react';

/**
 * CustomerStoriesSection Component
 * 2-Column layout: Left side rich real estate content & township highlights, Right side interactive aerial review video card.
 */
export const CustomerStoriesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const handleClosePlayer = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setIsOpen(false);
  };

  const handleOpenAndPlay = () => {
    setIsOpen(true);
    setIsPlaying(true);
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const togglePlayPause = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => { });
      }
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current && videoRef.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress((newTime / videoRef.current.duration) * 100);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  return (
    <section id="township-showcase" className="relative w-full py-20 px-6 sm:px-12 lg:px-20 bg-[#FFF5E3] text-[#160d02] border-t border-[#FE9601]/20 overflow-hidden">

      {/* Ambient Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FE9601]/20 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFC973]/25 rounded-full blur-[140px] pointer-events-none"
      />

      {/* 2-Column Grid Container */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

        {/* LEFT COLUMN: Rich Content, Badge, Heading, Stats & Quote */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d6a4f]/15 border border-[#2d6a4f]/40 text-[#2d6a4f] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2d6a4f] animate-pulse" />
            <span>Aerial Township Showcase</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#160d02] tracking-tight leading-[1.15]">
            Experience Our Master-Planned{' '}
            <span className="font-serif-luxury text-[#160d02] inline-block">
              Luxury Estates & Townships.
            </span>
          </h2>

          {/* Description Subtext */}
          <p className="text-sm sm:text-base text-[#160d02]/80 font-sans leading-relaxed">
            Take an aerial tour of our signature gated communities, premium villa developments, and world-class residential infrastructure built by Ajay Homes & Estates.
          </p>

          {/* Highlights 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#160d02]/10 shadow-sm flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#2d6a4f]/15 text-[#2d6a4f] flex-shrink-0">
                <Building2 className="w-4 h-4 text-[#2d6a4f]" />
              </div>
              <div>
                <span className="text-base font-bold font-roboto text-[#160d02] block">150+ Acres</span>
                <span className="text-xs text-[#666057] font-roboto">Master-Planned Townships</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#160d02]/10 shadow-sm flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#2d6a4f]/15 text-[#2d6a4f] flex-shrink-0">
                <Users className="w-4 h-4 text-[#2d6a4f]" />
              </div>
              <div>
                <span className="text-base font-bold font-roboto text-[#160d02] block">1000+ Families</span>
                <span className="text-xs text-[#666057] font-roboto">Happy Homeowners</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#160d02]/10 shadow-sm flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#2d6a4f]/15 text-[#2d6a4f] flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#2d6a4f]" />
              </div>
              <div>
                <span className="text-base font-bold font-roboto text-[#160d02] block">100% CMDA</span>
                <span className="text-xs text-[#666057] font-roboto">Approved & Clear Titles</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#160d02]/10 shadow-sm flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#2d6a4f]/15 text-[#2d6a4f] flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#2d6a4f]" />
              </div>
              <div>
                <span className="text-base font-bold font-roboto text-[#160d02] block">Prime Hubs</span>
                <span className="text-xs text-[#666057] font-roboto">Velachery, OMR, Porur</span>
              </div>
            </div>
          </div>

          {/* Quote Card */}
          <div className="p-4 rounded-2xl bg-white/80 border-l-4 border-[#2d6a4f] shadow-md backdrop-blur-md space-y-1.5">
            <div className="flex items-center gap-2 text-[#2d6a4f]">
              <Quote className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider font-roboto">Architectural Vision</span>
            </div>
            <p className="text-xs sm:text-sm text-[#160d02] italic font-serif-luxury font-medium leading-relaxed">
              "An aerial perspective of our sprawling luxury gated townships, integrated green spaces, and premier infrastructure."
            </p>
            <span className="text-[10px] text-[#2d6a4f] font-bold uppercase tracking-wider block font-roboto">
              — Ajay Homes Architectural Showcase
            </span>
          </div>

        </motion.div>

        {/* RIGHT COLUMN: Review / Flythrough Video Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 w-full"
        >
          <motion.div
            layout
            whileHover={{ y: isOpen ? 0 : -6 }}
            transition={{ duration: 0.4 }}
            onClick={!isOpen ? handleOpenAndPlay : undefined}
            className={`relative w-full overflow-hidden transition-all duration-700 ease-in-out cursor-pointer shadow-2xl rounded-3xl border border-black/10 bg-[#0c0d10] ${
              isOpen ? 'aspect-video scale-102 ring-4 ring-[#FE9601]/40' : 'aspect-video hover:shadow-[0_25px_60px_rgba(254,150,1,0.3)]'
            }`}
          >
            {/* HTML5 Video Player */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={!isOpen || isMuted}
              playsInline
              poster="/luxury-villa-video-poster.jpg"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            >
              <source src="/302062_medium.mp4" type="video/mp4" />
              <source src="/luxury-villa-tour.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>

            {/* Dark Ambient Overlay when unopened/paused */}
            {(!isOpen || !isPlaying) && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 transition-opacity duration-500" />
            )}

            {/* Floating Rating Pill - Top Right */}
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-4 right-4 z-20 glass-pill-dark px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 shadow-lg text-[11px] font-semibold text-white pointer-events-none"
              >
                <div className="flex text-[#FE9601]">
                  <Star className="w-3 h-3 fill-[#FE9601]" />
                  <Star className="w-3 h-3 fill-[#FE9601]" />
                  <Star className="w-3 h-3 fill-[#FE9601]" />
                  <Star className="w-3 h-3 fill-[#FE9601]" />
                  <Star className="w-3 h-3 fill-[#FE9601]" />
                </div>
                <span>Aerial Drone Tour</span>
              </motion.div>
            )}

            {/* Prominent Multi-Ring Animated Play Button */}
            {(!isOpen || !isPlaying) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none space-y-3">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={!isOpen ? handleOpenAndPlay : togglePlayPause}
                  className="pointer-events-auto relative w-16 h-16 sm:w-20 sm:h-20 rounded-full btn-gold-gradient flex items-center justify-center shadow-[0_0_40px_rgba(254,150,1,0.6)] group cursor-pointer"
                  aria-label="Play Drone Township Video"
                >
                  {/* Outer Pulsing Rings */}
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full border-2 border-[#FE9601]"
                  />
                  <motion.span
                    animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full border border-[#FFC973]"
                  />

                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-black fill-black ml-1" />
                  </div>
                </motion.button>

                <motion.p
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white text-xs font-bold uppercase tracking-wider drop-shadow-lg bg-black/50 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md"
                >
                  {!isOpen ? 'Click to Watch Aerial Flythrough' : 'Paused — Click to Resume'}
                </motion.p>
              </div>
            )}

            {/* Opened Video Player Controls */}
            {isOpen && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 z-30 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-2.5"
                >
                  {/* Interactive Seek Bar */}
                  <div
                    onClick={handleSeek}
                    className="w-full h-2 bg-white/30 hover:h-3 rounded-full overflow-hidden cursor-pointer transition-all relative group"
                  >
                    <div
                      style={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-[#FE9601] to-[#FFC973] transition-all duration-100"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-white pt-1">
                    {/* Play/Pause & Sound Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlayPause}
                        className="btn-gold-gradient py-1.5 px-3.5 rounded-xl text-black font-extrabold flex items-center gap-1.5 text-xs shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5 text-black fill-black" />
                            <span>Pause</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 text-black fill-black" />
                            <span>Play Video</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-1.5 rounded-xl glass-pill-dark hover:bg-white/20 transition-colors text-white cursor-pointer"
                        aria-label="Toggle Mute"
                      >
                        {isMuted ? (
                          <VolumeX className="w-3.5 h-3.5 text-white/60" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5 text-[#FE9601]" />
                        )}
                      </button>

                      {/* Playing Equalizer Animation Bars */}
                      {isPlaying && (
                        <div className="hidden sm:flex items-center gap-1 pl-1">
                          <motion.span animate={{ height: [4, 14, 6, 16, 4] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1 bg-[#FE9601] rounded-full" />
                          <motion.span animate={{ height: [12, 6, 16, 4, 12] }} transition={{ duration: 0.7, repeat: Infinity }} className="w-1 bg-[#FFC973] rounded-full" />
                          <motion.span animate={{ height: [6, 16, 4, 12, 6] }} transition={{ duration: 0.9, repeat: Infinity }} className="w-1 bg-[#FE9601] rounded-full" />
                        </div>
                      )}
                    </div>

                    {/* Return Button */}
                    <button
                      onClick={handleClosePlayer}
                      className="glass-pill-dark px-3 py-1.5 rounded-xl text-xs text-white/90 hover:text-white flex items-center gap-1.5 shadow-md border border-white/20 cursor-pointer hover:bg-white/20 transition-all"
                    >
                      <RotateCcw className="w-3 h-3 text-[#FE9601]" />
                      <span>Return to Preview</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default CustomerStoriesSection;
