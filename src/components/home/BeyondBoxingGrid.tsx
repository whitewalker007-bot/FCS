'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VERIFIED_COACH_PROFILE } from '@/lib/data/verifiedContent';
import { Swords, HeartHandshake, ShieldAlert, Palette, Gem, Sprout } from 'lucide-react';

export const BeyondBoxingGrid: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Swords,
    HeartHandshake,
    ShieldAlert,
    Palette,
    Gem,
    Sprout
  };

  return (
    <section className="py-24 bg-zinc-950 text-zinc-100 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block">
            THE MAN OF MANY DIMENSIONS
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase text-white">
            BEYOND <span className="text-red-600">BOXING</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans">
            Raghavan Master was a Renaissance figure—blending physical martial arts with fine painting, sculpture, and organic farming.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_COACH_PROFILE.rolesGrid.map((role, idx) => {
            const IconComponent = iconMap[role.icon] || Swords;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl space-y-4 hover:border-red-600/50 transition duration-300 group"
              >
                <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition">
                  <IconComponent className="w-6 h-6 text-red-500 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold font-mono text-white group-hover:text-red-500 transition">
                  {role.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
