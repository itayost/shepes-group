// File: src/app/page.tsx

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
    <main className="min-h-screen bg-gradient-to-b from-background via-background-secondary to-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesPreview />
      
      {/* Featured Properties */}
      <FeaturedSoldProperties />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* CTA Section */}
      <CTASection />
    </main>
  );
}