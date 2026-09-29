import React from 'react';
import { Metadata } from 'next';
import { COMPANY_DATA } from '@/data/mockData';
import { Smartphone, Download, CheckCircle2, ShieldCheck, Building, Calculator, Compass, FileSpreadsheet, Layers, Sparkles, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Civil Construction Suite - #1 Civil Engineering Calculator App for Android',
  description: 'Download Civil Construction Suite (Package: com.moawiahussnain.civilconstructionsuite) on Google Play. 130+ calculators for concrete volume, steel weight, land surveying, and BOQ estimation.',
  keywords: [
    'Civil Construction Suite',
    'com.moawiahussnain.civilconstructionsuite',
    'Civil Engineering Calculator App',
    'Concrete Volume Estimator',
    'Bar Bending Schedule BBS Calculator',
    'Land Surveying Leveling App',
    'Buildex Mobile App',
    'Engr Moawia Husnain',
  ],
  openGraph: {
    title: 'Civil Construction Suite - #1 Civil Engineering Calculator App',
    description: 'Download Civil Construction Suite on Google Play Store. 130+ calculators for site engineers & surveyors.',
    url: 'https://moawiahusnain.engineer/civil-construction-suite',
    images: ['https://moawiahusnain.engineer/buildex-logo.jpg'],
  },
};

export default function CivilConstructionSuitePage() {
  const modules = [
    {
      icon: <Building className="w-6 h-6 text-amber-500" />,
      title: '1. Material & Quantity Takeoff',
      items: [
        'Concrete Volume Calculator (Slabs, Beams, Columns, Footings)',
        'Brick & Masonry Calculator (Mortar ratio & plaster thickness)',
        'Tile, Paint Coverage & Road Asphalt Quantity Estimator',
      ],
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: '2. Structural Steel & Rebar BBS',
      items: [
        'Rebar Cutting Length, Lapping & Bar Bending Schedule (BBS)',
        'Weight estimation for Round Bars, Pipes, Square Tubes & Plates',
        'Structural Sections: I-Beams, H-Beams, C-Channels & Angles',
      ],
    },
    {
      icon: <Compass className="w-6 h-6 text-emerald-400" />,
      title: '3. Land Surveying & Topographic Tools',
      items: [
        'Height of Instrument (HI) and Rise & Fall Leveling methods',
        'Bowditch Traverse Adjustments & Latitude/Departure tools',
        'Earthwork Cut-and-Fill Excavation Volume Estimator',
      ],
    },
    {
      icon: <Calculator className="w-6 h-6 text-indigo-400" />,
      title: '4. Foundation Design & Geotechnical',
      items: [
        'Soil Bearing Capacity (Meyerhof & Terzaghi Equations)',
        'Isolated, Combined, Strip, Raft & Pile Foundation Settlement',
        'Soil Mechanics: Moisture Content, Dry Density & Permeability',
      ],
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-blue-400" />,
      title: '5. On-Site Digital Tools & BOQ PDF Export',
      items: [
        'Digital Spirit Level & 360° Magnetic Compass',
        'Bill of Quantities (BOQ) Generator with Clean PDF Export',
        '120+ Construction Site Thumb Rules for Instant Verification',
      ],
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* App Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Buildex Play Store Application</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Civil Construction Suite
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              The #1 all-in-one <strong>Civil Engineering Calculator</strong> and site estimation app engineered for Android by <strong>Buildex (DUNS 31-239-5963)</strong> & Engr. Moawia Husnain (BS Civil Engineering, MSc Construction Management at UET Lahore).
            </p>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-300 shadow-sm">
              <div><strong className="text-slate-900 dark:text-white">Package Name:</strong> <code className="text-cyan-400 font-mono">com.moawiahussnain.civilconstructionsuite</code></div>
              <div><strong className="text-slate-900 dark:text-white">Publisher:</strong> BUILDEX (D-U-N-S® 31-239-5963 | FBR Reg: 3620307463467)</div>
              <div><strong className="text-slate-900 dark:text-white">Compatibility:</strong> 100% Offline Capability | Imperial & Metric Units</div>
            </div>

            {/* Direct Play Store Download Button */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.moawiahussnain.civilconstructionsuite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl hover:scale-105 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download on Google Play Store</span>
              </a>

              <a
                href="/privacy_policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-xs transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Play Store Privacy Policy</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 sm:w-80 rounded-3xl overflow-hidden border-4 border-amber-500/40 shadow-2xl p-4 bg-slate-950 text-center space-y-4">
              <img
                src="/buildex-logo.jpg"
                alt="Civil Construction Suite Logo"
                className="w-40 h-40 object-contain mx-auto rounded-2xl p-2 bg-slate-900 border border-slate-800"
              />
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Civil Construction Suite</h3>
                <p className="text-xs text-amber-500 font-semibold">Package: com.moawiahussnain.civilconstructionsuite</p>
                <p className="text-[11px] text-slate-400">By Engr. Moawia Husnain (UET Lahore)</p>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.moawiahussnain.civilconstructionsuite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Get App on Play Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Comprehensive Engineering Tools</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">130+ Calculators Across 13 Modules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div key={m.title} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    {m.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{m.title}</h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  {m.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Play Store Link Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Install Civil Construction Suite Today</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Verified Play Store published Android app with 130+ calculators, 100% offline functionality, and instant PDF exports.
            </p>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.moawiahussnain.civilconstructionsuite"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0 shadow-md flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Install from Play Store</span>
          </a>
        </div>

      </div>
    </div>
  );
}
