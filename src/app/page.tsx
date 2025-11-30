// File: src/app/page.tsx

import CTASection from '@/components/home/CTASection';
import FeaturedSoldProperties from '@/components/home/FeaturedSoldProperties';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import Testimonials from '@/components/home/Testimonials';
import { SITE_CONFIG } from '@/lib/constants';

const pageTitle = `${SITE_CONFIG.name} - צוות מוביל לשיווק נדל״ן בחיפה`;
const pageDescription = `${SITE_CONFIG.name} - צוות מוביל לשיווק נדל״ן בחיפה. גלית וחיים שפס, מומחי נדל״ן עם 18+ שנות ניסיון במכירה, קנייה והשכרת נכסים בחיפה והצפון.`;

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'צוות מוביל לשיווק נדל״ן בחיפה',
    'שיווק נדל״ן חיפה',
    'מתווך נדל״ן חיפה',
    'שפס גרופ',
    'גלית שפס',
    'חיים שפס',
    'מכירת דירות חיפה',
    'קניית דירה בחיפה',
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: SITE_CONFIG.url,
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background-secondary to-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesPreview />
      
      {/* Featured Properties */}
      <FeaturedSoldProperties />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* CTA Section */}
      <CTASection />
    </main>
  );
}