'use client';

import React from 'react';
import { showToast } from '../ui/Toast';

export default function InstagramGrid() {
  const posts = [
    { image: '/images/hero_cinematic.png', likes: '1.4k', comments: '56' },
    { image: '/images/marie_no1.png', likes: '920', comments: '24' },
    { image: '/images/marie_no2.png', likes: '1.1k', comments: '41' },
    { image: '/images/marie_no3.png', likes: '1.8k', comments: '89' },
    { image: '/images/editorial_house.png', likes: '750', comments: '18' },
    { image: '/images/craftsmanship_lifestyle.png', likes: '1.2k', comments: '33' }
  ];

  const handlePostClick = () => {
    window.open('https://www.instagram.com/houseofrosemarie/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 md:py-32 bg-beige/10 border-y border-beige/30 px-4 md:px-8 text-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold text-gold block">
            Social Moodboard
          </span>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide font-light uppercase">
            Captured Moments
          </h2>
          <a
            href="https://www.instagram.com/houseofrosemarie/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.25em] uppercase text-charcoal/50 hover:text-gold transition-colors block mt-2"
          >
            @houseofrosemarie
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, idx) => (
            <div
              key={idx}
              onClick={handlePostClick}
              className="relative aspect-square w-full bg-beige/10 border border-beige/30 overflow-hidden cursor-pointer group shadow-sm"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt="House of Rosemarie Instagram Mood"
                className="w-full h-full object-cover object-center transition-transform duration-[1.5s] group-hover:scale-105"
              />

              {/* Hover Details Overlay */}
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-ivory gap-2 select-none">
                {/* Instagram Icon */}
                <svg className="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.75 2h8.5a5.75 5.75 0 015.75 5.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
                
                {/* Stats */}
                <div className="flex gap-4 text-[10px] tracking-widest font-serif font-light">
                  <span className="flex items-center gap-1">
                    ♥ {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    ● {post.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
