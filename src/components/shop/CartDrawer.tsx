'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const CartDrawer: React.FC = () => {
  const { cart, isOpen, closeCart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 text-zinc-100 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-red-600" />
              <h2 className="text-xl font-bold tracking-tight uppercase">Your Gear & Training Cart</h2>
              <span className="bg-red-600/20 text-red-500 text-xs px-2.5 py-0.5 rounded-full font-mono">
                {totalItems}
              </span>
            </div>
            <button 
              onClick={closeCart}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-16 h-16 text-zinc-700 mx-auto stroke-1" />
                <p className="text-zinc-400 text-lg">Your cart is currently empty.</p>
                <p className="text-sm text-zinc-500 max-w-xs mx-auto">
                  Explore our official training wraps, gloves, apparel, and boxing-yoga memberships.
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium text-sm transition"
                >
                  BROWSE STORE
                </Link>
              </div>
            ) : (
              <div className="space-y-4 divide-y divide-zinc-900">
                {cart.map(({ product, quantity, selectedAttribute }) => (
                  <div key={product.id} className="pt-4 first:pt-0 flex gap-4 items-start">
                    <div className="w-20 h-20 bg-zinc-900 rounded-lg overflow-hidden relative shrink-0 border border-zinc-800">
                      <Image 
                        src={product.imageUrl} 
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm line-clamp-1 text-zinc-100">{product.name}</h4>
                      {selectedAttribute && (
                        <p className="text-xs text-zinc-400 mt-0.5">Option: {selectedAttribute}</p>
                      )}
                      <p className="text-red-500 font-semibold text-sm mt-1">₹{product.price}</p>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Adjuster */}
                        <div className="flex items-center border border-zinc-800 rounded-md bg-zinc-900">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="p-1 text-zinc-400 hover:text-white"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-mono text-zinc-200">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="p-1 text-zinc-400 hover:text-white"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-zinc-500 hover:text-red-500 p-1 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-zinc-800 bg-zinc-900/50 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Subtotal</span>
                <span className="text-lg font-bold text-white font-mono">₹{subtotal.toLocaleString()}</span>
              </div>
              <p className="text-xs text-zinc-500">Taxes and shipping calculated at checkout.</p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="w-full py-3 text-center border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-xs font-bold uppercase tracking-wider rounded-lg transition"
                >
                  VIEW CART
                </Link>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-center text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition"
                >
                  CHECKOUT <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
