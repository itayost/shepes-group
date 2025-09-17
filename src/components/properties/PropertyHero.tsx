// File: src/components/properties/PropertyHero.tsx

'use client';

import SharedHero from '@/components/common/SharedHero';
import {
  Award,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const PropertyHero = () => {
  const features = [
    { icon: CheckCircle, text: 'מחיר הטוב ביותר' },
    { icon: TrendingUp, text: 'שיווק מקצועי' },
    { icon: Award, text: 'ליווי עד הסוף' }
  ];

  return (
    <SharedHero
      badge="סיפורי הצלחה"
      title="עסקאות אחרונות"
      subtitle={
        <>
          מבחר מעסקאות האחרונות שביצענו בהצלחה
          <br className="hidden md:block" />
          <span className="text-text-gold font-semibold">כל עסקה - סיפור הצלחה</span>
        </>
      }
      features={features}
      size="md"
      centered={true}
    />
  );
};

export default PropertyHero;