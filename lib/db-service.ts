import {
  SERVICES_DATA,
  PORTFOLIO_DATA,
  PRODUCTS_DATA,
  BLOG_DATA,
  TESTIMONIALS_DATA,
  FAQS_DATA,
  TEAM_DATA,
  CAREERS_DATA,
  Service,
  PortfolioItem,
  DigitalProduct,
  BlogPost,
  Testimonial,
  FAQItem,
  TeamMember,
  CareerPosition,
} from '@/data/mockData';
import { db, isFirebaseConfigured } from './firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

export async function getServices(): Promise<Service[]> {
  if (!isFirebaseConfigured || !db) return SERVICES_DATA;
  try {
    const querySnapshot = await getDocs(collection(db, 'services'));
    if (querySnapshot.empty) return SERVICES_DATA;
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Service));
  } catch (error) {
    console.warn('Firebase query failed, using local mock data fallback:', error);
    return SERVICES_DATA;
  }
}

export async function getPortfolio(): Promise<PortfolioItem[]> {
  if (!isFirebaseConfigured || !db) return PORTFOLIO_DATA;
  try {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    if (querySnapshot.empty) return PORTFOLIO_DATA;
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as PortfolioItem));
  } catch (error) {
    console.warn('Firebase query failed, using local mock data fallback:', error);
    return PORTFOLIO_DATA;
  }
}

export async function getProducts(): Promise<DigitalProduct[]> {
  if (!isFirebaseConfigured || !db) return PRODUCTS_DATA;
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    if (querySnapshot.empty) return PRODUCTS_DATA;
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as DigitalProduct));
  } catch (error) {
    console.warn('Firebase query failed, using local mock data fallback:', error);
    return PRODUCTS_DATA;
  }
}

export async function getBlogs(): Promise<BlogPost[]> {
  if (!isFirebaseConfigured || !db) return BLOG_DATA;
  try {
    const querySnapshot = await getDocs(collection(db, 'blogs'));
    if (querySnapshot.empty) return BLOG_DATA;
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as BlogPost));
  } catch (error) {
    console.warn('Firebase query failed, using local mock data fallback:', error);
    return BLOG_DATA;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!isFirebaseConfigured || !db) return TESTIMONIALS_DATA;
  try {
    const querySnapshot = await getDocs(collection(db, 'testimonials'));
    if (querySnapshot.empty) return TESTIMONIALS_DATA;
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Testimonial));
  } catch (error) {
    return TESTIMONIALS_DATA;
  }
}

export async function getFAQs(): Promise<FAQItem[]> {
  if (!isFirebaseConfigured || !db) return FAQS_DATA;
  try {
    const querySnapshot = await getDocs(collection(db, 'faqs'));
    if (querySnapshot.empty) return FAQS_DATA;
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as FAQItem));
  } catch (error) {
    return FAQS_DATA;
  }
}

export async function getTeam(): Promise<TeamMember[]> {
  if (!isFirebaseConfigured || !db) return TEAM_DATA;
  try {
    const querySnapshot = await getDocs(collection(db, 'team'));
    if (querySnapshot.empty) return TEAM_DATA;
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as TeamMember));
  } catch (error) {
    return TEAM_DATA;
  }
}

export async function getCareers(): Promise<CareerPosition[]> {
  if (!isFirebaseConfigured || !db) return CAREERS_DATA;
  try {
    const querySnapshot = await getDocs(collection(db, 'careers'));
    if (querySnapshot.empty) return CAREERS_DATA;
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as CareerPosition));
  } catch (error) {
    return CAREERS_DATA;
  }
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  service?: string;
  message: string;
}

export async function submitContactForm(data: ContactFormInput): Promise<{ success: boolean; id?: string }> {
  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'inquiries'), {
        ...data,
        createdAt: serverTimestamp(),
        status: 'unread',
      });
      return { success: true, id: docRef.id };
    } catch (err) {
      console.error('Error submitting to Firebase:', err);
    }
  }
  // Store locally in localStorage if browser env
  if (typeof window !== 'undefined') {
    const existing = JSON.parse(localStorage.getItem('vertex_inquiries') || '[]');
    existing.push({ ...data, createdAt: new Date().toISOString(), status: 'unread' });
    localStorage.setItem('vertex_inquiries', JSON.stringify(existing));
  }
  return { success: true, id: 'mock-' + Date.now() };
}

export interface QuoteRequestInput {
  serviceType: string;
  budgetRange: string;
  timeline: string;
  features: string[];
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  details: string;
}

export async function submitQuoteRequest(data: QuoteRequestInput): Promise<{ success: boolean; id?: string }> {
  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'quotes'), {
        ...data,
        createdAt: serverTimestamp(),
        status: 'pending',
      });
      return { success: true, id: docRef.id };
    } catch (err) {
      console.error('Error submitting quote to Firebase:', err);
    }
  }
  if (typeof window !== 'undefined') {
    const existing = JSON.parse(localStorage.getItem('vertex_quotes') || '[]');
    existing.push({ ...data, createdAt: new Date().toISOString(), status: 'pending' });
    localStorage.setItem('vertex_quotes', JSON.stringify(existing));
  }
  return { success: true, id: 'quote-' + Date.now() };
}
