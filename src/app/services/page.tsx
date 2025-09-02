// File: src/app/services/page.tsx

import ServicesDetailedSection from '@/components/services/ServicesDetailedSection';
import ServicesFAQ from '@/components/services/ServicesFAQ';
import ServicesHeroSection from '@/components/services/ServicesHeroSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'השירותים שלנו | ' + SITE_CONFIG.name,
  description: 'שירותי נדל"ן מקיפים - מכירה, קנייה, השכרה והערכת שווי נכסים בחיפה והצפון. ליווי מקצועי ואישי עם ניסיון של 18+ שנים',
  keywords: ['שירותי נדל"ן', 'מכירת נכס', 'קניית דירה', 'השכרה', 'הערכת שווי', 'שפס נדל"ן', 'חיפה'],
};

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-background via-background-secondary to-background">
      {/* Hero Section - Clean and Simple */}
      <ServicesHeroSection />

      {/* Services Detailed - Mobile First with Full Info */}
      <ServicesDetailedSection />

      {/* FAQ Section - Clean Accordion */}
      <ServicesFAQ />
    </main>
  );
}
