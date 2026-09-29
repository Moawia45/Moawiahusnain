import React from 'react';
import { Metadata } from 'next';
import { COMPANY_DATA } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service and software development agreement for Nexvora.',
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Terms of Service</h1>
        <p className="text-xs text-slate-500">Last updated: July 2026</p>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or engaging services from {COMPANY_DATA.name}, you agree to abide by these Terms of Service. All software development contracts, source code deliveries, and SLA agreements are governed under international standards.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Intellectual Property Rights</h2>
          <p>
            Upon full payment of project milestone invoices, all custom source code, design assets, and intellectual property developed for your project are fully transferred to the client.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Warranty & SLA</h2>
          <p>
            Every software product includes a standard 30 to 90-day warranty window covering bug fixes, server deployment assistance, and optimization.
          </p>
        </section>
      </div>
    </div>
  );
}
