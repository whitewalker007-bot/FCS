import React from 'react';
import { getProductBySlug } from '@/lib/cms/woocommerce';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { AddToCartDetailBtn } from './AddToCartDetailBtn';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProductBySlug(params.id);
  return {
    title: product ? `${product.name} — Puthalath Raghavan Store` : 'Product Details',
    description: product?.shortDescription || 'Official training equipment and legacy gear.'
  };
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductBySlug(params.id);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center space-y-4">
        <h1 className="text-3xl font-mono font-bold text-white">Product Not Found</h1>
        <Link href="/shop" className="text-red-500 underline font-mono text-sm">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4 text-red-500" />
          BACK TO ALL PRODUCTS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Image View */}
          <div className="lg:col-span-6 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 bg-zinc-950/90 text-red-500 font-mono text-xs font-bold uppercase px-3 py-1 rounded border border-zinc-800">
              {product.category}
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-black font-mono text-white uppercase tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 font-mono">
                <span className="text-3xl font-bold text-red-500">₹{product.price}</span>
                {product.regularPrice && (
                  <span className="text-sm text-zinc-500 line-through">₹{product.regularPrice}</span>
                )}
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                  {product.inStock ? 'IN STOCK' : 'PRE-ORDER'}
                </span>
              </div>
            </div>

            <p className="text-zinc-300 text-sm md:text-base font-sans leading-relaxed border-y border-zinc-800 py-6">
              {product.description}
            </p>

            {/* Interactive Add to Cart Component */}
            <AddToCartDetailBtn product={product} />

            {/* Assurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-900 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
                <span>Authentic Gear</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-red-500 shrink-0" />
                <span>Pan-India Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-red-500 shrink-0" />
                <span>FCS Community Benefit</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
