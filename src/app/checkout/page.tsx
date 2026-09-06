'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Kozhikode',
    state: 'Kerala',
    pincode: '673011',
    paymentMethod: 'cod'
  });
  const [isOrdered, setIsOrdered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="pt-32 pb-24 max-w-2xl mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 bg-red-600/20 text-red-500 border border-red-600/40 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest block">ORDER CONFIRMED</span>
        <h1 className="text-3xl md:text-4xl font-black font-mono text-white uppercase">Thank You for Your Order</h1>
        <p className="text-zinc-300 text-sm font-sans max-w-md mx-auto">
          Your order has been logged into the Pooladikunnu Legacy system. Our team will contact you via WhatsApp/Phone for delivery dispatch details.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl text-left font-mono text-xs text-zinc-400 space-y-2">
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span>ORDER REF:</span>
            <span className="text-white font-bold">#FCS-PR-{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <div className="flex justify-between">
            <span>DELIVERY TO:</span>
            <span className="text-white">{formData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span>LOCATION:</span>
            <span className="text-white">{formData.city}, {formData.state}</span>
          </div>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 rounded transition"
          >
            RETURN TO HOMEPAGE
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="border-b border-zinc-800 pb-6">
          <h1 className="text-3xl font-black font-mono text-white uppercase">Checkout & Order Dispatch</h1>
          <p className="text-xs font-mono text-zinc-400">Headless WooCommerce order placement.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Shipping Form */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 p-8 rounded-xl space-y-6 font-mono">
            <h3 className="text-lg font-bold text-white uppercase border-b border-zinc-800 pb-3">SHIPPING & CONTACT DETAILS</h3>
            
            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-zinc-400 mb-1">FULL NAME *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Suman Lal"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-red-600 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <label className="block text-zinc-400 mb-1">PHONE / WHATSAPP *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-red-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">STREET ADDRESS *</label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  placeholder="House name, street, landmarks"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white focus:border-red-600 outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-zinc-400 mb-1">CITY</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">STATE</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={e => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">PINCODE</label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <label className="block text-xs font-bold text-zinc-300">PAYMENT METHOD</label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <label className="bg-zinc-950 border border-red-600 p-3 rounded flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="pay" defaultChecked />
                  <span className="text-white font-bold">Cash / UPI on Delivery</span>
                </label>
                <label className="bg-zinc-950 border border-zinc-800 p-3 rounded flex items-center gap-2 cursor-pointer opacity-70">
                  <input type="radio" name="pay" disabled />
                  <span className="text-zinc-400">Card / NetBanking</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Summary */}
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 p-8 rounded-xl space-y-6 font-mono">
            <h3 className="text-lg font-bold uppercase text-white border-b border-zinc-800 pb-3">ITEMS IN ORDER</h3>

            <div className="space-y-3 text-xs divide-y divide-zinc-900">
              {cart.map(({ product, quantity }) => (
                <div key={product.id} className="pt-3 first:pt-0 flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold block">{product.name}</span>
                    <span className="text-zinc-500">Qty: {quantity}</span>
                  </div>
                  <span className="text-red-500 font-bold">₹{product.price * quantity}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-800 pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-sm font-bold text-white">
                <span>TOTAL PAYABLE</span>
                <span className="text-red-500 text-lg">₹{subtotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-4 rounded flex items-center justify-center gap-2 transition shadow-xl"
            >
              <Lock className="w-4 h-4" /> CONFIRM & PLACE ORDER
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
