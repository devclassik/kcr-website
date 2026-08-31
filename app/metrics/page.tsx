import type { Metadata } from 'next';
import { MetricsClient } from '@/components/MetricsClient';

export const metadata: Metadata = {
  title: 'Platform Metrics, Invoicing & Trust Hub',
  description:
    'Live payment metrics, automated invoice generator, Paystack settlement SLA monitoring, and transaction reconciliation for KCR Nig Ltd plugins.',
  keywords: [
    'Platform Metrics',
    'Paystack Invoicing Hub',
    'KCR Revenue Engine',
    'Payment Verification SLA',
    'Automated Invoicing Nigeria',
  ],
  alternates: {
    canonical: 'https://kolacrenee.com/metrics',
  },
  openGraph: {
    title: 'Platform Metrics & Trust Hub | KCR Nig Ltd',
    description:
      'Real-time metrics, invoice generation, and Paystack settlement engine for WebApp plugins.',
    url: 'https://kolacrenee.com/metrics',
    siteName: 'KCR Nig Ltd',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KCR Nig Ltd Platform Metrics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Metrics & Invoicing Hub | KCR Nig Ltd',
    description:
      'Live metrics, Paystack gateway monitoring, and automated invoice verification.',
    images: ['/og-image.png'],
  },
};

export default function MetricsPage() {
  return <MetricsClient />;
}
