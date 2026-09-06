import React from 'react';
import { getStoreProducts } from '@/lib/cms/woocommerce';
import { ProductGrid } from '@/components/shop/ProductGrid';

export const metadata = {
  title: 'Official Store — Equipment, Apparel & Training Programs',
  description: 'Official WooCommerce shop for Pooladikunnu Pro Hand Wraps, Boxing Gloves, Legacy Apparel, and Training Passes.'
};

export default async function ShopPage() {
  const products = await getStoreProducts();

  return (
    <div className="pt-24 pb-16 space-y-16 bg-zinc-950 text-zinc-100">
      
      {/* Banner */}
      <section className="py-16 bg-zinc-900 border-b border-zinc-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
            WOOCOMMERCE INTEGRATED STORE
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-mono uppercase text-white tracking-tight">
            LEGACY <span className="text-red-600">EQUIPMENT & GEAR</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-sans max-w-2xl mx-auto">
            Pro hand wraps, sparring gloves, legacy apparel, and academy training passes. All purchases support Friends Cultural Society community initiatives.
          </p>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid products={products} />
      </section>

    </div>
  );
}
