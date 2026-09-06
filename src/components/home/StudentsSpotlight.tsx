'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VERIFIED_DISCIPLES } from '@/lib/data/verifiedContent';
import { Award, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const StudentsSpotlight: React.FC = () => {
  return (
    <section id="students" className="py-24 bg-zinc-950 text-zinc-100 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block">
            VERIFIED ATHLETES & DISCIPLES
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase text-white">
            THE FIGHTERS <span className="text-red-600">HE BUILT</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans">
            Over 2,000 students trained under Raghavan Master in Pooladikunnu. Disciples won Kerala&apos;s first boxing gold medal and represented the state at national championships.
          </p>
        </div>

        {/* Student Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_DISCIPLES.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 hover:border-red-600/50 transition duration-300 group"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-red-600/10 border border-red-600/30 rounded-lg flex items-center justify-center font-mono font-bold text-red-500 text-sm">
                  #{index + 1}
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 text-zinc-400">
                  VERIFIED
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-mono text-white group-hover:text-red-500 transition">
                  {student.name}
                </h3>
                <span className="text-xs font-mono text-red-500 block uppercase tracking-wide mt-0.5">
                  {student.category}
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-sans leading-relaxed pt-2 border-t border-zinc-800">
                {student.verifiedDetails}
              </p>

              <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Pooladikunnu Boxing Alumni</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
