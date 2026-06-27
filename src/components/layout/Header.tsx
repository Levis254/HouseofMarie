'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useAuth } from '@/context/AuthContext';
import { showToast } from '../ui/Toast';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { cartItems, cartCount, cartTotal, isOpen: cartOpen, setIsOpen: setCartOpen, updateQuantity, removeFromCart } = useCart();
  const { wishlist } = useWishlist();
  const { user, login, logout, isAuthenticated } = useAuth();
  const [authEmail, setAuthEmail] = useState('');
  const [authName, setAuthName] = useState('');
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when overlays are open
  useEffect(() => {
    if (mobileMenuOpen || cartOpen || searchOpen || authOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, cartOpen, searchOpen, authOpen]);

  const isHome = pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fragrances', path: '/fragrances' },
    { name: 'Our Story', path: '/story' },
    { name: 'Journal', path: '/#journal' },
    { name: 'Contact', path: '/#contact' },
  ];

  const getLinkClassName = (path: string) => {
    const isActive = pathname === path;
    const baseClass = "transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gold after:transition-transform after:duration-300 font-semibold";
    if (isActive) {
      return `${baseClass} text-gold after:scale-x-100`;
    }
    const colorClass = scrolled || !isHome ? 'text-charcoal hover:text-gold' : 'text-ivory hover:text-gold';
    return `${baseClass} ${colorClass} after:scale-x-0 hover:after:scale-x-100`;
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail) return;
    await login(authEmail, authName || 'Valued Guest');
    showToast(`Welcome to the House of Rosemarie, ${authName || 'Guest'}.`);
    setAuthOpen(false);
    setAuthEmail('');
    setAuthName('');
  };

  const handleCheckout = () => {
    showToast('Boutique ordering: Checkout will be available in the upcoming phase.', 'info');
  };

  return (
    <>
      {/* HEADER BAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-beige/40 py-4 shadow-sm text-charcoal'
            : isHome
            ? 'bg-transparent py-6 text-ivory'
            : 'bg-ivory border-b border-beige/40 py-6 text-charcoal'
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-1 focus:outline-none hover:text-gold transition-colors"
            aria-label="Open navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Left Navigation (Desktop) - First 3 links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs uppercase tracking-[0.25em]">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={getLinkClassName(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo (Centered) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <Link href="/" className="group flex flex-col items-center select-none">
              <span className="font-serif text-xl md:text-2xl lg:text-3xl tracking-[0.3em] font-light transition-all duration-300 group-hover:text-gold">
                HOUSE OF ROSEMARIE
              </span>
              <span className={`text-[8px] tracking-[0.5em] uppercase font-light -mt-0.5 transition-opacity duration-300 ${
                scrolled || !isHome ? 'text-gold' : 'text-ivory/60'
              }`}>
                NEW YORK
              </span>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Right Navigation Links (Desktop) - Last 2 links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs uppercase tracking-[0.25em] mr-4">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={getLinkClassName(link.path)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1 hover:text-gold transition-colors duration-300"
              aria-label="Search fragrances"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Profile */}
            <button
              onClick={() => {
                if (isAuthenticated) {
                  logout();
                  showToast('You have signed out.');
                } else {
                  setAuthOpen(true);
                }
              }}
              className="hidden lg:block p-1 hover:text-gold transition-colors duration-300 relative group"
              aria-label="User account"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {isAuthenticated && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full border border-ivory"></span>
              )}
              {isAuthenticated && (
                <span className="absolute right-0 top-full mt-2 w-max bg-charcoal text-ivory text-[9px] tracking-widest px-2 py-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-serif">
                  Sign Out ({user?.name})
                </span>
              )}
            </button>

            {/* Wishlist */}
            <Link
              href="/fragrances?filter=wishlist"
              className="hidden lg:inline-flex p-1 hover:text-gold transition-colors duration-300 relative"
              aria-label="View wishlist"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-charcoal text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-sans border border-ivory">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="p-1 hover:text-gold transition-colors duration-300 relative"
              aria-label="Open shopping cart"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-charcoal text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-sans border border-ivory">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 bg-charcoal/40 backdrop-blur-sm ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 bottom-0 left-0 w-80 max-w-[85vw] bg-ivory shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-lg tracking-[0.25em] font-light text-charcoal">MENU</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 hover:text-gold text-charcoal transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-sm uppercase tracking-[0.3em] font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="hover:text-gold transition-colors text-charcoal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-beige/30 my-2" />
              <Link
                href="/fragrances?filter=wishlist"
                className="hover:text-gold transition-colors text-charcoal flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wishlist ({wishlist.length})
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (isAuthenticated) {
                    logout();
                    showToast('You have signed out.');
                  } else {
                    setAuthOpen(true);
                  }
                }}
                className="hover:text-gold transition-colors text-charcoal text-left uppercase tracking-[0.3em]"
              >
                {isAuthenticated ? `Sign Out (${user?.name})` : 'Access Account'}
              </button>
            </nav>
          </div>
          <div className="border-t border-beige/40 pt-6">
            <span className="font-serif text-xs tracking-widest text-gold block mb-2">HOUSE OF ROSEMARIE</span>
            <span className="text-[10px] tracking-wider text-charcoal/60 block">Crafted Memories. Bottled Elegance.</span>
          </div>
        </div>
      </div>

      {/* CART SIDEBAR PANEL */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 bg-charcoal/40 backdrop-blur-sm ${
          cartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setCartOpen(false)}
      >
        <div
          className={`fixed top-0 bottom-0 right-0 w-96 max-w-[90vw] bg-ivory shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 ${
            cartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-beige/40">
              <span className="font-serif text-lg tracking-[0.25em] font-light text-charcoal">SHOPPING BAG ({cartCount})</span>
              <button
                onClick={() => setCartOpen(false)}
                className="p-1 hover:text-gold text-charcoal transition-colors"
                aria-label="Close cart"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <svg className="w-12 h-12 text-beige mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="font-serif text-sm tracking-widest text-charcoal/60 uppercase">Your bag is empty</p>
                <Link
                  href="/fragrances"
                  className="mt-6 text-[10px] tracking-[0.3em] uppercase bg-charcoal text-ivory px-6 py-3 hover:bg-gold hover:text-charcoal transition-colors duration-300"
                  onClick={() => setCartOpen(false)}
                >
                  Explore Fragrances
                </Link>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto pr-1 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4 border-b border-beige/20 pb-6">
                    <div className="w-20 h-20 bg-beige/10 border border-beige/35 flex-shrink-0 relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="font-serif text-sm tracking-wider font-medium text-charcoal">{item.product.name}</h4>
                          <span className="text-xs font-semibold text-charcoal">${item.product.price}</span>
                        </div>
                        <p className="text-[10px] text-charcoal/50 uppercase tracking-widest mt-1">{item.product.size} | {item.product.olfactoryFamily}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        {/* Quantity adjust */}
                        <div className="flex items-center border border-beige">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-charcoal hover:bg-beige/30"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-medium text-charcoal">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-charcoal hover:bg-beige/30"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            removeFromCart(item.product.id);
                            showToast(`${item.product.name} removed from bag.`);
                          }}
                          className="text-[10px] text-gold uppercase tracking-widest hover:text-charcoal transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-beige/40 pt-6 mt-4">
              <div className="flex justify-between text-sm tracking-widest uppercase font-serif mb-4">
                <span className="text-charcoal/70">Subtotal</span>
                <span className="text-charcoal font-semibold">${cartTotal}</span>
              </div>
              <p className="text-[10px] text-charcoal/50 tracking-wider mb-6">
                Shipping and taxes calculated at checkout. Hand-packaged in luxury House of Marie boutique boxes.
              </p>
              <button
                onClick={handleCheckout}
                className="w-full text-center text-xs tracking-[0.25em] uppercase bg-charcoal text-ivory py-4 hover:bg-gold hover:text-charcoal transition-colors duration-300 font-serif font-medium"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SEARCH OVERLAY */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 bg-charcoal/90 backdrop-blur-md flex items-center justify-center ${
          searchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setSearchOpen(false)}
          className="absolute top-8 right-8 text-ivory hover:text-gold transition-colors"
          aria-label="Close search"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="w-full max-w-2xl px-6 flex flex-col items-center">
          <label htmlFor="search-input" className="font-serif text-gold text-lg tracking-[0.3em] uppercase mb-4 block">Search the House</label>
          <div className="w-full border-b border-ivory/30 focus-within:border-gold transition-colors py-2 flex items-center gap-4">
            <input
              id="search-input"
              type="text"
              placeholder="e.g. Marie No. 1, jasmine, wood..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-ivory font-serif text-2xl tracking-widest placeholder-ivory/30 outline-none w-full"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setSearchOpen(false);
                  showToast(`Searching for "${searchQuery}"...`);
                  window.location.href = `/fragrances?search=${encodeURIComponent(searchQuery)}`;
                }
              }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-ivory/50 hover:text-ivory">
                Clear
              </button>
            )}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-ivory/40 mt-4 text-center">
            Press Enter to discover matching fragrances
          </p>
        </div>
      </div>

      {/* AUTHENTICATION POPUP */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 bg-charcoal/40 backdrop-blur-sm flex items-center justify-center ${
          authOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setAuthOpen(false)}
      >
        <div
          className="bg-ivory border border-gold/20 shadow-2xl p-8 max-w-md w-full relative mx-4 animate-fade-in-up"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setAuthOpen(false)}
            className="absolute top-4 right-4 text-charcoal hover:text-gold transition-colors"
            aria-label="Close login dialog"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl tracking-[0.2em] text-charcoal uppercase">Boutique Registry</h3>
            <div className="w-12 h-[1px] bg-gold mx-auto my-3"></div>
            <p className="text-xs text-charcoal/60 tracking-wider">
              Join the House of Marie to save wishlists and receive bespoke fragrance recommendations.
            </p>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            <div>
              <label htmlFor="auth-name" className="text-[10px] tracking-widest text-charcoal/60 uppercase block mb-1">Name</label>
              <input
                id="auth-name"
                type="text"
                required
                value={authName}
                onChange={(e) => setAuthName(e.target.value)}
                placeholder="Elizabeth Bennet"
                className="w-full bg-transparent border border-beige focus:border-gold px-3 py-2 text-sm text-charcoal outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="auth-email" className="text-[10px] tracking-widest text-charcoal/60 uppercase block mb-1">Email Address</label>
              <input
                id="auth-email"
                type="email"
                required
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="elizabeth@example.com"
                className="w-full bg-transparent border border-beige focus:border-gold px-3 py-2 text-sm text-charcoal outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] font-serif py-3 hover:bg-gold hover:text-charcoal transition-colors duration-300"
            >
              Access Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
