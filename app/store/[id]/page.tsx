"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, ArrowLeft, Shield, Truck, RotateCcw } from "lucide-react";

// Mock Database Inventory Array (Matches your global data structure)
const MOCK_INVENTORY = [
  { id: "1", name: "Headphone One", price: 180, category: "Headphones", imageSrc: "/product-1.jpg", rating: 5, description: "Engineered with custom acoustics and high-fidelity transient responses. Features dynamic acoustic isolation and soft-molded memory foam ear elements for absolute spatial isolation." },
  { id: "2", name: "Headphone Two", price: 340, category: "Headphones", imageSrc: "/product-2.jpg", rating: 4, description: "Premium architectural audio array. Built with ultra-thin layered beryllium composite diaphragms, delivering master-class frequency separation optimized for creators." },
  { id: "3", name: "Watch One", price: 95, category: "Watches", imageSrc: "/product-3.jpg", rating: 4, description: "Minimalist chronological chassis machined from a singular block of low-carbon surgical steel. Driven by a precise, high-frequency internal quartz system." },
  { id: "4", name: "Watch Two", price: 210, category: "Watches", imageSrc: "/product-4.jpg", rating: 5, description: "An elegant fusion of technical data telemetry and premium material styling. Sealed case architecture waterproofed up to 50 meters with sapphire surface crystal." },
  { id: "5", name: "Shoe One", price: 125, category: "Shoes", imageSrc: "/product-5.jpg", rating: 4, description: "Ergonomically tuned structural silhouette. Utilizing an injection-molded energy recovery foam deck paired with highly breathable woven monofilament mesh." },
  { id: "6", name: "Shoe Two", price: 65, category: "Shoes", imageSrc: "/product-6.jpg", rating: 3, description: "Lightweight utility trainer engineered for daily high-output activities. Balanced stability chassis with a high-traction vulcanized rubber baseline layout." },
  { id: "7", name: "Shoe Three", price: 450, category: "Shoes", imageSrc: "/product-7.jpg", rating: 5, description: "Limited elite performance run variant. Features a nested custom contour carbon fiber propulsion flight plate embedded inside dual-density foam matrices." },
  { id: "8", name: "Shoe Four", price: 520, category: "Shoes", imageSrc: "/product-8.jpg", rating: 5, description: "The pinnacle of urban protective footwear architecture. All-weather water-repellent shell membrane combined with tactical fast-lace lock systems." },
];

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  // Unwraps dynamic Next.js route params promise safely
  const resolvedParams = use(params);
  const { addToCart } = useCart();

  // Find product inside the local data block matching the dynamic URL token ID
  const product = MOCK_INVENTORY.find((item) => item.id === resolvedParams.id);

  // Fallback state if path parameters point to an invalid index asset
  if (!product) {
    return (
      <main className="min-h-screen bg-white px-6 pt-40 pb-24 text-center dark:bg-[#0a0a0a]">
        <div className="mx-auto max-w-md space-y-4">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Component Not Located</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">The product identifier key does not match active asset layers inside this catalog segment.</p>
          <Link href="/store" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <ArrowLeft className="h-3.5 w-3.5" /> Return to Catalog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 pt-36 pb-24 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl w-full space-y-8">
        
        {/* Back Link Breadcrumb Navigation */}
        <Link 
          href="/store" 
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Catalog
        </Link>

        {/* Dynamic Product Layout Row Split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Panel Layer: Premium Frame Aspect Square Media Display */}
          <div className="w-full lg:col-span-7">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-zinc-100 bg-zinc-50 dark:border-zinc-900 dark:bg-[#0d0d0d] p-4">
              <Image
                src={product.imageSrc}
                alt={product.name}
                fill
                priority
                className="object-cover p-8 transition-transform duration-500 hover:scale-102"
                sizes="(max-w-1024px) 100vw, 55vw"
              />
            </div>
          </div>

          {/* Right Panel Layer: Text Telemetry + Interactive Purchasing Deck */}
          <div className="w-full lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            
            {/* Category Tag + Title Blocks */}
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                {product.name}
              </h1>

              {/* Functional Star Matrix Component */}
              {product.rating && (
                <div className="flex gap-0.5 pt-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
            </div>

            {/* Price Node Element */}
            <div className="border-t border-b border-zinc-100 py-4 dark:border-zinc-900">
              <p className="font-mono text-2xl font-bold text-zinc-900 dark:text-white">
                MYR {product.price.toLocaleString()}
              </p>
            </div>

            {/* Core Summary Description Block */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Specification overview</h3>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {product.description}
              </p>
            </div>

            {/* Action Cart Execution Stack */}
            <div className="pt-4">
              <button
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, imageSrc: product.imageSrc })}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-[0.99] dark:bg-white dark:text-black dark:hover:bg-zinc-100"
              >
                <ShoppingCart className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                Add to Cart
              </button>
            </div>

            {/* Micro-Trust Info Anchors */}
            <div className="grid grid-cols-1 gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-900 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              <div className="flex items-center gap-2.5">
                <Truck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Complimentary Premium Nationwide Courier Distribution</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>2-Year Consolidated Modular Product Structural Warranty</span>
              </div>
              <div className="flex items-center gap-2.5">
                <RotateCcw className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>30-Day Simplified Interface Trial Return Guarantee</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}