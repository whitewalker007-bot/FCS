'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProductItem } from '@/types';
import { ShoppingBag, Check, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface Props {
  products: ProductItem[];
}

export const ProductGrid: React.FC<Props> = ({ products }) => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Gear', 'Apparel', 'Memberships', 'Programs'];

  const filteredProducts = selectedCategory === 'ALL'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      
      {/* Category Pills */}
      <div className="flex items-center justify-center flex-wrap gap-3 font-mono">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs px-5 py-2.5 rounded-full font-bold uppercase tracking-wider transition ${
              selectedCategory === cat
                ? 'bg-red-600 text-white shadow-lg shadow-red-950/50'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-red-600/50 transition duration-300 group"
          >
            <div>
              <div className="relative aspect-square overflow-hidden bg-zinc-950">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                
                <div className="absolute top-3 left-3 bg-zinc-950/90 text-red-500 font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded border border-zinc-800">
                  {product.category}
                </div>

                {product.regularPrice && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                    SALE
                  </div>
                )}
              </div>

              <div className="p-5 space-y-2">
                <Link href={`/shop/${product.id}`} className="block">
                  <h3 className="font-mono font-bold text-base text-white group-hover:text-red-500 transition line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-zinc-400 font-sans line-clamp-2">
                  {product.shortDescription}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 space-y-4">
              <div className="flex items-baseline justify-between border-t border-zinc-800/80 pt-4 font-mono">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-white">₹{product.price}</span>
                  {product.regularPrice && (
                    <span className="text-xs text-zinc-500 line-through">₹{product.regularPrice}</span>
                  )}
                </div>
                <span className="text-[10px] text-emerald-400 font-bold uppercase">
                  {product.inStock ? 'IN STOCK' : 'PRE-ORDER'}
                </span>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs uppercase tracking-wider py-3 rounded flex items-center justify-center gap-2 transition"
              >
                <ShoppingBag className="w-4 h-4" />
                ADD TO CART
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
