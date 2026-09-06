'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Sparkles, ArrowRight } from 'lucide-react';

export const WomensBoxingSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900/50 text-zinc-100 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              <Sparkles className="w-4 h-4 text-red-500" />
              PIONEERING EQUALITY IN COMBAT SPORTS
            </div>

            <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase text-white leading-tight">
              HE OPENED<br />
              <span className="text-red-600">THE RING.</span>
            </h2>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-sans">
              At a time when female boxing faced widespread societal hesitation in Kerala, Puthalath Raghavan welcomed young girls into his Pooladikunnu ring with equal rigor, dignity, and championship discipline.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              He was among the early boxing coaches in Kerala to prepare women athletes for official state-level amateur boxing championships, instilling self-reliance, physical confidence, and strategic fight mastery.
            </p>

            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800 space-y-2">
              <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block font-bold">
                HISTORICAL LEGACY IMPACT
              </span>
              <p className="text-xs text-zinc-300 font-mono">
                Disciples like E. Pravitha and early women boxers trained rigorously alongside male peers, mastering orthodoxic striking, mitt work, and ring composure.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/boxing#women"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition group"
              >
                WOMEN&apos;S BOXING ACADEMY
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>

          </motion.div>

          {/* Media Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border border-zinc-700 shadow-2xl bg-zinc-950">
              <Image
                src="https://images.unsplash.com/photo-1509563839001-b5420716ab35?q=80&w=1200&auto=format&fit=crop"
                alt="Kerala Pioneer Female Boxing Training Archive"
                fill
                className="object-cover grayscale contrast-125 hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/90 backdrop-blur-md rounded border border-zinc-800 text-xs font-mono text-zinc-300">
                <span className="text-red-500 font-bold block uppercase mb-1">EQUALITY IN ATHLETICISM</span>
                Raghavan Master trained female boxers in Kozhikode to compete at state-level amateur bouts with confidence and technical skill.
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
