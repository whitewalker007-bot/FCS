import { ProductItem } from '@/types';
import { STORE_PRODUCTS } from '../data/verifiedContent';

const WC_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_URL;
const CK = process.env.WOOCOMMERCE_CONSUMER_KEY;
const CS = process.env.WOOCOMMERCE_CONSUMER_SECRET;

export async function getStoreProducts(): Promise<ProductItem[]> {
  if (!WC_URL || !CK || !CS) {
    return STORE_PRODUCTS;
  }
  try {
    const auth = Buffer.from(`${CK}:${CS}`).toString('base64');
    const res = await fetch(`${WC_URL}/wp-json/wc/v3/products?per_page=50`, {
      headers: {
        Authorization: `Basic ${auth}`
      },
      next: { revalidate: 3600 }
    });
    if (!res.ok) return STORE_PRODUCTS;
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data.map((p: { id: number; name: string; slug: string; price: string; regular_price: string; description: string; short_description: string; images: { src: string }[]; stock_status: string; categories: { name: string }[] }) => ({
        id: p.id.toString(),
        name: p.name,
        slug: p.slug,
        category: (p.categories?.[0]?.name as ProductItem['category']) || 'Gear',
        price: parseFloat(p.price) || 0,
        regularPrice: p.regular_price ? parseFloat(p.regular_price) : undefined,
        description: p.description.replace(/<[^>]*>?/gm, ''),
        shortDescription: p.short_description.replace(/<[^>]*>?/gm, ''),
        imageUrl: p.images?.[0]?.src || STORE_PRODUCTS[0].imageUrl,
        inStock: p.stock_status === 'instock',
        featured: true
      }));
    }
    return STORE_PRODUCTS;
  } catch {
    return STORE_PRODUCTS;
  }
}

export async function getProductBySlug(slug: string): Promise<ProductItem | null> {
  const products = await getStoreProducts();
  return products.find(p => p.slug === slug || p.id === slug) || products[0] || null;
}
