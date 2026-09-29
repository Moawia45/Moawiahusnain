import React from 'react';
import { Metadata } from 'next';
import { QuoteCalculator } from '@/components/home/QuoteCalculator';
import { Check, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transparent Software Development Pricing & Custom Quote',
  description: 'Flexible packages and interactive project estimator for Next.js web applications, Android software, Python automation, and AI solutions.',
};

export default function PricingPage() {
  const packages = [
    {
      name: 'Starter Launchpad',
      price: '$499',
      desc: 'Ideal for landing pages, portfolio websites, or lightweight web apps.',
      features: [
        'Single Page or up to 5 Custom Pages',
        'Next.js 15 App Router & Tailwind CSS',
        'Lighthouse 95+ SEO & Schema Markup',
        'Responsive Mobile & Dark Mode',
        'Contact Form & WhatsApp Integration',
        '14 Days Support & Hosting Setup',
      ],
      popular: false,
    },
    {
      name: 'Growth Business',
      price: '$999',
      desc: 'Best for scale-up companies needing Firebase backends and Android app integration.',
      features: [
        'Up to 12 Pages or Web Application',
        'Firebase Firestore & Authentication',
        'Dedicated Admin Panel Portal',
        'Native Android / Flutter Mobile App',
        'Python Web Automation / API Scripting',
        '30 Days SLA Warranty & Analytics',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Ecosystem',
      price: '$1,999+',
      desc: 'Full-suite custom AI solutions, RAG agents, complex telemetry, and high-throughput scrapers.',
      features: [
        'Unlimited Dynamic Custom Pages',
        'Custom OpenAI / LLM RAG Agent Integration',
        'Distributed Python Scraping Infrastructure',
        'Role-Based Admin & Telemetry Dashboards',
        'Stripe & Multi-Currency Payment System',
        '90 Days Priority Support & Continuous Scaling',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen space-y-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-950/80 border border-blue-200 dark:border-cyan-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment Tiers</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Flexible Packages & Custom Quotes
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            No hidden costs. Choose a standard milestone tier or calculate a custom scope instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 shadow-sm ${
                pkg.popular
                  ? 'bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-2 border-blue-500 dark:border-cyan-500 shadow-2xl'
                  : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-white dark:text-slate-950 bg-blue-600 dark:bg-cyan-400 px-4 py-1 rounded-full shadow-md">
                  Most Popular for Business
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{pkg.name}</h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{pkg.desc}</p>
                </div>

                <div className="text-4xl font-black text-slate-900 dark:text-white">
                  {pkg.price} <span className="text-xs text-slate-500 font-normal">USD</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">Included:</span>
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#quote-calculator"
                  className={`w-full block text-center py-3 rounded-xl font-bold text-xs transition-colors ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  Select Package
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <QuoteCalculator />
    </div>
  );
}
