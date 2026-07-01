'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  const scrollToContent = () => {
    const featured = document.getElementById('collection');
    if (featured) {
      featured.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image with Zoom animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero_cinematic.png"
          alt="House of Marie Fragrance Campaign"
          className="w-full h-full object-cover object-center animate-subtle-zoom opacity-70"
        />
        {/* Editorial vignette gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/60 z-10"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center select-none text-ivory">
        {/* Micro-label */}
        <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-light text-gold mb-6 animate-fade-in">
          Haute Parfumerie Ohio
        </span>
        
        {/* Main Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl lg:text-9xl tracking-[0.15em] sm:tracking-[0.25em] font-light leading-none mb-6 animate-fade-in-up">
          HOUSE OF ROSEMARIE
        </h1>

        {/* Subtitle */}
        <p className="text-xs md:text-sm lg:text-base tracking-[0.3em] font-light uppercase opacity-95 max-w-lg leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Crafted Memories. Bottled Elegance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <Link
            href="/fragrances"
            className="w-48 text-center text-xs tracking-[0.25em] uppercase border border-ivory px-6 py-4 bg-ivory text-charcoal hover:bg-transparent hover:text-ivory transition-all duration-300 font-medium font-serif"
          >
            Discover
          </Link>
          <Link
            href="/story"
            className="w-48 text-center text-xs tracking-[0.25em] uppercase border border-ivory px-6 py-4 hover:bg-ivory hover:text-charcoal transition-all duration-300 font-medium font-serif"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity bg-transparent border-none outline-none"
        aria-label="Scroll to featured collection"
      >
        <span className="text-[8px] tracking-[0.3em] uppercase text-ivory font-light">Scroll</span>
        <svg className="w-4 h-4 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}
