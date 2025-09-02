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
      title="צוות שפס נדל&quot;ן"
      subtitle={
        <>
          צוות מתווכים מקצועי ומנוסה עם 
          <span className="text-text-gold font-semibold"> מעל 18 שנות ניסיון</span>
          <br className="hidden md:block" />
          בשוק הנדל&quot;ן בחיפה והצפון
        </>
      }
      features={highlights}
      size="md"
      centered={true}
    />
  );
};

export default AboutHero;