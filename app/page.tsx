import type { Metadata } from 'next';
import { HomeClient } from '@/components/HomeClient';
import { INITIAL_PLUGINS } from '@/data/pluginsData';

export const metadata: Metadata = {
  title: 'KCR Nig Ltd - Interactive GeoJSON Maps, Blog Editors & WebApp Plugins',
  description:
    'Empower your WebApp with interactive SVG/D3 choropleth maps of Nigeria (36 States & 774 LGAs), Africa, World maps, TinyMCE 7 rich text blog editors, and Paystack smart payment gateways.',
  alternates: {
    canonical: 'https://kolacrenee.com.ng',
  },
  openGraph: {
    title: 'KCR Nig Ltd - Interactive Maps & WebApp Plugin Engine',
    description:
      'Turnkey GeoJSON map choropleths for Nigeria 36 States/774 LGAs, Africa, TinyMCE blog editors, and enterprise software engineering.',
    url: 'https://kolacrenee.com.ng',
    siteName: 'KCR Nig Ltd',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KCR Nig Ltd - Interactive Maps & Software Engineering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KCR Nig Ltd - Interactive Maps & Software Engineering',
    description:
      'Building solutions. Deploying success. Turnkey GeoJSON map choropleths, TinyMCE blog editors & Paystack gateways.',
    images: ['/og-image.png'],
  },
};

export default function HomePage() {
  // Software / Product ItemList Structured Data for Google Rich Snippets
  const pluginsItemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'KCR WebApp Plugins & GIS Tools Catalog',
    description:
      'Production-ready GeoJSON maps, WYSIWYG editors, and payment modules by Kolamajawole C-Renee Ent Ltd.',
    itemListElement: INITIAL_PLUGINS.map((plugin, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: plugin.name,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web, Next.js, React, Node.js',
        description: plugin.description,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: plugin.rating,
          reviewCount: plugin.reviewsCount,
          bestRating: '5',
          worstRating: '1',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'NGN',
          price: plugin.price.includes('₦')
            ? plugin.price.replace(/[^0-9]/g, '')
            : '0',
          availability: 'https://schema.org/InStock',
        },
        author: {
          '@type': 'Organization',
          name: 'Kolamajawole C-Renee Nig Ltd',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pluginsItemListJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
