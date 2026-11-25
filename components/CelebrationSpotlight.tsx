"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Trophy, Volume2, VolumeX, Play, Newspaper, Sparkles, CheckCircle2 } from "lucide-react";
import { clubInfo } from "@/data/club";

export default function CelebrationSpotlight() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <section className="py-20 bg-neutral-900 text-white relative overflow-hidden border-y border-gold/30">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy size={14} className="text-gold" />
            <span>Award Winning Celebration & Media Spotlight</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Kali Puja 2026: Glimpses & Accolades
          </h2>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
            {clubInfo.name} achieved the prestigious <strong>&ldquo;জেলার সেরা শ্যামা পুজো ২০২৬&rdquo; (District&apos;s Best Shyama Puja 2026)</strong> award, highlighted by wide press coverage and immense festive celebration.
          </p>
        </div>

        {/* Media Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Main Video Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-black/60 rounded-xl p-5 md:p-6 border border-white/10 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <h3 className="font-heading font-bold text-lg text-white">Festival Glimpses</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-gold/20 text-gold border border-gold/40">
                  <Volume2 size={13} />
                  <span>Audio Enabled</span>
                </span>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative rounded-lg overflow-hidden bg-black aspect-[9/16] sm:aspect-video max-h-[500px] flex items-center justify-center group shadow-inner">
              <video
                ref={videoRef}
                src="/videos/sts-club-kali-puja-2026.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain bg-black"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onVolumeChange={(e) => setIsMuted(e.currentTarget.muted)}
              >
                Your browser does not support HTML5 video.
              </video>

              {/* Sound / Play Helper Overlay when paused */}
              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 hover:bg-black/30 cursor-pointer flex flex-col items-center justify-center transition-all group-hover:scale-100"
                >
                  <div className="w-16 h-16 rounded-full bg-gold text-primary-dark flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                    <Play size={28} className="translate-x-0.5 fill-current" />
                  </div>
                  <div className="mt-4 px-4 py-1.5 rounded-full bg-black/80 border border-gold/40 text-gold text-xs font-semibold flex items-center gap-2 shadow-md">
                    <Volume2 size={14} />
                    <span>Watch with Sound</span>
                  </div>
                </div>
              )}
            </div>

            {/* Video Controls & Info Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
              <p className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-gold shrink-0" />
                <span>Live atmosphere & celebrations from S.T.S Club grounds, Dhupguri</span>
              </p>
              <button
                onClick={toggleSound}
                className="text-gold hover:text-white transition-colors flex items-center gap-1 font-medium ml-auto"
              >
                {isMuted ? (
                  <>
                    <VolumeX size={15} />
                    <span>Unmute Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 size={15} />
                    <span>Sound is On</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Trophy & Press Coverage (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Award Trophy Card */}
            <div className="bg-gradient-to-br from-primary-dark/80 via-neutral-900 to-black p-5 rounded-xl border-2 border-gold/50 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-gold text-primary-dark text-[11px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                <Trophy size={12} />
                <span>Winner</span>
              </div>

              <div className="flex gap-4 items-center">
                <div className="relative w-28 h-36 shrink-0 rounded-lg overflow-hidden border border-gold/40 shadow-md bg-black/40">
                  <Image
                    src="/gallery/district-best-shyama-puja-award-2026.jpg"
                    alt="জেলার সেরা শ্যামা পুজো ২০২৬ - District's Best Shyama Puja 2026 Award Trophy"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1 text-gold text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles size={13} />
                    <span>Prestigious Honor</span>
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white mb-1.5 leading-snug">
                    জেলার সেরা শ্যামা পুজো ২০২৬
                  </h4>
                  <p className="text-neutral-300 text-xs leading-relaxed mb-2">
                    Awarded the <strong>District&apos;s Best Shyama Puja 2026</strong> trophy by <em>Ramkrishna IVF Centre &amp; Amar Bangla</em>.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-gold font-medium bg-gold/10 px-2.5 py-1 rounded-md border border-gold/20">
                    <CheckCircle2 size={12} />
                    <span>Awarded to S.T.S Club</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newspaper Press Clipping Card */}
            <div className="bg-neutral-900/90 p-5 rounded-xl border border-white/10 shadow-xl relative overflow-hidden group hover:border-gold/30 transition-colors">
              <div className="flex gap-4 items-center">
                <div className="relative w-28 h-36 shrink-0 rounded-lg overflow-hidden border border-white/20 shadow-md bg-black/40">
                  <Image
                    src="/gallery/newspaper-kali-mandap-sts-club.jpg"
                    alt="Newspaper coverage of STS Club Kali Mandap creation"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1 text-gold text-xs font-bold uppercase tracking-wider mb-1">
                    <Newspaper size={13} />
                    <span>Press Coverage</span>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mb-1.5 leading-snug">
                    &ldquo;চলছে ধূপগুড়ির এসটিএস ক্লাবের কালী মণ্ডপ তৈরি&rdquo;
                  </h4>
                  <p className="text-neutral-300 text-xs leading-relaxed mb-2">
                    Frontline regional media feature highlighting the architecture and grand artisans behind our &ldquo;Sonali Shankho&rdquo; mandap.
                  </p>
                  <span className="text-[11px] text-neutral-400 italic">
                    Photo: Dipankar Ghatak &bull; Regional Daily
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
