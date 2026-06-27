import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import FeaturedFragrances from '@/components/home/FeaturedFragrances';
import Editorial from '@/components/home/Editorial';
import Craftsmanship from '@/components/home/Craftsmanship';
import Philosophy from '@/components/home/Philosophy';
import Journal from '@/components/home/Journal';
import InstagramGrid from '@/components/home/InstagramGrid';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';
import Toast from '@/components/ui/Toast';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedFragrances />
        <Editorial />
        <Craftsmanship />
        <Philosophy />
        <Journal />
        <InstagramGrid />
        <Contact />
      </main>
      <Footer />
      <Toast />
    </>
  );
}
