import React from 'react';
import Link from 'next/link';
import { Flame, MapPin, Phone, Mail, Award, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Signature Statement Section */}
        <div className="border-b border-zinc-900 pb-12 mb-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-red-500 font-mono text-xs font-semibold tracking-widest uppercase block mb-2">
              LEGACY ARCHIVE • POOLADIKUNNU, KOZHIKODE
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none font-mono">
              &quot;THE FIGHT ENDS.<br />
              <span className="text-red-600">THE LEGACY DOESN&apos;T.&quot;</span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="shrink-0 bg-zinc-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded border border-zinc-800 hover:border-red-500 transition duration-300 shadow-xl"
          >
            TRAIN AT FCS ACADEMY
          </Link>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600/20 border border-red-600/40 rounded flex items-center justify-center">
                <Flame className="w-4 h-4 text-red-500" />
              </div>
              <span className="font-extrabold text-lg text-white font-mono tracking-wider">
                PUTHALATH RAGHAVAN
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Dedicated to the life and sports heritage of Puthalath Raghavan (1942–2020), legendary boxing coach, mentor, yoga practitioner, sculptor, and founder of Friends Cultural Society, Pooladikunnu.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>Pooladikunnu, Kozhikode, Kerala, India - 673011</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest font-mono">BIOGRAPHY & STORY</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/story" className="hover:text-red-500 transition">The Life Story</Link></li>
              <li><Link href="/story#master" className="hover:text-red-500 transition">Coaching Philosophy</Link></li>
              <li><Link href="/story#timeline" className="hover:text-red-500 transition">Interactive Timeline</Link></li>
              <li><Link href="/students" className="hover:text-red-500 transition">Disciples & Medalists</Link></li>
              <li><Link href="/story#daveed" className="hover:text-red-500 transition">Malayalam Movie &quot;Daveed&quot;</Link></li>
            </ul>
          </div>

          {/* Training & Art */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest font-mono">TRAINING & ART</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/boxing" className="hover:text-red-500 transition">Boxing Disciplines</Link></li>
              <li><Link href="/yoga" className="hover:text-red-500 transition">Yoga & Recovery</Link></li>
              <li><Link href="/boxing#women" className="hover:text-red-500 transition">Women in Boxing Pioneer</Link></li>
              <li><Link href="/story#sculptor" className="hover:text-red-500 transition">Boxing Sculptures & Art</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest font-mono">CONTACT & INQUIRIES</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/contact" className="hover:text-red-500 transition">Training Inquiry Form</Link></li>
              <li><Link href="/contact#map" className="hover:text-red-500 transition">Pooladikunnu Gym Map</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Puthalath Raghavan Legacy Archive. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Friends Cultural Society (FCS Pooladikunnu)</span>
            <span className="text-zinc-700 font-mono">•</span>
            <span>Kozhikode, Kerala</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
