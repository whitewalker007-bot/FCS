import React from 'react';
import { getVideoArchive } from '@/lib/cms/wordpress';
import { VideoArchive } from '@/components/video/VideoArchive';

export const metadata = {
  title: 'Video Archive — Puthalath Raghavan Legacy',
  description: 'Historical documentaries, student interviews, and boxing-yoga demonstrations of Puthalath Raghavan.'
};

export default async function VideosPage() {
  const videos = await getVideoArchive();

  return (
    <div className="pt-24 pb-16 space-y-16 bg-zinc-950 text-zinc-100">
      
      {/* Banner */}
      <section className="py-16 bg-zinc-900 border-b border-zinc-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
            DOCUMENTARY FOOTAGE & INTERVIEWS
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-mono uppercase text-white tracking-tight">
            VIDEO <span className="text-red-600">ARCHIVE</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-sans max-w-2xl mx-auto">
            Documentaries, training footage, interviews with gold medalists, and legacy stories.
          </p>
        </div>
      </section>

      {/* Video Archive Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VideoArchive videos={videos} />
      </section>

    </div>
  );
}
