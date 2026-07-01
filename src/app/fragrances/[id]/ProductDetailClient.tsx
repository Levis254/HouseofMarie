'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Toast, { showToast } from '@/components/ui/Toast';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function ProductDetailClient({ id }: { id: string }) {
  const product = products.find((p) => p.id === id);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Accordion state
  const [openSection, setOpenSection] = useState<string | null>('details');
  const [selectedSize, setSelectedSize] = useState('100ml');

  if (!product) {
    return (
      <>
        <Header />
        <div className="pt-40 min-h-screen text-center px-4">
          <h2 className="font-serif text-2xl tracking-widest text-charcoal uppercase mb-6">Fragrance Not Found</h2>
          <p className="text-xs text-charcoal/60 uppercase tracking-widest mb-8">The scent you are seeking does not exist in the House registries.</p>
          <Link
            href="/fragrances"
            className="text-[10px] tracking-[0.3em] uppercase bg-charcoal text-ivory px-6 py-4 hover:bg-gold hover:text-charcoal transition-colors font-serif"
          >
            Return to Collections
          </Link>
        </div>
        <Footer />
        <Toast />
      </>
    );
  }

  const isSaved = isInWishlist(product.id);

  const handleAddToBag = () => {
    addToCart(product, 1);
    showToast(`${product.name} added to your shopping bag.`);
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product.id);
    showToast(
      !isSaved
        ? `${product.name} added to your wishlist.`
        : `${product.name} removed from your wishlist.`
    );
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sizes = [
    { id: '50ml', name: '50 ml', price: Math.round(product.price * 0.65), label: 'Boutique' },
    { id: '100ml', name: '100 ml', price: product.price, label: 'Signature' },
    { id: 'travel', name: '10 ml', price: 45, label: 'Travel Spray' }
  ];

  const currentPrice = sizes.find(s => s.id === selectedSize)?.price || product.price;

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
        {/* Back Link */}
        <Link
          href="/fragrances"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-charcoal/50 hover:text-gold transition-colors mb-12 select-none"
        >
          ← Back to Collections
        </Link>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Image Display */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] w-full bg-beige/10 border border-beige/35 p-3 shadow-xl group">
              <div className="absolute inset-0 bg-charcoal/5 pointer-events-none z-10"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-[2.5s] group-hover:scale-105"
              />
              <div className="absolute inset-6 border border-ivory/20 pointer-events-none z-20"></div>
            </div>
            <p className="text-center text-[9px] tracking-[0.3em] uppercase text-charcoal/40 mt-6 select-none">
              Complimentary House Gift Box Included
            </p>
          </div>

          {/* Right Column: Narrative & Configuration */}
          <div className="flex-1 space-y-8 select-none">
            {/* Headers */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.4em] uppercase font-semibold text-gold block">
                {product.olfactoryFamily}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl tracking-wide uppercase font-light text-charcoal leading-tight">
                {product.name}
              </h1>
              {product.subtitle && (
                <p className="font-serif text-lg text-gold/80 italic tracking-wider">
                  {product.subtitle}
                </p>
              )}
              <div className="pt-2 text-xl font-light text-charcoal">
                ${currentPrice}
              </div>
            </div>

            <div className="w-12 h-[1px] bg-gold"></div>

            {/* Short Narrative */}
            <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed font-light font-serif italic text-lg md:text-xl">
              &ldquo;{product.story}&rdquo;
            </p>

            <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Note Pyramid Display */}
            <div className="border border-beige/40 bg-beige/5 p-6 space-y-4">
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gold block border-b border-beige/30 pb-2">
                Olfactory Pyramid
              </span>
              
              <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-6 text-xs font-light">
                <div className="space-y-1 flex flex-col sm:block">
                  <span className="text-[9px] tracking-widest uppercase text-charcoal/50 block font-medium">Top Notes</span>
                  <ul className="flex flex-wrap gap-x-1 text-charcoal/80 sm:block sm:space-y-0.5">
                    {product.notes.top.map((note, i) => (
                      <li key={i} className="inline-block sm:block">
                        {note}{i < product.notes.top.length - 1 && <span className="sm:hidden">,</span>}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1 flex flex-col sm:block">
                  <span className="text-[9px] tracking-widest uppercase text-charcoal/50 block font-medium">Heart Notes</span>
                  <ul className="flex flex-wrap gap-x-1 text-charcoal/80 sm:block sm:space-y-0.5">
                    {product.notes.heart.map((note, i) => (
                      <li key={i} className="inline-block sm:block">
                        {note}{i < product.notes.heart.length - 1 && <span className="sm:hidden">,</span>}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1 flex flex-col sm:block">
                  <span className="text-[9px] tracking-widest uppercase text-charcoal/50 block font-medium">Base Notes</span>
                  <ul className="flex flex-wrap gap-x-1 text-charcoal/80 sm:block sm:space-y-0.5">
                    {product.notes.base.map((note, i) => (
                      <li key={i} className="inline-block sm:block">
                        {note}{i < product.notes.base.length - 1 && <span className="sm:hidden">,</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Size Configurations */}
            <div className="space-y-3">
              <span className="text-[9px] tracking-widest uppercase text-charcoal/50 block">Select Volume</span>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {sizes.map((sz) => (
                  <button
                    key={sz.id}
                    onClick={() => setSelectedSize(sz.id)}
                    className={`border px-2 sm:px-4 py-3 text-center transition-all duration-300 ${
                      selectedSize === sz.id
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-beige hover:border-gold text-charcoal/80'
                    }`}
                  >
                    <span className="block text-xs uppercase tracking-widest font-serif">{sz.name}</span>
                    <span className="block text-[8px] tracking-wider uppercase text-gold/80 mt-0.5">{sz.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleAddToBag}
                className="flex-1 text-center text-xs tracking-[0.25em] uppercase border border-transparent bg-charcoal text-ivory py-4 hover:bg-gold hover:text-charcoal transition-all duration-300 font-serif font-medium"
              >
                Add to Shopping Bag
              </button>
              <button
                onClick={handleWishlistToggle}
                className="px-6 text-center text-xs tracking-[0.25em] uppercase border border-beige hover:border-red text-charcoal py-4 transition-all duration-300 font-serif flex items-center justify-center gap-2"
                aria-label="Add to wishlist"
              >
                <svg
                  className={`w-4 h-4 transition-colors ${isSaved ? 'fill-red text-red' : 'text-charcoal/60 hover:text-red'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {isSaved ? 'Saved' : 'Save'}
              </button>
            </div>

            {/* Accordion Panels (Disclosures) */}
            <div className="border-t border-beige/40 pt-4 space-y-4">
              {/* Details & Sourcing */}
              <div className="border-b border-beige/20 pb-4">
                <button
                  onClick={() => toggleSection('details')}
                  className="w-full flex items-center justify-between font-serif text-xs tracking-wider uppercase text-charcoal hover:text-gold transition-colors text-left"
                >
                  <span>Details & Botanical Sourcing</span>
                  <span>{openSection === 'details' ? '−' : '+'}</span>
                </button>
                {openSection === 'details' && (
                  <p className="text-[11px] text-charcoal/60 leading-relaxed font-light mt-3 animate-fade-in">
                    100% vegan, cruelty-free formulation crafted without phthalates, parabens, or synthetic colorants. Concentrated at 22% oil volume (Extrait de Parfum) for heavy silage and a minimum of 10 hours longevity. Hand-poured with organically-sourced grain alcohols.
                  </p>
                )}
              </div>

              {/* Shipping & Boutique Services */}
              <div className="border-b border-beige/20 pb-4">
                <button
                  onClick={() => toggleSection('shipping')}
                  className="w-full flex items-center justify-between font-serif text-xs tracking-wider uppercase text-charcoal hover:text-gold transition-colors text-left"
                >
                  <span>Boutique Shipping & Returns</span>
                  <span>{openSection === 'shipping' ? '−' : '+'}</span>
                </button>
                {openSection === 'shipping' && (
                  <p className="text-[11px] text-charcoal/60 leading-relaxed font-light mt-3 animate-fade-in">
                    Every order is complimentary packaged in our signature textured ivory gift boxes, bound with cotton ribbon. We offer complimentary standard shipping. Returns are accepted within 30 days on unopened items. Sample vials are included with every full-size bottle to test the scent prior to breaking the seal.
                  </p>
                )}
              </div>

              {/* Olfactory Consultations */}
              <div className="border-b border-beige/20 pb-4">
                <button
                  onClick={() => toggleSection('consult')}
                  className="w-full flex items-center justify-between font-serif text-xs tracking-wider uppercase text-charcoal hover:text-gold transition-colors text-left"
                >
                  <span>Private Consultation</span>
                  <span>{openSection === 'consult' ? '−' : '+'}</span>
                </button>
                {openSection === 'consult' && (
                  <p className="text-[11px] text-charcoal/60 leading-relaxed font-light mt-3 animate-fade-in">
                    Explore the House collection with one of our master olfactory guides. We offer private virtual sessions or in-boutique consultations to help you trace and define your custom scent signature. Select the Concierge form on the homepage to book.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toast />
    </>
  );
}
