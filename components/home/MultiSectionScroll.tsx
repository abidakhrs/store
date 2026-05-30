"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cardsData = [
  {
    src: "/blue-stack-1.jpg",
    scattered: { x: -280, y: 20, rot: -12 },
    grid: { x: -180, y: 80, rot: 0 },
  },
  {
    src: "/green-stack-1.jpg",
    scattered: { x: -160, y: -30, rot: 6 },
    grid: { x: 0, y: 80, rot: 0 },
  },
  {
    src: "/blue-stack-2.jpg",
    scattered: { x: -40, y: 30, rot: -4 },
    grid: { x: 180, y: 80, rot: 0 },
  },
  {
    src: "/green-stack-2.jpg",
    scattered: { x: 80, y: -40, rot: 8 },
    grid: { x: -180, y: 330, rot: 0 },
  },
  {
    src: "/blue-stack-3.jpg",
    scattered: { x: 200, y: 40, rot: -6 },
    grid: { x: 0, y: 330, rot: 0 },
  },
  {
    src: "/green-stack-3.jpg",
    scattered: { x: 320, y: -10, rot: 10 },
    grid: { x: 180, y: 330, rot: 0 },
  },
];

export default function MultiSectionScroll() {
  const [step, setStep] = useState(0);

  const stepRef = useRef(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  const goNext = () => {
    if (isAnimating.current) return;

    if (stepRef.current < 2) {
      isAnimating.current = true;

      setStep((prev) => prev + 1);

      setTimeout(() => {
        isAnimating.current = false;
      }, 700);
    }
  };

  const goPrev = () => {
    if (isAnimating.current) return;

    if (stepRef.current > 0) {
      isAnimating.current = true;

      setStep((prev) => prev - 1);

      setTimeout(() => {
        isAnimating.current = false;
      }, 700);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (Math.abs(e.deltaY) < 30) return;

      if (e.deltaY > 0) {
        goNext();
      } else {
        goPrev();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const delta = touchStartY.current - endY;

      if (Math.abs(delta) < 50) return;

      if (delta > 0) {
        goNext();
      } else {
        goPrev();
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white dark:bg-black">
      {/* HERO */}
      <motion.div
        animate={{
          opacity: step === 0 ? 1 : 0,
          y: step === 0 ? 0 : -40,
        }}
        transition={{ duration: 0.4 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <h1 className="text-6xl font-bold">
          Synone Masterpieces
        </h1>

        <p className="mt-4 text-neutral-500">
          Scroll to explore.
        </p>
      </motion.div>

      {/* STACK VIEW */}
      <motion.div
        animate={{
          opacity: step === 1 ? 1 : 0,
          y: step === 1 ? 0 : 40,
        }}
        transition={{ duration: 0.4 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <h1 className="text-6xl font-bold">
          Deck Collected
        </h1>

        <p className="mt-4 text-neutral-500">
          Everything comes together.
        </p>
      </motion.div>

      {/* GRID VIEW */}
      <motion.div
        animate={{
          opacity: step === 2 ? 1 : 0,
          y: step === 2 ? 0 : 40,
        }}
        transition={{ duration: 0.4 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <h1 className="text-6xl font-bold">
          Curated Showroom
        </h1>

        <p className="mt-4 text-neutral-500">
          Explore the collection.
        </p>
      </motion.div>

      {/* CARD CANVAS */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {cardsData.map((card, index) => {
            let x = 0;
            let y = 0;
            let rotate = 0;
            let scale = 1;

            if (step === 0) {
              x = card.scattered.x;
              y = card.scattered.y;
              rotate = card.scattered.rot;
            }

            if (step === 1) {
              x = 0;
              y = 0;
              rotate = (index - 2.5) * 2;
              scale = 1.04;
            }

            if (step === 2) {
              x = card.grid.x;
              y = card.grid.y;
              rotate = 0;
              scale = 1;
            }

            return (
              <motion.div
                key={card.src}
                animate={{
                  x,
                  y,
                  rotate,
                  scale,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  zIndex: cardsData.length - index,
                }}
                className="absolute
                  w-40 h-56
                  md:w-48 md:h-64
                  rounded-2xl
                  overflow-hidden
                  shadow-2xl
                  bg-neutral-100
                  border border-neutral-200"
              >
                <Image
                  src={card.src}
                  alt="Portfolio item"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* STEP INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className={`h-2 rounded-full transition-all duration-300 ${
              step === item
                ? "w-10 bg-black dark:bg-white"
                : "w-2 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}