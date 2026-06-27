'use client';

import React from 'react';

export default function Craftsmanship() {
  const steps = [
    {
      title: '01. Raw Sourcing',
      desc: 'We scour remote corners of the globe to source exceptional raw botanicals—from rare Damascus Rose in Turkey to wild Bergamot in Calabria. Each material is harvested by hand at the pinnacle of its olfactory potency.'
    },
    {
      title: '02. Slow Maceration',
      desc: 'True luxury cannot be rushed. Our fragrances are aged for six months in temperature-controlled chambers to allow the natural oils to synthesize, achieving maximum depth, projection, and wear time.'
    },
    {
      title: '03. Artisanal Glass',
      desc: 'Each bottle is a sculpture, custom-blown by French glassmakers. The weighted bottom and hand-polished collar are designed to feel substantial in the palm, reflecting the luxury of the liquid inside.'
    },
    {
      title: '04. Hand-Sealed Ribbon',
      desc: 'Before leaving our workshop, every bottle is personally hand-labeled, inspect-tested, and nestled in textured ivory boxes tied with a natural cotton ribbon—a signature of house refinement.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-ivory text-charcoal px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Detail steps list */}
        <div className="flex-1 w-full space-y-12 order-2 lg:order-2">
          <div className="space-y-3">
            <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold text-gold block">
              The Process
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light text-charcoal uppercase leading-tight">
              An Honor to Detail
            </h2>
          </div>
          <div className="w-12 h-[1px] bg-gold mb-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-3 select-none">
                <h3 className="font-serif text-sm tracking-widest text-charcoal/95 uppercase font-medium">
                  {step.title}
                </h3>
                <p className="text-xs text-charcoal/60 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Large Craftsmanship Image */}
        <div className="flex-1 w-full order-1 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-lg mx-auto bg-beige/10 overflow-hidden border border-beige/35 p-2 shadow-xl group">
            <div className="absolute inset-0 bg-charcoal/5 z-10 pointer-events-none"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/craftsmanship_lifestyle.png"
              alt="Artisan perfumery blending and maceration"
              className="w-full h-full object-cover object-center transition-transform duration-[2.5s] group-hover:scale-105"
            />
            {/* Symmetrical border frames */}
            <div className="absolute inset-4 border border-ivory/20 pointer-events-none z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
