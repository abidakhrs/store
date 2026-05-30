import Image from "next/image";

interface TestimonyCardProps {
  name: string;
  rating: number;
  quote: string;
  imageSrc: string;
}

export default function TestimonyCard({
  name,
  rating,
  quote,
  imageSrc,
}: TestimonyCardProps) {
  return (
    <div 
      className="group relative flex flex-col justify-between rounded-3xl p-6 bg-white transition-all duration-300 hover:-translate-y-1 
      /* Light Mode: Starts with a faint blue-gray border, shifts to a rich light blue and glow shadow */
      border border-sky-100/80 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/[0.06] 
      /* Dark Mode: Starts with a deep zinc border, shifts to a glowing cosmic cyan/blue edge */
      dark:bg-[#0d0d0d] dark:border-zinc-900 dark:hover:border-sky-500/50 dark:hover:shadow-none"
    >
      
      {/* Quote Content */}
      <div className="space-y-4">
        {/* Star Rating */}
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 text-amber-500 fill-amber-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* The Quote Text */}
        <p className="font-sans text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          “{quote}”
        </p>
      </div>

      {/* User Info Signature Area */}
      <div className="mt-8 flex items-center gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-900">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="40px"
          />
        </div>
        <div>
          <h4 className="font-sans text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
}