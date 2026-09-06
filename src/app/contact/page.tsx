'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    trainingInterest: 'Beginner Boxing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-zinc-950 text-zinc-100">
      
      {/* Banner */}
      <section className="py-16 bg-zinc-900 border-b border-zinc-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
            POOLADIKUNNU, KOZHIKODE
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-mono uppercase text-white tracking-tight">
            CONNECT WITH <span className="text-red-600">THE LEGACY</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-sans max-w-2xl mx-auto">
            Inquire about boxing & yoga programs, Friends Cultural Society community initiatives, or archival contributions.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8 font-mono">
            
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl space-y-6">
              <h3 className="text-xl font-bold text-white uppercase border-b border-zinc-800 pb-3">LEGACY HEADQUARTERS</h3>
              
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">Friends Cultural Society (FCS)</span>
                    <span className="text-zinc-400">Pooladikunnu, Eranhikkal P.O.</span>
                    <span className="text-zinc-400 block">Kozhikode, Kerala, India - 673011</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <span className="text-white font-bold block">Phone / WhatsApp</span>
                    <span className="text-zinc-400">+91 98470 00000 (Placeholder Inquiry)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <span className="text-white font-bold block">Email Archive</span>
                    <span className="text-zinc-400">info@puthalathraghavan.org</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Connect */}
            <div className="bg-emerald-950/60 border border-emerald-800 p-6 rounded-xl space-y-3">
              <span className="text-emerald-400 text-xs font-bold uppercase block">DIRECT WHATSAPP INQUIRY</span>
              <p className="text-xs text-zinc-300 font-sans">
                Connect directly for training slot availability or community sports mentorship.
              </p>
              <a
                href="https://wa.me/919847000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded transition"
              >
                <MessageSquare className="w-4 h-4" /> CHAT ON WHATSAPP
              </a>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-xl space-y-6 font-mono">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-red-500 mx-auto" />
                <h3 className="text-2xl font-bold text-white uppercase">Inquiry Received</h3>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto font-sans">
                  Thank you for connecting with the Puthalath Raghavan Legacy Archive. Our team will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white uppercase border-b border-zinc-800 pb-3">TRAINING & GENERAL INQUIRY FORM</h3>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-400 mb-1">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter full name"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-red-600 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-400 mb-1">PHONE NUMBER *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Phone / WhatsApp"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-red-600 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-red-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">TRAINING INTEREST</label>
                    <select
                      value={formData.trainingInterest}
                      onChange={e => setFormData({ ...formData, trainingInterest: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-red-600 outline-none"
                    >
                      <option value="Beginner Boxing">Beginner Boxing Fundamentals</option>
                      <option value="Competitive Boxing">Competitive Amateur Bouts</option>
                      <option value="Fighter Yoga">Fighter Yoga & Breathwork</option>
                      <option value="Women Boxing">Women&apos;s Boxing & Self-Defense</option>
                      <option value="Youth Sports">Youth Sports & FCS Initiative</option>
                      <option value="Archive Contribution">Historical Photo / Media Contribution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1">MESSAGE / QUESTIONS *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or training questions..."
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-red-600 outline-none resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-4 rounded flex items-center justify-center gap-2 transition shadow-xl"
                >
                  <Send className="w-4 h-4" /> SUBMIT INQUIRY
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-2xl space-y-3">
          <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
            <span className="text-white font-bold">POOLADIKUNNU TRAINING LOCATION MAP</span>
            <span className="text-red-500">KOZHIKODE • KERALA</span>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
            <iframe
              title="Pooladikunnu Gym Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.109156828555!2d75.77732!3d11.31254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593457a4128f%3A0xb3e1e83f0db6e39c!2sPooladikunnu%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.9) contrast(1.2) invert(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
