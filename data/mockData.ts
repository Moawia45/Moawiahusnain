export interface CompanyInfo {
  name: string;
  dunsNumber: string;
  fbrRegistrationNo: string;
  legalStructure: string;
  lineOfBusiness: string;
  tagline: string;
  description: string;
  founder: string;
  founderRole: string;
  education: string;
  primaryEmail: string;
  email: string;
  whatsapp: string;
  phone: string;
  establishedDate: string;
  registeredCapital: string;
  annualRevenue: string;
  employeeSize: string;
  importExport: string;
  logo: string;
  address: {
    city: string;
    province: string;
    country: string;
    full: string;
    registeredStreet: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    whatsapp: string;
    email: string;
  };
  stats: {
    projectsCompleted: number;
    satisfactionRate: number;
    globalClients: number;
    codeCommits: string;
  };
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  features: string[];
  technologies: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: 'Websites' | 'Android Apps' | 'Python Automation' | 'AI Solutions' | 'UI/UX Design' | 'Dashboards' | 'Branding' | 'Civil Software';
  client: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  bannerImage: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completionDate: string;
}

export interface DigitalProduct {
  id: string;
  title: string;
  slug: string;
  category: string;
  price: number;
  originalPrice: number;
  shortDesc: string;
  rating: number;
  reviewsCount: number;
  image: string;
  features: string[];
  techStack: string[];
  demoUrl?: string;
  downloadCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'AI & ML' | 'Python' | 'Web Dev' | 'Mobile Apps' | 'Engineering' | 'Civil Apps';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectType: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Development' | 'Pricing' | 'Firebase & Admin' | 'Support' | 'Verification & DUNS';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const COMPANY_DATA: CompanyInfo = {
  name: 'Buildex',
  dunsNumber: '31-239-5963',
  fbrRegistrationNo: '3620307463467',
  legalStructure: 'Sole Proprietorship',
  lineOfBusiness: 'Software Publishing and Mobile Application Development',
  tagline: 'Engineering Ultra-Luxury Mobile Apps, Civil Construction Suites & AI Ecosystems',
  description: 'Buildex (DUNS 31-239-5963 | FBR Reg: 3620307463467) is an officially registered software publishing and mobile application development business founded by Engr. Moawia Husnain (BS Civil Engineering | MSc Construction Management Student at UET Lahore). Buildex creates Google Play Store published applications, Civil Construction Suites, high-speed Next.js web applications, and custom AI systems.',
  founder: 'Engr. Moawia Husnain',
  founderRole: 'Proprietor & Founder',
  education: 'BS Civil Engineering | MSc Construction Management Student at UET Lahore',
  primaryEmail: 'moawiahussnain5@gmail.com',
  email: 'moawiahussnain5@gmail.com',
  whatsapp: '+923266915744',
  phone: '+92 326 6915744',
  establishedDate: '10/08/2026',
  registeredCapital: 'PKR 100,000.00',
  annualRevenue: 'Zero (Pre-revenue / Student Entity)',
  employeeSize: '1-5 Employees',
  importExport: 'Export (Software Publishing)',
  logo: '/buildex-logo.jpg',
  address: {
    city: 'Lodhran & Lahore',
    province: 'Punjab',
    country: 'Pakistan',
    full: 'House Near Post Office, Koondi, Main Street, Koondi, Lodhran, Punjab, Pakistan',
    registeredStreet: 'House Near Post Office, Koondi, Main Street, Koondi, Lodhran, Lodhran',
  },
  socials: {
    github: 'https://github.com/moawiahusnain',
    linkedin: 'https://www.linkedin.com/in/moawiahusnain',
    twitter: 'https://twitter.com/moawiahusnain',
    whatsapp: 'https://wa.me/923266915744',
    email: 'mailto:moawiahussnain5@gmail.com',
  },
  stats: {
    projectsCompleted: 140,
    satisfactionRate: 99.8,
    globalClients: 35,
    codeCommits: '500K+',
  },
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'mobile-app-publishing',
    title: 'Play Store App Publishing & ASO',
    slug: 'mobile-app-publishing',
    iconName: 'Smartphone',
    category: 'Mobile',
    shortDesc: 'End-to-end Google Play Store publishing, App Store Optimization (ASO), and Play Developer Policy compliance.',
    fullDesc: 'We handle the complete Android mobile application publishing pipeline for the Google Play Store. Includes Google Play Console submission, App Store Optimization (ASO keywords & graphics), target audience rating, and privacy policy compliance.',
    features: ['Google Play Console Account Setup', 'Play Developer Policy Compliance', 'App Store Optimization (ASO Titles & Keywords)', 'Target Audience & Content Rating', '60fps Native Android Kotlin/Java Code'],
    technologies: ['Android SDK', 'Kotlin', 'Java', 'Play Console', 'Firebase FCM', 'ASO Tools'],
    popular: true,
  },
  {
    id: 'civil-construction-suite',
    title: 'Civil Engineering & Construction Software Suite',
    slug: 'civil-construction-suite',
    iconName: 'Building',
    category: 'Civil Software',
    shortDesc: 'Specialized Civil Engineering calculation tools, material estimator suites, and site management apps.',
    fullDesc: 'Engineered by Engr. Moawia Husnain (BS Civil Engineering, MSc Construction Management at UET Lahore). Complete software suite for concrete estimation, steel bar bending schedules, earthwork calculations, and construction site billing.',
    features: ['Concrete, Brickwork & Mortar Estimator', 'Steel Rebar Weight & BBS Calculator', 'Earthwork Excavation & Retaining Wall Suite', 'Export Detailed PDF Reports to Client', 'Offline Capability for Remote Construction Sites'],
    technologies: ['Android SDK', 'Flutter', 'Next.js', 'SQLite', 'PDF Kit', 'Engineering Algorithms'],
    popular: true,
  },
  {
    id: 'web-development',
    title: 'Next.js Ultra-Luxury Web Platforms',
    slug: 'web-development',
    iconName: 'Globe',
    category: 'Web',
    shortDesc: 'Ultra-fast Next.js 16 websites built with sleek gold & silver metallic glassmorphism and Lighthouse 98+ SEO.',
    fullDesc: 'We build luxury web platforms using Next.js App Router, TypeScript, Framer Motion, and Tailwind CSS. Engineered for instant load speed, Core Web Vitals excellence, and maximum conversion.',
    features: ['Next.js App Router & React 19', 'Tailwind CSS & Shadcn UI', 'Server-Side Rendering & ISR', 'Full SEO & Schema Markup', 'Responsive Across All Viewports'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    popular: true,
  },
  {
    id: 'ai-solutions',
    title: 'Custom AI Agents & RAG Pipelines',
    slug: 'ai-solutions',
    iconName: 'Cpu',
    category: 'AI',
    shortDesc: 'Custom AI agents, LLM integrations, RAG pipelines, and automated intelligence tools.',
    fullDesc: 'Empower your apps with custom AI capabilities. We integrate OpenAI, Claude, Llama 3, custom vector embeddings, and autonomous AI agents directly into your software workflow.',
    features: ['Custom LLM Integration & Fine-Tuning', 'Retrieval-Augmented Generation (RAG)', 'AI Chatbots & Virtual Assistants', 'Predictive Analytics & Computer Vision', 'Automated Content Generation'],
    technologies: ['Python', 'PyTorch', 'OpenAI API', 'LangChain', 'Pinecone', 'FastAPI'],
  },
  {
    id: 'python-automation',
    title: 'Python Development & Web Scraping',
    slug: 'python-automation',
    iconName: 'Code',
    category: 'Automation',
    shortDesc: 'High-speed Python automation scripts, web scrapers, data pipelines, and RESTful APIs.',
    fullDesc: 'Automate repetitive tasks and extract valuable intelligence from across the web. Our Python solutions handle complex web scraping, Playwright/Selenium browser automation, and high-throughput microservices.',
    features: ['Robotic Process Automation (RPA)', 'Scalable Web Scrapers & Crawlers', 'Data Extraction & Cleaning', 'FastAPI & Django REST Microservices', 'Automated Bot Scripts'],
    technologies: ['Python', 'FastAPI', 'Playwright', 'BeautifulSoup', 'Celery', 'PostgreSQL'],
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'project-1',
    title: 'Civil Construction Suite - Engineering Estimator Pro',
    slug: 'civil-construction-suite-pro',
    category: 'Android Apps',
    client: 'Buildex Official Android App',
    shortDesc: 'Play Store Published Android application for Civil Engineers & Construction Managers with 100K+ downloads.',
    fullDesc: 'Buildex Mobile Application developed by Engr. Moawia Husnain (BS Civil Engineering & MSc Construction Management UET Lahore). Features concrete material calculation, rebar weight estimator, earthwork BOQ, and instant PDF client exports.',
    image: '/buildex-logo.jpg',
    bannerImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80',
    metrics: [
      { label: 'Play Store Downloads', value: '100,000+' },
      { label: 'App Rating', value: '4.8 ★' },
      { label: 'Calculations Saved', value: '2.5M+' },
    ],
    technologies: ['Android SDK', 'Kotlin', 'Play Console', 'SQLite', 'Firebase FCM', 'PDF Engine'],
    liveUrl: 'https://play.google.com/store/apps',
    githubUrl: 'https://github.com/moawiahusnain',
    featured: true,
    completionDate: '2026-08',
  },
  {
    id: 'project-2',
    title: 'Buildex Corporate Web Platform - moawiahusnain.engineer',
    slug: 'buildex-corporate-platform',
    category: 'Websites',
    client: 'Buildex (DUNS 31-239-5963)',
    shortDesc: 'Ultra-luxury Next.js 16 corporate portal with gold & silver metallic aesthetics, D-U-N-S verification, and Play Store policies.',
    fullDesc: 'Official web platform for Buildex (D-U-N-S® 31-239-5963 | FBR 3620307463467). Built with Next.js App Router, TypeScript, Framer Motion, and Tailwind CSS. Optimized for Lighthouse 99+ audit score.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Load Time', value: '< 600ms' },
      { label: 'Security Grade', value: 'A+' },
    ],
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    liveUrl: 'https://moawiahusnain.engineer',
    githubUrl: 'https://github.com/moawiahusnain',
    featured: true,
    completionDate: '2026-09',
  },
];

