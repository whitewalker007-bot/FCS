'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Sparkles, MapPin } from 'lucide-react';

export const FCSCommunitySection: React.FC = () => {
  const pillars = [
    {
      title: 'Grassroots Community',
      desc: 'Founded by Raghavan Master to bring sports, discipline, and togetherness to Pooladikunnu youth.'
    },
    {
      title: 'Free Coaching Access',
      desc: 'Provided free training in boxing and yoga for underprivileged children who could not afford fees.'
    },
    {
      title: 'Youth & Talent Building',
      desc: 'Channeling raw energy into organized athletics, sportsmanship, and constructive citizenship.'
    },
    {
      title: 'Cultural Heritage',
      desc: 'Hosting local tournaments, yoga sessions, and cultural events across Kozhikode district.'
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 text-zinc-100 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block">
            GRASSROOTS REVOLUTION
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase text-white">
            FRIENDS CULTURAL <span className="text-red-600">SOCIETY</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-sans">
            FCS Pooladikunnu was built as a haven where sport, culture, and social empowerment converged.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-3 hover:border-red-600/50 transition duration-300"
            >
              <div className="w-10 h-10 bg-red-600/10 border border-red-600/30 rounded flex items-center justify-center font-mono text-red-500 font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold font-mono text-white">{item.title}</h3>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-zinc-900/60 border border-zinc-800 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              COMMUNITY PROMISE
            </span>
            <p className="text-lg font-bold font-mono text-white">
              &quot;NO ATHLETE WAS EVER TURNED AWAY FOR LACK OF MONEY.&quot;
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-950 px-4 py-2 rounded border border-zinc-800 shrink-0">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Pooladikunnu, Kozhikode</span>
          </div>
        </div>

      </div>
    </section>
  );
};
