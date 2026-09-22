import type { Metadata } from 'next';
import { BlogClient } from '@/components/BlogClient';

export const metadata: Metadata = {
  title: 'Engineering & Architecture Blog',
  description:
    'Technical whitepapers, architecture guides, devclassic-rbac authorization matrices, Nigerian GIS mapping breakdowns, and Paystack invoicing engines by KCR Nig Ltd.',
  keywords: [
    'KCR Technical Blog',
    'Next.js 16 RBAC',
    'devclassic-rbac',
    'devclassic-notify',
    'Termii SMS Integration',
    'Nigeria Map GeoJSON 774 LGA',
    'Paystack Invoicing Node.js',
    'Software Architecture Nigeria',
  ],
  alternates: {
    canonical: 'https://kolacrenee.com.ng/blog',
  },
  openGraph: {
    title: 'Engineering & Architecture Blog | KCR Nig Ltd',
    description:
      'In-depth technical whitepapers, zero-trust RBAC architecture, Nigerian GIS maps, and Paystack invoicing automations.',
    url: 'https://kolacrenee.com.ng/blog',
    siteName: 'KCR Nig Ltd',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KCR Nig Ltd Technical Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering & Architecture Blog | KCR Nig Ltd',
    description:
      'Technical guides for Next.js 16 RBAC, Nigerian GIS mapping, and Paystack automated invoicing.',
    images: ['/og-image.png'],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
