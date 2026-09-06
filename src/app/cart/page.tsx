'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto text-zinc-600">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold font-mono text-white uppercase">Your Shopping Cart is Empty</h1>
        <p className="text-zinc-400 text-sm max-w-md mx-auto font-sans">
          Explore official training wraps, gloves, t-shirts, and boxing-yoga memberships from Pooladikunnu.
        </p>
        <div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 rounded transition"
          >
            BROWSE STORE <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
          <div>
            <h1 className="text-3xl font-black font-mono text-white uppercase">Shopping Cart</h1>
            <span className="text-xs font-mono text-zinc-400">({totalItems} items selected)</span>
          </div>
          <button
            onClick={clearCart}
            className="text-xs font-mono text-zinc-500 hover:text-red-500 transition"
          >
            CLEAR CART
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Cart Table */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map(({ product, quantity, selectedAttribute }) => (
              <div
                key={product.id}
                className="bg-zinc-900 border border-zinc-800 p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-zinc-950 rounded-lg overflow-hidden relative shrink-0 border border-zinc-800">
                    <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-base text-white">{product.name}</h3>
                    {selectedAttribute && (
                      <span className="text-xs font-mono text-zinc-400 block">Option: {selectedAttribute}</span>
                    )}
                    <span className="text-red-500 font-mono font-bold text-sm mt-1 block">₹{product.price}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="flex items-center border border-zinc-800 rounded bg-zinc-950">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="p-2 text-zinc-400 hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 font-mono text-xs font-bold text-white">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="p-2 text-zinc-400 hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="font-mono font-bold text-base text-white min-w-[80px] text-right">
                    ₹{product.price * quantity}
                  </span>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="p-2 text-zinc-500 hover:text-red-500 transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white pt-4">
              <ArrowLeft className="w-4 h-4 text-red-500" /> CONTINUE SHOPPING
            </Link>
          </div>

          {/* Summary Box */}
          <div className="lg:col-span-4 bg-zinc-900 border border-zinc-800 p-8 rounded-xl space-y-6 font-mono">
            <h3 className="text-xl font-bold uppercase text-white border-b border-zinc-800 pb-4">ORDER SUMMARY</h3>
            
            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-emerald-400 font-bold">FREE (KERALA & PAN-INDIA)</span>
              </div>
              <div className="flex justify-between border-t border-zinc-800 pt-3 text-sm font-bold text-white">
                <span>Total Amount</span>
                <span className="text-red-500">₹{subtotal.toLocaleString()}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-4 rounded flex items-center justify-center gap-2 transition"
            >
              PROCEED TO CHECKOUT <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
