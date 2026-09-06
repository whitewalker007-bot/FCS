import type { Metadata } from 'next';
import { Inter, Outfit, Cinzel } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';
import { CartDrawer } from '@/components/shop/CartDrawer';
import { JsonLd } from '@/components/seo/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel'
});

export const metadata: Metadata = {
  title: 'Puthalath Raghavan — The Legacy of a Boxing Master | Pooladikunnu Kozhikode',
  description: 'Official legacy portfolio and archive dedicated to Puthalath Raghavan (Raghavan Master), legendary boxing coach, mentor, yoga practitioner, and sculptor from Pooladikunnu, Kozhikode, Kerala.',
  keywords: [
    'Puthalath Raghavan',
    'Raghavan Master Kozhikode',
    'Puthalath Raghavan Boxing',
    'Boxing Coach Kozhikode',
    'Boxing Coach Kerala',
    'Friends Cultural Society Pooladikunnu',
    'Boxing and Yoga Kerala',
    'Pooladikunnu Boxing',
    'Kerala Boxing Association'
  ],
  authors: [{ name: 'Friends Cultural Society Pooladikunnu' }],
  openGraph: {
    title: 'Puthalath Raghavan — The Legacy of a Boxing Master',
    description: 'One Life. One Ring. A Legacy of Fighters. Honoring four decades of boxing and yoga instruction in Pooladikunnu, Kozhikode, Kerala.',
    url: 'https://puthalathraghavan.org',
    siteName: 'Puthalath Raghavan Legacy Archive',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puthalath Raghavan — Boxing Master Legacy',
    description: 'One Life. One Ring. A Legacy of Fighters. Pooladikunnu, Kozhikode, Kerala.'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${cinzel.variable}`}>
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-red-600 selection:text-white">
        <JsonLd />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <CartDrawer />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
