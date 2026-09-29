import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';
import { COMPANY_DATA } from '@/data/mockData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_DATA.name} | International Software & AI Agency`,
    template: `%s | ${COMPANY_DATA.name}`,
  },
  description: COMPANY_DATA.description,
  keywords: [
    'Software Development Company',
    'Vertex Studio',
    'Moawia Husnain',
    'Next.js Web Apps',
    'Android App Development',
    'Python Web Scraping',
    'AI Solutions & RAG Agents',
    'Firebase Backend Cloud',
    'UI/UX Design Studio',
    'Lodhran Software Company',
    'Pakistan Tech Agency',
  ],
  authors: [{ name: COMPANY_DATA.founder }],
  creator: COMPANY_DATA.founder,
  publisher: COMPANY_DATA.name,
  metadataBase: new URL('https://moawiahusnain.engineer'),
  openGraph: {
    title: `${COMPANY_DATA.name} | Civil Construction Suite & Mobile App Publishing`,
    description: COMPANY_DATA.description,
    url: 'https://moawiahusnain.engineer',
    siteName: COMPANY_DATA.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://moawiahusnain.engineer/buildex-logo.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY_DATA.name} (DUNS 31-239-5963) Mobile App Publishing`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_DATA.name} | Civil Construction Suite & Mobile App Publishing`,
    description: COMPANY_DATA.description,
    creator: '@buildex',
    images: ['https://moawiahusnain.engineer/buildex-logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider>
          <SchemaMarkup />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
