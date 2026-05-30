"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// 1. Structure the layout data for each individual card
const cardsData = [
  { src: '/blue-stack-1.jpg',  xStart: "-120%", yStart: "15%", rotStart: -12 },
  { src: '/green-stack-1.jpg', xStart: "-70%",  yStart: "-5%", rotStart: 6 },
  { src: '/blue-stack-2.jpg',  xStart: "-25%",  yStart: "10%", rotStart: -4 },
  { src: '/green-stack-2.jpg', xStart: "25%",   yStart: "-10%", rotStart: 8 },
  { src: '/blue-stack-3.jpg',  xStart: "70%",   yStart: "12%", rotStart: -6 },
  { src: '/green-stack-3.jpg', xStart: "120%",  yStart: "2%", rotStart: 10 },
];

interface AnimatedCardProps {
  src: string;
  index: number;
  xStart: string;
  yStart: string;
  rotStart: number;
  progress: MotionValue<number>;
}

// 2. Sub-component: Safely uses the transform hooks at the top-level
function AnimatedCard({ src, index, xStart, yStart, rotStart, progress }: AnimatedCardProps) {
  // Safe top-level hook declarations inside a proper React functional component
  const x = useTransform(progress, [0, 0.6], [xStart, "0%"]);
  const y = useTransform(progress, [0, 0.6], [yStart, "0px"]);
  const rotate = useTransform(progress, [0, 0.6], [rotStart, 0]);

  return (
    <motion.div
      style={{ x, y, rotate, zIndex: index + 1 }}
      className="absolute w-44 h-60 md:w-52 md:h-68 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gray-200"
    >
      <img
        src={src}
        alt={`Stack item ${index}`}
        className="w-full h-full object-cover pointer-events-none"
      />
    </motion.div>
  );
}

// 3. Main Component: Handles the hero section container and scroll logic
export default function ScrollStackPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Tracks scroll progress of the section (0 at top, 1 at bottom)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fades out text as cards collapse
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.1]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-white dark:bg-[#0a0a0a]">
      
      {/* HERO STICKY VIEWPORT */}
      <section id="hero" className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        
        {/* Animated Headline Text */}
        <motion.div style={{ opacity: textOpacity }} className="max-w-3xl text-center mb-12 z-0">
          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-4">
            Masterpieces.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-sans">
            Scroll to collect the deck.
          </p>
        </motion.div>

        {/* The Card Stage Area */}
        <div className="relative w-full max-w-md h-72 flex items-center justify-center">
          {cardsData.map((card, index) => (
            <AnimatedCard
              key={card.src}
              src={card.src}
              index={index}
              xStart={card.xStart}
              yStart={card.yStart}
              rotStart={card.rotStart}
              progress={scrollYProgress} // Pass down the motion value safely
            />
          ))}
        </div>
      </section>

      {/* SECTION 2: NEXT PAGE */}
      <section 
        id="features" 
        className="relative h-screen w-full bg-neutral-900 text-white flex items-center justify-center z-50 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]"
      >
        <div className="text-center max-w-xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">Section Two</h2>
          <p className="text-neutral-400 font-sans">
            The cards have unified into one stack. Welcome to the rest of the application!
          </p>
        </div>
      </section>
    </div>
  );
}