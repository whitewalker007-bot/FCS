'use client';

import React, { useState } from 'react';
import { ProductItem } from '@/types';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Plus, Minus, Check } from 'lucide-react';

interface Props {
  product: ProductItem;
}

export const AddToCartDetailBtn: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedAttribute, setSelectedAttribute] = useState<string>(
    product.attributes?.[0]?.options?.[0] || ''
  );
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, quantity, selectedAttribute);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Options if available */}
      {product.attributes && product.attributes.length > 0 && (
        <div className="space-y-3 font-mono">
          <label className="text-xs font-bold text-zinc-300 uppercase">
            SELECT {product.attributes[0].name.toUpperCase()}
          </label>
          <div className="flex flex-wrap gap-2">
            {product.attributes[0].options.map(opt => (
              <button
                key={opt}
                onClick={() => setSelectedAttribute(opt)}
                className={`text-xs px-4 py-2 rounded font-bold transition border ${
                  selectedAttribute === opt
                    ? 'bg-red-600 text-white border-red-500'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity & CTA */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        
        {/* Quantity control */}
        <div className="flex items-center justify-between border border-zinc-800 rounded bg-zinc-900 px-4 py-3 sm:w-36">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-zinc-400 hover:text-white"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-mono text-sm font-bold text-white">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-zinc-400 hover:text-white"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Add Button */}
        <button
          onClick={handleAdd}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-widest py-4 px-8 rounded flex items-center justify-center gap-2 transition shadow-xl shadow-red-950/50"
        >
          {added ? (
            <>
              <Check className="w-4 h-4 text-white" />
              ADDED TO CART
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              ADD TO CART • ₹{product.price * quantity}
            </>
          )}
        </button>
      </div>

    </div>
  );
};
