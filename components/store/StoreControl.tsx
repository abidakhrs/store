"use client";

import { Search, ChevronDown } from "lucide-react";

interface StoreControlsProps {
  search: string;
  setSearch: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
}

const CATEGORIES = ["All", "Headphones", "Watches", "Shoes"];

export default function StoreControls({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}: StoreControlsProps) {
  return (
    <div className="space-y-6 w-full">
      {/* Top Row: Search and Sort */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Bar */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-zinc-200/80 bg-white py-2.5 pl-11 pr-4 text-sm text-zinc-900 outline-none transition focus:border-sky-400 dark:border-zinc-800 dark:bg-[#0d0d0d] dark:text-white dark:focus:border-sky-500/50"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative inline-block w-full sm:w-48">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full appearance-none rounded-2xl border border-zinc-200/80 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-zinc-700 outline-none transition focus:border-sky-400 dark:border-zinc-800 dark:bg-[#0d0d0d] dark:text-zinc-300 dark:focus:border-sky-500/50"
          >
            <option value="featured">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none text-zinc-400" />
        </div>
      </div>

      {/* Bottom Row: Filter Chips */}
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 no-scrollbar">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-xs font-medium border transition-all duration-200 ${
                isActive
                  ? "bg-black border-black text-white dark:bg-white dark:border-white dark:text-black"
                  : "bg-zinc-50 border-zinc-200/60 text-zinc-600 hover:border-zinc-300 dark:bg-[#0d0d0d] dark:border-zinc-800/80 dark:text-zinc-400 dark:hover:border-zinc-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}