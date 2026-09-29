import React from 'react';
import { Metadata } from 'next';
import { FAQAccordion } from '@/components/home/FAQAccordion';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Search questions about Vertex Studio, Founder Moawia Husnain, Firebase Admin integration, technologies, and pricing.',
};

export default function FAQPage() {
  return (
    <div className="pt-28 pb-12 bg-slate-950 text-white min-h-screen">
      <FAQAccordion />
      <CTASection />
    </div>
  );
}
