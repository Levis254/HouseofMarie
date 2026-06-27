'use client';

import React from 'react';
import { showToast } from '../ui/Toast';

export default function Journal() {
  const articles = [
    {
      id: 'choosing-fragrance',
      category: 'Olfactory Guide',
      title: 'Choosing a Signature Fragrance',
      excerpt: 'A guide to navigating the fragrance families and finding a perfume that truly resonates with your identity.',
      date: 'June 24, 2026',
      readTime: '5 min read',
      image: '/images/marie_no1.png'
    },
    {
      id: 'understanding-notes',
      category: 'Education',
      title: 'Understanding Fragrance Notes',
      excerpt: 'Deconstructing the note pyramid. Discover how top, heart, and base notes unfold on your skin over time.',
      date: 'May 18, 2026',
      readTime: '7 min read',
      image: '/images/marie_no2.png'
    },
    {
      id: 'occasions-fragrance',
      category: 'Lifestyle',
      title: 'Fragrance for Every Occasion',
      excerpt: 'How to curate an olfactory wardrobe that transitions seamlessly from bright office mornings to intimate evenings.',
      date: 'April 05, 2026',
      readTime: '4 min read',
      image: '/images/marie_no3.png'
    }
  ];

  const handleArticleClick = (title: string) => {
    showToast(`Opening article: "${title}". Reading panel will open in the next version.`);
  };

  return (
    <section id="journal" className="py-24 md:py-32 bg-ivory text-charcoal px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold text-gold block">
            The Journal
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light uppercase">
            Olfactory Notebook
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto my-6"></div>
          <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light">
            Thoughts, histories, and educational guides curated by our in-house perfumers.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => handleArticleClick(article.title)}
              className="group cursor-pointer flex flex-col justify-between h-full space-y-6"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/2] w-full overflow-hidden border border-beige/35 bg-beige/10 p-1 group-hover:border-gold/30 transition-colors duration-500">
                <div className="relative w-full h-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  {/* Hover overlay vignette */}
                  <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Text Meta & Content */}
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Category */}
                  <span className="text-[9px] tracking-widest text-gold uppercase font-light block">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl tracking-wider text-charcoal group-hover:text-gold transition-colors duration-300 font-light leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-charcoal/60 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer date & read time */}
                <div className="flex items-center justify-between pt-4 border-t border-beige/20 text-[9px] tracking-widest uppercase text-charcoal/40 font-light">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
