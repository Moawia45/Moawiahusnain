import React from 'react';
import { Metadata } from 'next';
import { SERVICES_DATA } from '@/data/mockData';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { QuoteCalculator } from '@/components/home/QuoteCalculator';

export const metadata: Metadata = {
  title: 'Software Development & AI Services',
  description: 'Explore Vertex Studio services including Next.js web development, native Android apps, Python web scraping, AI solutions, and UI/UX design.',
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-12 bg-slate-950 text-white min-h-screen">
      <ServicesGrid />
      <ProcessTimeline />
      <QuoteCalculator />
    </div>
  );
}