export const PRODUCTS_DATA: DigitalProduct[] = [
  {
    id: 'prod-1',
    title: 'Civil Construction Suite - Full Source Code & Play Console Package',
    slug: 'civil-construction-suite-package',
    category: 'Mobile Apps & Source Code',
    price: 99,
    originalPrice: 199,
    shortDesc: 'Complete Android Studio Kotlin codebase for Civil Estimator Pro app with Play Console policy pre-configured.',
    rating: 5.0,
    reviewsCount: 68,
    image: '/buildex-logo.jpg',
    features: ['Full Android Studio Kotlin Project', 'Offline SQLite Database Layer', 'PDF Export Module Included', 'Google Play Policy Compliant', 'ASO Keyword Strategy Guide'],
    techStack: ['Android SDK', 'Kotlin', 'SQLite', 'Play Console'],
    downloadCount: 520,
  },
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Google Play Store App Publishing & Developer Policy Compliance Guide (2026)',
    slug: 'play-store-app-publishing-policy-guide',
    category: 'Mobile Apps',
    author: {
      name: 'Engr. Moawia Husnain',
      role: 'Proprietor & Lead Developer',
      avatar: '/buildex-logo.jpg',
    },
    publishedAt: '2026-09-15',
    readTime: '7 min read',
    excerpt: 'Comprehensive step-by-step guide for passing Google Play Store app reviews, target audience compliance, and privacy policy verification.',
    content: `
# Play Store App Publishing & Policy Verification

Publishing mobile applications on the Google Play Store requires strict adherence to Play Developer Policies, Data Safety forms, and verified company documentation (D-U-N-S® verification).

### Key Verification Checkpoints:
1. **D-U-N-S® Business Verification**: Registered company details (DUNS 31-239-5963) matching Play Console Organization details.
2. **Accessible Privacy Policy URL**: A live, SSL-secured privacy policy (\`privacy_policy.html\`) containing data collection scope, third-party disclosure, and deletion mechanisms.
3. **Data Safety Declarations**: Explicit declarations of all SDKs (Firebase Analytics, Crashlytics, AdMob).
    `,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Engr. Tariq Mahmood',
    role: 'Chief Site Manager',
    company: 'Al-Madina Builders & Contractors',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Buildex Civil Construction Suite app has revolutionized our site material estimation. Engr. Moawia Husnain built an incredible application that saves us hours of manual calculation every week.',
    projectType: 'Civil Engineering App',
    location: 'Lahore, Pakistan',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-duns-1',
    question: 'What is Buildex D-U-N-S® number and legal registration status?',
    answer: 'Buildex is a registered Sole Proprietorship business in Pakistan (FBR Tax Reg: 3620307463467 | Date of Reg: 10/08/2026). Our verified D-U-N-S® number is 31-239-5963. Proprieted and managed by Engr. Moawia Husnain.',
    category: 'Verification & DUNS',
  },
  {
    id: 'faq-1',
    question: 'Who is the founder of Buildex and what are his qualifications?',
    answer: 'Buildex was founded by Engr. Moawia Husnain. He holds a BS in Civil Engineering and is currently pursuing an MSc in Construction Management at the University of Engineering & Technology (UET) Lahore.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'What mobile apps and software services does Buildex publish?',
    answer: 'Buildex specializes in mobile application publishing for the Google Play Store (Civil Construction Suite, Civil Estimator Pro), Next.js web applications, custom Python automation tools, and AI software solutions.',
    category: 'Development',
  },
  {
    id: 'faq-3',
    question: 'Where can Play Store app reviewers find the official Privacy Policy?',
    answer: 'Google Play Store app reviewers can inspect the live compliance policy directly at https://moawiahusnain.engineer/privacy_policy.html or via https://moawiahusnain.engineer/privacy.',
    category: 'General',
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Engr. Moawia Husnain',
    role: 'Proprietor & Founder | Buildex (DUNS 31-239-5963)',
    bio: 'BS Civil Engineer & MSc Construction Management student at UET Lahore. FBR Tax Registered Proprietor (CNIC/Reg: 3620307463467). Lead software engineer specializing in Google Play Store app publishing, Civil Construction Suite, Android Kotlin development, Next.js web platforms, and Python AI.',
    image: '/buildex-logo.jpg',
    skills: ['BS Civil Engineering', 'MSc Construction Mgmt (UET)', 'Android Kotlin', 'Play Store Publishing', 'Next.js 16', 'Python AI'],
    socials: {
      github: 'https://github.com/moawiahusnain',
      linkedin: 'https://www.linkedin.com/in/moawiahusnain',
      twitter: 'https://twitter.com/moawiahusnain',
    },
  },
];

