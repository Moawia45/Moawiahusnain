'use client';

import React from 'react';
import { COMPANY_DATA } from '@/data/mockData';

export function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_DATA.name,
    legalName: `${COMPANY_DATA.name} (DUNS ${COMPANY_DATA.dunsNumber})`,
    duns: COMPANY_DATA.dunsNumber,
    url: 'https://moawiahusnain.engineer',
    logo: 'https://moawiahusnain.engineer/favicon.ico',
    founder: {
      '@type': 'Person',
      name: COMPANY_DATA.founder,
      jobTitle: COMPANY_DATA.founderRole,
      alumniOf: 'University of Engineering and Technology (UET) Lahore',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_DATA.address.city,
      addressRegion: COMPANY_DATA.address.province,
      addressCountry: COMPANY_DATA.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_DATA.phone,
      contactType: 'customer support',
      email: COMPANY_DATA.email,
      availableLanguage: ['English', 'Urdu'],
    },
    sameAs: [
      COMPANY_DATA.socials.github,
      COMPANY_DATA.socials.linkedin,
      COMPANY_DATA.socials.twitter,
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareCompany',
    name: COMPANY_DATA.name,
    duns: COMPANY_DATA.dunsNumber,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    '@id': 'https://moawiahusnain.engineer',
    url: 'https://moawiahusnain.engineer',
    telephone: COMPANY_DATA.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_DATA.address.city,
      addressRegion: COMPANY_DATA.address.province,
      addressCountry: 'PK',
    },
    priceRange: '$$$',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
