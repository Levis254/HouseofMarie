import React from 'react';
import { products } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ProductDetailClient id={resolvedParams.id} />;
}
