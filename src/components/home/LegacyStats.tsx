'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Trophy, Heart } from 'lucide-react';

export const LegacyStats: React.FC = () => {
  const stats = [
    {
      value: '40+',
      label: 'YEARS OF COACHING',
      sublabel: 'Dedicated to Boxing & Yoga in Pooladikunnu',
      icon: ShieldCheck
    },
    {
      value: '2,000+',
      label: 'STUDENTS TRAINED',
      sublabel: 'Athletes, Boys & Pioneer Girl Boxers',
      icon: Users
    },
    {
      value: 'GOLD',
      label: 'STATE & NATIONAL CHAMPIONS',
      sublabel: "Mentored Disciples to Kerala's 1st Boxing Gold",
      icon: Trophy
    },
    {
      value: 'FREE',
      label: 'COACHING FOR MANY',
      sublabel: 'Always Open to Underprivileged Athletes',
      icon: Heart
    }
  ];

  return (
    <section className="bg-zinc-900/60 border-y border-zinc-800 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-950/80 border border-zinc-800/80 p-8 rounded-lg text-center hover:border-red-600/50 transition duration-300 group"
              >
                <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition">
                  <Icon className="w-6 h-6 text-red-500 group-hover:text-white transition" />
                </div>
                <div className="text-4xl md:text-5xl font-black font-mono text-white tracking-tight group-hover:text-red-500 transition">
                  {stat.value}
                </div>
                <div className="text-xs font-bold font-mono tracking-widest text-zinc-200 uppercase mt-2">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-500 mt-1 font-mono">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
