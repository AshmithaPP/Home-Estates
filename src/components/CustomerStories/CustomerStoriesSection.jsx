import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, Maximize2, Minimize2, RotateCcw } from 'lucide-react';

/**
 * CustomerStoriesSection Component
 * Implements exact user video interaction specs:
 * 1. Initial State: Large preview card with prominent center play button overlay (subtle pulse ring).
 * 2. Click Play Interaction: Smooth play → expand → video transition with scale, opacity, & position motion.
 * 3. Video Controls: Real HTML5 video element with play/pause, mute, progress bar, and pause UI overlay.
 * 4. Scroll Reveal: Section reveals smoothly into view on scroll with slide/fade typography.
 */
export const CustomerStoriesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  // Update video progress bar
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
    if (videoRef.current) {
      videoRef.current.muted = false;
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
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
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
    e.stopPropagation();
    setIsOpen(false);
    setIsPlaying(false);
    setIsMuted(true);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  return (
    <section className="relative w-full py-24 px-4 sm:px-8 bg-[#FFF5E3] text-[#160d02] overflow-hidden">
      
      {/* Background Ambient Glows (#FE9601 & #FFC973) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FE9601]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFC973]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-12 relative z-10">
        
        {/* Section Header Text Hierarchy - Scroll Reveal & Selectable Copy */}
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
              <Sparkles className="w-3.5 h-3.5 text-[#FE9601]" />
              <span>Customer Stories</span>
            </div>
          </div>

          {/* Heading: Line 1 Left-aligned, Line 2 Right-aligned */}
          <div className="space-y-1">
            <div className="text-left">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-[#160d02] tracking-tight leading-tight">
                Hear It From The
              </h2>
            </div>
            <div className="text-right">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-[#160d02] tracking-tight leading-tight">
                <span className="underline-brush font-serif-luxury text-[#160d02] inline-block">
                  People We Built For.
                </span>
              </h2>
            </div>
          </div>

          {/* Description Subtext */}
          <p className="text-xs sm:text-base text-[#160d02]/80 font-sans max-w-2xl mx-auto text-center leading-relaxed pt-2">
            Every home has a story. Hear directly from the families who trusted Ajay Homes to turn their vision into a place they are proud to call home.
          </p>

        </motion.div>

        {/* Video Card Container - Scroll Reveal & Subtle Hover Lift */}
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
            transition={{ duration: 0.3 }}
            onClick={!isOpen ? handleOpenAndPlay : undefined}
            className={`relative w-full overflow-hidden transition-all duration-700 ease-in-out cursor-pointer shadow-2xl rounded-3xl border border-black/10 bg-[#0c0d10] ${
              isOpen ? 'aspect-video scale-102 ring-4 ring-[#FE9601]/40' : 'aspect-video max-w-4xl hover:shadow-[0_25px_60px_rgba(254,150,1,0.25)]'
            }`}
          >
            {/* Real HTML5 Video Element */}
            <video
              ref={videoRef}
              src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-luxury-home-with-a-pool-42512-large.mp4"
              poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover"
            />

            {/* Ambient Dark Gradient Overlay when paused or unopened */}
            {(!isOpen || !isPlaying) && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 transition-opacity duration-500" />
            )}

            {/* Prominent Center Play Button with Pulse & Scale Interaction */}
            {(!isOpen || !isPlaying) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none space-y-3">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={!isOpen ? handleOpenAndPlay : togglePlayPause}
                  className="pointer-events-auto relative w-20 h-20 sm:w-24 sm:h-24 rounded-full btn-gold-gradient flex items-center justify-center shadow-2xl group cursor-pointer"
                  aria-label="Play Customer Story Video"
                >
                  {/* Subtle Pulse Aura Ring */}
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE9601] opacity-40" />

                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black fill-black ml-1" />
                  </div>
                </motion.button>

                <p className="text-white text-xs sm:text-sm font-semibold tracking-wider drop-shadow-md">
                  {!isOpen ? 'Click to Watch Family Story' : 'Paused — Click to Resume'}
                </p>
              </div>
            )}

            {/* Opened Video Controls Bar */}
            {isOpen && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 z-30 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-2"
                >
                  {/* Interactive Progress Bar */}
                  <div
                    onClick={handleSeek}
                    className="w-full h-1.5 bg-white/30 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all"
                  >
                    <div
                      style={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-[#FE9601] to-[#FFC973] transition-all duration-100"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-white pt-1">
                    {/* Play/Pause & Mute */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlayPause}
                        className="btn-gold-gradient py-1.5 px-4 rounded-xl text-black font-bold flex items-center gap-1.5 text-xs shadow-md"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5 text-black" />
                            <span>Pause</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 text-black fill-black" />
                            <span>Play</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white"
                        aria-label="Toggle Mute"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-white/60" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-[#FE9601]" />
                        )}
                      </button>

                      <span className="text-white/70 text-[11px] font-sans hidden sm:inline">
                        Ajay Homes Family Customer Story
                      </span>
                    </div>

                    {/* Minimize / Close Control */}
                    <button
                      onClick={handleClosePlayer}
                      className="glass-pill-dark px-3 py-1.5 rounded-xl text-[11px] text-white/90 hover:text-white flex items-center gap-1 shadow-md border border-white/20 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3 text-[#FE9601]" />
                      <span>Return to Card View</span>
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
