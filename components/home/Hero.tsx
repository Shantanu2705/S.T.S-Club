"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/gallery/WhatsApp Image 2026-09-25 at 19.06.28 (1).jpeg"
            alt="S.T.S Club Historical Moment"
            fill
            className="object-cover object-center opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-primary-dark/30" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs md:text-sm font-bold tracking-widest uppercase">
              Established &bull; 1971
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 tracking-tight leading-tight"
          >
            S.T.S Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-neutral-200 font-light mb-8 max-w-2xl text-balance"
          >
            A Legacy of Community, Culture & Togetherness
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-neutral-400 max-w-3xl mb-12 text-balance leading-relaxed"
          >
            Established on May 9, 1971 on the occasion of POCHISE BOISHAKH, S.T.S Club has grown into a vibrant community built around friendship, culture, and shared memories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/history"
              className="w-full sm:w-auto px-8 py-4 bg-gold text-primary-dark font-semibold rounded-sm hover:bg-gold-light transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5"
            >
              Discover Our Story
            </Link>
            <Link
              href="/activities"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 font-medium rounded-sm hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Explore Activities
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
