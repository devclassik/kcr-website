import type { Metadata, Viewport } from "next";
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
  applicationName: "KCR Nig Ltd",
  category: "technology",
  classification: "Business software, developer tools, GIS mapping, and payment integrations",
  title: {
    default: "KCR Nig Ltd - Enterprise RBAC, Notification Engines, GIS Maps & WebApp Plugins",
    template: "%s | KCR Nig Ltd",
  },
  description:
    "Kolamajawole C-Renee Ent Ltd (KCR Nig Ltd) builds production-ready WebApp plugins for enterprise RBAC, omnichannel notifications, Nigeria GIS maps, TinyMCE blog editors, and Paystack integrations for modern businesses in Nigeria and beyond.",
  keywords: [
    "KCR Nig Ltd",
    "Kolamajawole C-Renee Ent Ltd",
    "devclassic-rbac",
    "devclassic-notify",
    "devclassic-map",
    "Enterprise RBAC Next.js",
    "Next.js permissions guard",
    "Multi-channel notification engine",
    "Termii SMS plugin",
    "Resend email integration",
    "Web push VAPID React",
    "Nigeria state map GeoJSON",
    "Nigeria 774 LGA map",
    "Africa choropleth map",
    "World map plugin React",
    "TinyMCE blog editor Next.js",
    "Paystack payment gateway plugin",
    "Software engineering Nigeria",
    "GIS vector maps React",
    "WebApp plugins marketplace",
    "Next.js plugins",
    "Lagos software developer",
    "Custom software company Lagos",
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
    languages: {
      "en-NG": "https://kolacrenee.com.ng",
    },
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
    title: "KCR Nig Ltd - Enterprise RBAC, Notification Engines & WebApp Plugins",
    description:
      "Building solutions. Deploying success. Turnkey devclassic-rbac permission engines, devclassic-notify multi-channel alerts, devclassic-map GeoJSON choropleths, and Paystack billing for modern WebApps.",
    url: "https://kolacrenee.com.ng",
    siteName: "KCR Nig Ltd",
    images: [
      {
        url: "https://kolacrenee.com.ng/og-image.png",
        width: 1200,
        height: 630,
        alt: "KCR Nig Ltd - Kolamajawole C-Renee Ent Ltd",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KCR Nig Ltd - Interactive Maps & Software Engineering",
    description:
      "Building solutions. Deploying success. Interactive map breakdowns, TinyMCE blog editors, and enterprise tech for Nigeria and West Africa.",
    images: ["https://kolacrenee.com.ng/og-image.png"],
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7C3AED",
  colorScheme: "dark light",
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
