"use client";

import { useState } from "react";
import StoreControls from "@/components/store/StoreControl";
import ProductCard from "@/components/home/ProductCard";
import Pagination from "@/components/store/Pagination";

// Mock Store Inventory Array (Now with custom ratings assigned)
const MOCK_INVENTORY = [
  { id: "1", name: "Headphone One", price: 180, category: "Headphones", imageSrc: "/product-1.jpg", rating: 5 },
  { id: "2", name: "Headphone Two", price: 340, category: "Headphones", imageSrc: "/product-2.jpg", rating: 4 },
  { id: "3", name: "Watch One", price: 95, category: "Watches", imageSrc: "/product-3.jpg", rating: 4 },
  { id: "4", name: "Watch Two", price: 210, category: "Watches", imageSrc: "/product-4.jpg", rating: 5 },
  { id: "5", name: "Shoe One", price: 125, category: "Shoes", imageSrc: "/product-5.jpg", rating: 4 },
  { id: "6", name: "Shoe Two", price: 65, category: "Shoes", imageSrc: "/product-6.jpg", rating: 3 },
  { id: "7", name: "Shoe Three", price: 450, category: "Shoes", imageSrc: "/product-7.jpg", rating: 5 },
  { id: "8", name: "Shoe Four", price: 520, category: "Shoes", imageSrc: "/product-8.jpg", rating: 5 },
];

const ITEMS_PER_PAGE = 12;

export default function StorePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Process Filtering (Search + Category Chips)
  const filteredProducts = MOCK_INVENTORY.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 2. Process Sorting (Dropdown selection rules)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "low-high") return a.price - b.price;
    if (sortBy === "high-low") return b.price - a.price;
    return 0; // Default featured state
  });

  // 3. Process Pagination Splice
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page helper when filters execute
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-white px-6 pt-36 pb-24 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl w-full space-y-10">
        
        {/* Simple Page Title Header */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Catalog
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Discover our wide range of high-quality products.
          </p>
        </div>

        {/* Modular Filter Deck */}
        <StoreControls
          search={search}
          setSearch={handleSearchChange}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* 4-Column Product Matrix */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
            {paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageSrc={product.imageSrc}
                rating={product.rating} // <-- Passed the new rating prop here
              />
            ))}
          </div>
        ) : (
          /* Empty Search Fallback */
          <div className="py-24 text-center rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">No products matching those parameters were found.</p>
          </div>
        )}

        {/* Pagination Stack Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

      </div>
    </main>
  );
}