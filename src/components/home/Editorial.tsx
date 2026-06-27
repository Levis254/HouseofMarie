'use client';

import React from 'react';
import Link from 'next/link';

export default function Editorial() {
  return (
    <section className="py-24 md:py-32 bg-beige/10 border-y border-beige/30 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        {/* Story Text Column */}
        <div className="flex-1 space-y-8 select-none order-2 md:order-1">
          <div className="space-y-3">
            <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold text-gold block">
              The Maison Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light text-charcoal uppercase leading-tight">
              Essence of Being
            </h2>
          </div>
          <div className="w-12 h-[1px] bg-gold"></div>
          
          <div className="space-y-6 text-sm text-charcoal/80 font-light leading-relaxed max-w-xl">
            <p className="font-serif text-lg md:text-xl italic text-charcoal/90 leading-relaxed font-normal">
              “House of Rosemarie believes fragrance is more than scent. It is identity, memory, and personal expression.”
            </p>
            <p>
              A signature fragrance is a silent communicator, drawing the map of where you have been and the memories you have woven. Every blend is hand-poured in our ateliers to linger delicately on the skin, forming a singular bond with your natural essence.
            </p>
            <p>
              We craft perfumes for the discerning individual—those who look beyond standard commercial scents to find a personal statement that is deeply authentic, crafted, and eternal.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/story"
              className="inline-block text-[10px] tracking-[0.3em] uppercase border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors font-medium"
            >
              Explore Our History
            </Link>
          </div>
        </div>

        {/* Artistic Image Column */}
        <div className="flex-1 relative order-1 md:order-2 w-full">
          <div className="relative aspect-[4/5] max-w-md mx-auto border border-beige/40 p-4 bg-ivory shadow-[0_12px_48px_rgba(0,0,0,0.03)] group">
            <div className="absolute inset-0 border border-gold/10 pointer-events-none m-6 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="relative w-full h-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/editorial_house.png"
                alt="House of Marie Editorial Campaign"
                className="w-full h-full object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            {/* Subtle floating branding watermark */}
            <div className="absolute bottom-8 right-8 bg-ivory/80 backdrop-blur-sm px-4 py-2 border border-beige/30 text-[8px] tracking-[0.4em] uppercase font-light text-charcoal select-none">
              HOM Atelier
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
