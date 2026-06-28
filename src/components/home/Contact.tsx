'use client';

import React, { useState } from 'react';
import { showToast } from '../ui/Toast';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    showToast(`Thank you, ${name}. Your message has been sent to our concierge.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-ivory text-charcoal px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column: Coordinates */}
        <div className="flex-1 space-y-12 select-none">
          <div className="space-y-3">
            <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold text-gold block">
              Concierge Service
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-light uppercase">
              Get in Touch
            </h2>
          </div>
          <div className="w-12 h-[1px] bg-gold"></div>

          <p className="text-xs md:text-sm text-charcoal/60 leading-relaxed font-light max-w-md">
            Whether inquiring about custom fragrance formulation, booking a private boutique appointment, or tracking a courier, our team is at your disposal.
          </p>

          <div className="space-y-6 text-xs tracking-wider uppercase font-light">
            <div className="space-y-1">
              <span className="text-[9px] text-gold tracking-widest block">The Westlake Boutique</span>
              <p className="text-charcoal/80">1991 Crocker Rd #600-755</p>
              <p className="text-charcoal/80">Westlake, OH 44145, United States</p>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] text-gold tracking-widest block">Electronic Mail</span>
              <a href="mailto:concierge@houseofrosemarie.com" className="text-charcoal/80 hover:text-gold transition-colors font-medium">
                concierge@houseofrosemarie.com
              </a>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] text-gold tracking-widest block">Telephonic Liaison</span>
              <a href="tel:+19376130721" className="text-charcoal/80 hover:text-gold transition-colors font-medium">
                +1 (937) 613-0721
              </a>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-6 pt-4 text-charcoal/60">
            <a
              href="#instagram"
              onClick={(e) => { e.preventDefault(); showToast('Instagram link click'); }}
              className="hover:text-gold transition-colors"
              aria-label="Instagram profile"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.75 2h8.5a5.75 5.75 0 015.75 5.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 017.75 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
              </svg>
            </a>
            <a
              href="#facebook"
              onClick={(e) => { e.preventDefault(); showToast('Facebook link click'); }}
              className="hover:text-gold transition-colors"
              aria-label="Facebook page"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="#pinterest"
              onClick={(e) => { e.preventDefault(); showToast('Pinterest link click'); }}
              className="hover:text-gold transition-colors"
              aria-label="Pinterest boards"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 10.742c.04-.616.37-1.143.872-1.425.503-.28 1.102-.27 1.6.028.498.297.796.843.796 1.43v.356c0 .604.49 1.096 1.096 1.096h.356a4.384 4.384 0 004.384-4.384V7.5a4.5 4.5 0 00-9 0v.344a1.096 1.096 0 01-1.096 1.096H7.344A4.384 4.384 0 003 13.324v2.348a4.5 4.5 0 009 0v-.356c0-.604-.492-1.096-1.096-1.096h-.356a2.192 2.192 0 01-2.192-2.192v-1.286z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 w-full bg-beige/5 border border-beige/35 p-8 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_name"
                id="floating_name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-charcoal bg-transparent border-0 border-b border-beige appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors font-serif"
                placeholder=" "
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-xs tracking-wider uppercase text-charcoal/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Name
              </label>
            </div>
            
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-charcoal bg-transparent border-0 border-b border-beige appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors font-serif"
                placeholder=" "
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-xs tracking-wider uppercase text-charcoal/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <textarea
                name="floating_message"
                id="floating_message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-charcoal bg-transparent border-0 border-b border-beige appearance-none focus:outline-none focus:ring-0 focus:border-gold peer transition-colors resize-none font-serif"
                placeholder=" "
              />
              <label
                htmlFor="floating_message"
                className="peer-focus:font-medium absolute text-xs tracking-wider uppercase text-charcoal/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full text-center text-xs tracking-[0.25em] uppercase bg-charcoal text-ivory py-4 hover:bg-gold hover:text-charcoal transition-all duration-300 font-serif font-medium"
            >
              Send Correspondence
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
