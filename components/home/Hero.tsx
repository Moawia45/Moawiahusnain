'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code2, ShieldCheck, Smartphone, Bot, Cpu } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-cyan-400/10 dark:from-blue-600/20 dark:via-indigo-600/15 dark:to-cyan-400/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px]" />
        {/* SVG Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e125_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e125_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-xl mb-8 shadow-md shadow-blue-500/5 dark:shadow-cyan-500/5 group cursor-pointer hover:border-cyan-500/50 transition-all"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
            BUILDEX (DUNS 31-239-5963) • Engr. Moawia Husnain (BS Civil Eng | MSc UET Lahore)
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1]"
        >
          Civil Construction Suite, <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-300">
            Web & Android Software
          </span> Ecosystems
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          <strong>BUILDEX</strong> (D-U-N-S® 31-239-5963) engineers world-class Civil Construction Suite apps, native Android software, Next.js web applications, and custom AI systems founded by Engr. Moawia Husnain (BS Civil Engineering, MSc Construction Management student at UET Lahore).
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.moawiahussnain.civilconstructionsuite"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            <span>Civil Construction Suite App</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 dark:bg-slate-900/90 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-sm backdrop-blur-xl shadow-sm transition-all duration-200"
          >
            <span>Explore Portfolio</span>
          </Link>
        </motion.div>

        {/* Tech Badges Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800/60 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-600 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Next.js App Router</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Android SDK & Flutter</span>
          </div>
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Python Web Automation</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>AI Agents & RAG</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Firebase Cloud Sync</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
