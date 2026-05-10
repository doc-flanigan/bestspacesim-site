import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
  weight: ['500', '600', '700', '800'],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bestspacesim.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Best Space Sim Games 2026 — Top Picks for New & Veteran Players',
    template: '%s · bestspacesim.com',
  },
  description:
    "Looking for the best space simulation game? We rank the top space sims of 2026 including Star Citizen, Elite Dangerous, No Man's Sky, and more.",
  applicationName: 'bestspacesim.com',
  authors: [{ name: 'Doc_Flanigan' }],
  keywords: [
    'best space sim',
    'best space simulation game',
    'space sim 2026',
    'Star Citizen',
    'Elite Dangerous',
    "No Man's Sky",
    'EVE Online',
    'X4 Foundations',
    'Starfield',
  ],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'bestspacesim.com',
    title: 'Best Space Sim Games 2026',
    description:
      "Independent rankings of the top space sims of 2026 — Star Citizen, Elite Dangerous, No Man's Sky, EVE Online, X4, Starfield.",
    images: ['/images/hero/hero-01.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Space Sim Games 2026',
    description:
      "Independent rankings of the top space sims of 2026 — Star Citizen, Elite Dangerous, No Man's Sky, EVE Online, X4, Starfield.",
    images: ['/images/hero/hero-01.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
