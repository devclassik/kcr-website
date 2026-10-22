import type { Metadata } from 'next';
import { AboutClient } from '@/components/AboutClient';

export const metadata: Metadata = {
  title: 'About Us | KCR Nig Ltd - Building Solutions. Deploying Success.',
  description:
    'Learn about Kolamajawole C-Renee Ent Ltd (KCR Nig Ltd)—Nigeria’s premier enterprise software architecture firm and developer platform. Discover our mission, executive leadership, Lagos Innovation Hub, and modular developer engines.',
  keywords: [
    'About KCR Nig Ltd',
    'Kolamajawole C-Renee',
    'Software Architecture Nigeria',
    'Lagos Tech Hub',
    'Enterprise Software Engineering',
    'devclassic-rbac',
    'devclassic-notify',
    'Paystack Billing Automation',
    '774 LGAs GeoJSON',
    'NSSEC Technology Modernization',
    'NGF Technology Modernization',
  ],
  alternates: {
    canonical: 'https://kolacrenee.com.ng/about',
  },
  openGraph: {
    title: 'About Us | KCR Nig Ltd - Building Solutions. Deploying Success.',
    description:
      'Discover the team, architecture, and technology behind KCR Nig Ltd. From turnkey developer plugins to automated Paystack invoicing and national education governance.',
    url: 'https://kolacrenee.com.ng/about',
    siteName: 'KCR Nig Ltd',
    images: [
      {
        url: '/kcr-lagos-hub.jpg',
        width: 1200,
        height: 675,
        alt: 'KCR Nig Ltd Lagos Innovation Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | KCR Nig Ltd',
    description:
      'Enterprise software architecture, developer plugins, payment gateway implementation, and national digital infrastructure in Nigeria.',
    images: ['/kcr-lagos-hub.jpg'],
  },
};

export default function AboutPage() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kolamajawole C-Renee Ent Ltd',
      alternateName: ['KCR Nig Ltd', 'KCR Plugin Engine'],
      url: 'https://kolacrenee.com.ng',
      logo: 'https://kolacrenee.com.ng/kcr-logo.png',
      image: 'https://kolacrenee.com.ng/kcr-lagos-hub.jpg',
      description:
        'Enterprise software architecture firm and developer platform empowering modern web applications with modular plugins, instant Paystack invoicing, and automated revenue workflow engines.',
      foundingDate: '2021',
      founder: {
        '@type': 'Person',
        name: 'Kolamajawole C-Renee',
        jobTitle: 'Founder & Chief Technology Officer',
        image: 'https://kolacrenee.com.ng/kolamajawole-cto.jpg',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'plot 5, kado-kuchi abuja',
        addressLocality: 'Abuja',
        addressCountry: 'NG',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+234-8147383503',
        contactType: 'technical support',
        email: 'kolamajawole@gmail.com',
        availableLanguage: ['en'],
      },
      sameAs: [
        'https://github.com/devclassik',
        'https://twitter.com/kcrnigltd',
        'https://linkedin.com/company/kcrnigltd',
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
