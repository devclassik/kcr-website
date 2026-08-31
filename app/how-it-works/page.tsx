import type { Metadata } from 'next';
import { HowItWorksClient } from '@/components/HowItWorksClient';

export const metadata: Metadata = {
  title: 'How It Works - Next.js Plugin Integration & Paystack Engine',
  description:
    'Step-by-step developer guide on installing WebApp plugins, configuring choropleth maps, generating cryptographic invoices, and automating Paystack webhook SLAs.',
  keywords: [
    'Next.js Plugin Architecture',
    'Paystack Webhook Integration',
    'Nigeria Map React Integration',
    'TinyMCE Next.js Setup',
    'Paystack Inline JS SDK',
    'WebApp Billing Engine',
  ],
  alternates: {
    canonical: 'https://kcrnigltd.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works & Developer Integration | KCR Nig Ltd',
    description:
      'Step-by-step developer guide for KCR WebApp Plugins and Paystack Gateway verification.',
    url: 'https://kcrnigltd.com/how-it-works',
    siteName: 'KCR Nig Ltd',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How KCR Nig Ltd Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How KCR Nig Ltd Works | Developer Guide',
    description:
      'Plug-and-play architecture, itemized invoicing, and SHA512 verified Paystack webhooks.',
    images: ['/og-image.png'],
  },
};

export default function HowItWorksPage() {
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Integrate KCR WebApp Plugins and Paystack Gateway',
    description:
      'Learn how to install KCR WebApp plugins into Next.js App Router, generate invoices, and handle Paystack webhook verification.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Install WebApp Plugins',
        text: 'Select plugins like Nigeria GeoJSON Maps, TinyMCE Blog Editors, or Paystack Gateways and mount them in Next.js.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Generate Itemized Invoice',
        text: 'Engine auto-calculates line items, 7.5% NGN VAT tax, applies currency conversions, and stamps cryptographic QR verification.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Paystack Instant Checkout',
        text: 'Customers settle payments via Paystack Inline JS modal supporting Card, Bank Transfer, USSD, and Apple Pay.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Automated Webhook Delivery',
        text: 'Paystack dispatches charge.success event verified via SHA512 HMAC signature for automated status reconciliation.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <HowItWorksClient />
    </>
  );
}
