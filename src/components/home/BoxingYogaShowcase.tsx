'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Flame, HeartHandshake, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { TRAINING_PROGRAMS } from '@/lib/data/verifiedContent';
import { useCart } from '@/context/CartContext';

export const BoxingYogaShowcase: React.FC = () => {
  const { addToCart } = useCart();

  const boxingConcepts = ['Orthodox Stance', 'Rhythm Footwork', 'Slip & Counter', 'Mitt Work Routines', 'Heavy Bag Conditioning', 'Fight Strategy'];
  const yogaConcepts = ['Pranayama Breathwork', 'Hip & Spine Mobility', 'Active Recovery', 'Lactic Acid Clearance', 'Focus Meditation', 'Body Equilibrium'];

  return (
    <section className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Signature Comparison Header */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-2xl text-center space-y-6 shadow-2xl relative">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase block">
            RAGHAVAN MASTER&apos;S DUAL SYNERGY PHILOSOPHY
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono py-4">
            <div className="bg-zinc-950 p-4 rounded border border-zinc-800">
              <span className="text-red-500 font-black text-xl md:text-2xl block">BOXING</span>
              <span className="text-xs text-zinc-400">POWER</span>
            </div>
            <div className="bg-zinc-950 p-4 rounded border border-zinc-800">
              <span className="text-emerald-500 font-black text-xl md:text-2xl block">YOGA</span>
              <span className="text-xs text-zinc-400">CONTROL</span>
            </div>
            <div className="bg-zinc-950 p-4 rounded border border-zinc-800">
              <span className="text-white font-black text-xl md:text-2xl block">BODY</span>
              <span className="text-xs text-zinc-400">STRENGTH</span>
            </div>
            <div className="bg-zinc-950 p-4 rounded border border-zinc-800">
              <span className="text-white font-black text-xl md:text-2xl block">MIND</span>
              <span className="text-xs text-zinc-400">SERENITY</span>
            </div>
          </div>

          <div className="pt-2">
            <span className="text-2xl md:text-4xl font-black font-mono tracking-tight text-white uppercase block">
              &quot;THE COMPLETE ATHLETE.&quot;
            </span>
          </div>
        </div>

        {/* BOXING SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              <Flame className="w-4 h-4 text-red-500" />
              PHYSICAL CONDITIONING
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-mono uppercase tracking-tight text-white">
              THE ART OF <span className="text-red-600">BOXING</span>
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed font-sans">
              Boxing at Pooladikunnu was built on footwork, stance, defense, punching accuracy, mitt work, and ring courage. Master trained students to respect opponent and self.
            </p>

            <div className="grid grid-cols-2 gap-2 font-mono text-xs text-zinc-300 pt-2">
              {boxingConcepts.map(concept => (
                <div key={concept} className="bg-zinc-900 p-2.5 rounded border border-zinc-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/boxing" className="inline-flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase tracking-widest hover:text-red-400 transition">
                EXPLORE BOXING PROGRAMS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Boxing Program Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRAINING_PROGRAMS.filter(p => p.category === 'Boxing' || p.category === 'Combined').slice(0, 2).map((program) => (
              <div key={program.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 hover:border-red-600/60 transition">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-red-600/20 text-red-500 px-2.5 py-1 rounded">
                  {program.level}
                </span>
                <h3 className="text-xl font-bold font-mono text-white">{program.title}</h3>
                <p className="text-xs text-zinc-400 font-sans line-clamp-3">{program.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-zinc-800 font-mono">
                  <span className="text-lg font-bold text-white">₹{program.price}</span>
                  <Link
                    href={`/boxing#${program.id}`}
                    className="text-xs bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded transition"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YOGA SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Yoga Program Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {TRAINING_PROGRAMS.filter(p => p.category === 'Yoga' || p.category === 'Specialized').slice(0, 2).map((program) => (
              <div key={program.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4 hover:border-emerald-600/60 transition">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-600/20 text-emerald-400 px-2.5 py-1 rounded">
                  {program.level}
                </span>
                <h3 className="text-xl font-bold font-mono text-white">{program.title}</h3>
                <p className="text-xs text-zinc-400 font-sans line-clamp-3">{program.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-zinc-800 font-mono">
                  <span className="text-lg font-bold text-white">₹{program.price}</span>
                  <Link
                    href={`/yoga#${program.id}`}
                    className="text-xs bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-3 py-1.5 rounded transition"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              MENTAL CONTROL & MOBILITY
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-mono uppercase tracking-tight text-white">
              THE OTHER HALF OF THE <span className="text-emerald-500">FIGHTER</span>
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed font-sans">
              Yoga was non-negotiable in Master&apos;s curriculum. Flexing muscles, slowing heartbeat through pranayama, and aiding recovery after intense sparring.
            </p>

            <div className="grid grid-cols-2 gap-2 font-mono text-xs text-zinc-300 pt-2">
              {yogaConcepts.map(concept => (
                <div key={concept} className="bg-zinc-900 p-2.5 rounded border border-zinc-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/yoga" className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest hover:text-emerald-300 transition">
                EXPLORE YOGA SYNERGY <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
