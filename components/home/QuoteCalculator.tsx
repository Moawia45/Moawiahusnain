'use client';

import React, { useState } from 'react';
import { submitQuoteRequest } from '@/lib/db-service';
import { Calculator, CheckCircle2, MessageCircle, Send } from 'lucide-react';

const SERVICE_OPTIONS = [
  { id: 'web', title: 'Custom Website / Next.js Web App', basePrice: 499 },
  { id: 'android', title: 'Native Android / Flutter App', basePrice: 699 },
  { id: 'ai', title: 'AI Solution & LLM RAG Agent', basePrice: 799 },
  { id: 'python', title: 'Python Web Scraping & Bot Automation', basePrice: 399 },
  { id: 'admin', title: 'Realtime Admin Panel & Dashboard', basePrice: 449 },
];

const FEATURE_OPTIONS = [
  { id: 'firebase', name: 'Firebase Sync & Cloud Backend', price: 150 },
  { id: 'admin-panel', name: 'Dedicated Content Admin Portal', price: 200 },
  { id: 'stripe', name: 'Stripe / Multi-Currency Payment Gateway', price: 150 },
  { id: 'ai-bot', name: 'AI Chatbot & Knowledge Base', price: 250 },
  { id: 'push', name: 'FCM Push Notifications & SMS Alert', price: 100 },
  { id: 'seo', name: 'Lighthouse 95+ SEO & Schema Package', price: 120 },
];

export function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState(SERVICE_OPTIONS[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['firebase', 'seo']);
  const [timeline, setTimeline] = useState('Standard (2-4 Weeks)');
  
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const featuresCost = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURE_OPTIONS.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const estimatedTotal = selectedService.basePrice + featuresCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const featureNames = selectedFeatures.map(
      (fId) => FEATURE_OPTIONS.find((f) => f.id === fId)?.name || fId
    );

    await submitQuoteRequest({
      serviceType: selectedService.title,
      budgetRange: `$${estimatedTotal} Estimated`,
      timeline,
      features: featureNames,
      clientName,
      clientEmail,
      clientPhone,
      details,
    });

    setLoading(false);
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const featureNames = selectedFeatures
      .map((fId) => FEATURE_OPTIONS.find((f) => f.id === fId)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Hello Founder Moawia Husnain! I calculated an estimated quote on Nexvora website:
*Service:* ${selectedService.title}
*Features:* ${featureNames}
*Timeline:* ${timeline}
*Estimated Cost:* $${estimatedTotal}
*My Name:* ${clientName || 'Interested Client'}
*Details:* ${details || 'Looking forward to discussing!'}`;

    return `https://wa.me/923266915744?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="quote-calculator" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
            Instant Scope & Cost Estimator
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Calculate Your Project Quote
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base">
            Select your desired software capabilities and get an instant estimated range. Send directly to Founder Moawia Husnain on WhatsApp or via Email.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configurator Box */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-sm">
            {/* Step 1: Select Service */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 flex items-center gap-2">
                <span>1. Select Core Service Type</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedService(srv)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                      selectedService.id === srv.id
                        ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 dark:border-cyan-500 text-slate-900 dark:text-white shadow-md'
                        : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{srv.title}</div>
                    <div className="mt-1 text-[11px] text-blue-600 dark:text-cyan-400 font-semibold">
                      From ${srv.basePrice}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Features */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                2. Select Add-on Capabilities & Features
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURE_OPTIONS.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between text-left transition-all ${
                        isChecked
                          ? 'bg-blue-50 dark:bg-cyan-950/40 border-blue-500 dark:border-cyan-500 text-slate-900 dark:text-white'
                          : 'bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            isChecked
                              ? 'bg-blue-600 dark:bg-cyan-500 border-blue-600 dark:border-cyan-400 text-white dark:text-slate-950'
                              : 'border-slate-300 dark:border-slate-700'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{feat.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">+${feat.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                3. Preferred Delivery Timeline
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Express (1-2 Weeks)', 'Standard (2-4 Weeks)', 'Flexible Enterprise'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-medium text-center transition-all ${
                      timeline === t
                        ? 'bg-blue-600 dark:bg-slate-800 border-blue-600 dark:border-cyan-500 text-white font-bold'
                        : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quote Summary & Direct Submit Form */}
          <div className="lg:col-span-5 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 sticky top-28 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Estimated Investment</span>
                <div className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-1 mt-0.5">
                  <span className="text-blue-600 dark:text-cyan-400">${estimatedTotal}</span>
                  <span className="text-xs text-slate-500 font-normal">USD (Starting)</span>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-cyan-950/80 border border-blue-200 dark:border-cyan-800 text-blue-600 dark:text-cyan-400">
                <Calculator className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500 dark:text-slate-400">Service:</span>
                <span className="font-semibold">{selectedService.title}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-500 dark:text-slate-400">Features Selected:</span>
                <span className="font-semibold text-blue-600 dark:text-cyan-300">{selectedFeatures.length} Add-ons</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 dark:text-slate-400">Timeline:</span>
                <span className="font-semibold">{timeline}</span>
              </div>
            </div>

            {submitted ? (
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Quote Request Received!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Thank you, {clientName}. Founder Moawia Husnain will review your proposal and contact you within 4 hours.
                </p>
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send to WhatsApp Now</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp / Phone Number"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
                  />
                  <textarea
                    rows={2}
                    placeholder="Brief project details or notes..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? 'Submitting...' : 'Submit Proposal'}</span>
                  </button>

                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
