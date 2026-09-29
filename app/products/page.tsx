import React from 'react';
import { Metadata } from 'next';
import { PRODUCTS_DATA, COMPANY_DATA } from '@/data/mockData';
import { Download, Star, Check, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Products & SaaS Templates Store',
  description: 'Download premium Next.js 15 starter kits, Python auto-scraping scripts, Flutter mobile apps, and Shadcn UI component packs.',
};

export default function ProductsPage() {
  return (
    <div className="pt-28 pb-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-950/80 border border-blue-200 dark:border-cyan-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Marketplace</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Premium Templates & Software Tools
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Accelerate your development timeline with our production-tested Next.js starter kits, Python automation bots, and UI design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-cyan-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-2xl space-y-6"
            >
              <div className="space-y-4">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 border border-slate-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase text-cyan-300 backdrop-blur-md">
                    {product.category}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-500 font-normal">({product.reviewsCount} reviews)</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{product.downloadCount}+ Downloads</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{product.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{product.shortDesc}</p>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-300">Key Features:</div>
                  <div className="space-y-1.5">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">${product.price}</div>
                  <div className="text-xs text-slate-400 line-through">${product.originalPrice}</div>
                </div>

                <a
                  href={COMPANY_DATA.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Get Product License</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
