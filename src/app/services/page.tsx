import ServicesCTASection from '@/components/services/ServicesCTASection';
import ServicesDetailedSection from '@/components/services/ServicesDetailedSection';
import ServicesFAQ from '@/components/services/ServicesFAQ';
import ServicesHeroSection from '@/components/services/ServicesHeroSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'השירותים שלנו | ' + SITE_CONFIG.name,
  description: 'שירותי נדל"ן יוקרתיים - מכירה, קנייה, השכרה והערכת שווי נכסים בחיפה והצפון',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section - מסך פתיחה מרשים */}
      <ServicesHeroSection />

      {/* Detailed Services Section - שירותים מפורטים */}
      <div className="relative bg-gradient-to-b from-black via-dark-950 to-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full max-w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl translate-x-1/2" />
        </div>
        <ServicesDetailedSection />
      </div>

      {/* FAQ Section - שאלות נפוצות */}
      <div className="relative bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <ServicesFAQ />
      </div>

      {/* CTA Section - קריאה לפעולה */}
      <ServicesCTASection />
    </main>
  );
}