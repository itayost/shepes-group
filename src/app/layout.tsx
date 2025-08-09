import WhatsAppButton from '@/components/common/WhatsAppButton';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';
import { Heebo, Rubik } from 'next/font/google';
import './globals.css';

// פונטים עבריים
const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
});

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'נדל"ן חיפה',
    'מתווך חיפה',
    'דירות למכירה חיפה',
    'דירות להשכרה חיפה',
    'נדל"ן בצפון',
    'מכירת דירה חיפה',
    'קניית דירה חיפה',
    'הערכת שווי נדל"ן',
    'ייעוץ נדל"ן חיפה',
    'שפס נדל"ן',
    'גלית שפס',
    'חיים שפס'
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: SITE_CONFIG.logo, type: 'image/png' }
    ],
    apple: [
      { url: SITE_CONFIG.logo }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${rubik.variable}`}>
      <head>
        {/* תגי Meta נוספים */}
        <meta name="theme-color" content="#f59e0b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Schema.org לנדל"ן */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.description,
              url: SITE_CONFIG.url,
              logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
              image: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
              telephone: SITE_CONFIG.phone,
              email: SITE_CONFIG.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: SITE_CONFIG.address.street,
                addressLocality: SITE_CONFIG.address.city,
                postalCode: SITE_CONFIG.address.zip,
                addressCountry: 'IL',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'חיפה',
                },
                {
                  '@type': 'State',
                  name: 'צפון',
                }
              ],
              priceRange: '₪₪₪',
              sameAs: Object.values(SITE_CONFIG.social),
            }),
          }}
        />
      </head>
      <body className={`${heebo.className} antialiased min-h-screen flex flex-col`}>
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
        
        {/* Google Analytics - החלף את ה-ID */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}