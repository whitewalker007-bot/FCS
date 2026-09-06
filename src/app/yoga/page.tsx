import React from 'react';
import { getTrainingPrograms } from '@/lib/cms/wordpress';
import Link from 'next/link';
import { HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Yoga & Mind Control — Puthalath Raghavan Legacy',
  description: 'Discover how yoga, pranayama breathwork, and active recovery complemented boxing training under Raghavan Master.'
};

export default async function YogaPage() {
  const programs = await getTrainingPrograms();
  const yogaPrograms = programs.filter(p => p.category === 'Yoga' || p.category === 'Combined');

  const pillars = [
    { title: 'Pranayama Breathwork', desc: 'Slowing pulse rate between rounds and expanding diaphragm capacity for explosive rounds.' },
    { title: 'Hip & Spine Mobility', desc: 'Opening tight hips and lower back to ensure fast pivot movements and dodge agility.' },
    { title: 'Active Muscle Recovery', desc: 'Clearing lactic acid build-up through gentle stretching after heavy sparring sessions.' },
    { title: 'Balance & Equilibrium', desc: 'Grounding body weight through classic Hatha postures to improve ring stance stability.' },
    { title: 'Mindful Concentration', desc: 'Calming anxiety before competitive tournament bouts with focus techniques.' },
    { title: 'Joint Longevity', desc: 'Protecting wrists, shoulders, and knees from repetitive combat impact.' }
  ];

  return (
    <div className="pt-24 pb-16 space-y-20 bg-zinc-950 text-zinc-100">
      
      {/* Page Banner */}
      <section className="py-20 bg-zinc-900 border-b border-zinc-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
            MENTAL CONTROL & SERENITY
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-mono uppercase text-white tracking-tight">
            THE OTHER HALF OF THE <span className="text-emerald-500">FIGHTER</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-sans max-w-2xl mx-auto">
            &quot;Boxing builds the body. Yoga builds the mind.&quot; The signature mind-body synergy of Puthalath Raghavan.
          </p>
        </div>
      </section>

      {/* Yoga Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-black font-mono uppercase text-white">YOGA FOR FIGHTERS</h2>
          <p className="text-xs text-zinc-400 font-sans">Why Raghavan Master mandated daily yoga practice for all boxers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item) => (
            <div key={item.title} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-3 hover:border-emerald-600/50 transition">
              <div className="w-8 h-8 bg-emerald-600/20 text-emerald-400 rounded flex items-center justify-center font-mono font-bold text-xs">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold font-mono text-white">{item.title}</h3>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Yoga Program Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yogaPrograms.map((program) => (
            <div key={program.id} id={program.id} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl space-y-6 flex flex-col justify-between hover:border-emerald-600/60 transition">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded">
                  {program.level} • {program.duration}
                </span>
                <h3 className="text-2xl font-bold font-mono text-white">{program.title}</h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">{program.description}</p>

                <div className="space-y-2 pt-2 border-t border-zinc-800">
                  {program.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800 flex items-center justify-between font-mono">
                <div>
                  <span className="text-xs text-emerald-400 font-bold block uppercase">MIND-BODY COACHING</span>
                  <span className="text-sm font-bold text-zinc-300">Free / Open Access</span>
                </div>
                <Link
                  href="/contact"
                  className="bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded transition"
                >
                  JOIN YOGA SYNERGY
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
