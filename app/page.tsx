import React from 'react';
import { Hero } from '@/components/home/Hero';
import { StatsCounter } from '@/components/home/StatsCounter';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { TechStackGrid } from '@/components/home/TechStackGrid';
import { FeaturedPortfolio } from '@/components/home/FeaturedPortfolio';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { QuoteCalculator } from '@/components/home/QuoteCalculator';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQAccordion } from '@/components/home/FAQAccordion';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <StatsCounter />
      <ServicesGrid />
      <TechStackGrid />
      <FeaturedPortfolio />
      <ProcessTimeline />
      <QuoteCalculator />
      <TestimonialsSection />
      <FAQAccordion />
      <CTASection />
    </div>
  );
}
