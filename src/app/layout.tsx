import Analytics from '@/components/common/Analytics';
import CookieConsent from '@/components/common/CookieConsent';
import { generateSEO, Schema } from '@/components/common/SEO';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Inter, Rubik } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const rubik = Rubik({ 
  subsets: ['hebrew'],
  variable: '--font-rubik',
});

export const metadata = generateSEO();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <Schema 
          type="Organization" 
          data={{
            // Additional organization data can go here
          }} 
        />
      </head>
      <body className={`${inter.variable} ${rubik.variable} font-sans`}>
        <Analytics />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}