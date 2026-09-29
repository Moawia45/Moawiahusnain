import React from 'react';
import { Metadata } from 'next';
import { COMPANY_DATA, TEAM_DATA } from '@/data/mockData';
import { Target, Eye, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us & Founder Moawia Husnain',
  description: 'Learn about Nexvora (nexvora.codes), our founder Moawia Husnain, core values, technology stack, and global software engineering mission.',
};

export default function AboutPage() {
  const values = [
    { title: 'Obsessive Quality', desc: 'We do not build minimum viable products that look generic. Every line of code and pixel must project luxury and precision.' },
    { title: 'Speed & Performance', desc: 'Every web application is engineered for Core Web Vitals excellence, achieving 95+ Lighthouse audit scores.' },
    { title: 'Client Transparency', desc: 'Clear communication, direct access to Founder Moawia Husnain, and milestone-based transparent deliveries.' },
    { title: 'Future Scalability', desc: 'Built Firebase-ready with decoupled architectures so your platform can scale to millions of active users.' },
  ];

  return (
    <div className="pt-28 pb-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen space-y-20 transition-colors duration-300">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-950/80 border border-blue-200 dark:border-cyan-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About {COMPANY_DATA.name} (DUNS {COMPANY_DATA.dunsNumber})</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto text-slate-900 dark:text-white">
          Civil Engineering Software, AI Solutions & Digital Platforms
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Registered under <strong>BUILDEX (D-U-N-S® {COMPANY_DATA.dunsNumber})</strong>, we specialize in Civil Construction Suite applications, high-performance Next.js web applications, native Android software, and custom AI systems engineered by Engr. Moawia Husnain.
        </p>
      </div>

      {/* Founder Spotlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl relative">
              <img
                src={TEAM_DATA[0].image}
                alt={COMPANY_DATA.founder}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800">
                <div className="text-lg font-bold text-white">{COMPANY_DATA.founder}</div>
                <div className="text-xs text-cyan-400 font-semibold">{COMPANY_DATA.education}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
              Founder & Managing Director Vision
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              "Connecting Civil Engineering Rigor with Cutting-Edge Software & AI."
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded by <strong className="text-slate-900 dark:text-white">Engr. Moawia Husnain</strong> (BS Civil Engineering & MSc Construction Management student at UET Lahore), <strong>BUILDEX</strong> was established to engineer industry-leading software solutions, civil calculation suites, and intelligent software products.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              With registered D-U-N-S® number <strong>31-239-5963</strong>, BUILDEX delivers audited, secure, and Play Store compliant applications trusted by engineers, contractors, and global software clients.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>MSc Construction Mgmt (UET Lahore)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>BS Civil Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>D-U-N-S® Registered: 31-239-5963</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Play Store Verified Developer</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={COMPANY_DATA.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-colors shadow-md"
              >
                Chat with Engr. Moawia on WhatsApp
              </a>
              <a
                href={`mailto:${COMPANY_DATA.email}`}
                className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
              >
                Send Direct Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-cyan-400">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            To empower global enterprises and visionary entrepreneurs by delivering fast, scalable, secure, and beautiful digital software platforms that drive real business growth.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-blue-600 dark:text-cyan-400">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            To become the leading software development agency known for integrating AI agents, cloud architectures, and luxury web design into seamless unified ecosystems.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">Pillars of Excellence</span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">Our Core Engineering Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={v.title} className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
              <span className="text-xs font-bold text-blue-600 dark:text-cyan-400">0{i + 1}.</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">{v.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Head Office */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-cyan-400">
              <MapPin className="w-4 h-4" />
              <span>Headquarters Location</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Lodhran, Punjab, Pakistan</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Serving international partners across North America, United Kingdom, United Arab Emirates, Europe, and Asia.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors shrink-0 shadow-md"
          >
            Contact Head Office
          </Link>
        </div>
      </div>
    </div>
  );
}
