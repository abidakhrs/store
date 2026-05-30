"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 dark:border-zinc-900 px-6 pt-16 pb-8 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Top Section: Brand + Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Brand Panel (Spans 4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo-wrap.png" 
                width={40} 
                height={40} 
                alt="Synone Logo" 
                className="h-8 w-auto grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100" 
              />
            </Link>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-xs leading-relaxed">
              Architecting high-fidelity components and streamlined interfaces for modern digital distribution networks.
            </p>
          </div>

          {/* Quick Links (Spans 2 columns) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Ecosystem</h4>
            <ul className="space-y-2 text-xs text-zinc-500 dark:text-zinc-400">
              <li><Link href="/" className="hover:text-black dark:hover:text-white transition">Home</Link></li>
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition">Products</Link></li>
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition">About</Link></li>
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Panel (Spans 2 columns) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Legal</h4>
            <ul className="space-y-2 text-xs text-zinc-500 dark:text-zinc-400">
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition">Documentation</Link></li>
            </ul>
          </div>

          {/* Newsletter (Spans 4 columns) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Stay Updated</h4>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">Subscribe for component updates and build drops.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 pt-1">
              <input 
                type="email" 
                placeholder="your@email.com" 
                required
                className="w-full text-xs rounded-xl border border-zinc-200 bg-transparent px-4 py-2.5 text-zinc-900 outline-none transition focus:border-sky-400 dark:border-zinc-800 dark:text-white dark:focus:border-sky-500/50"
              />
              <button 
                type="submit" 
                className="rounded-xl bg-black px-4 py-2.5 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright Notice */}
        <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
            © {new Date().getFullYear()} Synone. All rights reserved.
          </p>
          <div className="flex gap-4 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            <span>Built by Abid Akhras</span>
            <span className="text-zinc-200 dark:text-zinc-800">|</span>
            <span>abidakhrs@gmail.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
}