import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AOSProvider } from "@/components/AOSProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kolacrenee.com.ng"),
  title: {
    default: "KCR Nig Ltd - Interactive Maps, Blog Editors & WebApp Plugins",
    template: "%s | KCR Nig Ltd",
  },
  description:
    "Kolamajawole C-Renee Ent Ltd (KCR Nig Ltd) - Turnkey GeoJSON maps (Nigeria 36 States & 774 LGAs, Africa, World), TinyMCE blog editors, Paystack smart gateways, and custom software engineering.",
  keywords: [
    "KCR Nig Ltd",
    "Kolamajawole C-Renee Ent Ltd",
    "Nigeria State Map GeoJSON",
    "Nigeria 774 LGA Map",
    "Africa Choropleth Map",
    "World Map Plugin React",
    "TinyMCE Blog Editor Next.js",
    "Paystack Payment Gateway Plugin",
    "Software Engineering Nigeria",
    "GIS Vector Maps React",
    "WebApp Plugins Marketplace",
    "Next.js Plugins",
    "Lagos Software Developer",
  ],
  authors: [{ name: "KCR Nig Ltd", url: "https://kolacrenee.com.ng" }],
  creator: "Kolamajawole C-Renee Ent Ltd",
  publisher: "Kolamajawole C-Renee Ent Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://kolacrenee.com.ng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KCR Nig Ltd - Interactive Maps & WebApp Plugin Engine",
    description:
      "Building solutions. Deploying success. Turnkey GeoJSON map choropleths for Nigeria 36 States/774 LGAs, Africa & World, TinyMCE blog editors, and custom software engineering.",
    url: "https://kolacrenee.com.ng",
    siteName: "KCR Nig Ltd",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KCR Nig Ltd - Kolamajawole C-Renee Ent Ltd",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KCR Nig Ltd - Interactive Maps & Software Engineering",
    description:
      "Building solutions. Deploying success. Interactive Map Breakdowns, TinyMCE Blog Editors & Enterprise Tech.",
    images: ["/og-image.png"],
    creator: "@kcrnigltd",
  },
  icons: {
    icon: [
      { url: "/kcr-logo.png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/kcr-logo.png",
    apple: "/kcr-logo.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kolamajawole C-Renee Ent Ltd (KCR Nig Ltd)",
    alternateName: ["KCR Nig Ltd", "KCR Tech", "Kolamajawole C-Renee Ent Ltd"],
    url: "https://kolacrenee.com.ng",
    logo: "https://kolacrenee.com.ng/kcr-logo.png",
    image: "https://kolacrenee.com.ng/og-image.png",
    description:
      "Turnkey GeoJSON maps for Nigeria 36 States & 774 LGAs, World/Africa choropleth, TinyMCE blog editors, Paystack smart gateways, and custom software engineering.",
    email: "kolamajawole@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressLocality: "Lagos",
    },
    sameAs: [
      "https://github.com",
      "https://twitter.com",
      "https://linkedin.com",
    ],
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KCR Nig Ltd",
    url: "https://kolacrenee.com.ng",
    description: "Interactive Maps, Blog Editors & WebApp Plugins Engine",
    publisher: {
      "@type": "Organization",
      name: "Kolamajawole C-Renee Ent Ltd",
    },
  };

  return (
    <html lang="en" className="dark" data-theme="dark">
      <head>
        {/* Load Paystack Inline JS script */}
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="beforeInteractive"
        />
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* WebSite Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#7C3AED] selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <AOSProvider>
            {children}
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
