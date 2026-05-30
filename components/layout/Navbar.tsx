"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const isDark = false;
  const [isScrolled, setIsScrolled] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();

  // Detect any downward scroll movement from the absolute top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2">
      <div
        className={`relative flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg shadow-black/[0.03]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            <Image
              src="/logo-wrap.png"
              width={40}
              height={40}
              alt="Synone Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Center: Main Navigation Links */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-12 md:flex">
          <Link
            href="/"
            className="text-md font-medium text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/store"
            className="text-md font-medium text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
          >
            Store
          </Link>
          <Link
            href="/#cta"
            className="text-md font-medium text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Right: Functional Icons (Cart, Theme Mode) */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)} // <-- Fires drawer open globally
            className="relative rounded-xl p-2 text-zinc-700 dark:text-zinc-300 transition hover:bg-black/5 dark:hover:bg-white/10"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white dark:bg-white dark:text-black animate-in fade-in zoom-in duration-200">
                {cartCount}
              </span>
            )}
          </button>

          {/* Theme Toggle Button */}
          <button className="rounded-xl p-2 text-zinc-700 dark:text-zinc-300 transition hover:bg-black/5 dark:hover:bg-white/10">
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
