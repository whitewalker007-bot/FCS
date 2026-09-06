'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Sparkles, Check } from 'lucide-react';
import { VERIFIED_COACH_PROFILE } from '@/lib/data/verifiedContent';

export const TheMaster: React.FC = () => {
  const principles = [
    'Discipline & Consistency',
    'Physical Conditioning',
    'Technical Precision',
    'Mental Strength',
    'Respect & Self-Control',
    'Character Development'
  ];

  return (
    <section id="master" className="py-24 bg-zinc-900/40 text-zinc-100 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block">
            PHILOSOPHY & ETHOS
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase text-white">
            THE <span className="text-red-600">MASTER</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans">
            Raghavan Master approached boxing not just as a combat sport, but as a discipline for life.
          </p>
        </div>

        {/* Grid: Large Editorial Portrait + Philosophy Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-700 shadow-2xl bg-zinc-950">
              <Image
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
                alt="Raghavan Master Portrait Representation"
                fill
                className="object-cover grayscale contrast-125 hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-center space-y-2 bg-zinc-950/90 backdrop-blur-md p-4 rounded-lg border border-zinc-800">
                <span className="text-lg font-black font-mono uppercase text-white block">
                  PUTHALATH RAGHAVAN
                </span>
                <span className="text-xs font-mono text-red-500 block uppercase tracking-widest">
                  1942 – 2020 • POOLADIKUNNU
                </span>
              </div>
            </div>
          </motion.div>

          {/* Philosophy & Editorial Callouts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            
            {/* Editorial Statement Card 1 */}
            <div className="bg-zinc-950 border-l-4 border-red-600 p-6 rounded-r-lg shadow-xl space-y-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                EDITORIAL MOTTO
              </span>
              <blockquote className="text-2xl md:text-3xl font-black font-mono text-white uppercase tracking-tight">
                &quot;DISCIPLINE BEFORE TALENT.&quot;
              </blockquote>
              <p className="text-xs text-zinc-400 font-sans">
                Talent without strict daily conditioning is short-lived. Master prioritized footwork, shadow boxing, and mental grit over raw aggression.
              </p>
            </div>

            {/* Editorial Statement Card 2 */}
            <div className="bg-zinc-950 border-l-4 border-zinc-500 p-6 rounded-r-lg shadow-xl space-y-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                EDITORIAL MOTTO
              </span>
              <blockquote className="text-2xl md:text-3xl font-black font-mono text-zinc-200 uppercase tracking-tight">
                &quot;BUILD THE MIND BEFORE THE FIGHT.&quot;
              </blockquote>
              <p className="text-xs text-zinc-400 font-sans">
                Combining boxing workouts with classical yoga pranayama allowed fighters to maintain calm respiration under extreme ring pressure.
              </p>
            </div>

            {/* 6 Core Pillars Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                COACHING PRINCIPLES
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {principles.map((item) => (
                  <div key={item} className="bg-zinc-950 p-3 rounded border border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
