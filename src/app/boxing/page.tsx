import React from 'react';
import { getTrainingPrograms } from '@/lib/cms/wordpress';
import Link from 'next/link';
import { Flame, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'The Art of Boxing — Puthalath Raghavan Legacy',
  description: 'Explore the boxing philosophy, stance, footwork, mitt work, and training programs developed by Raghavan Master in Pooladikunnu.'
};

export default async function BoxingPage() {
  const programs = await getTrainingPrograms();
  const boxingPrograms = programs.filter(p => p.category === 'Boxing' || p.category === 'Combined' || p.category === 'Specialized');

  const concepts = [
    { title: 'Footwork & Distance', desc: 'Rhythm stepping, pivoting on lead foot, and maintaining striking distance.' },
    { title: 'Orthodox Stance & Guard', desc: 'Chin tucked, hands high, elbow shielding ribs, balanced center of gravity.' },
    { title: 'Defensive Slip & Roll', desc: 'Head movement off center line, rolling under hooks, counter punch timing.' },
    { title: 'Mitt Work Precision', desc: 'High-speed pad combinations targeting precision, snap, and endurance.' },
    { title: 'Conditioning & Running', desc: 'Morning roadwork in Pooladikunnu, jump rope rhythm, and heavy bag rounds.' },
    { title: 'Fight Strategy & Range', desc: 'Reading opponent posture, body shots, jab setup, and ring composure.' }
  ];

  return (
    <div className="pt-24 pb-16 space-y-20 bg-zinc-950 text-zinc-100">
      
      {/* Page Banner */}
      <section className="py-20 bg-zinc-900 border-b border-zinc-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
            PHYSICAL DISCIPLINE
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-mono uppercase text-white tracking-tight">
            THE ART OF <span className="text-red-600">BOXING</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-sans max-w-2xl mx-auto">
            Discipline, footwork, ring courage, and technical mastery honed over four decades in Pooladikunnu, Kozhikode.
          </p>
        </div>
      </section>

      {/* Boxing Technical Concepts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-black font-mono uppercase text-white">CORE TRAINING CONCEPTS</h2>
          <p className="text-xs text-zinc-400 font-sans">The pillars of Raghavan Master&apos;s boxing methodology.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((item) => (
            <div key={item.title} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-3 hover:border-red-600/50 transition">
              <div className="w-8 h-8 bg-red-600/20 text-red-500 rounded flex items-center justify-center font-mono font-bold text-xs">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold font-mono text-white">{item.title}</h3>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-black font-mono uppercase text-white">BOXING PROGRAMS</h2>
          <p className="text-xs text-zinc-400 font-sans">Beginner, competitive, youth, and women&apos;s boxing tracks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boxingPrograms.map((program) => (
            <div key={program.id} id={program.id} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl space-y-6 flex flex-col justify-between hover:border-red-600/60 transition">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-red-600/20 text-red-500 px-3 py-1 rounded">
                  {program.level} • {program.duration}
                </span>
                <h3 className="text-2xl font-bold font-mono text-white">{program.title}</h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">{program.description}</p>

                <div className="space-y-2 pt-2 border-t border-zinc-800">
                  {program.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800 flex items-center justify-between font-mono">
                <div>
                  <span className="text-xs text-zinc-500 block">PROGRAM FEE</span>
                  <span className="text-2xl font-bold text-white">₹{program.price}</span>
                </div>
                <Link
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded transition"
                >
                  ENROLL NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
