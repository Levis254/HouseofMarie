'use client';

import React from 'react';

export default function Philosophy() {
  const pillars = [
    {
      number: 'I',
      title: 'Craftsmanship',
      subtitle: 'Le Savoir-Faire',
      desc: 'Our fragrances are hand-pour formulated in micro-batches in our laboratories. We use slow maceration cycles and raw botanical extraction to ensure absolute purity and deep oil concentration.'
    },
    {
      number: 'II',
      title: 'Elegance',
      subtitle: 'La Sobriété',
      desc: 'Refinement is found in restraint. From our minimal bottle designs and ivory packaging to the subtle, complex layering of notes, we believe true luxury is felt, never shouted.'
    },
    {
      number: 'III',
      title: 'Individuality',
      subtitle: 'L\'Expression',
      desc: 'Scent is the most intimate form of memory. We design complex compositions that react with the wearer’s natural chemistry, creating a unique, personalized scent signature.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-beige/10 border-y border-beige/30 px-4 md:px-8 text-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold text-gold block">
            Brand Foundations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light uppercase">
            Our Pillars
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto my-6"></div>
          <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light">
            The values that guide every formula we write, every bottle we hand-pour, and every package we wrap.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group text-center bg-ivory border border-beige/40 px-8 py-12 space-y-6 hover:border-gold/30 hover:-translate-y-1 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_36px_rgba(201,166,107,0.04)]"
            >
              {/* Roman Numeral */}
              <span className="font-serif text-5xl md:text-6xl text-gold/30 group-hover:text-gold/70 transition-colors duration-500 block font-light select-none">
                {pillar.number}
              </span>

              {/* Headings */}
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg tracking-wider text-charcoal font-light uppercase">
                  {pillar.title}
                </h3>
                <span className="text-[9px] tracking-widest text-gold uppercase font-light block">
                  {pillar.subtitle}
                </span>
              </div>

              {/* Divider */}
              <div className="w-8 h-[1px] bg-beige mx-auto group-hover:w-16 transition-all duration-500"></div>

              {/* Description */}
              <p className="text-xs text-charcoal/60 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
