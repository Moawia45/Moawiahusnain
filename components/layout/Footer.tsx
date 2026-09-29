'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/mockData';
import { Code2, Send, Mail, Phone, MapPin, CheckCircle2, Heart } from 'lucide-react';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                BUILDEX<span className="text-cyan-400 text-xs font-semibold block">DUNS: 31-239-5963</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_DATA.description}
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_DATA.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={COMPANY_DATA.socials.email} className="hover:text-white transition-colors">
                  {COMPANY_DATA.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={COMPANY_DATA.socials.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {COMPANY_DATA.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services#web-development" className="hover:text-cyan-400 transition-colors">Custom Website Dev</Link></li>
              <li><Link href="/services#mobile-app-dev" className="hover:text-cyan-400 transition-colors">Android & Mobile Apps</Link></li>
              <li><Link href="/services#ai-solutions" className="hover:text-cyan-400 transition-colors">AI & ML Solutions</Link></li>
              <li><Link href="/services#python-automation" className="hover:text-cyan-400 transition-colors">Python & Web Scraping</Link></li>
              <li><Link href="/services#ui-ux-design" className="hover:text-cyan-400 transition-colors">UI/UX & Branding</Link></li>
              <li><Link href="/services#cloud-firebase" className="hover:text-cyan-400 transition-colors">Firebase Cloud Architecture</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Founder & Team</Link></li>
              <li><Link href="/portfolio" className="hover:text-cyan-400 transition-colors">Featured Case Studies</Link></li>
              <li><Link href="/products" className="hover:text-cyan-400 transition-colors">Digital Products & SaaS</Link></li>
              <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing & Quote Calculator</Link></li>
              <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Tech Insights & Articles</Link></li>
              <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers & Hiring</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Stay Connected</h3>
            <p className="text-xs text-slate-400">
              Subscribe to receive tech insights, product updates, and software engineering guides.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} BUILDEX (D-U-N-S® 31-239-5963). Founded by</span>
            <span className="font-semibold text-slate-300">{COMPANY_DATA.founder}</span> ({COMPANY_DATA.education}).
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy_policy.html" className="hover:text-slate-300 transition-colors">Play Store Privacy Policy</a>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
