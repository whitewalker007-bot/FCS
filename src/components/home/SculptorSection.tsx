'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Gem, Palette } from 'lucide-react';

export const SculptorSection: React.FC = () => {
  return (
    <section id="sculptor" className="py-24 bg-zinc-900/40 text-zinc-100 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              <Gem className="w-4 h-4 text-red-500" />
              ARTISTIC HERITAGE
            </div>

            <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase text-white leading-tight">
              BOXING<br />
              <span className="text-red-600">AS ART.</span>
            </h2>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-sans">
              Raghavan Master was also associated with painting and sculpture. His handmade sculptures reflected his passion for boxing, capturing the human muscle tension, footwork mechanics, and emotional fire of fighters.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              His wooden and clay sculptures immortalized boxing poses, serving as both physical teaching tools for young athletes and visual tributes to the beauty of athletic movement.
            </p>

            <div className="bg-zinc-950 p-4 rounded border border-zinc-800 text-xs font-mono text-zinc-400">
              <span className="text-white font-bold block mb-1">VERIFIED HISTORICAL FACET</span>
              Associated with sculpture, painting, and organic farming alongside 4 decades of boxing coaching.
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-700 shadow-2xl bg-zinc-950">
              <Image
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop"
                alt="Boxing Sculpture Art Representation"
                fill
                className="object-cover grayscale contrast-125 hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/90 backdrop-blur-md rounded border border-zinc-800 text-xs font-mono text-zinc-300">
                <span className="text-red-500 font-bold block uppercase mb-1">SCULPTURAL DYNAMICS</span>
                Sculptures crafted by Raghavan Master reflected boxer stances, footwork postures, and muscle tension.
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
