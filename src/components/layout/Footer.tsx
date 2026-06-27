'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { showToast } from '../ui/Toast';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast(`Subscribed: ${email} has been registered to receive House correspondence.`);
    setEmail('');
  };

  return (
    <footer className="bg-ivory border-t border-beige/40 text-charcoal pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* About column */}
        <div className="space-y-4">
          <span className="font-serif text-lg tracking-[0.2em] font-light block">HOUSE OF MARIE</span>
          <p className="text-xs text-charcoal/60 leading-relaxed font-light">
            An independent fragrance house dedicated to the art of fine perfumery. We curate olfactory memories using the world's most exquisite and sustainably sourced ingredients.
          </p>
        </div>

        {/* Navigation column */}
        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold block mb-4">Discovery</span>
          <ul className="space-y-2.5 text-xs text-charcoal/70 font-light">
            <li>
              <Link href="/fragrances" className="hover:text-gold transition-colors">
                The Perfumes
              </Link>
            </li>
            <li>
              <Link href="/story" className="hover:text-gold transition-colors">
                Our Story & Philosophy
              </Link>
            </li>
            <li>
              <Link href="/#journal" className="hover:text-gold transition-colors">
                The Journal
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-gold transition-colors">
                Contact the House
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Social column */}
        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold block mb-4">Boutique</span>
          <ul className="space-y-2.5 text-xs text-charcoal/70 font-light">
            <li>
              <a href="#instagram" onClick={(e) => { e.preventDefault(); showToast('Instagram connection placeholder'); }} className="hover:text-gold transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#facebook" onClick={(e) => { e.preventDefault(); showToast('Facebook connection placeholder'); }} className="hover:text-gold transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); showToast('Privacy Policy'); }} className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" onClick={(e) => { e.preventDefault(); showToast('Terms of Service'); }} className="hover:text-gold transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div className="space-y-4">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold block">Correspondence</span>
          <p className="text-xs text-charcoal/60 leading-relaxed font-light">
            Subscribe to receive notices on private collection releases, storytelling articles, and select events.
          </p>
          <form onSubmit={handleSubscribe} className="flex border-b border-charcoal/30 pb-1.5 pt-2">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-xs tracking-widest placeholder-charcoal/40 outline-none w-full focus:placeholder-transparent"
            />
            <button
              type="submit"
              className="text-[10px] tracking-widest uppercase text-gold hover:text-charcoal transition-colors ml-2 font-medium"
              aria-label="Subscribe to correspondence"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Symmetrical bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-beige/30 pt-8 text-[10px] tracking-[0.2em] text-charcoal/45 uppercase">
        <p>© {new Date().getFullYear()} House of Marie. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-serif tracking-[0.3em]">Paris • Grasse • New York</p>
      </div>
    </footer>
  );
}
