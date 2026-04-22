import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/styles/globals.css';
import { Footer, Navbar } from '@/components/layout';
import { ThemeProvider } from '@/components/providers';
import { site } from '@/constants/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Dynamic Trader Live | Institutional Trading Education | DMC Cohort India',
    template: '%s | Dynamic Trader Live',
  },
  description:
    "Stop guessing. Learn the DMC (Dynamic Market Concept) framework with Dynamic Trader Live - India's most structured trading cohort. Live mentorship, prop firm prep, Rs 25,000 one-time. Only 10 seats per cohort.",
  openGraph: {
    title: 'Dynamic Trader Live - Trade Like Institutions',
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ['/og-image.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    sameAs: [site.telegramUrl, site.social.instagram, site.social.youtube],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Playfair+Display:wght@700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
