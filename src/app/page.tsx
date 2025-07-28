import CTASection from '@/components/home/CTASection';
import FeaturedSoldProperties from '@/components/home/FeaturedSoldProperties';
import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: `${SITE_CONFIG.name} - מתווך נדל"ן מוביל בחיפה`,
  description: SITE_CONFIG.description,
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - תמונת רקע גדולה עם כותרת */}
      <HeroSection />
      
      {/* סקשן שירותים - הצגת 4 השירותים העיקריים */}
      <ServicesPreview />
      
      {/* נכסים מובילים שמכרנו - גלריה של נכסים */}
      <FeaturedSoldProperties />
      
      {/* למה לבחור בנו - 4 סיבות עיקריות */}
      <WhyChooseUs />
      
      {/* המלצות לקוחות */}
      <Testimonials />
      
      {/* קריאה לפעולה - יצירת קשר */}
      <CTASection />
    </main>
  );
}