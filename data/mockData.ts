export interface CompanyInfo {
  name: string;
  dunsNumber: string;
  tagline: string;
  description: string;
  founder: string;
  founderRole: string;
  education: string;
  email: string;
  whatsapp: string;
  phone: string;
  address: {
    city: string;
    province: string;
    country: string;
    full: string;
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
  category: 'Websites' | 'Android Apps' | 'Python Automation' | 'AI Solutions' | 'UI/UX Design' | 'Dashboards' | 'Branding';
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
  category: 'AI & ML' | 'Python' | 'Web Dev' | 'Mobile Apps' | 'Engineering';
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
  category: 'General' | 'Development' | 'Pricing' | 'Firebase & Admin' | 'Support';
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
  location: string; // Remote, On-site, Hybrid
  type: string; // Full-time, Contract
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const COMPANY_DATA: CompanyInfo = {
  name: 'BUILDEX',
  dunsNumber: '31-239-5963',
  tagline: 'Engineering Civil Construction Apps, AI & Premium Software Ecosystems',
  description: 'BUILDEX (D-U-N-S® 31-239-5963) is a registered engineering and software development company founded by Engr. Moawia Husnain (BS Civil Engineering, MSc Construction Management Student at UET Lahore). We specialize in Civil Construction Suite apps, Next.js web platforms, native Android solutions, and custom AI systems.',
  founder: 'Engr. Moawia Husnain',
  founderRole: 'Founder & Chief Executive Officer',
  education: 'BS Civil Engineering | MSc Construction Management Student at UET Lahore',
  email: 'moawiahussnain2@gmail.com',
  whatsapp: '+923266915744',
  phone: '+92 326 6915744',
  address: {
    city: 'Lahore & Lodhran',
    province: 'Punjab',
    country: 'Pakistan',
    full: 'Headquarters: UET Lahore & Lodhran, Punjab, Pakistan',
  },
  socials: {
    github: 'https://github.com/moawiahusnain',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    whatsapp: 'https://wa.me/923266915744',
    email: 'mailto:moawiahussnain2@gmail.com',
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
    id: 'web-development',
    title: 'Custom Website Development',
    slug: 'web-development',
    iconName: 'Globe',
    category: 'Web',
    shortDesc: 'Ultra-fast, responsive Next.js websites built with sleek glassmorphism and world-class SEO.',
    fullDesc: 'We craft bespoke web experiences that leave a lasting impression. Using Next.js App Router, TypeScript, Framer Motion, and Tailwind CSS, we build websites optimized for instant load speed, conversion, and global reach.',
    features: ['Next.js App Router & React', 'Tailwind CSS & Shadcn UI', 'Server-Side Rendering & ISR', 'Full SEO & Schema Markup', 'Responsive Across All Viewports'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    popular: true,
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile & Android App Development',
    slug: 'mobile-app-dev',
    iconName: 'Smartphone',
    category: 'Mobile',
    shortDesc: 'Native Android and cross-platform mobile apps with smooth 60fps animations and offline capability.',
    fullDesc: 'Transforming ideas into polished Android and cross-platform mobile applications. From sleek native UI to complex API integrations, background services, and real-time push notifications.',
    features: ['Native Android & Kotlin/Java', 'Flutter & React Native Cross-Platform', 'Firebase Cloud Messaging & Push', 'Offline Data Synchronization', 'Play Store Deployment Ready'],
    technologies: ['Android SDK', 'Flutter', 'Kotlin', 'React Native', 'Firebase', 'SQLite'],
    popular: true,
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Machine Learning',
    slug: 'ai-solutions',
    iconName: 'Cpu',
    category: 'AI',
    shortDesc: 'Custom AI agents, LLM integrations, RAG pipelines, and intelligent automated workflows.',
    fullDesc: 'Empower your business with cutting-edge AI capabilities. We integrate OpenAI, Claude, Llama 3, custom embeddings, vector databases, and autonomous AI agents directly into your software workflow.',
    features: ['Custom LLM Integration & Fine-Tuning', 'Retrieval-Augmented Generation (RAG)', 'AI Chatbots & Virtual Assistants', 'Predictive Analytics & Computer Vision', 'Automated Content Generation'],
    technologies: ['Python', 'PyTorch', 'OpenAI API', 'LangChain', 'Pinecone', 'FastAPI'],
    popular: true,
  },
  {
    id: 'python-automation',
    title: 'Python Development & Web Scraping',
    slug: 'python-automation',
    iconName: 'Code',
    category: 'Automation',
    shortDesc: 'High-speed Python automation scripts, web scrapers, data pipelines, and RESTful APIs.',
    fullDesc: 'Automate repetitive tasks and extract valuable intelligence from across the web. Our Python solutions handle complex web scraping, browser automation (Playwright/Selenium), ETL pipelines, and high-performance APIs.',
    features: ['Robotic Process Automation (RPA)', 'Scalable Web Scrapers & Crawlers', 'Data Extraction & Cleaning', 'FastAPI & Django REST Microservices', 'Automated Bot Scripts'],
    technologies: ['Python', 'FastAPI', 'Playwright', 'BeautifulSoup', 'Celery', 'PostgreSQL'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Brand Identity Design',
    slug: 'ui-ux-design',
    iconName: 'Palette',
    category: 'Design',
    shortDesc: 'Luxury UI designs, interactive prototypes, design systems, and cohesive brand collateral.',
    fullDesc: 'Design is not just how it looks—it is how it feels and converts. We build scalable design systems, interactive prototypes in Figma, stunning dark-mode interfaces, and premium brand identities.',
    features: ['Figma High-Fidelity Wireframes', 'Interactive Prototypes & Micro-Interactions', 'Design System Architecture', 'Brand Logos & Visual Guidelines', 'User Journey & Conversion Funnels'],
    technologies: ['Figma', 'Adobe CC', 'Principle', 'Spline 3D', 'Tailwind tokens'],
  },
  {
    id: 'dashboards-admin',
    title: 'Custom Admin Panels & Dashboards',
    slug: 'dashboards-admin',
    iconName: 'LayoutDashboard',
    category: 'Enterprise',
    shortDesc: 'Real-time analytics dashboards, role-based access control, and intuitive management portals.',
    fullDesc: 'Gain total control over your business metrics and app content. We build custom admin dashboards with Firebase/Supabase backends, real-time charts, role-based permissions, and content management tools.',
    features: ['Real-Time Data Visualization (Recharts/Chart.js)', 'Role-Based Access Control (RBAC)', 'CRUD Content Management', 'Export to PDF/Excel Reports', 'Firebase & PostgreSQL Sync'],
    technologies: ['Next.js', 'Firebase', 'Tailwind', 'Shadcn UI', 'TanStack Query', 'Recharts'],
  },
  {
    id: 'cloud-firebase',
    title: 'Cloud Integration & Firebase Development',
    slug: 'cloud-firebase',
    iconName: 'Cloud',
    category: 'Cloud',
    shortDesc: 'Scalable cloud serverless architecture, Firestore database rules, and instant sync backends.',
    fullDesc: 'Architecting secure, auto-scaling cloud backends. We leverage Firebase Authentication, Firestore DB, Cloud Functions, Storage, and AWS microservices for instant data synchronization.',
    features: ['Firebase Auth (Email, Social, Phone)', 'Firestore Realtime Database & Security Rules', 'Cloud Functions & Serverless Workers', 'S3 & Firebase File Storage', 'CDN Optimization & Edge Deployment'],
    technologies: ['Firebase', 'AWS', 'Google Cloud', 'Docker', 'Serverless', 'Node.js'],
  },
  {
    id: 'e-commerce-solutions',
    title: 'E-commerce Platforms & Payment Gateways',
    slug: 'e-commerce-solutions',
    iconName: 'ShoppingCart',
    category: 'Web',
    shortDesc: 'High-conversion online stores with instant checkout, Stripe integration, and inventory sync.',
    fullDesc: 'Turn visitors into loyal buyers with ultra-fast e-commerce platforms. Features include global multi-currency checkout, Stripe/PayPal/Local gateways, dynamic cart, and automated order fulfillment.',
    features: ['Stripe & PayPal Multi-Currency Payment Integrations', 'Dynamic Product Catalog & Inventory Sync', 'Custom Checkout & Cart Drawer', 'Order Tracking & Automated Invoicing', 'Customer Portal & Order History'],
    technologies: ['Next.js', 'Stripe API', 'Tailwind CSS', 'Firebase Store', 'Vercel'],
  },
  {
    id: 'digital-marketing-seo',
    title: 'Technical SEO & Digital Marketing',
    slug: 'digital-marketing-seo',
    iconName: 'TrendingUp',
    category: 'Marketing',
    shortDesc: 'Rank #1 on Google with technical SEO audits, dynamic schema markup, and speed optimization.',
    fullDesc: 'Maximized organic search traffic through data-driven technical SEO, semantic structured data, Core Web Vitals optimization (Lighthouse 95+), and targeted content strategies.',
    features: ['Technical SEO Audits & Fixes', 'Structured JSON-LD Schema Markup', 'Page Speed & Core Web Vitals Optimization', 'Keyword Strategy & On-Page SEO', 'Social Media Graphics & Thumbnails'],
    technologies: ['Google Search Console', 'Lighthouse', 'Next SEO', 'Schema.org', 'Analytics'],
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'project-1',
    title: 'Aura Cloud - Enterprise AI Analytics SaaS',
    slug: 'aura-cloud-analytics',
    category: 'Websites',
    client: 'Aura Global Technologies (USA)',
    shortDesc: 'Next.js 15 powered real-time telemetry dashboard with AI-driven anomaly detection.',
    fullDesc: 'Vertex Studio engineered a high-throughput telemetry platform for Aura Cloud. The solution aggregates over 50,000 logs/sec with AI anomaly detection powered by Python FastAPI microservices and vector databases.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    metrics: [
      { label: 'Latency Reduction', value: '45%' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Data Processed', value: '1.2TB/day' },
    ],
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Python FastAPI', 'PyTorch', 'Firebase'],
    liveUrl: 'https://example.com/aura',
    githubUrl: 'https://github.com/moawiahusnain',
    featured: true,
    completionDate: '2026-05',
  },
  {
    id: 'project-2',
    title: 'OmniTrack - Native Android Fleet Logistics App',
    slug: 'omnitrack-android-fleet',
    category: 'Android Apps',
    client: 'LogiSpeed Express',
    shortDesc: 'Native Android application with live GPS tracking, background driver dispatch, and offline sync.',
    fullDesc: 'Built for enterprise logistics fleets, OmniTrack operates flawlessly in areas with intermittent cellular connectivity. It features background location tracking, automated route optimization, and digital proof-of-delivery signatures.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80',
    metrics: [
      { label: 'Active Drivers', value: '15,000+' },
      { label: 'Fuel Saved', value: '18%' },
      { label: 'App Rating', value: '4.9/5' },
    ],
    technologies: ['Kotlin', 'Android SDK', 'Firebase FCM', 'Google Maps API', 'Room DB', 'Coroutines'],
    liveUrl: 'https://play.google.com',
    githubUrl: 'https://github.com/moawiahusnain',
    featured: true,
    completionDate: '2026-03',
  },
  {
    id: 'project-3',
    title: 'AutoScrape Engine - Intelligent Data Extractor',
    slug: 'autoscrape-python-engine',
    category: 'Python Automation',
    client: 'MarketPulse Intelligence',
    shortDesc: 'Automated Python web scraping pipeline monitoring 500+ e-commerce platforms concurrently.',
    fullDesc: 'An ultra-fast Python scraping infrastructure using Playwright and Asyncio. Bypasses cloudflare protection, parses dynamic JS-rendered DOMs, and populates Firestore DB with clean structured pricing trends.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
    metrics: [
      { label: 'Pages Scraped', value: '2.5M / day' },
      { label: 'Accuracy', value: '99.9%' },
      { label: 'Uptime', value: '99.95%' },
    ],
    technologies: ['Python 3.12', 'Playwright', 'BeautifulSoup', 'Celery', 'Redis', 'Firestore'],
    liveUrl: 'https://example.com/autoscrape',
    githubUrl: 'https://github.com/moawiahusnain',
    featured: true,
    completionDate: '2026-04',
  },
  {
    id: 'project-4',
    title: 'Nexus AI - Multi-Modal Conversational Assistant',
    slug: 'nexus-ai-assistant',
    category: 'AI Solutions',
    client: 'Nexus Financial Systems',
    shortDesc: 'Custom AI agent equipped with Retrieval-Augmented Generation for automated customer support.',
    fullDesc: 'Nexus AI automates 80% of customer support queries for financial advisors. It connects securely to customer document stores, parses PDFs, extracts financial compliance rules, and generates human-grade responses.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1600&q=80',
    metrics: [
      { label: 'Support Deflection', value: '78%' },
      { label: 'Response Time', value: '< 800ms' },
      { label: 'CSAT Score', value: '4.85/5' },
    ],
    technologies: ['Python', 'OpenAI GPT-4o', 'LangChain', 'Pinecone Vector DB', 'FastAPI', 'Next.js'],
    liveUrl: 'https://example.com/nexus',
    githubUrl: 'https://github.com/moawiahusnain',
    featured: true,
    completionDate: '2026-02',
  },
  {
    id: 'project-5',
    title: 'Verve - Luxury Dark Mode Design System',
    slug: 'verve-design-system',
    category: 'UI/UX Design',
    client: 'Verve Wearables (UK)',
    shortDesc: 'Complete Figma design system with glassmorphism components, tokens, and micro-interactions.',
    fullDesc: 'Designed from the ground up for a high-end luxury smartwatch hardware brand. Includes 150+ interactive components, typography scales, accessibility color tokens, and production React CSS bindings.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
    metrics: [
      { label: 'Components', value: '180+' },
      { label: 'Dev Time Saved', value: '35%' },
      { label: 'Design Tokens', value: '240+' },
    ],
    technologies: ['Figma', 'Design Systems', 'Tailwind Tokens', 'Framer Motion'],
    liveUrl: 'https://figma.com',
    featured: false,
    completionDate: '2026-01',
  },
  {
    id: 'project-6',
    title: 'HyperDash - Realtime Firebase Admin Suite',
    slug: 'hyperdash-admin-suite',
    category: 'Dashboards',
    client: 'Vertex Internal Products',
    shortDesc: 'Modular administrative control center managing user permissions, metrics, and content.',
    fullDesc: 'HyperDash serves as the foundation for modern web control panels. Built with Next.js App Router and Firebase, it features drag-and-drop widget builders, dynamic schema forms, and role-based ACL.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    metrics: [
      { label: 'Setup Time', value: '10 Mins' },
      { label: 'Security Grade', value: 'A+' },
      { label: 'Live Widgets', value: '25+' },
    ],
    technologies: ['Next.js', 'Firebase Auth', 'Firestore', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://example.com/hyperdash',
    githubUrl: 'https://github.com/moawiahusnain',
    featured: false,
    completionDate: '2026-06',
  },
];

export const PRODUCTS_DATA: DigitalProduct[] = [
  {
    id: 'prod-1',
    title: 'Vertex Ultra Agency Starter Kit (Next.js 15)',
    slug: 'vertex-agency-starter-kit',
    category: 'Next.js Templates',
    price: 49,
    originalPrice: 99,
    shortDesc: 'Complete agency boilerplate with dark mode glassmorphism, Framer Motion, and Firebase ready db.',
    rating: 5.0,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    features: ['10+ Ready-to-use Pages', 'Framer Motion Animations', 'Firebase DB Service Layer', 'SEO JSON-LD Pre-configured', 'Lighthouse 98+ Optimized'],
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://vertexstudio.com',
    downloadCount: 380,
  },
  {
    id: 'prod-2',
    title: 'Python Auto-Scraper & Bot Toolkit',
    slug: 'python-autoscraper-toolkit',
    category: 'Python Scripts',
    price: 39,
    originalPrice: 79,
    shortDesc: 'Production-ready Python scraping boilerplate with Playwright, anti-captcha, and JSON/CSV export.',
    rating: 4.9,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    features: ['Playwright & BeautifulSoup Integrations', 'Proxy Rotator Module', 'Firestore DB Auto Sync', 'Async Concurrent Workers', 'Docker Setup File Included'],
    techStack: ['Python 3.12', 'Playwright', 'FastAPI', 'Docker'],
    downloadCount: 290,
  },
  {
    id: 'prod-3',
    title: 'Flutter E-commerce & Delivery App Suite',
    slug: 'flutter-ecommerce-suite',
    category: 'Mobile Starters',
    price: 69,
    originalPrice: 129,
    shortDesc: 'Full Flutter mobile app codebase with customer app, delivery rider app, and Firebase backend.',
    rating: 4.95,
    reviewsCount: 58,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    features: ['Customer & Rider Flutter Apps', 'Live Map Tracking', 'Stripe Payment Gateway', 'Firebase Push Notifications', 'Clean Architecture & BLoC'],
    techStack: ['Flutter', 'Dart', 'Firebase Auth', 'Google Maps API'],
    downloadCount: 450,
  },
  {
    id: 'prod-4',
    title: 'Shadcn UI Dark Glassmorphism Component Pack',
    slug: 'glassmorphism-component-pack',
    category: 'UI Kits',
    price: 29,
    originalPrice: 59,
    shortDesc: 'Over 40 luxury React components built with Tailwind CSS, glow gradients, and micro-animations.',
    rating: 4.88,
    reviewsCount: 24,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    features: ['40+ Modern React Components', 'Dark & Light Mode Support', 'Copy-Paste Code Snippets', 'Fully Accessible ARIA Labels', 'Figma File Included'],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    downloadCount: 620,
  },
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Building Next-Gen Web Applications with Next.js 15 and Framer Motion',
    slug: 'nextjs-15-framer-motion-guide',
    category: 'Web Dev',
    author: {
      name: 'Moawia Husnain',
      role: 'Founder & CTO',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-07-15',
    readTime: '6 min read',
    excerpt: 'Explore how combining Next.js App Router with server components and Framer Motion creates stunning, 60fps luxury web experiences.',
    content: `
# Building Next-Gen Web Applications with Next.js 15

Modern web design requires a delicate balance between visual extravagance and lighting-fast performance. By leveraging Next.js App Router alongside React Server Components, web developers can achieve near-instant initial page renders while maintaining buttery-smooth layout transitions.

### Why Framer Motion in Server Component Architectures?

When using Framer Motion with Next.js App Router, separating interactive client boundaries (\`"use client"\`) from heavy data-fetching components ensures your JS bundle size remains lightweight.

\`\`\`tsx
"use client";
import { motion } from "framer-motion";

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-slate-900/50 backdrop-blur-md"
    >
      <span className="text-xs font-semibold text-cyan-400">Vertex Studio 2.0</span>
    </motion.div>
  );
}
\`\`\`

### Key Performance Best Practices:
1. Use Next.js \`<Image />\` component with automatic WebP conversion and priority flags for LCP images.
2. Utilize Tailwind CSS CSS variables for cohesive theme toggling without layout shift.
3. Pre-render metadata using Next.js \`generateMetadata()\` for maximum search engine indexability.
    `,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'blog-2',
    title: 'The Future of AI Agents: RAG Pipelines and Custom Vector Databases',
    slug: 'future-of-ai-agents-rag-pipelines',
    category: 'AI & ML',
    author: {
      name: 'Moawia Husnain',
      role: 'Founder & CTO',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-06-28',
    readTime: '8 min read',
    excerpt: 'How enterprise companies use Retrieval-Augmented Generation (RAG) to build context-aware AI assistants without fine-tuning models.',
    content: `
# Mastering RAG Pipelines for Enterprise Applications

Retrieval-Augmented Generation (RAG) has emerged as the industry standard for grounding Large Language Models (LLMs) on private enterprise datasets. Instead of spending thousands on model fine-tuning, RAG dynamically retrieves relevant context from a vector database before synthesizing the final answer.

### The 3 Stages of RAG:
1. **Document Ingestion & Chunking**: Splitting unstructured PDFs and markdown files into token-bounded semantic blocks.
2. **Vector Embedding**: Passing text chunks into embedding models (e.g. OpenAI text-embedding-3) to store 1536-dimensional vectors in Pinecone or Qdrant.
3. **Contextual Synthesis**: Querying vectors during user conversations and prepending top-k results into the system prompt.
    `,
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'blog-3',
    title: 'High-Performance Web Scraping in Python with Playwright & Asyncio',
    slug: 'python-playwright-async-scraping',
    category: 'Python',
    author: {
      name: 'Moawia Husnain',
      role: 'Founder & CTO',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-06-10',
    readTime: '5 min read',
    excerpt: 'Step-by-step techniques to build scalable web scraping infrastructure that handles dynamic SPAs, anti-bot mechanisms, and proxy rotation.',
    content: `
# Python Web Scraping at Scale

Web scraping has evolved far beyond static HTML parsing with Requests and BeautifulSoup. Modern web applications heavily rely on client-side JS rendering, WebGL, and dynamic WebSocket streams.

Using Python's \`playwright.async_api\` allows headless chromium instances to execute scripts, handle lazy loading, and capture network responses in real time.
    `,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'David Reynolds',
    role: 'VP of Technology',
    company: 'Aura Cloud Technologies',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Vertex Studio delivered an absolute masterpiece. Moawia Husnain and his team rebuilt our telemetry platform with Next.js and custom AI agents. Our users loved the speed and luxury feel!',
    projectType: 'AI Analytics SaaS Platform',
    location: 'San Francisco, USA',
  },
  {
    id: 'test-2',
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    company: 'LogiSpeed Express',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'The Android app built by Vertex Studio handles thousands of active delivery drivers concurrently without a hitch. Their attention to offline sync and UI elegance is second to none.',
    projectType: 'Native Android Fleet App',
    location: 'London, UK',
  },
  {
    id: 'test-3',
    name: 'Tariq Al-Mansoor',
    role: 'Managing Director',
    company: 'Nexus Financial Systems',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Vertex Studio’s Python web automation and AI RAG bot saved our team over 100 hours of manual data entry every single week. Highly professional, super fast delivery!',
    projectType: 'Python Automation & AI Agent',
    location: 'Dubai, UAE',
  },
  {
    id: 'test-4',
    name: 'Marcus Vance',
    role: 'Product Lead',
    company: 'Verve Wearables',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'The dark glassmorphism design system engineered for our mobile and web apps elevated our brand status to compete with Fortune 500 tech companies.',
    projectType: 'UI/UX Design & Branding',
    location: 'Berlin, Germany',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who is the founder of Vertex Studio and where are you located?',
    answer: 'Vertex Studio was founded by Moawia Husnain, Lead Software Architect & CTO. Our global headquarters is located in Lodhran, Punjab, Pakistan, serving enterprise clients worldwide across USA, Europe, UAE, and Asia.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'What core technologies does Vertex Studio specialize in?',
    answer: 'We specialize in Next.js (App Router), React, TypeScript, Tailwind CSS, Native Android (Kotlin/Java), Flutter, Python (FastAPI, Web Scraping, PyTorch), Firebase Backend Systems, OpenAI/LLM AI integrations, and UI/UX design.',
    category: 'Development',
  },
  {
    id: 'faq-3',
    question: 'Is the website design integrated with Firebase for dynamic updates?',
    answer: 'Yes! All services, portfolio case studies, blogs, products, testimonials, and FAQs are designed with a clean Data Access Layer that connects seamlessly to Firebase Firestore. You can manage all website content dynamically using an Admin Panel without modifying code.',
    category: 'Firebase & Admin',
  },
  {
    id: 'faq-4',
    question: 'How do you handle project pricing and custom quotes?',
    answer: 'We offer fixed-price milestone packages for structured projects as well as flexible monthly retainer options for enterprise scale. You can use our interactive Quote Estimator tool on the website to calculate budget estimates instantly.',
    category: 'Pricing',
  },
  {
    id: 'faq-5',
    question: 'Do you provide post-launch support and ongoing maintenance?',
    answer: 'Absolutely. Every project includes a 30 to 90-day warranty window post-launch, alongside options for ongoing SLA support, security updates, server monitoring, and continuous feature additions.',
    category: 'Support',
  },
  {
    id: 'faq-6',
    question: 'How do I initiate a project or contact founder Moawia Husnain directly?',
    answer: 'You can contact us via our website Contact Form, email us at moawiahussnain2@gmail.com, or reach out directly on WhatsApp at +92 326 6915744 for immediate consultation.',
    category: 'General',
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Engr. Moawia Husnain',
    role: 'Founder & CEO | Buildex (DUNS 31-239-5963)',
    bio: 'BS Civil Engineer & MSc Construction Management student at UET Lahore. Visionary software engineer specializing in Civil Construction Suite apps, AI systems, Android development, and Next.js web platforms.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    skills: ['BS Civil Engineering', 'MSc Construction Mgmt (UET)', 'Next.js', 'Android Native', 'Civil Suite', 'Python AI'],
    socials: {
      github: 'https://github.com/moawiahusnain',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'team-2',
    name: 'Zainab Rashid',
    role: 'Head of UI/UX & Product Design',
    bio: 'Expert design strategist specializing in glassmorphism, micro-interactions, dark mode visual systems, and user conversion flows for global startups.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Framer'],
    socials: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'team-3',
    name: 'Usman Ali',
    role: 'Lead Python & Backend Engineer',
    bio: 'Specialist in distributed web scraping pipelines, FastAPI microservices, database optimization, and high-performance serverless deployments.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    skills: ['Python 3', 'FastAPI', 'Playwright', 'PostgreSQL', 'Docker'],
    socials: {
      github: 'https://github.com',
    },
  },
];

export const CAREERS_DATA: CareerPosition[] = [
  {
    id: 'car-1',
    title: 'Senior Next.js & React Frontend Developer',
    department: 'Engineering',
    location: 'Remote / Lodhran Office',
    type: 'Full-Time',
    experience: '3+ Years',
    description: 'We are seeking an elite React/Next.js engineer passionate about high-performance web applications, Framer Motion animations, and clean TypeScript architectures.',
    requirements: [
      '3+ years of experience with Next.js App Router and React',
      'Proficiency in TypeScript, Tailwind CSS, and Framer Motion',
      'Understanding of Core Web Vitals, SSR, and dynamic caching',
      'Experience connecting REST & Firebase backends',
    ],
    responsibilities: [
      'Build client web applications and internal product dashboards',
      'Collaborate with UI designers to implement pixel-perfect layouts',
      'Optimize page speed performance and Lighthouse audit scores',
    ],
  },
  {
    id: 'car-2',
    title: 'Python Automation & AI Agent Developer',
    department: 'AI & Automation',
    location: 'Remote / Lodhran Office',
    type: 'Full-Time',
    experience: '2+ Years',
    description: 'Join our team to develop autonomous AI agents, LLM RAG pipelines, and high-throughput Python web scraping systems.',
    requirements: [
      'Strong proficiency in Python 3.10+, Playwright, and BeautifulSoup',
      'Experience with LangChain, LlamaIndex, and OpenAI APIs',
      'Knowledge of async programming (asyncio, Celery, Redis)',
      'Familiarity with FastAPI and RESTful microservices',
    ],
    responsibilities: [
      'Architect robust data extraction workflows',
      'Implement AI customer support chatbots and RAG tools',
      'Deploy scalable Python web workers on cloud environments',
    ],
  },
];
