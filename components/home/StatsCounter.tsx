'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DATA } from '@/data/mockData';
import { CheckCircle, Globe, Smile, GitCommit } from 'lucide-react';

export function StatsCounter() {
  const statsList = [
    {
      label: 'Delivered Projects',
      value: `${COMPANY_DATA.stats.projectsCompleted}+`,
      sub: 'Web, Android & AI Apps',
      icon: CheckCircle,
      color: 'text-cyan-600 dark:text-cyan-400',
    },
    {
      label: 'Satisfaction Rate',
      value: `${COMPANY_DATA.stats.satisfactionRate}%`,
      sub: '5-Star Client Reviews',
      icon: Smile,
      color: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      label: 'Global Enterprise Clients',
      value: `${COMPANY_DATA.stats.globalClients}+`,
      sub: 'USA, UK, UAE & Europe',
      icon: Globe,
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      label: 'Code Commits Written',
      value: COMPANY_DATA.stats.codeCommits,
      sub: 'Clean TypeScript & Python',
      icon: GitCommit,
      color: 'text-indigo-600 dark:text-indigo-400',
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80 backdrop-blur-md relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700/80 transition-colors shadow-sm"
              >
                <Icon className={`w-6 h-6 mb-3 ${stat.color}`} />
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {stat.label}
                </span>
                <span className="mt-0.5 text-[11px] text-slate-500 font-normal">
                  {stat.sub}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
