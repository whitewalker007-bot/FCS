'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, ArrowRight, Trophy } from 'lucide-react';

export const LegacyToday: React.FC = () => {
  return (
    <section id="legacy" className="py-24 bg-zinc-950 text-zinc-100 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block">
            TODAY & TOMORROW
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase text-white">
            THE FIGHT <span className="text-red-600">CONTINUES.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans">
            Though Raghavan Master passed away in August 2020 at the age of 78, his spirit endures through his former disciples, active coaches, and young Kerala boxers step into the ring every morning.
          </p>
        </div>

        {/* Historical to Modern Transition Visual Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Historical Side */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative group">
            <div className="relative aspect-[16/10]">
              <Image
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop"
                alt="Historical Boxing Heritage Pooladikunnu"
                fill
                className="object-cover grayscale contrast-150 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                1980s – 2020 • THE HERITAGE
              </span>
              <h3 className="text-2xl font-black font-mono text-white">THE FOUNDATION IN POOLADIKUNNU</h3>
              <p className="text-xs text-zinc-400 font-sans">
                Simple ring, relentless conditioning, yoga mastery, and free coaching for 2,000+ students.
              </p>
            </div>
          </div>

          {/* Modern Side */}
          <div className="bg-zinc-900 border border-red-900/40 rounded-xl overflow-hidden shadow-2xl relative group">
            <div className="relative aspect-[16/10]">
              <Image
                src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop"
                alt="Modern Kerala Boxing Bouts"
                fill
                className="object-cover brightness-110 contrast-110 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
                PRESENT DAY • THE LIVING LEGACY
              </span>
              <h3 className="text-2xl font-black font-mono text-white">NEXT GENERATION FIGHTERS</h3>
              <p className="text-xs text-zinc-400 font-sans">
                Former disciples training new state contenders, passing down orthodox stance & yoga focus.
              </p>
            </div>
          </div>

        </div>

        {/* Final CTA Banner */}
        <div className="bg-gradient-to-r from-red-950/60 via-zinc-900 to-zinc-950 border border-red-600/40 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black font-mono uppercase text-white tracking-tight">
              HONOR THE LEGACY. BECOME A FIGHTER.
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 max-w-xl font-sans">
              Enroll in beginner or competitive boxing programs or support Friends Cultural Society community initiatives.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded border border-red-500 shadow-xl transition"
          >
            GET IN TOUCH NOW
          </Link>
        </div>

      </div>
    </section>
  );
};
