'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check session storage so preloader only plays once per session
    const hasLoaded = sessionStorage.getItem('fcs_preloader_seen');
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('fcs_preloader_seen', 'true');
          }, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center p-4 overflow-hidden"
        >
          {/* Film Grain & Red Radial Vignette */}
          <div className="film-grain absolute inset-0 opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />

          {/* Glowing FCS Emblem */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-red-600/60 shadow-[0_0_50px_rgba(220,38,38,0.3)] bg-zinc-900 mb-8 p-1 flex items-center justify-center"
          >
            <Image
              src="/images/fcs-logo.png"
              alt="Friends Cultural Society Pooladikunnu Logo"
              width={160}
              height={160}
              priority
              className="object-contain rounded-full"
            />
          </motion.div>

          {/* Central Quote */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-2 max-w-md mx-auto"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-red-500 block">
              PUTHALATH RAGHAVAN LEGACY ARCHIVE
            </span>
            <h2 className="text-xl md:text-2xl font-black font-mono uppercase text-white tracking-wider">
              &quot;ONE LIFE. ONE RING. A LEGACY OF FIGHTERS.&quot;
            </h2>
            <p className="text-xs font-mono text-zinc-400">
              POOLADIKUNNU • KOZHIKODE, KERALA
            </p>
          </motion.div>

          {/* Progress Bar & Percentage Counter */}
          <div className="w-64 max-w-xs space-y-2 mt-8 font-mono">
            <div className="flex justify-between items-center text-xs text-zinc-400">
              <span className="uppercase tracking-widest text-[10px] font-bold text-red-500">LOADING ARCHIVE</span>
              <span className="font-bold text-white">{progress}%</span>
            </div>
            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
