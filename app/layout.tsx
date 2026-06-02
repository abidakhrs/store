import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import GlobalCartDrawerWrapper from "@/components/cart/GlobalCartDrawerWrapper";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synone Ecosystem",
  description: "High-fidelity production components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <CartProvider>
            {/* Global Navbar */}
            <Navbar />

            {children}

            {/* Global Footer */}
            <Footer />

            {/* The Global Cart Drawer UI element */}
            <GlobalCartDrawerWrapper />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}