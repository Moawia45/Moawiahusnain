'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code2, CloudCheck, ShieldCheck, Rocket } from 'lucide-react';

export function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & System Architecture',
      desc: 'We map out your business objectives, data schemas, cloud infrastructure needs, and API contracts.',
      icon: Search,
    },
    {
      num: '02',
      title: 'UI/UX & Interactive Wireframing',
      desc: 'Crafting luxury glassmorphic designs in Figma with accessible components and micro-interactions.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Agile Software Engineering',
      desc: 'Writing clean TypeScript, Next.js components, native Android Kotlin, and async Python scripts.',
      icon: Code2,
    },
    {
      num: '04',
      title: 'AI Agent & Firebase Cloud Sync',
      desc: 'Integrating OpenAI LLMs, RAG vector stores, Firestore database rules, and FCM push notifications.',
      icon: CloudCheck,
    },
    {
      num: '05',
      title: 'Security Auditing & QA Testing',
      desc: 'End-to-end testing, security rule validation, and Core Web Vitals optimization to guarantee 95+ score.',
      icon: ShieldCheck,
    },
    {
      num: '06',
      title: 'Deployment & Continuous Growth',
      desc: 'Deploying on Vercel Edge / Play Store, configuring SSL, dynamic SEO sitemaps, and ongoing SLAs.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 text-slate-900 dark:text-white transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
            How We Build Great Software
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our 6-Step Development Process
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base">
            From initial concept discovery to continuous cloud scaling, our methodology guarantees transparency, speed, and precision.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-400 dark:hover:border-cyan-500/40 transition-colors shadow-sm group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-cyan-400 group-hover:bg-blue-600 dark:group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
