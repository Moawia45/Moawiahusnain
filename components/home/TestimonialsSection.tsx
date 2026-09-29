'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '@/data/mockData';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 text-slate-900 dark:text-white transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
            Client Feedback
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Trusted by International Tech Leaders
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base">
            See what founders, VPs, and product managers say about partnering with Nexvora.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between relative hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 dark:text-slate-800 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-300 dark:border-slate-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}, {t.company}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-semibold text-blue-600 dark:text-cyan-400 block">{t.projectType}</span>
                  <span className="text-[10px] text-slate-500">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
