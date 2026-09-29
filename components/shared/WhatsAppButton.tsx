'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_DATA } from '@/data/mockData';

export function WhatsAppButton() {
  return (
    <a
      href={COMPANY_DATA.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-3 rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
      aria-label="Chat on WhatsApp"
      title="Chat directly with founder Moawia Husnain on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline text-xs font-semibold tracking-wide">
        Chat with Founder
      </span>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </span>
    </a>
  );
}