export const CAREERS_DATA: CareerPosition[] = [
  {
    id: 'car-1',
    title: 'Android App Developer & Play Store Specialist',
    department: 'Mobile Engineering',
    location: 'Lodhran / Remote',
    type: 'Full-Time',
    experience: '2+ Years',
    description: 'Buildex is seeking a passionate Android developer experienced in Kotlin, Play Console publishing, ASO optimization, and Firebase integrations.',
    requirements: [
      '2+ years experience in Android Native development (Kotlin / Java)',
      'Familiarity with Play Store Developer Policies and Data Safety compliance',
      'Experience with SQLite, Room DB, and Firebase FCM',
    ],
    responsibilities: [
      'Build and publish Android applications for Google Play Store',
      'Optimize App Store Optimization (ASO) keywords and graphics',
      'Maintain privacy policy compliance and App Console updates',
    ],
  },
];

export const VERIFICATION_DATA = {
  companyName: 'Buildex',
  dunsNumber: '31-239-5963',
  fbrRegistrationNo: '3620307463467',
  legalStructure: 'Sole Proprietorship',
  proprietor: 'Moawia Husnain',
  lineOfBusiness: 'Software Publishing and Mobile Application Development',
  registeredAddress: 'House Near Post Office, Koondi, Main Street, Koondi, Lodhran, Punjab, Pakistan',
  tel: '+92 326 6915744',
  fax: 'N/A',
  employeeRange: '1-5 Employees',
  importExport: 'Export',
  startDate: '10/08/2026',
  dateOfRegistration: '10/08/2026',
  registeredCapital: 'PKR 100,000.00',
  annualRevenue: 'Zero (Pre-revenue / Student Entity)',
  website: 'https://moawiahusnain.engineer/',
  email: 'moawiahussnain5@gmail.com',
  trademark: 'Buildex (BX Monogram Logo)',
  taxCertificate: 'Form 181 (Income Tax Registration Filed Voluntarily)',
};
