import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KCR Nig Ltd - WebApp Plugins & Engineering',
    short_name: 'KCR Nig Ltd',
    description: 'Turnkey GeoJSON maps for Nigeria 36 States & 774 LGAs, World/Africa choropleth, TinyMCE blog editors, and custom software engineering by Kolamajawole C-Renee Ent Ltd.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0F19',
    theme_color: '#7C3AED',
    icons: [
      {
        src: '/kcr-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/kcr-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
