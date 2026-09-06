import React from 'react';
import { getCoachProfile, getTimelineEvents } from '@/lib/cms/wordpress';
import { TimelineSection } from '@/components/home/TimelineSection';
import { BeyondBoxingGrid } from '@/components/home/BeyondBoxingGrid';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export const metadata = {
  title: 'The Story & Biography — Puthalath Raghavan | Legacy Archive',
  description: 'Explore the life, history, coaching legacy, and multi-faceted journey of Puthalath Raghavan (Raghavan Master) in Pooladikunnu, Kozhikode.'
};

export default async function StoryPage() {
  const profile = await getCoachProfile();

  const chapters = [
    { title: 'THE MAN', content: 'Born and raised in Kozhikode, Puthalath Raghavan possessed a rare blend of physical discipline and artistic sensitivity. He dedicated his home soil in Pooladikunnu to building champions.' },
    { title: 'THE COACH', content: 'For 40 years, Master maintained a rigorous training routine. He emphasized footwork, stance, defense, slipping, and heavy bag conditioning over brutal force.' },
    { title: 'THE MENTOR', content: 'Raghavan Master cared deeply for his students. He provided free training to many, ensured equal ring access for young women, and guided athletes like family.' },
    { title: 'THE ARTIST', content: 'His hands carved dynamic wooden and clay sculptures representing boxers in motion. He painted and observed human form with an artist’s precision.' },
    { title: 'THE YOGA PRACTITIONER', content: 'Yoga was integral to his life. By mastering pranayama breathwork and flex poses, he gave his boxers respiratory endurance and mental calm.' },
    { title: 'THE LEGACY', content: 'Passing away in August 2020 at age 78, his legacy lives on in Kerala’s first boxing gold medalists, community leaders, and coaches.' }
  ];

  return (
    <div className="pt-24 pb-16 space-y-20 bg-zinc-950 text-zinc-100">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-zinc-900 border-b border-zinc-800 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
            BIOGRAPHICAL DOCUMENTARY
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-mono uppercase text-white tracking-tight">
            A LIFE DEDICATED <span className="text-red-600">TO THE RING</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-sans">
            The biography of Puthalath Raghavan—boxing coach, mentor, yoga practitioner, sculptor, and community leader from Pooladikunnu, Kozhikode.
          </p>
        </div>
      </section>

      {/* Narrative Chapters Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chap, idx) => (
            <div key={chap.title} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl space-y-3 hover:border-red-600/50 transition">
              <div className="w-8 h-8 bg-red-600/20 text-red-500 border border-red-600/40 rounded flex items-center justify-center font-mono text-xs font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold font-mono text-white uppercase">{chap.title}</h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">{chap.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Timeline */}
      <TimelineSection />

      {/* Beyond Boxing Grid */}
      <BeyondBoxingGrid />

    </div>
  );
}
