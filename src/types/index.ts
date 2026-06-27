export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  story: string;
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  price: number;
  image: string;
  isAvailable: boolean;
  size: string; // e.g., "100 ml"
  olfactoryFamily: string; // e.g., "Floral", "Woody", "Fresh"
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin';
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  image: string;
  readTime: string;
  category: string;
}
