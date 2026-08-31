import type { Metadata } from 'next';
import { PluginsClient } from '@/components/PluginsClient';
import { INITIAL_PLUGINS } from '@/data/pluginsData';

export const metadata: Metadata = {
  title: 'WebApp Plugins Directory - Nigeria GIS Maps, TinyMCE & Paystack',
  description:
    'Browse turnkey Next.js & React plugins: Nigeria 36 State & 774 LGA GeoJSON maps, World/Africa Choropleth modules, TinyMCE 7 rich text blog editors, and Paystack Smart Gateways.',
  keywords: [
    'Nigeria Map Plugin',
    'Nigeria LGA GeoJSON Map',
    'Africa Choropleth Map',
    'TinyMCE Blog Editor React',
    'Paystack Gateway Next.js',
    'WebApp Plugins Directory',
    'Kolamajawole C-Renee Ent Ltd',
  ],
  alternates: {
    canonical: 'https://kolacrenee.com.ng/plugins',
  },
  openGraph: {
    title: 'WebApp Plugins Directory | KCR Nig Ltd',
    description:
      'Turnkey GeoJSON maps for Nigeria 36 States & 774 LGAs, Africa, TinyMCE blog editors, and Paystack payment modules.',
    url: 'https://kolacrenee.com.ng/plugins',
    siteName: 'KCR Nig Ltd',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KCR Nig Ltd Plugins Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebApp Plugins Directory | KCR Nig Ltd',
    description:
      'High-performance Next.js plugins for interactive maps, blog editors, and fintech payments.',
    images: ['/og-image.png'],
  },
};

export default function PluginsPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'KCR WebApp Plugins Directory',
    description:
      'Directory of production-ready WebApp plugins for GIS maps, blog editors, and Paystack integration.',
    url: 'https://kolacrenee.com.ng/plugins',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: INITIAL_PLUGINS.map((plugin, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: plugin.name,
        description: plugin.tagline,
        url: `https://kolacrenee.com.ng/plugins#${plugin.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <PluginsClient />
    </>
  );
}
