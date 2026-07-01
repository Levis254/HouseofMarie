'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Toast from '@/components/ui/Toast';

export default function StoryPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 text-charcoal bg-ivory">
        {/* Editorial Title */}
        <div className="max-w-4xl mx-auto text-center px-4 mb-20 space-y-6">
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold text-gold block animate-fade-in">
            Heritage & Vision
          </span>
          <h1 className="font-serif text-4xl md:text-6xl tracking-wide uppercase font-light leading-tight animate-fade-in-up">
            The Legacy of Rosemarie
          </h1>
          <div className="w-12 h-[1px] bg-gold mx-auto my-6"></div>
          <p className="font-serif text-lg md:text-xl italic text-charcoal/80 leading-relaxed max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            &ldquo;We do not manufacture scent. We bottleneck the ethereal chapters of human memory.&rdquo;
          </p>
        </div>

        {/* Narrative Section 1: Symmetrical text and image */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-6 select-none order-2 md:order-1">
            <span className="text-[9px] tracking-widest text-gold uppercase font-light block">
              Chapter I
            </span>
            <h2 className="font-serif text-2xl md:text-3xl tracking-wider uppercase font-light text-charcoal">
              Ohio Roots, Botanical Artistry
            </h2>
            <div className="w-8 h-[1px] bg-beige"></div>
            <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light">
              House of RoseMarie was founded by Jumaane Dale, conceived in Ohio as an everlasting tribute to his mother, RoseMarie. Driven by a desire to escape the industrialization of modern commercial perfumes and capture the true essence of maternal elegance, Jumaane set out to source the finest natural ingredients from sustainable flower fields and generational cultivators across the globe.
            </p>
            <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light">
              We established exclusive partnerships with boutique farms, ensuring that our harvests of Jasmine, Centifolia Rose, and Neroli are grown organically and picked by hand under the early morning dew to retain their purest olfactory essence.
            </p>
          </div>
          <div className="flex-1 w-full order-1 md:order-2">
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto bg-beige/10 border border-beige/35 p-2 shadow-lg overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/editorial_house.png"
                alt="House of Rosemarie Paris Flatlay"
                className="w-full h-full object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-4 border border-ivory/20 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Narrative Section 2: Flip layout */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="flex-1 w-full">
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto bg-beige/10 border border-beige/35 p-2 shadow-lg overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/craftsmanship_lifestyle.png"
                alt="Botanical perfume oil maceration"
                className="w-full h-full object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-4 border border-ivory/20 pointer-events-none"></div>
            </div>
          </div>
          <div className="flex-1 space-y-6 select-none">
            <span className="text-[9px] tracking-widest text-gold uppercase font-light block">
              Chapter II
            </span>
            <h2 className="font-serif text-2xl md:text-3xl tracking-wider uppercase font-light text-charcoal">
              The Alchemy of Maceration
            </h2>
            <div className="w-8 h-[1px] bg-beige"></div>
            <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light">
              Unlike industrial scents that are synthesized in hours, every House of Rosemarie formula undergoes a minimum of six months maturation. This slow maceration period allows our natural raw flower oils to fully dissolve and bond with our organic wheat alcohols, deepening the molecular fragrance and locking in a rich, multi-tiered scent trail.
            </p>
            <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light">
              In our laboratories, our perfumers work with glass flasks, brass scales, and natural oak barrels. The craft is rigorous, demanding absolute concentration and an uncompromising focus on the minute details that separate a simple scent from an unforgettable impression.
            </p>
          </div>
        </div>

        {/* Narrative Section 3: Large center quote block */}
        <div className="bg-beige/10 border-y border-beige/30 py-20 px-4 md:px-8 text-center mb-24 select-none">
          <div className="max-w-3xl mx-auto space-y-6">
            <svg className="w-10 h-10 text-gold/30 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.944 2c-3.089 1.116-4.944 3.708-4.944 5.725h4v9h-10v-5zm-13 0c0-5.141 3.892-10.519 10-11.725l.944 2c-3.089 1.116-4.944 3.708-4.944 5.725h4v9h-10v-5z" />
            </svg>
            <p className="font-serif text-xl md:text-3xl font-light leading-relaxed text-charcoal">
              &ldquo;Fragrance is the most intense form of memory. It represents an invisible architecture of presence, building a bridge between who we are and those we leave behind.&rdquo;
            </p>
            <div className="w-12 h-[1px] bg-gold mx-auto"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/50 block font-light">
              Jumaane Dale, Founder
            </span>
          </div>
        </div>

        {/* Chapter 3: Future Boutique E-Commerce */}
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6 select-none">
          <span className="text-[9px] tracking-widest text-gold uppercase font-light block">
            The Future
          </span>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wider uppercase font-light text-charcoal">
            The Digital Registry
          </h2>
          <div className="w-8 h-[1px] bg-beige mx-auto"></div>
          <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light max-w-2xl mx-auto">
            As we step forward, our digital experience is evolving. Soon, members will be able to access the Boutique Registry to log personalized olfactory profiles, order custom-labeled maceration bottles, manage subscription refills, and receive invitations to private scent launches in Ohio.
          </p>
          <div className="pt-6">
            <Link
              href="/fragrances"
              className="inline-block text-[10px] tracking-[0.3em] uppercase bg-charcoal text-ivory px-8 py-4 hover:bg-gold hover:text-charcoal transition-all duration-300 font-serif font-medium"
            >
              Discover the Wardrobe
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <Toast />
    </>
  );
}
