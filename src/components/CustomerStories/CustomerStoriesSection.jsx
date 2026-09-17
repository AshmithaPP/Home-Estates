import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, Star, Quote, RotateCcw } from 'lucide-react';

export const CustomerStoriesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  // Auto-play video when player opens
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [isOpen]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const handleOpenAndPlay = () => {
    setIsOpen(true);
    setIsPlaying(true);
    setIsMuted(false);
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
        }).catch(() => {});
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
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const seekTime = (clickX / width) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress((seekTime / videoRef.current.duration) * 100);
    }
  };

  const handleClosePlayer = (e) => {
    e?.stopPropagation();
    setIsOpen(false);
    setIsPlaying(false);
    setIsMuted(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="relative w-full py-24 px-4 sm:px-8 bg-[#FFF5E3] text-[#160d02] overflow-hidden">
      {/* Background Animated Ambient Lights */}
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

      <div className="max-w-[1400px] mx-auto space-y-12 relative z-10">
        
        {/* Section Header Text Hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-4 select-text"
        >
          {/* Eyebrow Label Centered */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FE9601]/15 border border-[#FE9601]/40 text-[#FE9601] text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FE9601] animate-pulse" />
              <span>Aerial Township Showcase</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <div className="text-left">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-[#160d02] tracking-tight leading-tight">
                Experience Our Master-Planned
              </h2>
            </div>
            <div className="text-right">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-[#160d02] tracking-tight leading-tight">
                <span className="underline-brush font-serif-luxury text-[#160d02] inline-block">
                  Luxury Estates & Townships.
                </span>
              </h2>
            </div>
          </div>

          {/* Description Subtext */}
          <p className="text-xs sm:text-base text-[#160d02]/80 font-sans max-w-2xl mx-auto text-center leading-relaxed pt-2">
            Take an aerial tour of our signature gated communities, premium villa developments, and world-class residential infrastructure built by Ajay Homes & Estates.
          </p>
        </motion.div>

        {/* Animated Video Section Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto flex justify-center"
        >
          <motion.div
            layout
            whileHover={{ y: isOpen ? 0 : -6 }}
            transition={{ duration: 0.4 }}
            onClick={!isOpen ? handleOpenAndPlay : undefined}
            className={`relative w-full overflow-hidden transition-all duration-700 ease-in-out cursor-pointer shadow-2xl rounded-3xl border border-black/10 bg-[#0c0d10] ${
              isOpen ? 'aspect-video scale-102 ring-4 ring-[#FE9601]/40' : 'aspect-video max-w-4xl hover:shadow-[0_25px_60px_rgba(254,150,1,0.3)]'
            }`}
          >
            {/* Real HTML5 Video Player */}
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
                className="absolute top-5 right-5 z-20 glass-pill-dark px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/20 shadow-lg text-xs font-semibold text-white pointer-events-none"
              >
                <div className="flex text-[#FE9601]">
                  <Star className="w-3.5 h-3.5 fill-[#FE9601]" />
                  <Star className="w-3.5 h-3.5 fill-[#FE9601]" />
                  <Star className="w-3.5 h-3.5 fill-[#FE9601]" />
                  <Star className="w-3.5 h-3.5 fill-[#FE9601]" />
                  <Star className="w-3.5 h-3.5 fill-[#FE9601]" />
                </div>
                <span>150+ Acres of Master-Planned Living</span>
              </motion.div>
            )}

            {/* Floating Testimonial Quote Pill - Bottom Left */}
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-6 z-20 max-w-sm glass-pill-dark p-4 rounded-2xl border border-white/20 shadow-xl hidden sm:block pointer-events-none"
              >
                <div className="flex items-start gap-2.5">
                  <Quote className="w-5 h-5 text-[#FE9601] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/90 font-medium leading-relaxed">
                      "An aerial perspective of our sprawling luxury gated townships, integrated green spaces, and premier infrastructure."
                    </p>
                    <span className="text-[10px] text-[#FFC973] font-bold uppercase tracking-wider block mt-1">
                      — AJAY HOMES ARCHITECTURAL SHOWCASE
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Prominent Multi-Ring Animated Play Button */}
            {(!isOpen || !isPlaying) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none space-y-4">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={!isOpen ? handleOpenAndPlay : togglePlayPause}
                  className="pointer-events-auto relative w-20 h-20 sm:w-24 sm:h-24 rounded-full btn-gold-gradient flex items-center justify-center shadow-[0_0_50px_rgba(254,150,1,0.6)] group cursor-pointer"
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

                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black fill-black ml-1" />
                  </div>
                </motion.button>

                <motion.p
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider drop-shadow-lg bg-black/40 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md"
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
                  className="absolute bottom-0 left-0 right-0 z-30 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-3"
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
                        className="btn-gold-gradient py-2 px-4 rounded-xl text-black font-extrabold flex items-center gap-2 text-xs shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-4 h-4 text-black fill-black" />
                            <span>Pause</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 text-black fill-black" />
                            <span>Play Video</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-xl glass-pill-dark hover:bg-white/20 transition-colors text-white cursor-pointer"
                        aria-label="Toggle Mute"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-white/60" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-[#FE9601]" />
                        )}
                      </button>

                      {/* Playing Equalizer Animation Bars */}
                      {isPlaying && (
                        <div className="hidden sm:flex items-center gap-1 pl-2">
                          <motion.span animate={{ height: [4, 16, 6, 18, 4] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1 bg-[#FE9601] rounded-full" />
                          <motion.span animate={{ height: [14, 6, 18, 4, 14] }} transition={{ duration: 0.7, repeat: Infinity }} className="w-1 bg-[#FFC973] rounded-full" />
                          <motion.span animate={{ height: [8, 18, 4, 14, 8] }} transition={{ duration: 0.9, repeat: Infinity }} className="w-1 bg-[#FE9601] rounded-full" />
                        </div>
                      )}
                    </div>

                    {/* Return Button */}
                    <button
                      onClick={handleClosePlayer}
                      className="glass-pill-dark px-3.5 py-2 rounded-xl text-xs text-white/90 hover:text-white flex items-center gap-2 shadow-md border border-white/20 cursor-pointer hover:bg-white/20 transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#FE9601]" />
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
