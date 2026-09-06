'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass } from 'lucide-react';

export const KozhikodeSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-zinc-950 text-zinc-100 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              <MapPin className="w-4 h-4 text-red-500" />
              AUTHENTIC KERALA GROUNDING
            </div>

            <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase text-white leading-tight">
              BORN FROM<br />
              <span className="text-red-600">POOLADIKUNNU.</span>
            </h2>

            <p className="text-zinc-300 text-base leading-relaxed font-sans">
              Pooladikunnu is a quiet residential village in Kozhikode (Calicut), Kerala. In a simple workshop space, Raghavan Master turned Pooladikunnu into a power center of Kerala boxing.
            </p>

            <div className="space-y-3 font-mono text-xs text-zinc-300 pt-2">
              <div className="bg-zinc-900 p-4 rounded border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-400">VILLAGE:</span>
                <span className="font-bold text-white">Pooladikunnu</span>
              </div>
              <div className="bg-zinc-900 p-4 rounded border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-400">DISTRICT:</span>
                <span className="font-bold text-white">Kozhikode (Calicut)</span>
              </div>
              <div className="bg-zinc-900 p-4 rounded border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-400">STATE:</span>
                <span className="font-bold text-white">Kerala, India</span>
              </div>
            </div>

          </motion.div>

          {/* Map Preview Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-2xl space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                <span className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-red-500" />
                  MAP LOCATION • POOLADIKUNNU, KOZHIKODE
                </span>
                <span className="text-red-500 font-bold">673011</span>
              </div>

              {/* Embedded Google Maps iFrame */}
              <div className="w-full h-80 rounded-lg overflow-hidden border border-zinc-800 relative bg-zinc-950">
                <iframe
                  title="Pooladikunnu Kozhikode Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.109156828555!2d75.77732!3d11.31254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593457a4128f%3A0xb3e1e83f0db6e39c!2sPooladikunnu%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.9) contrast(1.2) invert(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p className="text-[11px] text-zinc-500 font-mono text-center">
                Interactive map pinpointing Pooladikunnu, Kozhikode—the home of Friends Cultural Society.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
