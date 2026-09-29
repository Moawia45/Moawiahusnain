import React from 'react';
import { Metadata } from 'next';
import { COMPANY_DATA } from '@/data/mockData';
import { ShieldCheck, Building, GraduationCap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - BUILDEX (DUNS 31-239-5963) & Civil Construction Suite',
  description: 'Official privacy policy for BUILDEX apps, Civil Construction Suite, and software services created by Engr. Moawia Husnain.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-950 border border-blue-200 dark:border-cyan-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Google Play Store Compliance Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Privacy Policy - BUILDEX & Mobile Applications
          </h1>
          <p className="text-xs text-slate-500">Effective Date: September 2026 | Last Updated: September 29, 2026</p>
        </div>

        {/* Registered Entity Box */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-md">
          <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-bold text-base">
            <Building className="w-5 h-5" />
            <span>Registered Entity & Registration Details</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 text-slate-700 dark:text-slate-300">
            <div>
              <strong className="text-slate-900 dark:text-white">Company Name:</strong> {COMPANY_DATA.name}
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white">D-U-N-S® Number:</strong> {COMPANY_DATA.dunsNumber}
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white">Founder & CEO:</strong> {COMPANY_DATA.founder}
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white">Qualifications:</strong> {COMPANY_DATA.education}
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            Official Privacy URL: <a href="/privacy_policy.html" className="text-blue-600 dark:text-cyan-400 font-semibold underline">https://moawiahusnain.engineer/privacy_policy.html</a>
          </p>
        </div>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Introduction & Overview</h2>
          <p>
            At <strong>{COMPANY_DATA.name}</strong> (D-U-N-S® {COMPANY_DATA.dunsNumber}), founded by {COMPANY_DATA.founder}, we respect user privacy. This policy covers all mobile applications published under our developer account, including the <strong>Civil Construction Suite</strong>, Civil Estimator Pro, and custom engineering web applications.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>User Calculations & Inputs:</strong> Quantity estimations, material dimensions, and calculation data entered by users are processed locally on the device.</li>
            <li><strong>Technical Diagnostics:</strong> Anonymized crash logs and device metrics used strictly to optimize performance across Android OS versions.</li>
            <li><strong>Contact Inquiries:</strong> Contact information provided when requesting technical support or custom software proposals.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Device Permissions Required</h2>
          <p>Our mobile apps require minimal permissions to function properly:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Storage Permission:</strong> To save exported PDF calculation reports and project backups locally.</li>
            <li><strong>Internet Access:</strong> To sync project data and load online civil engineering converters.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Data Security & Third-Party Protection</h2>
          <p>
            We do <strong>NOT</strong> sell, trade, or share personal data with external third parties. Any cloud synchronization is protected via encrypted SSL protocol and Firebase cloud infrastructure.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. User Data Rights & Contact Info</h2>
          <p>
            You can request data deletion or inquire about Google Play app reviews at any time by reaching out:
          </p>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 space-y-2 text-xs">
            <div><strong>Company:</strong> {COMPANY_DATA.name} (DUNS {COMPANY_DATA.dunsNumber})</div>
            <div><strong>Founder:</strong> {COMPANY_DATA.founder} ({COMPANY_DATA.education})</div>
            <div><strong>Email:</strong> <a href={`mailto:${COMPANY_DATA.email}`} className="text-blue-600 dark:text-cyan-400 font-semibold">{COMPANY_DATA.email}</a></div>
            <div><strong>WhatsApp:</strong> {COMPANY_DATA.phone}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
