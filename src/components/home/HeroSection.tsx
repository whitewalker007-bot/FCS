'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, Flame, Shield, MapPin } from 'lucide-react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden pt-20 pb-12">
      
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1920&auto=format&fit=crop"
          alt="Raghavan Master Pooladikunnu Boxing Archive"
          fill
          priority
          className="object-cover opacity-25 grayscale contrast-125 scale-105 transition duration-1000"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        <div className="film-grain absolute inset-0 opacity-40 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Verified Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 backdrop-blur-md px-4 py-1.5 rounded-full"
        >
          <Flame className="w-4 h-4 text-red-500" />
          <span className="text-xs font-mono font-semibold tracking-widest text-zinc-300 uppercase">
            LEGACY ARCHIVE • POOLADIKUNNU, KOZHIKODE
          </span>
        </motion.div>

        {/* Main Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white font-mono uppercase leading-none">
            PUTHALATH<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-zinc-200">
              RAGHAVAN
            </span>
          </h1>
          <p className="text-sm md:text-base font-bold tracking-[0.3em] text-zinc-400 uppercase pt-2">
            BOXING COACH • MENTOR • LEGEND
          </p>
        </motion.div>

        {/* Central Core Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto border-y border-zinc-800/80 py-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 uppercase font-mono">
            &quot;HE DIDN&apos;T JUST TRAIN BOXERS.<br className="hidden sm:inline" />
            <span className="text-red-500"> HE BUILT FIGHTERS.&quot;</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono tracking-widest uppercase mt-3">
            ONE LIFE. ONE RING. A LEGACY OF CHAMPIONS.
          </p>
        </motion.div>

        {/* Location & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/story"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded border border-red-500 shadow-xl shadow-red-950/40 transition duration-300 group"
          >
            EXPLORE HIS LEGACY
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition duration-300" />
          </Link>

          <Link
            href="#story-preview"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded border border-zinc-700 transition duration-300"
          >
            THE STORY
          </Link>
        </motion.div>

        {/* Location Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-400 pt-6"
        >
          <MapPin className="w-4 h-4 text-red-500 shrink-0" />
          <span>POOLADIKUNNU • KOZHIKODE, KERALA</span>
        </motion.div>

      </div>
    </section>
  );
};
