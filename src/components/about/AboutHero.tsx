// File: src/components/about/AboutHero.tsx

'use client';

import SharedHero from '@/components/common/SharedHero';
import {
  CheckCircle,
  TrendingUp,
  Users
} from 'lucide-react';

const AboutHero = () => {
  // Team highlights
  const highlights = [
    { icon: CheckCircle, text: 'ליווי אישי ומקצועי' },
    { icon: TrendingUp, text: 'ידע שוק מעמיק' },
    { icon: Users, text: 'צוות מנוסה ומסור' }
  ];

  return (
    <SharedHero
      badge="הצוות שלנו"
      title="צוות שפס גרופ"
      subtitle={
        <>
          צוות מומחה נדל״ן מקצועי ומנוסה עם
          <span className="text-text-gold font-semibold"> מעל 10 שנות ניסיון</span>
          <br className="hidden md:block" />
          בשוק הנדל״ן החיפאי והסביבה
        </>
      }
      features={highlights}
      size="md"
      centered={true}
    />
  );
};

export default AboutHero;