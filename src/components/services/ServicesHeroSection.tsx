// File: src/components/services/ServicesHeroSection.tsx

'use client';

import SharedHero from '@/components/common/SharedHero';
import Button from '@/components/ui/Button';
import {
  ArrowDown,
  Phone
} from 'lucide-react';
import Link from 'next/link';

const ServicesHero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actions = (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/contact">
        <Button 
          size="lg" 
          variant="primary"
          icon={Phone}
        >
          קבל ייעוץ חינם
        </Button>
      </Link>
      <Button 
        size="lg" 
        variant="outline"
        icon={ArrowDown}
        onClick={scrollToServices}
      >
        גלה את השירותים
      </Button>
    </div>
  );

  return (
    <SharedHero
      badge="פתרונות נדל״ן"
      title="השירותים שלנו"
      subtitle="ליווי מקצועי ואישי בכל שלב של המסע הנדל״ני שלכם"
      actions={actions}
      size="md"
      centered={true}
    />
  );
};

export default ServicesHero;