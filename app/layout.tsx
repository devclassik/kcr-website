import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kcrnigltd.com"),
  title: "KCR Nig Ltd - Interactive Maps, Blog Editors & WebApp Plugins",
  description: "Kolamajawole C-Renee Ent Ltd (KCR Nig Ltd) - Turnkey GeoJSON maps (Nigeria 36 States/774 LGAs, Africa, World), TinyMCE blog editors, and custom software engineering.",
  keywords: ["KCR Nig Ltd", "Kolamajawole C-Renee Ent Ltd", "Nigeria State Map", "LGA GeoJSON", "World Map Plugin", "TinyMCE Blog Editor", "Software Engineering", "WebApp Plugins"],
  openGraph: {
    title: "KCR Nig Ltd - Interactive Maps & WebApp Plugin Engine",
    description: "Building solutions. Deploying success. Interactive Map Breakdowns, TinyMCE blog editors, and enterprise software engineering.",
    url: "https://kcrnigltd.com",
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
    description: "Building solutions. Deploying success. Interactive Map Breakdowns, Blog Editors & Tech Jobs.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/kcr-logo.png",
    shortcut: "/kcr-logo.png",
    apple: "/kcr-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <head>
        {/* Load Paystack Inline JS script */}
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#7C3AED] selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

