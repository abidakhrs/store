import Image from 'next/image';
import React from 'react';

interface StackedCardsProps {
  images: string[];
}

export default function StackedCards({ images }: StackedCardsProps) {
  // Pre-defined rotations to give that scattered, natural look
  const rotations = [
    'rotate-[-6deg] translate-y-2',
    'rotate-[4deg] -translate-y-1',
    'rotate-[-2deg] translate-y-3',
    'rotate-[5deg] translate-y-0',
    'rotate-[-3deg] -translate-y-2',
    'rotate-[3deg] translate-y-1',
  ];

  return (
    <div className="flex items-center justify-center p-12 overflow-hidden">
      {/* The container uses flex-row */}
      <div className="flex -space-x-8 md:-space-x-16 select-none">
        {images.map((src, index) => {
          // Loop through rotations if there are more images than styles
          const rotationClass = rotations[index % rotations.length];

          return (
            <div
              key={index}
              className={`
                relative 
                w-28 h-36 sm:w-48 sm:h-64 md:w-56 md:h-72
                rounded-2xl overflow-hidden shadow-xl border border-white/20
                hover:scale-110 hover:z-50 hover:rotate-0
                ${rotationClass}
                ${index > 1 ? 'hidden sm:block' : ''}
              `}
              // Dynamically increase z-index so cards stack cleanly from left to right
              style={{ zIndex: index + 1 }}
            >
              <Image
                  src={src}
                  alt={`Artwork stack item ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, 208px"
                  className="object-cover"
                  priority={index < 3} // Prioritizes loading the first 3 images above the fold
                />
            </div>
          );
        })}
      </div>
    </div>
  );
}