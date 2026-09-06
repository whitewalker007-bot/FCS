'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, Flame } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'THE STORY', href: '/story' },
    { name: 'RAGHAVAN MASTER', href: '/story#master' },
    { name: 'BOXING', href: '/boxing' },
    { name: 'YOGA', href: '/yoga' },
    { name: 'THE STUDENTS', href: '/students' },
    { name: 'LEGACY', href: '/story#legacy' },
    { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-3 shadow-xl' : 'bg-gradient-to-b from-black/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-red-600/15 border border-red-600/40 rounded flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition duration-300">
            <Flame className="w-5 h-5 text-red-500 group-hover:text-white transition" />
          </div>
          <div>
            <span className="block font-extrabold text-base md:text-lg tracking-widest text-zinc-100 uppercase font-mono">
              PUTHALATH RAGHAVAN
            </span>
            <span className="block text-[10px] tracking-widest text-red-500 uppercase font-semibold">
              LEGACY OF A BOXING MASTER • KOZHIKODE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors relative py-1 ${
                  isActive ? 'text-red-500' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded transition border border-red-500/50 shadow-lg shadow-red-950/50"
          >
            JOIN THE LEGACY
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800 transition"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-zinc-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold tracking-wider uppercase py-2 border-b border-zinc-900/60 ${
                  pathname === link.href ? 'text-red-500' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest py-3 rounded text-center"
            >
              JOIN THE LEGACY
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
