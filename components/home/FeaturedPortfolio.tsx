'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, PortfolioItem } from '@/data/mockData';
import { ExternalLink, ArrowRight, X } from 'lucide-react';
import { GithubIcon } from '@/components/shared/GithubIcon';

export function FeaturedPortfolio() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const featuredItems = PORTFOLIO_DATA.filter((p) => p.featured);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
              Featured Success Stories
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Selected Case Studies & Works
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline transition-colors"
          >
            <span>View Complete Portfolio Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500 dark:hover:border-cyan-500/50 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Client: {item.client}
                  </span>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60">
                  {item.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-sm font-extrabold text-blue-600 dark:text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags & Trigger */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {item.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveItem(item)}
                    className="text-xs font-semibold text-blue-600 dark:text-cyan-400 group-hover:text-blue-700 dark:group-hover:text-cyan-300 inline-flex items-center gap-1 hover:underline shrink-0"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 dark:bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 my-8">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={activeItem.bannerImage}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                Case Study: {activeItem.client}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                {activeItem.title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeItem.fullDesc}
            </p>

            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              {activeItem.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-xl font-extrabold text-blue-600 dark:text-cyan-400">{m.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Technologies Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeItem.technologies.map((t) => (
                  <span key={t} className="text-xs font-semibold text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-slate-800 px-3 py-1 rounded-full border border-blue-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {activeItem.liveUrl && (
                  <a
                    href={activeItem.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 shadow-md"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeItem.githubUrl && (
                  <a
                    href={activeItem.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
