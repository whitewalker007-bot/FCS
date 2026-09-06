'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clapperboard, Award, Film } from 'lucide-react';

export const DaveedSection: React.FC = () => {
  return (
    <section id="daveed" className="py-24 bg-zinc-900/40 text-zinc-100 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Cinema Media Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden border border-zinc-700 shadow-2xl bg-zinc-950">
              <Image
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
                alt="Cinema & Feature Film Tribute"
                fill
                className="object-cover grayscale contrast-125 hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/90 backdrop-blur-md rounded border border-zinc-800 text-xs font-mono text-zinc-300">
                <span className="text-red-500 font-bold block uppercase mb-1">CINEMATIC INSPIRATION</span>
                The Malayalam movie &quot;Daveed&quot; features a boxing coach character &quot;Ashan&quot; inspired by real-life master Puthalath Raghavan.
              </div>
            </div>
          </motion.div>

          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              <Clapperboard className="w-4 h-4 text-red-500" />
              FROM REAL LIFE TO THE SCREEN
            </div>

            <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase text-white leading-tight">
              THE MALAYALAM FILM<br />
              <span className="text-red-600">&quot;DAVEED&quot;</span>
            </h2>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-sans">
              In Malayalam cinema, the sports drama film <strong className="text-white">Daveed</strong> drew narrative inspiration from the life, quiet nobility, and intense coaching methods of Puthalath Raghavan.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              The character <strong className="text-zinc-200">&quot;Ashan&quot;</strong> pays homage to the real-life mentor who shaped generations of Kerala fighters without ever chasing commercial fame.
            </p>

            <div className="bg-zinc-950 p-4 rounded border border-zinc-800 text-xs font-mono text-zinc-400">
              <span className="text-white font-bold block mb-1">FACTUAL NOTE</span>
              The character &quot;Ashan&quot; is inspired by Puthalath Raghavan&apos;s real-life mentorship in Pooladikunnu, Kozhikode.
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
