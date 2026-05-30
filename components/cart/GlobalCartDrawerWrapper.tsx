"use client";

import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

export default function GlobalCartDrawerWrapper() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <CartDrawer
      isOpen={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      items={cartItems}
      onUpdateQuantity={updateQuantity}
      onRemoveItem={removeFromCart}
    />
  );
}