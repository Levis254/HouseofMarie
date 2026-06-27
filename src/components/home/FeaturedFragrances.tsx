'use client';

import React from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { showToast } from '../ui/Toast';

export default function FeaturedFragrances() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToBag = (product: typeof products[0]) => {
    addToCart(product, 1);
    showToast(`${product.name} added to your shopping bag.`);
  };

  const handleWishlistToggle = (productId: string, productName: string) => {
    toggleWishlist(productId);
    const added = !isInWishlist(productId);
    showToast(
      added
        ? `${productName} added to your wishlist.`
        : `${productName} removed from your wishlist.`
    );
  };

  return (
    <section id="collection" className="py-24 md:py-32 bg-ivory text-charcoal px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4 select-none">
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold text-gold block">
            Signature Selection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-[0.1em] font-light text-charcoal uppercase">
            The Olfactory Wardrobe
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto my-6"></div>
          <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light">
            Three signature formulations designed to transcend scent and become chapters of your personal story.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product) => {
            const isSaved = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between h-full bg-ivory border border-beige/35 p-6 md:p-8 hover:border-gold/40 transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(201,166,107,0.06)]"
              >
                {/* Image and Header */}
                <div>
                  <div className="relative aspect-[3/4] w-full bg-beige/10 overflow-hidden border border-beige/25 mb-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s]"
                    />
                    
                    {/* Wishlist Toggle Button */}
                    <button
                      onClick={() => handleWishlistToggle(product.id, product.name)}
                      className="absolute top-4 right-4 bg-ivory/80 backdrop-blur-sm p-2 rounded-full hover:bg-ivory hover:text-gold transition-colors shadow-sm focus:outline-none z-10"
                      aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <svg
                        className={`w-4.5 h-4.5 transition-colors ${
                          isSaved ? 'fill-red text-red' : 'text-charcoal/60 hover:text-red'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>

                    {/* Scent family tag */}
                    <span className="absolute bottom-4 left-4 bg-charcoal/80 text-ivory text-[9px] uppercase tracking-[0.2em] px-2 py-1 backdrop-blur-sm select-none">
                      {product.olfactoryFamily}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline">
                      <div>
                        <h3 className="font-serif text-lg md:text-xl tracking-wider font-light text-charcoal">
                          {product.name}
                        </h3>
                        <p className="text-[10px] tracking-widest text-gold uppercase mt-0.5">
                          {product.subtitle}
                        </p>
                      </div>
                      <span className="text-sm font-semibold tracking-wider text-charcoal">
                        ${product.price}
                      </span>
                    </div>

                    <p className="text-xs text-charcoal/60 leading-relaxed font-light">
                      {product.story}
                    </p>

                    {/* Key Notes */}
                    <div className="pt-2">
                      <span className="text-[9px] uppercase tracking-widest text-charcoal/50 block mb-1">
                        Core Notes
                      </span>
                      <p className="text-xs text-charcoal/85 tracking-wide font-light">
                        {product.notes.top[0]} • {product.notes.heart[0]} • {product.notes.base[0]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-beige/20">
                  <Link
                    href={`/fragrances/${product.id}`}
                    className="text-center text-[10px] tracking-[0.25em] uppercase border border-charcoal py-3 hover:bg-charcoal hover:text-ivory transition-all duration-300 font-serif font-medium"
                  >
                    Learn More
                  </Link>
                  <button
                    onClick={() => handleAddToBag(product)}
                    className="text-center text-[10px] tracking-[0.25em] uppercase border border-transparent bg-charcoal text-ivory py-3 hover:bg-gold hover:text-charcoal transition-all duration-300 font-serif font-medium"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
