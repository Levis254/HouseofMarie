'use client';

import React, { useState, useEffect } from 'react';

export interface ToastMessage {
  message: string;
  type: 'success' | 'info' | 'error';
  id: number;
}

export function showToast(message: string, type: 'success' | 'info' | 'error' = 'success') {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('show-toast', { detail: { message, type } });
    window.dispatchEvent(event);
  }
}

export default function Toast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string; type: 'success' | 'info' | 'error' }>;
      const { message, type } = customEvent.detail;
      const id = Date.now() + Math.random();
      setToasts(prev => [...prev, { message, type, id }]);

      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };

    window.addEventListener('show-toast', handleToast);
    return () => window.removeEventListener('show-toast', handleToast);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-50 flex flex-col items-center md:items-end gap-2 pointer-events-none w-[calc(100%-2rem)] md:w-auto max-w-md">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="px-6 py-4 bg-charcoal text-ivory border border-gold/30 font-serif text-sm tracking-widest shadow-2xl flex items-center gap-3 transition-all duration-500 pointer-events-auto animate-fade-in-up w-full md:w-auto"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0"></span>
          <span>{toast.message}</span>
          <button
            onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
            className="ml-4 text-xs opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
