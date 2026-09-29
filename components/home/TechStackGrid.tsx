'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Smartphone, Database } from 'lucide-react';

export function TechStackGrid() {
  const techCategories = [
    {
      title: 'Frontend & Web',
      icon: Code2,
      items: [
        { name: 'Next.js 15', desc: 'App Router & Server Components' },
        { name: 'React 19', desc: 'Hooks & Modern Concurrent UI' },
        { name: 'TypeScript', desc: 'Strict End-to-End Type Safety' },
        { name: 'Tailwind CSS', desc: 'Utility Design Tokens & Glassmorphism' },
      ],
    },
    {
      title: 'Mobile & Native',
      icon: Smartphone,
      items: [
        { name: 'Android SDK', desc: 'Native Kotlin & Java' },
        { name: 'Flutter', desc: '60fps Cross-Platform Apps' },
        { name: 'Firebase FCM', desc: 'Realtime Push Notifications' },
        { name: 'SQLite / Room', desc: 'Offline Local Database Sync' },
      ],
    },
    {
      title: 'Python & AI Engineering',
      icon: Cpu,
      items: [
        { name: 'Python 3.12', desc: 'Automation & Web Scraping' },
        { name: 'OpenAI & Claude', desc: 'LLMs, Fine-tuning & Embeddings' },
        { name: 'PyTorch', desc: 'Deep Learning & Neural Nets' },
        { name: 'Playwright', desc: 'Browser RPA Automation' },
      ],
    },
    {
      title: 'Backend & Cloud Infrastructure',
      icon: Database,
      items: [
        { name: 'Firebase Firestore', desc: 'Realtime NoSQL Database' },
        { name: 'FastAPI', desc: 'Async High-Speed Python APIs' },
        { name: 'Docker', desc: 'Containerized Microservices' },
        { name: 'Vercel Edge', desc: 'Global Serverless CDN' },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/80 text-slate-900 dark:text-white relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
            Engineered with Modern Standards
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Enterprise Technology Stack
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base">
            We employ modern, battle-tested technologies to ensure your applications remain fast, scalable, secure, and future-proof.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 p-6 hover:border-blue-400 dark:hover:border-slate-700 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                  </div>

                  <div className="mt-4 space-y-3">
                    {cat.items.map((item) => (
                      <div key={item.name} className="group">
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
