import type { Metadata } from 'next';
import { ContactClient } from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact & Custom Engineering Services',
  description:
    'Get in touch with KCR Nig Ltd (Kolamajawole C-Renee Ent Ltd) for custom web applications, GIS choropleth maps, mobile apps, and dedicated Paystack integrations.',
  keywords: [
    'Contact KCR Nig Ltd',
    'Hire Software Engineer Lagos',
    'Custom WebApp Plugin Quote',
    'Nigeria GIS Map Development',
    'Paystack Integration Consultant',
    'Kolamajawole C-Renee Ent Ltd Support',
  ],
  alternates: {
    canonical: 'https://kolacrenee.com.ng/contact',
  },
  openGraph: {
    title: 'Contact Us | KCR Nig Ltd Software Engineering',
    description:
      'Partner with Kolamajawole C-Renee Ent Ltd for enterprise software engineering, bespoke GIS maps, and Paystack solutions.',
    url: 'https://kolacrenee.com.ng/contact',
    siteName: 'KCR Nig Ltd',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact KCR Nig Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact KCR Nig Ltd Engineering',
    description:
      'Direct engineering support and enterprise plugin consultation.',
    images: ['/og-image.png'],
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact KCR Nig Ltd',
    description:
      'Official contact and engineering request portal for Kolamajawole C-Renee Ent Ltd.',
    url: 'https://kolacrenee.com.ng/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kolamajawole C-Renee Ent Ltd (KCR Nig Ltd)',
      email: 'kolamajawole@gmail.com',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Support & Engineering Consultations',
        email: 'kolamajawole@gmail.com',
        availableLanguage: ['English'],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
