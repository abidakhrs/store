"use client";

import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Cart Slider Panel */}
      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md transform bg-white shadow-2xl transition-all dark:bg-[#0a0a0a] border-l border-zinc-100 dark:border-zinc-900">
          <div className="flex h-full flex-col justify-between p-6">
            {/* Header section */}
            <div className="flex items-center justify-between border-b border-zinc-100 pb-5 dark:border-zinc-900">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-zinc-900 dark:text-white" />
                <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                  Your Cart (
                  {items.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-xl p-2 text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 dark:text-zinc-500 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Middle Product Scroll Stream */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 no-scrollbar">
              {items.length > 0 ? (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-2xl border border-zinc-100 p-3 bg-white dark:bg-[#0d0d0d] dark:border-zinc-900"
                  >
                    {/* Item Image */}
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Item Management Info */}
                    <div className="flex flex-1 flex-col justify-between py-0.5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="mt-0.5 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                            MYR {item.price.toLocaleString()}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-400 hover:text-red-500 dark:text-zinc-600 dark:hover:text-red-400 transition"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Quantity Select Blocks */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 rounded-xl border border-zinc-200/60 p-1 dark:border-zinc-800 bg-zinc-50/50 dark:bg-transparent">
                          <button
                            disabled={item.quantity <= 1}
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="rounded-lg p-1 text-zinc-500 hover:bg-zinc-100 disabled:opacity-30 dark:hover:bg-zinc-900 transition"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="rounded-lg p-1 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
                          MYR {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                /* Empty Cart State */
                <div className="flex h-full flex-col items-center justify-center text-center py-20 space-y-3">
                  <div className="rounded-full bg-zinc-50 p-4 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900">
                    <ShoppingBag className="h-6 w-6 text-zinc-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                      Your cart is empty
                    </p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-[200px]">
                      Add components from our catalog to get started.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Checkout Action Panel */}
            <div className="border-t border-zinc-100 pt-5 space-y-4 dark:border-zinc-900">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Estimated Subtotal
                </span>
                <span className="font-mono text-base font-bold text-zinc-900 dark:text-white">
                  MYR {subtotal.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
                Shipping options and exact legal cross-border processing
                configurations calculated dynamically during gateway token
                handling.
              </p>
              <div className="space-y-2 pt-2">
                <button
                  disabled={items.length === 0}
                  className="w-full rounded-xl bg-black py-3.5 text-center text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-40 disabled:hover:bg-black dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition"
                >
                  <Link href="/checkout" className="block w-full">
                    Proceed to Checkout
                  </Link>
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-center text-xs text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white font-medium py-1 transition"
                >
                  Continue Browsing Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
