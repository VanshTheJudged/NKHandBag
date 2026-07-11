import type { Metadata } from 'next';
import { Outfit, Instrument_Serif, JetBrains_Mono, Anton } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

// Warm Studio fixed faces
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

// Project-specific display face (heavy condensed)
const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NKHANDBAG — Bespoke Handbags from Mumbai',
  description:
    'Bespoke designs and personal design curation. Discover the NKHANDBAG legacy — handcrafted bags from Mumbai, India.',
  metadataBase: new URL('https://www.nkhandbag.com'),
  openGraph: {
    title: 'NKHANDBAG',
    description: 'Bespoke handbags. Crafted in Mumbai.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${anton.variable}`}
    >
      <body className="bg-bg text-fg">{children}</body>
      <GoogleAnalytics gaId="G-25708CCWV9" />
    </html>
  );
}