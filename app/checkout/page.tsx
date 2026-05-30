"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, ShieldCheck, Lock, CreditCard, CheckCircle2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartItems, cartCount } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Calculate exact pricing totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = 0; 
  const finalTotal = subtotal + shippingCost;

  // Handles simulating the gateway communication handshake
  const handlePaymentSubmit = () => {
    setIsProcessing(true);
    
    // Simulate a 2-second authorization delay with the bank network
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessModal(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-white px-6 pt-36 pb-24 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Back navigation */}
        <Link 
          href="/store" 
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to Catalog
        </Link>

        {/* 2-Column Responsive Layout Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Checkout Forms */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Customer Identity */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white dark:bg-white dark:text-black">1</span>
                <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">Customer Contact</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address for Digital Receipts" 
                  className="w-full text-sm rounded-xl border border-zinc-200/80 bg-transparent px-4 py-3 text-zinc-900 outline-none transition focus:border-sky-400 dark:border-zinc-800 dark:text-white dark:focus:border-sky-500/50"
                />
              </div>
            </div>

            {/* Step 2: Shipping Logistics */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white dark:bg-white dark:text-black">2</span>
                <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">Shipping Parameters</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input type="text" placeholder="First Name" className="w-full text-sm rounded-xl border border-zinc-200/80 bg-transparent px-4 py-3 outline-none transition focus:border-sky-400 dark:border-zinc-800 dark:text-white dark:focus:border-sky-500/50" />
                <input type="text" placeholder="Last Name" className="w-full text-sm rounded-xl border border-zinc-200/80 bg-transparent px-4 py-3 outline-none transition focus:border-sky-400 dark:border-zinc-800 dark:text-white dark:focus:border-sky-500/50" />
                <div className="sm:col-span-2">
                  <input type="text" placeholder="Street Address, Suite, or Unit Details" className="w-full text-sm rounded-xl border border-zinc-200/80 bg-transparent px-4 py-3 outline-none transition focus:border-sky-400 dark:border-zinc-800 dark:text-white dark:focus:border-sky-500/50" />
                </div>
                <input type="text" placeholder="City" className="w-full text-sm rounded-xl border border-zinc-200/80 bg-transparent px-4 py-3 outline-none transition focus:border-sky-400 dark:border-zinc-800 dark:text-white dark:focus:border-sky-500/50" />
                <input type="text" placeholder="Postal Code" className="w-full text-sm rounded-xl border border-zinc-200/80 bg-transparent px-4 py-3 outline-none transition focus:border-sky-400 dark:border-zinc-800 dark:text-white dark:focus:border-sky-500/50" />
                <div className="sm:col-span-2">
                  <input type="tel" placeholder="Contact Phone Number" className="w-full text-sm rounded-xl border border-zinc-200/80 bg-transparent px-4 py-3 outline-none transition focus:border-sky-400 dark:border-zinc-800 dark:text-white dark:focus:border-sky-500/50" />
                </div>
              </div>
            </div>

            {/* Step 3: Secure Payment Portal */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white dark:bg-white dark:text-black">3</span>
                <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">Secure Transaction</h2>
              </div>
              
              <div className="rounded-2xl border border-zinc-200/80 p-5 bg-zinc-50/50 dark:border-zinc-800 dark:bg-[#0d0d0d] space-y-4">
                <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
                  <span className="flex items-center gap-1.5 font-medium"><Lock className="h-3.5 w-3.5 text-blue-500" /> End-to-End Encrypted Tunnel</span>
                  <span className="font-mono">PCI-DSS Compliant</span>
                </div>
                
                <div className="border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl p-8 text-center bg-white dark:bg-[#0a0a0a]">
                  <CreditCard className="h-6 w-6 text-zinc-400 mx-auto mb-2" />
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Gateway Interface Integration Node</p>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 max-w-xs mx-auto mt-0.5">Embed Stripe Elements or custom payment provider handlers here later.</p>
                </div>
              </div>
            </div>

            {/* Main Interactive Checkout Button */}
            <button 
              disabled={cartItems.length === 0 || isProcessing}
              onClick={handlePaymentSubmit}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-black py-4 font-semibold text-sm text-white transition hover:bg-zinc-800 disabled:opacity-40 disabled:hover:bg-black dark:bg-white dark:text-black dark:hover:bg-zinc-200 relative overflow-hidden"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white dark:text-black" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <circle className="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="30 60" strokeDashoffset="10" />
                  </svg>
                  <span>Authorizing Funds...</span>
                </div>
              ) : (
                <>
                  <ShieldCheck className="h-4 w-4" /> 
                  <span>Authorize Secure Payment (MYR {finalTotal.toLocaleString()})</span>
                </>
              )}
            </button>
          </div>

          {/* RIGHT COLUMN: Sticky Order Summary */}
          <div className="lg:col-span-5 w-full bg-zinc-50/50 dark:bg-[#0d0d0d] rounded-3xl p-6 border border-zinc-100 dark:border-zinc-900 lg:sticky lg:top-32 space-y-6">
            <h2 className="text-base font-bold tracking-tight text-zinc-900 dark:text-white">Order Inventory Breakdown ({cartCount})</h2>
            
            <div className="divide-y divide-zinc-100 dark:divide-zinc-900 max-h-80 overflow-y-auto no-scrollbar pr-1">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                    <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/40 dark:border-zinc-800">
                      <Image src={item.imageSrc} alt={item.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white truncate">{item.name}</h4>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono mt-0.5">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-300">
                      MYR {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-zinc-400 dark:text-zinc-500 py-4 text-center">No active line item quantities detected.</p>
              )}
            </div>

            <div className="border-t border-zinc-100 dark:divide-zinc-900 pt-4 space-y-2.5 text-xs">
              <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                <span>Subtotal</span>
                <span className="font-mono">MYR {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                <span>Premium Courier Distribution</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Complimentary</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-zinc-900 dark:text-white pt-2 border-t border-zinc-100 dark:border-zinc-900">
                <span>Total Due</span>
                <span className="font-mono text-base">MYR {finalTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= SUCCESS MODAL OVERLAY ================= */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden animate-in fade-in duration-200">
          {/* Blur Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-8 text-center shadow-2xl transition-all dark:bg-[#0d0d0d] border border-zinc-100 dark:border-zinc-900 animate-in zoom-in-95 duration-300">
            
            {/* Success Check Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 mb-5">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            {/* Header Text */}
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Payment Authorized Successfully
            </h3>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto">
              Your transaction has cleared processing securely. Your modular fulfillment token is <span className="font-mono font-bold text-zinc-700 dark:text-zinc-300">#SYN-84920</span>.
            </p>

            {/* Quick Summary Snapshot Card */}
            <div className="my-6 rounded-2xl bg-zinc-50 dark:bg-[#0a0a0a] p-4 border border-zinc-100 dark:border-zinc-900 text-left space-y-2">
              <div className="flex justify-between text-[11px] font-medium text-zinc-400">
                <span>TOTAL CHARGED</span>
                <span>DISPATCH STATUS</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-mono font-bold text-sm text-zinc-900 dark:text-white">MYR {finalTotal.toLocaleString()}</span>
                <span className="text-[10px] bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">Processing</span>
              </div>
            </div>

            {/* Navigation Flow Action Button */}
            <Link
              href="/store"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-black py-3.5 font-semibold text-sm text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              <ShoppingBag className="h-4 w-4" />
              Continue Custom Browsing
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}