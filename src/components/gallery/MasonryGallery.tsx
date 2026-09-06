'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { GalleryMedia } from '@/types';
import { Maximize2, X, ChevronLeft, ChevronRight, Info, Flame } from 'lucide-react';

interface Props {
  items: GalleryMedia[];
}

export const MasonryGallery: React.FC<Props> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeMedia, setActiveMedia] = useState<GalleryMedia | null>(null);

  const categories = [
    'ALL',
    'Raghavan Master',
    'Boxing',
    'Yoga',
    'Students',
    'Competitions',
    'Pooladikunnu',
    'Sculptures',
    'Legacy'
  ];

  const filteredItems = selectedCategory === 'ALL'
    ? items
    : items.filter(item => item.category === selectedCategory);

  const handleNext = () => {
    if (!activeMedia) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeMedia.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveMedia(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeMedia) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeMedia.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveMedia(filteredItems[prevIndex]);
  };

  return (
    <div className="space-y-12">
      
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 font-mono">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-4 py-2 rounded-full font-bold uppercase tracking-wider transition ${
                isActive
                  ? 'bg-red-600 text-white shadow-lg shadow-red-950/50'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry / Grid Gallery */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              onClick={() => setActiveMedia(item)}
              className="group cursor-pointer bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl hover:border-red-600/60 transition duration-300 relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition" />
                
                {/* Category Pill Badge */}
                <div className="absolute top-3 left-3 bg-zinc-950/90 text-red-500 font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded border border-zinc-800">
                  {item.category}
                </div>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition bg-red-600 text-white p-2 rounded-full shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption Summary */}
              <div className="p-4 space-y-1">
                <h4 className="font-mono font-bold text-sm text-white group-hover:text-red-500 transition line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 font-sans line-clamp-2">
                  {item.caption}
                </p>
                {item.year && (
                  <span className="text-[10px] font-mono text-zinc-500 block pt-1">
                    YEAR: {item.year}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          
          {/* Close Button */}
          <button
            onClick={() => setActiveMedia(null)}
            className="absolute top-6 right-6 z-50 p-3 bg-zinc-900 text-zinc-300 hover:text-white rounded-full border border-zinc-700 transition"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-zinc-900/80 text-white hover:bg-red-600 rounded-full border border-zinc-700 transition"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-zinc-900/80 text-white hover:bg-red-600 rounded-full border border-zinc-700 transition"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal Image Box */}
          <div className="max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            
            <div className="relative md:w-3/5 aspect-[4/3] md:aspect-auto bg-black shrink-0">
              <Image
                src={activeMedia.imageUrl}
                alt={activeMedia.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between space-y-6 overflow-y-auto bg-zinc-950">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="bg-red-600/20 text-red-500 font-bold px-2.5 py-1 rounded">
                    {activeMedia.category}
                  </span>
                  {activeMedia.year && (
                    <span className="text-zinc-500 font-mono">
                      {activeMedia.year}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black font-mono text-white uppercase">
                  {activeMedia.title}
                </h3>

                <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                  {activeMedia.caption}
                </p>

                {activeMedia.credit && (
                  <div className="pt-2 text-xs font-mono text-zinc-500 border-t border-zinc-900">
                    Source / Credit: {activeMedia.credit}
                  </div>
                )}
              </div>

              <div className="p-3 bg-zinc-900 rounded border border-zinc-800 text-[11px] font-mono text-zinc-400">
                Puthalath Raghavan Legacy Archive • Kozhikode, Kerala
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
