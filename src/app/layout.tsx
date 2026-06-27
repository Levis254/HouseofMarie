import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { AuthProvider } from "@/context/AuthContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "HOUSE OF ROSEMARIE | Luxury Fragrance House",
  description: "Experience the luxury perfumes of House of Rosemarie. Crafted memories, bottled elegance. Explore our olfactory craftsmanship, fragrance journal, and signature scents.",
  keywords: "luxury perfume, fragrance house, House of Rosemarie, fine fragrance, niche perfume, craft perfumery",
  authors: [{ name: "House of Rosemarie" }],
  openGraph: {
    title: "HOUSE OF ROSEMARIE | Luxury Fragrance House",
    description: "Crafted Memories. Bottled Elegance. Discover our hand-crafted, premium fragrances.",
    url: "https://houseofrosemarie.com",
    siteName: "House of Rosemarie",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOUSE OF ROSEMARIE | Luxury Fragrance House",
    description: "Crafted Memories. Bottled Elegance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal selection:bg-beige selection:text-charcoal font-sans">
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
