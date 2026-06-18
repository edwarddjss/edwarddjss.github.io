import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google';
import { Nav } from '@/src/components/Nav';
import { Footer } from '@/src/components/Footer';
import ClickSpark from '@/src/components/ClickSpark';
import { SITE } from '@/src/data/about';
import '@/src/theme.css';

// Self-hosted at build time, no external font request at runtime, which keeps
// the site fully static and fast on GitHub Pages.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: 'edwarddjss.me',
  description: SITE.description,
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }],
  },
  openGraph: {
    title: 'edwarddjss.me',
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'edwarddjss.me',
    description: SITE.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>
        <ClickSpark sparkColor="#aab0ff" sparkSize={9} sparkRadius={16} sparkCount={8} duration={420}>
          <Nav />
          {children}
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
