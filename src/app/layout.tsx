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
  title: "HOUSE OF MARIE | Luxury Fragrance House",
  description: "Experience the luxury perfumes of House of Marie. Crafted memories, bottled elegance. Explore our olfactory craftsmanship, fragrance journal, and signature scents.",
  keywords: "luxury perfume, fragrance house, House of Marie, fine fragrance, niche perfume, craft perfumery",
  authors: [{ name: "House of Marie" }],
  openGraph: {
    title: "HOUSE OF MARIE | Luxury Fragrance House",
    description: "Crafted Memories. Bottled Elegance. Discover our hand-crafted, premium fragrances.",
    url: "https://houseofmarie.com",
    siteName: "House of Marie",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOUSE OF MARIE | Luxury Fragrance House",
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
