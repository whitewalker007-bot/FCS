'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VERIFIED_TIMELINE } from '@/lib/data/verifiedContent';
import { Calendar, ChevronRight, Award, Flame } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [activeId, setActiveId] = useState(VERIFIED_TIMELINE[2].id); // Default to coaching

  return (
    <section id="timeline" className="py-24 bg-zinc-950 text-zinc-100 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block">
            CHRONOLOGICAL ARCHIVE
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-mono tracking-tight uppercase text-white">
            THE HISTORICAL <span className="text-red-600">TIMELINE</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans">
            Tracing the key chapters in the four-decade career of Puthalath Raghavan in Pooladikunnu, Kozhikode.
          </p>
        </div>

        {/* Desktop & Mobile Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Chapter List */}
          <div className="lg:col-span-5 space-y-3">
            {VERIFIED_TIMELINE.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-4 rounded-lg border transition duration-300 flex items-center justify-between font-mono ${
                    isActive
                      ? 'bg-red-600/10 border-red-600 text-white shadow-lg'
                      : 'bg-zinc-900/50 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2.5 py-1 rounded font-bold ${
                      isActive ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {item.period}
                    </span>
                    <span className="text-sm font-bold tracking-wide">{item.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition ${isActive ? 'text-red-500 translate-x-1' : 'text-zinc-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Card Spotlight */}
          <div className="lg:col-span-7 sticky top-28">
            {VERIFIED_TIMELINE.filter(t => t.id === activeId).map((activeItem) => (
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl shadow-2xl space-y-6 relative overflow-hidden"
              >
                {/* Red Corner Badge */}
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-lg">
                  {activeItem.period}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600/20 border border-red-600/40 rounded-lg flex items-center justify-center">
                    <Flame className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black font-mono uppercase text-white tracking-tight">
                      {activeItem.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">
                      VERIFIED HISTORICAL CHAPTER • POOLADIKUNNU
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-sans border-t border-zinc-800/80 pt-6">
                  {activeItem.description}
                </p>

                <div className="bg-zinc-950 p-4 rounded border border-zinc-800/80 flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <Award className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Documented event in Kerala amateur sports and boxing administration history.</span>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
