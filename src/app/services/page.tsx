// File: src/app/services/page.tsx

import ServicesDetailedSection from '@/components/services/ServicesDetailedSection';
import ServicesHeroSection from '@/components/services/ServicesHeroSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'השירותים שלנו | ' + SITE_CONFIG.name,
  description: 'שירותי נדל"ן מקיפים - מכירה, קנייה, השכרה והערכת שווי נכסים בחיפה והצפון',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      {/* Hero Section */}
      <ServicesHeroSection />

      {/* Detailed Services Section */}
      <ServicesDetailedSection />

    </main>
  );
}
