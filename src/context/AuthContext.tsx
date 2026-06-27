'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (email: string, name: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, name: string) => Promise<boolean>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('hom_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse user', e);
      }
    }
  }, []);

  const login = async (email: string, name: string) => {
    // Simulated login call
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const loggedUser: User = {
          id: 'user_' + Math.random().toString(36).substring(2, 9),
          name: name || 'Guest User',
          email,
          role: 'customer'
        };
        setUser(loggedUser);
        localStorage.setItem('hom_user', JSON.stringify(loggedUser));
        resolve(true);
      }, 800);
    });
  };

  const register = async (email: string, name: string) => {
    return login(email, name);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hom_user');
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
