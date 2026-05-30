// app/page.tsx
"use client";

import ProductCard from "@/components/home/ProductCard";
import StackedCards from "@/components/home/StackedCard"; // Adjust path based on your folder structure
import TestimonyCard from "@/components/home/TestimonyCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  // 1. Define your local image array alternating the stacks
  const heroImages = [
    "/blue-stack-3.jpg",
    "/blue-stack-2.jpg",
    "/blue-stack-1.jpg",
    "/green-stack-1.jpg",
    "/green-stack-2.jpg",
    "/green-stack-3.jpg",
  ];

  const FEATURED_PRODUCTS = [
    {
      id: "1",
      name: "Product One 1",
      price: 1200,
      imageSrc: "/product-1.jpg",
    },
    {
      id: "2",
      name: "Product Two 2",
      price: 1200,
      imageSrc: "/product-2.jpg",
    },
    {
      id: "3",
      name: "Product Three 3",
      price: 1200,
      imageSrc: "/product-3.jpg",
    },
    {
      id: "4",
      name: "Product Four 4",
      price: 1200,
      imageSrc: "/product-4.jpg",
    },
  ];

  const TESTIMONIALS = [
    {
      name: "Alex Rivera",
      rating: 5,
      quote: "Lorem Ipsum sit amet, consectetur adipiscing elit.",
      imageSrc: "/person-1.png",
    },
    {
      name: "Sarah Chen",
      rating: 5,
      quote: "Lorem Ipsum sit amet, consectetur adipiscing elit.",
      imageSrc: "/person-2.png",
    },
    {
      name: "Marcus Vance",
      rating: 5,
      quote: "Lorem Ipsum sit amet, consectetur adipiscing elit.",
      imageSrc: "/person-3.png",
    },
    {
      name: "Elena Rostova",
      rating: 5,
      quote: "Lorem Ipsum sit amet, consectetur adipiscing elit.",
      imageSrc: "/person-4.png",
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden bg-white dark:bg-[#0a0a0a]"
      >
        {/* Hero Text */}
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-6">
            Lorem Ipsum.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            sapien augue.
          </p>
        </div>

        {/* 2. Feed your images straight into your component */}
        <StackedCards images={heroImages} />

        <div className="flex gap-4 mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Get started
          </button>
          <button className="bg-zinc-100 text-zinc-700 px-6 py-3 rounded-full transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800">
            Explore
          </button>
        </div>
      </section>

      <section
        id="what-we-do"
        className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0a0a0a]"
      >
        {/* We switch to a flexible container instead of a strict 2-column grid.
        pl-[5%] lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] dynamically aligns 
        the left text content perfectly with your Max-W-6xl (72rem) Navbar.
      */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 pl-[5%] lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          {/* Left Side: Content Box */}
          <div className="w-full lg:w-[45%] space-y-6 z-10 pr-6 lg:pr-0 py-20">
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-gray-900 dark:text-white">
              What We Do.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-sans max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              sapien augue. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec vel sapien augue. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec vel sapien augue.
            </p>
            <div className="pt-4">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side: Edge-to-Edge Image Box */}
          <div className="relative w-full lg:w-[50%] min-h-screen lg:h-[650px]">
            {/* Next.js Optimized Image */}
            <Image
              src="/what-we-do.jpg"
              alt="What we do illustration"
              fill
              className="object-cover"
              sizes="(max-w-1024px) 100vw, 50vw"
              priority
            />

            {/* Deep Gradient Overlays for a flawless blend */}
            {/* Desktop Left-to-Right Blend (Stronger fade across the 50% line) */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/50" />

            {/* Mobile Top-to-Bottom Blend */}
            <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/40" />
          </div>
        </div>
      </section>

      <section
        id="featured-products"
        className="bg-white px-6 pt-36 pb-20 min-h-screen dark:bg-[#0a0a0a]"
      >
        {/* Layout changes to a flex row on desktop */}
        <div className="mx-auto max-w-6xl w-full flex flex-col lg:flex-row gap-12 items-start">
          {/* Sticky Left Sidebar for Title (Unblockable by Navbar) */}
          <div className="w-full lg:w-[30%] lg:sticky lg:top-40 space-y-4">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                Curated Collection
              </span>
              <h2 className="mt-1 text-3xl md:text-5xl font-bold font-sans tracking-tight text-zinc-900 dark:text-white leading-tight">
                Featured <br className="hidden lg:block" /> Products.
              </h2>
            </div>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs hidden lg:block">
              Explore our handpicked innovations designed to elevate your daily
              digital workflow.
            </p>

            {/* Button aligned nicely under text on desktop */}
            <div className="pt-4 hidden lg:block">
              <button className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-200 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-300 dark:hover:bg-zinc-900/50">
                <Link href="/store">View All</Link>
                <div className="transform transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Side: The Product Grid */}
          <div className="w-full lg:w-[70%]">
            {/* Added lg:pb-24 to ensure the pushed-down items don't overflow the section bottom */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:pb-24">
              {FEATURED_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  /* sm:odd:... targets column 1, sm:even:... targets column 2 */
                  className="transform sm:even:translate-y-16 lg:even:translate-y-24 transition-transform duration-300"
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    imageSrc={product.imageSrc}
                  />
                </div>
              ))}
            </div>

            {/* Mobile Only Button */}
            <div className="mt-16 flex justify-center lg:hidden">
              <button className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-200 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-300">
                View More Products
                <div className="transform transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className=" bg-white px-6 py-16 lg:py-0 lg:h-screen flex flex-col justify-start dark:bg-[#0a0a0a]"
      >
        {/* lg:pt-40 completely clears your fixed top navbar */}
        <div className="mx-auto max-w-6xl w-full lg:pt-40 flex flex-col gap-16">
          {/* Perfectly Centered Section Header */}
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              User Sentiments
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-zinc-900 dark:text-white">
              Trusted by Customers.
            </h2>
          </div>

          {/* Horizontal Zigzag Row Layout (1, 2, 1, 2) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start w-full">
            {/* Card 1 (Base Line) */}
            <div className="w-full">
              <TestimonyCard {...TESTIMONIALS[0]} />
            </div>

            {/* Card 2 (Dropped Down) */}
            <div className="w-full transform lg:translate-y-12 transition-all duration-300">
              <TestimonyCard {...TESTIMONIALS[1]} />
            </div>

            {/* Card 3 (Base Line) */}
            <div className="w-full">
              <TestimonyCard {...TESTIMONIALS[2]} />
            </div>

            {/* Card 4 (Dropped Down) */}
            <div className="w-full transform lg:translate-y-12 transition-all duration-300">
              <TestimonyCard {...TESTIMONIALS[3]} />
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-white px-6 py-20 dark:bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl w-full">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-50 border border-zinc-100/80 px-8 py-16 text-center shadow-sm transition-all duration-300 hover:border-sky-400/40 hover:shadow-xl hover:shadow-sky-500/[0.02] dark:bg-[#0d0d0d] dark:border-zinc-900 dark:hover:border-sky-500/30">
            {/* Subtle background ambient glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-sky-400/10 blur-[100px] pointer-events-none rounded-full dark:bg-sky-500/5" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-zinc-900 dark:text-white leading-tight">
                Ready to have your own <br /> amazing branded store ?
              </h2>
              <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                Let's have a coffee chat! Also don't hesitate to contact me at
                +60189155412 or email me at abidakhrs@gmail.com
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  {/* Email Trigger Link */}
                  <a
                    href="mailto:abidakhrs@gmail.com"
                    className="group flex w-full sm:w-auto items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full hover:bg-zinc-800 transition dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-medium text-sm text-center"
                  >
                    Email me
                    <div className="transform transition-transform duration-200 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </a>

                  {/* Contact / Phone Trigger Link */}
                  <a
                    href="tel:+60189155412"
                    className="w-full sm:w-auto bg-zinc-100 text-zinc-700 px-8 py-3.5 rounded-full transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 font-medium text-sm text-center"
                  >
                    Contact now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
