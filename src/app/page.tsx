import CTASection from '@/components/home/CTASection';
import FeaturedSoldProperties from '@/components/home/FeaturedSoldProperties';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: `${SITE_CONFIG.name} - מתווך נדל"ן יוקרתי בחיפה`,
  description: SITE_CONFIG.description,
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - מסך פתיחה מרשים */}
      <HeroSection />
      
      {/* Services Section - שירותים על רקע שחור */}
      <div className="relative bg-gradient-to-b from-black via-dark-950 to-black">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 to-transparent opacity-50" />
        <ServicesPreview />
      </div>
      
      {/* Featured Properties - נכסים על רקע כהה עם אפקט זהב */}
      <div className="relative bg-dark-950">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>
        <FeaturedSoldProperties />
      </div>
      
      {/* Why Choose Us - סיבות לבחור בנו */}
      <div className="relative bg-gradient-to-b from-dark-950 to-black">
        <WhyChooseUs />
      </div>
      
      {/* Testimonials - המלצות לקוחות */}
      <div className="relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent" />
        <Testimonials />
      </div>
      
      {/* CTA Section - קריאה לפעולה */}
      <CTASection />
    </main>
  );
}