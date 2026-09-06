'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { VERIFIED_COACH_PROFILE } from '@/lib/data/verifiedContent';

export const StoryPreview: React.FC = () => {
  return (
    <section id="story-preview" className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Documentary Photography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
              <Image
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop"
                alt="Puthalath Raghavan Pooladikunnu Training Archive"
                fill
                className="object-cover grayscale contrast-125 hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-lg">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 block mb-1">
                  HISTORICAL ARCHIVE NOTE
                </span>
                <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                  Modest workshop gym near Pooladikunnu, Kozhikode where Raghavan Master trained state & national gold medalists.
                </p>
              </div>
            </div>

            {/* Accent Red Frame */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border-r-2 border-b-2 border-red-600 pointer-events-none rounded-br-xl" />
          </motion.div>

          {/* Right Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              THE BIOGRAPHICAL FOUNDATION
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-mono tracking-tight uppercase leading-tight text-white">
              A LIFE<br />
              DEDICATED<br />
              <span className="text-red-600">TO BOXING.</span>
            </h2>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-sans">
              {VERIFIED_COACH_PROFILE.biography[0]}
            </p>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
              {VERIFIED_COACH_PROFILE.biography[1]}
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-zinc-300">
              <div className="flex items-center gap-2 bg-zinc-900/60 p-3 rounded border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>40+ Years Active Coaching</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/60 p-3 rounded border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>2,000+ Disciples</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/60 p-3 rounded border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Kerala 1st Boxing Gold</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/60 p-3 rounded border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Pioneer in Female Boxing</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/story"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition group shadow-lg shadow-red-950/50"
              >
                READ HIS COMPLETE STORY
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
