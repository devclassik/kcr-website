import type { Metadata } from 'next';
import { PluginsClient } from '@/components/PluginsClient';
import { INITIAL_PLUGINS } from '@/data/pluginsData';

export const metadata: Metadata = {
  title: 'WebApp Plugins Directory - devclassic-rbac, devclassic-notify, GIS Maps & Editors',
  description:
    'Browse turnkey Next.js & React plugins: devclassic-rbac (Enterprise permission engine), devclassic-notify (Omnichannel Email/SMS/Push suite), devclassic-map (Nigeria 36 State & 774 LGA GeoJSON), and TinyMCE 7 rich text blog editors.',
  keywords: [
    'devclassic-rbac',
    'devclassic-notify',
    'devclassic-map',
    'RBAC Plugin React',
    'Notification Engine Next.js',
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
      'Turnkey enterprise plugins: devclassic-rbac permission guard, devclassic-notify omnichannel notifications, devclassic-map GeoJSON choropleths, and blog editors.',
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
      'High-performance Next.js plugins for enterprise RBAC, multi-channel notifications, interactive maps, and blog editors.',
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
