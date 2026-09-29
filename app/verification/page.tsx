import React from 'react';
import { Metadata } from 'next';
import { COMPANY_DATA, VERIFICATION_DATA } from '@/data/mockData';
import { ShieldCheck, CheckCircle2, FileText, Building2, MapPin, Mail, Phone, ExternalLink, Award, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Official Business Verification & DUNS Profile - Buildex (DUNS 31-239-5963)',
  description: 'Verified corporate registration profile for Buildex (D-U-N-S® 31-239-5963 | FBR Reg: 3620307463467), founded by Engr. Moawia Husnain.',
};

export default function VerificationPage() {
  return (
    <div className="pt-28 pb-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-950/80 border border-blue-200 dark:border-cyan-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>D-U-N-S® & FBR Registered Business Profile</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Buildex Legal Registration & Verification
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Official corporate profile for Google Play Console review teams, Dun & Bradstreet verification, and international enterprise partners.
          </p>
        </div>

        {/* Corporate Identity Banner Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl p-2 bg-slate-950 flex items-center justify-center">
              <img
                src="/buildex-logo.jpg"
                alt="Buildex Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">BUILDEX</h2>
              <p className="text-xs text-amber-500 font-bold uppercase tracking-widest mt-1">D-U-N-S® 31-239-5963</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 pt-6 md:pt-0 md:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified Sole Proprietorship & Play Store Developer</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Engr. Moawia Husnain (Proprietor & Founder)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              BS Civil Engineer | MSc Construction Management Student at UET Lahore (University of Engineering & Technology Lahore).
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Buildex is an officially registered software publishing and mobile application development business engaged in Play Store publishing, Civil Construction Suite calculation tools, Next.js web applications, and custom AI systems.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300">
                FBR Reg / CNIC: {VERIFICATION_DATA.fbrRegistrationNo}
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300">
                Date of Reg: {VERIFICATION_DATA.dateOfRegistration}
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300">
                Legal Form: {VERIFICATION_DATA.legalStructure}
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
              <a
                href={COMPANY_DATA.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={COMPANY_DATA.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed DUNS & FBR Verification Table */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Complete Corporate Verification Record</h3>
                <p className="text-xs text-slate-500">Official Government & Business Data Metrics</p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
              Active Verified Entity
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">Company Name</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.companyName}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">D-U-N-S® Number</span>
              <p className="font-bold text-amber-500 text-sm">{VERIFICATION_DATA.dunsNumber}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">FBR Registration Number (Form 181)</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.fbrRegistrationNo}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">Line of Business</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.lineOfBusiness}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1 md:col-span-2">
              <span className="text-slate-400 font-medium">Registered Business Address</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.registeredAddress}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">Proprietor & Legal Representative</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.proprietor}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">Legal Structure / Form</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.legalStructure}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">Telephone Number</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.tel}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">Official Business Email</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.email}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">Employee Size</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.employeeRange}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">Import / Export Status</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.importExport}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">Date of Registration</span>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{VERIFICATION_DATA.dateOfRegistration}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1">
              <span className="text-slate-400 font-medium">Annual Revenue Status</span>
              <p className="font-bold text-emerald-400 text-sm">{VERIFICATION_DATA.annualRevenue}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1 md:col-span-2">
              <span className="text-slate-400 font-medium">Official Website</span>
              <a href={VERIFICATION_DATA.website} target="_blank" rel="noreferrer" className="font-bold text-blue-600 dark:text-cyan-400 text-sm underline flex items-center gap-1">
                <span>{VERIFICATION_DATA.website}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Footer Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white">Google Play Store Developer Review Policies</h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Inspect our Play Store Developer Policy compliance declarations, privacy policy, and developer contact details.
            </p>
          </div>
          <a
            href="/privacy_policy.html"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0 shadow-md"
          >
            Inspect Privacy Policy
          </a>
        </div>

      </div>
    </div>
  );
}
