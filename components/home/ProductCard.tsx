import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
  rating?: number; // Optional property (e.g., 1 to 5)
}

export default function ProductCard({
  id,
  name,
  price,
  imageSrc,
  rating,
}: ProductCardProps) {
  const { addToCart } = useCart(); // Hook into add execution framework
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-200/80 hover:shadow-xl hover:shadow-zinc-200/30 dark:border-zinc-900 dark:bg-[#0d0d0d] dark:hover:border-zinc-800/80 dark:hover:shadow-none">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 25vw"
        />

        {/* Hover Quick Add Overlay */}
        <div className="absolute inset-0 flex items-end justify-center bg-black/5 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-black/20">
          <button
            onClick={() => addToCart({ id, name, price, imageSrc })} // <-- Instant layout injection
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-md transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] dark:bg-zinc-900 dark:text-white"
          >
            <ShoppingCart className="h-4 w-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col pt-4 pb-2 px-1">
        <Link href={`/store/${id}`} className="focus:outline-none">
          <h3 className="font-sans text-lg font-semibold tracking-tight text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400">
            {name}
          </h3>
        </Link>

        {/* Optional Star Rating (Only renders if rating parameter exists) */}
        {rating !== undefined && rating > 0 && (
          <div className="mt-1.5 flex gap-0.5">
            {[...Array(Math.min(5, Math.max(1, Math.floor(rating))))].map(
              (_, i) => (
                <svg
                  key={i}
                  className="h-3.5 w-3.5 text-amber-500 fill-amber-500"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ),
            )}
          </div>
        )}

        <p className="mt-1 font-mono text-base font-medium text-zinc-500 dark:text-zinc-400">
          MYR {price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
