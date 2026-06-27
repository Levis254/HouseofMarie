'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Toast, { showToast } from '@/components/ui/Toast';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import Link from 'next/link';

function FragranceCatalogContent() {
  const searchParams = useSearchParams();
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist, isInWishlist } = useWishlist();

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Read query parameters on mount or change
  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam === 'wishlist') {
      setActiveFilter('wishlist');
    }

    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

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

  // Filter products based on olfactory family, search input, or wishlist state
  const filteredProducts = products.filter((product) => {
    // 1. Search Query Filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(q);
      const subtitleMatch = product.subtitle?.toLowerCase().includes(q);
      const storyMatch = product.story.toLowerCase().includes(q);
      const notesMatch = [
        ...product.notes.top,
        ...product.notes.heart,
        ...product.notes.base,
      ].some(note => note.toLowerCase().includes(q));

      if (!nameMatch && !subtitleMatch && !storyMatch && !notesMatch) {
        return false;
      }
    }

    // 2. Tab Filter
    if (activeFilter === 'all') return true;
    if (activeFilter === 'wishlist') return isInWishlist(product.id);
    
    // Normalize filter tags
    const family = product.olfactoryFamily.toLowerCase();
    if (activeFilter === 'floral' && family.includes('floral')) return true;
    if (activeFilter === 'woody' && family.includes('woody')) return true;
    if (activeFilter === 'fresh' && family.includes('fresh')) return true;
    if (activeFilter === 'oriental' && family.includes('oriental')) return true;

    return false;
  });

  const categories = [
    { id: 'all', name: 'All Scents' },
    { id: 'floral', name: 'Floral' },
    { id: 'woody', name: 'Woody' },
    { id: 'fresh', name: 'Fresh' },
    { id: 'oriental', name: 'Oriental' },
    { id: 'wishlist', name: 'Saved Scents' },
  ];

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Title */}
      <div className="text-center mb-16 space-y-4">
        <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold text-gold block">
          The Collections
        </span>
        <h1 className="font-serif text-4xl md:text-6xl tracking-wide uppercase font-light">
          Les Parfums
        </h1>
        <div className="w-12 h-[1px] bg-gold mx-auto my-6"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 border-b border-beige/40 pb-6 mb-12 text-[10px] tracking-[0.25em] uppercase font-medium">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`pb-2 relative transition-colors duration-300 hover:text-gold ${
              activeFilter === cat.id ? 'text-gold font-semibold' : 'text-charcoal/60'
            }`}
          >
            {cat.name}
            {activeFilter === cat.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"></span>
            )}
            {cat.id === 'wishlist' && wishlist.length > 0 && (
              <span className="ml-1 bg-gold text-charcoal text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Search status */}
      {searchQuery && (
        <div className="flex items-center justify-center gap-2 mb-8 text-xs text-charcoal/60">
          <span>Showing results for &ldquo;{searchQuery}&rdquo;</span>
          <button
            onClick={() => setSearchQuery('')}
            className="text-gold font-medium uppercase tracking-wider hover:text-charcoal transition-colors ml-2"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 space-y-6">
          <p className="font-serif text-lg tracking-widest text-charcoal/50 uppercase">
            {activeFilter === 'wishlist'
              ? 'You have not bookmarked any fragrances yet.'
              : 'No fragrances match your selection.'}
          </p>
          <button
            onClick={() => {
              setActiveFilter('all');
              setSearchQuery('');
            }}
            className="text-[10px] tracking-[0.25em] uppercase bg-charcoal text-ivory px-6 py-3 hover:bg-gold hover:text-charcoal transition-colors"
          >
            Show All Scents
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {filteredProducts.map((product) => {
            const isSaved = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between h-full bg-ivory border border-beige/35 p-6 md:p-8 hover:border-gold/40 transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(201,166,107,0.06)]"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full bg-beige/10 overflow-hidden border border-beige/25 mb-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s]"
                    />
                    
                    <button
                      onClick={() => handleWishlistToggle(product.id, product.name)}
                      className="absolute top-4 right-4 bg-ivory/80 backdrop-blur-sm p-2 rounded-full hover:bg-ivory hover:text-gold transition-colors shadow-sm focus:outline-none z-10"
                      aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <svg
                        className={`w-4.5 h-4.5 transition-colors ${
                          isSaved ? 'fill-gold text-gold' : 'text-charcoal/60 hover:text-gold'
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

                    <span className="absolute bottom-4 left-4 bg-charcoal/80 text-ivory text-[9px] uppercase tracking-[0.2em] px-2 py-1 backdrop-blur-sm">
                      {product.olfactoryFamily}
                    </span>
                  </div>

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
      )}
    </div>
  );
}

export default function FragranceCatalog() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="pt-40 min-h-screen text-center font-serif text-lg tracking-widest uppercase text-charcoal/60">
          Loading the collection...
        </div>
      }>
        <FragranceCatalogContent />
      </Suspense>
      <Footer />
      <Toast />
    </>
  );
}
