import React from 'react';
import { getGalleryMedia } from '@/lib/cms/wordpress';
import { MasonryGallery } from '@/components/gallery/MasonryGallery';

export const metadata = {
  title: 'Historical Photo Archive — Puthalath Raghavan',
  description: 'Filterable masonry photo gallery documenting Raghavan Master, Pooladikunnu gym, disciples, sculptures, and competitions.'
};

export default async function GalleryPage() {
  const mediaItems = await getGalleryMedia();

  return (
    <div className="pt-24 pb-16 space-y-16 bg-zinc-950 text-zinc-100">
      
      {/* Banner */}
      <section className="py-16 bg-zinc-900 border-b border-zinc-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
            VISUAL DOCUMENTARY ARCHIVE
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-mono uppercase text-white tracking-tight">
            HISTORICAL <span className="text-red-600">GALLERY</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-sans max-w-2xl mx-auto">
            Black-and-white historical photographs, sculptures, training grounds, and championship moments.
          </p>
        </div>
      </section>

      {/* Masonry Gallery Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MasonryGallery items={mediaItems} />
      </section>

    </div>
  );
}
