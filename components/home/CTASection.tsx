'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/mockData';
import { ArrowRight, MessageCircle, Sparkles, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/30 to-cyan-400/30 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready to Transform Your Digital Vision?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Let's Build Extraordinary Software Together.
        </h2>

        <p className="mt-6 text-slate-300 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Contact Founder Moawia Husnain today to discuss your website, Android application, Python web automation, or custom AI project.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:scale-[1.02] transition-all"
          >
            <span>Calculate Instant Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={COMPANY_DATA.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`mailto:${COMPANY_DATA.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 hover:bg-slate-700 dark:hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-colors"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
