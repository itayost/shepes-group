import ServicesDetailedSection from '@/components/services/ServicesDetailedSection';
import ServicesProcessSection from '@/components/services/ServicesProcessSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'השירותים שלנו | ' + SITE_CONFIG.name,
  description: 'שירותי נדל"ן מקיפים - מכירה, קנייה, השכרה והערכת שווי נכסים בחיפה והצפון',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}

      {/* Process Section */}
      <ServicesProcessSection />

      {/* Detailed Services Section */}
      <ServicesDetailedSection />

    </main>
  );
}