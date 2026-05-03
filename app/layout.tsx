import type { Metadata } from 'next';
import './globals.css';
import HudNavbar from '@/components/layout/HudNavbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The GTA Vault — Your Ultimate GTA 6 Utility Hub',
    template: '%s | The GTA Vault',
  },
  description: 'Your ultimate GTA 6 utility hub — news, interactive Vice City map, vehicle database, mission guides, and more for Leonida.',
  keywords: ['GTA 6', 'GTA VI', 'GTA 6 map', 'GTA 6 vehicles', 'GTA 6 characters', 'GTA 6 release date', 'GTA 6 news', 'Vice City', 'Leonida'],
  metadataBase: new URL('https://thegtavault.com'),
  openGraph: {
    title: 'The GTA Vault — Your Ultimate GTA 6 Utility Hub',
    description: 'News, interactive maps, vehicle databases, and mission guides for GTA 6.',
    url: 'https://thegtavault.com',
    siteName: 'The GTA Vault',
    type: 'website',
    images: [{ url: '/images/og/og-default.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The GTA Vault',
    description: 'Your ultimate GTA 6 utility hub.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="thegtavault.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className="min-h-screen flex flex-col bg-obsidian text-ghost-white">
        {/* Global overlays */}
        <div id="scanline-overlay" />
        <div id="grain-overlay" />

        <HudNavbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
