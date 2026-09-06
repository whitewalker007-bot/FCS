import React from 'react';
import { getDisciples } from '@/lib/cms/wordpress';
import { StudentsSpotlight } from '@/components/home/StudentsSpotlight';
import Link from 'next/link';

export const metadata = {
  title: 'The Fighters He Built — Disciples of Puthalath Raghavan',
  description: 'Verified archive of fighters, state and national medalists, and pioneer female boxers trained by Raghavan Master in Pooladikunnu.'
};

export default async function StudentsPage() {
  const disciples = await getDisciples();

  return (
    <div className="pt-24 pb-16 space-y-20 bg-zinc-950 text-zinc-100">
      
      {/* Banner */}
      <section className="py-20 bg-zinc-900 border-b border-zinc-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
            2,000+ ATHLETES TRAINED
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-mono uppercase text-white tracking-tight">
            THE FIGHTERS <span className="text-red-600">HE BUILT</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-sans max-w-2xl mx-auto">
            Disciples who won Kerala&apos;s first gold medal in boxing, state championship contenders, and grassroots leaders.
          </p>
        </div>
      </section>

      {/* Disciples Grid */}
      <StudentsSpotlight />

    </div>
  );
}
