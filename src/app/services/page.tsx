import ServicesBentoGrid from '@/components/services/ServicesBentoGrid';
import ServicesDetailedSection from '@/components/services/ServicesDetailedSection';
import ServicesHeroSection from '@/components/services/ServicesHeroSection';
import ServicesProcessSection from '@/components/services/ServicesProcessSection';
import ServicesStatisticsSection from '@/components/services/ServicesStatisticsSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'השירותים שלנו | ' + SITE_CONFIG.name,
  description: 'שירותי נדל"ן מקיפים - מכירה, קנייה, השכרה והערכת שווי נכסים בחיפה והצפון',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServicesHeroSection />

      {/* Services Bento Grid */}
      <ServicesBentoGrid />

      {/* Process Section */}
      <ServicesProcessSection />

      {/* Statistics Section */}
      <ServicesStatisticsSection />

      {/* Detailed Services Section */}
      <ServicesDetailedSection />
    </main>
  );
}