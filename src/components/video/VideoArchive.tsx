'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { VideoMedia } from '@/types';
import { Play, X, Clock, Film } from 'lucide-react';

interface Props {
  videos: VideoMedia[];
}

export const VideoArchive: React.FC<Props> = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState<VideoMedia | null>(null);

  return (
    <div className="space-y-12">
      
      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((vid) => (
          <motion.div
            key={vid.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveVideo(vid)}
            className="group cursor-pointer bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl hover:border-red-600/60 transition duration-300 space-y-4"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
              <Image
                src={vid.thumbnailUrl}
                alt={vid.title}
                fill
                className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/40 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-red-600/90 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition duration-300 border border-white/20">
                  <Play className="w-6 h-6 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-3 right-3 bg-black/80 text-white font-mono text-[10px] px-2 py-0.5 rounded flex items-center gap-1 border border-zinc-700">
                <Clock className="w-3 h-3 text-red-500" />
                <span>{vid.duration}</span>
              </div>

              {/* Category */}
              <div className="absolute top-3 left-3 bg-red-600 text-white font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                {vid.category}
              </div>
            </div>

            <div className="p-5 space-y-2">
              <h3 className="font-mono font-bold text-lg text-white group-hover:text-red-500 transition line-clamp-1">
                {vid.title}
              </h3>
              <p className="text-xs text-zinc-400 font-sans line-clamp-2">
                {vid.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 z-50 p-3 bg-zinc-900 text-zinc-300 hover:text-white rounded-full border border-zinc-700 transition"
            aria-label="Close Video"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-4">
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black border border-zinc-800">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="p-2 space-y-1">
              <span className="text-xs font-mono text-red-500 font-bold uppercase">{activeVideo.category}</span>
              <h3 className="text-xl font-bold font-mono text-white">{activeVideo.title}</h3>
              <p className="text-xs text-zinc-400 font-sans">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
